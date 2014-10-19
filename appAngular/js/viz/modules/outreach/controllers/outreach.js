'use strict';

var _ = require('lodash');

module.exports = /*@ngInject*/
  function OutreachController ($scope, $state, $socket, $window, ReachResource ) {

    angular.element($window).on('resize', function(){ $scope.$apply() });

    $scope.results = {};
    // get reach data from server
    $scope.reachFormData = {};

    $scope.results.raw = _.pluck(ReachResource.listContent, 'data');
    $scope.results.flattened = ReachResource.flattenedResults;
    console.log('controller flat results', ReachResource.flattenedResults);

    // $scope.reachData = ReachResource.listContent;

    $scope.publish = function () {

      ReachResource.reachNew($scope.reachFormData)
        .then(
          function(result) {
            console.log(result);
            $scope.reachFormData = {};
          },
          function(res) {
            if (res.data.error && res.data.error.message) {
              // _o.$scope.showError = true;
              // _o.alert.setMessages('danger', res.data.error.message);
            } else {
              throw new Error('Failed to register.');
            }
          }
        );
     }

    $socket.on('reach-data', function (data) {
      // console.log('socket data', data);
      ReachResource.addRealtimeData(data);
    });

    // adapt scatter directive to work with reach dataset

    // create form for adding new datapoints

    // do realtime update with sockets

    // add other directives as appropriate

  }
