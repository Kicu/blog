webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/index.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/index.css ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* Super awesome: https://jgthms.com/web-design-in-4-minutes */\\n\\n:root {\\n    --space-s: .5rem;\\n    --space-m: 1rem;\\n    --space-l: 2rem;\\n\\n    --color-primary: #023047;\\n    --color-secondary: #219EBC;\\n    --color-tertiary: #8ECAE6;\\n    --color-4: #FFB703;\\n    --color-5: #FB8500;\\n    --color-dark: #444444;\\n    --color-white: #ffffff;\\n    --color-lightgrey: #e1e1e1;\\n    --color-grey: #aaaaaa;\\n\\n    --font-weight-normal: 400;\\n    --font-weight-medium: 700;\\n    --font-weight-bold: 900;\\n}\\n\\n/* General & theme */\\n\\nhtml {\\n    font-size: 16px;\\n    font-family: \\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif;\\n}\\n\\nbody {\\n    margin: 0 auto;\\n    padding: 1.5rem 1rem;\\n    max-width: 40em;\\n    color: var(--color-dark);\\n    line-height: 1.5;\\n}\\n\\nh2 {\\n    margin-top: var(--space-m);\\n}\\n\\nh1,\\nh2 {\\n    color: var(--color-primary);\\n}\\n\\na {\\n    color: var(--color-secondary);\\n}\\n\\n/* Header & Footer */\\n\\n.header h1 {\\n    margin: var(--space-s) 0 var(--space-l) 0;\\n    font-size: 1.8em;\\n    font-weight: var(--font-weight-bold);\\n    letter-spacing: 2px;\\n    cursor: pointer;\\n}\\n\\n.header h1 a {\\n    color: var(--color-tertiary);\\n    font-size: 2rem;\\n}\\n\\n.footer {\\n    margin-top: -webkit-calc(var(--space-l) * 2);\\n    margin-top: -moz-calc(var(--space-l) * 2);\\n    margin-top: calc(var(--space-l) * 2);\\n    border-top: 1px solid var(--color-lightgrey);\\n}\\n\\n/* Posts page */\\n\\n.postsList {\\n    margin: 0 auto;\\n    padding: 0;\\n    list-style-type: none;\\n}\\n\\n.postsList .postsList__item {\\n    margin-bottom: 40px;\\n    display: -moz-box;\\n    display: flex;\\n    -moz-box-orient: vertical;\\n    -moz-box-direction: normal;\\n         flex-direction: column;\\n}\\n\\n.postsList .postsList__item .postsList__itemLink {\\n    margin-bottom: var(--space-s);\\n    font-size: 1.5rem;\\n    font-weight: var(--font-weight-medium);\\n    color: var(--color-primary);\\n    text-decoration: none;\\n}\\n\\n.postsList .postsList__item .postsList__itemLink:hover {\\n    color: var(--color-secondary);\\n}\\n\\n.postsList .postsList__item .postsList__itemDate {\\n    padding-left: var(--space-s);\\n    color: var(--color-grey);\\n    font-style: italic;\\n    font-size: 0.8rem;\\n}\\n\\n/* Single Post page */\\n\\n.post code,\\n.post pre {\\n    background: #eee;\\n}\\n\\n.post code {\\n    padding: 2px 4px;\\n    vertical-align: text-bottom;\\n}\\n\\n.post pre {\\n    padding: 1rem;\\n}\\n\\n.post header {\\n    margin-bottom: var(--space-l);\\n}\\n\\n.post header .postTitle {\\n    margin-bottom: var(--space-s);\\n    font-size: 2rem;\\n}\\n\\n.post header .createdDate {\\n    margin-top: -webkit-calc(-1 * var(--space-s));\\n    margin-top: -moz-calc(-1 * var(--space-s));\\n    margin-top: calc(-1 * var(--space-s));\\n    color: var(--color-grey);\\n    font-style: italic;\\n    font-size: 0.875rem;\\n}\\n\\n.post h2 {\\n    margin-top: -webkit-calc(var(--space-m) + var(--space-s));\\n    margin-top: -moz-calc(var(--space-m) + var(--space-s));\\n    margin-top: calc(var(--space-m) + var(--space-s));\\n}\\n\\n.post hr {\\n    margin: var(--space-l);\\n    height: 1px;\\n    border: 0;\\n    background-color: var(--color-lightgrey);\\n}\\n\\n/* custom quoting styling allowing for nice quote author */\\n.post blockquote {\\n    margin-left: 0;\\n    font-size: 1.2rem;\\n}\\n\\n.post blockquote > p {\\n    padding-left: var(--space-m);\\n    border-left: 4px solid var(--color-dark);\\n}\\n\\n.post blockquote > p > em:last-child {\\n    display: block;\\n    /* negative margin trick to cover border to make it vertically shorter */\\n    margin-left: -webkit-calc(-1 * (var(--space-m) + 4px));\\n    margin-left: -moz-calc(-1 * (var(--space-m) + 4px));\\n    margin-left: calc(-1 * (var(--space-m) + 4px));\\n    border-left: 4px solid var(--color-white);\\n    text-align: end;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/index.css\"],\"names\":[],\"mappings\":\"AAAA,8DAA8D;;AAI9D;IACI,gBAAgB;IAChB,eAAe;IACf,eAAe;;IAEf,wBAAwB;IACxB,0BAA0B;IAC1B,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,sBAAsB;IACtB,0BAA0B;IAC1B,qBAAqB;;IAErB,yBAAyB;IACzB,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA,oBAAoB;;AAEpB;IACI,eAAe;IACf,uDAAuD;AAC3D;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,6BAA6B;AACjC;;AAEA,oBAAoB;;AAEpB;IACI,yCAAyC;IACzC,gBAAgB;IAChB,oCAAoC;IACpC,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,4CAAoC;IAApC,yCAAoC;IAApC,oCAAoC;IACpC,4CAA4C;AAChD;;AAEA,eAAe;;AAEf;IACI,cAAc;IACd,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,iBAAa;IAAb,aAAa;IACb,yBAAsB;IAAtB,0BAAsB;SAAtB,sBAAsB;AAC1B;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,sCAAsC;IACtC,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;IAC5B,wBAAwB;IACxB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA,qBAAqB;;AAErB;;IAEI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,6CAAqC;IAArC,0CAAqC;IAArC,qCAAqC;IACrC,wBAAwB;IACxB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,yDAAiD;IAAjD,sDAAiD;IAAjD,iDAAiD;AACrD;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,SAAS;IACT,wCAAwC;AAC5C;;AAEA,0DAA0D;AAC1D;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,wCAAwC;AAC5C;;AAEA;IACI,cAAc;IACd,wEAAwE;IACxE,sDAA8C;IAA9C,mDAA8C;IAA9C,8CAA8C;IAC9C,yCAAyC;IACzC,eAAe;AACnB\",\"sourcesContent\":[\"/* Super awesome: https://jgthms.com/web-design-in-4-minutes */\\n\\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');\\n\\n:root {\\n    --space-s: .5rem;\\n    --space-m: 1rem;\\n    --space-l: 2rem;\\n\\n    --color-primary: #023047;\\n    --color-secondary: #219EBC;\\n    --color-tertiary: #8ECAE6;\\n    --color-4: #FFB703;\\n    --color-5: #FB8500;\\n    --color-dark: #444444;\\n    --color-white: #ffffff;\\n    --color-lightgrey: #e1e1e1;\\n    --color-grey: #aaaaaa;\\n\\n    --font-weight-normal: 400;\\n    --font-weight-medium: 700;\\n    --font-weight-bold: 900;\\n}\\n\\n/* General & theme */\\n\\nhtml {\\n    font-size: 16px;\\n    font-family: \\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif;\\n}\\n\\nbody {\\n    margin: 0 auto;\\n    padding: 1.5rem 1rem;\\n    max-width: 40em;\\n    color: var(--color-dark);\\n    line-height: 1.5;\\n}\\n\\nh2 {\\n    margin-top: var(--space-m);\\n}\\n\\nh1,\\nh2 {\\n    color: var(--color-primary);\\n}\\n\\na {\\n    color: var(--color-secondary);\\n}\\n\\n/* Header & Footer */\\n\\n.header h1 {\\n    margin: var(--space-s) 0 var(--space-l) 0;\\n    font-size: 1.8em;\\n    font-weight: var(--font-weight-bold);\\n    letter-spacing: 2px;\\n    cursor: pointer;\\n}\\n\\n.header h1 a {\\n    color: var(--color-tertiary);\\n    font-size: 2rem;\\n}\\n\\n.footer {\\n    margin-top: calc(var(--space-l) * 2);\\n    border-top: 1px solid var(--color-lightgrey);\\n}\\n\\n/* Posts page */\\n\\n.postsList {\\n    margin: 0 auto;\\n    padding: 0;\\n    list-style-type: none;\\n}\\n\\n.postsList .postsList__item {\\n    margin-bottom: 40px;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.postsList .postsList__item .postsList__itemLink {\\n    margin-bottom: var(--space-s);\\n    font-size: 1.5rem;\\n    font-weight: var(--font-weight-medium);\\n    color: var(--color-primary);\\n    text-decoration: none;\\n}\\n\\n.postsList .postsList__item .postsList__itemLink:hover {\\n    color: var(--color-secondary);\\n}\\n\\n.postsList .postsList__item .postsList__itemDate {\\n    padding-left: var(--space-s);\\n    color: var(--color-grey);\\n    font-style: italic;\\n    font-size: 0.8rem;\\n}\\n\\n/* Single Post page */\\n\\n.post code,\\n.post pre {\\n    background: #eee;\\n}\\n\\n.post code {\\n    padding: 2px 4px;\\n    vertical-align: text-bottom;\\n}\\n\\n.post pre {\\n    padding: 1rem;\\n}\\n\\n.post header {\\n    margin-bottom: var(--space-l);\\n}\\n\\n.post header .postTitle {\\n    margin-bottom: var(--space-s);\\n    font-size: 2rem;\\n}\\n\\n.post header .createdDate {\\n    margin-top: calc(-1 * var(--space-s));\\n    color: var(--color-grey);\\n    font-style: italic;\\n    font-size: 0.875rem;\\n}\\n\\n.post h2 {\\n    margin-top: calc(var(--space-m) + var(--space-s));\\n}\\n\\n.post hr {\\n    margin: var(--space-l);\\n    height: 1px;\\n    border: 0;\\n    background-color: var(--color-lightgrey);\\n}\\n\\n/* custom quoting styling allowing for nice quote author */\\n.post blockquote {\\n    margin-left: 0;\\n    font-size: 1.2rem;\\n}\\n\\n.post blockquote > p {\\n    padding-left: var(--space-m);\\n    border-left: 4px solid var(--color-dark);\\n}\\n\\n.post blockquote > p > em:last-child {\\n    display: block;\\n    /* negative margin trick to cover border to make it vertically shorter */\\n    margin-left: calc(-1 * (var(--space-m) + 4px));\\n    border-left: 4px solid var(--color-white);\\n    text-align: end;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2luZGV4LmNzcz85ZmQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ3pGLDhCQUE4QixtRkFBMkI7QUFDekQsOEJBQThCLFFBQVMsd0VBQXdFLElBQUksa0JBQWtCO0FBQ3JJO0FBQ0EsOEJBQThCLFFBQVMsNkVBQTZFLHVCQUF1QixzQkFBc0Isc0JBQXNCLGlDQUFpQyxpQ0FBaUMsZ0NBQWdDLHlCQUF5Qix5QkFBeUIsNEJBQTRCLDZCQUE2QixpQ0FBaUMsNEJBQTRCLGtDQUFrQyxnQ0FBZ0MsOEJBQThCLEdBQUcsbUNBQW1DLHNCQUFzQixvRUFBb0UsR0FBRyxVQUFVLHFCQUFxQiwyQkFBMkIsc0JBQXNCLCtCQUErQix1QkFBdUIsR0FBRyxRQUFRLGlDQUFpQyxHQUFHLGFBQWEsa0NBQWtDLEdBQUcsT0FBTyxvQ0FBb0MsR0FBRyx5Q0FBeUMsZ0RBQWdELHVCQUF1QiwyQ0FBMkMsMEJBQTBCLHNCQUFzQixHQUFHLGtCQUFrQixtQ0FBbUMsc0JBQXNCLEdBQUcsYUFBYSxtREFBbUQsZ0RBQWdELDJDQUEyQyxtREFBbUQsR0FBRyxvQ0FBb0MscUJBQXFCLGlCQUFpQiw0QkFBNEIsR0FBRyxpQ0FBaUMsMEJBQTBCLHdCQUF3QixvQkFBb0IsZ0NBQWdDLGlDQUFpQyxrQ0FBa0MsR0FBRyxzREFBc0Qsb0NBQW9DLHdCQUF3Qiw2Q0FBNkMsa0NBQWtDLDRCQUE0QixHQUFHLDREQUE0RCxvQ0FBb0MsR0FBRyxzREFBc0QsbUNBQW1DLCtCQUErQix5QkFBeUIsd0JBQXdCLEdBQUcsc0RBQXNELHVCQUF1QixHQUFHLGdCQUFnQix1QkFBdUIsa0NBQWtDLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxrQkFBa0Isb0NBQW9DLEdBQUcsNkJBQTZCLG9DQUFvQyxzQkFBc0IsR0FBRywrQkFBK0Isb0RBQW9ELGlEQUFpRCw0Q0FBNEMsK0JBQStCLHlCQUF5QiwwQkFBMEIsR0FBRyxj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ZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vc3R5bGVzL2luZGV4LmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFN1cGVyIGF3ZXNvbWU6IGh0dHBzOi8vamd0aG1zLmNvbS93ZWItZGVzaWduLWluLTQtbWludXRlcyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1zcGFjZS1zOiAuNXJlbTtcXG4gICAgLS1zcGFjZS1tOiAxcmVtO1xcbiAgICAtLXNwYWNlLWw6IDJyZW07XFxuXFxuICAgIC0tY29sb3ItcHJpbWFyeTogIzAyMzA0NztcXG4gICAgLS1jb2xvci1zZWNvbmRhcnk6ICMyMTlFQkM7XFxuICAgIC0tY29sb3ItdGVydGlhcnk6ICM4RUNBRTY7XFxuICAgIC0tY29sb3ItNDogI0ZGQjcwMztcXG4gICAgLS1jb2xvci01OiAjRkI4NTAwO1xcbiAgICAtLWNvbG9yLWRhcms6ICM0NDQ0NDQ7XFxuICAgIC0tY29sb3Itd2hpdGU6ICNmZmZmZmY7XFxuICAgIC0tY29sb3ItbGlnaHRncmV5OiAjZTFlMWUxO1xcbiAgICAtLWNvbG9yLWdyZXk6ICNhYWFhYWE7XFxuXFxuICAgIC0tZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XFxuICAgIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA3MDA7XFxuICAgIC0tZm9udC13ZWlnaHQtYm9sZDogOTAwO1xcbn1cXG5cXG4vKiBHZW5lcmFsICYgdGhlbWUgKi9cXG5cXG5odG1sIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIFxcXCJIZWx2ZXRpY2FcXFwiLCBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xcbiAgICBtYXgtd2lkdGg6IDQwZW07XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrKTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuaDIge1xcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1tKTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxufVxcblxcbmEge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLyogSGVhZGVyICYgRm9vdGVyICovXFxuXFxuLmhlYWRlciBoMSB7XFxuICAgIG1hcmdpbjogdmFyKC0tc3BhY2UtcykgMCB2YXIoLS1zcGFjZS1sKSAwO1xcbiAgICBmb250LXNpemU6IDEuOGVtO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlciBoMSBhIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogLXdlYmtpdC1jYWxjKHZhcigtLXNwYWNlLWwpICogMik7XFxuICAgIG1hcmdpbi10b3A6IC1tb3otY2FsYyh2YXIoLS1zcGFjZS1sKSAqIDIpO1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNwYWNlLWwpICogMik7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1saWdodGdyZXkpO1xcbn1cXG5cXG4vKiBQb3N0cyBwYWdlICovXFxuXFxuLnBvc3RzTGlzdCB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5wb3N0c0xpc3QgLnBvc3RzTGlzdF9faXRlbSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucG9zdHNMaXN0IC5wb3N0c0xpc3RfX2l0ZW0gLnBvc3RzTGlzdF9faXRlbUxpbmsge1xcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1zKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLnBvc3RzTGlzdCAucG9zdHNMaXN0X19pdGVtIC5wb3N0c0xpc3RfX2l0ZW1MaW5rOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxufVxcblxcbi5wb3N0c0xpc3QgLnBvc3RzTGlzdF9faXRlbSAucG9zdHNMaXN0X19pdGVtRGF0ZSB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3BhY2Utcyk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLyogU2luZ2xlIFBvc3QgcGFnZSAqL1xcblxcbi5wb3N0IGNvZGUsXFxuLnBvc3QgcHJlIHtcXG4gICAgYmFja2dyb3VuZDogI2VlZTtcXG59XFxuXFxuLnBvc3QgY29kZSB7XFxuICAgIHBhZGRpbmc6IDJweCA0cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG59XFxuXFxuLnBvc3QgcHJlIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnBvc3QgaGVhZGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2UtbCk7XFxufVxcblxcbi5wb3N0IGhlYWRlciAucG9zdFRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utcyk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnBvc3QgaGVhZGVyIC5jcmVhdGVkRGF0ZSB7XFxuICAgIG1hcmdpbi10b3A6IC13ZWJraXQtY2FsYygtMSAqIHZhcigtLXNwYWNlLXMpKTtcXG4gICAgbWFyZ2luLXRvcDogLW1vei1jYWxjKC0xICogdmFyKC0tc3BhY2UtcykpO1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0tc3BhY2UtcykpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG59XFxuXFxuLnBvc3QgaDIge1xcbiAgICBtYXJnaW4tdG9wOiAtd2Via2l0LWNhbGModmFyKC0tc3BhY2UtbSkgKyB2YXIoLS1zcGFjZS1zKSk7XFxuICAgIG1hcmdpbi10b3A6IC1tb3otY2FsYyh2YXIoLS1zcGFjZS1tKSArIHZhcigtLXNwYWNlLXMpKTtcXG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1zcGFjZS1tKSArIHZhcigtLXNwYWNlLXMpKTtcXG59XFxuXFxuLnBvc3QgaHIge1xcbiAgICBtYXJnaW46IHZhcigtLXNwYWNlLWwpO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodGdyZXkpO1xcbn1cXG5cXG4vKiBjdXN0b20gcXVvdGluZyBzdHlsaW5nIGFsbG93aW5nIGZvciBuaWNlIHF1b3RlIGF1dGhvciAqL1xcbi5wb3N0IGJsb2NrcXVvdGUge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wb3N0IGJsb2NrcXVvdGUgPiBwIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1tKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1kYXJrKTtcXG59XFxuXFxuLnBvc3QgYmxvY2txdW90ZSA+IHAgPiBlbTpsYXN0LWNoaWxkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC8qIG5lZ2F0aXZlIG1hcmdpbiB0cmljayB0byBjb3ZlciBib3JkZXIgdG8gbWFrZSBpdCB2ZXJ0aWNhbGx5IHNob3J0ZXIgKi9cXG4gICAgbWFyZ2luLWxlZnQ6IC13ZWJraXQtY2FsYygtMSAqICh2YXIoLS1zcGFjZS1tKSArIDRweCkpO1xcbiAgICBtYXJnaW4tbGVmdDogLW1vei1jYWxjKC0xICogKHZhcigtLXNwYWNlLW0pICsgNHB4KSk7XFxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogKHZhcigtLXNwYWNlLW0pICsgNHB4KSk7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhEQUE4RDs7QUFJOUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7O0lBRWYsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixxQkFBcUI7O0lBRXJCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxlQUFlO0lBQ2YsdURBQXVEO0FBQzNEOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0Q0FBb0M7SUFBcEMseUNBQW9DO0lBQXBDLG9DQUFvQztJQUNwQyw0Q0FBNEM7QUFDaEQ7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFzQjtJQUF0QiwwQkFBc0I7U0FBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQSxxQkFBcUI7O0FBRXJCOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw2Q0FBcUM7SUFBckMsMENBQXFDO0lBQXJDLHFDQUFxQztJQUNyQyx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlEQUFpRDtJQUFqRCxzREFBaUQ7SUFBakQsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsd0NBQXdDO0FBQzVDOztBQUVBLDBEQUEwRDtBQUMxRDtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksY0FBYztJQUNkLHdFQUF3RTtJQUN4RSxzREFBOEM7SUFBOUMsbURBQThDO0lBQTlDLDhDQUE4QztJQUM5Qyx5Q0FBeUM7SUFDekMsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTdXBlciBhd2Vzb21lOiBodHRwczovL2pndGhtcy5jb20vd2ViLWRlc2lnbi1pbi00LW1pbnV0ZXMgKi9cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tc3BhY2UtczogLjVyZW07XFxuICAgIC0tc3BhY2UtbTogMXJlbTtcXG4gICAgLS1zcGFjZS1sOiAycmVtO1xcblxcbiAgICAtLWNvbG9yLXByaW1hcnk6ICMwMjMwNDc7XFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5OiAjMjE5RUJDO1xcbiAgICAtLWNvbG9yLXRlcnRpYXJ5OiAjOEVDQUU2O1xcbiAgICAtLWNvbG9yLTQ6ICNGRkI3MDM7XFxuICAgIC0tY29sb3ItNTogI0ZCODUwMDtcXG4gICAgLS1jb2xvci1kYXJrOiAjNDQ0NDQ0O1xcbiAgICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xcbiAgICAtLWNvbG9yLWxpZ2h0Z3JleTogI2UxZTFlMTtcXG4gICAgLS1jb2xvci1ncmV5OiAjYWFhYWFhO1xcblxcbiAgICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNzAwO1xcbiAgICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDkwMDtcXG59XFxuXFxuLyogR2VuZXJhbCAmIHRoZW1lICovXFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBcXFwiSGVsdmV0aWNhXFxcIiwgXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcXG4gICAgbWF4LXdpZHRoOiA0MGVtO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbSk7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxufVxcblxcbi8qIEhlYWRlciAmIEZvb3RlciAqL1xcblxcbi5oZWFkZXIgaDEge1xcbiAgICBtYXJnaW46IHZhcigtLXNwYWNlLXMpIDAgdmFyKC0tc3BhY2UtbCkgMDtcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXIgaDEgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tc3BhY2UtbCkgKiAyKTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWxpZ2h0Z3JleSk7XFxufVxcblxcbi8qIFBvc3RzIHBhZ2UgKi9cXG5cXG4ucG9zdHNMaXN0IHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLnBvc3RzTGlzdCAucG9zdHNMaXN0X19pdGVtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBvc3RzTGlzdCAucG9zdHNMaXN0X19pdGVtIC5wb3N0c0xpc3RfX2l0ZW1MaW5rIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utcyk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5wb3N0c0xpc3QgLnBvc3RzTGlzdF9faXRlbSAucG9zdHNMaXN0X19pdGVtTGluazpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG4ucG9zdHNMaXN0IC5wb3N0c0xpc3RfX2l0ZW0gLnBvc3RzTGlzdF9faXRlbURhdGUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLXMpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi8qIFNpbmdsZSBQb3N0IHBhZ2UgKi9cXG5cXG4ucG9zdCBjb2RlLFxcbi5wb3N0IHByZSB7XFxuICAgIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcblxcbi5wb3N0IGNvZGUge1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxufVxcblxcbi5wb3N0IHByZSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5wb3N0IGhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLWwpO1xcbn1cXG5cXG4ucG9zdCBoZWFkZXIgLnBvc3RUaXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXMpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5wb3N0IGhlYWRlciAuY3JlYXRlZERhdGUge1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0tc3BhY2UtcykpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG59XFxuXFxuLnBvc3QgaDIge1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNwYWNlLW0pICsgdmFyKC0tc3BhY2UtcykpO1xcbn1cXG5cXG4ucG9zdCBociB7XFxuICAgIG1hcmdpbjogdmFyKC0tc3BhY2UtbCk7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0Z3JleSk7XFxufVxcblxcbi8qIGN1c3RvbSBxdW90aW5nIHN0eWxpbmcgYWxsb3dpbmcgZm9yIG5pY2UgcXVvdGUgYXV0aG9yICovXFxuLnBvc3QgYmxvY2txdW90ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnBvc3QgYmxvY2txdW90ZSA+IHAge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLW0pO1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWNvbG9yLWRhcmspO1xcbn1cXG5cXG4ucG9zdCBibG9ja3F1b3RlID4gcCA+IGVtOmxhc3QtY2hpbGQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLyogbmVnYXRpdmUgbWFyZ2luIHRyaWNrIHRvIGNvdmVyIGJvcmRlciB0byBtYWtlIGl0IHZlcnRpY2FsbHkgc2hvcnRlciAqL1xcbiAgICBtYXJnaW4tbGVmdDogY2FsYygtMSAqICh2YXIoLS1zcGFjZS1tKSArIDRweCkpO1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/index.css\n");

/***/ })

})