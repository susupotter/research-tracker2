import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundYearSettingComponent } from './fund-year-setting.component';

describe('FundYearSettingComponent', () => {
  let component: FundYearSettingComponent;
  let fixture: ComponentFixture<FundYearSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundYearSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundYearSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
