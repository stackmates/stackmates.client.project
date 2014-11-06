'use strict';

// the most basic d3 directive

var window = require('global');
var d3  = require('d3');
window.d3 = d3;
var _   = require('lodash');
var _o  = {};                    // shared configuration object

// layout settings
_o.width = 300;
_o.height = 0;
_o.margin = {
  top:    10,
  right:  10,
  bottom: 10,
  left:   10
};

module.exports = /*@ngInject*/
  function d3ExpOne () {

    return {
      link: link,
      restrict: 'E'
    }
  }


function link (scope, el, attr) {

  // Get the element
  el = el[0];

  // DRAW AND APPEND the CONTAINER
  d3.select(el)
    .append("svg")
      .attr("height", _o.height)
      .attr("width", _o.width);

}
