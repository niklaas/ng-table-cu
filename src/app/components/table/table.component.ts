import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { ChangeDetectionStrategy, Component, Input, OnInit, Output } from "@angular/core";

import { DataColName, DataRow, TableStore } from "./table.store";

import { Sortings } from "../../shared/sortables/models/sortings.model";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TableStore],
})
export class TableComponent {
  /** The data to display */
  @Input() set dataRows(value: DataRow[] | null) {
    this.tableStore.updateDataRows(value || []);
  }

  /** Emits the order of columns from left to right every time it is changed */
  @Output() colsOrderChange = this.tableStore.dataCols$;

  /** Emits all search terms every time any is changed */
  @Output() searchTermsChange = this.tableStore.searchTerms$;

  /** Emits all sortings every time any is changed */
  @Output() sortingsChange = this.tableStore.sortings$;

  vm$ = this.tableStore.vm$;

  onSearchTermChanged(dataCol: DataColName, term: string) {
    this.tableStore.updateSearchTerm({ dataCol, term });
  }

  onCdkDropListDropped(cdkDragDrop: CdkDragDrop<HTMLTableRowElement>) {
    const { previousIndex, currentIndex } = cdkDragDrop;
    this.tableStore.moveDataCol({ previousIndex, currentIndex });
  }

  onSortingsChanged(sortings: Sortings) {
    this.tableStore.updateSortings(Object.entries(sortings).map(([dataCol, sorting]) => ({ dataCol, sorting })));
  }

  constructor(private tableStore: TableStore) {}
}
