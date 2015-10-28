'use strict';

var files = require('./test/files');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [].concat(
      files.libs,
      files.app,
      files.testLibs
    ),

    preprocessors: {
      'src/app/**/!(*.spec).js': ['coverage'],
      'src/app/**/*.spec.js': ['jshint'],
      'test/unit/**/*.js': ['jshint']
    },

    jshintPreprocessor: {
      stopOnError: true
    },

    reporters: ['jasmine-runner', 'coverage'],
    
    jasmineRunnerReporter: {
      outputFile: 'jasmine-runner.html',
      includes: [
        "node_modules/jasmine-expect/dist/jasmine-matchers.js"
      ]
    },

    coverageReporter: {
      dir: 'test/reports/coverage',

      reporters: [
        {type: 'text-summary'},
        {type: 'cobertura'},
        {type: 'lcov'},
        {type: 'json'}
      ],

      check: {
        global: {
          statements: 90,
          branches: 90,
          functions: 90,
          lines: 90
        }
      }
    },

    reportSlowerThan: 10,

    autoWatch: true,

    browsers: ['PhantomJS']
  });
};