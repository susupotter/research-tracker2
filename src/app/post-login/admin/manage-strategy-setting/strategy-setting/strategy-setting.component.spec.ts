import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategySettingComponent } from './strategy-setting.component';

describe('StrategySettingComponent', () => {
  let component: StrategySettingComponent;
  let fixture: ComponentFixture<StrategySettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategySettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
