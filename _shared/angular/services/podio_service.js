'use strict';

var _ = require('lodash');
var content = null;

// John Papa Style
// public methods at the top
// alphabetiized

module.exports = /*@ngInject*/
  function PodioService ($http, $q) {

    $http.defaults.transformResponse = [];

    var service = {
      content: content,
      getContent: getContent
    };
    return service;


    ////////////
    function getContent () {
      // Create a deferred operation
      var deferred = $q.defer();

      if(content !== null) {
        deferred.resolve(content);
      } else {
        $http.get('assets/data/podio.json')
          .success(function(result){
            // console.log(result);
            deferred.resolve(JSON.parse(result));
          })
          .error(function (response) {
            deferred.reject(response);
          });
      }

      return deferred.promise;

    };

  };

