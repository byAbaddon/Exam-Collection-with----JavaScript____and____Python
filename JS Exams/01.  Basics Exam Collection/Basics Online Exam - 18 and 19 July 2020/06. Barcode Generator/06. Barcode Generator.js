function barCodeGenerator([start, end]) {
  let collection = []
  for (let i = start[0]; i <= end[0]; i++) {
    for (let j = start[1]; j <= end[1]; j++) {
      for (let k = start[2]; k <= end[2]; k++) {
        for (let m = start[3]; m <= end[3]; m++) {
          if (i & 1 && j & 1 && k & 1 && m & 1)
            collection.push(+`${i}${j}${k}${m}`)
        }
      }
    }
  }

  console.log(collection.join(' '));
}

barCodeGenerator(['2345', '6789'])