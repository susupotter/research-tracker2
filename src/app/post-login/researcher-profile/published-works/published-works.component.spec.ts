import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedWorksComponent } from './published-works.component';

describe('PublishedWorksComponent', () => {
  let component: PublishedWorksComponent;
  let fixture: ComponentFixture<PublishedWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
