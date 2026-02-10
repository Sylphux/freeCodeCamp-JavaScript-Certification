function sumFibs(n) {
  let fibo = [0, 1];
  for (let i = 2; true; i++) {
    let nextNumber = fibo[i - 1] + fibo[i - 2];
    if (nextNumber > n) {
      break;
    }
    fibo.push(nextNumber);
  }
  let result = 0;
  for (let item of fibo) {
    if (item % 2 != 0) {
      result += item;
    }
  }
  return result;
}

console.log(sumFibs(1000));
