import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getCounterBtn() {
    return element(by.css('#counter-btn'));
  }

  getCounter() {
    return element(by.css('#counter')).getText();
  }

  getGetDataBtn() {
    return element(by.css('#get-data-btn'));
  }

  getGetData() {
    return element(by.css('#get-data')).getText();
  }
}
