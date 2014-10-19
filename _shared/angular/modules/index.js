'use strict';

module.exports = angular.module('app.shared.directives', [
  require('./nested_typeahead').name,
  require('./sm_typeahead').name
])

.directive('focus', require('./utils'))
.directive('logo', require('./logo'))

;
