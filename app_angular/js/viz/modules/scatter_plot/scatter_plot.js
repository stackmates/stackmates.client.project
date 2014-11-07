'use strict';

var _o = {};
var d3 = require('d3');

module.exports = angular.module('sm.viz.scatterplot.chart', [
  require('../../services/d3_layout_service').name
])

.directive('smVizScatterPlot',
  /*@ngInject*/
  function scatterPlot ($timeout, D3LayoutService) {
    _o = {
      $timeout: $timeout,
      width: D3LayoutService.width,
      height: D3LayoutService.height,
      margin: D3LayoutService.margin
    }

    return {
      link: link,
      restrict: 'E',
      scope: {
        data: '=',
        selectedPoint: '='
      }
    }
  }
)

function link(scope, el, attr){

  // PREPARE DATA



  // APPEND SVG TO ELEMENT
  el = el[0];
  var svg = d3.select(el)
    .append('svg')
      .attr("height", _o.height)
      .attr("width", _o.width)
    .append("g")
      .attr("transform", "translate(" + _o.width + "," + _o.height + ")");


  // GENERATORS

  // APPLY DATA TO DRAW SHAPES

  // REACTIONS

}




