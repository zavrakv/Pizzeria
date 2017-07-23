/*TODO: check configs*/
module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: [ 'jasmine' ],
    files: [
      'bower_components/angular/angular.min.js',
      'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'bower_components/angular-animate/angular-animate.min.js',
      'bower_components/angular-aria/angular-aria.min.js',
      'bower_components/angular-messages/angular-messages.min.js',
      'bower_components/angular-material/angular-material.min.js',
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/app/blocks/router/router.module.js',
      'src/app/cart/cart.module.js',
      'src/app/core/core.module.js',
      'src/app/main/main.module.js',
      'src/app/menu/menu.module.js',
      'src/app/history/history.module.js',
      'src/app/index.module.js',
      'src/app/**/*.html',
      'src/app/**/*.js',
      'src/app/**/*.spec.js'
    ],
    exclude: [
      'src/server/**/*.js'
    ],
    ngHtml2JsPreprocessor: {
      moduleName: 'templates-dist'
    },
    preprocessors: {
      'src/app/**/*.html': ['ng-html2js']
    },
    reporters: [ 'kjhtml' ],
    colors: true,
    autoWatch: false,
    browsers: [ 'Chrome' ],
    singleRun: true,
    // logLevel: config.LOG_DEBUG,
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor',
      'karma-jasmine-html-reporter',
      'karma-chrome-launcher'
    ]
  });
};