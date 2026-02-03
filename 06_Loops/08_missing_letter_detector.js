function fearNotLetter(s){
  let alph = "abcdefghijklmnopqrstuvwxyz";
  let alphIndex = alph.indexOf(s[0])
  for (let i = 0; i < s.length; i++){
    if (s[i + 1] != alph[alphIndex + i + 1]){
      return alph[alphIndex + i + 1]
    }
  }
  return undefined
}

console.log("Result : " + fearNotLetter("bcef"))