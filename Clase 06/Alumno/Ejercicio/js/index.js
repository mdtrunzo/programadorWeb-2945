// #  Crear una función que cambie a mayúsculas

var firstName = 'matias'

function studentNameToUpperCase (studentName) {
  if (typeof firstName === 'string') {
    var firstNameUpperCase = firstName.toUpperCase()
    console.log(firstNameUpperCase)
  }
}

// # Crear una función que busque un alumno en un array de alumnos

var studentsList = [
  'CARLOS',
  'GERONIMO',
  'NICOLAS',
  'LUCAS',
  'MARIA',
  'FEDERICO',
  'ANTONIO',
  'LORNA',
  'JULIAN',
  'DIEGO',
  'DANIELA',
  'JUAN',
  'MATEO',
  'BARBARA',
  'AGUSTIN',
  'MARIO',
  'MARIEL',
  'ANA',
  'FLORENCIA'
]
function searchStudentByName (studentName) {
  var studentUpperCase = studentNameToUpperCase(studentName)
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.indexOf(studentUpperCase) !== -1) {
      index = i
    }
  }
  return index
}

// # Crear una función que permita agregar un alumno a un array
var studentName

function addStudent () {
  do {
    studentName = prompt('Ingrese un nombre')
  } while (!studentName)

  var studentUpperCase = studentNameToUpperCase(studentName)

  studentsList.push(studentName)
  console.log(studentsList)
}
addStudent()

// # Crear una función que permita eliminar un nombre de un array de alumnos

function deleteStudent (studentName) {
  var index = searchStudentByName(studentName)
  if (index !== -1) {
    studentsList.splice(index, 1)
  }
}

console.log(studentsList)
