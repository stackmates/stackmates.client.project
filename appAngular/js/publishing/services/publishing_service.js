'use strict';

var _ = require('lodash');
var debug = require('debug')('pubService');

module.exports = /*@ngInject*/
  function PublishingResource ($http, $q, $socket, $state, AppConstants ) {

    var _baseurl = AppConstants + '/publish';

    var Publishing = {};

    Publishing.listContent = null;
    Publishing.details = null;

    Publishing.getPublishedList = function () {
      var deferred = $q.defer();

      // if(Publishing.listContent !== null) {
      //   deferred.resolve(Publishing.listContent);
      // } else {
        $http.get('http://localhost:3000/publish')
          .success(function(result){

            if (result.ok) {
              Publishing.listContent = result.published;
            };

            deferred.resolve(Publishing.listContent);
          })
          .error(function(error) {
            deferred.reject(error);
          });
      // }
      return deferred.promise;
    };

    Publishing.getPublishedDetails = function (id) {

      debug('return publish details', id)
      var deferred = $q.defer();

      $http.get('http://localhost:3000/publish/' + id)
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
      return $http.post('http://localhost:3000/publish', formData )
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

      console.log('realtimeData', realtimeData);

      if (!_.contains(Publishing.listContent,{ 'id': realtimeData.id }) ) {
        Publishing.listContent.push(realtimeData.data);
        console.log('new data added', realtimeData.data);
        console.log('the realtime list', Publishing.listContent);
      }
    };

    Publishing.publishUpdate = function (id, formData) {
      return $http.put('http://localhost:3000/publish/' + id, formData )
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
      return $http.delete('http://localhost:3000/publish/' + id )
        .then(
          function (results) {
            _.remove(Publishing.listContent, { 'id': id });
            $state.go('app.publishing');
          }
        );
    };

    return Publishing;


  };
