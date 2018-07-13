import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTypeSettingComponent } from './fund-type-setting.component';

describe('FundTypeSettingComponent', () => {
  let component: FundTypeSettingComponent;
  let fixture: ComponentFixture<FundTypeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundTypeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundTypeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
