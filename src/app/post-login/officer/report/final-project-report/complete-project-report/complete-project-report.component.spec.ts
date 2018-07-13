import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteProjectReportComponent } from './complete-project-report.component';

describe('CompleteProjectReportComponent', () => {
  let component: CompleteProjectReportComponent;
  let fixture: ComponentFixture<CompleteProjectReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteProjectReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteProjectReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
