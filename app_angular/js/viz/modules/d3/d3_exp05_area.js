'use strict';

// the most basic d3 directive

var d3  = require('d3');
var _   = require('lodash');
var _o  = {};                    // shared configuration object

// layout settings
_o.width = 400;
_o.height = 300;
_o.margin = {
  top: 10,
  right: 10,
  bottom: 10,
  left: 10
};

// generate random data
_o.data = d3.range(100)
            .map(function(){ return Math.random() * 30 + 0 })
            .map(function(d, i){ return { x: i * 10, y: d }});

module.exports = /*@ngInject*/
  function d3Area () {

    return {
      link: link,
      restrict: 'E'
    }
  }


function link (scope, el, attr) {

  // Get the element
  el = el[0];
  var svg = d3.select(el)
              .append('svg')
                .attr("height", _o.height)
                .attr("width", _o.width);

  var areaGenerator = d3.svg.area()
    .y0(100)  // set the lower y bound of the area shape
    .y1(function(d){ return d.y })
    .x(function(d, i){ return d.x });
  // draw the area shape under the line of the plot
  svg.append('path').datum(_o.data).attr('d', areaGenerator);

  // give the area shape a border alongs its top edge
  var lineGenerator = d3.svg.line()
    .x(function(d){ return d.x})
    .y(function(d){ return d.y})
  svg.append('path')
        .datum(_o.data)
        .attr('d', lineGenerator )
        .attr('class', 'plot');

  // Draw cirles at the points
  svg
    .selectAll('circle')
      .data(_o.data)
      .enter()
      .append('circle')
        .attr('cx', function(d) { return d.x })
        .attr('cy', function(d) { return d.y })
        .attr('r', 3);


}

