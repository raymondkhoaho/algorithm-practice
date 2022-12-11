// Below we will define an n - interesting polygon.Your task is to find the area
// of a polygon for a given n.

function solution(n) {
  return 1 + 2 * n * (n - 1);
}

solution(2);
// expected output: 5
