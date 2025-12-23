let email = "coucoulord@gmail.com";

function maskEmail(email){
  let splitted = email.split('@');
  let masked = splitted[0].replace(splitted[0], "*".repeat(splitted[0].length - 2));
  return splitted[0][0] + masked + splitted[0][splitted[0].length - 1] + "@" + splitted[1];
}

console.log(maskEmail(email));