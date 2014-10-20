'use strict';

var window = require('global');

module.exports = /*@ngInject*/
  function SpacesController ($scope, $http, $timeout, $window, SpacesResource)  {

    // nested typeahead desired behaviour
    // pass this in and overwrite select function
    $scope.gotoLink = function(space) {
      $window.open(space.url)
    };

    getFlattenedSpacesList();

    function getFlattenedSpacesList () {
      console.log('getFlattenedSpacesList');
      SpacesResource.getList()
        .then(
          function (results) {
            $scope.podioSpaces = results;
            // window.podioSpaces = $scope.podioSpaces;
          },
          function (result){
            console.log('Failed to load content: ' + result)
          }
        );

    };

    $scope.nestedTypeaheadBehaviour = [
      { 'functionality': 'List filter', 'done': true, 'success': 'Matches any string in parent or child name'},
      { 'functionality': 'List filter', 'done': true, 'success': 'Ignores case of search'},
      { 'functionality': 'List filter', 'done': true, 'success': 'Clearing input field shows all results'},
      { 'functionality': 'List filter', 'done': true, 'success': 'If child record matches search parent must be visible'},
      { 'functionality': 'List filter', 'done': true, 'success': 'If full match first item must be highlighted'},
      { 'functionality': 'Text filter', 'done': false, 'success': 'The text matching part of the search query should be highlighted yellow'},
      { 'functionality': 'List nav',    'done': true, 'success': 'Up and down with arrow keys highlighting active'},
      { 'functionality': 'List nav',    'done': false, 'success': 'Enter go to link of active element'},
      { 'functionality': 'Scroll',      'done': false, 'success': 'Must have max height of 80% screen'},
      { 'functionality': 'Scroll',      'done': false, 'success': 'Resonds to viewport resizing'},
      { 'functionality': 'Scroll',      'done': true, 'success': 'If list of organisation longer than height add scroll bar'},
      { 'functionality': 'Scroll',      'done': true, 'success': 'When using keyboard nav, expect scroll to respond'}
    ];


    // ui select group by

    $scope.disabled = undefined;
    $scope.searchEnabled = undefined;

    $scope.enable = function() {
      $scope.disabled = false;
    };

    $scope.disable = function() {
      $scope.disabled = true;
    };

    $scope.enableSearch = function() {
      $scope.searchEnabled = true;
    }

    $scope.disableSearch = function() {
      $scope.searchEnabled = false;
    }

    $scope.clear = function() {
      $scope.person.selected = undefined;
      $scope.address.selected = undefined;
      $scope.country.selected = undefined;
    };

    $scope.someGroupFn = function (item){

      if (item.name[0] >= 'A' && item.name[0] <= 'M')
          return 'From A - M';

      if (item.name[0] >= 'N' && item.name[0] <= 'Z')
          return 'From N - Z';

    };



    $scope.people = [
      { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
      { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
      { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
      { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
      { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
      { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
      { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
      { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
      { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
      { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
    ];


    // $scope.counter = 0;
    // $scope.someFunction = function (item, model){
    //   $scope.counter++;
    //   $scope.eventResult = {item: item, model: model};
    // };

    $scope.person = {};
    $scope.people = [
      { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
      { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
      { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
      { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
      { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
      { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
      { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
      { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
      { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
      { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
    ];

    $scope.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];


    $scope.chosenSpace = {};
    $scope.chosenSpace.space = [];

    $scope.multipleDemo = {};
    $scope.multipleDemo.colors = ['Blue','Red'];

    $scope.multipleDemo.selectedPeople = [$scope.people[5], $scope.people[4]];
    // $scope.multipleDemo.selectedPeopleWithGroupBy = [$scope.people[8], $scope.people[6]];
    $scope.multipleDemo.selectedPeopleWithGroupBy = [];
    $scope.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];


  };
