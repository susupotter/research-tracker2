import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorFieldComponent } from './selector-field.component';

describe('SelectorFieldComponent', () => {
  let component: SelectorFieldComponent;
  let fixture: ComponentFixture<SelectorFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
