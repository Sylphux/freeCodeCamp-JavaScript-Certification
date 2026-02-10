function convertHTML(s) {
  let newString = [];
  for (let char of s) {
    if (char == "&") {
      newString.push("&amp;");
    } else if (char == "<") {
      newString.push("&lt;");
    } else if (char == ">") {
      newString.push("&gt;");
    } else if (char == '"') {
      newString.push("&quot;");
    } else if (char == "'") {
      newString.push("&apos;");
    } else {
      newString.push(char);
    }
  }
  return newString.join("");
}

console.log(convertHTML("Dolce & Gabbana"));
