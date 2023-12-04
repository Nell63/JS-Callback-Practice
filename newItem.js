function newItem(url, left, bottom) {
    let item = newImage(url, left, bottom)
    item.addEventListener('click', function () {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url
        inventory.append(inventoryItem)
    })
    return item
}

