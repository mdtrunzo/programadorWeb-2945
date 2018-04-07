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
  validateAllFields()
}

var dni = document.getElementById('dni')

dni.onblur = function (event) {
  var dniNode = event.target

  var value = dniNode.value

  if (value && typeof value === 'string' && value >= 1) {
    dniNode.classList.remove('is-invalid')
    dniNode.classList.add('is-valid')
  } else {
    dniNode.classList.remove('is-valid')
    dniNode.classList.add('is-invalid')
  }
  validateAllFields()
}

var dni = document.getElementById('deleteDni')

dni.onblur = function (event) {
  var dniNode = event.target

  var value = dniNode.value

  if (value && typeof value === 'string' && value >= 1) {
    dniNode.classList.remove('is-invalid')
    dniNode.classList.add('is-valid')
  } else {
    dniNode.classList.remove('is-valid')
    dniNode.classList.add('is-invalid')
  }
  validateAllFields()
}

function validateAllFields () {
  var submitButtom = document.getElementById('addStudentButton')

  var elementsWithIsInvalid = document.getElementsByClassName('is-valid')

  if (elementsWithIsInvalid && elementsWithIsInvalid.length === 2) {
    submitButtom.disabled = false
  } else {
    submitButtom.disabled = true
  }
}

/*
var students = [
  {
    firstName: 'Matias',
    dni: 34813447
  },
  {
    firstName: 'Javier',
    dni: 12345678
  }
]

var stringList = JSON.stringify(students)

localStorage.setItem('students', stringList)

function showStudents (studentsList) {
  var student
  var rootContainer = document.getElementById('mainList')
  rootContainer.innerHTML = '<ul class="list-group" id="list"></ul>'
  var listContainer = document.getElementById('list')
  for (var i = 0; i < studentsList.length; i++) {
    student = students[i]

    var liStudent = createStudentLi(student.firstName, student.dni)

    listContainer.appendChild(liStudent)
  }
}

function createStudentLi (firstName, dni) {
  var li = document.createElement('li')

  li.className = 'list-group-item '

  li.id = dni

  li.innerHTML = '<h1>' + firstName + '</h1><p>' + dni + '</p>'

  return li
}

showStudents(students)

function searchIndexByText (text, studentsList) {
  var index = -1

  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (
      text &&
      typeof text === 'string' &&
      (student.firstName.toUpperCase().indexOf(text.toUpperCase()) !== -1 ||
        student.lastName.toUpperCase().indexOf(text.toUpperCase()) !== -1)
    ) {
      index = i
      break
    }
  }

  return index
}
*/

function getLocalStorage (text) {
  var getFirstName = document.getElementById('firstName')
  var getDni = document.getElementById('dni')

  if (text && typeof text === 'string') {
    var stringList = JSON.stringify(students)

    localStorage.setItem('students', stringList)
  }
}
