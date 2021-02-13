function foodForPets(arg) {
    let days = Number(arg.shift())
    let food = parseFloat(arg.shift())
    let dogFood = 0
    let catFood = 0
    let cookies = 0

    for (let i = 1; i < days + 1; i++) {
        if (i % 3 == 0) {
            dog = Number(arg.shift())
            cat = Number(arg.shift())
            dogFood += dog
            catFood += cat
            cookies += (dog + cat) / 10
            continue
        }

        dogFood += Number(arg.shift())
        catFood += Number(arg.shift())
    }

    let allEatenFood = (dogFood + catFood) / food * 100
    let eatenFood = (food - (food - (dogFood + catFood))) / 10
    let eatenFoodDog = dogFood / eatenFood * 10
    let eatenFoodCat = catFood / eatenFood * 10

    console.log(`Total eaten biscuits: ${Math.round(cookies)}gr.`)
    console.log(`${allEatenFood.toFixed(2)}% of the food has been eaten.`)
    console.log(`${eatenFoodDog.toFixed(2)}% eaten from the dog.`)
    console.log(`${eatenFoodCat.toFixed(2)}% eaten from the cat.`)
}


// foodForPets([
//     3,
//     1000,
//     300,
//     20,
//     100,
//     30,
//     110,
//     40,
// ])