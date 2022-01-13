function fruitMarket(...arguments) {
  let [strawberriesPrice, bananas, oranges, raspberries, strawberries] = arguments.map(Number)

  let raspberriesKg = strawberriesPrice / 2
  let orangesKg = raspberriesKg * 0.6
  let bananasKg = raspberriesKg * 0.2

  let total = raspberriesKg * raspberries +
    orangesKg * oranges +
    bananasKg * bananas +
    strawberriesPrice * strawberries

  return total.toFixed(2)

}

// console.log(fruitMarket(48, 10, 3.3, 6.5, 1.7))  // 333.12
// console.log(fruitMarket(63.5, 3.57, 6.35, 8.15, 2.5, )) // 561.15