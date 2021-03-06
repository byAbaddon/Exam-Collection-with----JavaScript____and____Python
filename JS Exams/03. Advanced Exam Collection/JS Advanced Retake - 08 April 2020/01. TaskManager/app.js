function solve() {  //---------------WTF  Fucking Judge 87pts-----------------------------

    const $task = $('#task')
    const $desc = $('#description')
    const $date = $('#date')

    let $openSec = $('section:eq(1) div:eq(1)') // Open section
    let $progSec = $('section:eq(2) div:eq(1)') // InProgress section
    let $compSec = $('section:eq(3) div:eq(1)') // Complete section


    function createDomElement(elementType, text, classes, attributes, event) {
        let element = ''
        if (elementType) {
            element = $(`<${elementType}>`)
        }

        if (text) {
            element.text(text)
        }

        if (classes) {
            element.addClass(classes)
        }

        if (attributes) {
            attributes.forEach((el) => element.attr(el.k, el.v)) //[{}]   [{k:'id', v:'btn'}, ]   ....

            if (event) {
                element.on(event.eventName, eventFunction.func) //{}    {eventName : 'click' , eventFunction: doSomething} 
            }
        }

        return element

    }


    const btnAdd = $('#add').on('click', function (e) {
        e.preventDefault();

        if ($task.val() !== '' && $desc.val() !== '' && ($date.val() !== '' && !/[A-Za-z]/.test($date.val()))) {

            let article = createDomElement('article')
            let h3 = createDomElement('h3', $task.val())
            let p1 = createDomElement('p', `Description: ${$desc.val()}`)
            let p2 = createDomElement('p', `Due Date: ${$date.val()}`)
            let div = createDomElement('div', undefined, 'flex')
            let btn1 = createDomElement('button', 'Start', 'green')
            let btn2 = createDomElement('button', 'Delete', 'red')

            article.append(h3)
            article.append(p1)
            article.append(p2)

            div.append(btn1)
            div.append(btn2)
            article.append(div)

            $openSec.append(article)
        } 
    })


    $openSec.on('click', function (e) { // Open section
        if (e.target.className === 'red') {
            e.target.parentNode.parentNode.remove()
        } else {
            $progSec.append(e.target.parentNode.parentNode)
            $(e.target).attr('class', 'orange') //.addClass('orange')
            $(e.target).insertAfter($(e.target).next())
        }
    })


    $progSec.on('click', function (e) { // InProgram section
        if (e.target.className === 'red') {
            e.target.parentNode.parentNode.remove()
        } else {
            $compSec.append(e.target.parentNode.parentNode)
            e.target.parentNode.remove()
        }
    })

}




/* 

function solve() {   //----------------(2)-----------FUCKING JUDGE-------------------------------------//

    const $task = document.getElementById('task')
    const $desc = document.getElementById('description')
    const $date = document.getElementById('date')


    document.querySelector('button').addEventListener('click', function (event) {
        event.preventDefault()
        if ($task.value !== '' && $desc.value !== '' && $date.value !== '') {

            let art = document.createElement('article')
            let h3 = document.createElement('h3')
            let p1 = document.createElement('p')
            let p2 = document.createElement('p')
            let div = document.createElement('div')
            let btn1 = document.createElement('button')
            let btn2 = document.createElement('button')

            h3.textContent = $task.value
            p1.textContent = `Description: ${$desc.value}`
            p2.textContent = `Due Date: ${$date.value}`
            div.classList.add('flex')
            btn1.classList.add('green')
            btn1.textContent = 'Start'
            btn2.classList.add('red')
            btn2.textContent = 'Delete'


            art.appendChild(h3)
            art.appendChild(p1)
            art.appendChild(p2)
            art.appendChild(div)
            div.appendChild(btn1)
            div.appendChild(btn2)

            document.querySelector('.orange').parentNode.nextElementSibling.appendChild(art) //orange section
        }
    })

    // open
    document.querySelector('.wrapper > section:nth-child(2) > div:nth-child(2)').addEventListener('click', function (event) {
        if (event.target.textContent === 'Delete') {
            event.target.parentNode.parentNode.remove()
        } else { //if ((event.target.textContent === 'Start'))

            event.target.classList.remove('green')
            event.target.classList.add('orange')
            event.target.textContent = 'Finish'
            event.target.before(event.target.nextElementSibling)
            document.querySelector('.yellow').parentNode.nextElementSibling.appendChild(event.target.parentNode.parentNode)

        }
    })

    // in Progress
    document.querySelector('.wrapper > section:nth-child(3) > div:nth-child(2)').addEventListener('click', function (event) {
        if (event.target.textContent === 'Delete') {
            event.target.parentNode.parentNode.remove()
        } else { //if ((event.target.textContent === 'Finish')) {
            document.querySelector('.wrapper > section:nth-child(4) > div:nth-child(2)').appendChild(event.target.parentNode.parentNode)
            event.target.parentNode.remove()

        }
    })

}




function solve() { //----------------(3)-----------FUCKING JUDGE-------------------------------------//
    const $task = $('#task')
    const $desc = $('#description')
    const $date = $('#date')

    const $addBtn = $('#add').on('click', function (event) {
        event.preventDefault();
        if ($task.val() !== '' && $desc.val() !== '' && ($date.val() !== '')) { //&& !isNaN($date.val())

            let pattern = `<article>
        <h3>${$task.val()}</h3>
        <p>Description: ${$desc.val()}</p>
        <p>Due Date: ${$date.val()}</p>
        <div id = 'buttons' class = 'flex'>
          <button class = 'green'>Start</button>
          <button class = 'red'>Delete</button>
        </div>
        </article>`

            $('.wrapper section:eq(1) > div:eq(1)').append(pattern) //orange section
            // $task.val('')
            // $desc.val('')
            // $date.val('')
        }

        $('#buttons button').on('click', function () { //remove & move <article>
            if (this.className === 'red') {
                $(this).parent().parent().remove()
            } else if (this.className === 'green') {
                $('.wrapper section:eq(2) > div:eq(1)').append($(this).parent().parent()) //yellow section
                $(this).attr('class', 'orange').attr('id', 'orange') //.changeClass to orange 
            }

            $('#orange').on('click', function () {
                $('.wrapper section:eq(3) > div:eq(1)').append($(this).parent().parent()) //green section
                $(this).parent().remove()
            })

        })
    })

}



*/