import { NgrandombgcolorPage } from './app.po';

describe('ngrandombgcolor App', () => {
  let page: NgrandombgcolorPage;

  beforeEach(() => {
    page = new NgrandombgcolorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
