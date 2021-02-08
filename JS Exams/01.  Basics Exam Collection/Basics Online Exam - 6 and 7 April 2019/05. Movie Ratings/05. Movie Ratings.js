function movieRatings(arg) {
    let numberOfMovies = arg.shift()
    let = [nameBigRating, nameLowRating] = ['', '']
    let = [bigRating, lowRating, average] = [Number.MIN_SAFE_INTEGER , Number.MAX_SAFE_INTEGER , 0]

    for (let i = 0; i < numberOfMovies; i++){
        let currentName = arg.shift()
        let currentRating = parseFloat(arg.shift())  // FUCKING IDIOT !!!
        
        average += currentRating
        
        if (bigRating < currentRating){
            nameBigRating = currentName
            bigRating = currentRating
        }

        if (lowRating > currentRating){
            nameLowRating = currentName
            lowRating = currentRating
        }
       
    } 

 
    console.log(`${nameBigRating} is with highest rating: ${bigRating.toFixed(1)}`)
    console.log(`${nameLowRating} is with lowest rating: ${lowRating.toFixed(1)}`)
    console.log(`Average rating: ${(average /numberOfMovies).toFixed(1)}`);
 }

// WRONG ENTRY CONDITION ~ USE[] !!! 
//movieRatings([5, 'A Star is Born', 7.8, 'Creed 2', 7.3, 'Mary Poppins', 7.2, 'Vice', 7.2, 'Captain Marvel', 7.1])


