var gender = prompt('Ingrese su género', 'male, female o other')
var message

if (gender === 'male') {
    message = 'Sr.'
} else {
    if (gender === 'female') {
        message = 'Sra.'
    } else {
        if (gender === 'other') {
            message = 'Srx.'
        }
    }
}

var age = prompt('Ingrese su edad')
var message2
if (age >= '18') {
    message2 = message + ' usted es mayor de edad puede ingresar'
} else {
    message2 = message + ' usted es menor de edad no puede ingresar'
}

console.log(message2)