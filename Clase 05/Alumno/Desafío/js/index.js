var examResults = [7, 5, 6, 4, 3, 2, 8]

function promedio() {
    var total = 0
    for (var i = 0; i < examResults.length; i++) {
        number = examResults[i]
        total = total + number
    }

    var result = total / examResults.length

    return result
}

var prom = promedio(examResults)
console.log(prom)