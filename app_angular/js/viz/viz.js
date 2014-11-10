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
            template: fs.readFileSync(__dirname + '/templates/_viz.html')
          }
        }
      })
      .state('app.viz.shapes', {
        url: '/shapes',
        controller: 'VizController',
        template: fs.readFileSync(__dirname + '/modules/d3/d3.html')
      })
      .state('app.viz.animations', {
        url: '/animations',
        controller: 'VizController',
        template: fs.readFileSync(__dirname + '/modules/animation/animation.html')
      })
      .state('app.viz.axes', {
        url: '/axes',
        controller: 'VizController',
        template: fs.readFileSync(__dirname + '/modules/axes/axes.html')
      })
      .state('app.viz.barcharts', {
        url: '/bar-charts',
        controller: 'VizController',
        template: fs.readFileSync(__dirname + '/modules/bar_chart/templates/bar_chart.html')
      })
      .state('app.viz.donuts', {
        url: '/donuts',
        controller: 'VizController',
        template: fs.readFileSync(__dirname + '/templates/donut.html')
      })
      .state('app.viz.linecharts', {
        url: '/line-charts',
        controller: 'VizController',
        template: fs.readFileSync(__dirname + '/templates/line_charts.html')
      })
      .state('app.viz.scatterplots', {
        url: '/scatter-plots',
        controller: 'VizController',
        controllerAs: 'scatter',
        template: fs.readFileSync(__dirname + '/templates/scatter_plot.html')
      });
  }
)

.controller( 'VizController', require('./controllers/_viz_controller'))


;
