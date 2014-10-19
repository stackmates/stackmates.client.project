'use strict';

var _ = require('lodash');

module.exports = angular.module('app.shared.resource.spaces', [
])


.factory('SpacesResource',
  /*@ngInject*/
  function SpacesResource ($http, $q) {

    // deal with data format issue (requires array)
    $http.defaults.transformResponse = [];

    var Podio = {};

    Podio.rawContent = null;
    Podio.listOrgWithSpaceName = null;

    // private
    var _base_url = 'assets/data/podio.json';

    Podio.getList = function () {
      // Create a deferred operation
      var deferred = $q.defer();

      // CACHE RESULTS
      if( Podio.listOrgWithSpaceName !== null) {
        deferred.resolve( Podio.listOrgWithSpaceName );
      }
      else {
        $http.get(_base_url)
          .success(function(result){
            // console.log(result);
            Podio.rawContent = JSON.parse(result);
            Podio.listOrgWithSpaceName = flattenResults(Podio.rawContent);

            // deferred.resolve(Podio.listOrgWithSpaceName);
          deferred.resolve(Podio.listOrgWithSpaceName);
          })
          .error(function (response) {
            deferred.reject(response);
          });
      }
      return deferred.promise;
    };

    return Podio;

  }

);

// flatten original format to
// orgname, space name and link to use for group by select
function flattenResults (originalList) {

  var newArray = [];

  _.map(originalList, function(org) {
    return _.map(org.spaces, function(space) {
      return newArray.push({
        org:org.name,
        space: space.name,
        url: space.url
      });
    });
  });

  return newArray;

}
