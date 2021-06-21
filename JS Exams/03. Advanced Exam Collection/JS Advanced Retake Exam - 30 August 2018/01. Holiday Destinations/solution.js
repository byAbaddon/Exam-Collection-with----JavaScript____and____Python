function addDestination() {
 
  const html = {
    city : document.querySelector('input.inputData:nth-child(2)'),
    country : document.querySelector('input.inputData:nth-child(4)'),
    season : document.querySelector('#seasons').value,
    tBody : document.querySelector('#destinationsList'),
    sumBox : [...document.querySelectorAll('#summaryBox input')],
  }  


  if (html.city.value, html.country.value) {
    html.tBody.innerHTML += `<tr>
  <td>${html.city.value}, ${html.country.value}</td>
  <td>${html.season[0].toUpperCase() + html.season.slice(1)}</td>
  </tr>`
    
    // increase seasons boxes
    html.sumBox.find(x => x.id == html.season).value++
    
    //clear input fields
    html.city.value = html.country.value = ''
  }

} 
  
