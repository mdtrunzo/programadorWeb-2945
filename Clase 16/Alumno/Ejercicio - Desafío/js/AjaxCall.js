var AjaxCall = (function () {
  var exposed = {}

  exposed.getData = function (url, CallBack) {
    $.ajax(url)
      .done(function (data) {
        CallBack(null, data)
      })
      .fail(function (error) {
        CallBack(error)
      })
  }
  return exposed
})()
