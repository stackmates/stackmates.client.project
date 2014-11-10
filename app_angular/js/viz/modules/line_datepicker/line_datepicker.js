'use strict';

var _o = {};
var d3 = require('d3');

module.exports = angular.module('app.viz.linewithdatepicker', [
  require('../../services/d3_layout_service').name
])

.directive('vizLineChartWithDatepicker',
  /*@ngInject*/
  function vizLineChartWithDatepicker ($timeout, D3LayoutService) {
    _o = {
      $timeout: $timeout,
      width: D3LayoutService.width,
      height: D3LayoutService.height,
      margin: D3LayoutService.margin
    }
    return {
      link: link,
      restrict: 'E',
      scope: {
        data: "=",
        dateRange: "=",
        label: '@',
        onClick: '&'
      }
    }
  }
)

function link(scope, el, attr){

  // PREPARE DATA
  var renderTimeout;
  // var margin = {top: 10, right: 10, bottom: 5, left: 20};

  var parseDate = d3.time.format("%m/%d/%y").parse;
  var x = d3.time.scale().range([0, _o.width]);
  var y = d3.scale.linear().range([_o.height, 0]);

  // APPEND SVG TO ELEMENT
  el = el[0];
  var svg = d3.select(el)
    .append('svg')
      // .attr("height", _o.height)
      .attr("width", '100%')
    .append("g")
      .attr("transform", "translate(" + _o.width + "," + _o.height + ")");

  // GENERATORS
  var xAxis =
    d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis =
    d3.svg.axis()
      .scale(y)
      orient("left");



  var line
    = d3.svg.line()
      .x(function (d) {
          return x(d.day);
      })
      .y(function (d) {
          return y(d.cnt);
      });

  // APPLY DATA TO DRAW SHAPES
  scope.render = function (dateRange) {

    svg.selectAll('*').remove();

    if (!dateRange) return;
    if (renderTimeout) {
      $timeout.cancel(renderTimeout);
    }

    renderTimeout = $timeout(
      function () {
        var width = d3.select(ele[0])[0][0].offsetWidth - margin.left - margin.right;
        var height = 200 - margin.top - margin.bottom;

        scope.data.forEach(function (d) {
          d.day = parseDate(d.Day);
          d.cnt = +d.Sessions;
        });

        x.domain(d3.extent(data, function (d) {
          return d.day;
        }));
        y.domain(d3.extent(data, function (d) {
          return d.cnt;
        }));

        svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

        svg.append("g")
          .attr("class", "y axis").call(yAxis)
          .append("text").attr("transform", "rotate(-90)")
          .attr("y", 6).attr("dy", ".71em")
          .style("text-anchor", "end").text("#");

        svg.append("path").datum(data)
          .attr("class", "line").attr("d", line);

      },
      200
    );

  }

  // REACTIVITY
  $window.onresize = function() {
      scope.$apply();
  };

  scope.$watch('dateRange', function(newVals, oldVals) {
      return scope.render(newVals);
  }, false);

  scope.$watch('dateRange', function(newVals) {
      scope.render(newVals);
  }, false);

  scope.$watch(function() {
      return angular.element($window)[0].innerWidth;
  }, function() {
      scope.render(scope.dateRange);
  });

}

// http://henning.kropponline.de/2014/08/10/responsive-d3-js-modules-angularjs/
// http://www.triballabs.net/2013/02/the-basics-of-responsive-d3-charts/


