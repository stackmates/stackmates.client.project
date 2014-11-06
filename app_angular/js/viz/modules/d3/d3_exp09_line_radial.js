'use strict';

// THE LINE RADIAL GENERATOR

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

var n = 1000;
var max_r = 250;
var rotations = 10;

var data = d3.range(n).map(function(d){
  var t = d / (n - 1);
  return [ t * max_r, t * Math.PI * rotations * 2 ];
})


module.exports = /*@ngInject*/
  function d3LineRadial () {
    return {
      link: link,
      restrict: 'E'
    }
  }


function link (scope, el, attr) {

  // Get the element
  el = el[0];
  // add svg to the page
  // better to apply layout up front
  var svg = d3.select(el)
    .append('svg')
      .attr("height", _o.height)
      .attr("width", _o.width)
    .append("g")
      .attr("transform", "translate(" + _o.width / 2 + "," + _o.height / 2 + ")");

  // Generator
  var lineRadialGenerator = d3.svg.line.radial();

  // Draw
  svg
    .append('path')
      .datum(data)
      .attr('d', lineRadialGenerator);

}

