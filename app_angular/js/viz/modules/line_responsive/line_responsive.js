'use strict';

var _o = {};
var d3 = require('d3');

module.exports = angular.module('app.viz.line.chart', [
  require('../../services/d3_layout_service').name,
  require('./line_responsive_service').name
])

.directive('vizLine',
  /*@ngInject*/
  function vizLine ($timeout, $window, D3LayoutService, VizLineChartService) {

    _o = {
      $timeout: $timeout,
      $window: $window,
      width: D3LayoutService.width,
      height: D3LayoutService.height,
      margin: D3LayoutService.margin,
      dataSource: VizLineChartService
    }
    return {
      link: link,
      restrict: 'E',
      scope: {
        data: '=',
        selectedPoint: '='
      }
    }
  }
)

function link(scope, el, attr){

  // use this is to prevent rendering too quickly and creating watch issues
  var renderTimeout;

  // scales
  var xScale = d3.time.scale()
    .nice(d3.time.year);

  var yScale = d3.scale.linear()
    .nice();

  // APPEND SVG TO ELEMENT
  // get the actual element not the jqlite wrapped object
  el = el[0];
  var svg = d3.select(el)
    .append('svg');


  // GENERATORS
  var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left");

  var line = d3.svg.line()
      .x(function(d) { return xScale(d.date); })
      .y(function(d) { return yScale(d.close); });


  _o.dataSource.getCSVData()
    .then(
      function (data) {

        data.forEach(function(d) {
          d.date = d3.time.format("%Y-%m-%d").parse(d.date);
          d.close = +d.close;
        });

        xScale.domain(d3.extent(data, function(d) { return d.date; }));
        yScale.domain(d3.extent(data, function(d) { return d.close; }));

        svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + _o.height + ")")
          .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
          .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("x", -(_o.margin.top) )
            .attr("dy", ".6em")
            .attr('class', 'Viz_textVertical')
            .style("text-anchor", "end")
            .text("Price ($)");


        var dataPerPixel = data.length/_o.width;
        var dataResampled = data.filter(
          function(d, i) { return i % Math.ceil(dataPerPixel) == 0; }
        );

        svg.append("path")
          .datum(dataResampled)
          .attr("class", "line")
          .attr("d", line);


        var firstRecord = data[data.length-1];
        var lastRecord = data[0];

        var first = svg.append("g")
          .attr("class", "first")
          .style("display", "none");

        first.append("text")
          .attr("x", -8)
          .attr("y", 4)
          .attr("text-anchor", "end")
          .text("$" + firstRecord.close);
        first.append("circle")
          .attr("r", 4);


        var last = svg.append("g")
          .attr("class", "last")
          .style("display", "none");

        last.append("text")
          .attr("x", 8)
          .attr("y", 4)
          .text("$" + lastRecord.close);
        last.append("circle")
          .attr("r", 4);

        function resize(){
          svg.attr({ width: _o.width, height: _o.height });

          xScale
            .range([ _o.margin.left, _o.width - _o.margin.left ])
            .nice(d3.time.year);

          yScale
            .range([ _o.height - _o.margin.left, _o.margin.left ])
            .nice();

          if (_o.width < 300 || _o.height < 80) {
            svg.select('.x.axis').style("display", "none");
            svg.select('.y.axis').style("display", "none");

            svg.select(".first")
              .attr("transform", "translate(" + xScale(firstRecord.date) + "," + yScale(firstRecord.close) + ")")
              .style("display", "initial");

            svg.select(".last")
              .attr("transform", "translate(" + xScale(lastRecord.date) + "," + yScale(lastRecord.close) + ")")
              .style("display", "initial");
          } else {
            svg.select('.x.axis')
              .style("display", "initial");

            svg.select('.y.axis')
              .style("display", "initial");

            svg.select(".last")
              .style("display", "none");
            svg.select(".first")
              .style("display", "none");
          }

          yAxis.ticks(Math.max(_o.height/50, 2));
          xAxis.ticks(Math.max(_o.width/50, 2));

          svg
            .attr("width", _o.width + _o.margin.left)
            .attr("height", _o.height + _o.margin.left)

          svg.select('.x.axis')
            .attr('transform', 'translate(' + [ 0, yScale.range()[0] + 0.5 ] + ')')  // WHY?
            // .attr("transform", "translate(0," + (_o.height - _o.margin.bottom) + ")")
            .call(xAxis);

          svg.select('.y.axis')
            .attr('transform', 'translate(' + [ xScale.range()[0], 0 ] + ')')
            // .attr("transform", "translate(" + _o.margin.left + ", 0)")
            .call(yAxis);

          dataPerPixel = data.length/_o.width;
          dataResampled = data.filter(
            function(d, i) { return i % Math.ceil(dataPerPixel) == 0; }
          );

          svg.selectAll('.line')
            .datum(dataResampled)
            .attr("d", line);

          // xAxis.tickSize(-_o.height + 2 * _o.margin.left);
          // yAxis.tickSize(-_o.width + 2 * _o.margin.left);


        }

        function update(){
          if (renderTimeout) {
            _o.$timeout.cancel(renderTimeout);
            renderTimeout = undefined;
          }
          renderTimeout =
            _o.$timeout(
              function () {

                resize();

              }, 200
            );
        };

        // REACTIVITY
        scope.$watch('data', update);

        // Responsive design extract this
        scope.$watch(function(){
          _o.width = el.clientWidth;
          _o.height = el.clientHeight;
          return _o.width * _o.height;
        }, update );

        // apply chart resize
        _o.$window.onresize = function() {
          scope.$apply();
        };

      },
      function (error) {
        console.log('Failed to load content: ' + error);
      }
    );


}
