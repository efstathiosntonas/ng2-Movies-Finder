import { Ng2MovieFinderPage } from './app.po';

describe('ng2-movie-finder App', function() {
  let page: Ng2MovieFinderPage;

  beforeEach(() => {
    page = new Ng2MovieFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
