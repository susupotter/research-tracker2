import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchDocumentDownloadComponent } from './research-document-download.component';

describe('ResearchDocumentDownloadComponent', () => {
  let component: ResearchDocumentDownloadComponent;
  let fixture: ComponentFixture<ResearchDocumentDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchDocumentDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchDocumentDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
