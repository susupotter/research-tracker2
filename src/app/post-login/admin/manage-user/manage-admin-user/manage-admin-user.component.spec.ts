import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdminUserComponent } from './manage-admin-user.component';

describe('ManageAdminUserComponent', () => {
  let component: ManageAdminUserComponent;
  let fixture: ComponentFixture<ManageAdminUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAdminUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
