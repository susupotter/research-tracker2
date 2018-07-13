import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProposalComponent } from './research-proposal.component';

describe('ResearchProposalComponent', () => {
  let component: ResearchProposalComponent;
  let fixture: ComponentFixture<ResearchProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
