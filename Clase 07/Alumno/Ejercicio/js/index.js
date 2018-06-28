var studentsList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS', 'MARIA', 'FEDERICO', 'ANTONIO', 'LORNA', 'JULIAN', 'DIEGO', 'DANIELA', 'JUAN', 'MATEO', 'BARBARA', 'AGUSTIN', 'MARIO', 'MARIEL', 'ANA', 'FLORENCIA']

function saveLocalList(key, list) {
    if (typeof key === 'string' && Array.isArray(list)) {
        var stringList = JSON.stringify(list)
        localStorage.setItem(key, stringList)
    }
}

saveLocalList('studentsList', studentsList)