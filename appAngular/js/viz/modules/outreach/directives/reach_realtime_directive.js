'use strict';

var d3 = require('d3');
var _ = require('lodash');

var width = 960;
var height = 600;
var margins = {top: 20,bottom: 50,left: 70,right: 20};

var _o = {};

// TARGET DATA FORMAT
// impression_type  date(grouped)  value(sum)

module.exports = /*@ngInject*/
  function reachRealtimeLineChart (ReachResource) {
    return {
      link: link,
      restrict: 'E',
      scope: {
        data: '=',
      }
    }
  }


function link (scope, el, attr) {

  _o.attr = attr;
  _o.el = el[0];
  _o.scope = scope;

  var updatesOverTime = [];

  // Setup for SVG

  _o.svg = d3.select(_o.el)
    .append("svg")
      .attr('width', width)
      .attr('height', height + 200);



}


function setupRangesAndAxis() {

  // RANGES
  var xRange = d3.time.scale()
                      .range([margins.left, width - margins.right])
                      .domain([new Date(), new Date()]);

  var yRange = d3.scale.linear()
                      .range([height - margins.bottom, margins.top])
                      .domain([0,0]);


  // AXIS
  var xAxis = d3.svg.axis()
                    .scale(xRange)
                    .tickSize(5)
                    .tickSubdivide(true)
                    .tickFormat(d3.time.format("%X"));

  var yAxis = d3.svg.axis()
                    .scale(yRange)
                    .tickSize(5)
                    .orient("left")
                    .tickSubdivide(true);


  // ELEMENTS
  var xAxisElement = svg.append('g')
                        .attr('class', 'x axis')
                        .attr('transform', 'translate(0,' + (height - margins.bottom) + ')')
                        .call(xAxis);

  // Add a label to the middle of the x axis
  var xAxisWidth = ((width - margins.right) - margins.left) / 2;
  xAxisElement.append('text')
              .attr('x', margins.left + xAxisWidth)
              .attr('y', 0)
              .attr('dy', "3em")
              .style('text-anchor', 'middle')
              .text('Time');


  var yAxisElement = svg.append('g')
                        .attr('class', 'y axis')
                        .attr('transform', 'translate(' + margins.left + ',0)')
                        .call(yAxis);

  // Add a label to the middle of the y axis
  var yAxisHeight = ((height - margins.bottom) - margins.top) / 2;
  yAxisElement.append('text')
              .attr('transform', 'rotate(-90)')
              .attr('y', 0)
              .attr('x', -(margins.top + yAxisHeight))
              .attr('dy', '-3.5em')
              .style('text-anchor', 'middle')
              .text('Updates per second');



  // GRAPH CONTENT - LINE
  var lineFunc = d3.svg.line()
                       .x(function(d) { return xRange(d.x); })
                       .y(function(d) { return yRange(d.y); })
                       .interpolate('linear');


}





svg.append('defs').append('clipPath')
                  .attr('id', 'clip')
                  .append('rect')
                  .attr('x', margins.left)
                  .attr('y', margins.top)
                  .attr('width', width)
                  .attr('height', height);

var line = svg.append('g')
              .attr('clip-path', 'url(#clip)')
              .append('path')
              .attr('stroke', 'blue')
              .attr('fill', 'none');


var maxNumberOfDataPoints = 20;

function update(updates) {
  // Update the ranges of the chart to reflect the new data
  if (updates.length > 0) {
    xRange.domain(d3.extent(updates, function(d) { return d.x; }));
    yRange.domain([
      d3.min(updates, function(d) { return d.y; }),
      d3.max(updates, function(d) { return d.y; })
    ])
  }


  // Until we have filled up our data window, we just keep adding
  // data points to the end of the chart.
  if (updates.length < maxNumberOfDataPoints) {
    line.transition()
        .ease('linear')
        .attr('d', lineFunc(updates));

    svg.selectAll('g.x.axis')
       .transition()
       .ease('linear')
       .call(xAxis);
  }
  // Once we have filled up the window remove points from
  // the start of the chart and move the data so the
  // chart looks like it is scrolling forwards in time
  else {
    // Calculate the ammount of translation on the x axis which equates
    // to the time between samples
    var xTranslation = xRange(updates[0].x) - xRange(updates[1].x);

    // Transform our line series immdiately, then translate it from
    // right to left. This gives the effect of our chart scrolling
    // forwards in time
    line
      .attr('d', lineFunc(updates))
      .attr('transform', null)
      .transition()
      .duration(samplingTime - 20)
      .ease('linear')
      .attr('transform', 'translate(' + xTranslation + ', 0)');

    svg.selectAll('g.x.axis')
       .transition()
       .duration(samplingTime - 20)
       .ease('linear')
       .call(xAxis);

  }

  svg.selectAll('g.y.axis')
     .transition()
     .call(yAxis);

}

// set up area to inform of new users
var newUserTextWidth = 150;

svg.append('text')
   .attr('class', 'new-user-text')
   .attr('fill', 'green')
   .attr('transform', 'translate(' +
      (width - margins.right - newUserTextWidth) + ',' +
      (height + 20) + ')')
   .attr('width', newUserTextWidth);

var textUpdateTransitionDuration = 550;
var updateNewUser = function(newUser) {
  var text = svg.selectAll('text.new-user-text').data(newUser);

  text.transition()
      .duration(textUpdateTransitionDuration)
      .style('fill-opacity', 1e-6)
      .transition()
      .duration(textUpdateTransitionDuration)
      .style('fill-opacity', 1)
      .text(function (d) { return d; });

}


// Add a text element below the chart, which will display the
// subject of new edits
svg.append("text")
    .attr("class", "edit-text")
    .attr("transform", "translate(" + margins.left + "," +
        (height + 20)  + ")")
    .attr("width", width - margins.left);

var updateEditText = function(latestEdit)   {
    var text = svg.selectAll("text.edit-text").data(latestEdit);

    text.transition()
        .duration(textUpdateTransitionDuration)
        .style("fill-opacity", 1e-6)
        .transition()
        .duration(textUpdateTransitionDuration)
        .style("fill-opacity", 1)
        .text(function (d) { return d; });
}

