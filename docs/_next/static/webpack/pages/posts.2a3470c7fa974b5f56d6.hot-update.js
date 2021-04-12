webpackHotUpdate_N_E("pages/posts",{

/***/ "./src/components/PostListItem.tsx":
/*!*****************************************!*\
  !*** ./src/components/PostListItem.tsx ***!
  \*****************************************/
/*! exports provided: PostListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostListItem\", function() { return PostListItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PostListItem_PostDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostListItem/PostDate */ \"./src/components/PostListItem/PostDate.tsx\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ \"./src/types.ts\");\nvar _jsxFileName = \"/Users/mateusz/code/blog/src/components/PostListItem.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction renderTitle(title, lang) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, title), lang === _types__WEBPACK_IMPORTED_MODULE_3__[\"PostLangs\"].pl && __jsx(\"span\", {\n    className: \"postsList__itemIcon\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 33\n    }\n  }, \" \\uD83C\\uDDF5\\uD83C\\uDDF1\"));\n}\n\nfunction PostListItem(_ref) {\n  var post = _ref.post;\n  var postUrl = \"/posts/\".concat(post.slug);\n  return __jsx(\"li\", {\n    className: \"postsList__item\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: postUrl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    className: \"postsList__itemLink\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, renderTitle(post.title, post.lang))), __jsx(\"p\", {\n    className: \"postsList__itemSubheading\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, post.subhead), __jsx(_PostListItem_PostDate__WEBPACK_IMPORTED_MODULE_2__[\"PostDate\"], {\n    date: post.date,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }));\n}\n_c = PostListItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"PostListItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdExpc3RJdGVtLnRzeD8zNDU0Il0sIm5hbWVzIjpbInJlbmRlclRpdGxlIiwidGl0bGUiLCJsYW5nIiwiUG9zdExhbmdzIiwicGwiLCJQb3N0TGlzdEl0ZW0iLCJwb3N0IiwicG9zdFVybCIsInNsdWciLCJzdWJoZWFkIiwiZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBb0NDLElBQXBDLEVBQXFEO0FBQ25ELFNBQ0UsbUVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPRCxLQUFQLENBREYsRUFFR0MsSUFBSSxLQUFLQyxnREFBUyxDQUFDQyxFQUFuQixJQUF5QjtBQUFNLGFBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGNUIsQ0FERjtBQU1EOztBQUVNLFNBQVNDLFlBQVQsT0FBdUU7QUFBQSxNQUEvQ0MsSUFBK0MsUUFBL0NBLElBQStDO0FBQzVFLE1BQU1DLE9BQU8sb0JBQWFELElBQUksQ0FBQ0UsSUFBbEIsQ0FBYjtBQUVBLFNBQ0U7QUFBSSxhQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUVELE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsV0FBVyxDQUFDTSxJQUFJLENBQUNMLEtBQU4sRUFBYUssSUFBSSxDQUFDSixJQUFsQixDQURkLENBREYsQ0FERixFQU1FO0FBQUcsYUFBUyxFQUFDLDJCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMENJLElBQUksQ0FBQ0csT0FBL0MsQ0FORixFQU9FLE1BQUMsK0RBQUQ7QUFBVSxRQUFJLEVBQUVILElBQUksQ0FBQ0ksSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBREY7QUFXRDtLQWRlTCxZIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUG9zdExpc3RJdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBQb3N0RGF0ZSB9IGZyb20gJy4vUG9zdExpc3RJdGVtL1Bvc3REYXRlJztcbmltcG9ydCB7IFNpbXBsZVBvc3REYXRhLCBQb3N0TGFuZ3MgfSBmcm9tICcuLi90eXBlcyc7XG5cbmZ1bmN0aW9uIHJlbmRlclRpdGxlKHRpdGxlOiBzdHJpbmcsIGxhbmc6IFBvc3RMYW5ncykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3Bhbj57dGl0bGV9PC9zcGFuPlxuICAgICAge2xhbmcgPT09IFBvc3RMYW5ncy5wbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJwb3N0c0xpc3RfX2l0ZW1JY29uXCI+IPCfh7Xwn4exPC9zcGFuPn1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RMaXN0SXRlbSh7IHBvc3QgfTogeyBwb3N0OiBTaW1wbGVQb3N0RGF0YSB9KTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBwb3N0VXJsID0gYC9wb3N0cy8ke3Bvc3Quc2x1Z31gO1xuXG4gIHJldHVybiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cInBvc3RzTGlzdF9faXRlbVwiPlxuICAgICAgPExpbmsgaHJlZj17cG9zdFVybH0+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInBvc3RzTGlzdF9faXRlbUxpbmtcIj5cbiAgICAgICAgICB7cmVuZGVyVGl0bGUocG9zdC50aXRsZSwgcG9zdC5sYW5nKX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdHNMaXN0X19pdGVtU3ViaGVhZGluZ1wiPntwb3N0LnN1YmhlYWR9PC9wPlxuICAgICAgPFBvc3REYXRlIGRhdGU9e3Bvc3QuZGF0ZX0gLz5cbiAgICA8L2xpPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PostListItem.tsx\n");

/***/ })

})