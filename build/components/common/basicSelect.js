"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BasicSelect;
var React = _interopRequireWildcard(require("react"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function BasicSelect(props) {
  var value = props.value,
    setValue = props.setValue,
    _props$error = props.error,
    error = _props$error === void 0 ? false : _props$error,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl.default, {
    sx: {
      width: ["100%"]
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Select.default, {
      disabled: disabled,
      contentEditable: false,
      error: error,
      labelId: "demo-simple-select-label",
      id: "demo-simple-select",
      value: value,
      onChange: setValue,
      placeholder: props.label,
      sx: {
        borderRadius: 2,
        // borderColor: "#b2b2b2",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#535663"
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuItem.default, {
        value: "none",
        disabled: true,
        children: [" ", props.label, " "]
      }), props.values.map(function (item) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuItem.default, {
          value: item.value,
          children: item.name
        }, "".concat(item.value));
      })]
    })
  });
}