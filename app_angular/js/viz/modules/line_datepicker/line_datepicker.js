'use strict';

var _o = {};
var d3 = require('d3');

module.exports = angular.module('app.viz.linewithdatepicker', [
  require('../../services/d3_layout_service').name
])

.directive('vizLineChartWithDatepicker',
  /*@ngInject*/
  function vizLineChartWithDatepicker ($timeout, $window, D3LayoutService) {
    _o = {
      $timeout: $timeout,
      $window: $window,
      width: D3LayoutService.width,
      margin: D3LayoutService.margin,
      height: D3LayoutService.height
    }
    return {
      link: link,
      restrict: 'E',
      scope: {
        data: "=",
        // dateRange: "@",
        label: '@'
        // onClick: '&'
      }
    }
  }
)

function link(scope, el, attr){

  var renderTimeout;
  var m = 50;

  // DATA PREP
  var parseDate =
    d3.time.format("%x").parse;

  var xScale = d3.time.scale()
           // .range([0, _o.width]);
  var yScale = d3.scale.linear()
            // .range([_o.height, 0]);

  // APPEND SVG TO CONTAINER ELEMENT
  var svg = d3.select(el[0])
    .append('svg');

  // GENERATORS
  var xAxis =
    d3.svg.axis()
      .scale(xScale)
      .orient("bottom");

  var yAxis =
    d3.svg.axis()
      .scale(yScale)
      .orient("left");

  var lineGen
    = d3.svg.line()
      .x(function (d) { return xScale(d.plotDay); })
      .y(function (d) { return yScale(d.plotCnt); })
      .interpolate("linear");

  var xAxisG = svg.append('g').attr('class', 'x-axis');
  var yAxisG = svg.append('g').attr('class', 'y-axis');
  // var lines  = svg.append('g').attr('class', 'lines').selectAll('g.line');

  // UPDATE
  function update(){

    // if (!dateRange) return;
    if (renderTimeout) {
      _o.$timeout.cancel(renderTimeout);
    }

    renderTimeout = _o.$timeout(
      function () {

        var parseDate = d3.time.format("%x").parse;

        scope.data.forEach(function (d) {
          d.plotDay = parseDate(d.day);
          d.plotCnt = +d.cnt;
        });

        xScale.domain(d3.extent(scope.data, function (d) {
          return d.plotDay;
        }));
        yScale.domain(d3.extent(scope.data, function (d) {
          return d.plotCnt;
        }));

        // RENDER
        // svg.selectAll('*').remove();

        var lines = svg
          .append("path")
          .datum(scope.data)
            .attr("class", "line")
            .attr("d", lineGen);

        lines
          .exit()
          .remove();

        xAxisG.call(xAxis);

        yAxisG.call(yAxis)
          // .append("text")
          //   .attr("transform", "rotate(-90)")
          //   .attr("y", 6)
          //   .attr("dy", ".71em")
          //   .style("text-anchor", "end")
          //   .text("#");

      },
      200
    );

  }

  // REACTIVITY
  // scope.$watch('dateRange', function(newVals, oldVals) {
  //   return update();
  // }, false);

  // scope.$watch('dateRange', function(newVals) {
  //   update();
  // }, false);

  scope.$watch(function() {
    return angular.element(_o.$window)[0].innerWidth;
  }, resize );

  // responsive
  _o.$window.onresize = function() {
    scope.$apply();
  };

  function resize(){
    svg.attr({
      width: _o.width,
      height: _o.height
    });
    xScale.range([ _o.margin.left, _o.width - _o.margin.left ]);
    yScale.range([ _o.height - _o.margin.left , _o.margin.left ]);

    xAxis.tickSize( -_o.height + 2 * _o.margin.left );
    yAxis.tickSize( -_o.width + 2 * _o.margin.left);

    xAxisG.attr('transform', 'translate(' + [0, yScale.range()[0] + 0.5] + ')');
    yAxisG.attr('transform', 'translate(' + [xScale.range()[0], 0] + ')');

    update();
  }

}




// http://henning.kropponline.de/2014/08/10/responsive-d3-js-modules-angularjs/


