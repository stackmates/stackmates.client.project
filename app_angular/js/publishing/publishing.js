'use strict';

var fs = require('fs');

module.exports = angular.module('app.publishing', [
  'ui.router',
   require('./services').name
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
            controllerAs: 'publishing',
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
        controllerAs: 'publishingDetails',
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
        controllerAs: 'publishingEdit',
        template: fs.readFileSync(__dirname + '/templates/publishing-edit.html')
      });
  }
)

.controller( 'PublishingController', require('./controllers/publishing_controller' ))
.controller( 'PublishingControllerEdit', require('./controllers/publishing_controller_details'))
.controller( 'PublishingControllerDetails', require('./controllers/publishing_controller_details'))

;
