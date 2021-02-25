function memoryGame(arr) {
  arr.pop()
  let board = arr.shift().split(' ')
  let moves = 0

  while (board.length > 0 &&  arr.length > 0) {
    moves++
    const [fIndex, sIndex] = arr.shift().split(' ')
    let [firstEl, secondEl] = [board[fIndex], board[sIndex]]

    if (firstEl == undefined || secondEl == undefined) {
      board.splice(Math.floor(board.length / 2), 0, `-${moves}a`, `-${moves}a`)
      console.log('Invalid input! Adding additional elements to the board')

    } else if (firstEl == secondEl) {
      board = board.filter((el, i) => i == fIndex || i == sIndex ? null : el)
      console.log(`Congrats! You have found matching elements - ${firstEl}!`)

    } else {
      console.log('Try again!')
    }
  }

  return board.length > 0 ? `Sorry you lose :(\n${board.join(' ')}` : `You have won in ${moves} turns!`
}



// console.log(memoryGame(
//   [
//     "1 1 2 2 3 3 4 4 5 5",
//     "1 0",
//     "-1 0",
//     "1 0",
//     "1 0",
//     "1 0",
//     "end"
//   ]
// ))

// console.log(memoryGame(
//   [
//     "a 2 4 a 2 4", 
//     "0 3", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]
// ))

// console.log(memoryGame(
//   [
//     "a 2 4 a 2 4", 
//     "4 0", 
//     "0 2",
//     "0 1",
//     "0 1", 
//     "end"
//     ]
// ))