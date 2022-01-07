(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_scan_mesures_mesures_module_ts"],{

/***/ 65279:
/*!****************************************************************!*\
  !*** ./src/app/layouts/scan/mesures/mesures-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesuresPageRoutingModule": () => (/* binding */ MesuresPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _mesures_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mesures.page */ 93266);




const routes = [
    {
        path: '',
        component: _mesures_page__WEBPACK_IMPORTED_MODULE_0__.MesuresPage
    }
];
let MesuresPageRoutingModule = class MesuresPageRoutingModule {
};
MesuresPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MesuresPageRoutingModule);



/***/ }),

/***/ 95783:
/*!********************************************************!*\
  !*** ./src/app/layouts/scan/mesures/mesures.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MesuresPageModule": () => (/* binding */ MesuresPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _mesures_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mesures-routing.module */ 65279);
/* harmony import */ var _mesures_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mesures.page */ 93266);







let MesuresPageModule = class MesuresPageModule {
};
MesuresPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mesures_routing_module__WEBPACK_IMPORTED_MODULE_0__.MesuresPageRoutingModule
        ],
        declarations: [_mesures_page__WEBPACK_IMPORTED_MODULE_1__.MesuresPage]
    })
], MesuresPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_layouts_scan_mesures_mesures_module_ts.js.map