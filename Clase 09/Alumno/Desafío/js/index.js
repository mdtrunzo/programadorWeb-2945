var textInputName = document.getElementById('textInputName')

textInputName.onblur = function (event) {
  var textInputNameNode = event.target

  var value = textInputNameNode.value

  var parentPasswordInputNode = textInputNameNode.parentElement

  var passwordErrorNode = document.getElementById('passwordError')

  if (passwordErrorNode) {
    parentPasswordInputNode.removeChild(passwordErrorNode)
  }

if (value) {
    textInputNameNode.classList.remove('is-invalid')
    textInputNameNode.classList.add('is-valid')
  } else {
    textInputNameNode.classList.remove('is-valid')
    textInputNameNode.classList.add('is-invalid')

    passwordErrorNode = document.createElement('span')

    passwordErrorNode.id = 'passwordError'
    passwordErrorNode.innerHTML = 'El campo no puede estar vacío'

    parentPasswordInputNode.appendChild(passwordErrorNode)
  }
  validateAllFields ()
}


var textInputLastName = document.getElementById('textInputLastName')

textInputLastName.onblur = function (event) {
  var textInputLastNameNode = event.target

  var value = textInputLastNameNode.value

if (value) {
    textInputLastNameNode.classList.remove('is-invalid')
    textInputLastNameNode.classList.add('is-valid')
  } else {
    textInputLastNameNode.classList.remove('is-valid')
    textInputLastNameNode.classList.add('is-invalid')
  }
  validateAllFields ()
}

var textInputMail = document.getElementById('textInputMail')

textInputMail.onblur = function (event) {
  var textInputMailNode = event.target

  var value = textInputMailNode.value


if (value && typeof value === 'string' && value.indexOf('@') !== -1 && value.indexOf('.') !== -1) {
    textInputMailNode.classList.remove('is-invalid')
    textInputMailNode.classList.add('is-valid')
  } else {
    textInputMailNode.classList.remove('is-valid')
    textInputMailNode.classList.add('is-invalid')
  }
  validateAllFields ()
}



var password1 = document.getElementById('password1')

password1.onblur = function (event) {
  var password1Node = event.target

  var value = password1Node.value

if (value && typeof value === 'string' && value.length >= 6) {
    password1Node.classList.remove('is-invalid')
    password1Node.classList.add('is-valid')
  } else {
    password1Node.classList.remove('is-valid')
    password1Node.classList.add('is-invalid')
  }
  validateAllFields ()
}

var password2 = document.getElementById('password2')

password2.onblur = function (event) {
  var password2Node = event.target

  var value = password2Node.value

if (value && typeof value === 'string' && value.length >= 6) {
    password2Node.classList.remove('is-invalid')
    password2Node.classList.add('is-valid')
  } else {
    password2Node.classList.remove('is-valid')
    password2Node.classList.add('is-invalid')
  }
  validateAllFields ()
}

var legalAge = document.getElementById('legalAge')

legalAge.onblur = function (event) {
  var legalAgeNode = event.target

  var value = legalAgeNode.value

if (value && typeof value === "string" && value.length >= 18) {
    legalAgeNode.classList.remove('is-invalid')
    legalAgeNode.classList.add('is-valid')
  } else {
    legalAgeNode.classList.remove('is-valid')
    legalAgeNode.classList.add('is-invalid')
  }
  validateAllFields ()
}



function validateAllFields () {
    var submitButtom = document.getElementById('submitButtom')
  
    var elementsWithIsInvalid = document.getElementsByClassName('is-valid')
  
    if (elementsWithIsInvalid && elementsWithIsInvalid.length === 6) {
      submitButtom.disabled = false
    } else {
      submitButtom.disabled = true
    }
  }