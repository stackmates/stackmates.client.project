'use strict';

var _ = require('lodash');

module.exports = angular.module('app.shared.resource.cms', [
])

.factory('ContentResource',
  /*@ngInject*/
  function ContentResource ($http, $q) {
    var content = null;
    var service = {
      content: content,
      getContent: getContent,
      getContentByUrl: getContentByUrl
    };
    return service;


    function getContent () {
      // Create a deferred operation
      var deferred = $q.defer();

      if(content !== null) {
        deferred.resolve(content);
      } else {
        $http.get('assets/data/stackmat.es.json')
          .success(function(result){
            deferred.resolve(result);
          })
          .error(function (response) {
            deferred.reject(response);
          });
      }
      return deferred.promise;
    };


    function getContentByUrl (key) {

      getContent()
        .then(
          function (content) {
            console.log('this', _.find(content.externalDreamineering, { 'flow': key }));
            _.find(content.externalDreamineering, function(rec) {
              console.log(rec.flow);
              // rec.flow;
              return rec.flow === parseInt(key, 10);
            });
          },
          function (result){
            console.log('Failed to load content: ' + result)
          }
        );
    }


  }
)
