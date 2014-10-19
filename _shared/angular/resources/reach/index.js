'use strict';

module.exports = angular.module('app.shared.services.reach', [

])

.factory('ReachResource', require('./reach_http'))
.factory('ReachRealtime', require('./reach_realtime'))

;
