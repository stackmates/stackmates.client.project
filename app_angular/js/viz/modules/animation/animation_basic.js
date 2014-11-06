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
var data = [];

// DIRECTIVE DEFINITION OBJECT
module.exports = /*@ngInject*/
  function d3AnimationBasic () {
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
        .attr("width", _o.width)
      .append("g")
        .attr("transform", "translate(" + 0 + "," + -10 + ")");

  // GENERATORS

  // DRAW
  svg
    .append('circle')
    .attr({r:10, cx:100, cy:100})
    .transition()
      .duration(4000)
      .ease('bounce')  // linear,poly,quad,cubic,sin,exp,circle,elastic,bounce,cubic-in-out
      .attr('cx', 300);

}
