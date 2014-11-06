'use strict';

module.exports = angular.module('sm.viz.animation', [])

// the most basic setup
.directive('d3AnimationBasic',  require('./animation_basic'))
.directive('d3Asteroids',       require('./asteroids'))


;
