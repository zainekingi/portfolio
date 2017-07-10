import { NgSrcPage } from './app.po';

describe('ng-src App', function() {
  let page: NgSrcPage;

  beforeEach(() => {
    page = new NgSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
