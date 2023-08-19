function giftSanta([N, M, S]) {
  let address = []

  for (let i = M; i >= N; i--) {
      if (i % 2 == 0 && i % 3 == 0) {
          if (i == S) break
          else address.push(i)
      }
  }
  return address.join(' ')
}

console.log(giftSanta(["1", "36", "12"]))


