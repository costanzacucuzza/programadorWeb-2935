var students = [{
        firstName: 'Juan',
        lastName: 'Pérez',
        dni: 45678987,
        email: 'juan@gmail.com'
    },
    {
        firstName: 'Ana',
        dni: 45678989,
        email: 'ana@gmail.com'
    },
    {
        firstName: 'Pedro',
        lastName: 'Mármol',
        dni: 45678956,
        email: 'pedro@gmail.com'
    }
]

function Student(firstName, lastName, dni, email) {
    var id = dni

    this.firstName = firstName
    this.lastName = lastName
    this.dni = dni
    this.email = email

    this.getId = function() {
        return id
    }

    this.getFullName = function() {
        return (this.firstName || '') + ' ' + (this.lastName || '')
    }
}

var student

var newStudent
var newStudents = []

for (var i = 0; i < students.length; i++) {
    student = students[i]
    newStudent = new Student(
        student.firstName,
        student.lastName,
        student.dni,
        student.email
    )
    newStudents.push(newStudent)
}

console.log(students)
console.log(newStudents)

for (var i = 0; i < newStudents.length; i++) {
    console.log(newStudents[i].getFullName())
}