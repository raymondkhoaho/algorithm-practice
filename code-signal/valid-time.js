function solution(time) {
  if ((parseInt(time[0] + time[1]) > 23) || (parseInt(time[3] + time[4]) > 59)) {
    return false;
  }
  return true;
}

solution('09:56');
