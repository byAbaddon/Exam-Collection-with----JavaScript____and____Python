function secretChat(arr) {
  arr.pop()
  let message = arr.shift()

  while (arr.length > 0) {
    const [command, arg1, arg2] = arr.shift().split(':|:').map(el => isNaN(el) ? el : Number(el))

    if (command == 'ChangeAll') {
      while (message.includes(arg1))
        message = message.replace(arg1, arg2)
      console.log(message)
    }

    if (command == 'Reverse') {
      if (message.includes(arg1)) {
        let index = message.indexOf(arg1)
        message = message.slice(0, index) + message.slice(index + arg1.length, )
        message += [...arg1].reverse().join('')
        console.log(message)
      } else {
        console.log('error');
      }
    }

    if (command == 'InsertSpace') {
      message = message.slice(0, arg1) + ' ' + message.slice(arg1, Infinity)
      console.log(message)
    }

  }

  console.log('You have a new text message:', message)
}

// secretChat(['heVVodar!gniV', 'ChangeAll:|:V:|:l', 'Reverse:|:!gnil', 'InsertSpace:|:5', 'Reveal'])