import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to angular-starter!');
  });

  it('increment should raise the counter by one', () => {
    page.navigateTo();
    expect(page.getCounter()).toEqual('0');
    page.getCounterBtn().click();
    expect(page.getCounter()).toEqual('1');
  });

  it('get data should return data', () => {
    page.navigateTo();
    expect(page.getGetData()).toEqual('');
    page.getGetDataBtn().click();
    expect(page.getGetData()).toEqual('{ "data": "some server side data" }');
  });
});
