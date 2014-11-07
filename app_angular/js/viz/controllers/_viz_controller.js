'use strict';

module.exports = /*@ngInject*/
  function VisualizationController ($scope, $state) {


    $scope.vizualizations = [
      { "link": "app.viz.d3",            "text": "Shapes" },
      { "link": "app.viz.animation",     "text": "Animation" },
      { "link": "app.viz.axes",          "text": "Axes" },
      { "link": "app.viz.barchart",      "text": "Bar chart" },
      { "link": "app.viz.donut",         "text": "Donut" },
      { "link": "app.viz.singleline",    "text": "Single line" },
      { "link": "app.viz.scatter",       "text": "Scatter" },
      { "link": "app.viz.scatter-music", "text": "Music" },
      { "link": "app.viz.outreach",      "text": "Outreach" }
    ];


  };
