"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CountrySelect;
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _iconsMaterial = require("@mui/icons-material");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function CountrySelect(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Autocomplete.default, {
    id: "country-select-demo",
    fullWidth: true,
    forcePopupIcon: false,
    options: states,
    autoHighlight: true
    // value={props.value}
    ,
    inputValue: props.value,
    onChange: function onChange(event, newValue) {
      props.setValue("".concat(newValue === null || newValue === void 0 ? void 0 : newValue.name, ", USA"));
    },
    getOptionLabel: function getOptionLabel(e) {
      return "".concat(e.name, ", ").concat(e.abbreviation);
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, _objectSpread(_objectSpread({
        component: "li",
        sx: {
          borderBottom: "1px solid #e2e2e2"
        }
      }, props), {}, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_iconsMaterial.LocationOnTwoTone, {}), option.name, ", ", option.abbreviation]
      }));
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextField.default, _objectSpread(_objectSpread({}, params), {}, {
        sx: {
          backgroundColor: "white"
        },
        label: "Enter Home Address",
        inputProps: _objectSpread(_objectSpread({}, params.inputProps), {}, {
          autoComplete: "new-password"
        })
      }));
    }
  });
}
var states = [{
  name: "Alabama",
  abbreviation: "AL"
}, {
  name: "Alaska",
  abbreviation: "AK"
}, {
  name: "Arizona",
  abbreviation: "AZ"
}, {
  name: "Arkansas",
  abbreviation: "AR"
}, {
  name: "California",
  abbreviation: "CA"
}, {
  name: "Colorado",
  abbreviation: "CO"
}, {
  name: "Connecticut",
  abbreviation: "CT"
}, {
  name: "Delaware",
  abbreviation: "DE"
}, {
  name: "Florida",
  abbreviation: "FL"
}, {
  name: "Georgia",
  abbreviation: "GA"
}, {
  name: "Hawaii",
  abbreviation: "HI"
}, {
  name: "Idaho",
  abbreviation: "ID"
}, {
  name: "Illinois",
  abbreviation: "IL"
}, {
  name: "Indiana",
  abbreviation: "IN"
}, {
  name: "Iowa",
  abbreviation: "IA"
}, {
  name: "Kansas",
  abbreviation: "KS"
}, {
  name: "Kentucky",
  abbreviation: "KY"
}, {
  name: "Louisiana",
  abbreviation: "LA"
}, {
  name: "Maine",
  abbreviation: "ME"
}, {
  name: "Maryland",
  abbreviation: "MD"
}, {
  name: "Massachusetts",
  abbreviation: "MA"
}, {
  name: "Michigan",
  abbreviation: "MI"
}, {
  name: "Minnesota",
  abbreviation: "MN"
}, {
  name: "Mississippi",
  abbreviation: "MS"
}, {
  name: "Missouri",
  abbreviation: "MO"
}, {
  name: "Montana",
  abbreviation: "MT"
}, {
  name: "Nebraska",
  abbreviation: "NE"
}, {
  name: "Nevada",
  abbreviation: "NV"
}, {
  name: "New Hampshire",
  abbreviation: "NH"
}, {
  name: "New Jersey",
  abbreviation: "NJ"
}, {
  name: "New Mexico",
  abbreviation: "NM"
}, {
  name: "New York",
  abbreviation: "NY"
}, {
  name: "North Carolina",
  abbreviation: "NC"
}, {
  name: "North Dakota",
  abbreviation: "ND"
}, {
  name: "Ohio",
  abbreviation: "OH"
}, {
  name: "Oklahoma",
  abbreviation: "OK"
}, {
  name: "Oregon",
  abbreviation: "OR"
}, {
  name: "Pennsylvania",
  abbreviation: "PA"
}, {
  name: "Rhode Island",
  abbreviation: "RI"
}, {
  name: "South Carolina",
  abbreviation: "SC"
}, {
  name: "South Dakota",
  abbreviation: "SD"
}, {
  name: "Tennessee",
  abbreviation: "TN"
}, {
  name: "Texas",
  abbreviation: "TX"
}, {
  name: "Utah",
  abbreviation: "UT"
}, {
  name: "Vermont",
  abbreviation: "VT"
}, {
  name: "Virginia",
  abbreviation: "VA"
}, {
  name: "Washington",
  abbreviation: "WA"
}, {
  name: "West Virginia",
  abbreviation: "WV"
}, {
  name: "Wisconsin",
  abbreviation: "WI"
}, {
  name: "Wyoming",
  abbreviation: "WY"
}];