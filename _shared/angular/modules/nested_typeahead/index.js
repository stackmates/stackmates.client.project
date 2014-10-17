'use strict';

// require('angular/angular');
// require('./user_service');

module.exports = angular.module( 'app.component.nestedtypeahead', [
  require('../../services/podio_service').name
])

.controller( 'TypeAheadController', require('./controllers/nested_typeahead_controller'))
// .controller( 'TypeAheadController', require('./controllers/nested_typeahead_controller'))


;
