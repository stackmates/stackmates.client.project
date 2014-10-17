'use strict';

var d3 = require('d3');
var _ = require('lodash');

var _o = {};

// layout settings
_o.WIDTH = 600;
_o.HEIGHT = 300;
_o.MARGINS = { top: 20, right: 20, bottom: 20, left: 50 };


var lineData = [{
  x: 1,
  y: 5
}, {
  x: 20,
  y: 20
}, {
  x: 40,
  y: 10
}, {
  x: 60,
  y: 40
}, {
  x: 80,
  y: 5
}, {
  x: 100,
  y: 60
}];

module.exports = /*@ngInject*/
  function simpleLineChart (ReachResource) {

    _o.ReachResource = ReachResource;

    return {
      link: link,
      restrict: 'E'
    }
  }


function link (scope, el, attr) {

  // setup the core angular elements
  _o.attr = attr;
  _o.el = el[0];
  _o.scope = scope;

  _o.data = _o.ReachResource.flattenedResults;
  ////////////////// REMEMBER THIS /////////////////
  TEST.data = _o.data;
  ///////////////////////////////////////////

  lineData = _.filter(_o.data, {'impression_type': 'post_impressions_organic' });


  // DRAW AND APPEND the CONTAINER
  _o.svg = d3.select(_o.el)
      .append("svg")
        .attr("height", _o.HEIGHT)
        .attr("width", _o.WIDTH)
        .append("g")
          .attr("transform","translate(" + _o.MARGINS.left + "," + -5 + ")");


  setupRangesAndAxis();

}


function setupRangesAndAxis() {

  var xRange = d3.scale.linear()
                .range([_o.MARGINS.left, _o.WIDTH - _o.MARGINS.right])
                .domain([
                  d3.min(lineData, function(d) { return d.date; }),
                  d3.max(lineData, function(d) { return d.date; })
                ]);

  var yRange = d3.scale.linear()
                .range([_o.HEIGHT - _o.MARGINS.bottom, _o.MARGINS.top])
                .domain([
                  d3.min(lineData, function(d) { return d.value; }),
                  d3.max(lineData, function(d) { return d.value; })
                ]);

  var xAxis = d3.svg.axis()
      .scale(xRange)
      .tickSize(5)
      .tickSubdivide(true);

  var yAxis = d3.svg.axis()
      .scale(yRange)
      .tickSize(5)
      .orient('left')
      .tickSubdivide(true);


  var lineFunc = d3.svg.line()
    .x(function(d) {
      return xRange(d.date);
    })
    .y(function(d) {
      return yRange(d.value);
    })
    .interpolate('linear');


  drawGraph(xAxis, yAxis, lineFunc);

}


function drawGraph(xAxis, yAxis, lineFunc) {

  _o.svg.append('svg:g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + (_o.HEIGHT - _o.MARGINS.bottom) + ')')
    .call(xAxis);

  _o.svg.append('svg:g')
    .attr('class', 'y axis')
    .attr('transform', 'translate(' + (_o.MARGINS.left) + ',0)')
    .call(yAxis);

  _o.svg.append('svg:path')
    .attr('d', lineFunc(lineData))
    .attr('stroke', 'blue')
    .attr('stroke-width', 2)
    .attr('fill', 'none');

}


// this is getting domain color but won't work for me
  // _o.color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));
  // _o.color.domain(d3.keys(['impressions', 'organic', 'viral', 'paid']));


  // impression.append("path")
  //     .attr("class", "line")
  //     .attr("d", function(d) { return _o.line(d.values); })
  //     .style("stroke", function(d) { return _o.color(d.name); });

  // impression.append("text")
  //     .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
  //     .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.impressions) + ")"; })
  //     .attr("x", 3)
  //     .attr("dy", ".35em")
  //     .text(function(d) { return d.name; });


//   color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));

//   var cities = color.domain().map(function(name) {
//     return {
//       name: name,
//       values: data.map(function(d) {
//         return {date: d.date, temperature: +d[name]};
//       })
//     };
//   });

//   svg.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
//     .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 6)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Temperature (ºF)");

//   var city = svg.selectAll(".city")
//       .data(cities)
//     .enter().append("g")
//       .attr("class", "city");

//   city.append("path")
//       .attr("class", "line")
//       .attr("d", function(d) { return line(d.values); })
//       .style("stroke", function(d) { return color(d.name); });

//   city.append("text")
//       .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
//       .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
//       .attr("x", 3)
//       .attr("dy", ".35em")
//       .text(function(d) { return d.name; });
// });



