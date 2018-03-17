var firstName = document.getElementById('firstName')

firstName.onblur = function (event) {
  var firstNameNode = event.target

  var value = firstNameNode.value

  if (value) {
    firstNameNode.classList.remove('is-invalid')
    firstNameNode.classList.add('is-valid')
  } else {
    firstNameNode.classList.remove('is-valid')
    firstNameNode.classList.add('is-invalid')
  }
}

var dni = document.getElementById('dni')

dni.onblur = function (event) {
  var dniNode = event.target

  var value = dniNode.value

  if (value && typeof value === 'string') {
    dniNode.classList.remove('is-invalid')
    dniNode.classList.add('is-valid')
  } else {
    dniNode.classList.remove('is-valid')
    dniNode.classList.add('is-invalid')
  }
}
