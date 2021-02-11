function favoriteMovie(arg) {
  let movieName = ''
  let total = Number.MIN_SAFE_INTEGER
  let subtotal = 0
  let counter = 0
  let currentMovie = arg.shift()

  while (true) {
    if (currentMovie == 'STOP') {
      break
    }
    counter++
    if (counter == 7) {
      console.log('The limit is reached.')
      break
    }
    for (let i = 0; i < currentMovie.length; i++) {
      let currentLetter = currentMovie[i].charCodeAt(0)

      if (currentLetter >= 65 && currentLetter <= 90) {
        subtotal += currentLetter - currentMovie.length
      } else if (currentLetter >= 97 && currentLetter <= 122) {
        subtotal += currentLetter - currentMovie.length * 2
      } else {
        subtotal += currentLetter
      }
    }

    if (total < subtotal) {
      total = subtotal
      movieName = currentMovie
    }

    subtotal = 0
    currentMovie = arg.shift()
  }

  console.log(`The best movie for you is ${movieName} with ${total} ASCII sum.`)
}

// favoriteMovie(['Matrix', 'Breaking bad', 'Legend', 'STOP', ])
// favoriteMovie(['Wrong turn', 'The maze', 'Area 51', 'Night Club', 'Ice age', 'Harry Potter', 'Wizards'])