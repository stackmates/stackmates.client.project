'use strict';

var fs = require('fs');

module.exports = angular.module( 'app.viz', [
  'ui.router',
  'restangular',
  require('../../../_shared/angular/resources/reach').name,
  require('./modules/donut').name,
  require('./modules/line_adaptive').name,
  require('./modules/line_single').name,
  require('./modules/outreach').name,
  require('./modules/scatter_last_fm').name,
  require('./modules/scatter_plot').name
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
            template: fs.readFileSync(__dirname + '/modules/line_single/templates/single_line_demo.html')
          }
        }
      })
      .state('app.viz.scatter', {
        url: '/scatter-plot',
        controller: 'ScatterController',
        controllerAs: 'scatter',
        template: fs.readFileSync(__dirname + '/modules/scatter_plot/templates/scatter_plot_demo.html')
      })
      .state('app.viz.scatter-music', {
        url: '/scatter-plot-music',
        controller: 'VizController',
        template: fs.readFileSync(__dirname + '/modules/scatter_last_fm/templates/scatter_music_demo.html')
      })
      .state('app.viz.outreach', {
        url: '/outreach',
        controller: 'OutreachController',
        tempate: fs.readFileSync(__dirname + '/modules/outreach/templates/line.html')
      });
  }
)

.controller( 'VizController', require('./controllers/viz_controller'))


;
