window.addEventListener('load', solve);

function solve() {

    const html = {
        form: () => document.querySelector('form'),
        btnAdd: () => document.querySelector('form > button'),
        pLikes: () => document.querySelector('.likes > p'),
        divCont: () => document.querySelector('.all-hits-container'),
        divSaveCont: () => document.querySelector('.saved-container'),
    }

    html.btnAdd().addEventListener('click', function (e) {
        e.preventDefault()
        const [genre, name, author, date] = Array.from(html.form().querySelectorAll('input')).map((x) => x.value)
        if (!(genre && name && author && date)) return
        html.form().reset()
        html.divCont().innerHTML +=
            `<div class="hits-info"><img src="./static/img/img.png"><h2>Genre: ${genre}</h2><h2>Name: ${name}</h2><h2>Author: ${author}</h2><h3>Date: ${date}</h3><button class="save-btn">Save song</button><button class="like-btn">Like song</button><button class="delete-btn">Delete</button>
            `
        Array.from(document.querySelectorAll('.hits-info button')).forEach(el => {
            el.addEventListener('click', function () {
                const btnType = this.textContent
                if (btnType == 'Like song') {
                    let likeCounter = html.pLikes().textContent.split(' ')[2]
                    html.pLikes().textContent = `Total Likes: ${++likeCounter}`
                    this.setAttribute('disabled', true)
                }

                if (btnType == 'Save song') {
                    let copyDivHitsInfo = this.parentNode.cloneNode(true)
                    copyDivHitsInfo.querySelector('.delete-btn').addEventListener('click', deleteRecord)
                    html.divSaveCont().appendChild(copyDivHitsInfo)
                    this.parentElement.remove()
                    html.divSaveCont().querySelector('.like-btn').remove()
                    html.divSaveCont().querySelector('.save-btn').remove()        
                }

                if (btnType == 'Delete') {
                    this.parentNode.remove()             
                }
                
                function deleteRecord() {
                    this.parentNode.remove()
                }
            })
            
        })
          
    }) 
}

