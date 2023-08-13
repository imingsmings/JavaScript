"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var ReactDOMServer = require("react-dom/server");
var server = require("react-router-dom/server");
var React = require("react");
var jsxRuntime = require("react/jsx-runtime");
var reactRouterDom = require("react-router-dom");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var ReactDOMServer__default = /* @__PURE__ */ _interopDefaultLegacy(ReactDOMServer);
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
class Home extends React__default["default"].Component {
  render() {
    return /* @__PURE__ */ jsxRuntime.jsx("div", {
      children: "Home"
    });
  }
}
class About extends React__default["default"].Component {
  render() {
    return /* @__PURE__ */ jsxRuntime.jsx("div", {
      children: "About"
    });
  }
}
class App extends React__default["default"].Component {
  render() {
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
        to: "/home",
        children: "Home"
      }), /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Link, {
        to: "/about",
        children: "About"
      }), /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Routes, {
        children: [/* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, {
          path: "/home",
          element: /* @__PURE__ */ jsxRuntime.jsx(Home, {})
        }), /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, {
          path: "/about",
          element: /* @__PURE__ */ jsxRuntime.jsx(About, {})
        })]
      })]
    });
  }
}
function render(url, context) {
  return ReactDOMServer__default["default"].renderToString(/* @__PURE__ */ jsxRuntime.jsx(server.StaticRouter, {
    location: url,
    context,
    children: /* @__PURE__ */ jsxRuntime.jsx(App, {})
  }));
}
exports.render = render;
