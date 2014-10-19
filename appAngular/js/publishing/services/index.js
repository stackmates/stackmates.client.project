'use strict';

module.exports = angular.module('app.publishing.services', [

])

.service('PublishingForm', require('./publishing_form_service'))
.factory('PublishingResource', require('./publishing_service'))

;



