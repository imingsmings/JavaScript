var $ = (function () {
  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP');

  if (!xhr) {
    throw new Error("Your browser doesn't support XMLHttpRequest");
  }

  function _doAjax(options) {
    var type = (options.type || 'get').toLowerCase(),
      url = options.url,
      async = options.async || true,
      data = options.data || null,
      success = options.success || function () {},
      error = options.error || function () {},
      complete = options.complete || function () {};

    if (!url) {
      throw new Error('url is required');
    }

    xhr.open(type, url, async);
    type === 'post' &&
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(type === 'get' ? null : formatData(data));

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 304) {
          success(JSON.parse(xhr.responseText));
        } else {
          error();
        }
        complete();
      }
    };
    xhr.onload = function () {
      console.log(123);
    };
  }

  function formatData(obj) {
    var str = '';
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        str += key + '=' + obj[key] + '&';
      }
    }
    return str.replace(/&$/, '');
  }

  return {
    ajax: function (options) {
      _doAjax(options);
    },
    get: function (url, callback) {
      _doAjax({
        type: 'get',
        url: url,
        success: callback,
      });
    },
    post: function (url, data, callback) {
      _doAjax({
        type: 'post',
        url: url,
        data: data,
        success: callback,
      });
    },
  };
})();
