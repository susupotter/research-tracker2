import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewResearchProgressComponent } from './review-research-progress.component';

describe('ReviewResearchProgressComponent', () => {
  let component: ReviewResearchProgressComponent;
  let fixture: ComponentFixture<ReviewResearchProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewResearchProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewResearchProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
