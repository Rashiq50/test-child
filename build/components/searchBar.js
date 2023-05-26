"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lab = require("@mui/lab");
var _material = require("@mui/material");
var _react = require("react");
var _searchAutoCoplete = _interopRequireDefault(require("./searchAutoCoplete"));
var _iconsMaterial = require("@mui/icons-material");
var _reactGeocode = _interopRequireDefault(require("react-geocode"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_reactGeocode.default.setApiKey("AIzaSyAsuW5ZfYvaAbzy_G9SfJFTf1wMAN5Mqpg");
function SearchBar() {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    locationLoading = _useState6[0],
    setLocationLoading = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    searched = _useState8[0],
    setSearched = _useState8[1];
  var _useState9 = (0, _react.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    found = _useState10[0],
    setFound = _useState10[1];
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
        setFound(false);
        setSearched(true);
      });
    }).catch(function (error) {
      console.log("error", error);
      setLoading(false);
    });
  };
  function getLocation() {
    setLocationLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        console.log(pos.coords.latitude, pos.coords.longitude);
        _reactGeocode.default.enableDebug();
        _reactGeocode.default.fromLatLng(pos.coords.latitude.toString(), pos.coords.longitude.toString()).then(function (response) {
          var address = response.results[0].formatted_address;
          console.log(address);
          setSearchValue(address);
          setLocationLoading(false);
        }, function (error) {
          setLocationLoading(false);
          console.error(error);
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [found && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      children: ["PACE Home Improvement Financing", /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        children: "A simple way to pay for energy and safety home improvements."
      })]
    }), !found && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        children: "We're sorry. Your address is outside of our coverage area"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        children: ["Based on your home address ", searchValue, ", PACE is not yet available as a financing option."]
      })]
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
    }), searched && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        my: 2,
        display: "flex",
        gap: 1,
        flexDirection: ["column", "row"]
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Button, {
        variant: "contained",
        onClick: function onClick() {
          setSearched(false);
        },
        children: [" ", "Check Another Address", " "]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Button, {
        variant: "contained",
        onClick: function onClick() {
          window.open("https://renewfinancial.formstack.com/forms/pacepetition");
        },
        children: [" ", "Request Jurisdiction Approval", " "]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Button, {
        onClick: getLocation,
        sx: {},
        startIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.LocationOnOutlined, {}),
        disabled: locationLoading,
        children: [" ", "Use current location", " "]
      })
    })]
  });
}
var _default = SearchBar;
exports.default = _default;