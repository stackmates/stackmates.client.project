'use strict';

module.exports = angular.module('sm.viz.d3', [])

// the most basic setup
.directive('d3ExpOne',    require('./d3_exp_1'))
// generators
.directive('d3ExpTwo',    require('./d3_exp_2_line'))
.directive('d3ExpThree',  require('./d3_exp_3_arc'))
.directive('d3Donut',     require('./d3_exp_4_donut'))

;
