import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceReportComponent } from './conference-report.component';

describe('ConferenceReportComponent', () => {
  let component: ConferenceReportComponent;
  let fixture: ComponentFixture<ConferenceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
