import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyTypeSettingComponent } from './strategy-type-setting.component';

describe('StrategyTypeSettingComponent', () => {
  let component: StrategyTypeSettingComponent;
  let fixture: ComponentFixture<StrategyTypeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyTypeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyTypeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
