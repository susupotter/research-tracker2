import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementedWorksComponent } from './implemented-works.component';

describe('ImplementedWorksComponent', () => {
  let component: ImplementedWorksComponent;
  let fixture: ComponentFixture<ImplementedWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementedWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementedWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
