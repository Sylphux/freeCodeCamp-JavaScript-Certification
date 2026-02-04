function frankenSplice(arr1, arr2, i) {
  let result = [];
  for (let ii = 0; ii != i; ii++) {
    result.push(arr2[ii]);
  }
  for (let char of arr1) {
    result.push(char);
  }
  for (; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
