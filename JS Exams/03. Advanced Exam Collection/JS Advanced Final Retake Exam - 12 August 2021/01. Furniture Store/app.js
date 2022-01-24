window.addEventListener('load', solve);

function solve() {  //Fucking Judge
    const html = {
        form: () => document.querySelector('form'),
        textarea: () => document.getElementById('description'),
        tbody: () => document.getElementById('furniture-list'),
        btnAdd: () => document.getElementById('add'),
        btnMoreInfo: () => document.querySelector('.moreBtn'),
        btnBuy: () => document.querySelector('.buyBtn'),
        trHide: () => document.querySelector('.hide'),
    }
    html.textarea().setAttribute("type", "button")
    html.textarea().setAttribute("name", "description")

    html.btnAdd().addEventListener('click', function (e) {       
        let form = new FormData(html.form())
        const model = form.get('model')
        const year = Number(form.get('year'))
        const description = form.get('description')
        const price = Number(form.get('price'))
        
        if (!(model && year > 0 && description && price > 0)) return

        html.form().reset()

        let add = `<td class"info">${model}</td><td>${Number(price).toFixed(2)}</td><td><button class="moreBtn">More Info</button><button class="buyBtn">Buy it</button></td>`
        let hide = `</tr><tr class="hide"><td>Year: ${year}</td><td colspan="3">Description: ${description}</td></tr>`

        html.tbody().innerHTML = add + hide
        html.btnMoreInfo().addEventListener('click', moreInfo)
        html.btnBuy().addEventListener('click', buy)


        function moreInfo(e) {       
            if (html.btnMoreInfo().textContent == 'More Info') {
                html.btnMoreInfo().textContent = "Less Info";
                html.trHide().style.display = "none"
                html.trHide().style.display = "contents";
            } else {
                html.btnMoreInfo().textContent = "More Info";
                html.trHide().style.display = "none"
            }
        }

        function buy(e) {
            let total = document.querySelector('.total-price').textContent || 0
            let totalPrice = (Number(price) + Number(total)).toFixed(2)
            document.querySelector('.total-price').textContent = totalPrice
            html.tbody().innerHTML = ''
        }

    })

}


//---------------------------------------- Use this mess code for 100 pts

// function solve() {  
//     let html = {
//       fields: document.querySelectorAll("form > input"),
//       btnAdd: document.querySelector("form > button"),
//       tableBody: document.querySelector("#furniture-list"),
//       totalPrice: document.querySelector(".total-price"),
//       descrContent: document.querySelector("#description"),
//     };
  
//     html.btnAdd.addEventListener("click", add);
  
//     function add(e) {
//       e.preventDefault();
  
//       let [model, year, price] = Array.from(html.fields).map((x) => x.value);
//       let desc = html.descrContent.value;
//       if (!model || !year || !desc || !price || Number(price) < 0 || Number(year) < 0) {
//         return;
//       } else {
//         //create tr
//         let row = makeTag('tr', {});
//         row.classList.add("info");
//         //create cells
//         let tdName = makeTag('td', {}, model);
//         let tdPrice = makeTag('td', {}, (Number(price)).toFixed(2));
//         let tdActions = makeTag('td', {});
//         let moreBtn = makeTag('button', {}, 'More Info');
//         let buyBtn = makeTag('button', {}, 'Buy it');
//         moreBtn.classList.add("moreBtn");
//         buyBtn.classList.add("buyBtn");
//         tdActions.appendChild(moreBtn);
//         tdActions.appendChild(buyBtn);
//         let hideContent = makeTag('tr', {});
//         hideContent.classList.add("hide");
//         //hideContent.style.display = 'contents';
//         let tdYear = makeTag('td', {}, `Year: ${year}`);
//         let tdDesc = makeTag('td', {}, `Description: ${desc}`);
//         tdDesc.setAttribute('colspan', 3);
//         hideContent.appendChild(tdYear);
//         hideContent.appendChild(tdDesc);
//         row.appendChild(tdName);
//         row.appendChild(tdPrice);
//         row.appendChild(tdActions);
//         html.tableBody.appendChild(row);
//         html.tableBody.appendChild(hideContent);
//         //clear all input fields
//         Array.from(html.fields).forEach((x) => (x.value = ""));
//         html.descrContent.value = "";
//         moreBtn.addEventListener("click", (e) => {
//           e.preventDefault();
//           if (moreBtn.textContent == "More Info") {
//             moreBtn.textContent = "Less Info";
//             hideContent.style.display = "contents";
//           } else {
//             moreBtn.textContent = "More Info";
//             hideContent.style.display = "none";
//           }
//         });
//         buyBtn.addEventListener("click", (e) => {
//           e.preventDefault();
//           let tr = e.currentTarget.parentElement.parentElement;
//           let hiddenRow = tr.nextSibling;
//           let price = Number(tr.children[1].textContent);
//           html.totalPrice.textContent = (
//             Number(html.totalPrice.textContent) + price
//           ).toFixed(2);
//           hiddenRow.remove();
//           tr.remove();
//         });
//       }
//     }
//     function makeTag(tag, props, textContent) {
//       let element = document.createElement(tag);
//       for (const prop in props) {
//         element[prop] = props[prop];
//       }
//       if (textContent) {
//         element.textContent = textContent;
//       }
//       return element;
//     }
 
//   }


