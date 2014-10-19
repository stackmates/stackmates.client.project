'use strict';

// angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml'])

module.exports = angular.module('sm.domain.typeahead', [
 require('ux_patterns/_helpers/angular/bind_html').name,
 require('ux_patterns/_helpers/angular/position').name
])

.factory('smTypeaheadParser',   require('./services/sm_typeahead_parser_service'))

.directive('smTypeahead',       require('./directives/sm_typeahead_directive'))
.directive('smTypeaheadMatch',  require('./directives/sm_typeahead_match_directive'))
.directive('smTypeaheadPopup',  require('./directives/sm_typeahead_popup_directive'))

.filter('smTypeaheadHighlight', require('./filters/sm_typeahead_highlight'))

;
