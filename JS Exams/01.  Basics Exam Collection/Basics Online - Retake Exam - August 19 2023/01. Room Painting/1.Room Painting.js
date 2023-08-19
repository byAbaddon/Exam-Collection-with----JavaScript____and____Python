function roomPainting(arg) {
  let [paint, wallpaper, gloves, brush] = arg.map(Number)
  const paintPrice = 21.50
  const wallpaperPrice = 5.20
  const glovesNeeded = Math.ceil(wallpaper * 0.35)
  const brushesNeeded = Math.floor(paint * 0.48)

  const subtotal = (paint * paintPrice) + (wallpaper * wallpaperPrice) + (glovesNeeded * gloves) + (brushesNeeded * brush)
  const total = subtotal / 15

  return `This delivery will cost ${total.toFixed(2)} lv.`
}



console.log(roomPainting(['10','8','2.2','5',]))