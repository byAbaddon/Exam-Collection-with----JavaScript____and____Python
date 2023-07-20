function fancyBarcodes(arr) {
  let loop = +arr.shift()
  let regex = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/gm

  while (loop--) {
    let code =arr.shift().match(regex)
    if (code) {
      let digits = code[0].match(/\d+/gm)
      console.log(`Product group: ${!digits ? '00' : digits.join('')}`)
      continue
    } 
    console.log('Invalid barcode')
  }
}

//----------------------------------------------------(2)




function fancyBarcodes(arr) {
  let loop = +arr.shift()
  let regex = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/gm

  while (loop--) {
    let currentCode = arr.shift()
    let code = currentCode.match(regex)
    if (code != null) {
      let digits = code[0].match(/\d+/gm)
      if (digits == null) {
        console.log('Product group:', '00')
      } else {
        console.log('Product group:', digits.join(''))
      }
    } else {
      console.log('Invalid barcode')
    }
  }
}


// fancyBarcodes(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che4s6E@##'])
