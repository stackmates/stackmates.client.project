'use strict';

var d3 = require('d3');
var _ = require('lodash');
var moment = require('moment');

var _o = {};

_o.svg;
// layout settings
_o.margin = {top: 20, right: 80, bottom: 30, left: 50};
_o.width = 960 - _o.margin.left - _o.margin.right;
_o.height = 500 - _o.margin.top - _o.margin.bottom;


// TARGET DATA FORMAT
// impression_type  date(grouped)  value(sum)
// Set up a D3 service with standard boundaries

module.exports = /*@ngInject*/
  function reachLineChart (ReachResource) {
    _o.ReachResource = ReachResource;

    return {
      link: link,
      restrict: 'E',
      scope: {
        data: '=',
      }
    }
  }


function link (scope, el, attr) {

  // setup the core angular elements
  _o.attr = attr;
  _o.el = el[0];
  _o.scope = scope;


  _o.svg = d3.select(_o.el).append('svg')
    .attr("width", _o.width + _o.margin.left + _o.margin.right)
    .attr("height", _o.height + _o.margin.top + _o.margin.bottom)
    .append("g")
      .attr("transform", "translate(" + _o.margin.left + "," + _o.margin.top + ")");

  // hook up the render method
  _o.scope.render = d3Render;
  // call render
  _o.scope.render();

}

function d3Render () {

  // setup data
  _o.data = _o.ReachResource.flattenedResults;

  // setup layout
  d3LayoutAndTheme();

  draw();

}


function d3LayoutAndTheme () {
  // move alot of this into a common service

  _o.x = d3.time.scale()
      .range([0, _o.width]);

  _o.y = d3.scale.linear()
      .range([_o.height, 0]);

  _o.color = d3.scale.category10();

  _o.xAxis = d3.svg.axis()
      .scale(_o.x)
      .orient("bottom");

  _o.yAxis = d3.svg.axis()
      .scale(_o.y)
      .orient("left");

  _o.x.domain(d3.extent(_o.data, function(d) { return d.date; }));

  _o.y.domain([ _.min(_.pluck(_o.data, 'value')) , _.max(_.pluck(_o.data, 'value')) ]);

  // SET LINE DATA ATTRIBUTES HERE
  _o.line = d3.svg.line()
      .interpolate("basis")
      .x(function(d) { return _o.x(d.date); })
      .y(function(d) { return _o.y(d.value); });

}

function draw () {

  _o.color.domain(d3.keys(['impressions', 'organic', 'viral', 'paid']));

  _o.svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + _o.height + ")")
      .call(_o.xAxis);

  _o.svg.append("g")
      .attr("class", "y axis")
      .call(_o.yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Impressions");

  var impressions = _o.color.domain().map(function(name) {
    return {
      name: name,
      values: _o.data.map(function(d) {
        return { date: d.date, impressions: d.value }
      })
    };
  });

  var impression = _o.svg.selectAll(".impression")
      .data(impressions)
    .enter().append("g")
      .attr("class", "impression");


  impression.append("path")
      .attr("class", "line")
      .attr("d", function(d) { return _o.line(d.values); })
      .style("stroke", function(d) { return _o.color(d.name); });

  impression.append("text")
      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + _o.x(d.value.date) + "," + _o.y(d.value.impressions) + ")"; })
      .attr("x", 3)
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });


}
