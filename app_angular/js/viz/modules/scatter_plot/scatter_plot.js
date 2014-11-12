'use strict';

var _o = {};
var d3 = require('d3');

module.exports = angular.module('app.viz.scatterplot.chart', [
  require('../../services/d3_layout_service').name
])

.directive('vizScatterPlot',
  /*@ngInject*/
  function vizScatterPlot ($timeout, $window, D3LayoutService) {

    _o = {
      $timeout: $timeout,
      $window: $window,
      width: D3LayoutService.width,
      height: D3LayoutService.height,
      margin: D3LayoutService.margin
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

  var renderTimeout;
  // PREPARE DATA
  var x = d3.scale.linear();
  var y = d3.scale.linear();
  var m = 50;

  // APPEND SVG TO ELEMENT
  el = el[0];
  var svg = d3.select(el)
    .append('svg');

  // GENERATORS
  var xAxis =
    d3.svg.axis()
      .scale(x)
      .orient('bottom')
      .tickFormat(function(d, i){ return i + 1; });

  var yAxis =
    d3.svg.axis()
      .scale(y)
      .orient('left');

  var lineGen
    = d3.svg.line()
      .x(function (d, i) { return x(i); })
      .y(function (d) { return y(d.value); })
      .interpolate("linear");


  // RENDER
  var xAxisG = svg.append('g').attr('class', 'x-axis');
  var yAxisG = svg.append('g').attr('class', 'y-axis');
  var points = svg.append('g').attr('class', 'points')
                    .selectAll('g.point');

  var lines = svg.append("g").attr('class', 'lines').selectAll('.line');
  // var lines = svg.selectAll('.line');

  // UPDATE
  function update(){

    if (renderTimeout) {
      _o.$timeout.cancel(renderTimeout);
      renderTimeout = undefined;
    }
    renderTimeout = _o.$timeout(
      function () {
        // DATA
        if(!scope.data){ return };
        var data = scope.data;

        var x_extent = d3.extent(data, function(d, i){ return i });
        x.domain(x_extent);

        var y_max = d3.max(data, function(d){ return d.value });
        y.domain([0, y_max]);

        // RENDER
        points = points.data(data);

        points.exit().remove();

        var point =
          points.enter()
                .append('g')
                  .attr('class', 'point');

        point.append('circle').attr('r', 5)
          .on('mouseover', function(d){
            scope.$apply(function(){
              scope.selectedPoint = d;
            });
          });

        // update the position of all the points
        points.attr('transform', function(d, i){
          return 'translate(' + [x(i), y(d.value)] + ')';
        });


        lines = lines.data([data]);

        lines.exit().remove();

        lines
          .enter()
          .append('path')
            .attr('class', 'line')
            .attr('d', lineGen);

        xAxisG.call(xAxis);
        yAxisG.call(yAxis);

      },
      200
    );


  };

  // REACTIVITY
  scope.$watch('data', update);
  // responsive
  scope.$watch(function(){
    _o.width = el.clientWidth;
    _o.height = el.clientHeight;
    return _o.width * _o.height;
  }, resize );

  // apply chart resize
  _o.$window.onresize = function() {
    scope.$apply();
  };

  function resize(){
    svg.attr({width: _o.width, height: _o.height});
    // lines.attr({width: _o.width, height: _o.height});

    x.range([m, _o.width - m]);
    y.range([_o.height - m, m]);
    xAxis.tickSize(-_o.height + 2 * m);
    yAxis.tickSize(-_o.width + 2 * m);
    xAxisG.attr('transform', 'translate(' + [0, y.range()[0] + 0.5] + ')');
    yAxisG.attr('transform', 'translate(' + [x.range()[0], 0] + ')');

    update();
  }

}
