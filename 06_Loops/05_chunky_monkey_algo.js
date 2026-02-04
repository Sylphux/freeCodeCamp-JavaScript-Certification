function chunkArrayInGroups(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i += n) {
    let microArr = [];
    for (let j = 0; j < n; j++) {
      if (arr[i + j] == undefined) {
        break;
      } else {
        microArr.push(arr[i + j]);
      }
    }
    result.push(microArr);
  }
  return result;
}
