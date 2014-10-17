'use strict';

var _ = require('lodash');

module.exports = /*@ngInject*/
  function ($scope, $http, $sce, $timeout, PodioService )  {

    $scope.isCollapsed = true;
    $scope.search = {};

    PodioService.getContent()
      .then(
        function (content) {
          $scope.podioList = content;
          TESTING.podioList = $scope.podioList;
          // flattenedResponse(content);
        },
        function (result){
          console.log('Failed to load content: ' + result)
        }
      );



    $scope.gotoLink = function(space) {
      window.open(space.url)
    };

    $scope.highlight = function(text, search) {
      if (!search) {
        return $sce.trustAsHtml(text);
      }
      return $sce.trustAsHtml(text.replace(new RegExp(search, 'gi'), '<span class="dt-highlightedText">$&</span>'));
    };

    $scope.$watch('search.text', function(newValue, oldValue) {
      // console.log(newValue, oldValue);

    });


    var organisationsArr = _.pluck($scope.podioList, 'name');

    $scope.hasChildRecords = function(orgName, search) {
      console.log('search', search);
      console.log('name', name);

      if (search) {

        var organisation = _.filter($scope.podioList, { 'name': orgName.name });

        // check if the organisation in search
        // var orgInSearch = _.contains(organisation.name, search);

        // if (orgInSearch) {
        //   return true;
        // } else {

          // console.log('organisation', organisation);
          var spaces = _.flatten(_.pluck(organisation, 'spaces'));
          console.log('spaces', spaces);

          var names = _.pluck(spaces, 'name');
          console.log('names', names);

          var hasChildrenInSearch = _.some( names, function(name) {
                                                  return _.contains(name, search )})

          console.log('hasChildren', hasChildrenInSearch);
          return hasChildrenInSearch;
        // }

      } else {
        // if no search term show everything by default
        return true;
      }

    }

  }




