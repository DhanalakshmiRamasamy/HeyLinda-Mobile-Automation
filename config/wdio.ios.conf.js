let { join } = require('path');
const {IOS_IPA_PATH} = require("./constant");
const {config} = require('./wdio.shared.conf.js')
const deviceName = process.argv[3] || 'iPhone 15 Pro Max'

exports.config = {
    // Consuming the shared config details
    ...config,
    //
    // Spec files for execution
    //
    specs: [
        '../test/e2e/*ios.test.js'
    ],
    //
    // Defining iOS Capabilities
    //
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': deviceName,
        'appium:app': join(process.cwd(), IOS_IPA_PATH),
        'appium:automationName': 'XCUITest'
    }],
}
