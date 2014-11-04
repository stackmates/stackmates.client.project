'use strict';

module.exports = /*@ngInject*/
  function HaikuListController($scope, ContentService) {


    ContentService.getContent()
      .then(
        function (content) {

          $scope.haikuList = content.externalProvoke;
          $scope.haikuBanner = content.externalProvoke[0];
        },
        function (result){
          console.log('Failed to load content: ' + result)
        }
      );

  };
