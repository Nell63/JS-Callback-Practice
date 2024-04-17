function newImage(url){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image
}




function move(image) {
    image.style.position = 'fixed'
    function moveToCoordinates(left, bottom){
        image.style.left = left + 'px'
        image.style.bottom = bottom + 'px'
    }
    return {
        to: moveToCoordinates
    }
}



move(newImage('assets/green-character.gif')).to(100, 250)
move(newImage('assets/tree.png')).to(275, 450)
move(newImage('assets/pillar.png')).to(350, 300)
move(newImage('assets/pine-tree.png')).to(425, 200)
move(newImage('assets/crate.png')).to(150, 600)
move(newImage('assets/well.png')).to(200, 575)


function newItem(url, left, bottom) {
    let item = newImage(url, left, bottom)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}


move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(550, 650)


function tile(url, left, bottom, width, height) {
    for(let h = 0; h < height; h++) {
        for(let w = 0; w < width; w++) {
            newImage(url, left + w * 100, bottom + h * 100)
        }
    }
}


let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon


tile('assets/sky.png', 0, horizon, Math.ceil(window.innerWidth / 100), heightOfSky / 100)
tile('assets/grass.png', 0, 0, Math.ceil(window.innerWidth / 100), heightOfGrass / 100)

