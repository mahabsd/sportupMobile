(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_home_modal-sheare_modal-sheare_module_ts"],{

/***/ 64583:
/*!**************************************************************************!*\
  !*** ./src/app/layouts/home/modal-sheare/modal-sheare-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalShearePageRoutingModule": () => (/* binding */ ModalShearePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _modal_sheare_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-sheare.page */ 74689);




const routes = [
    {
        path: '',
        component: _modal_sheare_page__WEBPACK_IMPORTED_MODULE_0__.ModalShearePage
    }
];
let ModalShearePageRoutingModule = class ModalShearePageRoutingModule {
};
ModalShearePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalShearePageRoutingModule);



/***/ }),

/***/ 68931:
/*!******************************************************************!*\
  !*** ./src/app/layouts/home/modal-sheare/modal-sheare.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalShearePageModule": () => (/* binding */ ModalShearePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modal_sheare_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-sheare-routing.module */ 64583);
/* harmony import */ var _modal_sheare_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-sheare.page */ 74689);







let ModalShearePageModule = class ModalShearePageModule {
};
ModalShearePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_sheare_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalShearePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_modal_sheare_page__WEBPACK_IMPORTED_MODULE_1__.ModalShearePage]
    })
], ModalShearePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_layouts_home_modal-sheare_modal-sheare_module_ts.js.map