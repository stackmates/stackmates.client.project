'use strict';

// the most basic d3 directive

var d3  = require('d3');
var _   = require('lodash');
var _o  = {};                    // shared configuration object

// layout settings
_o.width = 400;
_o.height = 300;
_o.margin = {
  top:    10,
  right:  10,
  bottom: 10,
  left:   10
};

_o.lineData = [[154, 14], [35,172], [251,127], [31,58],[157,205],[154, 14]];

module.exports = /*@ngInject*/
  function d3ExpTwo () {

    return {
      link: link,
      restrict: 'E'
    }
  }


function link (scope, el, attr) {

  // Get the element
  el = el[0];

  var lineGenerator = d3.svg.line()
    .x(function(d) { return d[0]; })
    .y(function(d) { return d[1]; });


  // DRAW AND APPEND the CONTAINER
  d3.select(el)
    .append("svg")
      .attr("height", _o.height)
      .attr("width", _o.width)
      .append('path')
        .datum(_o.lineData)
        .attr('d', lineGenerator);

}

// reference if object input
// var data = [ {x: x1, y: y1}, {x: x1, y: y1}, {x: x1, y: y1}, etc... ]

// var line = d3.svg.line()
//   x(function(d) { return d.x })
//   y(function(d) { return d.y });

