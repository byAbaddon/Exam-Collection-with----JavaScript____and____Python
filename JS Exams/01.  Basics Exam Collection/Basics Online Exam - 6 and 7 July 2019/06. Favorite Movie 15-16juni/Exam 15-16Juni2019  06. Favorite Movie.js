function favoriteMovie(arg) {
   let arrBigSumMovie = {}
   let countMovie = 0

   while (arg.length > 0) {
      let movie = arg.shift()
      countMovie++

      if (movie === 'STOP') {
         break
      }

      if (countMovie === 7 ) {
         console.log('The limit is reached.');
         break
      }

      let sumMovie = 0
      let sumMoveLength = 0

      for (let i = 0; i < movie.length; i++) {
         sumMovie += movie[i].charCodeAt(0)

         if (movie[i].charCodeAt(0) < 64) {
            continue
         } else if (movie[i].charCodeAt(0) < 91) {
            sumMovie -= movie.length
         } else {
            sumMovie -= movie.length * 2
         }
      }

      arrBigSumMovie[movie] = (sumMovie - sumMoveLength);
   }

   arrBigSumMovie = Object.entries(arrBigSumMovie).sort((a, b) => b[1] - a[1])

   console.log(`The best movie for you is ${arrBigSumMovie[0][0]} with ${arrBigSumMovie[0][1]} ASCII sum.`);
}

//favoriteMovie(['Wrong turn', 'The maze', 'Area 51', 'Night Club', 'Ice age', 'Harry Potter', 'Wizards'])