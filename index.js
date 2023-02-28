/*let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)*/

function newImage(imageName, imgSrc, PosLeft, PosBottom) {
    imageName = document.createElement('img')
    imageName.src = imgSrc
    imageName.style.position = 'fixed'
    imageName.style.left = PosLeft
    imageName.style.bottom = PosBottom
    document.body.append(imageName)
}

newImage('greenCharacter', 'assets/green-character.gif', '100px', '100px')
newImage('pineTree', 'assets/pine-tree.png', '450px', '200px')
newImage('tree', 'assets/tree.png', '200px', '300px')
newImage('pillar', 'assets/pillar.png', '350px', '100px')
newImage('crate', 'assets/crate.png', '150px', '200px')
newImage('well', 'assets/well.png', '500px', '425px')

/*let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.style.position = 'fixed'
sword.style.left = '500px'
sword.style.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})*/

function newItem(itemName, itemSrc, PosLeft, PosBottom){
    itemName = document.createElement('img')
    itemName.src = itemSrc
    itemName.style.position = 'fixed'
    itemName.style.left = PosLeft
    itemName.style.bottom = PosBottom
    document.body.append(itemName)

    itemName.addEventListener('dblclick', function(){
        itemName.remove()
    })
}

newItem('sword', 'assets/sword.png', '500px', '405px')
newItem('shield', 'assets/sheild.png', '165px', '185px')
newItem('staff', 'assets/staff.png', '600px', '100px')

