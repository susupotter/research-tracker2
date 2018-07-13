import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStudentReportComponent } from './project-student-report.component';

describe('ProjectStudentReportComponent', () => {
  let component: ProjectStudentReportComponent;
  let fixture: ComponentFixture<ProjectStudentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStudentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStudentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
