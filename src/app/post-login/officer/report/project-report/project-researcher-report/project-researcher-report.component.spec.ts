import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectResearcherReportComponent } from './project-researcher-report.component';

describe('ProjectResearcherReportComponent', () => {
  let component: ProjectResearcherReportComponent;
  let fixture: ComponentFixture<ProjectResearcherReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectResearcherReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectResearcherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
