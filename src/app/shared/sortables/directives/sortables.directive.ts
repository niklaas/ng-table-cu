import { Directive, Output } from "@angular/core";

import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { debounceTime, map, switchMap } from "rxjs/operators";

import { SortableComponent } from "../components/sortable/sortable.component";
import { Sortings } from "../models/sortings.model";

/**
 * Container that allows all its {@link SortableComponent} to register. Every
 * time a {@link SortableComponent} changes its sorting, the container emits a
 * {@link #sortingsChange}.
 */
@Directive({
  selector: "[appSortables]",
})
export class SortablesDirective {
  private _sortablesSource = new BehaviorSubject<SortableComponent[]>([]);
  sortables$ = this._sortablesSource.asObservable();

  get sortables() {
    return this._sortablesSource.value;
  }

  @Output() sortingsChange: Observable<Sortings> = this.sortables$.pipe(
    switchMap(sortables =>
      combineLatest(
        sortables.map(sortable =>
          sortable.sorting$.pipe(map(sorting => (sortable.id ? { [sortable.id]: sorting } : {})))
        )
      )
    ),
    map(s => s.reduce((acc, curr) => ({ ...acc, ...curr }), {})),
    debounceTime(100) // prevent useless item emissions
  );

  addSortable(sortable: SortableComponent): void {
    if (this._sortablesSource.value.some(s => s.id === sortable.id)) {
      throw new Error("SortableComponent with same id already added");
    }

    this._sortablesSource.next([...this._sortablesSource.value.filter(s => s !== sortable), sortable]);
  }

  constructor() {}
}
