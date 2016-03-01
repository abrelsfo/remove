'use strict';
module.exports = function (arr, ind) {
  var argLength = arguments.length;
  if (argLength !== 2){
    throw new Error('pull expected 2 arguments, got ' + argLength);
  }

  if (!Array.isArray(arr)){
    throw new TypeError('Expected arr to be type array, got '+ (typeof arr));
  }

  if (typeof ind !== 'number'){
    throw new TypeError('Expected ind to be type int, got ' + (typeof ind));
  } else if (ind % 1 !== 0){
    throw new TypeError('Expected ind to be type int, got float');
  }

  if (ind > -1) {
    arr.splice(ind, 1);
    return arr;
  } else {
    throw new Error('ind must be greater than 0');
  }
};
