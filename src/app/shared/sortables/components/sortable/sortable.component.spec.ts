import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SortableComponent } from "./sortable.component";

describe("SortableComponent", () => {
  let component: SortableComponent;
  let fixture: ComponentFixture<SortableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableComponent);
    component = fixture.componentInstance;
    component.id = "foo";

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
