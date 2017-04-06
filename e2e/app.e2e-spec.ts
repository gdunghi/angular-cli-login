import { AngularCliLoginPage } from './app.po';

describe('angular-cli-login App', () => {
  let page: AngularCliLoginPage;

  beforeEach(() => {
    page = new AngularCliLoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
