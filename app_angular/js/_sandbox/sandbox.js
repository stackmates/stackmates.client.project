'use strict';

module.exports = angular.module('app.sandbox', [
  'ui.router',
  require('../../../_shared/angular/resources/spaces/spaces').name
])

.config(
  function($stateProvider) {
    $stateProvider
      .state('app.sandbox', {
        url: '/sandbox',
        views: {
          '@': {
            controller: 'SandboxController',
            template: require('./templates/sandbox.html.js')
          }
        }
      });
  }
)

.controller('SandboxController', require('./controllers/sandbox_controller'))


;
