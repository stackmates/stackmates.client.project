'use strict';

// THE DIAGONAL GENERATOR
var d3  = require('d3');
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

// source data
var source = { x: 150, y: 30 };
var targets = [
  { x: 10, y: 150 },
  { x: 80, y: 150 },
  { x: 150, y: 150 },
  { x: 220, y: 150 },
  { x: 290, y: 150 }
];
// data refinement
// create the link pairs
var links = targets.map(function(target){
  return { source: source, target: target};
});
// add all the nodes
var nodes = targets.concat(source);

module.exports = /*@ngInject*/
  function d3Diagonal () {
    return {
      link: link,
      restrict: 'E'
    }
  };

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
      .attr("transform", "translate(" + 50 + ", 50 )");

  // Generators
  var diagonalGenerator = d3.svg.diagonal()
        .source(function(d) { return {"x":d.source.y, "y":d.source.x}; })
        .target(function(d) { return {"x":d.target.y, "y":d.target.x}; })
        .projection(function(d) { return [d.y, d.x]; });

  // use the diagonal generator to take links and create the curved paths
  svg.selectAll('path')
    .data(links)
    .enter()
    .append('path')
      .attr('d', diagonalGenerator);


  svg.selectAll('circle')
    .data(nodes)
    .enter()
    .append('circle')
      .attr({
        r: 10,
        cx: function (d){ return d.x; },
        cy: function (d){ return d.y; }
      });

}


// references
// http://stackoverflow.com/questions/15007877/how-to-use-the-d3-diagonal-function-to-draw-curved-lines
