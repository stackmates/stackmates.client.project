'use strict';


module.exports = /*@ngInject*/
  function PublishingController ($scope, $state, $socket, PublishingResource ) {


    // WARNING this prevent being able to navigate from list to details
    // $state.transitionTo('app.publishing.new');

    $scope.publishData = {};
    $scope.publishedList = PublishingResource.listContent;

    $scope.publish = function () {

      PublishingResource.publishNew($scope.publishData)
        .then(
          function(result) {
            console.log(result);
            $scope.publishData = {};
          },
          function(res) {
            if (res.data.error && res.data.error.message) {
              // _o.$scope.showError = true;
              // _o.alert.setMessages('danger', res.data.error.message);
            } else {
              throw new Error('Failed to publish new record.');
            }
          }
        );
     }

    $socket.on('publish-data', function (data) {
      // console.log('socket data', data);
      PublishingResource.addRealtimeData(data);
    });


  };


