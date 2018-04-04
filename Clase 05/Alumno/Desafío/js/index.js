function Movie (title, year, director, actors) {
  var id = Math.random()
  var createdAt = new Date()
  var updatedAt = null

  this.setTitle = function (newTitle) {
    title = newTitle
    updatedAt = new date()
  }

  this.setYear = function (newYear) {
    year = newYear
    updatedAt = new date()
  }

  this.setDirector = function (newDirector) {
    director = newDirector
    updatedAt = new date()
  }

  this.setActor = function (actor) {
    actors.push(actor)
    updatedAt = new Date()
  }
  this.getTitle = function () {
    return title
  }
  this.getYear = function () {
    return year
  }
  this.getDirector = function () {
    return director
  }
  this.getActors = function () {
    return actors
  }
  this.getUpdatedAt = function () {
    return updatedAt
  }
  this.showInfo = function () {
    console.log(
      'Titúlo: ' +
        title +
        ', Año: ' +
        year +
        ', Director: ' +
        director +
        ', Actores: ' +
        actors.join(' / ') +
        ', Fecha de creación: ' +
        createdAt +
        ', Fecha de modificación: ' +
        updatedAt
    )
  }
}

var birdman = new Movie('Birdman', '2015', 'Alejandro Gonzalez Iñarritu', [
  'Michael Keaton'
])

birdman.showInfo()

birdman.setActor('Edward Norton')

birdman.setActor('Emma Stone')

var newActor = prompt('Ingrese otro actor')

birdman.setActor(newActor)

birdman.showInfo()
