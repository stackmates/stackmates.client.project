'use strict';

module.exports = /*@ngInject*/
  function VisualizationController ($scope, $state) {


    $scope.vizualizations = [
      { "link": "app.viz.singleline",    "text": "Single line" },
      { "link": "app.viz.scatter",       "text": "Scatter" },
      { "link": "app.viz.scatter-music", "text": "Music" },
      { "link": "app.viz.outreach",      "text": "Outreach" }
    ];


  };
