'use strict';

module.exports = angular.module('app.shared.directives', [

])

.directive('focus', require('./utils'))
.directive('logo', require('./logo'))
.directive('nestedTypeahead', require('./nested_typeahead'))

;
