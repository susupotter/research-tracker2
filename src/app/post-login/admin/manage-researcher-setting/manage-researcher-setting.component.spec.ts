import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResearcherSettingComponent } from './manage-researcher-setting.component';

describe('ManageResearcherSettingComponent', () => {
  let component: ManageResearcherSettingComponent;
  let fixture: ComponentFixture<ManageResearcherSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageResearcherSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageResearcherSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
