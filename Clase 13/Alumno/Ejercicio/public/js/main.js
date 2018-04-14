var REQUIRED_FIELD = 'Campo Obligatorio'

$(document).ready(function () {
  $('#home').on('click', function () {
    console.log('Me hicieron click')
    $('#root').load('../partials/home.html', function () {
      console.log('Load partial main')
    })
  })

  $('#contact').on('click', function () {
    console.log('me hicieron otro click')
    $('#root').load('../partials/contacto.html', function () {
      $('#submitButton').on('click', function () {
        $('#root').load('../partials/greetings.html')
      })
    })
  })
  $('#greetingsButton').on('click', function () {
    $('#root').load('../partials/home.html', function () {})
  })
})

var inputTextNodes = $('input[type="text"]')

inputTextNodes.blur(function (event) {
  var inputTextNode = $(this)

  var value = inputTextNode.val()

  if (value) {
    inputTextNode.removeClass('is-invalid')
    inputTextNode.addClass('is-valid')
  } else {
    inputTextNode.removeClass('is-valid')
    inputTextNode.addClass('is-invalid')
  }
  validateButtonSimple()
})

var inputMailNodes = $('input[type="email"]')

inputMailNodes.blur(function (event) {
  var inputMailNode = $(this)

  var value = inputMailNode.val()

  if (
    value &&
    typeof value === 'string' &&
    value.indexOf('@') !== -1 &&
    value.indexOf('.') !== -1
  ) {
    inputMailNode.removeClass('is-invalid')
    inputMailNode.addClass('is-valid')
  } else {
    inputMailNode.removeClass('is-valid')
    inputMailNode.addClass('is-invalid')
  }
  validateButtonSimple()
})

var inputCommentsNodes = $('#comments')

inputCommentsNodes.blur(function (event) {
  var inputCommentsNode = $(this)

  var value = inputCommentsNode.val()

  if (value) {
    inputCommentsNode.removeClass('is-invalid')
    inputCommentsNode.addClass('is-valid')
  } else {
    inputCommentsNode.removeClass('is-valid')
    inputCommentsNode.addClass('is-invalid')
  }
  validateButtonSimple()
})

$('#submitButton').attr('disabled', true)

function validateButtonSimple () {
  var validFields = $('.is-valid')
  if (validFields.length === 3) {
    $('#submitButton').attr('disabled', false)
  } else {
    $('#submitButton').attr('disabled', true)
  }
}
