import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonReadMoreComponent } from './button-read-more.component';

describe('ButtonReadMoreComponent', () => {
  let component: ButtonReadMoreComponent;
  let fixture: ComponentFixture<ButtonReadMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonReadMoreComponent]
    });
    fixture = TestBed.createComponent(ButtonReadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
