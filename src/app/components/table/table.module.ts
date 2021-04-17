import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table.component";
import { TableSearchComponent } from "./components/table-search/table-search.component";
import { FormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [TableComponent, TableSearchComponent],
  exports: [TableComponent],
  imports: [CommonModule, FormsModule, DragDropModule],
})
export class TableModule {}
