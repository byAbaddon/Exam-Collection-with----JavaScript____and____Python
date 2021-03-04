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
         attributes.forEach((el) => element.attr(el.k, el.v)) //[{}]

         if (event) {
            element.on(event.name, event.func) //{} 
         }
      }

      return element
   }

   let $sectionProducts = $('#products ul')
   let $myProductList = $('#myProducts ul')
   let sum = 0

   let $addBtn = $('#add-new button').on('click', function (e) {
      e.preventDefault();
      let $name = $('#add-new input:eq(0)').val()
      let $quantity = $('#add-new input:eq(1)').val()
      let $price = $('#add-new input:eq(2)').val()
      $price = Number($price).toFixed(2)

      if ($name !== '' && $quantity !== '' && $price !== '') {
         let li = createDomElement('li')
         let span = createDomElement('span', $name)
         let strong = createDomElement('strong', `Available: ${$quantity}`)
         let div = createDomElement('div')
         let strongDivChild = createDomElement('strong', $price)
         let button = createDomElement('button', 'Add to Client\'s List', undefined, undefined, {
            name: 'click',
            func: btnAddToClient
         })

         li.append(span)
         li.append(strong)

         div.append(strongDivChild)
         div.append(button)

         li.append(div)


         $sectionProducts.append(li)
      }
   })

   const btnFilter = $('#products button').on('click', function (e) {
      $(this).parent().prev().children().each(function (li) {
         let liText = $(this).children('span').text().toUpperCase().trim()
         let filter = $('#filter').val().toUpperCase().trim()
         if (filter === '') {
            $(this).show()
         } else if (liText === filter) {
            $(this).show()
         } else {
            $(this).hide()
         }
      })
   })

   function btnAddToClient(e) {
      let productName = $(this).parent().prev().prev().text()
      let availableProductCount = Number($(this).parent().prev().text().split(': ')[1])
      let productPrice = Number($(this).prev().text()).toFixed(2)

      $(this).parent().prev().text(`Available: ${--availableProductCount}`)

      // addTotalPrice
      sum += +productPrice
      $('#add-new').next().text(`Total Price: ${sum.toFixed(2)}`)

      //addToMyProduct
      let li = createDomElement('li', productName)
      let strong = createDomElement('strong', productPrice)
      li.append(strong)
      $myProductList.append(li)

      if (availableProductCount === 0) {
         $(this).parent().parent().remove()
      }
   }

   let buyBtn = $('#myProducts button').on('click', function () {
      $(this).prev().children().remove()
      $('#add-new').next().text('Total Price: 0.00')
   })

}