/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'craigslist',
    environment: environment,
    baseURL: '/',
    firebase: {
      apiKey: "AIzaSyDdBjxchy5O9Zd5Xz3cT6byEdLh-Z1eDgY",
      authDomain: "craigslist-ember-bed6b.firebaseapp.com",
      databaseURL: "https://craigslist-ember-bed6b.firebaseio.com",
      storageBucket: "craigslist-ember-bed6b.appspot.com",
    },
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
