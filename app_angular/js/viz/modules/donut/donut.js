'use strict';


var d3 = require('d3');
var _o = {};              // configuration object

module.exports = angular.module('app.viz.donut.chart', [
  require('../../services/d3_layout_service').name
])

.directive('d3DonutChart',
  /*@ngInject*/
  function donutChart (D3LayoutService) {
    _o = {
      width: D3LayoutService.width,
      height: D3LayoutService.height,
      margin: D3LayoutService.margin
    }

    return {
      link: link,
      restrict: 'E',
      scope: { data: '=' }   // simple data init in html
    }
  }
)

function link(scope, el, attr){

  // SETUP DATA
  var color = d3.scale.category10();
  var min = Math.min(_o.width, _o.height);

  // PLACE BASE SVG
  el = el[0];
  // create svg to the page apply layout
  var svg = d3.select(el)
    .append('svg')
      .attr({
        width: _o.width,
        height: _o.height}
    )
    .append("g")
      .attr("transform", "translate(" + _o.width/2 + "," + _o.height/2 + ")");

  // GENERATORS
  var pieGenerator =
    d3.layout.pie()
      .sort(null)
      .value(function(d){ return d.value; });

  var arcGenerator =
    d3.svg.arc()
      .outerRadius(min / 2 * 0.9)
      .innerRadius(min / 2 * 0.5);

  // DRAW
  var arcs = svg.selectAll('path');

  // REACTIONS
  scope.$watch('data', function(data){
    // apply new data
    arcs = arcs.data(pieGenerator(data));
    // add path tags if new slices are added
    arcs
      .enter()
      .append('path')
        .style('stroke', 'white')
        .attr('fill', function(d, i){ return color(i) });

    // remove paths that no longer have data
    arcs.exit()
        .remove();

    arcs.attr('d', arcGenerator);

  }, true); // look for changes within the object

}


