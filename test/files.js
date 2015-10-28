'use strict';

module.exports = {
  app: [
    'src/app/**/*.html',
    'src/app/**/*.module.js',
    'src/app/**/*.js'
  ],

  libs: [
    // ES5 polyfill
    'node_modules/es6-shim/es5-shim.js',
    'node_modules/es6-shim/es5-sham.js',

    // External
    'www/lib/lodash/lodash.js',
    'www/lib/moment/moment.js',
    'www/lib/moment-timezone/builds/moment-timezone-with-data-2010-2020.js',
    'www/lib/jquery/dist/jquery.js',
    'www/lib/velocity/velocity.js',
    'www/lib/postal/lib/postal.js',
    'www/lib/angular/angular.js',
    'www/lib/angular-aria/angular-aria.js',
    'www/lib/angular-animate/angular-animate.js',
    'www/lib/angular-cookies/angular-cookies.js',
    'www/lib/angular-messages/angular-messages.js',
    'www/lib/angular-sanitize/angular-sanitize.js',
    'www/lib/angular-mocks/angular-mocks.js',
    'www/lib/angular-material/angular-material.js',
    'www/lib/angular-local-storage/dist/angular-local-storage.js',
    'www/lib/angular-translate/angular-translate.js',
    'www/lib/angular-translate-loader-partial/angular-translate-loader-partial.js',
    'www/lib/angular-ui-router/release/angular-ui-router.js',
    'www/lib/angular-ui-utils/ui-utils.js',
    'www/lib/ng-file-upload/angular-file-upload.js',
    'www/lib/angularjs-datepicker/dist/angular-datepicker.min.js',
    'www/lib/angular-google-chart/ng-google-chart.js',
    'www/lib/ng-clip/dest/ng-clip.min.js',
    'www/lib/angular-check-all/angular-check-all.js',
    'www/lib/checklist-model/checklist-model.js',
    'www/lib/zeroclipboard/dist/ZeroClipboard.js',
  ],

  testLibs: [
    'node_modules/chai/chai.js',
    'node_modules/chai-as-promised/lib/chai-as-promised.js',
    'node_modules/chai-jquery/chai-jquery.js',
    'node_modules/chai-things/lib/chai-things.js',
    'node_modules/sinon/pkg/sinon.js',
    'node_modules/sinon-chai/lib/sinon-chai.js',
    'test/bootstrap.js'
  ]
};