import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { DataColName, SearchTerm, Sorting } from "./components/table/table.store";
import { Post } from "./services/json-placeholder/post.model";

import * as postsActions from "./store/actions/posts.actions";
import { changedColsOrder, changedSearchTerms, changedSortings } from "./store/actions/table.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  posts$: Observable<Post[]> = this.store.select(state => state.posts);

  ngOnInit() {
    this.store.dispatch(postsActions.load());
  }

  onColsOrderChanged(dataCols: DataColName[]): void {
    this.store.dispatch(changedColsOrder({ dataCols }));
  }

  onSearchTermsChanged(searchTerms: SearchTerm[]): void {
    this.store.dispatch(changedSearchTerms({ searchTerms }));
  }

  onSortingsChanged(sortings: Sorting[]): void {
    this.store.dispatch(changedSortings({ sortings }));
  }

  constructor(private store: Store<{ posts: Post[] }>) {}
}
