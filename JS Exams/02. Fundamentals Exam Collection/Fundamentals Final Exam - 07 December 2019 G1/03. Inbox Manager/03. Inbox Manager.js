function inboxManager(inputArr) {
  let arr = [...inputArr]
  let rmLastEl = arr.pop()
  let countUsers = 0
  let objPosts = {}

  while (arr.length > 0) {
    let line = arr.shift()
    let [command, userName, post] = line.split('->')

    if (command === 'Add') {
      if (!objPosts[userName]) {
        objPosts[userName] = []
        countUsers++
      } else {
        console.log(`${userName} is already registered`);
      }
    } else if (command === 'Delete')
      if (objPosts[userName]) {
        delete objPosts[userName]
        countUsers--
      } else {
        console.log(`${userName} not found!`);
      }
    else { //command == send
      objPosts[userName].push(' - ' + post)
    }
  }

  console.log(`Users count: ${countUsers}`);

  let sortObj = Object.entries(objPosts).sort((a, b) => a[0].localeCompare(b[0]))
                                        .sort((a, b) => b[1].length - a[1].length)
                                        

  for (const el of sortObj) {
    console.log(el[0]);
    el[1].forEach(val => console.log(val))
  }
}

//inboxManager([
//  'Add->Mike',
//  'Add->George',
//  'Send->George->Hello World',
//  'Send->George->Some random test mail',
//  'Send->Mike->Hello, do you want to meet up tomorrow?',
//  'Send->George->It would be a pleasure',
//  'Send->Mike->Another random test mail',
//  'Statistics',
//])

// inboxManager([
// "Add->Mike", 
// "Add->George",
// "Send->George->Hello World",
// "Send->George->Your loan is overdue",
// "Add->Mike",
// "Send->Mike->Hello, do you want to meet up tomorrow?",
// "Delete->Peter",
// "Send->George->I'm busy",
// "Send->Mike->Another random test mail",
// "Delete->George",
// "Statistics",])
