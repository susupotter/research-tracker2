import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTypeReportComponent } from './project-type-report.component';

describe('ProjectTypeReportComponent', () => {
  let component: ProjectTypeReportComponent;
  let fixture: ComponentFixture<ProjectTypeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTypeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTypeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
