'use strict';

var _o;

module.exports = /*@ngInject*/
  function nestedTypeaheadItem () {
    return {
        require: '^smNestedTypeahead',
        link: link
    };
  };


function link (scope, element, attrs, controller) {

    var item = scope.$eval(attrs.nestedTypeaheadItem);

    scope.$watch(function() { return controller.isActive(item); }, function(active) {
        if (active) {
            element.addClass('active');
        } else {
            element.removeClass('active');
        }
    });

    element.bind('mouseenter', function(e) {
        scope.$apply(function() { controller.activate(item); });
    });

    element.bind('click', function(e) {
        scope.$apply(function() { controller.select(item); });
    });

}
