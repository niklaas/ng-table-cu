import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { provideMockStore } from "@ngrx/store/testing";
import { MockComponents } from "ng-mocks";
import { TableComponent } from "./components/table/table.component";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, MockComponents(TableComponent)],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
