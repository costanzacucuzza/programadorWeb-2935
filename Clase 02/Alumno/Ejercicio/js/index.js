var result = prompt('Escriba un día de la semana')

switch (result) {
    case 'Lunes':
    case 'lunes':
    case 'Martes':
    case 'martes':
    case 'Miércoles':
    case 'Miercoles':
    case 'miércoles':
    case 'miercoles':
    case 'Jueves':
    case 'jueves':
    case 'Viernes':
    case 'viernes':
        console.log('Escribiste un día habil')
        break
    case 'Sábado':
    case 'sabado':
    case 'sábado':
    case 'Domingo':
    case 'domingo':
        console.log('Escribiste un día de fin de semana')
        break
    default:
        console.log('No es un día válido')
        break
}