function changeBureau(bitcoin, yuan, commission) {
    bitcoin *= 1168
    yuan *= 0.15 * 1.76

    let sum = ((bitcoin + yuan) / 1.95) * (100 - commission) / 100
    return sum.toFixed(2)
}

//console.log(changeBureau(1, 5, 5))