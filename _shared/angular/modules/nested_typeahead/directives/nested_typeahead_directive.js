'use strict';

var _o;

module.exports = /*@ngInject*/
  function nestedTypeAheadDirective ($scope) {

    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      template: '<div><form><input ng-model="term" ng-change="query()" type="text" autocomplete="off" /></form><div ng-transclude></div></div>',
      scope: {
        search: "&",
        select: "&",
        items: "=",
        term: "="
      }
    }

  };
