'use strict';

var fs = require('fs');

module.exports = angular.module('app.main', [
  require('../../../_shared/angular/resources/cms/content').name
])

// Routes
.config(
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app.home', {
        url: '/',
        views: {
          '@': {
            controller: 'HomeController',
            controllerAs: 'home',
            template: fs.readFileSync(__dirname + '/templates/home.html')
          }
        },
        // resolve: {
        //   features: ['Restangular', function (Restangular) {
        //     return Restangular.all('features').getList();
        //   }]
        // }
      })
      .state('app.card-detail', {
        url: '/details/:haikuId',
        views: {
          '@': {
            controller: 'CardDetailController',
            controllerAs: 'cardDetails',
            template: fs.readFileSync(__dirname + '/templates/card_detail.html')
          }
        }
      });

      $urlRouterProvider.otherwise( '/' );
  }
)

.controller('HomeController', require('./controllers/home_controller'))
.controller('CardDetailController', require('./controllers/card_detail_controller'))


;
