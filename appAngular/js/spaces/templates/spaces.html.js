'use strict';
var multiline = require('multiline');
module.exports = multiline(function(){/*
<div class='u-paddingAl'>
  <div class="Topbar">
    <a ng-click="isCollapsed = !isCollapsed">Go to space</a>
  </div>
  <div class='SpaceFinder' collapse="isCollapsed">

    <ui-select style="width: 400px;"
      ng-model="chosenSpace.space"
      ng-disabled="disabled"
      theme="select2"
      on-select="gotoLink($item)" >
      <ui-select-match placeholder="Select space...">{{$item.space}}</ui-select-match>
      <ui-select-choices
        group-by="'org'"
        repeat="space in podioSpaces | propsFilter: {space: $select.search, org: $select.search}">

          <div ng-bind-html="space.space | highlight: $select.search"></div>

      </ui-select-choices>
    </ui-select>

  </div>


  <h5>Specs</h5>
  <ul>
    <li ng-repeat='spec in nestedTypeaheadBehaviour'>
      <p ng-class="{strike: spec.done}">{{ spec.functionality }} - {{ spec.success }}</p>
    </li>
  </ul>

  <pre>Selected: {{chosenSpace.space}}</pre>

</div>
*/});
