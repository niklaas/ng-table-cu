import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortablesDirective } from './directives/sortables.directive';
import { SortableDirective } from './directives/sortable.directive';



@NgModule({
  declarations: [
    SortablesDirective,
    SortableDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
