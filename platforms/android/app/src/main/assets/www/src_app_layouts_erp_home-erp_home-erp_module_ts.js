(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_erp_home-erp_home-erp_module_ts"],{

/***/ 59190:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/erp/home-erp/home-erp-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeErpPageRoutingModule": () => (/* binding */ HomeErpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_erp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-erp.page */ 70534);




const routes = [
    {
        path: '',
        component: _home_erp_page__WEBPACK_IMPORTED_MODULE_0__.HomeErpPage
    }
];
let HomeErpPageRoutingModule = class HomeErpPageRoutingModule {
};
HomeErpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomeErpPageRoutingModule);



/***/ }),

/***/ 34665:
/*!*********************************************************!*\
  !*** ./src/app/layouts/erp/home-erp/home-erp.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeErpPageModule": () => (/* binding */ HomeErpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _home_erp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-erp-routing.module */ 59190);
/* harmony import */ var _home_erp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-erp.page */ 70534);







let HomeErpPageModule = class HomeErpPageModule {
};
HomeErpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_erp_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeErpPageRoutingModule
        ],
        declarations: [_home_erp_page__WEBPACK_IMPORTED_MODULE_1__.HomeErpPage]
    })
], HomeErpPageModule);



/***/ }),

/***/ 70534:
/*!*******************************************************!*\
  !*** ./src/app/layouts/erp/home-erp/home-erp.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeErpPage": () => (/* binding */ HomeErpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_erp_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-erp.page.html */ 4949);
/* harmony import */ var _home_erp_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-erp.page.scss */ 24744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let HomeErpPage = class HomeErpPage {
    constructor() { }
    ngOnInit() {
    }
};
HomeErpPage.ctorParameters = () => [];
HomeErpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-erp',
        template: _raw_loader_home_erp_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_erp_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomeErpPage);



/***/ }),

