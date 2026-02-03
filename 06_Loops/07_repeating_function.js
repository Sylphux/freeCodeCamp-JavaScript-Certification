function repeatStringNumTimes(s, n){
  if (n <= 0){
    return ""
  }
  let result = s;
  for (let i = 1; i < n; i++){
    result += s
  }
  return result
}