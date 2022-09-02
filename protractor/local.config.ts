import { browser, Config } from 'protractor';
import { reporter } from './reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: [ '../instagram/instagram.js' ],
  SELENIUM_PROMISE_MANAGER: false,
  getPageTimeout: 50000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-gpu']
    }
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 1200000000
  },
  onPrepare: () => {
    reporter();
    browser.manage().timeouts().implicitlyWait(3000);
  }
};
