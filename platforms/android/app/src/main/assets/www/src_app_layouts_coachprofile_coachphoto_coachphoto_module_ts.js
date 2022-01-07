(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_coachprofile_coachphoto_coachphoto_module_ts"],{

/***/ 43481:
/*!******************************************************************************!*\
  !*** ./src/app/layouts/coachprofile/coachphoto/coachphoto-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachphotoPageRoutingModule": () => (/* binding */ CoachphotoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _coachphoto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coachphoto.page */ 42);




const routes = [
    {
        path: '',
        component: _coachphoto_page__WEBPACK_IMPORTED_MODULE_0__.CoachphotoPage
    }
];
let CoachphotoPageRoutingModule = class CoachphotoPageRoutingModule {
};
CoachphotoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoachphotoPageRoutingModule);



/***/ }),

/***/ 9532:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/coachprofile/coachphoto/coachphoto.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachphotoPageModule": () => (/* binding */ CoachphotoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _coachphoto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coachphoto-routing.module */ 43481);






let CoachphotoPageModule = class CoachphotoPageModule {
};
CoachphotoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _coachphoto_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoachphotoPageRoutingModule
        ],
        declarations: [],
    })
], CoachphotoPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_layouts_coachprofile_coachphoto_coachphoto_module_ts.js.map