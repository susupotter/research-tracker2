import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalProjectReportComponent } from './final-project-report.component';

describe('FinalProjectReportComponent', () => {
  let component: FinalProjectReportComponent;
  let fixture: ComponentFixture<FinalProjectReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalProjectReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalProjectReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
