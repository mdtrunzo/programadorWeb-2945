$(document).ready(function () {
  var url = 'https://swapi.co/api/planets/'
  AjaxCall.getData(url, showPlanetsName)
})

function showPlanetsName (error, data) {
  if (!error) {
    var planets = data.results
    for (var i = 0; i < planets.length; i++) {
      var planet = planets[i]
      console.log(planet.name)
    }
    if (data.next) {
      $('#botonMostrar').one('click', function () {
        AjaxCall.getData(data.next, showPlanetsName)
      })
    } else {
      $('#botonMostrar').attr('disabled', true)
    }
  } else {
    console.log('Hay un error', error)
  }
}
