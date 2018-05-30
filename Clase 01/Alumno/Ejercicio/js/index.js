// Saludar con nombre

var name

name = prompt('Escribi tu nombre para saludarte')

console.log('Hola ' + name)


// Pedir numero y sumar

var number = 5
var numberAsked

numberAsked = prompt('Escribi un numero para sumar')

var parsedNumber1 = parseFloat(numberAsked, 10)

console.log(number + parsedNumber1)

// Pedir numero y restar

var number = 5
var numberAsked

numberAsked = prompt('Escribi un numero para restar')

var parsedNumber1 = parseFloat(numberAsked, 10)

console.log(number - parsedNumber1)

// Pedir dos numeros

var numberAsked
var numberAsked2

numberAsked = prompt('Escribi un numero para sumar')
numberAsked2 = prompt('Escribi otro numero')

var parsedNumber1 = parseFloat(numberAsked, 10)
var parsedNumber2 = parseFloat(numberAsked2, 10)


console.log(parsedNumber1 + parsedNumber2)