import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThoughtComponent } from './card-thought.component';

describe('CardThoughtComponent', () => {
  let component: CardThoughtComponent;
  let fixture: ComponentFixture<CardThoughtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardThoughtComponent]
    });
    fixture = TestBed.createComponent(CardThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
