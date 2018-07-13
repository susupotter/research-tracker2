import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundBudgetTypeComponent } from './fund-budget-type.component';

describe('FundBudgetTypeComponent', () => {
  let component: FundBudgetTypeComponent;
  let fixture: ComponentFixture<FundBudgetTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundBudgetTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundBudgetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
