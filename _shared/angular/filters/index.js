'use strict';

module.exports = angular.module('app.shared.filters', [

])


.filter('blankIfNegative', require('./blank_if_negative'))
.filter('fuzzy', require('./fuzzy_search'))
.filter('parentFuzzy', require('./parent_fuzzy_search'))
  // .filter('excludeByDateFilter', require('./exclude_by_date')) // why?
.filter('propsFilter', require('./props_filter'))


;
