"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lab = require("@mui/lab");
var _material = require("@mui/material");
var _react = require("react");
var _searchAutoCoplete = _interopRequireDefault(require("./searchAutoCoplete"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function AddressNeeded() {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    searched = _useState6[0],
    setSearched = _useState6[1];
  var onSubmit = function onSubmit(e) {
    console.log("submitted", searchValue);
    e.preventDefault();
    fetchData();
  };
  var fetchData = function fetchData() {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/2", {
      method: "GET"
    }).then(function (response) {
      response.json().then(function (data) {
        setLoading(false);
        window.open(window.location.host + "/were-sorry-your-address-outside-our-coverage-area");
      });
    }).catch(function (error) {
      console.log("error", error);
      setLoading(false);
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      children: "Introduce us to your home, and we\u2019ll see if it\u2019s eligible:"
    }), searched && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      children: "See if we're available in your community"
    }), !searched && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      component: "form",
      onSubmit: onSubmit,
      sx: {
        display: "flex",
        gap: 2,
        flexDirection: ["column", "row"],
        mt: 2
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_searchAutoCoplete.default, {
        value: searchValue,
        setValue: setSearchValue
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_lab.LoadingButton, {
        type: "submit",
        sx: {
          width: ["100%", "auto"]
        },
        loading: loading,
        variant: "contained",
        children: "Look Up"
      })]
    }), searched && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        my: 2,
        display: "flex",
        gap: 1,
        flexDirection: ["column", "row"]
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Button, {
        variant: "contained",
        onClick: function onClick() {
          setSearched(false);
        },
        children: [" ", "Check Address", " "]
      })
    })]
  });
}
var _default = AddressNeeded;
exports.default = _default;