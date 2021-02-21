function heroRecruitment(inputArr) {
  let arr = [...inputArr]
  let objHeros = {}

  for (const el of arr) {
    let [command, name, spName] = el.split(' ')

    switch (true) {
      case command === 'Enroll':
        if (objHeros[name]) {
          console.log(`${name} is already enrolled.`);
        } else {
          objHeros[name] = []
        }
        break;
      case command === 'Learn':
        if (objHeros[name]) {
          if (objHeros[name].includes(spName)) {
            console.log(`${name} has already learnt ${spName}.`);
          } else {
            objHeros[name].push(spName)
          }
        } else {
          console.log(`${name} doesn't exist.`);
        }
        break;
      case command === 'Unlearn':
        if (objHeros[name]) {
          if (objHeros[name].includes(spName)) {
            objHeros[name].pop(spName)
          } else {
            console.log(`${name} doesn't know ${spName}.`);
          }
        } else {
          console.log(`${name} doesn't exist.`);
        }
        break;
    }
  }

  let sortedHeros = Object.entries(objHeros).sort((a, b) => a[0].localeCompare(b[0]))
                                            .sort((a, b) => b[1].length - a[1].length)
  console.log('Heroes:');

  for (const key of sortedHeros) {
    console.log('==', key[0] + ': ' + key[1].join(', '));
  }
}

// heroRecruitment([
//   'Enroll Stefan',
//   'Learn Stefan ItShouldWork',
//   'Learn Stefan ItShouldWork2',
//   'Learn Stefan ItShouldWork22',
//   'Learn Stefan ItShouldWork222',
//   'Learn Stefan ItShouldWork2222',
//   'Unlearn Stefan ItShouldWork',
//   'Enroll Stefan',
//   'Enroll Pesho',
//   'Enroll Stefan',
//   'Learn Stefan ItShouldWork',
//   'Learn Stamat ItShouldNotWork',
//   // 'Unlearn Gosho Dispel',
//   // 'Unlearn Stefan ItShouldWork',
//   'End'
// ])




// heroRecruitment([
//   'Enroll Stefan',
//   'Enroll Pesho',
//   'Enroll Stefan',
//   'Learn Stefan ItShouldWork',
//   'Learn Stamat ItShouldNotWork',
//   'Unlearn Gosho Dispel',
//   'Unlearn Stefan ItShouldWork',
//   'End'
// ])

// heroRecruitment([
//   'Enroll Stefan',
//   'Learn Stefan ItShouldWork',
//   'Learn Stefan ItShouldWork',
//   'Unlearn Stefan NotFound',
//   'End'
//   ])