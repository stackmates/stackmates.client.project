'use strict';
var multiline = require('multiline');
module.exports = multiline(function(){/*
<h3>Typeahead</h3>

<div class=''>



    <h4>The test</h4>

    <p>Array of objects (with groupBy)</p>
    <ui-select multiple ng-model="multipleDemo.selectedPeopleWithGroupBy" theme="select2" ng-disabled="disabled" style="width: 400px;">
      <ui-select-match placeholder="Select space...">{{$item.name}} &lt;{{$item.email}}&gt;</ui-select-match>
      <ui-select-choices group-by="someGroupFn" repeat="person in people | propsFilter: {name: $select.search, age: $select.search}">
        <div ng-bind-html="person.name | highlight: $select.search"></div>
        <small>
          email: {{person.email}}
          age: <span ng-bind-html="''+person.age | highlight: $select.search"></span>
        </small>
      </ui-select-choices>
    </ui-select>
    <p>Selected: {{multipleDemo.selectedPeopleWithGroupBy}}</p>





    <h4>UI Select Original</h4>

    <p>Array of objects (with groupBy)</p>
    <ui-select multiple ng-model="multipleDemo.selectedPeopleWithGroupBy" theme="select2" ng-disabled="disabled" style="width: 400px;">
      <ui-select-match placeholder="Select person...">{{$item.name}} &lt;{{$item.email}}&gt;</ui-select-match>
      <ui-select-choices group-by="someGroupFn" repeat="person in people | propsFilter: {name: $select.search, age: $select.search}">
        <div ng-bind-html="person.name | highlight: $select.search"></div>
        <small>
          email: {{person.email}}
          age: <span ng-bind-html="''+person.age | highlight: $select.search"></span>
        </small>
      </ui-select-choices>
    </ui-select>
    <p>Selected: {{multipleDemo.selectedPeopleWithGroupBy}}</p>



    <h4>Static arrays</h4>
    <pre>Model: {{selected | json}}</pre>
    <input type="text" class="form-control"
      ng-model="selected"
      typeahead="state for state in states | filter:$viewValue | limitTo:8" >

    <h4>Asynchronous results</h4>
    <pre>Model: {{asyncSelected | json}}</pre>
    <input type="text" placeholder="Locations loaded via $http" class="form-control"
      ng-model="asyncSelected"
      typeahead="address for address in getLocation($viewValue)"
      typeahead-loading="loadingLocations" >
    <i ng-show="loadingLocations" class="glyphicon glyphicon-refresh"></i>


    <h4>Custom templates for results</h4>
    <pre>Model: {{customSelected | json}}</pre>

    <script type="text/ng-template" id="customTemplate.html">
      <a>
          <img ng-src="http://upload.wikimedia.org/wikipedia/commons/thumb/{{match.model.flag}}" width="16">
          <span bind-html-unsafe="match.label | typeaheadHighlight:query"></span>
      </a>
    </script>

    <input type="text" placeholder="Custom template" class="form-control"
      ng-model="customSelected"
      typeahead="state as state.name for state in statesWithFlags | filter:{name:$viewValue}"
      typeahead-template-url="customTemplate.html" >


    <h4>Nested selector</h4>
    <pre>Model: {{nestedSelected | json}}</pre>

    <input type="text" placeholder="Custom template" class="form-control"
      ng-model="nestedSelected"
      typeahead-nested-list="podioList"
      typeahead-nested-item-property="name"
      typeahead="state as state.name for state in statesWithFlags | filter:{name:$viewValue}"  >


    <h5>Specs</h5>
    <ul>
      <li ng-repeat='spec in nestedTypeaheadBehaviour'>
        <p>{{ spec.functionality }} - {{ spec.success }}</p>
      </li>
    </ul>




</div>
*/});
