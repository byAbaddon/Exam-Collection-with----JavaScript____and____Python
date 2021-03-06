function solve() {

    function createDomElement(elementType, text, classes, attributes = [{}], event = {}) {
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
            attributes.forEach((el) => element.attr(el.k, el.v))

            if (event) {
                element.on(event.type, event.func)
            }
        }

        return element
    }

    let $book = $('form input:eq(0)')
    let $year = $('form input:eq(1)')
    let $price = $('form input:eq(2)')

    let $oldBooksSection = $('#outputs section:eq(0)')
    let $newBooksSection = $('#outputs section:eq(1)')

    let sections = document.querySelectorAll('section');
    let newSectionChilds = sections[1].children
    console.log(newSectionChilds.length);
  

    let $addBtn = $('form button').on('click', function (e) {
        e.preventDefault();

        if ($book.val() !== '' && $year.val() > 0 && $price.val() >= 0) {
            let div = createDomElement('div', undefined, 'book')
            let p = createDomElement('p', `${$book.val()} [${$year.val()}]`)
            let buttonBuy = createDomElement('button', `Buy it only for ${Number($price.val()).toFixed(2)} BGN`, undefined, undefined, {
                type: 'click',
                func: buttonBuyEvent
            })
            let buttonMove = createDomElement('button', 'Move to old section', undefined, undefined, {
                type: 'click',
                func: buttonMoveEvent
            })

            div.append(p)
           
            if ($year.val() >= 2000) {
                div.append(buttonBuy)
                div.append(buttonMove)
                $newBooksSection.append(div)
            } else {
                div.append(buttonBuy)
                $oldBooksSection.append(div)
            }
        }
    })

    let sumAllMoney = 0
    //increased with the given book price and remove parent
    function buttonBuyEvent() {
        sumAllMoney += Number($(this).text().match(/\d+\.\d+/g)[0]);
        $('h1:eq(1)').text(`Total Store Profit: ${sumAllMoney} BGN`)
        $(this).parent().remove()
    }

    //moved from the new books section to the old books section. 
    function buttonMoveEvent(e) {
        let getPrice = $(this).prev().text().match(/\d+\.\d+/g)[0]
        $(this).prev().text(`Buy it only for ${(getPrice * 0.85).toFixed(2)} BGN`)
        $oldBooksSection.append($(this).parent())
        $(this).remove()
    }


}










// function solve() { //-------------------FUCKING JUDGE---------------------------------------
//     let title = $('form input')
//     let year = $('form input:nth-child(4)')
//     year.prop('min', 0);
//     let price = $('form input:nth-child(6)')

//     let h1Price = $('h1:nth-child(3)')
//     let money = 0


//     let btn = $('form button').on('click', function (event) {
//         event.preventDefault();


//         if (title.val().length > 0) {
//             if (year.val() >= 2000) {
//                 let newBook = $(`<div class ='book'>
//         <p>${title.val()} [${year.val()}]</p>
//         <button class ='buy'>Buy it only for ${Number(price.val()).toFixed(2)} BGN</button>
//         <button class ='btnMove'>Movie to old selection</button>
//         </div>`)

//                 let newBookSection = $('#outputs section:nth-child(2)')
//                 newBookSection.append(newBook)

//             } else {
//                 let oldBook = $(`<div class ='book'>
//                 <p>${title.val()} [${year.val()}]</p>
//                 <button class ='buy'>Buy it only for ${(Number(price.val()) * 0.85).toFixed(2)} BGN</button>
//                 </div>`)

//                 let oldBookSection = $('#outputs section:nth-child(1)')
//                 oldBookSection.append(oldBook)
//             }

//         }

//         $('.btnMove').on('click', function () {
//             let copyAndMoveBook = this.parentNode
//             oldBookSection = $('#outputs section:nth-child(1)')

//               let textButtonPrice = this.previousElementSibling
//                 let newPrice = (textButtonPrice.textContent.slice(-9, -4) * 0.85).toFixed(2)

//                 textButtonPrice.textContent = `Buy it only for ${newPrice} BGN`

//                 oldBookSection.append(copyAndMoveBook)
//                 this.remove()

//         })


//         let buy = $('.buy').on('click', function () {
//             money += +this.textContent.slice(-9, -4)
//             h1Price.text(`Total Store Profit: ${money.toFixed(2)} BGN`)
//             this.parentNode.remove()

//         })
//     })

// }






// function solve() {   //-----------------------100pts----------------------------------------------
//     let oldBooks = document.querySelectorAll('#outputs .bookShelf')[0];
//     let newBooks = document.querySelectorAll('#outputs .bookShelf')[1];
//     document.querySelector('body form button').addEventListener('click', addBook);
//     function addBook(e) {
//         e.preventDefault();
//         const fields = document.querySelectorAll('body form input');
//         const title = fields[0].value;
//         const year = Number(fields[1].value);
//         let price = Number(fields[2].value);
//         //triple condition
//         if(title === '' || year < 1 || price <= 0) { return; }

//         const book = createBook(title,year,price);
//         year >= 2000 ? newBooks.appendChild(book) : oldBooks.appendChild(book);
//     }

//     function createBook(title, year, price) {
//         let divBook = document.createElement('div');
//         divBook.className = 'book';

//         let paragraphBook = document.createElement('p');
//         paragraphBook.textContent = `${title} [${year}]`;
//         divBook.appendChild(paragraphBook);

//         year < 2000 ? price = discount(price) : price;
//         let buttonBuyBook = addButton(`Buy it only for ${price.toFixed(2)} BGN`);
//         buttonBuyBook.addEventListener('click', buyBook);
//         divBook.appendChild(buttonBuyBook);

//         if(year >= 2000) {
//             let buttonOldSection = addButton('Move to old section');
//             buttonOldSection.addEventListener('click', toOldSection);
//             divBook.appendChild(buttonOldSection);
//         }

//         return divBook;
//     }

//     function discount(price) {
//         return price * 0.85;
//     }

//     function addButton(context) {
//         let button = document.createElement('button');
//         button.textContent = context;
//         return button;
//     }

//     function buyBook(e) {
//         let storeProfit = document.querySelectorAll('body h1')[1];
//         let oldProfit = Number(storeProfit.textContent.split(' ')[3]);

//         let bookPrice = Number(this.textContent.split(' ')[4]);
//         storeProfit.textContent = `Total Store Profit: ${(oldProfit + bookPrice).toFixed(2)} BGN`;
//         this.parentNode.remove();
//     }

//     function toOldSection(e) {
//         let bookMoved = this.parentNode;
//         //remove only button to old sectio!!!
//         this.remove();

//         let buyBook = bookMoved.querySelector('button');
//         let oldPrice = Number(buyBook.textContent.split(' ')[4]);
//         buyBook.textContent = `Buy it only for ${discount(oldPrice).toFixed(2)} BGN`;
//         oldBooks.appendChild(bookMoved);
//     }
// }