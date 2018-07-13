import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteProjectResearcherReportComponent } from './complete-project-researcher-report.component';

describe('CompleteProjectResearcherReportComponent', () => {
  let component: CompleteProjectResearcherReportComponent;
  let fixture: ComponentFixture<CompleteProjectResearcherReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteProjectResearcherReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteProjectResearcherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
