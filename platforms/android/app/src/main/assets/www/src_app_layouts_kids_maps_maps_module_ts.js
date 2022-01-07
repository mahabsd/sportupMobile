(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_kids_maps_maps_module_ts"],{

/***/ 75017:
/*!**********************************************************!*\
  !*** ./src/app/layouts/kids/maps/maps-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsPageRoutingModule": () => (/* binding */ MapsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _maps_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps.page */ 46034);




const routes = [
    {
        path: '',
        component: _maps_page__WEBPACK_IMPORTED_MODULE_0__.MapsPage
    }
];
let MapsPageRoutingModule = class MapsPageRoutingModule {
};
MapsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapsPageRoutingModule);



/***/ }),

/***/ 67982:
/*!**************************************************!*\
  !*** ./src/app/layouts/kids/maps/maps.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsPageModule": () => (/* binding */ MapsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps-routing.module */ 75017);
/* harmony import */ var _maps_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.page */ 46034);







let MapsPageModule = class MapsPageModule {
};
MapsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _maps_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapsPageRoutingModule
        ],
        declarations: [_maps_page__WEBPACK_IMPORTED_MODULE_1__.MapsPage]
    })
], MapsPageModule);



/***/ }),

/***/ 46034:
/*!************************************************!*\
  !*** ./src/app/layouts/kids/maps/maps.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsPage": () => (/* binding */ MapsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_maps_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./maps.page.html */ 30262);
/* harmony import */ var _maps_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.page.scss */ 51426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let MapsPage = class MapsPage {
    constructor() { }
    ngOnInit() {
    }
};
MapsPage.ctorParameters = () => [];
MapsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-maps',
        template: _raw_loader_maps_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_maps_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapsPage);



/***/ }),

/***/ 51426:
/*!**************************************************!*\
  !*** ./src/app/layouts/kids/maps/maps.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXBzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 30262:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/maps/maps.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title\n      style=\"\n        background-image: linear-gradient(\n          119deg,\n          rgba(92, 99, 91, 1) 0%,\n          rgba(36, 114, 56, 1) 35%,\n          rgb(122, 113, 172) 100%\n        );\n      \"\n      >maps</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_kids_maps_maps_module_ts.js.map