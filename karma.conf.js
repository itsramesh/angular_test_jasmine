/*
 * Karma: http://karma-runner.github.io
 *
 * Quick start: https://devtools.mirthcorp.com/confluence/display/internal/JavaScript+Testing#JavaScriptTesting-QuickStart
 */
module.exports = function (config) {
  'use strict';
  config.set({

    basePath: './',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',

      'src/**/*.js',
      'test/**/*.js'
    ],

    preprocessors : {
      'src/**/*.js': 'coverage'
    },
    autoWatch: false,

    singleRun: true,

    frameworks: ['jasmine'],

    // browsers: ['Chrome'],

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ],

    reporters: ['progress', 'coverage'],

    coverageReporter : {
      type : 'html',
      dir : 'coverage/'
    },

    client: {
      captureConsole: true,
      mocha: {
        bail: true
      }
    }

  });
};
