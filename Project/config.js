var SpecReporter = require("jasmine-spec-reporter").SpecReporter;
var browserParam = process.argv[3].substring(10, process.argv[3].length);

exports.config = {
  directConnect: false,
  acceptSslCerts: true,
  shardTestFiles: false,
  maxInstances: 2,
  maxSessions: 5,
  specs: ["./e2e/spec/strava.js"],

  // Standard settings common for all browsers
  capabilities: {
    project: "StravaFrontEndTest",
    resolution: "1920x1080",
    browserName: browserParam
  },

  // Framework to use. Jasmine is recommended.
  framework: "jasmine",

  // For angular tests
  useAllAngular2AppRoots: true,

  getPageTimeout: 180000,
  allScriptsTimeout: 180000,
  jasmineNodeOpts: {
    realtimeFailure: true,
    defaultTimeoutInterval: 180000,
    showColors: true,
    print: function() {} //Remove protractor dot reporter
  },

  onPrepare: function() {
    // Override the default timeout for webdriver.
    // var width = 1920;
    // var height = 1080;
    // browser.driver.manage().window().setSize(width, height);

    browser
      .manage()
      .timeouts()
      .setScriptTimeout(180000);
    jasmine.getEnv().clearReporters();
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: false,
          displayPending: true
        }
      })
    );
    browser.driver.ignoreSynchronization = true;
  },

  beforeLaunch: function() {
    console.log("Connecting local");
  },

  afterLaunch: function() {}
};
