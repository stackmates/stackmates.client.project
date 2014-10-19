'use strict';


module.exports = angular.module('app.viz.lastfm.directives', [
  require('../services/last_fm_service').name
])

.directive('artistsChart', require('./artists_chart_directive'))
.directive('toptagChart', require('./top_tag_chart_directive'))

;
