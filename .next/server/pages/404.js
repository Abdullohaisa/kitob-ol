/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nfunction _interopRequireWildcard(obj) {\n    if (obj && obj.__esModule) {\n        return obj;\n    } else {\n        var newObj = {};\n        if (obj != null) {\n            for(var key in obj){\n                if (Object.prototype.hasOwnProperty.call(obj, key)) {\n                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};\n                    if (desc.get || desc.set) {\n                        Object.defineProperty(newObj, key, desc);\n                    } else {\n                        newObj[key] = obj[key];\n                    }\n                }\n            }\n        }\n        newObj.default = obj;\n        return newObj;\n    }\n}\nmodule.exports = {\n    locales: [\n        \"ru\",\n        \"en\",\n        \"uz\"\n    ],\n    defaultLocale: \"ru\",\n    loadLocaleFrom: (lang, ns)=>Promise.resolve().then(function() {\n            return _interopRequireWildcard(__webpack_require__(\"./src/locales sync recursive ^\\\\.\\\\/.*\\\\/.*\\\\.json$\")(`./${lang}/${ns}.json`));\n        }).then((m)=>m.default\n        )\n    ,\n    pages: {\n        \"*\": [\n            \"common\"\n        ],\n        \"/about\": [\n            \"about\"\n        ]\n    },\n    localeDetection: false\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pMThuLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQU8sR0FBRztJQUNmQyxPQUFPLEVBQUU7UUFBQyxJQUFJO1FBQUUsSUFBSTtRQUFFLElBQUk7S0FBQztJQUMzQkMsYUFBYSxFQUFFLElBQUk7SUFDbkJDLGNBQWMsRUFBRSxDQUFDQyxJQUFJLEVBQUVDLEVBQUUsR0FDdkI7c0hBQU8sR0FBVyxFQUFFRCxJQUFJLENBQUMsQ0FBQyxFQUFFQyxFQUFFLENBQUMsTUFBTSxDQUFDO1VBQUEsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLENBQUMsR0FBS0EsQ0FBQyxDQUFDQyxPQUFPO1FBQUEsQ0FBQztJQUFBO0lBQy9EQyxLQUFLLEVBQUU7UUFDTCxHQUFHLEVBQUU7WUFBQyxRQUFRO1NBQUM7UUFDZixRQUFRLEVBQUU7WUFBQyxPQUFPO1NBQUM7S0FDcEI7SUFDREMsZUFBZSxFQUFFLEtBQUs7Q0FDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfdGVtcGxhdGVfZnJvbnRlbmQvLi9pMThuLmpzPzkzOGIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGxvY2FsZXM6IFsncnUnLCAnZW4nLCAndXonXSxcbiAgZGVmYXVsdExvY2FsZTogJ3J1JyxcbiAgbG9hZExvY2FsZUZyb206IChsYW5nLCBucykgPT5cbiAgICBpbXBvcnQoYEAvbG9jYWxlcy8ke2xhbmd9LyR7bnN9Lmpzb25gKS50aGVuKChtKSA9PiBtLmRlZmF1bHQpLFxuICBwYWdlczoge1xuICAgICcqJzogWydjb21tb24nXSxcbiAgICAnL2Fib3V0JzogWydhYm91dCddXG4gIH0sXG4gIGxvY2FsZURldGVjdGlvbjogZmFsc2Vcbn1cbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJsb2FkTG9jYWxlRnJvbSIsImxhbmciLCJucyIsInRoZW4iLCJtIiwiZGVmYXVsdCIsInBhZ2VzIiwibG9jYWxlRGV0ZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Custom404),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ \"./i18n.js\");\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/loadNamespaces */ \"next-translate/loadNamespaces\");\n/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Custom404() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"404 - Page Not Found\"\n    }, void 0, false, {\n        fileName: \"/Users/macpro/Desktop/kitob_ol/src/pages/404.js\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n};\nasync function getStaticProps(ctx) {\n    return {\n        props: {\n            ...await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()({\n                ...ctx,\n                pathname: \"/404\",\n                loaderName: \"getStaticProps\",\n                ...(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___default())\n            })\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvNDA0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0k7QUFBb0Q7QUFDUTtBQUVqRCxTQUFTRSxTQUFTLEdBQUc7SUFDbEMscUJBQU8sOERBQUNDLElBQUU7a0JBQUMsc0JBQW9COzs7OztZQUFLO0NBQ3JDO0FBR1UsZUFBZUMsY0FBYyxDQUFDQyxHQUFHLEVBQUU7SUFHdEMsT0FBTztRQUdMQyxLQUFLLEVBQUU7WUFFTCxHQUFJLE1BQU1MLG9FQUFnQixDQUFDO2dCQUN6QixHQUFHSSxHQUFHO2dCQUNORSxRQUFRLEVBQUUsTUFBTTtnQkFDaEJDLFVBQVUsRUFBRSxnQkFBZ0I7Z0JBQzVCLEdBQUdSLGtFQUFZO2FBRWhCLENBQUM7U0FDSDtLQUNGO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfdGVtcGxhdGVfZnJvbnRlbmQvLi9zcmMvcGFnZXMvNDA0LmpzPzc1ODciXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IF9faTE4bkNvbmZpZyBmcm9tICdAbmV4dC10cmFuc2xhdGUtcm9vdC9pMThuJ1xuICAgIGltcG9ydCBfX2xvYWROYW1lc3BhY2VzIGZyb20gJ25leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzJ1xuICAgIFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tNDA0KCkge1xuICByZXR1cm4gPGgxPjQwNCAtIFBhZ2UgTm90IEZvdW5kPC9oMT5cbn1cblxuXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLi4uKGF3YWl0IF9fbG9hZE5hbWVzcGFjZXMoe1xuICAgICAgICAgICAgICAuLi5jdHgsXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnLzQwNCcsXG4gICAgICAgICAgICAgIGxvYWRlck5hbWU6ICdnZXRTdGF0aWNQcm9wcycsXG4gICAgICAgICAgICAgIC4uLl9faTE4bkNvbmZpZyxcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICJdLCJuYW1lcyI6WyJfX2kxOG5Db25maWciLCJfX2xvYWROYW1lc3BhY2VzIiwiQ3VzdG9tNDA0IiwiaDEiLCJnZXRTdGF0aWNQcm9wcyIsImN0eCIsInByb3BzIiwicGF0aG5hbWUiLCJsb2FkZXJOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/404.js\n");

/***/ }),

