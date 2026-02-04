function findElement(arr, fun) {
  for (let i of arr) {
    if (fun(i) == true) {
      return i;
    }
  }
  return undefined;
}

console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
);
