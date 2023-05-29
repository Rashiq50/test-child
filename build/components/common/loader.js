"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
function LoaderComponent() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      width: "100%",
      height: "100%",
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.CircularProgress, {
      size: 45
    })
  });
}
var _default = LoaderComponent;
exports.default = _default;