function nationalCourt(arr) {
  let clients = arr.pop()
  let allEmployees = arr.reduce((a, b) => +a + +b)
  let hour = 0

  while (clients > 0) {
    hour++
    clients -= allEmployees

    if (hour % 4 == 0) hour++   
  }

  return `Time needed: ${hour}h.`
}

// console.log(nationalCourt([5, 6, 4, 20]))