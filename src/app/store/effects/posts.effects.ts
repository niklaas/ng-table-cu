import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { PostsService } from "../../services/json-placeholder/posts.service";

import { of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";

import * as postsActions from "../actions/posts.actions";

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(postsActions.load),
      mergeMap(() =>
        this.postsService.getAll().pipe(
          map(posts => postsActions.loadedSuccess({ posts })),
          catchError(() => of(postsActions.loadedError()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private postsService: PostsService) {}
}
