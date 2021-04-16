import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TableModule } from "./components/table/table.module";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { PostsEffects } from "./effects/posts.effects";
import { StoreModule } from "@ngrx/store";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([PostsEffects]),
    TableModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
