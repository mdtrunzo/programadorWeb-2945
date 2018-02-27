//1

// # Convertir las operaciones de la calculadora en pequeñas funciones

var number1 = 5
var number2 = 4

var parsedNumber = parseInt(number1, 10)
var parsedNumber2 = parseInt(number2, 10)

function sum(parsedNumber, parsedNumber2) {
  var sum = parsedNumber + parsedNumber2
  return sum
}
var result = parsedNumber + parsedNumber2

console.log(result)

//

function resta(parsedNumber, parsedNumber2) {
  var resta = parsedNumber - parsedNumber2
  return resta
}
var result = parsedNumber - parsedNumber2

console.log(result)

//

function mult(parsedNumber, parsedNumber2) {
  var mult = parsedNumber * parsedNumber2
  return mult
}
var result = parsedNumber * parsedNumber2

console.log(result)

//

function div(parsedNumber, parsedNumber2) {
  var div = parsedNumber / parsedNumber2
  return div
}
var result = parsedNumber / parsedNumber2

console.log(result)

//2

// # Crear una función que devuelva la operación pedida en el caso de ser cero
// en la división pedir de nuevo dos números:


var Operation = prompt("Ingrese suma, resta, división o multiplicación")

var number1 = prompt("Elija un número")

var number2 = prompt("Elija otro número")

var parsedNumber = parseInt(number1, 10)

var parsedNumber2 = parseInt(number2, 10)

function askForOperation(Operation) {
  switch (Operation) {
    case "suma":
    case "Suma":
      console.log("La suma es: ", parsedNumber + parsedNumber2)
      break
    case "resta":
    case "Resta":
      console.log("La resta es: ", parsedNumber - parsedNumber2)
      break
    case "División":
    case "división":
    case "Division":
    case "division":
      if (parsedNumber === 0 || parsedNumber2 === 0) {
        var Operation = alert("0 no es un valor válido, ingrese otro número")

        var number1 = prompt("Elija un número")

        var number2 = prompt("Elija otro número")

        console.log("La división es: ", number1 / number2)

      }
      console.log("la división es: ", parsedNumber / parsedNumber2)
      break
    case "Multiplicación":
    case "multiplicación":
    case "Multiplicacion":
    case "multiplicacion":
      console.log("La multiplicación es: ", parsedNumber * parsedNumber2)
      break
    default:
      console.log(Operation + ' es un valor invalido')
      break
  }
}
askForOperation(Operation)



// (Usar las funciones del punto anterior para calcular el 
//resultado según corresponda y mostrar en pantalla el mismo.)


var Operation = prompt("Ingrese suma, resta, división o multiplicación")

var number1 = 5
var number2 = 4

var parsedNumber = parseInt(number1, 10)

var parsedNumber2 = parseInt(number2, 10)


function askForOperation(Operation) {
  switch (Operation) {
    case "suma":
    case "Suma":
      function sum(parsedNumber, parsedNumber2) {
        var sum = parsedNumber + parsedNumber2
        return sum
      }
      var result = parsedNumber + parsedNumber2

      console.log(result)
      break
    case "resta":
    case "Resta":
      function resta(parsedNumber, parsedNumber2) {
        var resta = parsedNumber - parsedNumber2
        return resta
      }
      var result = parsedNumber - parsedNumber2

      console.log(result)
      break
    case "división":
    case "División":
    case "Division":
    case "division":
      function div(parsedNumber, parsedNumber2) {
        var div = parsedNumber / parsedNumber2
        return div
      }
      var result = parsedNumber / parsedNumber2

      console.log(result)
      break
    case "Multiplación":
    case "multiplicación":
    case "Multiplicacion":
    case "multiplicacion":
      function mult(parsedNumber, parsedNumber2) {
        var mult = parsedNumber * parsedNumber2
        return mult
      }
      var result = parsedNumber * parsedNumber2

      console.log(result)
      break
    default:
      console.log(Operation + " Es un valor inválido")
      break
  }
}

askForOperation(Operation)

