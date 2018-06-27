var oldStudent = [{
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
}]

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


function createStudentNode(newStudent) {
    newStudents = document.createElement('li')
    newStudents.className = 'list-group-item'
    newStudents.id = newStudents.getId()
    newStudents.innerHTML = '<h1>' + firstName + '</h1>'
    console.log(newStudents)
}

var studentNode = createStudentNode(newStudent)