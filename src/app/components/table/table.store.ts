import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { map } from "rxjs/operators";

export type DataRow = Record<string, unknown>;

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

  setDataRows = this.updater((state, dataRows: DataRow[]) => ({ ...state, dataRows }));

  dataRows$ = this.select(({ dataRows }) => dataRows);
  dataCols$ = this.select(({ dataRows }) => dataRows).pipe(
    // TODO: think about Objects missing properties
    map(([firstRow, ..._]) => Object.keys(firstRow || {})) // TODO: maybe possible to get rid of null check here
  );

  vm$ = this.select(this.dataRows$, this.dataCols$, (dataRows, dataCols) => ({ dataRows, dataCols }));
}
