'use strict';

module.exports = angular.module('sm.viz.scatterplot', [])

.controller('ScatterController', require('./controllers/scatter_plot'))

.directive('scatterPlot', require('./directives/scatter_plot'))

;
