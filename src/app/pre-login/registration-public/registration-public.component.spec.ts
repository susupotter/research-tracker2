import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPublicComponent } from './registration-public.component';

describe('RegistrationPublicComponent', () => {
  let component: RegistrationPublicComponent;
  let fixture: ComponentFixture<RegistrationPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
