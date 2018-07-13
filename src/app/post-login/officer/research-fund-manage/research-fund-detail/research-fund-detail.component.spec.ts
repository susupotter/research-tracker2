import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFundDetailComponent } from './research-fund-detail.component';

describe('ResearchFundDetailComponent', () => {
  let component: ResearchFundDetailComponent;
  let fixture: ComponentFixture<ResearchFundDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchFundDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchFundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
