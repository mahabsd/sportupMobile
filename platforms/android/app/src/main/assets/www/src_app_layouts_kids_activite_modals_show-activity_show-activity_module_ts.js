(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_kids_activite_modals_show-activity_show-activity_module_ts"],{

/***/ 68655:
/*!********************************************************************************************!*\
  !*** ./src/app/layouts/kids/activite/modals/show-activity/show-activity-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowActivityPageRoutingModule": () => (/* binding */ ShowActivityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _show_activity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-activity.page */ 53419);




const routes = [
    {
        path: '',
        component: _show_activity_page__WEBPACK_IMPORTED_MODULE_0__.ShowActivityPage
    }
];
let ShowActivityPageRoutingModule = class ShowActivityPageRoutingModule {
};
ShowActivityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShowActivityPageRoutingModule);



/***/ }),

/***/ 38527:
/*!************************************************************************************!*\
  !*** ./src/app/layouts/kids/activite/modals/show-activity/show-activity.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowActivityPageModule": () => (/* binding */ ShowActivityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _show_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-activity-routing.module */ 68655);
/* harmony import */ var _show_activity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-activity.page */ 53419);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let ShowActivityPageModule = class ShowActivityPageModule {
};
ShowActivityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _show_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowActivityPageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_show_activity_page__WEBPACK_IMPORTED_MODULE_1__.ShowActivityPage]
    })
], ShowActivityPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_layouts_kids_activite_modals_show-activity_show-activity_module_ts.js.map