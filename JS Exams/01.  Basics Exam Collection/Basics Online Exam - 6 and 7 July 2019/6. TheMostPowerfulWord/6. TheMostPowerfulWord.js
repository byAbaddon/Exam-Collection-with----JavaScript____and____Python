function theMostPowerfulWord(arg) {
  let sumWordChar = ''
  let totalSum = 0
  let powerWord = {}

  for (let i = 0; i < arg.length; i++) {
    if (arg[i] === 'End of words') {
      break
    }
    word = arg[i]
    sumWordChar = word.split('').map(el => el.charCodeAt(0)).reduce((a, b) => +a + +b)
    wordFirstChar = word.slice(0, 1)

    if (/[aeiouyAEIOUY]/gm.test(wordFirstChar)) {
      totalSum = sumWordChar * word.length
    } else {
      totalSum = sumWordChar / word.length
    }

    powerWord[word] = Math.round(totalSum)
    totalSum = 0
  }

 const mostStrongWord =  Object.keys(powerWord).reduce((a , b) => powerWord[a] > powerWord[b] ? a : b )
 console.log(`The most powerful word is ${mostStrongWord} - ${powerWord[mostStrongWord]}`);
}

//theMostPowerfulWord(['The', 'Most', 'Powerful', 'Word', 'Is', 'Experience', 'End of words', ])
//theMostPowerfulWord(["But", "Some", "People", "Say", "It's", "LOVE", "End of words", ])
