(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_coachprofile_coachpub_coachpub_module_ts"],{

/***/ 1519:
/*!**************************************************************************!*\
  !*** ./src/app/layouts/coachprofile/coachpub/coachpub-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachpubPageRoutingModule": () => (/* binding */ CoachpubPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _coachpub_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coachpub.page */ 32888);




const routes = [
    {
        path: '',
        component: _coachpub_page__WEBPACK_IMPORTED_MODULE_0__.CoachpubPage
    }
];
let CoachpubPageRoutingModule = class CoachpubPageRoutingModule {
};
CoachpubPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoachpubPageRoutingModule);



/***/ }),

/***/ 93607:
/*!******************************************************************!*\
  !*** ./src/app/layouts/coachprofile/coachpub/coachpub.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachpubPageModule": () => (/* binding */ CoachpubPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _coachpub_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coachpub-routing.module */ 1519);
/* harmony import */ var _delete_post_popover_delete_post_popover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../delete-post-popover/delete-post-popover.page */ 76565);







let CoachpubPageModule = class CoachpubPageModule {
};
CoachpubPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _coachpub_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoachpubPageRoutingModule,
        ],
        declarations: [_delete_post_popover_delete_post_popover_page__WEBPACK_IMPORTED_MODULE_1__.DeletePostPopoverPage]
    })
], CoachpubPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_layouts_coachprofile_coachpub_coachpub_module_ts.js.map