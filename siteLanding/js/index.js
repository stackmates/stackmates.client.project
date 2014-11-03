'use strict';

// Landing Page

var path      = require('path');
var dom       = require('domquery');
var FastClick = require('fastclick');

// Reference common directory
var classie      = require('util_modules/classie_util');
var smoothScroll = require('util_modules/scroll_smooth_util');

// Setup
FastClick(document.body);
smoothScroll.init();
