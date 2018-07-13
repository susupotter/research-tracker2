import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewResearchProposalComponent } from './review-research-proposal.component';

describe('ReviewResearchProposalComponent', () => {
  let component: ReviewResearchProposalComponent;
  let fixture: ComponentFixture<ReviewResearchProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewResearchProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewResearchProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
