var operationAsked
var numberAsked
var numberAsked2
var message

operationAsked = prompt('Ingrese la operación a realizar: sum, res, mul o div')

numberAsked = prompt('Ingrese el primer número')

var parsednumberAsked = parseFloat(numberAsked, 10)

if (operationAsked === 'div') {
    do {
        numberAsked2 = prompt('Ingrese un número diferente a 0')
    } while (numberAsked2 === '0');
} else {
    numberAsked2 = prompt('Ingrese el segundo número')
}

var parsednumberAsked2 = parseFloat(numberAsked2, 10)

switch (operationAsked) {
    case 'sum':
        console.log('El resultado de la operación es: ' + (parsednumberAsked + parsednumberAsked2))
        break
    case 'div':
        console.log('El resultado de la operación es: ' + (parsednumberAsked / parsednumberAsked2))
        break
    case 'mul':
        console.log('El resultado de la operación es: ' + (parsednumberAsked * parsednumberAsked2))
        break
    case 'res':
        console.log('El resultado de la operación es: ' + (parsednumberAsked - parsednumberAsked2))
        break
    default:
        console.log('La operación no se pudo realizar, vuelva a ingresar una operación válida')
        break
}