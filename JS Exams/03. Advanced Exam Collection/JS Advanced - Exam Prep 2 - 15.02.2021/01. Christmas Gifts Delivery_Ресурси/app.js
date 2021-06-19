function solution () {
	const cardLists = document.querySelectorAll(`.container section ul`)
	const inputField = document.querySelector('input')

	function giftTemplFactory (moved, name) {
		const li = document.createElement('li')

		li.className = 'gift'
		li.innerHTML =
			`${name}${moved
				? '<button id="sendButton">Send</button><button id="discardButton">Discard</button>'
				: ''}`

		return li
	}

	const appendToSection = (s, e) => {
		s.appendChild(giftTemplFactory(false, e.parentNode.childNodes[0].textContent))
		e.parentNode.outerHTML = ''
	}

	document.addEventListener('click', (e) => {
		if (e.target.tagName === 'BUTTON') {
			const action = e.target.id

			const actions = {
				'': () => {
					const listOfGifts = cardLists[0]
					const gifts = Array.from(listOfGifts.children)

					gifts.push(giftTemplFactory(true, inputField.value))
					gifts.sort((a, b) => a.innerHTML.localeCompare(b.innerHTML))
					gifts.forEach(gift => listOfGifts.appendChild(gift))
					inputField.value = ''

				},
				'sendButton': () => appendToSection(cardLists[1], e.target),
				'discardButton': () => appendToSection(cardLists[2], e.target),
			}

			actions[action]()
		}
	})
}


//-------------------------------------------------(2)  FUCKING JUDGE      TODO:-------------------------------------------------


function solution() {
	const html = {
		input: document.querySelector('input'),
		btnAddGift: document.querySelector('button'),
		allSectionsUl: Array.from(document.querySelectorAll(`.container section ul`))
	}

	function patternFactory(name, moved) {
		const li = document.createElement('li')
		li.className = 'gift'
		li.innerHTML = `${name}${moved ? '<button id="sendButton">Send</button><button id="discardButton">Discard</button>' : ''}`
		return li
	}


	html.btnAddGift.addEventListener('click', function (e) {
		e.preventDefault()
		if (!html.input.value) return

		//add li to ul   ListOfGifts
		html.allSectionsUl[0].appendChild(patternFactory(html.input.value, true))

		// sort all li 
		Array.from(html.allSectionsUl[0].querySelectorAll('li'))
			.sort((a, b) => a.textContent.localeCompare(b.textContent))
			.map(li => html.allSectionsUl[0].appendChild(li))

		//clear input field
		html.input.value = ''
	})

	// movie items to other sections
	html.allSectionsUl[0].addEventListener('click', function (e) {
		if ((e.target.tagName == 'BUTTON')) {
			let sectionNum = e.target.textContent == 'Send' ? 1 : 2
			html.allSectionsUl[sectionNum].appendChild(patternFactory(this.firstChild.textContent, false))
			e.target.parentNode.remove()
		}
	})

}

