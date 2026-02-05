function bouncer(arr) {
  let newArr = [];
  for (let element of arr) {
    element && newArr.push(element);
  }
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
