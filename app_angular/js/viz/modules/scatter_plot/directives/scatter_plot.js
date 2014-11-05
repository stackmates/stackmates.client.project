'use strict';

var _o = {};
var d3 = require('d3');

module.exports = /*@ngInject*/
  function scatterPlot ($timeout) {
    _o.$timeout = $timeout;

    return {
      link: link,
      restrict: 'E',
      scope: {
        data: '=',
        selectedPoint: '='
      }
    }
  }


function link(scope, el, attr){
  el = el[0];
  var w, h;
  var svg = d3.select(el).append('svg');
  var xAxisG = svg.append('g').attr('class', 'x-axis');
  var yAxisG = svg.append('g').attr('class', 'y-axis');
  var points = svg.append('g').attr('class', 'points').selectAll('g.point');
  var x = d3.scale.linear();
  var y = d3.scale.linear();
  var xAxis = d3.svg.axis().scale(x).orient('bottom')
    .tickFormat(function(d, i){ return i + 1; }); // 1 index the company ranks
  var yAxis = d3.svg.axis().scale(y).orient('left');
  var m = 50;

  scope.$watch(function(){
    w = el.clientWidth;
    h = el.clientHeight;
    return w + h;
  }, resize);

  function resize(){
    svg.attr({width: w, height: h});
    x.range([m, w - m]);
    y.range([h - m, m]);
    xAxis.tickSize(-h + 2 * m);
    yAxis.tickSize(-w + 2 * m);
    xAxisG.attr('transform', 'translate(' + [0, y.range()[0] + 0.5] + ')');
    yAxisG.attr('transform', 'translate(' + [x.range()[0], 0] + ')');

    update();

  }

  scope.$watch('data', _o.$timeout(update(), 200));


  function update(){
    if(!scope.data){ return };
    var data = scope.data;

    var x_extent = d3.extent(data, function(d, i){ return i });
    x.domain(x_extent);
    var y_max = d3.max(data, function(d){
      return d.value
    });
    y.domain([0, y_max]);
    points = points.data(data);
    points.exit().remove();
    var point = points.enter().append('g').attr('class', 'point');
    point.append('circle').attr('r', 5)
      .on('mouseover', function(d){
        scope.$apply(function(){
          scope.selectedPoint = d;
        });
      });

    // update the position of all the points
    points.attr('transform', function(d, i){
      console.log('d',d.value);
      console.log('i',i);
      return 'translate(' + [x(i), y(d.value)] + ')';
    });

    xAxisG.call(xAxis);
    yAxisG.call(yAxis);

  };
}


// http://henning.kropponline.de/2014/08/10/responsive-d3-js-modules-angularjs/

// http://www.triballabs.net/2013/02/the-basics-of-responsive-d3-charts/
// <script type="text/javascript">
//     (function (angular) {
//         angular.module('ngD3Demo', [])
//                 .directive('simpleChart', ['$window', '$timeout', function ($window, $timeout) {
//                     return {
//                         restrict: 'EA',
//                         scope: {
//                             dateRange: "=",
//                             label: '@',
//                             onClick: '&'
//                         },
//                         link: function (scope, ele, attrs) {

//                             var renderTimeout;
//                             var margin = {top: 10, right: 10, bottom: 5, left: 20};

//                             var svg = d3.select(ele[0])
//                                     .append('svg')
//                                     .style('width', '100%');
//                             $window.onresize = function() {
//                                 scope.$apply();
//                             };

//                             scope.$watch('dateRange', function(newVals, oldVals) {
//                                 return scope.render(newVals);
//                             }, false);

//                             scope.$watch('dateRange', function(newVals) {
//                                 scope.render(newVals);
//                             }, false);

//                             scope.$watch(function() {
//                                 return angular.element($window)[0].innerWidth;
//                             }, function() {
//                                 scope.render(scope.dateRange);
//                             });

//                             scope.render = function (dateRange) {
//                                 svg.selectAll('*').remove();

//                                 if (!dateRange) return;
//                                 if (renderTimeout) clearTimeout(renderTimeout);

//                                 renderTimeout = $timeout(function () {
//                                     var width = d3.select(ele[0])[0][0].offsetWidth - margin.left - margin.right,
//                                             height = 200 - margin.top - margin.bottom;
//                                     var url = 'data/blog-access-stats.csv';

//                                     var parseDate = d3.time.format("%m/%d/%y").parse;
//                                     var x = d3.time.scale().range([0, width]);
//                                     var y = d3.scale.linear().range([height, 0]);

//                                     var xAxis = d3.svg.axis()
//                                             .scale(x)
//                                             .orient("bottom");
//                                     var yAxis = d3.svg.axis()
//                                             .scale(y)
//                                             .orient("left");
//                                     var line = d3.svg.line()
//                                             .x(function (d) {
//                                                 return x(d.day);
//                                             })
//                                             .y(function (d) {
//                                                 return y(d.cnt);
//                                             });

//                                     d3.csv(url, function (error, in_data) {
//                                         data = in_data.filter(function(d){
//                                             console.log(parseDate(d.Day) >= dateRange.startDate);
//                                             if(parseDate(d.Day) >= dateRange.startDate &&
//                                                     parseDate(d.Day) <= dateRange.endDate){
//                                                 return d;
//                                             }
//                                         });
//                                         data.forEach(function (d) {
//                                             d.day = parseDate(d.Day);
//                                             d.cnt = +d.Sessions;
//                                         });
//                                         x.domain(d3.extent(data, function (d) {
//                                             return d.day;
//                                         }));
//                                         y.domain(d3.extent(data, function (d) {
//                                             return d.cnt;
//                                         }));

//                                         svg.append("g")
//                                                 .attr("class", "x axis")
//                                                 .attr("transform", "translate(0," + height + ")")
//                                                 .call(xAxis);
//                                         svg.append("g")
//                                                 .attr("class", "y axis").call(yAxis)
//                                                 .append("text").attr("transform", "rotate(-90)")
//                                                 .attr("y", 6).attr("dy", ".71em")
//                                                 .style("text-anchor", "end").text("#");
//                                         svg.append("path").datum(data)
//                                                 .attr("class", "line").attr("d", line);
//                                     });
//                                 }, 200);
//                             }
//                         }
//                     }
//                 }]);
//     })(angular);
// </script>

