import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryContactComponent } from './entry-contact.component';

describe('EntryContactComponent', () => {
  let component: EntryContactComponent;
  let fixture: ComponentFixture<EntryContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
