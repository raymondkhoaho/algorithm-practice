const system = ['stage_1', 'stage_1', 'stage_2', 'dragon'];
const step = [1, 2, 12, 111];

function solution(systemNames, stepNumbers) {
  const length = systemNames.length;
  const objMap = {};
  for (var i = 0; i < length; i++) {
    if (!objMap[systemNames[i]]) {
      objMap[systemNames[i]] = [stepNumbers[i]];
    } else {
      objMap[systemNames[i]].push(stepNumbers[i]);
    }
  }

  for (const key in objMap) {
    if (objMap[key].length > 1) {
      for (var j = 0; j < objMap[key].length; j++) {
        if (objMap[key][j + 1] <= objMap[key][j]) {
          return false;
        }
      }
      return true;
    }
  }
  return true;
}
solution(system, step);
