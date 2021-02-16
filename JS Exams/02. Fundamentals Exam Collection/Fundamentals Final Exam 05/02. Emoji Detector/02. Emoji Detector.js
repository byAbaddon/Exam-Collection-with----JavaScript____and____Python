function emojiDetector(arr) {
  let text = arr[0]
  let regexThreshold = /[0-9]/gm
  let regexEmo = /(:{2}[A-Z]{1}[a-z]{2,}:{2})|(\*{2}[A-Z]{1}[a-z]{2,}\*{2})/gm

  let emoticonsArr = text.match(regexEmo)
  let thresholdArr = text.match(regexThreshold).map(Number)
  let sumThreshold = thresholdArr.reduce((a, b) => a * b)

  console.log('Cool threshold:', sumThreshold)
  console.log(emoticonsArr.length, 'emojis found in the text. The cool ones are:')


  for (const emo of emoticonsArr) {
    let currentCharSum = 0
    for (const char of emo) {
      if (char.toUpperCase() != char.toLowerCase()) {
        currentCharSum += char.charCodeAt(0)
      }
    }

    if (currentCharSum >= sumThreshold)  console.log(emo)
  }
}

emojiDetector(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'])