/***/ 24744:
/*!*********************************************************!*\
  !*** ./src/app/layouts/erp/home-erp/home-erp.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nimg {\n  box-shadow: rgba(130, 125, 125, 0.56) 0px 22px 70px 4px !important;\n}\n\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px #247238;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 800;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n  width: 90px;\n  height: 30px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\n.wrapper {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.box {\n  padding: 2px;\n  font-size: auto;\n}\n\n.a {\n  grid-column: 2/3;\n  grid-row: 1;\n}\n\n.b {\n  grid-column: 1;\n  grid-row: 1/3;\n}\n\n.c {\n  grid-column: 3;\n  grid-row: 1;\n}\n\n.d {\n  grid-column: 2/4;\n  grid-row: 2;\n}\n\n.f {\n  grid-column: 1/3;\n  grid-row: 3;\n}\n\n.e {\n  grid-column: 3;\n  grid-row: 3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtZXJwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUtGOztBQUhBO0VBQ0Usa0VBQUE7QUFNRjs7QUFLQztFQUNDLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQVJNO0FBTVI7O0FBSUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBYlE7RUFjUixvQkFBQTtFQUNBLGFBZlE7RUFnQlIseUJBZFc7RUFlWCwyQkFBQTtBQURBOztBQUdBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0RBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFBOztBQUNBO0VBQ0UsK0RBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBQ0U7RUFDRSxlQUFBO0FBQ0o7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBREo7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBRkY7O0FBU0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQU5KOztBQVNDO0VBRUMsWUFBQTtFQUNBLGVBQUE7QUFQRjs7QUFXQztFQUNDLGdCQUFBO0VBQ0EsV0FBQTtBQVJGOztBQVdDO0VBQ0MsY0FBQTtFQUNBLGFBQUE7QUFSRjs7QUFVQztFQUNDLGNBQUE7RUFDQSxXQUFBO0FBUEY7O0FBU0M7RUFDQyxnQkFBQTtFQUNBLFdBQUE7QUFORjs7QUFTQztFQUNDLGdCQUFBO0VBQ0EsV0FBQTtBQU5GOztBQVFDO0VBQ0MsY0FBQTtFQUNBLFdBQUE7QUFMRiIsImZpbGUiOiJob21lLWVycC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNjb250YWluZXIge1xuICBoZWlnaHQ6IDgwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5pbWcge1xuICBib3gtc2hhZG93OiByZ2JhKDEzMCwgMTI1LCAxMjUsIDU2JSkgMHB4IDIycHggNzBweCA0cHggIWltcG9ydGFudDsgXG59XG5cblxuXG4vLyBjc3MgYnV0dG9uXG4kcnVsZXI6IDE2cHg7XG4kY29sb3ItcmVkOiAjNzI2YjZiO1xuJGNvbG9yLWJnOiAjRUJFQ0YwO1xuJGNvbG9yLXNoYWRvdzogI0JBQkVDQztcbiRjb2xvci13aGl0ZTogI0ZGRjtcbiBidXR0b24ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICBmb250LXNpemU6ICRydWxlcjtcbn1cbmJ1dHRvbiB7XG5ib3JkZXI6IDA7XG5vdXRsaW5lOiAwO1xuZm9udC1zaXplOiAkcnVsZXI7XG5ib3JkZXItcmFkaXVzOiAkcnVsZXIqMjA7XG5wYWRkaW5nOiAkcnVsZXI7XG5iYWNrZ3JvdW5kLWNvbG9yOiRjb2xvci1iZztcbnRleHQtc2hhZG93OiAxcHggMXB4IDAgJGNvbG9yLXdoaXRlO1xufVxuYnV0dG9uIHtcbmNvbG9yOiM2MTY3N0M7XG5mb250LXdlaWdodDogYm9sZDtcbmJveC1zaGFkb3c6IC01cHggLTVweCAyMHB4ICRjb2xvci13aGl0ZSwgIDFweCAxcHggNXB4ICMyNDcyMzg7XG50cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbmN1cnNvcjogcG9pbnRlcjtcbmZvbnQtd2VpZ2h0OiA4MDA7XG4mOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4ICRjb2xvci1zaGFkb3csIGluc2V0IC0xcHggLTFweCAycHggJGNvbG9yLXdoaXRlO1xufVxuJi51bml0IHtcbiAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICAvL2JveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4IDFweDtcbiAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgbWFyZ2luOiAwICRydWxlci8yO1xuICBmb250LXNpemU6ICRydWxlcioxLjI7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIC5pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IFxuICB9XG59XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICBpb24tY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY2FyZC10aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzYlO1xuICAgIGZvbnQtc2l6ZTogMi4wZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgLmNhcmQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTIlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG4gXG4ubXlnYWxsZXJ5e1xuICBib3JkZXItcmFkaXVzOiA2cHg7IFxuICBkaXNwbGF5OmlubGluZS1mbGV4O1xuXG59XG5cblxuXG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblxuXHQuYm94IHtcblxuXHRcdHBhZGRpbmc6IDJweDtcblx0XHRmb250LXNpemU6YXV0bztcblxuXHR9XG5cblx0LmEge1xuXHRcdGdyaWQtY29sdW1uOiAyIC8gMztcblx0XHRncmlkLXJvdzogMTtcblxuXHR9XG5cdC5iIHtcblx0XHRncmlkLWNvbHVtbjogMSA7XG5cdFx0Z3JpZC1yb3c6IDEgLyAzO1xuXHR9XG5cdC5jIHtcblx0XHRncmlkLWNvbHVtbjogMyA7XG5cdFx0Z3JpZC1yb3c6IDEgO1xuXHR9XG5cdC5kIHtcblx0XHRncmlkLWNvbHVtbjogMi80O1xuXHRcdGdyaWQtcm93OiAyO1xuXHR9XG5cblx0LmYge1xuXHRcdGdyaWQtY29sdW1uOiAxIC8gMztcblx0XHRncmlkLXJvdzogMztcblx0fVxuXHQuZSB7XG5cdFx0Z3JpZC1jb2x1bW46ICAgMztcblx0XHRncmlkLXJvdzogMztcblx0fSJdfQ== */");

