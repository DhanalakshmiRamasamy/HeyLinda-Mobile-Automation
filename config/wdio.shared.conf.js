const {TimelineService} = require('wdio-timeline-reporter/timeline-service')

exports.config = {
    //
    // Runner Configuration
    runner: 'local',
    port: 4723,
    //
    // Spec files are not added here as it is not common,
    // it will be added in respective device's config files
    //
    specs: [],
    //
    // Capabiliites are not added here as it is not common,
    // it will be added in respective device's config files
    //
    capabilities: [],
    maxInstances: 1,
    logLevel: 'debug',
    //
    // Setting bail to 0 as we need all test results without worrying about how many tests failed,
    // later can be modified as per the project extension
    bail: 0,
    //
    // Base url where appium will spin up
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 3000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Adding Reporting Service which is common for all confs
    services: [['appium'],[TimelineService]],
    //
    // Spec Framework
    framework: 'mocha',
    //
    // Test reporter and the path where it has to be stored
    reporters: ['spec', ['timeline', { outputDir: './reports' }]],
    //
    // Options to be passed to Mocha.
    //
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
