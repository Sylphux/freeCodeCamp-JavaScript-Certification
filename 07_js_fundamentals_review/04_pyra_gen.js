function pyramid(c, rows, direction) {
  //direction: false is upside. Will use reverse
  let pyArray = [];
  let repeated = 1;
  for (let i = 1; i <= rows; i++) {
    pyArray.push(" ".repeat(rows - i) + c.repeat(repeated));
    repeated += 2;
  }
  console.log(pyArray);
  if (direction) {
    return "\n" + pyArray.reverse().join("\n") + "\n";
  } else {
    return "\n" + pyArray.join("\n") + "\n";
  }
}

console.log(pyramid("o", 4, false));
