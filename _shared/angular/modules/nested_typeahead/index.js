'use strict';


module.exports = angular.module( 'app.component.true.nestedtypeahead', [
])

.controller( 'smNestedTypeaheadController', require('./controllers/nested_typeahead_controller'))

.directive( 'smNestedTypeahead',            require('./directives/nested_typeahead_directive'))
.directive( 'smNestedTypeaheadItem',        require('./directives/nested_typeahead_item_directive'))


;
