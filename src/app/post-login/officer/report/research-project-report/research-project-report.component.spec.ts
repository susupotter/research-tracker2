import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProjectReportComponent } from './research-project-report.component';

describe('ResearchProjectReportComponent', () => {
  let component: ResearchProjectReportComponent;
  let fixture: ComponentFixture<ResearchProjectReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchProjectReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchProjectReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
