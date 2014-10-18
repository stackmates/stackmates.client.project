

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
      .state('app.viz.donut', {
        url: '/donut',
          controller: 'DemoDonutController',
          controllerAs: 'donutDemo',
          templateUrl: 'viz/templates/donut-demo.html'
      })
      .state('app.viz.scatter', {
        url: '/scatter',
          controller: 'DemoScatterController',
          controllerAs: 'scatterDemo',
          templateUrl: 'viz/templates/scatter-demo.html'
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
.controller( 'DemoDonutController', require('./controllers/employers_controller'))
.controller( 'DemoScatterController', require('./controllers/employers_controller'))

;














/**
 * Notes
 *
 *
 * Object constancy?
 *
 *
 */
