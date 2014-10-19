'use strict';

var _ = require('lodash');
var _messages = [];

module.exports = /*@ngInject*/
  function alert () {
    return {
      clearMessages: clearMessages,
      removeMessage: removeMessage,
      getMessages: getMessages,
      setMessages: setMessages,
      addMessage: addMessage
    };
  };


function clearMessages() {
  _messages.length = 0;
}

function removeMessage(idx) {
  _messages.splice(idx, 1);
}

function getMessages() {
  return _messages;
}

function setMessages(type, messages) {
  clearMessages();
  _([messages])
      .flatten()
      .each(function (message) {
        _messages.push({
          type: type,
          message: message
        });
      });
}

function addMessage(type, message) {
  _messages.push({
    type: type,
    message: message
  });
}
