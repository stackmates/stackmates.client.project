'use strict';

var fs = require('fs');

module.exports = /*@ngInject*/
  function logo () {
    return {
      template: fs.readFileSync(__dirname + '/logo.html')
    };
  };


