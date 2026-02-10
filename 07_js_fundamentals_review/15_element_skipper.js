function dropElements(arr, func) {
  let startIndex = -1;
  let newArr = [];
  for (let item of arr) {
    if (func(item)) {
      for (let i = arr.indexOf(item); i < arr.length; i++) {
        newArr.push(arr[i]);
      }
      break;
    }
  }
  return newArr;
}

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
);
