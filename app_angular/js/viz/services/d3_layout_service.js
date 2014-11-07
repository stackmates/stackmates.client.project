'use strict';

var _ = require('lodash');

module.exports = angular.module('app.viz.service.layout', [
])

.factory('D3LayoutService',
  /*@ngInject*/
  function D3LayoutService ($http, $q) {

    var Service = {};

    Service.width = 800;
    Service.height = 300;
    Service.margin = {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    };


    return Service;

  }
)
