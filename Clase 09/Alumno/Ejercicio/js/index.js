var textInputName = document.getElementById('textInputName')

textInputName.onblur = function (event) {
  var textInputNameNode = event.target

  var value = textInputNameNode.value

  if (value) {
    textInputNameNode.classList.remove('is-invalid')
    textInputNameNode.classList.add('is-valid')
  } else {
    textInputNameNode.classList.remove('is-valid')
    textInputNameNode.classList.add('is-invalid')
  }
  validateAllFields()
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
  validateAllFields()
}

var textInputMail = document.getElementById('textInputMail')

textInputMail.onblur = function (event) {
  var textInputMailNode = event.target

  var value = textInputMailNode.value

  if (
    value &&
    typeof value === 'string' &&
    value.indexOf('@') !== -1 &&
    value.indexOf('.') !== -1
  ) {
    textInputMailNode.classList.remove('is-invalid')
    textInputMailNode.classList.add('is-valid')
  } else {
    textInputMailNode.classList.remove('is-valid')
    textInputMailNode.classList.add('is-invalid')
  }
  validateAllFields()
}

function validateAllFields () {
  var submitButtom = document.getElementById('submitButtom')

  var elementsWithIsInvalid = document.getElementsByClassName('is-invalid')

  if (elementsWithIsInvalid && elementsWithIsInvalid.length === 0) {
    submitButtom.disabled = false
  } else {
    submitButtom.disabled = true
  }
}
