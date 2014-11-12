'use strict';

module.exports = angular.module('sm.viz.scatter.lastfm', [])


.factory('LastFMService',  require('./services/last_fm_service'))


.directive('artistsChart', require('./directives/artists_chart'))
.directive('toptagChart',  require('./directives/top_tag_chart'))


;
