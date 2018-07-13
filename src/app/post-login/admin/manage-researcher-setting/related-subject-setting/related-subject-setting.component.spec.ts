import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedSubjectSettingComponent } from './related-subject-setting.component';

describe('RelatedSubjectSettingComponent', () => {
  let component: RelatedSubjectSettingComponent;
  let fixture: ComponentFixture<RelatedSubjectSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedSubjectSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedSubjectSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
