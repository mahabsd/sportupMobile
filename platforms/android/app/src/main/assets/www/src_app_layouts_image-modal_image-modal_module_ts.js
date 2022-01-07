(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_image-modal_image-modal_module_ts"],{

/***/ 6121:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/image-modal/image-modal-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageModalPageRoutingModule": () => (/* binding */ ImageModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _image_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-modal.page */ 6931);




const routes = [
    {
        path: '',
        component: _image_modal_page__WEBPACK_IMPORTED_MODULE_0__.ImageModalPage
    }
];
let ImageModalPageRoutingModule = class ImageModalPageRoutingModule {
};
ImageModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImageModalPageRoutingModule);



/***/ }),

/***/ 12790:
/*!***********************************************************!*\
  !*** ./src/app/layouts/image-modal/image-modal.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageModalPageModule": () => (/* binding */ ImageModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _image_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-modal-routing.module */ 6121);
/* harmony import */ var _image_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-modal.page */ 6931);







let ImageModalPageModule = class ImageModalPageModule {
};
ImageModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _image_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImageModalPageRoutingModule
        ],
        declarations: [_image_modal_page__WEBPACK_IMPORTED_MODULE_1__.ImageModalPage]
    })
], ImageModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_layouts_image-modal_image-modal_module_ts.js.map