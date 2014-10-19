

'use strict';

module.exports = angular.module( 'app.viz', [
  'ui.router',
  'restangular',
  // require('./services').name,
  // require('./directives').name
])


.config(
  function($stateProvider) {
    $stateProvider
      .state('app.viz', {
        url: '/viz',
        views: {
          '@': {
            controller: 'VizController',
            controllerAs: 'viz',
            templateUrl: 'viz/templates/viz.html'
          }
        }
      });
  }
)

.controller( 'VizController', require('./controllers/viz_controller'))

;














/**
 * Notes
 *
 *
 * Object constancy?
 *
 *
 */
