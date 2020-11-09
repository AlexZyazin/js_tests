exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/', 
    specs: ['/specs/*.js'],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    capabilities: [{
        browserName: 'chrome',
        browserVersion: '83.0',
        'goog:chromeOptions': {},
        'selenoid:options' : {
        'enableVNC': true,
        'enableVideo': false,
        'screenResolution': '1920x1080'
        }
    }],
    logLevel: 'trace',
    logDir: './logs',
    bail: 0,
    baseUrl: 'https://eapteka.ru',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'selenium-standalone'
    //    ,'docker','docker'
    ],
    framework: 'mocha',
    reporters: ['spec',
//   ['allure', {
//        outputDir: 'allure-results',
//        disableWebdrivereStepsReporting: true,
//        disableWebdrivereScreenshotsReporting: true,
//    }],
//    'html'
   ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000,
        require: ['@babel/register']
    },
    beforeTest: function () {
        const chai = require('chai');
        const chaiWebdriver = require('chai-webdriverio').default;
        chai.use(chaiWebdriver(browser));
        global.assert = chai.assert;
        global.should = chai.should;
        global.expect = chai.expect;
    },
    /**
    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            browser.takeScreenshot();
        }
    },
     */
}
