import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalManageComponent } from './proposal-manage.component';

describe('ProposalManageComponent', () => {
  let component: ProposalManageComponent;
  let fixture: ComponentFixture<ProposalManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
