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

// Función que elimina el elemento del localStorage si lo encuentra

deleteStudent('geronimo')

function deleteStudent (text) {
  var studentsList = localStorage.getItem('studentsList')

  var parsedList = studentsList ? JSON.parse(studentsList) : []

  var index = searchIndexByText(text, parsedList)

  if (index !== -1) {
    parsedList.splice(index, 1)

    var stringList = JSON.stringify(parsedList)

    localStorage.setItem('studentsList', stringList)
  }
}

// Función que busca por nombre y devuelve la posición del elemento en el array

function searchIndexByText (text, studentsList) {
  var index = -1

  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (
      text &&
      typeof text === 'string' &&
      student.toUpperCase().indexOf(text.toUpperCase()) !== -1
    ) {
      index = i
      break
    }
  }
  return index
}
