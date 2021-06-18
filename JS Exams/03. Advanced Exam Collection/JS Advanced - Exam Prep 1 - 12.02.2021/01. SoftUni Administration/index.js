function solve() {
    let allFields = document.querySelector('form').children

    const html = {
        name: allFields[0].children[1],
        date: allFields[1].children[1],
        module: allFields[2].children[1],
        addBtn: allFields[3].children[0],
        moduleField: document.querySelector('.modules'),
    }
    
    function dataFixer() {
        let val = document.querySelector('form').children[1].children[1].value
        const [d, _, t] = val.replace(/-/g, '/').replace('T', ' - ').split(' ')
        const result = d + ' - ' + t
        return result
    }
     //2020-09-28T18:00  to 2020/09/17 - 18:00
     
    function factoryLections(addAll) {
        if (addAll) {
            let htmlDiv = document.createElement('div')
            htmlDiv.className = 'module'
            htmlDiv.innerHTML = `<h3>${(html.module.value).toUpperCase() + '-MODULE'}</h3>
                                 <ul>
                                 <li class='flex'>
                                     <h4>${html.name.value} - ${dataFixer()}</h4>
                                     <button class='red'>Del</button>
                                 </li>
                                 </ul>`
            return htmlDiv

        } else {
            let li = document.createElement('li')
            li.className = 'flex'
            li.innerHTML = `<h4>${html.name.value} - ${dataFixer()}</h4>
                             <button class='red'>Del</button>`
            return li
        }
    }

    
    html.addBtn.addEventListener('click', function (e) {
        e.preventDefault()

        if (html.name.value && html.date.value && html.module.value != 'Select module') {

            const sameModule = Array.from(html.moduleField.children)
                .find(x => x.children[0].textContent == html.module.value.toUpperCase() + '-MODULE')

            if (!sameModule) {
                html.moduleField.appendChild(factoryLections(true))
            } else {
                sameModule.appendChild(factoryLections(false))

                // sort all li in current module
                Array.from(sameModule.querySelectorAll('li'))
                    .sort((a, d) => a.children[0].textContent.slice(-20, -8).localeCompare(d.children[0].textContent.slice(-20, -8)))
                    .forEach(el => sameModule.querySelector('ul').appendChild(el))

            }
        }

        //clear all field
        // html.name.value = html.date.value = html.module.value = ''    

    })


    //click deleteBtn
    document.querySelector('section').addEventListener('click', function (e) {
      
    //remove parent if children = 0
        if (e.target.tagName == 'BUTTON') {
            const moduleSection = e.target.parentNode.parentNode.parentNode
            e.target.parentNode.remove()

            if (moduleSection.children[1].childElementCount == 0) {
                moduleSection.outerHTML = '' 
            }
        }
    })

}


