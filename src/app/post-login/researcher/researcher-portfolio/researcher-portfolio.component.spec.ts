import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherPortfolioComponent } from './researcher-portfolio.component';

describe('ResearcherPortfolioComponent', () => {
  let component: ResearcherPortfolioComponent;
  let fixture: ComponentFixture<ResearcherPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearcherPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearcherPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
