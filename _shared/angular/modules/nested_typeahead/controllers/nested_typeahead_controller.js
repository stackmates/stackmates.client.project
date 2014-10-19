'use strict';

var _o;

module.exports = /*@ngInject*/
  function nestedTypeaheadController ($scope, $attrs, $filter) {


    $scope.items = [];
    $scope.hide = false;

    console.log("controller items", $scope.items);

    $scope.logSomething=function(somevalue){
        console.log(somevalue+" is logged");
    }

    this.activate = function(item) {
      console.log("controller activate item ", item);
      $scope.active = item;
    };

    this.activateNextItem = function() {
      console.log("controller activate next item");
      var index = $scope.items.indexOf($scope.active);
      this.activate($scope.items[(index + 1) % $scope.items.length]);
    };

    this.activatePreviousItem = function() {
      console.log("controller activate previous item");
      var index = $scope.items.indexOf($scope.active);
      this.activate($scope.items[index === 0 ? $scope.items.length - 1 : index - 1]);
    };

    this.isActive = function(item) {
      console.log("controller is active, item", item);
      return $scope.active === item;
    };

    this.selectActive = function() {
      console.log("controller select active");
      this.select($scope.active);
    };

    this.select = function(item) {
      console.log("controller select item:", item);
      $scope.hide = true;
      $scope.focused = true;
      $scope.select({item:item});
    };

    $scope.isVisible = function() {
      console.log('controller isVisible');
      return !$scope.hide && ($scope.focused || $scope.mousedOver);
    };

    $scope.query = function() {



      console.log('controller query: SEARCH term ', term);
      $filter('fuzzy')(term);

      $scope.hide = false;
      $scope.search({term:$scope.term});


    }

  };
