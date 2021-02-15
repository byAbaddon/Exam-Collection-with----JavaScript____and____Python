function passwordReset(arr) {
  arr.pop()
  let pass = arr.shift()

  while (arr.length > 0) {
    const [command, elOne, elTwo] = arr.shift().split(' ')

    if (command == 'TakeOdd')
      pass = [...pass].filter((el, index) => index & 1).join('')

    if (command == 'Cut') {
      pass = [...pass]
      pass.splice(elOne, elTwo)
      pass = pass.join('')
    }

    if (command == 'Substitute' && pass.includes(elOne)) {
      while (pass.includes(elOne)) {
        pass = pass.replace(elOne, elTwo)
      }

    } else if (command == 'Substitute') {
      console.log('Nothing to replace!')
      continue
    }

    console.log(pass)
  }

  console.log(`Your password is: ${pass}`)
}


// passwordReset([
//   'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
//   'TakeOdd',
//   'Cut 15 3',
//   'Substitute :: -',
//   'Substitute | ^',
//   'Done  ',
// ])