import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchSearchReportComponent } from './research-search-report.component';

describe('ResearchSearchReportComponent', () => {
  let component: ResearchSearchReportComponent;
  let fixture: ComponentFixture<ResearchSearchReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchSearchReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchSearchReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
