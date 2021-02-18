function theImitationGame(arr) {
  arr.pop()
  let message = arr.shift()

  for (const line of arr) {
    const [command, arg1, arg2] = line.split('|')

    if (command == 'Move') {
      let endIndex = +arg1
      message = message.slice(endIndex) + message.slice(0, endIndex)
    }

    if (command == 'Insert') {
      let [index, char] = [+arg1, arg2]
      message = [...message]
      message.splice(index, 0, char)
      message = message.join('')
    }

    if (command == 'ChangeAll') {
      let [oldChar, newChar] = [arg1, arg2]
      while (message.includes(oldChar))
        message = message.replace(oldChar, newChar)
    }

  }

  return `The decrypted message is: ${message}`
}


// console.log(theImitationGame(
//   [
//     'zzHe',
//     'ChangeAll|z|l',
//     'Insert|2|o',
//     'Move|3',
//     'Decode'
//   ]
// ))


// console.log(theImitationGame(
//   [
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode'
//   ]
// ))