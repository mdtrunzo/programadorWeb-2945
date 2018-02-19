var dayOfTheWeek = prompt("Ingresá el día de la semana")

switch (dayOfTheWeek) {
    case "Lunes":
    case "Martes":
    case "Miércoles":
    case "Miercoles":
    case "Jueves":
    case "Viernes":
        console.log("Es un día hábil")
        break
    case "Sábado":
    case "Sabado":
    case "Domingo":
        console.log("Es fin de semana")
        break
    default:
        console.log("El día ingresado no es válido")
        break
}
