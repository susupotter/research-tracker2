import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectApproveReportComponent } from './project-approve-report.component';

describe('ProjectApproveReportComponent', () => {
  let component: ProjectApproveReportComponent;
  let fixture: ComponentFixture<ProjectApproveReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectApproveReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectApproveReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
