function softUniKaraoke(arr) {
  arr.pop()
  let karaokeObj = {}

  const karaokeSingersArr = arr.shift().split(', ')
  const starsSingersAndSongsArr = arr.shift().split(', ')

  for (const token of arr) {
    const [karaokeSinger, starsSingerAndSong, typeOfStile] = token.split(', ')

    if (karaokeSingersArr.includes(karaokeSinger) && starsSingersAndSongsArr.includes(starsSingerAndSong)) {
      if (!karaokeObj.hasOwnProperty(karaokeSinger))
        karaokeObj[karaokeSinger] = new Set([typeOfStile])
      else
        karaokeObj[karaokeSinger].add(typeOfStile)
    }
  }

  if (Object.values(karaokeObj).length == 0) return 'No awards'

  let sortKaraokeObj = Object.entries(karaokeObj).sort((a, b) => b[1].size - a[1].size)

  for (const [key, val] of sortKaraokeObj) {
    console.log(`${key}: ${val.size} awards`);
    Array.from(val).sort((a, b) => a.localeCompare(b)).forEach(el => console.log(`--${el}`))
  }
}


// softUniKaraoke([
//   "Trifon, Vankata, Gesha",
//   "Dragana - Kukavice, Bon Jovi - It's my life, Lorde - Royals",
//   "Gesha, Bon Jovi - It's my life, Best Rock",
//   "Vankata, Dragana - Kukavice, Best Srabsko",
//   "Vankata, Dragana - Kukavice, Best Srabsko",
//   "Vankata, Dragana - Kukavice, Stiga Tolko Srabsko",
//   "Vankata, PHP Web, Educational 101",
//   "dawn",
// ])


// softUniKaraoke([
// "Gesha",
// "Bon Jovi - It's my life",
// "Gesha, Bon Jovi - It's my life, Best Rock",
// "Vankata, Dragana - Kukavice, Best Srabsko",
// "Vankata, Dragana - Kukavice, Stiga Tolko Srabsko",
// "Vankata, PHP Web, Educational 101",
// "dawn",
// ])


// softUniKaraoke([
// "Sino",
// "Vasko Naidenov - Nova Godina",
// "dawn",
//   ])