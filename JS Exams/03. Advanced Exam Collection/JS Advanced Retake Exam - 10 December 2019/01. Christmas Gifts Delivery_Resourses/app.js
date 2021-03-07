function solution() {
    const $field = $('input')
    const $btnAddGift = $('button')
    const $listOfGifts = $('.container section:eq(1) ul')
    const $sendGifts = $('.container section:eq(2) ul')
    const $discardGifts = $('.container section:eq(3) ul')

    $btnAddGift.on('click', function () {
        if ($field.val()) {
            $listOfGifts.append(`<li class = 'gift'>${$field.val()}<button id = 'sendButton'>Send</button><button id = 'discardButton'>Discard</button></li>`)
            $listOfGifts.children() //sort list of li
                .detach()
                .sort((a, b) => $(a).text().localeCompare($(b).text()))
                .appendTo($listOfGifts);

            $field.val('') //clear field
        }

        $(' li button').on('click', function () { //moveGift
            if (this.id === 'sendButton') {
                $sendGifts.append($(this).parent())
                $(this).next().remove()
            } else {
                $discardGifts.append($(this).parent())
                $(this).prev().remove()
            }
          
            $(this).remove()
        })
    })
}