// http://www.triballabs.net/2013/02/the-basics-of-responsive-d3-charts/

 // var padding = {top: 20, right: 20, bottom: 30, left: 50};
 //  var parseDate = d3.time.format("%d-%b-%y").parse;
 //  var sourceData, xScale, yScale, line;
 //  var prevChartWidth = 0, prevChartHeight = 0;
 //  var updateTransistionMS = 750; // milliseconds

 //  // create svg and g to contain the chart contents
 //  var chartSvg = d3.select("#chartContainer").append("svg")
 //  .append("g")
 //  .attr("class", "chartContainer")
 //  .attr("transform", "translate(" + padding.left + "," + padding.top + ")");

 //  // create the x axis container
 //  chartSvg.append("g")
 //  .attr("class", "x axis");

 //  // create the y axis container
 //  chartSvg.append("g")
 //  .attr("class", "y axis");

 //  // get the data
 //  d3.tsv("data.tsv", function(error, data) {
 //    // process data
 //    data.forEach(function(d) {
 //      d.date = parseDate(d.date);
 //      d.close = +d.close;
 //    });

 //    // set the global data variable
 //    sourceData = data;

 //    // define the parts of the axis that aren't dependent on width or height
 //    xScale = d3.time.scale()
 //    .domain(d3.extent(sourceData, function(d) { return d.date; }));

 //    yScale = d3.scale.linear()
 //    .domain([0, d3.max(sourceData, function(d) { return d.close; })]);

 //    xAxis = d3.svg.axis()
 //    .scale(xScale)
 //    .orient("bottom");

 //    yAxis = d3.svg.axis()
 //    .scale(yScale)
 //    .orient("left");

 //    // declare a new line
 //    line = d3.svg.line()
 //    .x(function(d) { return xScale(d.date); })
 //    .y(function(d) { return yScale(d.close); })
 //    .interpolate("linear");

 //    updateChart(true);
 //  });

 //  // called for initial update and updates for resize
 //  function updateChart(init)
 //  {
 //    // get the height and width subtracting the padding
 //    var chartWidth = document.getElementById('chartContainer').getBoundingClientRect().width - padding.left - padding.right;
 //    var chartHeight = document.getElementById('chartContainer').getBoundingClientRect().height - padding.top - padding.bottom;

 //    // only update if chart size has changed
 //    if ((prevChartWidth != chartWidth) ||
 //      (prevChartHeight != chartHeight))
 //    {
 //      prevChartWidth = chartWidth;
 //      prevChartHeight = chartHeight;

 //      //set the width and height of the SVG element
 //      chartSvg.attr("width", chartWidth + padding.left + padding.right)
 //      .attr("height", chartHeight + padding.top + padding.bottom);

 //      // ranges are based on the width and height available so reset
 //      xScale.range([0, chartWidth]);
 //      yScale.range([chartHeight, 0]);

 //      if (init)
 //      {
 //        // if first run then just display axis with no transition
 //        chartSvg.select(".x")
 //        .attr("transform", "translate(0," + chartHeight + ")")
 //        .call(xAxis);

 //        chartSvg.select(".y")
 //        .call(yAxis);
 //      }
 //      else
 //      {
 //        // for subsequent updates use a transistion to animate the axis to the new position
 //        var t = chartSvg.transition().duration(updateTransistionMS);

 //        t.select(".x")
 //        .attr("transform", "translate(0," + chartHeight + ")")
 //        .call(xAxis);

 //        t.select(".y")
 //        .call(yAxis);
 //      }

 //      // bind up the data to an array of circles
 //      var circle = chartSvg.selectAll("circle")
 //      .data(sourceData);

 //      // if already existing then transistion each circle to its new position
 //      circle.transition()
 //      .duration(updateTransistionMS)
 //      .attr("cx", function(d) { return xScale(d.date); })
 //      .attr("cy", function(d) { return yScale(d.close); });

 //      // if new circle then just display
 //      circle.enter().append("circle")
 //      .attr("cx", function(d) { return xScale(d.date); })
 //      .attr("cy", function(d) { return yScale(d.close); })
 //      .attr("r", 3)
 //      .attr("class", "circle");

 //      // bind up the data to the line
 //      var lines = chartSvg.selectAll(".line")
 //      .data([sourceData]); // needs to be an array (size of 1 for our data) of arrays

 //      // transistion to new position if already exists
 //      lines.transition()
 //      .duration(updateTransistionMS)
 //      .attr("d", line);

 //      // add line if not already existing
 //      lines.enter().append("path")
 //      .attr("class", "line")
 //      .attr("d", line);
 //    }
 //  }

 //  // look for resize but use timer to only call the update script when a resize stops
 //  var resizeTimer;
 //  window.onresize = function(event) {
 //    clearTimeout(resizeTimer);
 //    resizeTimer = setTimeout(function()
 //    {
 //      updateChart(false);
 //    }, 100);
 //  }


