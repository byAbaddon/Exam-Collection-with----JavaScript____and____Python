function careOfPuppy(arg) {
let food = Number(arg.shift()) * 1000
let removeAdopted = arg.pop()
let eaten_food = arg.reduce((a, b) => +a + +b)

if (food - eaten_food >= 0)
    return `Food is enough! Leftovers: ${food - eaten_food} grams.`
return `Food is not enough. You need ${eaten_food - food} grams more.`
}

// console.log(careOfPuppy([
// 4,
// 130,
// 345,
// 400,
// 180,
// 230,
// 120,
// 'Adopted',
// ]));