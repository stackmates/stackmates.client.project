'use strict';

module.exports = /*@ngInject*/
  function PatternController ($scope, $state) {
    // $state.transitionTo('app.pattern.accordion');

    $scope.patterns = [
      { "link": "app.pattern.accordion", "text": "Accordion" },
      { "link": "app.pattern.alert", "text": "Alert" },
      { "link": "app.pattern.buttons", "text": "Buttons" },
      { "link": "app.pattern.carousel", "text": "Carousel" },
      { "link": "app.pattern.collapse", "text": "Collapse" },
      { "link": "app.pattern.datepicker", "text": "Datepicker" },
      { "link": "app.pattern.dropdown", "text": "Dropdown" },
      { "link": "app.pattern.input", "text": "Inputs" },
      { "link": "app.pattern.modal", "text": "Modal" },
      { "link": "app.pattern.pagination", "text": "Pagination" },
      { "link": "app.pattern.popover", "text": "Popover" },
      { "link": "app.pattern.progressbar", "text": "Progress Bar" },
      { "link": "app.pattern.rating", "text": "Rating" },
      { "link": "app.pattern.tabs", "text": "Tabs" },
      { "link": "app.pattern.timepicker", "text": "Timepicker" },
      { "link": "app.pattern.tooltip", "text": "Tooltip" },
      { "link": "app.pattern.typeahead", "text": "Typeahead" }
    ];

  };
