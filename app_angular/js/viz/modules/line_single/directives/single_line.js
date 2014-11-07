'use strict';

var d3 = require('d3');
var _ = require('lodash');
var window = require('global');

var _o = {};


// layout settings
_o.WIDTH = 600;
_o.HEIGHT = 300;
_o.MARGINS = { top: 20, right: 20, bottom: 20, left: 50 };

var lineData = [{x:1,y:5},{x:20,y:20},{x:40,y:10},{x:60,y:40},{x:80,y:5},{x:100,y:60}];

module.exports = /*@ngInject*/
  // function simpleLineChart (ReachResource) {
  function simpleLineChart () {

    _o.ReachResource = [];

    return {
      link: link,
      restrict: 'E'
    }
  }


function link (scope, el, attr) {

  // setup the core angular elements
  _o.attr = attr;
  el = el[0];
  _o.scope = scope;

  _o.data = _o.ReachResource.flattenedResults;

  lineData = _.filter(_o.data, {'impression_type': 'post_impressions_organic' });


  // DRAW AND APPEND the CONTAINER
  _o.svg = d3.select(el)
      .append("svg")
        .attr("height", _o.HEIGHT)
        .attr("width", _o.WIDTH)
        .append("g")
          .attr("transform","translate(" + _o.MARGINS.left + "," + -5 + ")");


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


  // DRAW

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
