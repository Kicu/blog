webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/index.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/index.css ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* Super awesome: https://jgthms.com/web-design-in-4-minutes */\\n\\n:root {\\n    --space-s: .5rem;\\n    --space-m: 1rem;\\n    --space-l: 2rem;\\n\\n    --color-primary: #023047;\\n    --color-secondary: #219EBC;\\n    --color-tertiary: #8ECAE6;\\n    --color-4: #FFB703;\\n    --color-5: #FB8500;\\n    --color-dark: #444444;\\n    --color-white: #ffffff;\\n    --color-lightgrey: #e1e1e1;\\n    --color-grey: #aaaaaa;\\n\\n    --font-weight-normal: 400;\\n    --font-weight-medium: 700;\\n    --font-weight-bold: 900;\\n}\\n\\n/* General & theme */\\n\\nhtml {\\n    font-size: 16px;\\n    font-family: \\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif;\\n}\\n\\nbody {\\n    margin: 0 auto;\\n    padding: 1.5rem 1rem;\\n    max-width: 40em;\\n    color: var(--color-dark);\\n    line-height: 1.5;\\n}\\n\\nh2 {\\n    margin-top: var(--space-m);\\n}\\n\\nh1,\\nh2 {\\n    color: var(--color-primary);\\n}\\n\\na {\\n    color: var(--color-secondary);\\n}\\n\\n/* Header & Footer */\\n\\n.header h1 {\\n    margin: var(--space-s) 0 var(--space-l) 0;\\n    font-size: 1.8em;\\n    font-weight: var(--font-weight-bold);\\n    letter-spacing: 2px;\\n    cursor: pointer;\\n}\\n\\n.header h1 a {\\n    color: var(--color-tertiary);\\n    font-size: 2rem;\\n}\\n\\n.footer {\\n    margin-top: -webkit-calc(var(--space-l) * 2);\\n    margin-top: -moz-calc(var(--space-l) * 2);\\n    margin-top: calc(var(--space-l) * 2);\\n    border-top: 1px solid var(--color-lightgrey);\\n}\\n\\n/* Posts page */\\n\\n.postsList {\\n    margin: 0 auto;\\n    padding: 0;\\n    list-style-type: none;\\n}\\n\\n.postsList .postsList__item {\\n    margin-bottom: 40px;\\n    display: -moz-box;\\n    display: flex;\\n    -moz-box-orient: vertical;\\n    -moz-box-direction: normal;\\n         flex-direction: column;\\n}\\n\\n.postsList .postsList__item .postsList__itemLink {\\n    margin-bottom: var(--space-s);\\n    font-size: 1.5rem;\\n    font-weight: var(--font-weight-medium);\\n    color: var(--color-primary);\\n    text-decoration: none;\\n}\\n\\n.postsList .postsList__item .postsList__itemLink:hover {\\n    color: var(--color-secondary);\\n}\\n\\n.postsList .postsList__item .postsList__itemDate {\\n    padding-left: var(--space-s);\\n    color: var(--color-grey);\\n    font-style: italic;\\n    font-size: 0.8rem;\\n}\\n\\n/* Single Post page */\\n\\n.post code,\\n.post pre {\\n    background: #eee;\\n}\\n\\n.post code {\\n    padding: 2px 4px;\\n    vertical-align: text-bottom;\\n}\\n\\n.post pre {\\n    padding: 1rem;\\n}\\n\\n.post header {\\n    margin-bottom: var(--space-l);\\n}\\n\\n.post header .postTitle {\\n    margin-bottom: var(--space-s);\\n    font-size: 2rem;\\n}\\n\\n.post header .createdDate {\\n    margin-top: -webkit-calc(-1 * var(--space-s));\\n    margin-top: -moz-calc(-1 * var(--space-s));\\n    margin-top: calc(-1 * var(--space-s));\\n    margin-left: 10px;\\n    color: var(--color-grey);\\n    font-style: italic;\\n    font-size: 0.875rem;\\n}\\n\\n.post h2 {\\n    margin-top: -webkit-calc(var(--space-m) + var(--space-s));\\n    margin-top: -moz-calc(var(--space-m) + var(--space-s));\\n    margin-top: calc(var(--space-m) + var(--space-s));\\n}\\n\\n.post hr {\\n    margin: var(--space-l);\\n    height: 1px;\\n    border: 0;\\n    background-color: var(--color-lightgrey);\\n}\\n\\n/* custom quoting styling allowing for nice quote author */\\n.post blockquote {\\n    margin-left: 0;\\n    font-size: 1.2rem;\\n}\\n\\n.post blockquote > p {\\n    padding-left: var(--space-m);\\n    border-left: 4px solid var(--color-dark);\\n}\\n\\n.post blockquote > p > em:last-child {\\n    display: block;\\n    /* negative margin trick to cover border to make it vertically shorter */\\n    margin-left: -webkit-calc(-1 * (var(--space-m) + 4px));\\n    margin-left: -moz-calc(-1 * (var(--space-m) + 4px));\\n    margin-left: calc(-1 * (var(--space-m) + 4px));\\n    border-left: 4px solid var(--color-white);\\n    text-align: end;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/index.css\"],\"names\":[],\"mappings\":\"AAAA,8DAA8D;;AAI9D;IACI,gBAAgB;IAChB,eAAe;IACf,eAAe;;IAEf,wBAAwB;IACxB,0BAA0B;IAC1B,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,sBAAsB;IACtB,0BAA0B;IAC1B,qBAAqB;;IAErB,yBAAyB;IACzB,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA,oBAAoB;;AAEpB;IACI,eAAe;IACf,uDAAuD;AAC3D;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,6BAA6B;AACjC;;AAEA,oBAAoB;;AAEpB;IACI,yCAAyC;IACzC,gBAAgB;IAChB,oCAAoC;IACpC,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,4CAAoC;IAApC,yCAAoC;IAApC,oCAAoC;IACpC,4CAA4C;AAChD;;AAEA,eAAe;;AAEf;IACI,cAAc;IACd,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,iBAAa;IAAb,aAAa;IACb,yBAAsB;IAAtB,0BAAsB;SAAtB,sBAAsB;AAC1B;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,sCAAsC;IACtC,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;IAC5B,wBAAwB;IACxB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA,qBAAqB;;AAErB;;IAEI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,6CAAqC;IAArC,0CAAqC;IAArC,qCAAqC;IACrC,iBAAiB;IACjB,wBAAwB;IACxB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,yDAAiD;IAAjD,sDAAiD;IAAjD,iDAAiD;AACrD;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,SAAS;IACT,wCAAwC;AAC5C;;AAEA,0DAA0D;AAC1D;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,wCAAwC;AAC5C;;AAEA;IACI,cAAc;IACd,wEAAwE;IACxE,sDAA8C;IAA9C,mDAA8C;IAA9C,8CAA8C;IAC9C,yCAAyC;IACzC,eAAe;AACnB\",\"sourcesContent\":[\"/* Super awesome: https://jgthms.com/web-design-in-4-minutes */\\n\\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');\\n\\n:root {\\n    --space-s: .5rem;\\n    --space-m: 1rem;\\n    --space-l: 2rem;\\n\\n    --color-primary: #023047;\\n    --color-secondary: #219EBC;\\n    --color-tertiary: #8ECAE6;\\n    --color-4: #FFB703;\\n    --color-5: #FB8500;\\n    --color-dark: #444444;\\n    --color-white: #ffffff;\\n    --color-lightgrey: #e1e1e1;\\n    --color-grey: #aaaaaa;\\n\\n    --font-weight-normal: 400;\\n    --font-weight-medium: 700;\\n    --font-weight-bold: 900;\\n}\\n\\n/* General & theme */\\n\\nhtml {\\n    font-size: 16px;\\n    font-family: \\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif;\\n}\\n\\nbody {\\n    margin: 0 auto;\\n    padding: 1.5rem 1rem;\\n    max-width: 40em;\\n    color: var(--color-dark);\\n    line-height: 1.5;\\n}\\n\\nh2 {\\n    margin-top: var(--space-m);\\n}\\n\\nh1,\\nh2 {\\n    color: var(--color-primary);\\n}\\n\\na {\\n    color: var(--color-secondary);\\n}\\n\\n/* Header & Footer */\\n\\n.header h1 {\\n    margin: var(--space-s) 0 var(--space-l) 0;\\n    font-size: 1.8em;\\n    font-weight: var(--font-weight-bold);\\n    letter-spacing: 2px;\\n    cursor: pointer;\\n}\\n\\n.header h1 a {\\n    color: var(--color-tertiary);\\n    font-size: 2rem;\\n}\\n\\n.footer {\\n    margin-top: calc(var(--space-l) * 2);\\n    border-top: 1px solid var(--color-lightgrey);\\n}\\n\\n/* Posts page */\\n\\n.postsList {\\n    margin: 0 auto;\\n    padding: 0;\\n    list-style-type: none;\\n}\\n\\n.postsList .postsList__item {\\n    margin-bottom: 40px;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.postsList .postsList__item .postsList__itemLink {\\n    margin-bottom: var(--space-s);\\n    font-size: 1.5rem;\\n    font-weight: var(--font-weight-medium);\\n    color: var(--color-primary);\\n    text-decoration: none;\\n}\\n\\n.postsList .postsList__item .postsList__itemLink:hover {\\n    color: var(--color-secondary);\\n}\\n\\n.postsList .postsList__item .postsList__itemDate {\\n    padding-left: var(--space-s);\\n    color: var(--color-grey);\\n    font-style: italic;\\n    font-size: 0.8rem;\\n}\\n\\n/* Single Post page */\\n\\n.post code,\\n.post pre {\\n    background: #eee;\\n}\\n\\n.post code {\\n    padding: 2px 4px;\\n    vertical-align: text-bottom;\\n}\\n\\n.post pre {\\n    padding: 1rem;\\n}\\n\\n.post header {\\n    margin-bottom: var(--space-l);\\n}\\n\\n.post header .postTitle {\\n    margin-bottom: var(--space-s);\\n    font-size: 2rem;\\n}\\n\\n.post header .createdDate {\\n    margin-top: calc(-1 * var(--space-s));\\n    margin-left: 10px;\\n    color: var(--color-grey);\\n    font-style: italic;\\n    font-size: 0.875rem;\\n}\\n\\n.post h2 {\\n    margin-top: calc(var(--space-m) + var(--space-s));\\n}\\n\\n.post hr {\\n    margin: var(--space-l);\\n    height: 1px;\\n    border: 0;\\n    background-color: var(--color-lightgrey);\\n}\\n\\n/* custom quoting styling allowing for nice quote author */\\n.post blockquote {\\n    margin-left: 0;\\n    font-size: 1.2rem;\\n}\\n\\n.post blockquote > p {\\n    padding-left: var(--space-m);\\n    border-left: 4px solid var(--color-dark);\\n}\\n\\n.post blockquote > p > em:last-child {\\n    display: block;\\n    /* negative margin trick to cover border to make it vertically shorter */\\n    margin-left: calc(-1 * (var(--space-m) + 4px));\\n    border-left: 4px solid var(--color-white);\\n    text-align: end;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2luZGV4LmNzcz85ZmQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ3pGLDhCQUE4QixtRkFBMkI7QUFDekQsOEJBQThCLFFBQVMsd0VBQXdFLElBQUksa0JBQWtCO0FBQ3JJO0FBQ0EsOEJBQThCLFFBQVMsNkVBQTZFLHVCQUF1QixzQkFBc0Isc0JBQXNCLGlDQUFpQyxpQ0FBaUMsZ0NBQWdDLHlCQUF5Qix5QkFBeUIsNEJBQTRCLDZCQUE2QixpQ0FBaUMsNEJBQTRCLGtDQUFrQyxnQ0FBZ0MsOEJBQThCLEdBQUcsbUNBQW1DLHNCQUFzQixvRUFBb0UsR0FBRyxVQUFVLHFCQUFxQiwyQkFBMkIsc0JBQXNCLCtCQUErQix1QkFBdUIsR0FBRyxRQUFRLGlDQUFpQyxHQUFHLGFBQWEsa0NBQWtDLEdBQUcsT0FBTyxvQ0FBb0MsR0FBRyx5Q0FBeUMsZ0RBQWdELHVCQUF1QiwyQ0FBMkMsMEJBQTBCLHNCQUFzQixHQUFHLGtCQUFrQixtQ0FBbUMsc0JBQXNCLEdBQUcsYUFBYSxtREFBbUQsZ0RBQWdELDJDQUEyQyxtREFBbUQsR0FBRyxvQ0FBb0MscUJBQXFCLGlCQUFpQiw0QkFBNEIsR0FBRyxpQ0FBaUMsMEJBQTBCLHdCQUF3QixvQkFBb0IsZ0NBQWdDLGlDQUFpQyxrQ0FBa0MsR0FBRyxzREFBc0Qsb0NBQW9DLHdCQUF3Qiw2Q0FBNkMsa0NBQWtDLDRCQUE0QixHQUFHLDREQUE0RCxvQ0FBb0MsR0FBRyxzREFBc0QsbUNBQW1DLCtCQUErQix5QkFBeUIsd0JBQXdCLEdBQUcsc0RBQXNELHVCQUF1QixHQUFHLGdCQUFnQix1QkFBdUIsa0NBQWtDLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxrQkFBa0Isb0NBQW9DLEdBQUcsNkJBQTZCLG9DQUFvQyxzQkFBc0IsR0FBRywrQkFBK0Isb0RBQW9ELGlEQUFpRCw0Q0FBNEMsd0JBQXdCLCtCQUErQix5QkFBeUIsMEJBQTBCLEdBQUcsY0FBYyxnRUFBZ0UsNkRBQTZELHdEQUF3RCxHQUFHLGNBQWMsNkJBQTZCLGtCQUFrQixnQkFBZ0IsK0NBQStDLEdBQUcsbUZBQW1GLHFCQUFxQix3QkFBd0IsR0FBRywwQkFBMEIsbUNBQW1DLCtDQUErQyxHQUFHLDBDQUEwQyxxQkFBcUIsNElBQTRJLDBEQUEwRCxxREFBcUQsZ0RBQWdELHNCQUFzQixHQUFHLFNBQVMseUZBQXlGLE1BQU0sWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLG1LQUFtSyxJQUFJLG1CQUFtQixXQUFXLHVCQUF1QixzQkFBc0Isc0JBQXNCLGlDQUFpQyxpQ0FBaUMsZ0NBQWdDLHlCQUF5Qix5QkFBeUIsNEJBQTRCLDZCQUE2QixpQ0FBaUMsNEJBQTRCLGtDQUFrQyxnQ0FBZ0MsOEJBQThCLEdBQUcsbUNBQW1DLHNCQUFzQixvRUFBb0UsR0FBRyxVQUFVLHFCQUFxQiwyQkFBMkIsc0JBQXNCLCtCQUErQix1QkFBdUIsR0FBRyxRQUFRLGlDQUFpQyxHQUFHLGFBQWEsa0NBQWtDLEdBQUcsT0FBTyxvQ0FBb0MsR0FBRyx5Q0FBeUMsZ0RBQWdELHVCQUF1QiwyQ0FBMkMsMEJBQTBCLHNCQUFzQixHQUFHLGtCQUFrQixtQ0FBbUMsc0JBQXNCLEdBQUcsYUFBYSwyQ0FBMkMsbURBQW1ELEdBQUcsb0NBQW9DLHFCQUFxQixpQkFBaUIsNEJBQTRCLEdBQUcsaUNBQWlDLDBCQUEwQixvQkFBb0IsNkJBQTZCLEdBQUcsc0RBQXNELG9DQUFvQyx3QkFBd0IsNkNBQTZDLGtDQUFrQyw0QkFBNEIsR0FBRyw0REFBNEQsb0NBQW9DLEdBQUcsc0RBQXNELG1DQUFtQywrQkFBK0IseUJBQXlCLHdCQUF3QixHQUFHLHNEQUFzRCx1QkFBdUIsR0FBRyxnQkFBZ0IsdUJBQXVCLGtDQUFrQyxHQUFHLGVBQWUsb0JBQW9CLEdBQUcsa0JBQWtCLG9DQUFvQyxHQUFHLDZCQUE2QixvQ0FBb0Msc0JBQXNCLEdBQUcsK0JBQStCLDRDQUE0Qyx3QkFBd0IsK0JBQStCLHlCQUF5QiwwQkFBMEIsR0FBRyxjQUFjLHdEQUF3RCxHQUFHLGNBQWMsNkJBQTZCLGtCQUFrQixnQkFBZ0IsK0NBQStDLEdBQUcsbUZBQW1GLHFCQUFxQix3QkFBd0IsR0FBRywwQkFBMEIsbUNBQW1DLCtDQUErQyxHQUFHLDBDQUEwQyxxQkFBcUIsb0lBQW9JLGdEQUFnRCxzQkFBc0IsR0FBRyxxQkFBcUI7QUFDMWlSO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL3N0eWxlcy9pbmRleC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBTdXBlciBhd2Vzb21lOiBodHRwczovL2pndGhtcy5jb20vd2ViLWRlc2lnbi1pbi00LW1pbnV0ZXMgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tc3BhY2UtczogLjVyZW07XFxuICAgIC0tc3BhY2UtbTogMXJlbTtcXG4gICAgLS1zcGFjZS1sOiAycmVtO1xcblxcbiAgICAtLWNvbG9yLXByaW1hcnk6ICMwMjMwNDc7XFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5OiAjMjE5RUJDO1xcbiAgICAtLWNvbG9yLXRlcnRpYXJ5OiAjOEVDQUU2O1xcbiAgICAtLWNvbG9yLTQ6ICNGRkI3MDM7XFxuICAgIC0tY29sb3ItNTogI0ZCODUwMDtcXG4gICAgLS1jb2xvci1kYXJrOiAjNDQ0NDQ0O1xcbiAgICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xcbiAgICAtLWNvbG9yLWxpZ2h0Z3JleTogI2UxZTFlMTtcXG4gICAgLS1jb2xvci1ncmV5OiAjYWFhYWFhO1xcblxcbiAgICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNzAwO1xcbiAgICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDkwMDtcXG59XFxuXFxuLyogR2VuZXJhbCAmIHRoZW1lICovXFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBcXFwiSGVsdmV0aWNhXFxcIiwgXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcXG4gICAgbWF4LXdpZHRoOiA0MGVtO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbSk7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxufVxcblxcbi8qIEhlYWRlciAmIEZvb3RlciAqL1xcblxcbi5oZWFkZXIgaDEge1xcbiAgICBtYXJnaW46IHZhcigtLXNwYWNlLXMpIDAgdmFyKC0tc3BhY2UtbCkgMDtcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXIgaDEgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IC13ZWJraXQtY2FsYyh2YXIoLS1zcGFjZS1sKSAqIDIpO1xcbiAgICBtYXJnaW4tdG9wOiAtbW96LWNhbGModmFyKC0tc3BhY2UtbCkgKiAyKTtcXG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1zcGFjZS1sKSAqIDIpO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItbGlnaHRncmV5KTtcXG59XFxuXFxuLyogUG9zdHMgcGFnZSAqL1xcblxcbi5wb3N0c0xpc3Qge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ucG9zdHNMaXN0IC5wb3N0c0xpc3RfX2l0ZW0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBvc3RzTGlzdCAucG9zdHNMaXN0X19pdGVtIC5wb3N0c0xpc3RfX2l0ZW1MaW5rIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utcyk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5wb3N0c0xpc3QgLnBvc3RzTGlzdF9faXRlbSAucG9zdHNMaXN0X19pdGVtTGluazpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG4ucG9zdHNMaXN0IC5wb3N0c0xpc3RfX2l0ZW0gLnBvc3RzTGlzdF9faXRlbURhdGUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLXMpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi8qIFNpbmdsZSBQb3N0IHBhZ2UgKi9cXG5cXG4ucG9zdCBjb2RlLFxcbi5wb3N0IHByZSB7XFxuICAgIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcblxcbi5wb3N0IGNvZGUge1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxufVxcblxcbi5wb3N0IHByZSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5wb3N0IGhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLWwpO1xcbn1cXG5cXG4ucG9zdCBoZWFkZXIgLnBvc3RUaXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXMpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5wb3N0IGhlYWRlciAuY3JlYXRlZERhdGUge1xcbiAgICBtYXJnaW4tdG9wOiAtd2Via2l0LWNhbGMoLTEgKiB2YXIoLS1zcGFjZS1zKSk7XFxuICAgIG1hcmdpbi10b3A6IC1tb3otY2FsYygtMSAqIHZhcigtLXNwYWNlLXMpKTtcXG4gICAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLXNwYWNlLXMpKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG5cXG4ucG9zdCBoMiB7XFxuICAgIG1hcmdpbi10b3A6IC13ZWJraXQtY2FsYyh2YXIoLS1zcGFjZS1tKSArIHZhcigtLXNwYWNlLXMpKTtcXG4gICAgbWFyZ2luLXRvcDogLW1vei1jYWxjKHZhcigtLXNwYWNlLW0pICsgdmFyKC0tc3BhY2UtcykpO1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNwYWNlLW0pICsgdmFyKC0tc3BhY2UtcykpO1xcbn1cXG5cXG4ucG9zdCBociB7XFxuICAgIG1hcmdpbjogdmFyKC0tc3BhY2UtbCk7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0Z3JleSk7XFxufVxcblxcbi8qIGN1c3RvbSBxdW90aW5nIHN0eWxpbmcgYWxsb3dpbmcgZm9yIG5pY2UgcXVvdGUgYXV0aG9yICovXFxuLnBvc3QgYmxvY2txdW90ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnBvc3QgYmxvY2txdW90ZSA+IHAge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLW0pO1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWNvbG9yLWRhcmspO1xcbn1cXG5cXG4ucG9zdCBibG9ja3F1b3RlID4gcCA+IGVtOmxhc3QtY2hpbGQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLyogbmVnYXRpdmUgbWFyZ2luIHRyaWNrIHRvIGNvdmVyIGJvcmRlciB0byBtYWtlIGl0IHZlcnRpY2FsbHkgc2hvcnRlciAqL1xcbiAgICBtYXJnaW4tbGVmdDogLXdlYmtpdC1jYWxjKC0xICogKHZhcigtLXNwYWNlLW0pICsgNHB4KSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAtbW96LWNhbGMoLTEgKiAodmFyKC0tc3BhY2UtbSkgKyA0cHgpKTtcXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiAodmFyKC0tc3BhY2UtbSkgKyA0cHgpKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOERBQThEOztBQUk5RDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTs7SUFFZix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLHFCQUFxQjs7SUFFckIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLGVBQWU7SUFDZix1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRDQUFvQztJQUFwQyx5Q0FBb0M7SUFBcEMsb0NBQW9DO0lBQ3BDLDRDQUE0QztBQUNoRDs7QUFFQSxlQUFlOztBQUVmO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWE7SUFBYixhQUFhO0lBQ2IseUJBQXNCO0lBQXRCLDBCQUFzQjtTQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QywyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBLHFCQUFxQjs7QUFFckI7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDZDQUFxQztJQUFyQywwQ0FBcUM7SUFBckMscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlEQUFpRDtJQUFqRCxzREFBaUQ7SUFBakQsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsd0NBQXdDO0FBQzVDOztBQUVBLDBEQUEwRDtBQUMxRDtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksY0FBYztJQUNkLHdFQUF3RTtJQUN4RSxzREFBOEM7SUFBOUMsbURBQThDO0lBQTlDLDhDQUE4QztJQUM5Qyx5Q0FBeUM7SUFDekMsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTdXBlciBhd2Vzb21lOiBodHRwczovL2pndGhtcy5jb20vd2ViLWRlc2lnbi1pbi00LW1pbnV0ZXMgKi9cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tc3BhY2UtczogLjVyZW07XFxuICAgIC0tc3BhY2UtbTogMXJlbTtcXG4gICAgLS1zcGFjZS1sOiAycmVtO1xcblxcbiAgICAtLWNvbG9yLXByaW1hcnk6ICMwMjMwNDc7XFxuICAgIC0tY29sb3Itc2Vjb25kYXJ5OiAjMjE5RUJDO1xcbiAgICAtLWNvbG9yLXRlcnRpYXJ5OiAjOEVDQUU2O1xcbiAgICAtLWNvbG9yLTQ6ICNGRkI3MDM7XFxuICAgIC0tY29sb3ItNTogI0ZCODUwMDtcXG4gICAgLS1jb2xvci1kYXJrOiAjNDQ0NDQ0O1xcbiAgICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xcbiAgICAtLWNvbG9yLWxpZ2h0Z3JleTogI2UxZTFlMTtcXG4gICAgLS1jb2xvci1ncmV5OiAjYWFhYWFhO1xcblxcbiAgICAtLWZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xcbiAgICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNzAwO1xcbiAgICAtLWZvbnQtd2VpZ2h0LWJvbGQ6IDkwMDtcXG59XFxuXFxuLyogR2VuZXJhbCAmIHRoZW1lICovXFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBcXFwiSGVsdmV0aWNhXFxcIiwgXFxcIkFyaWFsXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcXG4gICAgbWF4LXdpZHRoOiA0MGVtO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyayk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2UtbSk7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbn1cXG5cXG5hIHtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XFxufVxcblxcbi8qIEhlYWRlciAmIEZvb3RlciAqL1xcblxcbi5oZWFkZXIgaDEge1xcbiAgICBtYXJnaW46IHZhcigtLXNwYWNlLXMpIDAgdmFyKC0tc3BhY2UtbCkgMDtcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXIgaDEgYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tc3BhY2UtbCkgKiAyKTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWxpZ2h0Z3JleSk7XFxufVxcblxcbi8qIFBvc3RzIHBhZ2UgKi9cXG5cXG4ucG9zdHNMaXN0IHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLnBvc3RzTGlzdCAucG9zdHNMaXN0X19pdGVtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnBvc3RzTGlzdCAucG9zdHNMaXN0X19pdGVtIC5wb3N0c0xpc3RfX2l0ZW1MaW5rIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utcyk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5wb3N0c0xpc3QgLnBvc3RzTGlzdF9faXRlbSAucG9zdHNMaXN0X19pdGVtTGluazpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG4ucG9zdHNMaXN0IC5wb3N0c0xpc3RfX2l0ZW0gLnBvc3RzTGlzdF9faXRlbURhdGUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLXMpO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi8qIFNpbmdsZSBQb3N0IHBhZ2UgKi9cXG5cXG4ucG9zdCBjb2RlLFxcbi5wb3N0IHByZSB7XFxuICAgIGJhY2tncm91bmQ6ICNlZWU7XFxufVxcblxcbi5wb3N0IGNvZGUge1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxufVxcblxcbi5wb3N0IHByZSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5wb3N0IGhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLWwpO1xcbn1cXG5cXG4ucG9zdCBoZWFkZXIgLnBvc3RUaXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXMpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5wb3N0IGhlYWRlciAuY3JlYXRlZERhdGUge1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0tc3BhY2UtcykpO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XFxufVxcblxcbi5wb3N0IGgyIHtcXG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1zcGFjZS1tKSArIHZhcigtLXNwYWNlLXMpKTtcXG59XFxuXFxuLnBvc3QgaHIge1xcbiAgICBtYXJnaW46IHZhcigtLXNwYWNlLWwpO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodGdyZXkpO1xcbn1cXG5cXG4vKiBjdXN0b20gcXVvdGluZyBzdHlsaW5nIGFsbG93aW5nIGZvciBuaWNlIHF1b3RlIGF1dGhvciAqL1xcbi5wb3N0IGJsb2NrcXVvdGUge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5wb3N0IGJsb2NrcXVvdGUgPiBwIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1tKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1kYXJrKTtcXG59XFxuXFxuLnBvc3QgYmxvY2txdW90ZSA+IHAgPiBlbTpsYXN0LWNoaWxkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC8qIG5lZ2F0aXZlIG1hcmdpbiB0cmljayB0byBjb3ZlciBib3JkZXIgdG8gbWFrZSBpdCB2ZXJ0aWNhbGx5IHNob3J0ZXIgKi9cXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiAodmFyKC0tc3BhY2UtbSkgKyA0cHgpKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/index.css\n");

/***/ })

})