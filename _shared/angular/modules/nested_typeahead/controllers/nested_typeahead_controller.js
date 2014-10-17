'use strict';

var _o;

module.exports = /*@ngInject*/
  function nestedTypeaheadController ($scope, $attrs) {


    $scope.items = [];
    $scope.hide = false;

    this.activate = function(item) {
        $scope.active = item;
    };

    this.activateNextItem = function() {
        var index = $scope.items.indexOf($scope.active);
        this.activate($scope.items[(index + 1) % $scope.items.length]);
    };

    this.activatePreviousItem = function() {
        var index = $scope.items.indexOf($scope.active);
        this.activate($scope.items[index === 0 ? $scope.items.length - 1 : index - 1]);
    };

    this.isActive = function(item) {
        return $scope.active === item;
    };

    this.selectActive = function() {
        this.select($scope.active);
    };

    this.select = function(item) {
        $scope.hide = true;
        $scope.focused = true;
        $scope.select({item:item});
    };

    $scope.isVisible = function() {
        return !$scope.hide && ($scope.focused || $scope.mousedOver);
    };

    $scope.query = function() {
        $scope.hide = false;
        $scope.search({term:$scope.term});
    }



  };
