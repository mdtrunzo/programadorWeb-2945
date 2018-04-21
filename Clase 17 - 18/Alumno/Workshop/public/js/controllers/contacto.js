var contactController = function () {
  $('#submitButton').on('click', function () {
    $('#root').load('../partials/greetings.html')
  })
}

var REQUIRED_FIELD = 'Campo obligatorio'

var REQUIRED_MAIL = 'Debe contener @ y .'

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

  inputMailNode.next().remove()

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

    var parentNode = inputMailNode.parent()
    parentNode.append('<span class="text-danger">' + REQUIRED_MAIL + '</span>')
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

$(document).ready(function () {
  $('#firstName').one('blur', function () {
    var inputNode = $(this)

    validateField(inputNode)

    $('#firstName').on('input', function () {
      var inputNode = $(this)

      validateField(inputNode)
    })
  })
})

function validateField (inputNode) {
  var value = inputNode.val()

  inputNode.next().remove()

  if (value) {
    inputNode.removeClass('is-invalid')
    inputNode.addClass('is-valid')
  } else {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')

    var parentNode = inputNode.parent()
    parentNode.append('<span class="text-danger">' + REQUIRED_FIELD + '</span>')
  }
}

$(document).ready(function () {
  $('#email').one('blur', function () {
    var inputMailNode = $(this)

    validateMailField(inputMailNode)

    $('#email').on('input', function () {
      var inputMailNode = $(this)

      validateMailField(inputMailNode)
    })
  })
})

function validateMailField (inputMailNode) {
  var value = inputMailNode.val()

  inputMailNode.next().remove()

  if (value) {
    inputMailNode.removeClass('is-invalid')
    inputMailNode.addClass('is-valid')
  } else {
    inputMailNode.removeClass('is-valid')
    inputMailNode.addClass('is-invalid')

    var parentNode = inputMailNode.parent()
    parentNode.append('<span class="text-danger">' + REQUIRED_FIELD + '</span>')
  }
}

$(document).ready(function () {
  $('#comments').one('blur', function () {
    var inputCommentsNode = $(this)

    validateCommentsField(inputCommentsNode)

    $('#comments').on('input', function () {
      var inputCommentsNode = $(this)

      validateCommentsField(inputCommentsNode)
    })
  })
})

function validateCommentsField (inputCommentsNode) {
  var value = inputCommentsNode.val()

  inputCommentsNode.next().remove()

  if (value) {
    inputCommentsNode.removeClass('is-invalid')
    inputCommentsNode.addClass('is-valid')
  } else {
    inputCommentsNode.removeClass('is-valid')
    inputCommentsNode.addClass('is-invalid')

    var parentNode = inputCommentsNode.parent()
    parentNode.append('<span class="text-danger">' + REQUIRED_FIELD + '</span>')
  }
}
