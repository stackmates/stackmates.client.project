'use strict';

var d3 = require('d3');
var _o = {};              // configuration object

// LAYOUT SETTINGS
_o.width = 800;
_o.height = 300;
_o.margin = {
  top: 10,
  right: 10,
  bottom: 10,
  left: 10
};

// RAW DATA
var data = [ 10870000, 9550000, 10510000,
                   9270000, 10370000, 9210000,
                   10430000, 10480000, 12260000,
                   11050000, 11010000, 11300000,
                   11460000, 10840000, 10990000,
                   12420000 ];


// DIRECTIVE DEFINITION OBJECT
module.exports = /*@ngInject*/
  function BarChart () {
    return {
      link: link,
      restrict: 'E'
    };
  };

function link(scope, el, attr){
  // SETUP
  el = el[0];
  // create svg to the page apply layout
  var svg = d3.select(el)
    .append('svg')
      .attr("height", _o.height)
      .attr("width", _o.width)
    .append("g")
      .attr("transform", "translate(" + 0 + "," + 0 + ")");

  // DATA CONVERSION

  // the episode with the most views
  var max = d3.max(data);

  // GENERATORS
  var scale = d3.scale.linear()
    .domain(d3.extent(data))
    .range([0, _o.height]);

  // APPLY DATA TO DRAW SHAPES
  svg.selectAll('thing')
     .data(data)
     .enter()
      .append('thing')

}
