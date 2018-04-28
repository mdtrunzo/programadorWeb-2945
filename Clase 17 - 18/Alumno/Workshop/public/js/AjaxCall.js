var AjaxCall = (function () {
  var exposed = {}

  exposed.getData = function (url, callBack) {
    $.ajax(url)
      .done(function (data) {
        callBack(null, data)
      })
      .fail(function (error) {
        callBack(error)
      })
  }

  return exposed
})()
