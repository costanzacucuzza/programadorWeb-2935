var elements = ['Marcela', 'Ramiro', 'Costanza', 'Enzo', 'Agustín']

function deleteElement(index, elements) {
    if (Array.isArray(elements) && typeof index === 'number') {
        var elements2 = elements.slice()
        elements2.splice(index, 1)
    } else {
        return elements
    }
    return elements2
}


console.log('Array copia', deleteElement(0, elements))
console.log('Array copia ', elements)