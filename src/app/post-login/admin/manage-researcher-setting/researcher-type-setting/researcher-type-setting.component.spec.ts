import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherTypeSettingComponent } from './researcher-type-setting.component';

describe('ResearcherTypeSettingComponent', () => {
  let component: ResearcherTypeSettingComponent;
  let fixture: ComponentFixture<ResearcherTypeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearcherTypeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearcherTypeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
