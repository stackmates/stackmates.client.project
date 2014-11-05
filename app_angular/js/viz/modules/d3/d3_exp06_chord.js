'use strict';

// THE CHORD GENERATOR

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
_o.matrix = [
  // each cell value represents a single row-to-column relationship
  [ 0, 1.3, 2, 1],
  [ 1.9, 0, 1, 2.1],
  [ 2, 2, 3.2, 1.8],
  [ 2.7, 0, 1, 0],
];

module.exports = /*@ngInject*/
  function d3Chord () {

    return {
      link: link,
      restrict: 'E'
    }
  }


function link (scope, el, attr) {

  // Get the element
  el = el[0];
  // add svg to the page
  var svg = d3.select(el)
              .append('svg')
                .attr("height", _o.height)
                .attr("width", _o.width)
              .append("g")
                .attr("transform", "translate(" + _o.width / 2 + "," + _o.height / 2 + ")");


  var chord = d3.layout.chord().matrix(_o.matrix);
  var innerRadius = Math.min(_o.width, _o.height) * .41;
  var outRadius = innerRadius * 1.1;

  var fill = d3.scale.ordinal()
    .domain(d3.range(4))
    .range(['#FFA400','C50080','#ABF000','#1049A9',]);


  // Draw contents
  svg
    .append('g').selectAll('path').data(chord.chords)
      .enter()
      .append('path')
        .attr('d', d3.svg.chord().radius(innerRadius))
        .style('fill', function(d) { return fill(d.target.index); })
        .style('opacity', 0.5);




}

