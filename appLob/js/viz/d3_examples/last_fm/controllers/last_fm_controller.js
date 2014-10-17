'use strict';

module.exports = /*@ngInject*/
  function LastFMController ($scope, $window, LastFMService) {

    var vm = this;

    vm.tagsize = 'reach';
    vm.toptags = [];
    vm.currtag = '';
    vm.artists = [];

    $window.addEventListener('resize', function () { //A
      $scope.$broadcast('windowResize');
    });

    LastFMService.topTags() //B
      .success(function (res) {
        if (res.error) {
          throw new Error(res.message);
        } else {
          vm.toptags = res.tags.tag.map(function (t) {
            t.reach    = +t.reach;
            t.taggings = +t.taggings;
            return t;
          });
        }
      });

  }
