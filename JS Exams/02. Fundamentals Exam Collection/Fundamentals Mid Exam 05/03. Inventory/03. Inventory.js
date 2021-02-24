function inventory(arr) {
    arr.pop()
    let collection = arr[0].split(', ')
    arr.shift()

    while (arr.length > 0) {
        const [command, item] = arr.shift().split(' - ')

        if (command == 'Collect' && !collection.includes(item))
            collection.push(item)

        if (command == 'Drop' && collection.includes(item))
            collection = collection.filter(el => el != item)

        if (command == 'Combine Items') {
            let [oldItem, newItem] = item.split(':')
            if (collection.includes(oldItem)) {
                let index = collection.indexOf(oldItem)
                collection.splice(index + 1, 0, newItem)
            }
        }

        if (command == 'Renew') {
            if (collection.includes(item)) {
                index = collection.indexOf(item)
                element = collection.splice(index, 1)
                collection.push(element)
            }
        }
    }

    return collection.join(', ')
}

//console.log(inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!']))
// console.log(inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!']))