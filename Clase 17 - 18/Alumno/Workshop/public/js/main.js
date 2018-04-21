$(document).ready(function () {
  $('#home').on('click', function () {
    $('#root').fadeOut(500, function () {
      $('#root').load('../partials/home.html', homeController).fadeIn(500)
    })
  })
  $('#contact').on('click', function () {
    $('#root').fadeOut(500, function () {
      $('#root')
        .load('../partials/contacto.html', contactController)
        .fadeIn(500)
    })
  })
  $('#greetingsButton').on('click', function () {
    $('#root').load('../partials/home.html', function () {})
  })
})
