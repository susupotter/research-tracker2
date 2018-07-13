import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchFundManageComponent } from './research-fund-manage.component';

describe('ResearchFundManageComponent', () => {
  let component: ResearchFundManageComponent;
  let fixture: ComponentFixture<ResearchFundManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchFundManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchFundManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
