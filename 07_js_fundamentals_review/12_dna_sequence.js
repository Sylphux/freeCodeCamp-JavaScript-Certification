function pairElement(s) {
  let result = [];
  for (let char of s) {
    let pair = [char];
    switch (char) {
      case "A":
        pair.push("T");
        break;
      case "T":
        pair.push("A");
        break;
      case "C":
        pair.push("G");
        break;
      case "G":
        pair.push("C");
        break;
    }
    result.push(pair);
  }
  return result;
}

console.log(pairElement("ATCGA"));
