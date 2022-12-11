// Given an array of integers, find the pair of adjacent elements that has the
// largest product and return that product.

function solution(inputArray) {
  var newArray = [];
  for (var i = 0; i < (inputArray.length - 1); i++) {
    var product = inputArray[i] * inputArray[i + 1];
    newArray.push(product);
    var max = Math.max(...newArray);
  }
  return max;
}

solution([3, 6, -2, -5, 7, 3]);
// expected output: 21
