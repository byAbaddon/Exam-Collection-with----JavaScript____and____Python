function highJump(arg) {
  let target = arg.shift()
  let current = target - 30
  let [count, fall] = [0, 0]

  while (current <= target) {
    count++
    let jump = arg.shift()
    current < jump ? (current += 5, fall = 0) : fall++
    if (fall > 2) return `Tihomir failed at ${current}cm after ${count} jumps.`
  }

  return `Tihomir succeeded, he jumped over ${target}cm after ${count} jumps.`
}

// console.log(highJump([231, 205, 212, 213, 228, 229, 230, 235]))
// console.log(highJump([250, 225, 224, 225, 228, 231, 235, 234, 235]))