'use strict';

var d3 = require('d3');

module.exports = /*@ngInject*/
  function reachAnalysis () {
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

  el = el[0];                                                    // select current element for nesting svg
  var w, h;                                                      // for setting height of viz
  var svg = d3.select(el).append('svg');                         // add svg into dom
  var xAxisG = svg.append('g').attr('class', 'x-axis');
  var yAxisG = svg.append('g').attr('class', 'y-axis');

  // replace this with a line
  var points = svg.append('g').attr('class', 'points').selectAll('g.point');  // what is this doing?

  var x = d3.scale.linear();
  var y = d3.scale.linear();

  var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient('bottom')
                    .tickFormat(
                      function(d,i){ return i + 1}  // index rank
                    );

  var yAxis = d3.svg.axis()
                    .scale(y)
                    .orient('left');

  var m = 50;


  scope.$watch(function(){
    w = el.clientWidth;             // inner width of an element in pixels
    h = el.clientHeight;            // inner height of an element in pixels
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
    console.log('client width is ', w);
    console.log('client height is ', h);
    update();
  }

  scope.$watch('data', update);

  function update(){
    if(!scope.data){ return };
    var data = scope.data;

    var x_extent = d3.extent(data, function(d, i){ return i });
    x.domain(x_extent);

    // get maximum y value of impressions
    var y_max = d3.max(data, function(d){
      console.log('max y value', d.post_impressions[0].value)
      if ( d.post_impressions[0].value ) {
        return d.post_impressions[0].value
      }
    });
    y.domain([0, y_max]);

    points = points.data(data);

    console.log('points', points);

    points.exit().remove();


    var point = points.enter().append('g').attr('class', 'point');

    point.append('circle').attr('r', 5);
      // .on('mouseover', function(d){
      //   scope.$apply(function(){
      //     scope.selectedPoint = d;
      //   });
      // });

    // update the position of all the points
    points.attr('transform', function(d, i){
      console.log('d',d.post_impressions[0].value );
      console.log('i',i);
      return 'translate(' + [x(i), y(d.post_impressions[0].value)] + ')';
    });

    xAxisG.call(xAxis);
    yAxisG.call(yAxis);

  };

  // console.log(el);
  // console.log(scope.data);

};