/***/ "./src/locales sync recursive ^\\.\\/.*\\/.*\\.json$":
/*!**********************************************!*\
  !*** ./src/locales/ sync ^\.\/.*\/.*\.json$ ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/about.json": "./src/locales/en/about.json",
	"./en/common.json": "./src/locales/en/common.json",
	"./ru/about.json": "./src/locales/ru/about.json",
	"./ru/common.json": "./src/locales/ru/common.json",
	"./uz/about.json": "./src/locales/uz/about.json",
	"./uz/common.json": "./src/locales/uz/common.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/locales sync recursive ^\\.\\/.*\\/.*\\.json$";

/***/ }),

/***/ "next-translate/loadNamespaces":
/*!************************************************!*\
  !*** external "next-translate/loadNamespaces" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/loadNamespaces");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./src/locales/en/about.json":
/*!***********************************!*\
  !*** ./src/locales/en/about.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = {"about":"About"};

/***/ }),

/***/ "./src/locales/en/common.json":
/*!************************************!*\
  !*** ./src/locales/en/common.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"greeting":"Hello world","home":"Home","blog":"Blog","about":"About"}');

/***/ }),

/***/ "./src/locales/ru/about.json":
/*!***********************************!*\
  !*** ./src/locales/ru/about.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = {"about":"О нас"};

/***/ }),

/***/ "./src/locales/ru/common.json":
/*!************************************!*\
  !*** ./src/locales/ru/common.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"greeting":"Привет, мир","home":"Главная","blog":"Блог","about":"О нас"}');

/***/ }),

/***/ "./src/locales/uz/about.json":
/*!***********************************!*\
  !*** ./src/locales/uz/about.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"about":"Biz haqimizda"}');

/***/ }),

/***/ "./src/locales/uz/common.json":
/*!************************************!*\
  !*** ./src/locales/uz/common.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"greeting":"Salom Dunyo","home":"Asosiy sahifa","blog":"Blog","about":"Biz haqimizda"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/404.js"));
module.exports = __webpack_exports__;

})();