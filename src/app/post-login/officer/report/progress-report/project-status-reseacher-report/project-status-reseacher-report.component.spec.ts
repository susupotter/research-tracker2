import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectStatusReseacherReportComponent } from './project-status-reseacher-report.component';

describe('ProjectStatusReseacherReportComponent', () => {
  let component: ProjectStatusReseacherReportComponent;
  let fixture: ComponentFixture<ProjectStatusReseacherReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectStatusReseacherReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectStatusReseacherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
