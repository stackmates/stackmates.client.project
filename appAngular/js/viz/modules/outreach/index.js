'use strict';

module.exports = angular.module('sm.viz.outreach', [
])


.controller('ReachController',  require('./controllers/outreach'))

.directive('outreachLine',       require('./directives/outreach_line'))
// .directive('outreachRealtime',   require('./directives/outreach_realtime'))

;
