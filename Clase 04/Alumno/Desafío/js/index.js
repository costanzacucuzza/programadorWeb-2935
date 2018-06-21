var students = [{
        firstName: 'Juan',
        lastName: 'Pérez',
        dni: 45678987
    },
    {
        firstName: 'Ana',
        lastName: 'Fernandez',
        dni: 45678989
    },
    {
        firstName: 'Pedro',
        lastName: 'Mármol',
        dni: 45678956
    },
    {
        firstName: 'Pablo',
        lastName: 'Picapiedras',
        dni: 45678983
    }
]


var student
var studentAsked = prompt('Ingrese un nombre')


function searchStudent(studentNameOrLastName, studentsList) {
    var index = -1
    for (var i = 0; i < studentsList.length; i++) {
        student = studentsList[i]
        if (
            student.firstName === studentNameOrLastName ||
            student.lastName === studentNameOrLastName
        ) {
            index = i
            break
        }
    }
    return index
}


var index = searchStudent(studentAsked, students)

if (index !== -1) {
    console.log('Se encontro al alumno en la posicion: ' + index)
    console.log(students[index])
} else {
    console.log('No se pudo encontrar al estudiante')
}