function adAstra(str) {
  let neededCaloriesPerDay = 2000
  const regex = /(\#[A-Za-z\s]+\#\d{2}\/\d{2}\/\d{2}\#\d+\#|\|[A-Za-z\s]+\|\d{2}\/\d{2}\/\d{2}\|\d+\|)/gm
  const caloriesRgx = /\b#\d+#|\b\|\d+\|/gm
  try {
    let resultArr = str[0].match(regex)
    let allCalories = resultArr.toString().match(caloriesRgx).map(el => el.slice(1, -1)).reduce((a, b) => +a + +b)
    let totalCalories = Math.floor(allCalories / neededCaloriesPerDay)

    console.log(`You have food to last you for: ${totalCalories} days!`)

    for (const el of resultArr) {
      const [buffer, food, data, calories] = el.split(/#|\|/)
      console.log(`Item: ${food}, Best before: ${data}, Nutrition: ${calories}`)
    }

  } catch {
    return 'You have food to last you for: 0 days!'
  }
}


//console.log(adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']))
//adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
// adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])