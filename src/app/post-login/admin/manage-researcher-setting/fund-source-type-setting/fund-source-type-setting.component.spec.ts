import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundSourceTypeSettingComponent } from './fund-source-type-setting.component';

describe('FundSourceTypeSettingComponent', () => {
  let component: FundSourceTypeSettingComponent;
  let fixture: ComponentFixture<FundSourceTypeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundSourceTypeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundSourceTypeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
