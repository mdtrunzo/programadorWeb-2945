//EJERCICIO !

function dayOfTheWeekMessage(dayOfTheWeek) {

    switch (dayOfTheWeek) {
        case 'Lunes':
        case 'Martes':
        case 'Miércoles':
        case 'Jueves':
        case 'Viernes':
            console.log('El ' + dayOfTheWeek + ' es día de semana')
            break
        case 'Sábado':
        case 'Domingo':
        case 'domingo':
            console.log('El ' + dayOfTheWeek + ' es fin de semana')
            break
        default:
            console.log(dayOfTheWeek + ' es un valor invalido')
            break
    }
}

var day1 = prompt("Ingrese un dia")

dayOfTheWeekMessage(day1)

var day2 = prompt("Ingrese un dia")

dayOfTheWeekMessage(day2)

var day3 = prompt("Ingrese un dia")

dayOfTheWeekMessage(day3)


//EJERCICIO 2


function showFirstNameAndLastName(){
    var firstName = prompt("Ingresa tu nombre")
    var lastName = prompt("Ingresa tu apellido")
    console.log("Hola " + firstName + " " + lastName + "!")
}

showFirstNameAndLastName()

















