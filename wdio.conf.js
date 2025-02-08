export const config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
        //  runner: 'local',
                //USA RUNNER E PORT PARA WEBDRIVER IO    
         //port:4723,


            user: 'oauth-luisgmarques789-3cf12',
            key: 'c61ec54f-5712-4393-b3f2-7ede17bdeff1',
            hostname: 'ondemand.us-west-1.saucelabs.com',
            port: 443,
            baseUrl: 'wd/hub',
     
          
          
          
          // replace with commands and assertions
         



    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 1,
    
    capabilities: [ //
        
        //{
       // platformName: 'Android',
        //browserName: 'Chrome',
       // 'appium:deviceName': 'ebac',
        //'appium:platformVersion': '15.0',
        //'appium:automationName': 'UiAutomator2',                        NAO USANDO SAUCELABS
        //'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        //'appium:appWaitActivity': '.MainActivity',
        //'appium:disableIdLocatorAutocompletion': true,
        //  }

           {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
            'appium:deviceName': 'Samsung Galaxy Tab S6 GoogleAPI Emulator',
            'appium:platformVersion': '15.0',   // USANDO SAUCELABS
            'appium:automationName': 'UiAutomator2',
            'sauce:options': {
               appiumVersion: '2.11.0',
               build: 'appium-build-teste-ebac',
               name: 'Ebac Shop Test',
               deviceOrientation: 'PORTRAIT',
             },

            }

],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        
            await browser.takeScreenshot();
        
    }

}
