import { createAction, props } from "@ngrx/store";

import { DataColName, SearchTerm, Sorting } from "../../components/table/table.store";

export const changedColsOrder = createAction("[Table] Changed Order of Columns", props<{ dataCols: DataColName[] }>());
export const changedSearchTerms = createAction("[Table] Changed Search Terms", props<{ searchTerms: SearchTerm[] }>());
export const changedSortings = createAction("[Table] Changed Sorting", props<{ sortings: Sorting[] }>());
