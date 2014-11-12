'use strict';

module.exports = /*@ngInject*/
  function VisualizationController ($scope, $state, $window ) {

    $scope.vizualizations = [
      { "link": "app.viz.shapes",        "text": "Shapes" },
      { "link": "app.viz.animations",    "text": "Animation" },
      { "link": "app.viz.axes",          "text": "Axes" },
      { "link": "app.viz.barcharts",     "text": "Bar chart" },
      { "link": "app.viz.donuts",        "text": "Donut" },
      { "link": "app.viz.linecharts",    "text": "Line charts" },
      { "link": "app.viz.scatterplots",  "text": "Scatter plots" }
    ];

    $scope.employers = [
        { value: 3.2, name: 'United States Department of Defense' }
      , { value: 2.3, name: 'People\'s Liberation Army' }
      , { value: 2.1, name: 'Walmart' }
      , { value: 1.9, name: 'McDonald\'s' }
      , { value: 1.7, name: 'National Health Service' }
      , { value: 1.6, name: 'China National Petroleum Corporation' }
      , { value: 1.5, name: 'State Grid Corporation of China' }
      , { value: 1.4, name: 'Indian Railways' }
      , { value: 1.3, name: 'Indian Armed Forces' }
      , { value: 1.2, name: 'Hon Hai Precision Industry (Foxconn)' }
    ];

    $scope.journals = [
      { cnt: 3, day: '10/01/14', title: 'be good' },
      { cnt: 6, day: '11/11/14', title: 'be bad' },
      { cnt: 5, day: '11/30/14', title: 'be average' },
      { cnt: 8, day: '01/01/15', title: 'be nice', },
    ];

    $scope.salesData = [
      {hour: 1,sales: 54},
      {hour: 2,sales: 66},
      {hour: 3,sales: 77},
      {hour: 4,sales: 70},
      {hour: 5,sales: 60},
      {hour: 6,sales: 63},
      {hour: 7,sales: 55},
      {hour: 8,sales: 47},
      {hour: 9,sales: 55},
      {hour: 10,sales: 30}
    ];

    $scope.adaptiveLineChartConfig = {
      lines: 4,
      points: 4
    };


  };
