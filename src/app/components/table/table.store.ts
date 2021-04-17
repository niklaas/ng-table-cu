import { CdkDragDrop, copyArrayItem, moveItemInArray } from "@angular/cdk/drag-drop";
import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { map } from "rxjs/operators";

import produce from "immer";

export type DataColName = string | number;
export type DataRow = Record<DataColName, unknown>;

/** Search term for a specific column */
export type SearchTerm = { dataCol: DataColName; term: string };

export interface TableState {
  /** The actual data */
  dataRows: ReadonlyArray<DataRow>;

  /**
   * The columns
   *
   * NOTE: This is used for horizontal ordering.
   */
  dataCols: ReadonlyArray<DataColName>;

  /** The search terms per column */
  searchTerms: ReadonlyArray<SearchTerm>;
}

@Injectable()
export class TableStore extends ComponentStore<TableState> {
  constructor() {
    super({ dataRows: [], searchTerms: [], dataCols: [] });
  }

  dataRows$ = this.select(({ dataRows }) => dataRows);
  searchTerms$ = this.select(({ searchTerms }) => searchTerms);

  dataCols$ = this.select(({ dataCols }) => dataCols);
  dataRowsFiltered$ = this.select(({ dataRows, searchTerms }) => ({ dataRows, searchTerms })).pipe(
    map(({ dataRows, searchTerms }) =>
      dataRows.filter(dataRow => {
        // TODO: filtering can be improved b/c keeps on checking rows that are
        // already filtered out

        const searchTermOfCol = (col: DataColName) =>
          searchTerms.find(searchTerm => searchTerm.dataCol === col)?.term || "";

        return Object.entries(dataRow)
          .map(([dataColName, cell]) => ({ dataColName, cell, colSearchTerm: searchTermOfCol(dataColName) }))
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
      })
    )
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

  vm$ = this.select(
    this.dataRows$,
    this.dataRowsFiltered$,
    this.dataCols$,
    this.searchTerms$,
    (dataRows, dataRowsFiltered, dataCols, searchTerms) => ({
      dataRows,
      dataRowsFiltered,
      dataCols,
      searchTerms: dataCols.map(
        dataCol => searchTerms.find(searchTerm => searchTerm.dataCol === dataCol) || { dataCol, term: "" }
      ),
    })
  );
}
