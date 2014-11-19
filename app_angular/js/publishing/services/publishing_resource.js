'use strict';

var _ = require('lodash');
var debug = require('debug')('pubService');

module.exports = angular.module('app.publishing.resource', [
])

.factory('PublishingResource',
  /*@ngInject*/
  function PublishingResource ($http, $q, $socket, $state, AppConstants ) {

    var _baseurl = AppConstants.baseUrl + '/publish';

    var Publishing = {};

    Publishing.listContent = null;
    Publishing.details = null;

    // listeners
    $socket.on('publish-data', function (data) {
      Publishing.addRealtimeData(data);
    });


    Publishing.getPublishedList = function () {
      var deferred = $q.defer();

        $http.get(_baseurl)
          .success(function(result){

            if (result.ok) {
              Publishing.listContent = result.published;
            };

            deferred.resolve(Publishing.listContent);
          })
          .error(function(error) {
            deferred.reject(error);
          });

      return deferred.promise;
    };

    Publishing.getPublishedDetails = function (id) {

      debug('return publish details', id)
      var deferred = $q.defer();

      $http.get(_baseurl + '/' + id)
        .success(function(result){

          debug('return publish details', result);

          Publishing.details = result.published;

          deferred.resolve(Publishing.details);
        })
        .error(function(error) {
          deferred.reject(error);
        });

      return deferred.promise;
    };

    Publishing.publishNew = function (formData) {
      return $http.post(_baseurl, formData )
        .then(
          function (results) {

            debug('new record to add', results.data);

            if (results.data.ok ) {
              var response = results.data.published;
              Publishing.listContent.push(response);
              $socket.emit('publish-data', response);
            }

            return results.data;
          }
        );
    };

    Publishing.addRealtimeData = function (realtimeData) {

      debug('realtimeData', realtimeData);

      if (!_.contains(Publishing.listContent,{ 'id': realtimeData.id }) ) {
        Publishing.listContent.push(realtimeData.data);
        debug('new data added', realtimeData.data);
        debug('the realtime list', Publishing.listContent);
      }
    };

    Publishing.publishUpdate = function (id, formData) {
      return $http.put(_baseurl + '/' + id, formData )
        .then(
          function (results) {
            // TODO find existing record and update
            //Publishing.listContent(push(results.published));
            // update item in list
            return results;
          }
        );
    };

    Publishing.publishDelete = function (id) {
      debug('publish delete', id)
      return $http.delete(_baseurl + '/' + id )
        .then(
          function (results) {
            _.remove(Publishing.listContent, { 'id': id });
            $state.go('app.publishing');
          }
        );
    };

    return Publishing;

  }
)
