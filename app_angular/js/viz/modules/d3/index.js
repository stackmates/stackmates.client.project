'use strict';

module.exports = angular.module('sm.viz.d3', [])

// generators
.directive('d3ExpTwo',      require('./d3_exp02_line'))
.directive('d3ExpThree',    require('./d3_exp03_arc'))
.directive('d3Donut',       require('./d3_exp04_donut'))
.directive('d3Area',        require('./d3_exp05_area'))
.directive('d3Chord',       require('./d3_exp06_chord'))
.directive('d3Symbol',      require('./d3_exp07_symbol'))
.directive('d3Diagonal',    require('./d3_exp08_diagonal'))
.directive('d3LineRadial',  require('./d3_exp09_line_radial'))



;
