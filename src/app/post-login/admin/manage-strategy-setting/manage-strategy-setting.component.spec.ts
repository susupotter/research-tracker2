import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStrategySettingComponent } from './manage-strategy-setting.component';

describe('ManageStrategySettingComponent', () => {
  let component: ManageStrategySettingComponent;
  let fixture: ComponentFixture<ManageStrategySettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStrategySettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStrategySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
