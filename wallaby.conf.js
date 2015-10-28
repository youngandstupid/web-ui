'use strict';

var files = require('./test/files');

module.exports = function() {
  return {
    files: [].concat(
      files.libs.map(skip),
      files.app, '!src/app/**/*.spec.js',
      files.testLibs.map(skip)
    ),

    tests: [
      'src/app/**/*.spec.js'
    ],

    testFramework: 'jasmine@2.3.4'
  }
};

function skip(pattern) {
  return {pattern: pattern, instrument: false};
}