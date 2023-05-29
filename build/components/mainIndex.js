"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _searchBar = _interopRequireDefault(require("./searchBar"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function MainIndex() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_searchBar.default, {})
  });
}
var _default = MainIndex;
exports.default = _default;