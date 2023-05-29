"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _material = require("@mui/material");
var _basicSelect = _interopRequireDefault(require("./common/basicSelect"));
var _lab = require("@mui/lab");
var _loader = _interopRequireDefault(require("./common/loader"));
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var FindContractor = function FindContractor() {
  var _useState = (0, _react.useState)("none"),
    _useState2 = _slicedToArray(_useState, 2),
    selectedState = _useState2[0],
    setSelectedState = _useState2[1];
  var _useState3 = (0, _react.useState)("none"),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedCounty = _useState4[0],
    setSelectedCounty = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    contractorName = _useState6[0],
    setContractorName = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    showData = _useState10[0],
    setShowData = _useState10[1];
  var states = [{
    name: "California",
    value: "CA"
  }, {
    name: "Florida",
    value: "FL"
  }];
  var counties = [{
    name: "Baker FL",
    value: "Baker FL"
  }, {
    name: "Clay FL",
    value: "Clay FL"
  }, {
    name: "Alpine CA",
    value: "Alpine CA"
  }, {
    name: "Butte CA",
    value: "Butte CA"
  }];
  var onReset = function onReset() {
    setSelectedState("none");
    setSelectedCounty("none");
    setContractorName("");
    setShowData([]);
  };
  var searchData = function searchData() {
    fetchData();
  };
  var fetchData = function fetchData() {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts?_page=0&_limit=20", {
      method: "GET"
    }).then(function (response) {
      response.json().then(function (data) {
        setShowData(data);
        setLoading(false);
      });
    }).catch(function (error) {
      console.log("error", error);
      setLoading(false);
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        flexDirection: ["column", "row"],
        gap: 3,
        alignItems: ["start", "center"]
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_basicSelect.default, {
        label: "Select State",
        values: states,
        value: selectedState,
        setValue: function setValue(e) {
          return setSelectedState(e.target.value);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_basicSelect.default, {
        label: "Select County",
        values: counties,
        value: selectedCounty,
        setValue: function setValue(e) {
          return setSelectedCounty(e.target.value);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        children: "Or"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
        sx: {
          width: "100%",
          borderRadius: 2
        },
        placeholder: "Search By Contractor Name",
        value: contractorName,
        InputProps: {
          sx: {
            borderRadius: 2
          }
        },
        onChange: function onChange(e) {
          return setContractorName(e.target.value);
        }
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        flexDirection: ["column", "row"],
        gap: 2,
        alignItems: ["start", "center"],
        mt: [4, 4]
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_lab.LoadingButton, {
        type: "submit",
        sx: {
          width: ["100%", "auto"]
        },
        loading: loading,
        variant: "contained",
        onClick: searchData,
        children: "Search"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_lab.LoadingButton, {
        type: "submit",
        sx: {
          width: ["100%", "auto"]
        },
        disabled: loading,
        variant: "contained",
        onClick: onReset,
        children: "Reset"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        mt: 4,
        display: "flex",
        gap: 2,
        flexDirection: ["column", "row"],
        flexWrap: ["wrap"],
        justifyContent: "center",
        alignItems: "center"
      },
      children: [loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_loader.default, {}) : null, showData.length === 0 && !loading && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Typography, {
        fontSize: "small",
        children: [" ", "Select your state or contractor to start searching", " "]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
        container: true,
        spacing: 2,
        children: showData.map(function (item) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            xs: 12,
            sm: 4,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                border: "2px solid #b2b2b2",
                p: 3,
                minHeight: 80,
                display: "flex",
                alignItems: "start",
                //   width: ["70vw", "30%"],
                //   maxWidth: [300],
                flexDirection: "column",
                justifyContent: "center",
                gap: 1,
                height: 150
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
                children: item.title
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
                children: [" ", item.body.slice(0, 20), " "]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
                children: "Load More"
              })]
            })
          });
        })
      })]
    })]
  });
};
var _default = FindContractor;
exports.default = _default;