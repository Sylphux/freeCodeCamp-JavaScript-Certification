function sumAll(range) {
  let biggest = range[0];
  let smallest = range[1];
  if (range[0] < range[1]) {
    biggest = range[1];
    smallest = range[0];
  }
  let result = 0;
  for (let i = smallest; i <= biggest; i++) {
    result += i;
  }
  return result;
}

console.log(sumAll([1, 4]));
