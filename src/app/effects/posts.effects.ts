import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "../services/json-placeholder/posts.service";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[App Component] Load Posts"),
      mergeMap(() =>
        this.postsService.getAll().pipe(
          map(posts => ({ type: "[App Component] Posts Loaded Success", payload: posts })),
          catchError(() => of({ type: "[Posts API] Posts Loaded Error" }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private postsService: PostsService) {}
}
