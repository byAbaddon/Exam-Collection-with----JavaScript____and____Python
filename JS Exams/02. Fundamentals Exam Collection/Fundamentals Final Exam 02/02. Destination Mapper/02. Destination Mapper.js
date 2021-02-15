function destinationMapper(str) {
  const regex = /=[A-Z]{1}[A-Za-z]{2,}=|\/[A-Z]{1}[A-Za-z]{2,}\//gm
  try {
    let destinations = str.match(regex).map(el => el.slice(1, -1))
    let points = destinations.map(el => el.length).reduce((a, b) => a + b)
    return `Destinations: ${destinations.join(', ')}\nTravel Points: ${points}`
  } catch {
    return `Destinations:\nTravel Points: 0`
  }
}

// console.log(destinationMapper('ThisIs some InvalidInput'))
// console.log(destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i='))