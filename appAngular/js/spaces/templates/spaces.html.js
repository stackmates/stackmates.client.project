'use strict';
var multiline = require('multiline');
module.exports = multiline(function(){/*
<div class='u-paddingAl'>

  <h3>Typeahead</h3>

  <ui-select style="width: 400px;"
    multiple
    ng-model="chosenSpace.space"
    ng-disabled="disabled"
    theme="select2" >
    <ui-select-match placeholder="Select space...">{{$item.space}}</ui-select-match>
    <ui-select-choices
      group-by="'org'"
      repeat="space in podioSpaces | propsFilter: {space: $select.search, org: $select.search}">

        <div ng-click="gotoLink(space)" ng-bind-html="space.space | highlight: $select.search"></div>

    </ui-select-choices>
  </ui-select>

  <pre>Selected: {{chosenSpace.space}}</pre>

  <h5>Specs</h5>
  <ul>
    <li ng-repeat='spec in nestedTypeaheadBehaviour'>
      <p ng-class="{strike: spec.done}">{{ spec.functionality }} - {{ spec.success }}</p>
    </li>
  </ul>

</div>
*/});
