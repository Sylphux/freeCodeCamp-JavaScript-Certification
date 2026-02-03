function findLongestWordLength(s){
  let longest = 0
  for (let w of s.split(" ")){
    (w.length > longest) && (longest = w.length)
  }
  return longest
}

console.log(findLongestWordLength("Coucou les gens"))