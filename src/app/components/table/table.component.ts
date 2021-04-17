import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { DataColName, DataRow, TableStore } from "./table.store";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TableStore],
})
export class TableComponent implements OnInit {
  @Input() set dataRows(value: DataRow[] | null) {
    // TODO: get rid of null
    this.tableStore.updateDataRows(value || []);
  }

  vm$ = this.tableStore.vm$;

  onSearchTermChanged(dataCol: DataColName, term: string) {
    this.tableStore.updateSearchTerm({ dataCol, term });
  }

  onCdkDropListDropped(cdkDragDrop: CdkDragDrop<HTMLTableRowElement>) {
    const { previousIndex, currentIndex } = cdkDragDrop;
    this.tableStore.moveDataCol({ previousIndex, currentIndex });
  }

  constructor(private tableStore: TableStore) {}

  ngOnInit(): void {}
}
