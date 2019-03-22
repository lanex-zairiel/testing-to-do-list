webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./pages/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/lanex-zai/Documents/react_node_project/client/pages/index.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      task = _useState2[0],
      setTask = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      arr = _useState4[0],
      setArr = _useState4[1];

  var cloneArr;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      inputTask = _useState6[0],
      setInputTask = _useState6[1];

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setArr([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr), [event.target.value]));
    console.log(arr);
  };

  var deleteRow = function deleteRow(data) {
    var conf = window.confirm("Delete" + data + "from to-do list?");

    if (conf) {
      cloneArr = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_4___default()(arr);
      setArr(cloneArr.splice(indexOf(data), 1));
    }
  };

  var content = arr.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "rows",
      name: item,
      key: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, item, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      onClick: deleteRow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, " Del "));
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "app-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Task:", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    autoFocus: true,
    placeholder: "Enter Text Here",
    value: inputTask,
    onChange: function onChange(event) {
      return setInputTask(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "taskList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, content));
});

/***/ })

})
//# sourceMappingURL=index.js.bcf080c87dd465d60957.hot-update.js.map