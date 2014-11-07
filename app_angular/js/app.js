'use strict';

window._ = require('lodash');
// var $ = require('jquery');
var moment = require('moment');


module.exports = angular.module('app', [
  'ngAnimate',
  'ngCookies',
  'ngSanitize',
  'pascalprecht.translate',
  'restangular',
  'ui.router',
  'app.templates',
  'app.shared',
  require('util_modules/angular/socket_io').name,
  require('ux_patterns/_helpers/angular/resize').name,
  require('ux_patterns/atoms/buttons/angular').name,
  require('ux_patterns/molecules/accordion/angular').name,
  require('ux_patterns/molecules/alert/angular').name,
  require('ux_patterns/molecules/carousel/angular').name,
  require('ux_patterns/molecules/datepicker/angular').name,
  require('ux_patterns/molecules/dropdown/angular').name,
  require('ux_patterns/molecules/inputs/angular').name,
  require('ux_patterns/molecules/modal/angular').name,
  require('ux_patterns/molecules/navigation/pagination/angular').name,
  require('ux_patterns/molecules/navigation/tabs/angular').name,
  require('ux_patterns/molecules/popup/angular').name,
  require('ux_patterns/molecules/progressbar/angular').name,
  require('ux_patterns/molecules/rating/angular').name,
  require('ux_patterns/molecules/timepicker/angular').name,
  require('ux_patterns/molecules/typeahead/angular').name,
  require('ux_patterns/molecules/navigation/slide_nav/angular').name,
  require('ux_patterns/molecules/ui-select/angular').name,
  require('../../_shared/angular/modules/auth').name,
  require('./layout').name,
  require('./ux_patterns').name,
  require('./publishing').name,
  require('./viz').name,
  require('./main').name
])

// .constant('baseUrl', 'http://192.168.50.4:8080' )
.constant('AppConstants', {
  'baseUrl': 'http://localhost:4000',
  // 'baseUrl': 'http://api.stackmat.es',
  'homeState': 'app.home'
})

// Enable HTML5 Mode.
.config(
  function ($locationProvider) {
    $locationProvider.html5Mode(false);
  }
)

.config(
  function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.interceptors.push('AuthInterceptor');
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }
)

.config(
  function ($socketProvider, AppConstants) {
    $socketProvider.setConnectionUrl(AppConstants.baseUrl);
  }
)

// Set Restangular base URL.
.config(
  function (RestangularProvider, AppConstants) {
    RestangularProvider
      .setBaseUrl(AppConstants.baseUrl)
      .setDefaultHttpFields({ withCredentials: true })
      .setDefaultHeaders({
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
      });
  }
)

.config(
  function(uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
  }
)

//Attach variables to $rootScope.
.run(
  function ($location, $rootScope, $state, $stateParams ) {
    _.assign($rootScope, {
      _: _,
      // $: $,
      $location: $location,
      $state: $state,
      $stateParams: $stateParams,
      // app: app,
      // config: app.config,
      moment: moment
    });
  }
)

;
