'use strict';


module.exports = angular.module( 'app.viz.d3', [
  'ui.router',
  'restangular',
  require('./services').name,
  require('./directives').name
])

  // require('./directives/directives').name
.config(
  function($stateProvider) {
    $stateProvider
      .state('app.viz.d3', {
        url: '/d3',
        views: {
          '@': {
            controller: 'D3Controller',
            controllerAs: 'viz',
            templateUrl: 'd3/templates/d3.html'
          }
        }
      });
  }
)


.controller( 'D3Controller', require('./controllers/d3_controller'))

;
