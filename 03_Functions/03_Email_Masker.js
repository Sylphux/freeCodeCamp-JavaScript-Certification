let email = "Francis.Martin@email.com";

function maskEmail(email) {
  let domain = email.slice(email.indexOf("@"));
  console.log(domain);

  let userName = email.slice(0, email.indexOf("@"));
  console.log(userName);

  let maskedUser = userName.slice(1, email.indexOf("@") - 1 );
  console.log(maskedUser);

  return email.replace(maskedUser, "*".repeat(maskedUser.length));
}

console.log(maskEmail(email));