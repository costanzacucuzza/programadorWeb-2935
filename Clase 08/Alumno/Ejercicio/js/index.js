var texts = ['Ed', 'Edd', 'Eddy']

var mainList = document.getElementById('main-list')

var listItemNode

for (i = 0; i < texts.length; i++) {
    listItemNode = document.createElement('li')
    listItemNode.className = 'list-group-item'
    listItemNode.innerHTML = texts[i]
    mainList.appendChild(listItemNode)
}