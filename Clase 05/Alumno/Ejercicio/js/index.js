// # Hacer un objeto que represente un usuario

var student = {
  firstName: 'Matías Daniel',
  lastName: 'Trunzo',
  age: '28',
  address: 'Martin Fierro 1234'
}

function Student (firstName, lastName, age) {
  this.showFullName = function () {
    return firstName + ' ' + lastName
  }

  var id = Math.random()
  this.getId = function () {
    return id
  }

  this.isLegalAge = function () {
    if (age >= 18) {
      return true
    } else {
      return false
    }
  }
}

var newStudent = new Student(student.firstName, student.lastName, student.age)

console.log(
  newStudent.showFullName(),
  newStudent.getId(),
  newStudent.isLegalAge()
)
