import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundDetailDetailComponent } from './fund-detail-detail.component';

describe('FundDetailDetailComponent', () => {
  let component: FundDetailDetailComponent;
  let fixture: ComponentFixture<FundDetailDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundDetailDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundDetailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
