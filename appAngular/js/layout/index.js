'use strict';

var fs = require('fs');

var _views = {
  alert: {
    controller: 'AlertController',
    template: fs.readFileSync(__dirname + '/templates/_alert.html')
  },
  footer: {
    controller: 'FooterController',
    template: fs.readFileSync(__dirname + '/templates/_footer.html')
  },
  header: {
    controller: 'HeaderController',
    template: fs.readFileSync(__dirname + '/templates/_header.html')
  },
  nav: {
    controller: 'NavController',
    template: fs.readFileSync(__dirname + '/templates/_nav.html')
  }
}

module.exports = angular.module('app.layout', [
  require('./services/layout').name
])

// Routes
.config(
  function ($stateProvider, layoutProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        views: _views
        // resolve: {
        //   auth: function($auth) {
        //     return $auth.validateUser();
        //   }
        // }
      });

    layoutProvider.setViews(_views);
  }
)

.controller('AlertController', require('./controllers/_alert'))
.controller('FooterController', require('./controllers/_footer'))
.controller('HeaderController', require('./controllers/_header'))
.controller('NavController', require('./controllers/_nav'));


