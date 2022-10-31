const modules = ((Function) => {
  function myNew() {
    var constructor = [].shift.call(arguments),
      _this = {};

    _this.__proto__ = constructor.prototype;

    var res = constructor.apply(_this, arguments),
      isObject = typeof res === 'object' && res !== null,
      isFunction = typeof res === 'function';

    return isObject || isFunction ? res : _this;
  }

  return {
    myNew,
  };
})(Function);

export default modules;
