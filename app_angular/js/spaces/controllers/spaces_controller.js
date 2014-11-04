'use strict';

var window = require('global');

module.exports = /*@ngInject*/
  function SpacesController ($scope, $http, $timeout, $window, SpacesResource)  {

    // hide finder until clicking on menu
    $scope.isCollapsed = true;

    // setup for select
    $scope.chosenSpace = {};
    $scope.chosenSpace.space = [];
    // nested typeahead desired behaviour
    // pass this in and overwrite select function
    $scope.gotoLink = function(space) {
      $window.open(space.url);
      $scope.chosenSpace = {};
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
      { 'functionality': 'Text filter', 'done': true, 'success': 'The text matching part of the search query should be highlighted yellow'},
      { 'functionality': 'List nav',    'done': true, 'success': 'Up and down with arrow keys highlighting active'},
      { 'functionality': 'List nav',    'done': true, 'success': 'Enter go to link of active element'},
      { 'functionality': 'Scroll',      'done': false, 'success': 'Must have max height of 80% screen'},
      { 'functionality': 'Scroll',      'done': false, 'success': 'Responds to viewport resizing'},
      { 'functionality': 'Scroll',      'done': true, 'success': 'If list of organisation longer than height add scroll bar'},
      { 'functionality': 'Scroll',      'done': true, 'success': 'When using keyboard nav, expect scroll to respond'}
    ];


    $scope.notifyServiceOnChange = function(){
       console.log($scope.windowHeight);
    };


  };
