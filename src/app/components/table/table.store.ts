import { copyArrayItem, moveItemInArray } from "@angular/cdk/drag-drop";
import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { map, withLatestFrom } from "rxjs/operators";

import produce from "immer";

export type DataColName = string | number;

/** Row of actual data to display */
export type DataRow = Record<DataColName, unknown>;

/** Sorting for a specific column */
export type Sorting = { dataCol: DataColName; sorting: "none" | "asc" | "desc" };

/** Search term for a specific column */
export type SearchTerm = { dataCol: DataColName; term: string };

export interface TableState {
  /** The actual data */
  dataRows: DataRow[];

  /** Horizontal arrangement of columns from left to right; */
  dataCols: DataColName[];

  /** The search terms per column */
  searchTerms: SearchTerm[];

  /** The sortings of the columns */
  sortings: Sorting[];
}

@Injectable()
export class TableStore extends ComponentStore<TableState> {
  constructor() {
    super({ dataRows: [], searchTerms: [], dataCols: [], sortings: [] });
  }

  readonly hasSearchTerms$ = this.select(
    ({ searchTerms }) => !!searchTerms.length && searchTerms.some(searchTerm => searchTerm.term)
  );
  readonly hasSortings$ = this.select(
    ({ sortings }) => !!sortings.length && sortings.some(sorting => sorting.sorting !== "none")
  );

  readonly dataCols$ = this.select(({ dataCols }) => dataCols);
  readonly dataRows$ = this.select(({ dataRows, searchTerms, sortings }) => ({
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
  readonly searchTerms$ = this.select(({ searchTerms }) => searchTerms);
  readonly sortings$ = this.select(({ sortings }) => sortings);

  readonly updateDataRows = this.updater((state, dataRows: DataRow[]) => {
    // NOTE: Updating data rows resets both column ordering and search terms.

    const dataCols = this._dataColsFromDataRows(dataRows);

    return {
      ...state,
      dataRows,
      dataCols,
      searchTerms: this._searchTermsFromDataCols(dataCols),
    };
  });
  readonly moveDataCol = this.updater((state, movement: { previousIndex: number; currentIndex: number }) => ({
    ...state,
    dataCols: produce(state.dataCols, draftDataCols =>
      moveItemInArray(draftDataCols, movement.previousIndex, movement.currentIndex)
    ),
  }));
  readonly updateSearchTerm = this.updater((state, searchTerm: SearchTerm) => {
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
  readonly updateSortings = this.updater((state, sortings: Sorting[]) => ({
    ...state,
    sortings,
  }));

  readonly vm$ = this.select(this.dataRows$, this.dataCols$, this.searchTerms$, (dataRows, dataCols, searchTerms) => ({
    dataRows,
    dataCols,
    searchTerms,
  }));

  private _dataColsFromDataRows(dataRows: DataRow[]): DataColName[] {
    return Object.keys(dataRows[0] || []);
  }

  private _searchTermsFromDataCols(dataCols: DataColName[]): SearchTerm[] {
    return dataCols.map(dataCol => ({ dataCol, term: "" }));
  }

  private _searchTermOfCol(searchTerms: SearchTerm[], col: DataColName) {
    return searchTerms.find(searchTerm => searchTerm.dataCol === col)?.term || "";
  }

  private _filterWithSearchTerms(searchTerms: SearchTerm[]) {
    // IDEA: filtering can be improved b/c keeps on checking rows that are
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
            return cell === +colSearchTerm;
          }

          // If the cell is of some other type show it, b/c searching through
          // it is not straightforward
          return true;
        });
  }

  private _sortWithSortings(sortings: Sorting[]) {
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
