import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { map } from "rxjs/operators";

import { DataColName, TableStore } from "../../table.store";

@Component({
  selector: "app-table-search",
  templateUrl: "./table-search.component.html",
  styleUrls: ["./table-search.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableSearchComponent implements OnInit {
  @Input()
  dataCol: DataColName = "";

  searchTerm$ = this.tableStore.searchTerms$.pipe(
    map(searchTerms => searchTerms.find(searchTerm => searchTerm.dataCol === this.dataCol)?.term || "")
  );
  onSearchTermChanged(value: string) {
    this.tableStore.updateSearchTerm({ dataCol: this.dataCol, term: value });
  }

  constructor(private tableStore: TableStore) {}

  ngOnInit(): void {}
}
