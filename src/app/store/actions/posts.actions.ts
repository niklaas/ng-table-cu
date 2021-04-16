import { createAction, props } from "@ngrx/store";
import { Post } from "../../services/json-placeholder/post.model";

export const load = createAction("[Posts] Load");
export const loadedSuccess = createAction("[Posts] Loaded Success", props<{ posts: Post[] }>());
export const loadedError = createAction("[Posts] Loaded Error");
