function divisionWithoutRemainder(arg) {
    let loop = +arg.shift()

    function test(n) {
        return `${(arg.map(Number).filter(x => x % n === 0).length / loop * 100).toFixed(2)}%`
    }

    return `${test(2)}\n${test(3)}\n${test(4)}`
}

//console.log(divisionWithoutRemainder([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]))