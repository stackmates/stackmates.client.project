'use strict';

var _ = require('lodash');
var fuzzy = require('./fuzzy');



// module.exports = /*@ngInject*/
//   function fuzzySearch() {
//     return function (items, searchText) {
//       var searchWords;

//       if (searchText) {
//         searchWords = searchText.split(' ');

//         return _.filter(items, function (item) {

//           var itemText = item.name.toLowerCase();

//           return _.every(searchWords, function (searchWord) {
//             return itemText.search(searchWord.toLowerCase()) !== -1;
//           });
//         });
//       } else {
//         return items;
//       }
//     };
//   };

module.exports = /*@ngInject*/
  function fuzzySearch() {
    return fuzzy;
  };

