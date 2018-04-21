$(document).ready(function () {
  var url = 'https://swapi.co/api/planets/'

  AjaxCall.getData(url, showPlanetsNames)
})

function showPlanetsNames (error, data) {
  if (!error) {
    var planets = data.results
    for (var i = 0; i < planets.length; i++) {
      planet = planets[i]
      console.log(planets.name)
    }
    if (data.next) {
      $('#showMore').one('click', function () {
        AjaxCall.getData(data.next, showPlanetsNames)
      })
    } else {
      $('#showMore').attr('disabled', true)
    }
  }
}
