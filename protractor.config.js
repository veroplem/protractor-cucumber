const config = require('./env').config
const env = require('./env').environment

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 300000,
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: config.baseUrl,

  onPrepare: () => {
  },

  ignoreUncaughtExceptions: true,

  capabilities:
        {
          shardTestFiles: true,
          maxInstances: 1,
          browserName: 'chrome',
          chromeOptions: {
            args: ['--window-size=1280,1024', '--headless', '--disable-gpu'],
            prefs: { 'profile.default_content_setting_values.notifications': 2 }
          },
          metadata: {
            device: 'Local',
            platform: {
              name: 'Windows',
              version: '10'
            }
          }
        },

  specs: [
    'test/features/001.login.feature'
  ],

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    strict: false,
    require: [
      'features/step_definitions/*.js',
      'features/support/*.js'
    ],
    format: 'json:.tmp/results.json'
  },
  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      pageTitle: `Tradify ${env} automation suite`,
      reportName: `Tradify ${env} automation suite`,
      displayDuration: true,
    }
  }
  ],

  onComplete: () => {
  }
}
