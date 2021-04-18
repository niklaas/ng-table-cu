import { ComponentFixture, TestBed } from "@angular/core/testing";
import { EMPTY } from "rxjs";

import { TableSearchComponent } from "./table-search.component";

import { TableStore } from "../../table.store";

describe("TableSearchComponent", () => {
  let component: TableSearchComponent;
  let fixture: ComponentFixture<TableSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableSearchComponent],
      providers: [{ provide: TableStore, useValue: { searchTerms$: EMPTY } }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
