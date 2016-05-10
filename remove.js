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

  if (arr.length*-1 <= ind && ind < arr.length) {
    arr.splice(ind, 1);
    return arr;
  } else {
    throw new Error('Index out of bounds');
  }
};
