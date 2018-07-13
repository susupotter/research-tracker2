import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherProfileReportComponent } from './researcher-profile-report.component';

describe('ResearcherProfileReportComponent', () => {
  let component: ResearcherProfileReportComponent;
  let fixture: ComponentFixture<ResearcherProfileReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearcherProfileReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearcherProfileReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
