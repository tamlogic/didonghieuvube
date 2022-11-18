"use strict";
(() => {
var exports = {};
exports.id = 814;
exports.ids = [814];
exports.modules = {

/***/ 453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/**
 * @swagger
 * /api/organization:
 *   get:
 *     tags: [Organization]
 *     responses:
 *       200:
 *         description: Organization
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 $ref: '#/components/schemas/Organization'
 */ const handler = async (_req, res)=>{
    res.status(200).json([
        {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            name: "IT Man Channel",
            parent: "Dung Huynh",
            createdAt: new Date().toUTCString(),
            updatedAt: new Date().toUTCString()
        }
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(453));
module.exports = __webpack_exports__;

})();