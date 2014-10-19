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

    console.log("scope", scope);

    var item = scope.$eval(attrs.smNestedTypeaheadItem);

    console.log('nested dir item from attrs ', item )

    scope.$watch(
      function() {
        console.log('NESTED DIR watch if item is active on controller.isActive ', item )
        var active = controller.isActive(item);
        console.log('NESTED DIR active result ', active );
        return active;
      },
      function(active) {
        if (active) {
            console.log('add active class');
            element.addClass('active');
        } else {
            console.log('remove active class');
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
