'use strict';

var d3 = require('d3');
var _o = {};              // configuration object

module.exports = angular.module('app.viz.template.chart', [
  require('../../services/d3_layout_service').name
])

// DIRECTIVE DEFINITION OBJECT
.directive('d3TemplateChart',
  /*@ngInject*/
  function d3Template (D3LayoutService) {

    _o = {
      width: D3LayoutService.width,
      height: D3LayoutService.height
    }

    return {
      link: link,
      restrict: 'E'
      scope {
        data: '='
      }
    };
  };
);

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
  var scale = d3.scale.linear()
    .domain(d3.extent(data))
    .range([0, _o.height]);

  // APPLY DATA TO DRAW SHAPES
  svg.selectAll('thing')
     .data(data)
     .enter()
      .append('thing')

  // REACTIONS

}
