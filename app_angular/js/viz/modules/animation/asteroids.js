'use strict';

// ASTEROIDS
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
var level = 0;

// DIRECTIVE DEFINITION OBJECT
module.exports = /*@ngInject*/
  function d3Asteroids ($interval, $window) {

    _o = {
      $interval: $interval,
      $window: $window,
      width: $window.innerWidth * 0.6,
      height: $window.innerHeight * 0.6
    };
    return {
      link: link,
      restrict: 'E',
      scope: {
         score:'=',
      }
    };
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
        .attr("transform", "translate(" + 0 + "," + 0 + ")");

  // DRAW
  var circles = svg
    .selectAll('circle')
    .data(d3.range(20))
    .enter()
    .append('circle')
      .attr('r', 20);

  // animation and update
  function update() {
    circles
      .transition()
      .duration(2000)
        .attr({
          cx: function(){ return Math.random() * _o.width },
          cy: function(){ return Math.random() * _o.height }
        });

    scope.score = level++;

  }

  update();
  _o.$interval(update, 2000);


}
