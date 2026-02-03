function mutation(arr){
  for (let char of arr[1].toLowerCase()){
    if (!(arr[0].toLowerCase().includes(char))){
      return false
    } 
  }
  return true
}

console.log(mutation(["lord", "Lorde"]))
