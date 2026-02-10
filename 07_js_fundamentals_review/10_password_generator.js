function generatePassword(len) {
  let usableChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let result = [];
  for (let i = 1; i <= len; i++) {
    result.push(usableChars[Math.floor(Math.random() * usableChars.length)]);
  }
  return result.join("");
}

let password = generatePassword(12);
console.log("Generated password: " + password);
