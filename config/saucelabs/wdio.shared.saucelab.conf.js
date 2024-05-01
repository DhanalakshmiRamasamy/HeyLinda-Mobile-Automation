const {config} = require('../wdio.shared.conf.js')

exports.config = {
    // Consuming the shared config details
    ...config,
    //
    // SauceLab Credentials
    user: 'oauth-dhanalakshmi.r.kit-86429',
    key: '9155573e-4bc6-4283-87b2-810b71a692d5',
    hostname: 'ondemand.eu-central-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
    //
    // Test runner services
    services: [
            ['sauce']
    ],
    //
    // Setting ConnectionRetry Count to 1, as my current configuration in Sauce lab
    // allows only 1 concurrent session
    connectionRetryCount: 1,
}