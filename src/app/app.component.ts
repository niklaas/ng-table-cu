import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Post } from "./services/json-placeholder/post.model";

import * as postsActions from "./store/actions/posts.actions";

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

  constructor(private store: Store<{ posts: Post[] }>) {}
}
