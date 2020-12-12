import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayContactDetailsComponent } from './display-contact-details.component';

describe('DisplayContactDetailsComponent', () => {
  let component: DisplayContactDetailsComponent;
  let fixture: ComponentFixture<DisplayContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayContactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
