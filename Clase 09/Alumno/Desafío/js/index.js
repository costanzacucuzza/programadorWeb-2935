var inputEmailNode = document.getElementById('email')

inputEmailNode.onblur = validateEmail

function validateEmail(event) {
    var node = event.target
    var addedEmail = node.value
    var validate1 = addedEmail.indexOf('@')
    var validate2 = addedEmail.indexOf('.')


    if (addedEmail.length > 0 && validate1 !== -1 && validate2 !== -1) {
        node.classList.remove('is-invalid')
        node.classList.add('is-valid')
    } else {
        node.classList.remove('is-valid')
        node.classList.add('is-invalid')
    }
}