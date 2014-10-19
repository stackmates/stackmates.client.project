'use strict';

var multiline = require('multiline');

module.exports = multiline(function(){/*
<h3>Alert</h3>

<div>
  <alert ng-repeat="alert in alerts" type="{{alert.type}}" close="closeAlert($index)">{{alert.msg}}</alert>
  <button class='btn btn-default' ng-click="addAlert()">Add Alert</button>
</div>
*/});
