import { CdkDragDrop, copyArrayItem, moveItemInArray } from "@angular/cdk/drag-drop";
import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { map, withLatestFrom } from "rxjs/operators";

import produce from "immer";

export type DataColName = string | number;
export type DataRow = Record<DataColName, unknown>;
export type Sorting = { dataCol: DataColName; sorting: "none" | "asc" | "desc" };

/** Search term for a specific column */
export type SearchTerm = { dataCol: DataColName; term: string };

export interface TableState {
  /** The actual data */
  dataRows: ReadonlyArray<DataRow>;

  /**
   * Horizontal arrangement of columns from left to right;
   */
  dataCols: ReadonlyArray<DataColName>;

  /** The search terms per column */
  searchTerms: ReadonlyArray<SearchTerm>;

  /** The sortings of the columns */
  sortings: ReadonlyArray<Sorting>;
}

@Injectable()
export class TableStore extends ComponentStore<TableState> {
  constructor() {
    super({ dataRows: [], searchTerms: [], dataCols: [], sortings: [] });
  }

  hasSearchTerms$ = this.select(
    ({ searchTerms }) => !!searchTerms.length && searchTerms.some(searchTerm => searchTerm.term)
  );
  hasSortings$ = this.select(
    ({ sortings }) => !!sortings.length && sortings.some(sorting => sorting.sorting !== "none")
  );

  searchTerms$ = this.select(({ searchTerms }) => searchTerms);

  dataCols$ = this.select(({ dataCols }) => dataCols);
  dataRows$ = this.select(({ dataRows, searchTerms, sortings }) => ({
    dataRows,
    searchTerms,
    sortings,
  })).pipe(
    withLatestFrom(this.hasSearchTerms$, this.hasSortings$),
    map(([{ dataRows, searchTerms, sortings }, hasSearchTerms, hasSortings]) => {
      // To increase performance, sorting and/or filtering are only applied if necessary

      if (hasSearchTerms && hasSortings) {
        return [...dataRows.filter(this._filterWithSearchTerms(searchTerms))].sort(this._sortWithSortings(sortings));
      }

      if (hasSearchTerms) {
        return dataRows.filter(this._filterWithSearchTerms(searchTerms));
      }

      if (hasSortings) {
        return [...dataRows].sort(this._sortWithSortings(sortings));
      }

      return dataRows;
    })
  );

  updateDataRows = this.updater((state, dataRows: DataRow[]) => {
    const dataCols = Object.keys(dataRows[0] || {});

    return {
      ...state,
      dataRows,
      dataCols,
      searchTerms: dataCols.map(dataCol => ({ dataCol, term: "" })),
    };
  });
  moveDataCol = this.updater((state, movement: { previousIndex: number; currentIndex: number }) => ({
    ...state,
    dataCols: produce(state.dataCols, draftDataCols =>
      moveItemInArray(draftDataCols, movement.previousIndex, movement.currentIndex)
    ),
  }));
  updateSearchTerm = this.updater((state, searchTerm: SearchTerm) => {
    return {
      ...state,
      searchTerms: state.searchTerms.reduce<SearchTerm[]>((acc, curr) => {
        if (curr.dataCol === searchTerm.dataCol) {
          return [...acc, searchTerm];
        }

        return [...acc, curr];
      }, []),
    };
  });
  updateSorting = this.updater((state, sortings: Sorting[]) => ({ ...state, sortings }));

  vm$ = this.select(this.dataRows$, this.dataCols$, this.searchTerms$, (dataRows, dataCols, searchTerms) => ({
    dataRows,
    dataCols,
    searchTerms: dataCols.map(
      // Make sure that there is an entry for each column (even if the term is empty)
      dataCol => searchTerms.find(searchTerm => searchTerm.dataCol === dataCol) || { dataCol, term: "" }
    ),
  }));

  _searchTermOfCol(searchTerms: readonly SearchTerm[], col: DataColName) {
    return searchTerms.find(searchTerm => searchTerm.dataCol === col)?.term || "";
  }

  _filterWithSearchTerms(searchTerms: readonly SearchTerm[]) {
    // TODO: filtering can be improved b/c keeps on checking rows that are
    // already filtered out

    return (dataRow: DataRow) =>
      Object.entries(dataRow)
        .map(([dataColName, cell]) => ({
          cell,
          colSearchTerm: this._searchTermOfCol(searchTerms, dataColName),
        }))
        .filter(({ colSearchTerm }) => colSearchTerm)
        .every(({ colSearchTerm, cell }) => {
          if (typeof cell === "string") {
            return cell.includes(colSearchTerm);
          }

          if (typeof cell === "number") {
            // TODO: type casting might fail?
            return cell === +colSearchTerm;
          }

          // If the cell is of some other type show it, b/c searching through
          // it is not straightforward
          return true;
        });
  }

  private _sortWithSortings(sortings: readonly Sorting[]) {
    return (a: DataRow, b: DataRow) => {
      // NOTE: only sorting by single column supported
      const { dataCol, sorting } = sortings.find(({ sorting }) => sorting !== "none") || {};

      if (!dataCol || !sorting || sorting === "none") {
        return 0;
      }

      const switcher = sorting === "asc" ? 1 : -1;

      // Sort numbers and strings only, everything else is not straightforward
      if (
        (typeof a[dataCol] === "number" || typeof a[dataCol] === "string") &&
        (typeof b[dataCol] === "number" || typeof b[dataCol] === "string")
      ) {
        if ((a[dataCol] as number | string) < (b[dataCol] as number | string)) {
          return -1 * switcher;
        }

        if ((a[dataCol] as number | string) > (b[dataCol] as number | string)) {
          return 1 * switcher;
        }
      }

      return 0;
    };
  }
}
