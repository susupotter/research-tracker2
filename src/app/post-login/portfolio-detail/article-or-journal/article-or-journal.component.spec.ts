import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOrJournalComponent } from './article-or-journal.component';

describe('ArticleOrJournalComponent', () => {
  let component: ArticleOrJournalComponent;
  let fixture: ComponentFixture<ArticleOrJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleOrJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleOrJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
