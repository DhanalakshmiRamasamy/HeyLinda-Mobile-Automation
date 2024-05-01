const {config} = require('./wdio.shared.saucelab.conf.js')
exports.config = {
    // Consuming the shared config details
    ...config,
    //
    // Spec files for execution
    //
    specs: [
        '../../test/e2e/*android.test.js'
    ],
    //
    // Defining SauceLab Android Capabilities
    //
    capabilities: [{
        platformName: 'Android',
        'appium:app': 'storage:filename=android.apk', // The filename of the mobile app
        'appium:deviceName': 'Samsung Galaxy S20 WQHD GoogleAPI Emulator',
        'appium:platformVersion': '11.0',
        'appium:automationName': 'UiAutomator2',
        'sauce:options': {
            // appiumVersion: 'latest',
            build: 'appium-build-BH4IM',
            name: 'HeyLindaAutomation2',
            deviceOrientation: 'PORTRAIT',
        },
    }],
}