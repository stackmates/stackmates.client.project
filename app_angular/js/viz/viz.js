'use strict';

var fs = require('fs');

module.exports = angular.module( 'app.viz', [
  'ui.router',
  require('./modules/d3').name,
  require('./modules/animation').name,
  require('./modules/axes').name,
  require('./modules/bar_chart').name,
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
            template: fs.readFileSync(__dirname + '/templates/viz.html')
          }
        }
      })
      .state('app.viz.d3', {
        url: '/d3',
        controller: 'VizController',
        template: fs.readFileSync(__dirname + '/modules/d3/d3.html')
      })
      .state('app.viz.animation', {
        url: '/animation',
        controller: 'VizController',
        template: fs.readFileSync(__dirname + '/modules/animation/animation.html')
      })
      .state('app.viz.axes', {
        url: '/axes',
        controller: 'VizController',
        template: fs.readFileSync(__dirname + '/modules/axes/axes.html')
      })
      .state('app.viz.barchart', {
        url: '/bar-chart',
        controller: 'VizController',
        template: fs.readFileSync(__dirname + '/modules/bar_chart/templates/bar_chart.html')
      })
      .state('app.viz.singleline', {
        url: '/single-line',
        controller: 'VizController',
        controllerAs: 'scatter',
        template: fs.readFileSync(__dirname + '/modules/line_single/templates/single_line.html')
      })
      .state('app.viz.scatter', {
        url: '/scatter-plot',
        controller: 'VizController',
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
        controller: 'VizController',
        tempate: fs.readFileSync(__dirname + '/modules/outreach/templates/line.html')
      });
  }
)

.controller( 'VizController', require('./controllers/_viz_controller'))


;
