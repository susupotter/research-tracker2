import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherResearcherReportComponent } from './researcher-researcher-report.component';

describe('ResearcherResearcherReportComponent', () => {
  let component: ResearcherResearcherReportComponent;
  let fixture: ComponentFixture<ResearcherResearcherReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearcherResearcherReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearcherResearcherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
