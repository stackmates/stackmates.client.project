'use strict';

var _ = require('lodash');
var debug = require('debug')('reachService');

module.exports = /*@ngInject*/
  function ReachResource ($http, $q, $socket, AppConstants ) {

    var _baseurl = AppConstants + '/reach';

    var Reach = {};

    var IMPRESSION_TYPES = [
      'post_impressions',
      'post_impressions_organic',
      'post_impressions_viral',
      'post_impressions_paid'
    ];

    Reach.listContent = null;
    Reach.flattenedResults = null;

    Reach.getReachData = function () {
      var deferred = $q.defer();

      $http.get('http://localhost:3000/reach')
        .success(function(result){
          if (result.ok) {
            Reach.listContent = result.published;

            var reachData = _.pluck(Reach.listContent, 'data');
            // console.log('reach data', reachData);
            Reach.flattenedResults = flattenResults(reachData, IMPRESSION_TYPES, []);
          };
          deferred.resolve(Reach.listContent);
        })
        .error(function(error) {
          deferred.reject(error);
        });

      return deferred.promise;
    };



    Reach.reachNew = function (formData) {

      return $http.post('http://localhost:3000/reach', formData )
        .then(
          function (results) {

            if (results.data.ok ) {
              var response = results.data.published;
              Reach.listContent.push(response);
              $socket.emit('reach-data', response);
            }

            return results.data;
          }
        );
    };

    Reach.addRealtimeData = function (realtimeData) {

      debug('realtimeData', realtimeData);
      if (!_.contains(Reach.listContent,{ 'id': realtimeData.id }) ) {
        Reach.listContent.push(realtimeData.data);
        debug('new reach data added', realtimeData.data);
        debug('new reach dataset', Reach.listContent);
      }
    };

    Reach.getFlattenedResults = function () {

      var data = Reach.listContent.data;
      // console.log(ReachResource.listContent);
      return flattenResults(data, IMPRESSION_TYPES, []);
    };

    function flattenResults (data, postTypes, newArray ) {
      var postType = '';


      newArray = newArray || [];
      postType = postTypes[0];

      if (typeof postType !== "undefined") {

        var impressions =_.pluck(data, postType );


        impressions = _.flatten(impressions);
        // impressions = _.compact(impressions);

        // console.log('impressions', impressions);
        if (typeof impressions !== "undefined") {
          var reducedOutput = _.map(_.groupBy(impressions, "mstimestamp"), function(group, mstimestamp) {

              return _.reduce(group, function(memo, elem) {
                      memo.value += Number(elem.value, 10);
                      memo.date = new Date(Number(mstimestamp, 10));
                      return memo;
                  },
                  // intial values to be passed into reduce
                  {
                    impression_type: postType,
                    mstimestamp: mstimestamp,
                    date: null,
                    value: 0
                  }
              );
          });
          // console.log('reducedOutput', reducedOutput);
          newArray.push(_.flatten(reducedOutput));
        };
      }

      // Treat arrays as if they are immutable.
      var remainingList = postTypes.slice(1);
      // decide next
      if ( postTypes.length > 0 ) {
        return flattenResults(data, remainingList, newArray);
      } else {

        Reach.flattenedResults = _.flatten(newArray);
        // console.log('impressions', Reach.flattenedResults);
        return Reach.flattenedResults;
      }

    };


    return Reach;

  };
