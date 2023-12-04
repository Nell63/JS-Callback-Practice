





function move(image , left, bottom){
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    
}

newInventory()
newImage('assets/tree.png', 275,450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450,350)
newImage('assets/crate.png', 150, 600)
newImage('assets/well.png', 200,575)


newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 165, 355)
newItem('assets/staff.png', 600, 250)





const character = newImage('assets/green-character/static.gif').style.zIndex = 1
move(character).to(0,0)



function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)
let direction = null;
let left = 100;
let y = 250;

setInterval(function(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    element.style.left = x - 'px'
    element.style.bottom = y + 'px'
}, 1)


setInterval(moveCharacter, 1)    


document.addEventListener('keydown', function(e){
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})


document.addEventListener('keyup', function(e){
    direction = null
})

move(newImage('assets/tree.png')).withArrowKeys(200, 450)





