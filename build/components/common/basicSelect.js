"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BasicSelect;
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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