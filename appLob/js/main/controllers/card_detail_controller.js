'use strict';

var _ = require('lodash');

module.exports = /*@ngInject*/
  function HaikuDetailController($scope, $stateParams, $sce, ContentService) {

      ContentService.getContent()
        .then(
          function (content) {
            var rec = _.find(content.externalProvoke,
              { 'flow' : parseInt($stateParams.haikuId, 10) }
            );

            console.log(rec);
            console.log($stateParams.haikuId);
              // rec.flow
            $scope.content = rec;
            $scope.bodyHtml = $sce.trustAsHtml(rec.html)

          },
          function (result){
            console.log('Failed to load content: ' + result)
          }
        );

  };
