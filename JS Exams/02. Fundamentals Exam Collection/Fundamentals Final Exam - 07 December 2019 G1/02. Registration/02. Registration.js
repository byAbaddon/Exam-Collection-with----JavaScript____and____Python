function registration(inputArr) {
  let arr = [...inputArr]
  let pattern = /U\$(?<name>[A-Z][a-z]{2,})U\$P@\$(?<pass>[A-z]{5,}\d+)P@\$/
  let successRegistrations = 0

  for (let i = 1; i < arr.length; i++) {
    let result = [...arr[i].matchAll(pattern)][0]
    if (result !== undefined) {
      let name = result.groups.name
      let pass = result.groups.pass
      console.log('Registration was successful');
      console.log(`Username: ${name}, Password: ${pass}`);
      successRegistrations++
    } else {
      console.log('Invalid username or password');
    }
  }

  console.log(`Successful registrations: ${successRegistrations}`);
}

//registration(['2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412'])