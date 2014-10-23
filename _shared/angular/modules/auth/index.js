'use strict';

var fs = require('fs');

module.exports = angular.module( 'app.auth', [
  require('./services').name
])

.config(
  function($stateProvider) {
    $stateProvider
      .state('app.login', {
        url: '/login',
        views: {
          '@': {
            controller:  'LoginController',
            template:    fs.readFileSync(__dirname + '/templates/login.html')
          }
        }
      })
      .state('app.register', {
        url: '/register',
        views: {
          '@': {
            controller:     'RegisterController',
            template:    fs.readFileSync(__dirname + '/templates/register.html')
          }
        }
      });
  }
)

.controller( 'LoginController', require('./controllers/login'))
.controller( 'RegisterController', require('./controllers/register'))

;
