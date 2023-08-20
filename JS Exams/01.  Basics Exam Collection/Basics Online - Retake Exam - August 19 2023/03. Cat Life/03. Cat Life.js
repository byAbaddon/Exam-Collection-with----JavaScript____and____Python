function catLife([breed, gender]) {
  const catData = {"British Shorthair": {m: 13, f: 14},"Siamese": {m: 15, f: 16}, "Persian": {m: 14, f: 15}, "Ragdoll": {m: 16, f: 17}, "American Shorthair": {m: 12, f: 13}, "Siberian": {m: 11, f: 12}}
  try {
    return catData[breed][gender] * 12 / 6 + ' cat months'
  } catch {
      return breed +' is invalid cat!'
  }
 
}

//console.log(catLife((["Persian","m"])))
//console.log(catLife((["Siamese","f"])))
//console.log(catLife((["S","f"])))
