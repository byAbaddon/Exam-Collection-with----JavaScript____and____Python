function fitnessCenter(arg) {
    let clients = Number(arg.shift())
    let back = `${arg.filter(x => x === 'Back').length}`
    let chest = `${arg.filter(x => x === 'Chest').length}`
    let legs = `${arg.filter(x => x === 'Legs').length}`
    let abs = `${arg.filter(x => x === 'Abs').length}`
    let proteinShake = `${arg.filter(x => x === 'Protein shake').length}`
    let proteinBar = `${arg.filter(x => x === 'Protein bar').length}`

    console.log(`${back} - back\n${chest} - chest\n${legs} - legs\n${abs} - abs\n${proteinShake} - protein shake\n${proteinBar} - protein bar`)
    console.log(`${((+back + +chest + +legs + +abs) / clients * 100).toFixed(2)}% - work out`)
    console.log(`${((+proteinShake + +proteinBar) / clients * 100).toFixed(2)}% - protein`)
}


// fitnessCenter([
//     10,
//     'Back',
//     'Chest',
//     'Legs',
//     'Abs',
//     'Protein shake',
//     'Protein bar',
//     'Protein shake',
//     'Protein bar',
//     'Legs',
//     'Abs',
// ])