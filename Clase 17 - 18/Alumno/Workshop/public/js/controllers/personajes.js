var personajesController = function () {
  $(document).ready(function () {
    var url = 'https://swapi.co/api/people'
    AjaxCall.getData(url, showCaracterInfo)
  })

  function showCaracterInfo (error, data) {
    var tableBody = $('#tableBody')
    if (!error) {
      var caracters = data.results
      for (var i = 0; i < caracters.length; i++) {
        var caracter = caracters[i]
        var caracterTable = CreateCaracterTable(caracter, i)
        tableBody.append(caracterTable)
      }
      if (data.next) {
        $('#showMore').one('click', function () {
          AjaxCall.getData(data.next, showCaracterInfo)
        })
      } else {
        $('#showMore').attr('disabled', true)
      }
    }
  }
}

function CreateCaracterTable (caracter, index) {
  var gender = translateGender(caracter.gender)
  var eyeColor = translateEyeColor(caracter.eye_color)

  return (
    '<tr><th scope="row">' +
    (index + 1) +
    '</th><td>' +
    caracter.name +
    '</td><td>' +
    gender +
    '</td><td>' +
    caracter.height +
    ' cm</td><td>' +
    caracter.mass +
    ' kg</td><td>' +
    eyeColor +
    '</td><td><button type="button" class="btn btn-success" id="buttonGuardar">' +
    'guardar' +
    '</button></td></tr>'
  )
}

function translateGender (gender) {
  switch (gender) {
    case 'male':
      return 'Hombre'
    case 'female':
      return 'Mujer'
    case 'n/a':
      return 'indefinido'
    case 'hermaphrodite':
      return 'hermafrodita'
    case 'none':
      return 'no tiene'
    default:
      return gender
  }
}

function translateEyeColor (eyeColor) {
  switch (eyeColor) {
    case 'blue':
      return 'Azul'
    case 'yellow':
      return 'Amarillo'
    case 'red':
      return 'Rojo'
    case 'brown':
      return 'Marrón'
    case 'blue-gray':
      return 'gris azulado'
    case 'black':
      return 'negro'
    case 'orange':
      return 'naranja'
    case 'hazel':
      return 'avellana'
    case 'unknown':
      return 'desconocido'
    case 'green,yellow':
      return 'verde,amarillo'
    case 'white':
      return 'blanco'
    case 'dark':
      return 'oscuro'
    default:
      return eyeColor
  }
}
