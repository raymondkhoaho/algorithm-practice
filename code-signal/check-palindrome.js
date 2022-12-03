function solution(inputString) {
  var lastIndex = inputString.length - 1;
  for (var i = 0; i <= Math.floor(inputString.length / 2); i++) {
    if (inputString[i] !== inputString[(lastIndex - i)]) {
      return false;
    }

  }
  return true;

}
solution('aabaa');
solution('abac');
