'use strict';

module.exports = angular.module('app.spaces', [
  'ui.router',
  require('../../../_shared/angular/resources/spaces/spaces').name
])

.config(
  function($stateProvider) {
    $stateProvider
      .state('app.spaces', {
        url: '/spaces',
        views: {
          '@': {
            controller: 'SpacesController',
            templateUrl: 'spaces/templates/spaces.html'
          }
        }
      });
  }
)

.controller('SpacesController', require('./controllers/spaces_controller'))

;
