function solve() {
   const sectionInMain = document.querySelector('main>section');
   const button = document.querySelector('button');
   button.addEventListener('click', function(ev) {
       ev.preventDefault();
       [creator, title, category] = Array.from(ev.target.parentNode.querySelectorAll('input'));
       
       const content = ev.target.parentNode.querySelector('textarea');

       const article = createElement('article');
       const h1 = createElement('h1', title.value, );

       const p1 = createElement('p', 'Category:');
       createElement('strong', category.value, undefined, p1);

       const p2 = createElement('p', 'Creator:');
       createElement('strong', creator.value, undefined, p2);

       const p3 = createElement('p', content.value)
       const div = createElement('div', undefined, 'buttons');
       const deleteBtn = createElement('button', 'Delete', "btn delete", div);
       const archiveBtn = createElement('button', 'Archive', "btn archive", div);

       [h1, p1, p2, p3, div].forEach((el) => article.appendChild(el));
       sectionInMain.appendChild(article);
       [creator, title, category, content].forEach((el) => el.value = '');

       deleteBtn.addEventListener('click', onClickDelete);
       archiveBtn.addEventListener('click', onClickArchive);

       function onClickDelete() {
           article.parentNode.removeChild(article);
       }

       function onClickArchive() {
           const ol = document.querySelector('ol');
           createElement('li', h1.textContent, undefined, ol);
           Array.from(ol.querySelectorAll('li')).sort((a, b) =>
               a.textContent.localeCompare(b.textContent)).forEach(li => ol.appendChild(li))

           article.parentNode.removeChild(article);
       }
   });

   function createElement(type, content, attribute, appendTo) {
       const el = document.createElement(type);
       if (attribute) {
           el.setAttribute('class', attribute);
           el.textContent = content;
       } else if (content) {
           el.textContent = content;
       }
       if (appendTo) {
           appendTo.appendChild(el);
       }
       return el;
   }
}


//------------------------------------------- (2)----FUCKING JUDGE----------------------------------


// function solve() {
//    [author, title, category, content] =  Array.from(document.querySelectorAll('p')).map(x => x.lastElementChild)
//    document.querySelector('form > button').addEventListener('click', function (e) {
//       e.preventDefault()
      
//       document.querySelector('main > section').appendChild(articleFactory())
//       Array.from(document.querySelectorAll('button')).map(btn => btn.onclick = clickButton)
//       author.value = title.value = category.value = content.value  =  ''
//   })

//    function clickButton() {
//       if (this.textContent == 'Delete') this.parentNode.parentNode.remove()
//       if (this.textContent == 'Archive') {
//          const getTitle = this.parentNode.parentNode.firstElementChild.textContent
//          let ol = document.querySelector('ol')
//          ol.innerHTML += `<li>${getTitle}</li>`
       
//          Array.from(document.querySelectorAll('li')).sort((a, d) => a.textContent.localeCompare(d.textContent))
//             .forEach(li => ol.appendChild(li))

//          this.parentNode.parentNode.remove()
//       }

//    }

//    function articleFactory() {
//       let art = document.createElement('article')
//       art.innerHTML = `<h1>${title.value}</h1>
//       <p>Category: <strong>${category.value}</strong></p>
//       <p>Creator: <strong>${author.value}</strong></p>
//       <p>${content.value}</p>
//       <div class="buttons">
//       <button class="btn delete">Delete</button>
//       <button class="btn archive">Archive</button>
//       </div>
//       `
//       return art
//       }
// }
                              
//------------------------------------------- (3)----FUCKING JUDGE-----------------------------------------



// function solve() {

//   document.querySelector('button').addEventListener('click', function (e) {
//       e.preventDefault()
//       let [author, title, category] =  Array.from(e.target.parentNode.querySelectorAll('input'))
//       let content = document.getElementById('content')
     
//       document.querySelector('main > section').appendChild(articleFactory())
//       author.value = title.value = category.value = content.value  =  ''

//       function btnDelete() { this.parentNode.parentNode.remove() }

//       function btnArchive() {
//          const ol = document.querySelector('.archive-section > ol')
//          const getTitle = this.parentNode.parentNode.firstElementChild.textContent

//          createDomElement('li', getTitle, null, ol);
//          Array.from(ol.querySelectorAll('li')).sort((a, b) =>
//             a.textContent.localeCompare(b.textContent)).forEach(li => ol.appendChild(li))
//          this.parentNode.parentNode.remove()
//       }


//       function articleFactory() {
//          article = createDomElement('article')
//          h1 = createDomElement('h1', title.value, null, article)
//          p1 = createDomElement('p', 'Category:', null, article)
//          createDomElement('strong', category.value, null, p1)
//          p2 = createDomElement('p', 'Creator:', null, article)
//          createDomElement('strong', author.value, null, p2)
//          p3 = createDomElement('p', content.value, null, article)
//          div = createDomElement('div', null, ['buttons'], article)
//          btn1 = createDomElement('button', 'Delete', ['btn delete'], div, null, btnDelete)
//          btn2 = createDomElement('button', 'Archive', ['btn archive'], div, null, btnArchive)

//          return article
//       }

//  })
//       function createDomElement(elementType, text, addClass, appendTo, attributes = [{}], eventFunc) {
//          let element = ''
//          if (elementType) element = document.createElement(elementType)
//          if (text) element.textContent = text
//          if (addClass) element.className = addClass
//          if (appendTo) appendTo.appendChild(element)
//          if (eventFunc) element.onclick = eventFunc

//          return element
//       }
// }


