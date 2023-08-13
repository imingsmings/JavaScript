(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // js:/Users/imings/Code/web/Vite/esbuild/src/pages/version.js
  var require_version = __commonJS({
    "js:/Users/imings/Code/web/Vite/esbuild/src/pages/version.js"() {
      "// \u7248\u672C\u53F7.2\nconst x = 1;\nconst y = 2;\nconsole.log(x + y);";
    }
  });

  // txt:/Users/imings/Code/web/Vite/esbuild/src/data/data.txt
  var data_default = ["123", "456", "789", "\u54C8\u54C8\u54C8\u54C8\u54C8h", "\u54C8\u54C8h", "china"];

  // src/plugin.jsx
  var import_version = __toModule(require_version());
  console.log(data_default);
  console.log(import_version.default);
})();
//# sourceMappingURL=plugin.js.map
