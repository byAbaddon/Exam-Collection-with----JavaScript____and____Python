window.addEventListener('load', solution);

function solution() {

  const html = {
    fname: () => document.getElementById("fname"),
    email: () => document.getElementById("email"),
    phone: () => document.getElementById("phone"),
    address: () => document.getElementById("address"),
    code: () => document.getElementById("code"),
    submitBtn: () => document.getElementById("submitBTN"),
    editBtn: () => document.getElementById("editBTN"),
    continueBtn: () => document.getElementById("continueBTN")
  }


  const inputData = Array.from(document.querySelectorAll('#form input'))
  inputData.pop()
  let dataObj = {}

  html.submitBtn().addEventListener('click', function () {
    const [fname, email, phone, address, code] = inputData.map(x => x.value)
    dataObj = {'Full Name: ': fname,'Email: ': email,'Phone Number: ': phone,'Address: ': address,'Postal Code: ': code}

    if (fname && email) {
      for (const [key, val] of Object.entries(dataObj)) {
        let li = document.createElement('li')
        li.textContent = key + val
        document.getElementById('infoPreview').appendChild(li)
      }

      inputData.map(x => x.value = '')

      html.submitBtn().setAttribute("disabled", "true")
      html.editBtn().removeAttribute("disabled")
      html.continueBtn().removeAttribute("disabled")
    }
  })


  html.editBtn().addEventListener('click', function (e) {
    html.submitBtn().removeAttribute("disabled")
    html.editBtn().setAttribute("disabled", "true")
    html.continueBtn().setAttribute("disabled", "true")
    document.getElementById('infoPreview').innerHTML = ''

    html.fname().value = dataObj['Full Name: ']
    html.email().value = dataObj['Email: ']
    html.phone().value = dataObj['Phone Number: ']
    html.address().value = dataObj['Address: ']
    html.code().value = dataObj['Postal Code: ']
  })


  html.continueBtn().addEventListener('click', function (e) {
    const blockDiv = document.getElementById('block')
    blockDiv.innerHTML = ''
    // blockDiv.innerHTML = '<h3>Thank you for reservation!</h3>' // not work in Judge hahah
    const h3 = document.createElement('h3')
    h3.textContent = "Thank you for your reservation!"
    blockDiv.appendChild(h3)
  })

}