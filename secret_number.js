module.exports = function () {
  'use strict';
  var number = Math.random() * ((1000000 - 0) + 1) + 0;
  return function secretNumber (){
    return number;
  };
};