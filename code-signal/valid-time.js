function solution(time) {
  if ((time[0] > 2 || time[1] > 4) || (time[3] > 5 || time[4] > 9) || time === '24:00') {
    return false;
  }
  return true;
}
solution('09:56');
