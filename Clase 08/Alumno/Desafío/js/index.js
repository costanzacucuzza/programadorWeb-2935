var student = {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
}

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

var newStudent = new Student(
    student.firstName,
    student.lastName,
    student.dni,
    student.email
)

function createStudentNode(newStudent) {
    var nodeLi = document.createElement('li')
    nodeLi.className = 'list-group-item'
    nodeLi.id = newStudent.getId()
    nodeLi.innerHTML =
        '<h1>' + newStudent.getFullName() + '</h1><h3>DNI:' + newStudent.dni + '</h3><p>E-mail:' + newStudent.email + '</p>'
    return nodeLi
}

var studentNode = createStudentNode(newStudent)

console.log(studentNode)