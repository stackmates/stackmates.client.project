'use strict';

// var $ = require('jquery');
var Bacon = require('baconjs');
var d3 = require('d3');

module.exports = /*@ngInject*/
  function ReachResource ($http, $q, $socket, AppConstants ) {

    var samplingTime;

    // var ws = new WebSocket("ws://wiki-update-sockets.herokuapp.com/");
    // ws.onopen = function () {
    //     console.log("Connection opened");
    // };

    // ws.onclose = function () {
    //     console.log("Connection is closed...");
    // };

    var updateStream = Bacon.fromEventTarget($socket, "message").map(function(event) {
        var dataString = event.data;
        return JSON.parse(dataString);
    });


    // Filter the update stream for unspecified events ('edits')
    var editStream = updateStream.filter(function(update) {
      return update.type === 'unspecified';
    });
    editStream.onValue(function(results){
      // console.log(JSON.stringify(results));
      updateEditText(["Last edit: " + results.content]);
    });

    // Filter for newuser events
    var newUserStream = updateStream.filter(function(update) {
      return update.type === 'newuser';
    });
    newUserStream.onValue(function(results) {
      // console.log(JSON.stringify(results));
      var format = d3.time.format('%X');
      updateNewUser(['New user at: ' + format(new Date())]);
    });

    var updateCount = updateStream.scan(0, function(value) {
      return ++value;
    });

    var samplingTime = 2000;
    var sampledUpdates = updateCount.sample(samplingTime);

    var totalUpdatesBeforeLastSample = 0;

    sampledUpdates.onValue(function(value){

      updatesOverTime.push({
        x: new Date(),
        y: (value - totalUpdatesBeforeLastSample) / (samplingTime / 1000)
      });

      if (updatesOverTime.length > maxNumberOfDataPoints) {
        updatesOverTime.shift();
      }

      totalUpdatesBeforeLastSample = value;
      update(updatesOverTime);
      return value;
    });

  };
