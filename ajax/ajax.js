var $ = (function () {
  function _doAjax(options) {
    var xhr = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject('Microsoft.XMLHTTP');
    var t = null;

    if (!xhr) {
      throw new Error("Your browser doesn't support XMLHttpRequest");
    }
    var type = (options.type || 'get').toLowerCase(),
      url = options.url,
      async = options.async || true,
      data = options.data || null,
      timeout = options.timeout || 10000,
      dataType = (options.dataType || 'json').toLowerCase(),
      success = options.success || function () {},
      error = options.error || function () {},
      complete = options.complete || function () {};

    if (!url) {
      throw new Error('url is required');
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
          success(JSON.parse(xhr.responseText));
          switch (dataType) {
            case 'json':
              success(JSON.parse(xhr.responseText));
              break;
            case 'text':
              success(xhr.responseText);
              break;
            case 'xml':
              success(xhr.responseXML);
              break;
            default:
              success(JSON.parse(xhr.responseText));
          }
        } else {
          error();
        }
        complete();
        clearTimeout(t);
        t = null;
        xhr = null;
      }
    };

    xhr.open(type, url, async);
    type === 'post' &&
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(type === 'get' ? null : formatData(data));

    t = setTimeout(function () {
      xhr.abort();
      clearTimeout(t);
      t = null;
      xhr = null;
      complete();
    }, timeout);
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
