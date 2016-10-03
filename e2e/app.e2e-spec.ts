import { TastyClientPage } from './app.po';

describe('tasty-client App', function() {
  let page: TastyClientPage;

  beforeEach(() => {
    page = new TastyClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
