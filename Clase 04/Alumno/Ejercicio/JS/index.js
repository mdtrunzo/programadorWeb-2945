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


//3








