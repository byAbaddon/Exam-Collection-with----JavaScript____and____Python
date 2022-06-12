function solve() {
  const html = {
    recipient:   document.getElementById('recipientName'),
    title:       document.getElementById('title'),
    textarea:    document.getElementById('message'),
    ulList:      document.getElementById('list'),
    ulSendList:  document.getElementsByClassName('sent-list')[0],
    ulDeleteList:document.getElementsByClassName('delete-list')[0],
  }

  document.addEventListener("click", function (e) {
    e.preventDefault()
    if (e.target.tagName == 'BUTTON') {
      const btnName = e.target.textContent
      if (btnName == 'Add to the List') addList()
      if (btnName == 'Reset') resetForm()
      if (btnName == 'Send') send(e)
      if (btnName == 'Delete') del(e)
    }
  })

  function resetForm() {
    html.recipient.value = html.title.value = html.textarea.value = ''
  }


  function addList() {
    if (html.recipient.value && html.title.value && html.textarea.value) {
      html.ulList.innerHTML += `<li>
      <h4>Title: ${html.title.value}</h4>
      <h4>Recipient Name: ${html.recipient.value}</h4>
      <span>${html.textarea.value}</span>
      <div id="list-action">
        <button type="submit" id="send">Send</button>
        <button type="submit" id="delete">Delete</button>
       </div>
    </li>`

      resetForm()
    }
  }

  function send(e) {
    let data = e.target.parentNode.parentNode.children
    const recipient = data[0].textContent.split(':')[1]
    const title = data[1].textContent.split(':')[1]
    html.ulSendList.innerHTML +=
      `<li>
      <span>To: ${recipient}</span>
      <span>Title: ${title}</span>
      <div class="btn">
          <button type="submit" class="delete">Delete</button>
      </div>
  </li>`

    e.target.parentNode.parentNode.remove()
  }

  function del(e) {
    let data = e.target.parentNode.parentNode.children
    let recipient = data[0].textContent.split(':')
    recipient.length == 2 ? recipient = recipient[1] : null

    html.ulDeleteList.innerHTML +=
      `<li>
           <span>To: ${recipient}</span>
     </li>`
    e.target.parentNode.parentNode.remove()
  }

}

solve()


