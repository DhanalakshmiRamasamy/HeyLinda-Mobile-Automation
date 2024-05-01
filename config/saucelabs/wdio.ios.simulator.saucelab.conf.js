const {config} = require('./wdio.shared.saucelab.conf.js');
exports.config = {
    // Consuming the shared config details
    ...config,
    //
    // Spec files for execution
    //
    specs: [
        '../../test/e2e/*ios.test.js'
    ],
    //
    // Defining SauceLab iOS Capabilities
    //
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': "iPhone 12 Simulator",
        'appium:platformVersion': '17.0',
        'appium:app': "storage:filename=ios.zip",
        'appium:automationName': 'XCUITest',
        'sauce:options': {
            appiumVersion: '2.1.3',
            name: 'HeyLindaAutomation',
            deviceOrientation: 'PORTRAIT',
        },
    }],
}