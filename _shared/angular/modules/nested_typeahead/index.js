'use strict';

// require('angular/angular');
// require('./user_service');

module.exports = angular.module( 'app.component.nestedtypeahead', [
])

.controller( 'TypeaheadController', require('./controllers/nested_typeahead_controller'))
.directive( 'NestedTypeahead', require('./directives/nested_typeahead_directive'))


;
