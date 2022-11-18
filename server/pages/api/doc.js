"use strict";
(() => {
var exports = {};
exports.id = 700;
exports.ids = [700];
exports.modules = {

/***/ 622:
/***/ ((module) => {

module.exports = import("next-swagger-doc");;

/***/ }),

/***/ 12:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_swagger_doc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(622);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_swagger_doc__WEBPACK_IMPORTED_MODULE_0__]);
next_swagger_doc__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const swaggerHandler = (0,next_swagger_doc__WEBPACK_IMPORTED_MODULE_0__.withSwagger)({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Next Swagger API Example",
            version: "0.1.0"
        }
    },
    schemaFolders: [
        "models"
    ]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swaggerHandler());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(12));
module.exports = __webpack_exports__;

})();