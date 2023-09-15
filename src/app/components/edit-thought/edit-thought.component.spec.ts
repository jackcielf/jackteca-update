import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThoughtComponent } from './edit-thought.component';

describe('EditThoughtComponent', () => {
  let component: EditThoughtComponent;
  let fixture: ComponentFixture<EditThoughtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditThoughtComponent]
    });
    fixture = TestBed.createComponent(EditThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
