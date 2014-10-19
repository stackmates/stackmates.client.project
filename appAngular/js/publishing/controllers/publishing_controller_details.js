'use strict';

module.exports = /*@ngInject*/
  function PublishingControllerDetails ($scope, $state, $log, PublishingResource, PublishingForm) {

    $scope.publishedDetails = PublishingResource.details;

    $scope.publish = function () {
      PublishingResource.publishUpdate($state.params.id, $scope.publishedDetails)
        .then(
          function(result) {
            console.log(result.data);
          },
          function(res) {
            if (res.data.error && res.data.error.message) {
              // _o.$scope.showError = true;
              // _o.alert.setMessages('danger', res.data.error.message);
            } else {
              throw new Error('Failed to update published record.');
            }
          }
        );
    };

    $scope.delete = function(published) {
      if (published.id) {
        PublishingResource.publishDelete(published.id)
          .then(
            function(results) {
              console.log(results);
              $state.go('app.publishing');
            },
            function(results) {
              if( res.data.error && res.data.error.message) {
                console.log(res.data.error);
              } else {
                throw new Error('Unable to delete published record');
              }
            }
          );
      }
    };

  };
