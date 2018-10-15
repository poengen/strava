var SpecReporter = require("jasmine-spec-reporter").SpecReporter;

exports.config = {
  directConnect: false,
  acceptSslCerts: true,
  shardTestFiles: false,
  maxInstances: 2,
  maxSessions: 5,
  specs: ["./e2e/spec/strava.js"],

  // Standard settings common for all browsers
  commonCapabilities: {
    project: "strava",
    resolution: "1920x1080"
  },
  // Specific settings for specific browser
  multiCapabilities: [
    {
      // os: "windows",
      // os_version: "10",
      browserName: "chrome"
      // 'chromeOptions': {'args': ['lang=no-NO']}
    } /*,{
            'os': 'windows',
            'os_version': '10',
            "browserName": "firefox"
        }*/
  ],

  framework: "jasmine",

  useAllAngular2AppRoots: true,

  getPageTimeout: 180000,
  allScriptsTimeout: 180000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 180000,
    showColors: true,
    print: function() {}
  },

  onPrepare: function() {
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
exports.config.multiCapabilities.forEach(function(caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
