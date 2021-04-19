import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TableModule } from "./components/table/table.module";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { PostsEffects } from "./store/effects/posts.effects";
import { postsReducer } from "./store/reducers/posts.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ posts: postsReducer }),
    EffectsModule.forRoot([PostsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    TableModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
