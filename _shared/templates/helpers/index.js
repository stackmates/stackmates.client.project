'use strict';

var path      = require('path');

// Reference common directory
var COMMON = path.join(__dirname, '../../../../../', 'common/');

module.exports = function(config, Handlebars) {

  require(COMMON + 'ux_patterns/_helpers/handlebars/add_one')(Handlebars);
  require(COMMON + 'ux_patterns/_helpers/handlebars/conditional')(Handlebars);
  require(COMMON + 'ux_patterns/_helpers/handlebars/dates')(Handlebars);
  require(COMMON + 'ux_patterns/_helpers/handlebars/debug')(Handlebars);
  require(COMMON + 'ux_patterns/_helpers/handlebars/json')(Handlebars);
  require(COMMON + 'ux_patterns/_helpers/handlebars/limit')(Handlebars);
  require(COMMON + 'ux_patterns/_helpers/handlebars/link_to')(config, Handlebars);
  require(COMMON + 'ux_patterns/_helpers/handlebars/select_collection')(Handlebars);

  // partials
  require('./partials')(config, Handlebars);
};
