(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_kids_message_message_module_ts"],{

/***/ 75355:
/*!****************************************************************!*\
  !*** ./src/app/layouts/kids/message/message-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePageRoutingModule": () => (/* binding */ MessagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.page */ 72709);




const routes = [
    {
        path: '',
        component: _message_page__WEBPACK_IMPORTED_MODULE_0__.MessagePage
    }
];
let MessagePageRoutingModule = class MessagePageRoutingModule {
};
MessagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MessagePageRoutingModule);



/***/ }),

/***/ 55167:
/*!********************************************************!*\
  !*** ./src/app/layouts/kids/message/message.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePageModule": () => (/* binding */ MessagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _message_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-routing.module */ 75355);
/* harmony import */ var _message_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.page */ 72709);







let MessagePageModule = class MessagePageModule {
};
MessagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _message_routing_module__WEBPACK_IMPORTED_MODULE_0__.MessagePageRoutingModule
        ],
        declarations: [_message_page__WEBPACK_IMPORTED_MODULE_1__.MessagePage]
    })
], MessagePageModule);



/***/ }),

/***/ 72709:
/*!******************************************************!*\
  !*** ./src/app/layouts/kids/message/message.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagePage": () => (/* binding */ MessagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_message_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./message.page.html */ 71787);
/* harmony import */ var _message_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.page.scss */ 64745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let MessagePage = class MessagePage {
    constructor() { }
    ngOnInit() {
    }
};
MessagePage.ctorParameters = () => [];
MessagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-message',
        template: _raw_loader_message_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_message_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MessagePage);



/***/ }),

/***/ 64745:
/*!********************************************************!*\
  !*** ./src/app/layouts/kids/message/message.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 71787:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/message/message.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title\n      style=\"\n        background-image: linear-gradient(\n          119deg,\n          rgba(92, 99, 91, 1) 0%,\n          rgba(36, 114, 56, 1) 35%,\n          rgb(122, 113, 172) 100%\n        );\n      \"\n      >message</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_kids_message_message_module_ts.js.map