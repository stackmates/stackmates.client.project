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

//
_o.data = [];

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

  // Draw contents
  svg
    .append('g')
      .selectAll('path')
      .data()

}

