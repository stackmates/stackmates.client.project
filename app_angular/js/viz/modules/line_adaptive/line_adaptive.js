'use strict';

var _o = {};
var d3 = require('d3');

// var width = 800;
// var height = 500-37;
// var margin = {top: 20, right:20, bottom:20, left:50};

module.exports = angular.module('app.viz.line.scalingAdaptive', [
  require('../../services/d3_layout_service').name
])

.directive('lineScalingAdaptive',
  /*@ngInject*/
  function LineScalingAdaptive ( $interval, D3LayoutService ) {

    _o = {
      $interval: $interval,
      height: D3LayoutService.height,
      margin: D3LayoutService.margin,
      width: D3LayoutService.width
    }
    return {
      link: link,
      restrict: 'E',
      scope: {
        chartConfig: '='
      }
    }
  }
)

function link(scope, el, attr){

  _o.scope = scope;

  // DATA PREP
  _o.xScale =
    d3.scale.linear()
            .range([ 0, _o.width - _o.margin.left - _o.margin.right ]);

  _o.yScale =
    d3.scale.linear()
            .range([ _o.height - _o.margin.top - _o.margin.bottom, 0 ]);

  // APPEND SVG TO CONTAINER ELEMENT
  el = el[0];
  _o.svg =
    d3.select(el).append("svg")
      .attr("height", _o.height)
      .attr("width", _o.width)
      .append("g")
        .attr("transform","translate(" + _o.margin.left + "," + _o.margin.right + ")");

  // GENERATORS
  _o.line =
    d3.svg.line()
      .interpolate("monotone")
      .x(function(d){ return _o.xScale(d.x); })
      .y(function(d){ return _o.yScale(d.y); });


  scope.render = render;

  // initial page render
  scope.render();

  //continuous page render
  _o.$interval(scope.render, 1500);

};

function render(){
  // generate new data
  var lineCount = _o.scope.chartConfig.lines;
  var pointCount = _o.scope.chartConfig.points;

  if (!lineCount && !pointCount){ return }

  var data = newData(lineCount,pointCount);

  // obtain absolute min and max
  var yMin = data.reduce(function(pv,cv){
    var currentMin = cv.reduce(function(pv,cv){
      return Math.min(pv,cv.y);
    },100)
    return Math.min(pv,currentMin);
  },100);

  var yMax = data.reduce(function(pv,cv){
    var currentMax = cv.reduce(function(pv,cv){
      return Math.max(pv,cv.y);
    },0)
    return Math.max(pv,currentMax);
  },0);

  // set domain for axis
  _o.yScale.domain([yMin,yMax]);

  // create axis scale
  var yAxis =
    d3.svg.axis()
      .scale(_o.yScale)
      .orient("left");

  // if no axis exists, create one, otherwise update it
  if (_o.svg.selectAll(".y.axis")[0].length < 1 ){
    _o.svg.append("g")
      .attr("class","y axis")
      .call(yAxis);
  } else {
    _o.svg.selectAll(".y.axis")
          .transition()
          .duration(1500)
          .call(yAxis);
  }

  // generate line paths
  var lines =
    _o.svg.selectAll(".line")
          .data(data)
            .attr("class","line");

  // transition from previous paths to new paths
  lines
    .transition()
    .duration(1500)
      .attr("d",_o.line)
      .style("stroke", function(){
        return '#'+Math.floor(Math.random()*16777215).toString(16);
      });

  // enter any new data
  lines
    .enter()
    .append("path")
      .attr("class","line")
      .attr("d",_o.line)
      .style("stroke", function(){
        return '#'+Math.floor(Math.random()*16777215).toString(16);
      });

  // exit
  lines
    .exit()
    .remove();

}


// create random data
function newData(lineNumber, points){
  return d3.range(lineNumber).map(function(){
    return d3.range(points).map(function(item,idx){
      return {x:idx/(points-1),y:Math.random()*100};
    });
  });
}
