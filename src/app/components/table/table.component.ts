import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { DataRow, TableStore } from "./table.store";

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
    this.tableStore.setDataRows(value || []);
  }

  vm$ = this.tableStore.vm$;

  constructor(private tableStore: TableStore) {}

  ngOnInit(): void {}
}
