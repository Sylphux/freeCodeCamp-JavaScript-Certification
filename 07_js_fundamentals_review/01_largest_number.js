function largestOfAll(arr) {
  let result = [];
  for (let i of arr) {
    let biggest = i[0];
    for (let j of i) {
      if (j > biggest) {
        biggest = j;
      }
    }
    result.push(biggest);
  }
  return result;
}

console.log(
  largestOfAll([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ]),
);
