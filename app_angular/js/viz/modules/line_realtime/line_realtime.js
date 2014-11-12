'use strict';

var _o = {};
var d3 = require('d3');

module.exports = angular.module('app.viz.line.chart', [
  require('../../services/d3_layout_service').name,
  require('./line_responsive_service').name
])

.directive('vizLineRealtime',
  /*@ngInject*/
  function vizLine ($timeout, $window, D3LayoutService, Reach) {

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
        chartData: '='
      }
    }
  }
)

function link(scope, el, attr){

  // use this is to prevent rendering too quickly and creating watch issues
  var renderTimeout;

  var data = scope.chartData;

  // var padding = 20;
  // var pathClass = "path";
  var xScale, yScale, xAxisGen, yAxisGen, lineGen;


  var rawSvg = elem.find("svg")[0];
  var svg = d3.select(rawSvg);


  function update(){
    if (renderTimeout) {
      _o.$timeout.cancel(renderTimeout);
      renderTimeout = undefined;
    }
    renderTimeout =
      _o.$timeout(
        function () {

          redraw();

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

}
