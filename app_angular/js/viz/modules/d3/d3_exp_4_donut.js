'use strict';

// the most basic d3 directive

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

_o.data = [21, 32, 35, 64, 83];

module.exports = /*@ngInject*/
  function d3Donut () {

    return {
      link: link,
      restrict: 'E'
    }
  }


function link (scope, el, attr) {

  // Get the element
  el = el[0];

  var pie   = d3.layout.pie();
  var color = d3.scale.category10();

  // data conversion
  var arcData = pie(_o.data);


  var donutGenerator = d3.svg.arc()
    .innerRadius(60)
    .outerRadius(120);

  // DRAW AND APPEND the CONTAINER
  d3.select(el)
    .append("svg")
      .attr("height", _o.height)
      .attr("width", _o.width)
      .append('g').attr('transform', 'translate('+ _o.width/2 +','+ _o.height/2 +')')
        .selectAll('path')
          .data(arcData)
          .enter()
          .append('path')
            .attr('d', donutGenerator)
            .style('fill', function(d, i){
              return color(i);
            });


}

