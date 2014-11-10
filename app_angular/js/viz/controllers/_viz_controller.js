'use strict';

module.exports = /*@ngInject*/
  function VisualizationController ($scope, $state, $window ) {

    // required for responsive chart
    angular.element($window).on('resize', function() {
      $scope.$apply();
    });

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
    ]

    $scope.journals = [
      { title: 'be good', day: '01/10/14'},
      { title: 'be bad', day: '01/11/14'},
      { title: 'be average', day: '01/12/14'},
      { title: 'be nice', day: '01/01/15'},
    ]

  };
