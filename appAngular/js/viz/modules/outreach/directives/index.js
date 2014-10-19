'use strict';

module.exports = angular.module('app.viz.reach.directives', [
  require('../services').name
])

.directive('reachLine', require('./reach_line_directive'))
// .directive('reachRealtime', require('./reach_realtime_directive'))
// .directive('reachResponsive', require('./reach_responsive_directive'))

;
