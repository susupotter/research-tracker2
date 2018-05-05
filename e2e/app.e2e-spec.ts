import { ResearchTrackerPage } from './app.po';

describe('research-tracker App', () => {
  let page: ResearchTrackerPage;

  beforeEach(() => {
    page = new ResearchTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
