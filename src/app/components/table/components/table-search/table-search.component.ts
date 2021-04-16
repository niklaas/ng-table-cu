import { Component, OnInit } from "@angular/core";

import { TableStore } from "../../table.store";

@Component({
  selector: "app-table-search",
  templateUrl: "./table-search.component.html",
  styleUrls: ["./table-search.component.css"],
})
export class TableSearchComponent implements OnInit {
  // TODO: make Directive out of this
  searchTerm$ = this.tableStore.searchTerm$;
  onSearchTermChanged(value: string) {
    this.tableStore.setSearchTerm(value);
  }

  dataCols$ = this.tableStore.dataCols$;

  constructor(private tableStore: TableStore) {}

  ngOnInit(): void {}
}
