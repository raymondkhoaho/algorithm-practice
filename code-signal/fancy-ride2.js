function solution(l, fares) {
  const uberCars = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
  for (let i = 0; i < fares.length; i++) {
    if (fares[i] * l > 20) {
      return uberCars[i - 1];
    }
  }
  return 'UberSUV';
}
solution(30, [0.3, 0.5, 0.7, 1, 1.3]);
