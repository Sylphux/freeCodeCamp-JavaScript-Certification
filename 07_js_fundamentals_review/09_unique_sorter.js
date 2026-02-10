function uniteUnique(arr1, arr2, ...args) {
  let globalarr = [];
  let result = [];
  //console.log(args)
  for (let item of arr1) {
    globalarr.push(item);
  }
  for (let item of arr2) {
    globalarr.push(item);
  }
  for (let subArr of args) {
    for (let item of subArr) {
      globalarr.push(item);
    }
  }
  for (let item of globalarr) {
    if (result.indexOf(item) < 0) {
      result.push(item);
    }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
