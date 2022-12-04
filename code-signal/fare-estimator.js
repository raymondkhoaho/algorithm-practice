/* eslint-disable camelcase */

function solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
  const totalEstimate = [];
  for (let i = 0; i < cost_per_minute.length; i++) {
    const singleEstimate = (ride_time * cost_per_minute[i]) + (ride_distance * cost_per_mile[i]);
    totalEstimate.push(singleEstimate);
  }
  return totalEstimate;
}
solution(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]);
