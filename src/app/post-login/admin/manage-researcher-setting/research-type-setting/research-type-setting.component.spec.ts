import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchTypeSettingComponent } from './research-type-setting.component';

describe('ResearchTypeSettingComponent', () => {
  let component: ResearchTypeSettingComponent;
  let fixture: ComponentFixture<ResearchTypeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchTypeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchTypeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
