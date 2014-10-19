'use strict';

module.exports = angular.module('app.shared.resources', [
  require('./reach').name,
  require('./spaces/spaces').name,
  require('./cms/content').name
])

;
