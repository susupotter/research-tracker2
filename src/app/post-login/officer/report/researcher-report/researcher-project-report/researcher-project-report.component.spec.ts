import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherProjectReportComponent } from './researcher-project-report.component';

describe('ResearcherProjectReportComponent', () => {
  let component: ResearcherProjectReportComponent;
  let fixture: ComponentFixture<ResearcherProjectReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearcherProjectReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearcherProjectReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
