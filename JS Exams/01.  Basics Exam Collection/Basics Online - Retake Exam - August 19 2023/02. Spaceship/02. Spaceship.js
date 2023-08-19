function spaceship(arg) {
    const [width, length, height ,averageHeight] = arg.map(parseFloat)
  
    const shipVolume = width * length * height
    const roomVolume = (averageHeight + 0.4) * 2 * 2
    const astronauts = ~~shipVolume / roomVolume
    
    if (astronauts >= 3 && astronauts <= 10) 
        return `The spacecraft holds ${~~astronauts} astronauts.`
    else if (astronauts < 3) return 'The spacecraft is too small.'
    else return 'The spacecraft is too big.' 
}

console.log(spaceship(["3.5", "4", "5", "1.70"]))