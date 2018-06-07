var daysOfTheWeek = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Sabado',
    'Domingo',
    'Pato'
]

var day

for (var i = 0; i < daysOfTheWeek.length; i++) {
    day = daysOfTheWeek[i]

    switch (day) {
        case 'Lunes':
        case 'Martes':
        case 'Miércoles':
        case 'Miercoles':
        case 'Jueves':
        case 'Viernes':
            console.log(day + 'es un día habil')
            break
        case 'Sábado':
        case 'Sabado':
        case 'Domingo':
        case 'domingo':
            console.log(day + 'es un día de fin de semana')
            break
        default:
            console.log(day + 'no es un día válido')
            break
    }
}