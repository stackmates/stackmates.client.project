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

