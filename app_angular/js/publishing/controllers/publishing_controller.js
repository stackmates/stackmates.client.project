/* jshint validthis: true */
'use strict';

module.exports = angular.module('app.publishing.controller', [
])

.controller( 'PublishingController',
  /*@ngInject*/
  function PublishingController ($scope, $state, $socket, PublishingResource ) {

    var vm = this;

    // WARNING this prevents being able to navigate from list to details
    // $state.transitionTo('app.publishing.new');

    vm.publishData = {};
    vm.publishedList = PublishingResource.listContent;

    // initial state

    vm.isCollapsedContent = false;
    vm.isCollapsedApproval = true;
    vm.isCollapsedChannels = true;
    vm.isCollapsedFeedTargeting = true;
    vm.isCollapsedGeoTargeting = true;
    vm.isCollapsedSchedule = true;
    vm.isCollapsedTags = true;

    vm.publish = function () {

      PublishingResource.publishNew(vm.publishData)
        .then(
          function(result) {
            console.log(result);
            vm.publishData = {};
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



  }
)


