webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/index.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/index.css ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* Super awesome: https://jgthms.com/web-design-in-4-minutes */\\n\\n:root {\\n    --space-s: .5rem;\\n    --space-m: 1rem;\\n    --space-l: 2rem;\\n\\n    --color-primary: #023047;\\n    --color-secondary: #219EBC;\\n    --color-tertiary: #8ECAE6;\\n    --color-4: #FFB703;\\n    --color-5: #FB8500;\\n    --color-dark: #444444;\\n    --color-white: #ffffff;\\n    --color-lightgrey: #e1e1e1;\\n    --color-grey: #aaaaaa;\\n\\n    --font-weight-normal: 400;\\n    --font-weight-medium: 700;\\n    --font-weight-bold: 900;\\n}\\n\\n/* General & theme */\\n\\nhtml {\\n    font-size: 16px;\\n    font-family: \\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif;\\n}\\n\\nbody {\\n    margin: 0 auto;\\n    padding: 1.5rem 1rem;\\n    max-width: 40em;\\n    color: var(--color-dark);\\n    line-height: 1.5;\\n}\\n\\nh2 {\\n    margin-top: var(--space-m);\\n}\\n\\nh1,\\nh2 {\\n    color: var(--color-primary);\\n}\\n\\na {\\n    color: var(--color-secondary);\\n}\\n\\n/* Header & Footer */\\n\\n.header h1 {\\n    margin: var(--space-s) 0 var(--space-l) 0;\\n    font-size: 1.8em;\\n    font-weight: var(--font-weight-bold);\\n    letter-spacing: 2px;\\n    cursor: pointer;\\n}\\n\\n.header h1 a {\\n    color: var(--color-tertiary);\\n    font-size: 2rem;\\n}\\n\\n.footer {\\n    margin-top: -webkit-calc(var(--space-l) * 2);\\n    margin-top: -moz-calc(var(--space-l) * 2);\\n    margin-top: calc(var(--space-l) * 2);\\n    border-top: 1px solid var(--color-lightgrey);\\n}\\n\\n/* Posts page */\\n\\n.postsList {\\n    margin: 0 auto;\\n    padding: 0;\\n    list-style-type: none;\\n}\\n\\n.postsList .postsList__item {\\n    margin-bottom: 40px;\\n    display: -moz-box;\\n    display: flex;\\n    -moz-box-orient: vertical;\\n    -moz-box-direction: normal;\\n         flex-direction: column;\\n}\\n\\n.postsList .postsList__item .postsList__itemLink {\\n    margin-bottom: var(--space-s);\\n    font-size: 1.5rem;\\n    font-weight: var(--font-weight-medium);\\n    color: var(--color-primary);\\n    text-decoration: none;\\n}\\n\\n.postsList .postsList__item .postsList__itemLink:hover {\\n    color: var(--color-secondary);\\n}\\n\\n.postsList .postsList__item .postsList__itemDate {\\n    padding-left: var(--space-s);\\n    color: var(--color-grey);\\n    font-style: italic;\\n    font-size: 0.8rem;\\n}\\n\\n/* Single Post page */\\n\\n.post code,\\n.post pre {\\n    background: #eee;\\n}\\n\\n.post code {\\n    padding: 2px 4px;\\n    vertical-align: text-bottom;\\n}\\n\\n.post pre {\\n    padding: 1rem;\\n}\\n\\n.post header .postTitle {\\n    margin-bottom: var(--space-s);\\n    font-size: 2rem;\\n}\\n\\n.post header .createdDate {\\n    margin-top: 0;\\n    font-size: 0.875rem;\\n}\\n\\n.post h2 {\\n    margin-top: -webkit-calc(var(--space-m) + var(--space-s));\\n    margin-top: -moz-calc(var(--space-m) + var(--space-s));\\n    margin-top: calc(var(--space-m) + var(--space-s));\\n}\\n\\n.post hr {\\n    margin: var(--space-l);\\n    height: 1px;\\n    border: 0;\\n    background-color: var(--color-lightgrey);\\n}\\n\\n/* custom quoting styling allowing for nice quote author */\\n.post blockquote {\\n    margin-left: 0;\\n    font-size: 1.2rem;\\n}\\n\\n.post blockquote > p {\\n    padding-left: var(--space-m);\\n    border-left: 4px solid var(--color-dark);\\n}\\n\\n.post blockquote > p > em:last-child {\\n    display: block;\\n    /* negative margin trick to cover border to make it vertically shorter */\\n    margin-left: -webkit-calc(-1 * (var(--space-m) + 4px));\\n    margin-left: -moz-calc(-1 * (var(--space-m) + 4px));\\n    margin-left: calc(-1 * (var(--space-m) + 4px));\\n    border-left: 4px solid var(--color-white);\\n    text-align: end;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/index.css\"],\"names\":[],\"mappings\":\"AAAA,8DAA8D;;AAI9D;IACI,gBAAgB;IAChB,eAAe;IACf,eAAe;;IAEf,wBAAwB;IACxB,0BAA0B;IAC1B,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,sBAAsB;IACtB,0BAA0B;IAC1B,qBAAqB;;IAErB,yBAAyB;IACzB,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA,oBAAoB;;AAEpB;IACI,eAAe;IACf,uDAAuD;AAC3D;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,6BAA6B;AACjC;;AAEA,oBAAoB;;AAEpB;IACI,yCAAyC;IACzC,gBAAgB;IAChB,oCAAoC;IACpC,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,4CAAoC;IAApC,yCAAoC;IAApC,oCAAoC;IACpC,4CAA4C;AAChD;;AAEA,eAAe;;AAEf;IACI,cAAc;IACd,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,iBAAa;IAAb,aAAa;IACb,yBAAsB;IAAtB,0BAAsB;SAAtB,sBAAsB;AAC1B;;AAEA;IACI,6BAA6B;IAC7B,iBAAiB;IACjB,sCAAsC;IACtC,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,4BAA4B;IAC5B,wBAAwB;IACxB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA,qBAAqB;;AAErB;;IAEI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,yDAAiD;IAAjD,sDAAiD;IAAjD,iDAAiD;AACrD;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,SAAS;IACT,wCAAwC;AAC5C;;AAEA,0DAA0D;AAC1D;IACI,cAAc;IACd,iBAAiB;AACrB;;AAEA;IACI,4BAA4B;IAC5B,wCAAwC;AAC5C;;AAEA;IACI,cAAc;IACd,wEAAwE;IACxE,sDAA8C;IAA9C,mDAA8C;IAA9C,8CAA8C;IAC9C,yCAAyC;IACzC,eAAe;AACnB\",\"sourcesContent\":[\"/* Super awesome: https://jgthms.com/web-design-in-4-minutes */\\n\\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');\\n\\n:root {\\n    --space-s: .5rem;\\n    --space-m: 1rem;\\n    --space-l: 2rem;\\n\\n    --color-primary: #023047;\\n    --color-secondary: #219EBC;\\n    --color-tertiary: #8ECAE6;\\n    --color-4: #FFB703;\\n    --color-5: #FB8500;\\n    --color-dark: #444444;\\n    --color-white: #ffffff;\\n    --color-lightgrey: #e1e1e1;\\n    --color-grey: #aaaaaa;\\n\\n    --font-weight-normal: 400;\\n    --font-weight-medium: 700;\\n    --font-weight-bold: 900;\\n}\\n\\n/* General & theme */\\n\\nhtml {\\n    font-size: 16px;\\n    font-family: \\\"Roboto\\\", \\\"Helvetica\\\", \\\"Arial\\\", sans-serif;\\n}\\n\\nbody {\\n    margin: 0 auto;\\n    padding: 1.5rem 1rem;\\n    max-width: 40em;\\n    color: var(--color-dark);\\n    line-height: 1.5;\\n}\\n\\nh2 {\\n    margin-top: var(--space-m);\\n}\\n\\nh1,\\nh2 {\\n    color: var(--color-primary);\\n}\\n\\na {\\n    color: var(--color-secondary);\\n}\\n\\n/* Header & Footer */\\n\\n.header h1 {\\n    margin: var(--space-s) 0 var(--space-l) 0;\\n    font-size: 1.8em;\\n    font-weight: var(--font-weight-bold);\\n    letter-spacing: 2px;\\n    cursor: pointer;\\n}\\n\\n.header h1 a {\\n    color: var(--color-tertiary);\\n    font-size: 2rem;\\n}\\n\\n.footer {\\n    margin-top: calc(var(--space-l) * 2);\\n    border-top: 1px solid var(--color-lightgrey);\\n}\\n\\n/* Posts page */\\n\\n.postsList {\\n    margin: 0 auto;\\n    padding: 0;\\n    list-style-type: none;\\n}\\n\\n.postsList .postsList__item {\\n    margin-bottom: 40px;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.postsList .postsList__item .postsList__itemLink {\\n    margin-bottom: var(--space-s);\\n    font-size: 1.5rem;\\n    font-weight: var(--font-weight-medium);\\n    color: var(--color-primary);\\n    text-decoration: none;\\n}\\n\\n.postsList .postsList__item .postsList__itemLink:hover {\\n    color: var(--color-secondary);\\n}\\n\\n.postsList .postsList__item .postsList__itemDate {\\n    padding-left: var(--space-s);\\n    color: var(--color-grey);\\n    font-style: italic;\\n    font-size: 0.8rem;\\n}\\n\\n/* Single Post page */\\n\\n.post code,\\n.post pre {\\n    background: #eee;\\n}\\n\\n.post code {\\n    padding: 2px 4px;\\n    vertical-align: text-bottom;\\n}\\n\\n.post pre {\\n    padding: 1rem;\\n}\\n\\n.post header .postTitle {\\n    margin-bottom: var(--space-s);\\n    font-size: 2rem;\\n}\\n\\n.post header .createdDate {\\n    margin-top: 0;\\n    font-size: 0.875rem;\\n}\\n\\n.post h2 {\\n    margin-top: calc(var(--space-m) + var(--space-s));\\n}\\n\\n.post hr {\\n    margin: var(--space-l);\\n    height: 1px;\\n    border: 0;\\n    background-color: var(--color-lightgrey);\\n}\\n\\n/* custom quoting styling allowing for nice quote author */\\n.post blockquote {\\n    margin-left: 0;\\n    font-size: 1.2rem;\\n}\\n\\n.post blockquote > p {\\n    padding-left: var(--space-m);\\n    border-left: 4px solid var(--color-dark);\\n}\\n\\n.post blockquote > p > em:last-child {\\n    display: block;\\n    /* negative margin trick to cover border to make it vertically shorter */\\n    margin-left: calc(-1 * (var(--space-m) + 4px));\\n    border-left: 4px solid var(--color-white);\\n    text-align: end;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2luZGV4LmNzcz85ZmQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ3pGLDhCQUE4QixtRkFBMkI7QUFDekQsOEJBQThCLFFBQVMsd0VBQXdFLElBQUksa0JBQWtCO0FBQ3JJO0FBQ0EsOEJBQThCLFFBQVMsNkVBQTZFLHVCQUF1QixzQkFBc0Isc0JBQXNCLGlDQUFpQyxpQ0FBaUMsZ0NBQWdDLHlCQUF5Qix5QkFBeUIsNEJBQTRCLDZCQUE2QixpQ0FBaUMsNEJBQTRCLGtDQUFrQyxnQ0FBZ0MsOEJBQThCLEdBQUcsbUNBQW1DLHNCQUFzQixvRUFBb0UsR0FBRyxVQUFVLHFCQUFxQiwyQkFBMkIsc0JBQXNCLCtCQUErQix1QkFBdUIsR0FBRyxRQUFRLGlDQUFpQyxHQUFHLGFBQWEsa0NBQWtDLEdBQUcsT0FBTyxvQ0FBb0MsR0FBRyx5Q0FBeUMsZ0RBQWdELHVCQUF1QiwyQ0FBMkMsMEJBQTBCLHNCQUFzQixHQUFHLGtCQUFrQixtQ0FBbUMsc0JBQXNCLEdBQUcsYUFBYSxtREFBbUQsZ0RBQWdELDJDQUEyQyxtREFBbUQsR0FBRyxvQ0FBb0MscUJBQXFCLGlCQUFpQiw0QkFBNEIsR0FBRyxpQ0FBaUMsMEJBQTBCLHdCQUF3QixvQkFBb0IsZ0NBQWdDLGlDQUFpQyxrQ0FBa0MsR0FBRyxzREFBc0Qsb0NBQW9DLHdCQUF3Qiw2Q0FBNkMsa0NBQWtDLDRCQUE0QixHQUFHLDREQUE0RCxvQ0FBb0MsR0FBRyxzREFBc0QsbUNBQW1DLCtCQUErQix5QkFBeUIsd0JBQXdCLEdBQUcsc0RBQXNELHVCQUF1QixHQUFHLGdCQUFnQix1QkFBdUIsa0NBQWtDLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyw2QkFBNkIsb0NBQW9DLHNCQUFzQixHQUFHLCtCQUErQixvQkFBb0IsMEJBQTBCLEdBQUcsY0FBYyxnRUFBZ0UsNkRBQTZELHdEQUF3RCxHQUFHLGNBQWMsNkJBQTZCLGtCQUFrQixnQkFBZ0IsK0NBQStDLEdBQUcsbUZBQW1GLHFCQUFxQix3QkFBd0IsR0FBRywwQkFBMEIsbUNBQW1DLCtDQUErQyxHQUFHLDBDQUEwQyxxQkFBcUIsNElBQTRJLDBEQUEwRCxxREFBcUQsZ0RBQWdELHNCQUFzQixHQUFHLFNBQVMseUZBQXlGLE1BQU0sWUFBWSxXQUFXLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsbUtBQW1LLElBQUksbUJBQW1CLFdBQVcsdUJBQXVCLHNCQUFzQixzQkFBc0IsaUNBQWlDLGlDQUFpQyxnQ0FBZ0MseUJBQXlCLHlCQUF5Qiw0QkFBNEIsNkJBQTZCLGlDQUFpQyw0QkFBNEIsa0NBQWtDLGdDQUFnQyw4QkFBOEIsR0FBRyxtQ0FBbUMsc0JBQXNCLG9FQUFvRSxHQUFHLFVBQVUscUJBQXFCLDJCQUEyQixzQkFBc0IsK0JBQStCLHVCQUF1QixHQUFHLFFBQVEsaUNBQWlDLEdBQUcsYUFBYSxrQ0FBa0MsR0FBRyxPQUFPLG9DQUFvQyxHQUFHLHlDQUF5QyxnREFBZ0QsdUJBQXVCLDJDQUEyQywwQkFBMEIsc0JBQXNCLEdBQUcsa0JBQWtCLG1DQUFtQyxzQkFBc0IsR0FBRyxhQUFhLDJDQUEyQyxtREFBbUQsR0FBRyxvQ0FBb0MscUJBQXFCLGlCQUFpQiw0QkFBNEIsR0FBRyxpQ0FBaUMsMEJBQTBCLG9CQUFvQiw2QkFBNkIsR0FBRyxzREFBc0Qsb0NBQW9DLHdCQUF3Qiw2Q0FBNkMsa0NBQWtDLDRCQUE0QixHQUFHLDREQUE0RCxvQ0FBb0MsR0FBRyxzREFBc0QsbUNBQW1DLCtCQUErQix5QkFBeUIsd0JBQXdCLEdBQUcsc0RBQXNELHVCQUF1QixHQUFHLGdCQUFnQix1QkFBdUIsa0NBQWtDLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyw2QkFBNkIsb0NBQW9DLHNCQUFzQixHQUFHLCtCQUErQixvQkFBb0IsMEJBQTBCLEdBQUcsY0FBYyx3REFBd0QsR0FBRyxjQUFjLDZCQUE2QixrQkFBa0IsZ0JBQWdCLCtDQUErQyxHQUFHLG1GQUFtRixxQkFBcUIsd0JBQXdCLEdBQUcsMEJBQTBCLG1DQUFtQywrQ0FBK0MsR0FBRywwQ0FBMEMscUJBQXFCLG9JQUFvSSxnREFBZ0Qsc0JBQXNCLEdBQUcscUJBQXFCO0FBQ3ZpUTtBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9zdHlsZXMvaW5kZXguY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogU3VwZXIgYXdlc29tZTogaHR0cHM6Ly9qZ3RobXMuY29tL3dlYi1kZXNpZ24taW4tNC1taW51dGVzICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLXNwYWNlLXM6IC41cmVtO1xcbiAgICAtLXNwYWNlLW06IDFyZW07XFxuICAgIC0tc3BhY2UtbDogMnJlbTtcXG5cXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjMDIzMDQ3O1xcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogIzIxOUVCQztcXG4gICAgLS1jb2xvci10ZXJ0aWFyeTogIzhFQ0FFNjtcXG4gICAgLS1jb2xvci00OiAjRkZCNzAzO1xcbiAgICAtLWNvbG9yLTU6ICNGQjg1MDA7XFxuICAgIC0tY29sb3ItZGFyazogIzQ0NDQ0NDtcXG4gICAgLS1jb2xvci13aGl0ZTogI2ZmZmZmZjtcXG4gICAgLS1jb2xvci1saWdodGdyZXk6ICNlMWUxZTE7XFxuICAgIC0tY29sb3ItZ3JleTogI2FhYWFhYTtcXG5cXG4gICAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gICAgLS1mb250LXdlaWdodC1tZWRpdW06IDcwMDtcXG4gICAgLS1mb250LXdlaWdodC1ib2xkOiA5MDA7XFxufVxcblxcbi8qIEdlbmVyYWwgJiB0aGVtZSAqL1xcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgXFxcIkhlbHZldGljYVxcXCIsIFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMS41cmVtIDFyZW07XFxuICAgIG1heC13aWR0aDogNDBlbTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5oMiB7XFxuICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLW0pO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG4vKiBIZWFkZXIgJiBGb290ZXIgKi9cXG5cXG4uaGVhZGVyIGgxIHtcXG4gICAgbWFyZ2luOiB2YXIoLS1zcGFjZS1zKSAwIHZhcigtLXNwYWNlLWwpIDA7XFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyIGgxIGEge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiAtd2Via2l0LWNhbGModmFyKC0tc3BhY2UtbCkgKiAyKTtcXG4gICAgbWFyZ2luLXRvcDogLW1vei1jYWxjKHZhcigtLXNwYWNlLWwpICogMik7XFxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tc3BhY2UtbCkgKiAyKTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWxpZ2h0Z3JleSk7XFxufVxcblxcbi8qIFBvc3RzIHBhZ2UgKi9cXG5cXG4ucG9zdHNMaXN0IHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLnBvc3RzTGlzdCAucG9zdHNMaXN0X19pdGVtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgZGlzcGxheTogLW1vei1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wb3N0c0xpc3QgLnBvc3RzTGlzdF9faXRlbSAucG9zdHNMaXN0X19pdGVtTGluayB7XFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXMpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ucG9zdHNMaXN0IC5wb3N0c0xpc3RfX2l0ZW0gLnBvc3RzTGlzdF9faXRlbUxpbms6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLnBvc3RzTGlzdCAucG9zdHNMaXN0X19pdGVtIC5wb3N0c0xpc3RfX2l0ZW1EYXRlIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1zKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4vKiBTaW5nbGUgUG9zdCBwYWdlICovXFxuXFxuLnBvc3QgY29kZSxcXG4ucG9zdCBwcmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbn1cXG5cXG4ucG9zdCBjb2RlIHtcXG4gICAgcGFkZGluZzogMnB4IDRweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbn1cXG5cXG4ucG9zdCBwcmUge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucG9zdCBoZWFkZXIgLnBvc3RUaXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXMpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5wb3N0IGhlYWRlciAuY3JlYXRlZERhdGUge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG5cXG4ucG9zdCBoMiB7XFxuICAgIG1hcmdpbi10b3A6IC13ZWJraXQtY2FsYyh2YXIoLS1zcGFjZS1tKSArIHZhcigtLXNwYWNlLXMpKTtcXG4gICAgbWFyZ2luLXRvcDogLW1vei1jYWxjKHZhcigtLXNwYWNlLW0pICsgdmFyKC0tc3BhY2UtcykpO1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNwYWNlLW0pICsgdmFyKC0tc3BhY2UtcykpO1xcbn1cXG5cXG4ucG9zdCBociB7XFxuICAgIG1hcmdpbjogdmFyKC0tc3BhY2UtbCk7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0Z3JleSk7XFxufVxcblxcbi8qIGN1c3RvbSBxdW90aW5nIHN0eWxpbmcgYWxsb3dpbmcgZm9yIG5pY2UgcXVvdGUgYXV0aG9yICovXFxuLnBvc3QgYmxvY2txdW90ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnBvc3QgYmxvY2txdW90ZSA+IHAge1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLW0pO1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWNvbG9yLWRhcmspO1xcbn1cXG5cXG4ucG9zdCBibG9ja3F1b3RlID4gcCA+IGVtOmxhc3QtY2hpbGQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLyogbmVnYXRpdmUgbWFyZ2luIHRyaWNrIHRvIGNvdmVyIGJvcmRlciB0byBtYWtlIGl0IHZlcnRpY2FsbHkgc2hvcnRlciAqL1xcbiAgICBtYXJnaW4tbGVmdDogLXdlYmtpdC1jYWxjKC0xICogKHZhcigtLXNwYWNlLW0pICsgNHB4KSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAtbW96LWNhbGMoLTEgKiAodmFyKC0tc3BhY2UtbSkgKyA0cHgpKTtcXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiAodmFyKC0tc3BhY2UtbSkgKyA0cHgpKTtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOERBQThEOztBQUk5RDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTs7SUFFZix3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLHFCQUFxQjs7SUFFckIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLGVBQWU7SUFDZix1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDRDQUFvQztJQUFwQyx5Q0FBb0M7SUFBcEMsb0NBQW9DO0lBQ3BDLDRDQUE0QztBQUNoRDs7QUFFQSxlQUFlOztBQUVmO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWE7SUFBYixhQUFhO0lBQ2IseUJBQXNCO0lBQXRCLDBCQUFzQjtTQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLHNDQUFzQztJQUN0QywyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBLHFCQUFxQjs7QUFFckI7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5REFBaUQ7SUFBakQsc0RBQWlEO0lBQWpELGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsU0FBUztJQUNULHdDQUF3QztBQUM1Qzs7QUFFQSwwREFBMEQ7QUFDMUQ7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3RUFBd0U7SUFDeEUsc0RBQThDO0lBQTlDLG1EQUE4QztJQUE5Qyw4Q0FBOEM7SUFDOUMseUNBQXlDO0lBQ3pDLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogU3VwZXIgYXdlc29tZTogaHR0cHM6Ly9qZ3RobXMuY29tL3dlYi1kZXNpZ24taW4tNC1taW51dGVzICovXFxuXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXNwYWNlLXM6IC41cmVtO1xcbiAgICAtLXNwYWNlLW06IDFyZW07XFxuICAgIC0tc3BhY2UtbDogMnJlbTtcXG5cXG4gICAgLS1jb2xvci1wcmltYXJ5OiAjMDIzMDQ3O1xcbiAgICAtLWNvbG9yLXNlY29uZGFyeTogIzIxOUVCQztcXG4gICAgLS1jb2xvci10ZXJ0aWFyeTogIzhFQ0FFNjtcXG4gICAgLS1jb2xvci00OiAjRkZCNzAzO1xcbiAgICAtLWNvbG9yLTU6ICNGQjg1MDA7XFxuICAgIC0tY29sb3ItZGFyazogIzQ0NDQ0NDtcXG4gICAgLS1jb2xvci13aGl0ZTogI2ZmZmZmZjtcXG4gICAgLS1jb2xvci1saWdodGdyZXk6ICNlMWUxZTE7XFxuICAgIC0tY29sb3ItZ3JleTogI2FhYWFhYTtcXG5cXG4gICAgLS1mb250LXdlaWdodC1ub3JtYWw6IDQwMDtcXG4gICAgLS1mb250LXdlaWdodC1tZWRpdW06IDcwMDtcXG4gICAgLS1mb250LXdlaWdodC1ib2xkOiA5MDA7XFxufVxcblxcbi8qIEdlbmVyYWwgJiB0aGVtZSAqL1xcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgXFxcIkhlbHZldGljYVxcXCIsIFxcXCJBcmlhbFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMS41cmVtIDFyZW07XFxuICAgIG1heC13aWR0aDogNDBlbTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5oMiB7XFxuICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLW0pO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG59XFxuXFxuYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xcbn1cXG5cXG4vKiBIZWFkZXIgJiBGb290ZXIgKi9cXG5cXG4uaGVhZGVyIGgxIHtcXG4gICAgbWFyZ2luOiB2YXIoLS1zcGFjZS1zKSAwIHZhcigtLXNwYWNlLWwpIDA7XFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyIGgxIGEge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGVydGlhcnkpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXNwYWNlLWwpICogMik7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1saWdodGdyZXkpO1xcbn1cXG5cXG4vKiBQb3N0cyBwYWdlICovXFxuXFxuLnBvc3RzTGlzdCB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5wb3N0c0xpc3QgLnBvc3RzTGlzdF9faXRlbSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wb3N0c0xpc3QgLnBvc3RzTGlzdF9faXRlbSAucG9zdHNMaXN0X19pdGVtTGluayB7XFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXMpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ucG9zdHNMaXN0IC5wb3N0c0xpc3RfX2l0ZW0gLnBvc3RzTGlzdF9faXRlbUxpbms6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcXG59XFxuXFxuLnBvc3RzTGlzdCAucG9zdHNMaXN0X19pdGVtIC5wb3N0c0xpc3RfX2l0ZW1EYXRlIHtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1zKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4vKiBTaW5nbGUgUG9zdCBwYWdlICovXFxuXFxuLnBvc3QgY29kZSxcXG4ucG9zdCBwcmUge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbn1cXG5cXG4ucG9zdCBjb2RlIHtcXG4gICAgcGFkZGluZzogMnB4IDRweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbn1cXG5cXG4ucG9zdCBwcmUge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucG9zdCBoZWFkZXIgLnBvc3RUaXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLXMpO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5wb3N0IGhlYWRlciAuY3JlYXRlZERhdGUge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG5cXG4ucG9zdCBoMiB7XFxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tc3BhY2UtbSkgKyB2YXIoLS1zcGFjZS1zKSk7XFxufVxcblxcbi5wb3N0IGhyIHtcXG4gICAgbWFyZ2luOiB2YXIoLS1zcGFjZS1sKTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHRncmV5KTtcXG59XFxuXFxuLyogY3VzdG9tIHF1b3Rpbmcgc3R5bGluZyBhbGxvd2luZyBmb3IgbmljZSBxdW90ZSBhdXRob3IgKi9cXG4ucG9zdCBibG9ja3F1b3RlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4ucG9zdCBibG9ja3F1b3RlID4gcCB7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3BhY2UtbSk7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tY29sb3ItZGFyayk7XFxufVxcblxcbi5wb3N0IGJsb2NrcXVvdGUgPiBwID4gZW06bGFzdC1jaGlsZCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAvKiBuZWdhdGl2ZSBtYXJnaW4gdHJpY2sgdG8gY292ZXIgYm9yZGVyIHRvIG1ha2UgaXQgdmVydGljYWxseSBzaG9ydGVyICovXFxuICAgIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogKHZhcigtLXNwYWNlLW0pICsgNHB4KSk7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/index.css\n");

/***/ })

})