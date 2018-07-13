import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorTypeSettingComponent } from './sector-type-setting.component';

describe('SectorTypeSettingComponent', () => {
  let component: SectorTypeSettingComponent;
  let fixture: ComponentFixture<SectorTypeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorTypeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorTypeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
