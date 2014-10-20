'use strict';

module.exports = /*@ngInject*/
  function _HeaderCtrl ($scope, $http, $timeout, $window, SpacesResource) {

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



  };
