'use strict';

var _o;

module.exports = /*@ngInject*/
  function nestedTypeAheadDirective () {

    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      controller: 'smNestedTypeaheadController',
      template: '<div><form><input ng-model="term" ng-change="query()" type="text" autocomplete="off" /></form><div ng-transclude></div></div>',
      scope: {
        // search: "&",
        // select: "&",
        items: "=",
        // term: "="
      },
      link: link
    }

  };

function link (scope, element, attrs, controller) {

  var $input = element.find('form > input');
  var $list = element.find('> div');

  $input.bind('focus', function() {
      scope.$apply(function() { scope.focused = true; });
  });

  $input.bind('blur', function() {
      scope.$apply(function() { scope.focused = false; });
  });

  $list.bind('mouseover', function() {
      scope.$apply(function() { scope.mousedOver = true; });
  });

  $list.bind('mouseleave', function() {
      scope.$apply(function() { scope.mousedOver = false; });
  });

  $input.bind('keyup', function(e) {
      if (e.keyCode === 9 || e.keyCode === 13) {
          scope.$apply(function() { controller.selectActive(); });
      }

      if (e.keyCode === 27) {
          scope.$apply(function() { scope.hide = true; });
      }
  });

  $input.bind('keydown', function(e) {
      if (e.keyCode === 9 || e.keyCode === 13 || e.keyCode === 27) {
          e.preventDefault();
      };

      if (e.keyCode === 40) {
          e.preventDefault();
          scope.$apply(function() { controller.activateNextItem(); });
      }

      if (e.keyCode === 38) {
          e.preventDefault();
          scope.$apply(function() { controller.activatePreviousItem(); });
      }
  });

  scope.$watch('items', function(items) {
      controller.activate(items.length ? items[0] : null);
  });

  scope.$watch('focused', function(focused) {
      if (focused) {
          $timeout(function() { $input.focus(); }, 0, false);
      }
  });

  scope.$watch('isVisible()', function(visible) {
      if (visible) {
          var pos = $input.position();
          var height = $input[0].offsetHeight;

          $list.css({
              top: pos.top + height,
              left: pos.left,
              position: 'absolute',
              display: 'block'
          });
      } else {
          $list.css('display', 'none');
      }
  });

};
