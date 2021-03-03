function santasSecretHelper(arr) {
  arr.pop()
  let key = arr.shift()
  for (const line of arr) {
    let message = line.split('').map(el => String.fromCharCode(String(el).charCodeAt(0) - key)).join('')
    const regex = /@([A-Za-z]+)[^@|\-|\:|\|\!|\>]+!G!/gm
    if (regex.test(message)) console.log(message.match(/@[A-Za-z]+/)[0].slice(1))      
  } 
}

// santasSecretHelper(['3', 'CNdwhamigyenumje$J$', 'CEreelh-nmguuejn$J$', 'CVwdq&gnmjkvng$Q$', 'end',])

// santasSecretHelper([
// "3",
// "N}eideidmk$'(mnyenmCNlpamnin$J$",
// "ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge",
// "ppqmkkkmnolmnnCEhq/vkievk$Q$",
// "yyegiivoguCYdohqwlqh/kguimhk$J$",
// "end",
// ])