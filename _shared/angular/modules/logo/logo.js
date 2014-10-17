'use strict';

module.exports = /*@ngInject*/
  function logo () {
    return {
      // transclude: true,
      templateUrl: 'modules/logo/logo.html'
      // template: '<div><form><input ng-model="term" ng-change="query()" type="text" autocomplete="off" /></form><div ng-transclude></div></div>'
    };
  };
