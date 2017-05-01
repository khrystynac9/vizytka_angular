import { VizytkaPage } from './app.po';

describe('vizytka App', () => {
  let page: VizytkaPage;

  beforeEach(() => {
    page = new VizytkaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
