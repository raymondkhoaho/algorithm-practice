const system = ['Dragon',
  'Falcon 9',
  'Dragon',
  'Falcon 9',
  'Falcon 9',
  'Dragon',
  'Dragon',
  'Dragon',
  'Falcon 9'];
const step = [1, 1, 3, 2, 4, 10, 20, 100, 4];

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
    }
  }
  return true;
}
solution(system, step);
