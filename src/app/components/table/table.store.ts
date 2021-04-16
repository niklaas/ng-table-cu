import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { map } from "rxjs/operators";

export type DataRow = Record<string | number, unknown>;

export interface TableState {
  /** The actual data */
  dataRows: DataRow[];

  /** The search term */
  searchTerm: string;
}

@Injectable()
export class TableStore extends ComponentStore<TableState> {
  constructor() {
    super({ dataRows: [], searchTerm: "" });
  }

  searchTerm$ = this.select(({ searchTerm }) => searchTerm);
  setSearchTerm = this.updater((state, searchTerm: string) => ({ ...state, searchTerm }));

  dataRows$ = this.select(({ dataRows }) => dataRows);
  setDataRows = this.updater((state, dataRows: DataRow[]) => ({ ...state, dataRows }));

  dataCols$ = this.select(({ dataRows }) => dataRows).pipe(map(([firstRow, ..._]) => Object.keys(firstRow || {})));

  vm$ = this.select(this.dataRows$, this.dataCols$, this.searchTerm$, (dataRows, dataCols, searchTerm) => ({
    dataRows: dataRows.filter(dataRow => (dataRow["title"] as string).includes(searchTerm)),
    dataCols,
  }));
}
