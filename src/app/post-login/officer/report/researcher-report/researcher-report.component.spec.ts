import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherReportComponent } from './researcher-report.component';

describe('ResearcherReportComponent', () => {
  let component: ResearcherReportComponent;
  let fixture: ComponentFixture<ResearcherReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearcherReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearcherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
