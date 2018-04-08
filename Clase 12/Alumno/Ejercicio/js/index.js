var player = true

$('.square').click(function () {
  if (player) {
    $(this).addClass('circle')
  } else {
    $(this).addClass('cross')
  }
  player = !player
})
