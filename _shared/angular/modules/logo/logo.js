'use strict';

var fs = require('fs');

module.exports = /*@ngInject*/
  function logo () {
    return {
      replace: false,
      template: fs.readFileSync(__dirname + '/logo.html')
    };
  };


