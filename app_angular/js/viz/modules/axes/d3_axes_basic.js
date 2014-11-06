'use strict';

// THE BASICS of AXES
var d3  = require('d3');
var _o  = {};                    // configuration object

// LAYOUT SETTINGS
_o.width = 700;
_o.height = 100;
_o.margin = {
  top: 10,
  right: 10,
  bottom: 20,
  left: 10
};

// RAW DATA
var data = [
  [ "Burj Khalifa"                  , 2717],
  [ "Shanghai Tower"                , 2073],
  [ "Makkah Royal Clock Tower Hotel", 1971],
  [ "One World Trade Center"        , 1776],
  [ "Taipei 101"                    , 1670]
];


// DIRECTIVE DEFINITION OBJECT
module.exports = /*@ngInject*/
  function d3AxesBasic () {
    return {
      link: link,
      restrict: 'E'
    }
  }

function link (scope, el, attr) {
  // SETUP
  el = el[0];
  // add svg to the page
  // better to apply layout up front
  var svg =
    d3.select(el)
      .append('svg')
        .attr("height", _o.height)
        .attr("width", _o.width + 80)
      .append("g")
        .attr("transform", "translate(" + 0 + "," + 0 + ")");

  // GENERATORS
  // scale
  var scale =
    d3.scale.linear()
      .domain([0, d3.max(data, function(d){ return d[1]; })])
      .range([10, _o.width]);

  // axis
  var axisGenerator =
    d3.svg.axis()
      .scale(scale)
      .tickFormat(function(d){ return d3.format(',.0f')(d) + 'ft' }).ticks(5);


  // DRAW DATA

  //add circles along the axis for building heights
  svg
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
      .attr('r', 4)
      .attr('transform',
        function(d){
          return 'translate(' + scale(d[1]) + ', ' + (_o.height - _o.margin.bottom ) + ')'
        }
      );

  svg
    .selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text(function(d){ return d[0] })
      .attr('class', 'Axes_text')
      .attr('transform', function(d){
        return 'translate(' + scale(d[1]) + ', ' + ( _o.height - _o.margin.bottom ) + ') '
          + 'rotate(-20) translate(4, -8)';
      });

  // to help with making thing pretty add to g first
  //  moving the axis down 100 pixels
  svg
    .append('g')
    .call(axisGenerator)
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + (_o.height - _o.margin.bottom ) + ')');


}




// var width = 700, height = 100;
// var svg = d3.select('body').append('svg');
// // worlds latest buildings
// var data = [
//   ["Burj Khalifa"                  , 2717],
//   ["Shanghai Tower"                , 2073],
//   ["Makkah Royal Clock Tower Hotel", 1971],
//   ["One World Trade Center"        , 1776],
//   ["Taipei 101"                    , 1670]
// ];
// var scale = d3.scale.linear()
//   .domain(d3.extent(data, function(d){ return d[1]; }))
//   .range([10, width]);
// // add the data points
// svg.selectAll('circle').data(data)
//   .enter().append('circle').attr('r', 4).attr('transform', function(d){
//     return 'translate(' + scale(d[1]) + ', ' + height + ')'
//   });
// // add the labels
// svg.selectAll('text').data(data)
//   .enter().append('text').text(function(d){ return d[0] })
//   .attr('transform', function(d){
//     return 'translate(' + scale(d[1]) + ', ' + height + ') '
//       + 'rotate(-20) translate(5,-5)';
//   });
// // create the axis
// var axis = d3.svg.axis().scale(scale)
//   .tickFormat(function(d){ return d3.format(',.0f')(d) + 'ft' }).ticks(5);
// // add the axis inside a new `g`
// svg.append('g').call(axis).attr('class', 'x axis')
//   .attr('transform', 'translate(0,' + height + ')');
