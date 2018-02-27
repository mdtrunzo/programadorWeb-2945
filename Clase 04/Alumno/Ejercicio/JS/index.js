//1

var examResults = [7, 5, 6, 4, 3, 2, 8]

var examResultsSum = 0

function promedio() {

    for (var i = 0; i < examResults.length; i++) {
        examResultsSum = examResultsSum + examResults[i]
    }

    console.log(examResultsSum / examResults.length)

}
promedio()

//2

function alumnosPromedio() {
    var student = {
        firstName: 'Laura',
        lastName: 'Lopez',
        dni: 45678987,
        address: {
            street: 'Cucha cucha',
            number: 1234
        },
        examResults: [7, 5, 6, 4, 3, 2, 8]

    }
    console.log(student.firstName, student.lastName, student.dni, student.address.street, student.address.number, "Promedio:", examResultsSum / examResults.length)
}

alumnosPromedio()


// 3

function estudiantes(students){
var students = [
  {
    firstName: 'Laura',
    lastName: 'Lopez',
    dni: 45678987,
    address:{
      street: 'Cucha cucha',
      number: 1234
    },
    examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
  },
  {
    firstName: 'Cooper',
    lastName: 'Marshall',
    dni: 45678989,
    address:{
      street: 'La Pampa',
      number: 6754
    },
    examResults: [ 3, 4, 5, 6, 7, 3, 4, 5 ]
  },
  {
    firstName: 'Ines',
    lastName: 'Sotomayor',
    dni: 45678956,
    address:{
      street: 'La vía',
      number: 3737
    },
    examResults: [ 3, 8, 7, 5, 6, 4, 5, 4, 3 ]
  },
  {
    firstName: 'Matias',
    lastName: 'Trunzo',
    dni: 45678943,
    address:{
      street: 'Zapiola',
      number: 1819
    },
    examResults: [ 4, 3, 4, 5, 5, 3 ]
  },
  {
    firstName: 'Pablo',
    lastName: 'Callegari',
    dni: 45678963,
    address:{
      street: 'Juan b. Justo',
      number: 7654
    },
    examResults: [ 1, 2, 1, 3, 2, 4, 2, 4, 5 ]
  },
  {
    firstName: 'Daniela',
    lastName: 'Picciotto',
    dni: 45678983,
    examResults: [ 10, 8, 9, 7, 8, 7, 10 ]
  }
    
]

for (var i = 0; i < students.length; i++){
    console.log(students)
}

    }
var pedirAlumno = prompt("Ingrese un alumno")

estudiantes(pedirAlumno)


































