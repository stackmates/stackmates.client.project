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

_o.rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

module.exports = /*@ngInject*/
  function d3ExpThree () {

    return {
      link: link,
      restrict: 'E'
    }
  }


function link (scope, el, attr) {

  // Get the element
  el = el[0];

  var arcGenerator = d3.svg.arc()
    .innerRadius(30)
    // the outer radius is sef from the index of the rainbox array
    .outerRadius(function(d, i){ return (_o.rainbow.length - i ) * 20 + 30})
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2 );


  // DRAW AND APPEND the CONTAINER
  d3.select(el)
    .append("svg")
      .attr("height", _o.height)
      .attr("width", _o.width)
      .selectAll('path')
        .data(_o.rainbow)
        .enter()
        .append('path')
          .attr({
            d: arcGenerator,
            transform: 'translate(200,200)',
            fill: function(d) { return d }
          });

}


