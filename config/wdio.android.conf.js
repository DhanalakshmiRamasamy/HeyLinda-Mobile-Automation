let { join } = require('path');
const {ANDROID_APK_PATH} = require("./constant");
const {config} = require('./wdio.shared.conf.js')
const deviceName = process.argv[3] || 'samsung SM-A505F'

exports.config = {
    // Consuming the shared config details
    ...config,
    //
    // Spec files for execution
    //
    specs: [
        '../test/e2e/*android.test.js'
    ],
    //
    // Defining Android Capabilities
    //
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': deviceName,
        'appium:app': join(process.cwd(), ANDROID_APK_PATH),
        'appium:automationName': 'UiAutomator2',
    }],
}
