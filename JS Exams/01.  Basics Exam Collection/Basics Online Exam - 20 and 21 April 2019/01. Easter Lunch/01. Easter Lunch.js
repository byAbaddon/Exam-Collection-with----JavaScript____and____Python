function easterLunch(EasterCakes, egsPackets, cookiesKg) {
    EasterCakes *= 3.20
    cookiesKg *= 5.40
    let egsPaintingPrice = egsPackets * 12 * 0.15
    egsPackets *= 4.35
    let totalPrice = EasterCakes + egsPackets + cookiesKg + egsPaintingPrice

    return totalPrice.toFixed(2)
}

//console.log(easterLunch(3, 2, 3))