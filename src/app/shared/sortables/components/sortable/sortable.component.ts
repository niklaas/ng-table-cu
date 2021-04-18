import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit, Optional, SkipSelf } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SortablesDirective } from "../../directives/sortables.directive";
import { Sorting } from "../../models/sorting.model";

@Component({
  selector: "app-sortable",
  templateUrl: "./sortable.component.html",
  styleUrls: ["./sortable.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    "[class.sort-asc]": "_sortingSource.value === 'asc'",
    "[class.sort-desc]": "_sortingSource.value === 'desc'",
  },
})
export class SortableComponent implements OnInit {
  @Input() id: string | number | undefined;

  private _sortingSource = new BehaviorSubject<Sorting>("none");
  sorting$ = this._sortingSource.asObservable();

  @HostListener("click")
  onClick(): void {
    this.toggleSorting();
  }

  ngOnInit(): void {
    if (!this.id) {
      throw new Error("SortableComponent requires property `id` to be set");
    }

    if (this.container) {
      this.container.addSortable(this);
    }
  }

  toggleSorting(): void {
    this._resetSortingOfSiblings();

    if (this._sortingSource.value === "asc") {
      this._sortingSource.next("desc");
      return;
    }

    if (this._sortingSource.value === "desc") {
      this._sortingSource.next("none");
      return;
    }

    this._sortingSource.next("asc");
  }

  private _resetSorting(): void {
    this._sortingSource.next("none");
  }

  private _resetSortingOfSiblings(): void {
    this.container.sortables.filter(sortable => sortable !== this).forEach(sortable => sortable._resetSorting());
  }

  constructor(@Optional() @SkipSelf() public container: SortablesDirective) {}
}
