function titleCase(s) {
  let result = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (result[i - 1] == " " || result[i - 1] == undefined) {
      result[i] = result[i].toUpperCase();
    } else {
      result[i] = result[i].toLowerCase();
    }
  }
  return result.join("");
}

console.log(titleCase("I'm a little tea pot"));
