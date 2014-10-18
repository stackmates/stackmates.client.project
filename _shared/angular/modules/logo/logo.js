'use strict';

var fs = require('fs');


module.exports = /*@ngInject*/
  function logo () {
    return {
      // transclude: true,
      templateUrl: 'modules/logo/logo.html'
    };
  };
