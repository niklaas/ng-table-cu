import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Post } from "./services/json-placeholder/post.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private store: Store<{ posts: Post[] }>) {}

  ngOnInit() {
    this.store.dispatch({ type: "[App Component] Load Posts" });
  }
}
