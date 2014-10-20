'use strict';

module.exports = angular.module('app.bootstrap', [
  'ui.router',
  require('../../../_shared/angular/resources/spaces/spaces').name
])

.config(
  function($stateProvider) {
    $stateProvider
      .state('app.pattern', {
        url: '/patterns',
        views: {
          '@': {
            controller: 'PatternController',
            template: require('./templates/_patterns.html.js')
          }
        }
      })
      .state('app.pattern.accordion', {
        url: '/accordion',
          controller: 'DemoAccordionController',
          controllerAs: 'accordionDemo',
          template: require('./templates/accordion-demo.html.js')
      })
      .state('app.pattern.alert', {
        url: '/alerts',
          controller: 'DemoAlertController',
          controllerAs: 'alertDemo',
          template: require('./templates/alert-demo.html.js')
      })
      .state('app.pattern.buttons', {
        url: '/buttons',
          controller: 'DemoButtonsController',
          controllerAs: 'buttonDemo',
          template: require('./templates/buttons-demo.html.js')
      })
      .state('app.pattern.carousel', {
        url: '/carousel',
          controller: 'DemoCarouselController',
          controllerAs: 'carouselDemo',
          template: require('./templates/carousel-demo.html.js')
      })
      .state('app.pattern.collapse', {
        url: '/collapse',
          controller: 'DemoCollapseController',
          controllerAs: 'collapseDemo',
          template: require('./templates/collapse-demo.html.js')
      })
      .state('app.pattern.datepicker', {
        url: '/datepicker',
          controller: 'DemoDatepickerController',
          controllerAs: 'datepickerDemo',
          template: require('./templates/datepicker-demo.html.js')
      })
      .state('app.pattern.dropdown', {
        url: '/dropdown',
          controller: 'DemoDropdownController',
          controllerAs: 'dropdownDemo',
          template: require('./templates/dropdown-demo.html.js')
      })
      .state('app.pattern.input', {
        url: '/input',
          controller: 'DemoInputController',
          controllerAs: 'inputDemo',
          template: require('./templates/input-demo.html.js')
      })
      .state('app.pattern.modal', {
        url: '/modal',
          controller: 'DemoModalController',
          controllerAs: 'modalDemo',
          template: require('./templates/modal-demo.html.js')
      })
      .state('app.pattern.pagination', {
        url: '/pagination',
          controller: 'DemoPaginationController',
          controllerAs: 'paginationDemo',
          template: require('./templates/pagination-demo.html.js')
      })
      .state('app.pattern.popover', {
        url: '/popover',
          controller: 'DemoPopoverController',
          controllerAs: 'popoverDemo',
          template: require('./templates/popover-demo.html.js')
      })
      .state('app.pattern.progressbar', {
        url: '/progressbar',
          controller: 'DemoProgressbarController',
          controllerAs: 'progressbarDemo',
          template: require('./templates/progressbar-demo.html.js')
      })
      .state('app.pattern.rating', {
        url: '/rating',
          controller: 'DemoRatingController',
          controllerAs: 'ratingDemo',
          template: require('./templates/rating-demo.html.js')
      })
      .state('app.pattern.tabs', {
        url: '/tabs',
          controller: 'DemoTabsController',
          controllerAs: 'tabsDemo',
          template: require('./templates/tabs-demo.html.js')
      })
      .state('app.pattern.timepicker', {
        url: '/timepicker',
          controller: 'DemoTimepickerController',
          controllerAs: 'timepickerDemo',
          template: require('./templates/timepicker-demo.html.js')
      })
      .state('app.pattern.tooltip', {
        url: '/tooltip',
          controller: 'DemoTooltipController',
          controllerAs: 'tooltipDemo',
          template: require('./templates/tooltip-demo.html.js')
      })
      .state('app.pattern.typeahead', {
        url: '/typeahead',
          controller: 'DemoTypeaheadController',
          controllerAs: 'typeaheadDemo',
          template: require('./templates/typeahead-demo.html.js')
      });
  }
)

.controller('PatternController', require('./controllers/_pattern_controller'))

.controller('DemoAccordionController', require('./controllers/accordion_controller'))
.controller('DemoAlertController', require('./controllers/alert_controller'))
.controller('DemoButtonsController', require('./controllers/buttons_controller'))
.controller('DemoCarouselController', require('./controllers/carousel_controller'))
.controller('DemoCollapseController', require('./controllers/collapse_controller'))
.controller('DemoDatepickerController', require('./controllers/datepicker_controller'))
.controller('DemoDropdownController', require('./controllers/dropdown_controller'))
.controller('DemoInputController', require('./controllers/input_controller'))
.controller('DemoModalController', require('./controllers/modal_controller'))
.controller('ModalInstanceController', require('./controllers/modal_instance_controller'))
.controller('DemoPaginationController', require('./controllers/pagination_controller'))
.controller('DemoPopoverController', require('./controllers/popover_controller'))
.controller('DemoProgressbarController', require('./controllers/progressbar_controller'))
.controller('DemoRatingController', require('./controllers/rating_controller'))
.controller('DemoTabsController', require('./controllers/tabs_controller'))
.controller('DemoTimepickerController', require('./controllers/timepicker_controller'))
.controller('DemoTooltipController', require('./controllers/tooltip_controller'))
.controller('DemoTypeaheadController', require('./controllers/typeahead_controller'))
// .controller('DemoUISelectController', require('./controllers/ui_select_controller'))

;
