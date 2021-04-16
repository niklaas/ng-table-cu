import { createReducer, on } from "@ngrx/store";
import { Post } from "../../services/json-placeholder/post.model";

import * as postsActions from "../actions/posts.actions";

export const initialState: ReadonlyArray<Post> = [];

export const postsReducer = createReducer(
  initialState,
  on(postsActions.loadedSuccess, (_, { posts }) => [...posts])
);
