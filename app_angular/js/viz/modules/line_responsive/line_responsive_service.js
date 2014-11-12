'use strict';

var _ = require('lodash');
var d3 = require('d3');

module.exports = angular.module('app.viz.line.chart.service', [
])

.factory('VizLineChartService',
  /*@ngInject*/
  function VizLineChartService ($http, $q) {

    var Service = {};

    var _url   = "/assets/data/amzn.csv";

    Service.getCSVData = function () {
      var deferred = $q.defer();
      d3.csv(_url , function(error, data) {
        if (error) {
          deferred.reject(error);
        }
        deferred.resolve(data);
      });
      return deferred.promise;
    };

    return Service;

  }
)
