import { PhoenemePage } from './app.po';

describe('phoeneme App', function() {
  let page: PhoenemePage;

  beforeEach(() => {
    page = new PhoenemePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
