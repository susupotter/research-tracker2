import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteProjectPublishedFormatReportComponent } from './complete-project-published-format-report.component';

describe('CompleteProjectPublishedFormatReportComponent', () => {
  let component: CompleteProjectPublishedFormatReportComponent;
  let fixture: ComponentFixture<CompleteProjectPublishedFormatReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteProjectPublishedFormatReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteProjectPublishedFormatReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
