var player = true

$('.square').click(function () {
  if (player) {
    $(this).addClass('circle')
  } else {
    $(this).addClass('cross')
  }
  player = !player
})

deleteStudentButton.disabled = false

$('#deleteStudentButton').onclick = function () {
  var circleNode = $('.circle')

  var value = circleNode.value

  circleNode.removeChild()

  circleNode.value = ''
}
