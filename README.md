# HeyLinda-Mobile-Automation

This repository is used for mobile app automation using Appium WebdriverIO and JavaScript

### Installation

1. Clone this repository to your local machine
```sh
git clone https://github.com/DhanalakshmiRamasamy/HeyLinda-Mobile-Automation
```

2. Navigate to the project directory:
```sh
cd HeyLinda-Mobile-Automation
```
3. Install the dependencies:
```sh
npm install
```
4. Install Appium and its drivers:
```
npm install -g appium && appium driver install uiautomator2
``` 

Note: You don't need Appium installed on you local machine When running test in a cloud

### Package Structure
```
.
└── HeyLinda-Mobile-Automation/
    ├── .circleci/
    │   └── config.yml
    ├── apps/
    │   ├── android.apk
    │   └── ios.zip
    ├── config/
    │   ├── saucelabs/
    │   │   ├── wdio.android.emulator.saucelab.conf.js
    │   │   ├── wdio.ios.simulator.saucelab.conf.js
    │   │   └── wdio.shared.saucelab.conf.js
    │   ├── wdio.android.conf.js
    │   ├── wdio.ios.conf.js
    │   ├── wdio.shared.conf.js
    │   └── constant.js
    ├── screen-objects/
    │   ├── components/
    │   │   └── footer.js
    │   ├── modules/
    │   │   └── selectors.js
    │   ├── home.screen.js
    │   ├── meditation.screen.js
    │   ├── settings.screen.js
    │   └── stats.screen.js
    ├── reports/
    │   └── timeline-report.html
    ├── test/
    │   └── e2e/
    │       ├── meditate.android.test.js
    │       └── meditate.ios.test.js
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── process.yml
    └── README.md
```

### Running the Tests Locally

To run the mobile tests, use the following command

Note: Adjust the configuration file(s) for [Android](./config/wdio.android.conf.js) and [iOS](./config/wdio.ios.conf.js) regarding the device configuration you've created on your local machine.

- To run the tests on Android Locally
```sh
npm run android ${deviceName}
```
- To run the tests on iOS Locally
```
npm run iOS
```
- You can run the single test with the following commands

```sh
# For Android local execution
npm run android.app -- --spec=test/e2e/medidateandroid.test.js
```
```
# For iOS local execution
npm run ios.app -- --spec=test/e2e/medidateios.test.js
```

### Running the Tests in SauceLab

To run the mobile tests in Sauce Labs:
- Add the Sauce Service
```shell
npm install --save-dev @wdio/sauce-service
```
- Upload the apps to your account in sauce app management section
- To run the tests in SauceLab for Android
```sh
npm run sauceLabAndroid
```
- Another way to run SauceLab tests
```sh
npx wdio ./config/saucelabs\wdio.android.emulator.saucelab.conf.js
```

### CircleCI Integration
Note: These tests are integrated to CircleCi,so that for every change commited to this package, test will get triggered and will be run automatically in Cloud

To Run the CircleCI Integration Locally
- Install Docker Desktop
- Process the config file using CircleCI and store it in a .yml   
```sh
circleci config process .circleci/config.yml > process.yml
```
- To run the tests locally in Docker
```sh
circleci local execute -c process.yml test
```
- Screenshot of how it ran in CircleCI


### Test Report
- Android local Run

- Android SauceLab Run
  <img width="1418" alt="SauceLab Android Screenshot" src="https://github.com/DhanalakshmiRamasamy/AppiumHeyLinda/assets/19945487/ceb033a4-27af-4e99-b7e4-3ff63c9a0a45">


