(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_kids_popovercomponent_popovercomponent_module_ts"],{

/***/ 80098:
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/kids/popovercomponent/popovercomponent-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopovercomponentPageRoutingModule": () => (/* binding */ PopovercomponentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _popovercomponent_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popovercomponent.page */ 33906);




const routes = [
    {
        path: '',
        component: _popovercomponent_page__WEBPACK_IMPORTED_MODULE_0__.PopovercomponentPage
    }
];
let PopovercomponentPageRoutingModule = class PopovercomponentPageRoutingModule {
};
PopovercomponentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PopovercomponentPageRoutingModule);



/***/ }),

/***/ 46896:
/*!**************************************************************************!*\
  !*** ./src/app/layouts/kids/popovercomponent/popovercomponent.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopovercomponentPageModule": () => (/* binding */ PopovercomponentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _popovercomponent_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popovercomponent-routing.module */ 80098);
/* harmony import */ var _popovercomponent_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popovercomponent.page */ 33906);







let PopovercomponentPageModule = class PopovercomponentPageModule {
};
PopovercomponentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _popovercomponent_routing_module__WEBPACK_IMPORTED_MODULE_0__.PopovercomponentPageRoutingModule
        ],
        declarations: [_popovercomponent_page__WEBPACK_IMPORTED_MODULE_1__.PopovercomponentPage]
    })
], PopovercomponentPageModule);



/***/ }),

/***/ 33906:
/*!************************************************************************!*\
  !*** ./src/app/layouts/kids/popovercomponent/popovercomponent.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopovercomponentPage": () => (/* binding */ PopovercomponentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_popovercomponent_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./popovercomponent.page.html */ 12706);
/* harmony import */ var _popovercomponent_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popovercomponent.page.scss */ 16161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Auth/auth.service */ 21584);





let PopovercomponentPage = class PopovercomponentPage {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    dismissPopover() {
        this.authService.logout();
    }
};
PopovercomponentPage.ctorParameters = () => [
    { type: src_app_Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
PopovercomponentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-popovercomponent',
        template: _raw_loader_popovercomponent_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_popovercomponent_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PopovercomponentPage);



/***/ }),

/***/ 16161:
/*!**************************************************************************!*\
  !*** ./src/app/layouts/kids/popovercomponent/popovercomponent.page.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-popover {\n  --width: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXJjb21wb25lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0csY0FBQTtBQUNKIiwiZmlsZSI6InBvcG92ZXJjb21wb25lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGlvbi1wb3BvdmVyIHtcclxuICAgIC0td2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ 12706:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/popovercomponent/popovercomponent.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-list lines=\"none\" >\n  <ion-item button>\n    <ion-icon name=\"bookmark-outline\" item-left></ion-icon>\n    Enregistré</ion-item>\n  <ion-item button [routerLink]=\"['/parametre']\">\n    <ion-icon name=\"settings-outline\" item-left></ion-icon>\n    Paramétres</ion-item>\n  <ion-item button (click)=\"dismissPopover()\">\n    <ion-icon name=\"power-outline\" item-left></ion-icon>\n    Déconnexion</ion-item>\n\n</ion-list>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_kids_popovercomponent_popovercomponent_module_ts.js.map