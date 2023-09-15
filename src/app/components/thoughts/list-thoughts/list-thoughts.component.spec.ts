import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThoughtsComponent } from './list-thoughts.component';

describe('ListThoughtsComponent', () => {
  let component: ListThoughtsComponent;
  let fixture: ComponentFixture<ListThoughtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListThoughtsComponent]
    });
    fixture = TestBed.createComponent(ListThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
