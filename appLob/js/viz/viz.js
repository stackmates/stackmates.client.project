

'use strict';

module.exports = angular.module( 'app.viz', [
  'ui.router',
  'restangular',
  require('./services').name,
  require('./directives').name
])

  // require('./directives/directives').name
.config(
  function($stateProvider) {
    $stateProvider
      .state('app.viz', {
        url: '/viz',
        views: {
          '@': {
            controller: 'VisualizationController',
            controllerAs: 'viz',
            templateUrl: 'viz/templates/viz.html'
          }
        }
      })
      .state('app.viz.lastfm', {
        url: '/lastfm',
          controller: 'DemoLastFMController',
          controllerAs: 'lastFMDemo',
          templateUrl: 'viz/templates/last-fm-demo.html'
      });
  }
)


.controller( 'VisualizationController', require('./controllers/_visualization_controller'))
.controller( 'DemoLastFMController', require('./controllers/last_fm_controller'))



;














/**
 * Notes
 *
 *
 * Object constancy?
 *
 *
 */
