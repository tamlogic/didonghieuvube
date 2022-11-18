(() => {
var exports = {};
exports.id = 764;
exports.ids = [764];
exports.modules = {

/***/ 480:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_swagger_doc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(622);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swagger_ui_react_swagger_ui_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var swagger_ui_react_swagger_ui_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swagger_ui_react_swagger_ui_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_swagger_doc__WEBPACK_IMPORTED_MODULE_1__]);
next_swagger_doc__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const SwaggerUI = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 293, 23)), {
    loadableGenerated: {
        modules: [
            "api-doc.tsx -> " + "swagger-ui-react"
        ]
    },
    ssr: false
});
function ApiDoc({ spec  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SwaggerUI, {
        spec: spec
    });
}
const getStaticProps = async ()=>{
    const spec = (0,next_swagger_doc__WEBPACK_IMPORTED_MODULE_1__.createSwaggerSpec)({
        apiFolder: "pages/api",
        schemaFolders: [
            "models"
        ],
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Next Swagger API Example",
                version: "1.0"
            }
        }
    });
    return {
        props: {
            spec
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiDoc);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8:
/***/ (() => {



/***/ }),

/***/ 832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 293:
/***/ ((module) => {

"use strict";
module.exports = require("swagger-ui-react");

/***/ }),

/***/ 622:
/***/ ((module) => {

"use strict";
module.exports = import("next-swagger-doc");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(480)));
module.exports = __webpack_exports__;

})();