/***/ }),

/***/ 4949:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/erp/home-erp/home-erp.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title\n      style=\"\n        background-image: linear-gradient(\n          119deg,\n          rgba(92, 99, 91, 1) 0%,\n          rgba(36, 114, 56, 1) 35%,\n          rgb(122, 113, 172) 100%\n        );\n      \"\n    >\n      ERP</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content id=\"container\" style=\"background-color: white !important\">\n  <ion-grid class=\"ion-justify-content-center\">\n    <ion-row>\n      <ion-col>\n        <div></div>\n      </ion-col>\n      <ion-col>\n        <div></div>\n      </ion-col>\n      <ion-col>\n        <div>\n          <ion-avatar>\n            <img\n              style=\"\n                box-shadow: rgb(130 125 125 / 56%) 0px 22px 70px 4px !important;\n              \"\n              src=\"https://www.computerhope.com/jargon/g/guest-user.jpg\"\n            />\n          </ion-avatar>\n        </div>\n      </ion-col>\n      <ion-col>\n        <div></div>\n      </ion-col>\n      <ion-col>\n        <div></div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class=\"segment\">\n          <ion-label\n            style=\"\n              font-family: Montserrat, sans-serif;\n              color: #898b8b;\n              font-size: small;\n            \"\n            >{{MyInformation.User_Last_Name}}\n            {{MyInformation.User_First_Name}}</ion-label\n          >\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <div class=\"wrapper\">\n        <div class=\"box a\">\n          <img\n            style=\"\n              box-shadow: rgb(130 125 125 / 56%) 0px 22px 70px 4px !important;\n            \"\n            src=\"../../assets/ImgErp/gestion-espace-final.png\"\n            alt=\"\"\n            routerLink=\"/gestion-espace\"\n          />\n        </div>\n        <div class=\"box b\">\n          <img\n            style=\"\n              box-shadow: rgb(130 125 125 / 56%) 0px 22px 70px 4px !important;\n            \"\n            src=\"../../assets/ImgErp/gestion-adherent-final.png\"\n            alt=\"\"\n            routerLink=\"/gestion-adherent\"\n          />\n        </div>\n        <div class=\"box c\">\n          <img\n            style=\"\n              box-shadow: rgb(130 125 125 / 56%) 0px 22px 70px 4px !important;\n            \"\n            src=\"../../assets/ImgErp/historique-final.png\"\n            alt=\"\"\n            routerLink=\"/historiqueerp\"\n          />\n        </div>\n        <div class=\"box d\">\n          <img\n            style=\"\n              box-shadow: rgb(130 125 125 / 56%) 0px 22px 70px 4px !important;\n            \"\n            src=\"../../assets/ImgErp/gestion-materiel-finalpng.png\"\n            alt=\"\"\n            routerLink=\"/gestion-material\"\n          />\n        </div>\n        <div class=\"box e\">\n          <img\n            style=\"\n              box-shadow: rgb(130 125 125 / 56%) 0px 22px 70px 4px !important;\n            \"\n            src=\"../../assets/ImgErp/planning-final.png\"\n            alt=\"\"\n            routerLink=\"/planning\"\n          />\n        </div>\n        <div class=\"box f\">\n          <img\n            style=\"\n              box-shadow: rgb(130 125 125 / 56%) 0px 22px 70px 4px !important;\n            \"\n            src=\"../../assets/ImgErp/resource-humaines-final.png\"\n            alt=\"\"\n            routerLink=\"/gestion-effectif\"\n          />\n        </div>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col>\n      <div></div>\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col>\n      <div></div>\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col>\n      <div></div>\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col>\n      <div></div>\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col>\n      <div></div>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_erp_home-erp_home-erp_module_ts.js.map