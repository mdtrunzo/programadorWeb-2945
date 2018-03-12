var movies = [
  {
    movieName: 'El lobo de Wall Street',
    movieDirector: 'Martin Scorsece',
    year: '2013',
    actors: {
      actorOne: 'Leonardo Di Caprio',
      actorTwo: 'Margot Robbie'
    }
  },
  {
    movieName: 'Birdman',
    movieDirector: 'Alejandro Gonzalez Iñarritu',
    year: '2014',
    actors: {
      actorOne: 'Michael Keaton',
      actorTwo: 'Edward Norton'
    }
  },
  {
    movieName: 'La forma del agua',
    movieDirector: 'Guillermo del Toro',
    year: '2017',
    actors: {
      actorOne: 'Sally Hawkins',
      actorTwo: 'Michael Shannon'
    }
  },
  {
    movieName: 'La La Land',
    movieDirector: 'Damien Chazelle',
    year: '2016',
    actors: {
      actorOne: 'Ryan Gosling',
      actorTwo: 'Emma Stone'
    }
  },
  {
    movieName: 'Spotlight',
    movieDirector: 'Tom McCarthy',
    year: '2015',
    actors: {
      actorOne: 'Mark Ruffalo',
      actorTwo: 'Michael Keaton'
    }
  }
]

function movieConstructor (movieName, movieDirector, year, actors, id) {
  var id = Math.random()

  this.showFullCast = function () {
    console.log(actorOne + ' ' + actorTwo)
  }
  this.getId = function () {
    return id
  }
}

for (var i = 0; i < movies.length; i++) {
  var movie = movies[i]
  var objMovies = new movieConstructor(
    movies.movieName,
    movies.movieDirector,
    movies.year,
    movies.actors
  )
  objMovies.showFullCast()
  console.log(objMovies)
}

movieConstructor(movieName, movieDirector, year, actors, id)
