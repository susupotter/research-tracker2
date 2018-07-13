import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFinalComponent } from './submit-final.component';

describe('SubmitFinalComponent', () => {
  let component: SubmitFinalComponent;
  let fixture: ComponentFixture<SubmitFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
