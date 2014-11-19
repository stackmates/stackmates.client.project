'use strict';

var fs = require('fs');

module.exports = angular.module('app.publishing', [
  'ui.router',
   require('./services/publishing_resource').name,
  // require('./publishing_form_service').name,
   require('./controllers/publishing_controller').name
])

.config(
  function($stateProvider) {
    $stateProvider
      .state('app.publishing', {
        url: '/publishing',
        resolve: { /* @ngInject */
          getList: function (PublishingResource) {
            return PublishingResource.getPublishedList();
          }
        },
        views: {
          '@': {
            controller: 'PublishingController',
            controllerAs: 'vm',
            template: fs.readFileSync(__dirname + '/templates/publishing.html')
          }
        }
      })
      .state('app.publishing.details', {
        url: '/details/:id',
        resolve: { /* @ngInject */
          getDetails: function (PublishingResource, $stateParams) {
            return PublishingResource.getPublishedDetails($stateParams.id);
          }
        },
        controller: 'PublishingControllerDetails',
        controllerAs: 'vm',
        template: fs.readFileSync(__dirname + '/templates/publishing-details.html')
      })
      .state('app.publishing.edit', {
        url: '/edit/:id',
        resolve: { /* @ngInject */
          getDetails: function (PublishingResource, $stateParams) {
            return PublishingResource.getPublishedDetails($stateParams.id);
          }
        },
        controller: 'PublishingControllerDetails',
        controllerAs: 'vm',
        template: fs.readFileSync(__dirname + '/templates/publishing-edit.html')
      });
  }
)


.controller( 'PublishingControllerEdit', require('./controllers/publishing_controller_details'))
.controller( 'PublishingControllerDetails', require('./controllers/publishing_controller_details'))

;
