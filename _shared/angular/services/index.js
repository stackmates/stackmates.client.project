'use strict';

module.exports = angular.module('app.shared.services', [
])

.factory('app',               require('./global/app'))
.factory('alert',             require('./alerts/alert'))
.factory('util',              require('./routing/util'))


;
