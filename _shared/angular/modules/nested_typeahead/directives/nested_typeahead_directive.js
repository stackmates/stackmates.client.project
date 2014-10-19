'use strict';


var _o;
var fs = require('fs');

module.exports = /*@ngInject*/
  function smNestedTypeahead ($timeout) {

    _o = {
      $timeout: $timeout
    }

    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      controller: 'smNestedTypeaheadController',
      template: '<div><form><input ng-model="search.term" ng-change="query()" type="text" autocomplete="off" /></form><div ng-transclude></div></div>',
      // template: '<div><form><input ng-model="search.term" type="text" autocomplete="off" /></form><div ng-transclude></div></div>',
      scope: {
        search: "&",
        select: "&",
        items: "=",
        term: "="
      },
      link: link
    }

  };

function link (scope, element, attrs, controller) {

  console.log('scope items', scope.items);

  var $input = element.find('form > input');
  // var $input = element;

  var $list = element.find('> div');

  console.log("list", $list);

  element.bind("click", function(e){
    scope.logSomething( scope.items );
  });


  $input.bind('focus', function() {
    console.log('ta focus');
    scope.$apply(function() { scope.focused = true; });
  });

  $input.bind('blur', function() {
    console.log('ta blur');
    scope.$apply(function() { scope.focused = false; });
  });

  $list.bind('mouseover', function() {
    console.log('ta mouseover');
    scope.$apply(function() { scope.mousedOver = true; });
  });

  $list.bind('mouseleave', function() {
    console.log('ta mouseleave');
    scope.$apply(function() { scope.mousedOver = false; });
  });

  $input.bind('keyup', function(e) {
    if (e.keyCode === 9 || e.keyCode === 13) {
      console.log('keyup 9 || 13 controller selectActive', e);
      scope.$apply(function() { controller.selectActive(); });
    }

    if (e.keyCode === 27) {
      console.log('keyup 27 apply scope hide is true');
      scope.$apply(function() { scope.hide = true; });
    }
  });

  $input.bind('keydown', function(e) {
    if (e.keyCode === 9 || e.keyCode === 13 || e.keyCode === 27) {
        console.log('key down 9, 13, 27', e);
        e.preventDefault();
    };

    if (e.keyCode === 40) {
        e.preventDefault();
        console.log('key code 40 ctrl activate next');
        scope.$apply(function() { controller.activateNextItem(); });
    }

    if (e.keyCode === 38) {
        e.preventDefault();
        console.log('key code 38 ctrl activate previous');
        scope.$apply(function() { controller.activatePreviousItem(); });
    }
  });

  scope.$watch('items', function(items) {
    console.log('watched items', items);
    controller.activate(items.length ? items[0] : null);
  });

  scope.$watch('focused', function(focused) {
    if (focused) {
        _o.$timeout(function() { $input.focus(); }, 0, false);
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
