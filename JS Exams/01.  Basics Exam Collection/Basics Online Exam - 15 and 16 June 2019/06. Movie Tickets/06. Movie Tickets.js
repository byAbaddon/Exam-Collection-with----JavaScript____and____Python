function movieTickets(arg) {
    let [start, end, n] = [...arg.map(Number)]

    for (let a = start; a <= end - 1; a++) {
        for (let b = 1; b <= n - 1; b++) {
            for (let c = 1; c <= n / 2 - 1; c++) {
                if (a & 1 && (a + b + c) & 1) {
                    console.log(`${String.fromCharCode(a)}-${b}${c}${a}`)
                }
            }
        }
    }
}


//movieTickets([86, 88, 4])
//movieTickets([71, 74, 6])