import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SortablesDirective } from "./sortables/directives/sortables.directive";
import { SortableComponent } from "./sortables/components/sortable/sortable.component";

@NgModule({
  declarations: [SortablesDirective, SortableComponent],
  imports: [CommonModule],
  exports: [SortablesDirective, SortableComponent],
})
export class SharedModule {}
