(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_erp_erp-space_erp-space_module_ts"],{

/***/ 67073:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/erp/erp-space/erp-space-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpSpacePageRoutingModule": () => (/* binding */ ErpSpacePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _erp_space_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erp-space.page */ 64117);




const routes = [
    {
        path: '',
        component: _erp_space_page__WEBPACK_IMPORTED_MODULE_0__.ErpSpacePage
    }
];
let ErpSpacePageRoutingModule = class ErpSpacePageRoutingModule {
};
ErpSpacePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ErpSpacePageRoutingModule);



/***/ }),

/***/ 79383:
/*!***********************************************************!*\
  !*** ./src/app/layouts/erp/erp-space/erp-space.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpSpacePageModule": () => (/* binding */ ErpSpacePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _erp_space_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erp-space-routing.module */ 67073);
/* harmony import */ var _erp_space_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./erp-space.page */ 64117);







let ErpSpacePageModule = class ErpSpacePageModule {
};
ErpSpacePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _erp_space_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpSpacePageRoutingModule
        ],
        declarations: [_erp_space_page__WEBPACK_IMPORTED_MODULE_1__.ErpSpacePage]
    })
], ErpSpacePageModule);



/***/ }),

/***/ 64117:
/*!*********************************************************!*\
  !*** ./src/app/layouts/erp/erp-space/erp-space.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpSpacePage": () => (/* binding */ ErpSpacePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_erp_space_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./erp-space.page.html */ 18501);
/* harmony import */ var _erp_space_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./erp-space.page.scss */ 87997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ErpSpacePage = class ErpSpacePage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.currentColor = 'secondary';
    }
    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }
    itemSelected(data) {
        console.log(data);
    }
    Button_Publication() {
        console.log('Action Button Publication ');
    }
    Button_A_Propos() {
        console.log('Action Button A Propos ');
    }
    Button_Plus() {
        console.log('Action Button Plus ');
    }
};
ErpSpacePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
ErpSpacePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-erp-space',
        template: _raw_loader_erp_space_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_erp_space_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ErpSpacePage);



/***/ }),

/***/ 87997:
/*!***********************************************************!*\
  !*** ./src/app/layouts/erp/erp-space/erp-space.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n.ContentErpSpace {\n  padding: 20px;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 800;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n  width: 90px;\n  height: 30px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #247238;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg,#247238, #247238, #8EBF25,#8EBF25);\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 40px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 3px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label, .slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.wrapper {\n  display: grid;\n}\n\n.box {\n  padding: 1px;\n}\n\n.a {\n  grid-column: 2/3;\n  grid-row: 1;\n}\n\n.b {\n  grid-column: 1;\n  grid-row: 1/3;\n}\n\n.c {\n  grid-column: 3;\n  grid-row: 1;\n}\n\n.d {\n  grid-column: 2/4;\n  grid-row: 2;\n}\n\n.f {\n  grid-column: 1/3;\n  grid-row: 3;\n}\n\n.e {\n  grid-column: 3;\n  grid-row: 3;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycC1zcGFjZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKOztBQUNFO0VBQ0UsYUFBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUlKOztBQUZFO0VBQ0UscUJBQUE7QUFLSjs7QUFIRTtFQUNFLGFBQUE7RUFJQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFHSjs7QUFLRztFQUNDLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQVJNO0FBTVY7O0FBSUU7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBYlE7RUFjUixvQkFBQTtFQUNBLGFBZlE7RUFnQlIseUJBZFc7RUFlWCwyQkFBQTtBQURGOztBQUdFO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUNFO0VBQ0UsK0RBQUE7QUFDSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBQ0k7RUFDRSxlQUFBO0FBQ047O0FBSUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBRE47O0FBR0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUROOztBQUdJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRE47O0FBSUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFDRTtFQUNFLFVBQUE7QUFFSjs7QUFESTtFQUNFLG1CQUFBO0VBQ1EsV0FBQTtFQUNOLFlBQUE7RUFDQSxZQUFBO0FBR1I7O0FBQUE7RUFDRSx1RUFBQTtBQUdGOztBQW9IQTtFQUNFLFdBQUE7QUFqSEY7O0FBcUhBO0VBQ0UsYUFBQTtBQWxIRjs7QUFxSEE7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQWxIRjs7QUFzSEE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBbkhGOztBQXVIQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBcEhGOztBQXVIQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQXBIRjs7QUF1SEE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBcEhGOztBQXVIQSxZQUFBOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBckhGOztBQXdIQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXJIRjs7QUF3SEEsYUFBQTs7QUFDQTtFQUNFLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxzQ0FBQTtBQXJIRjs7QUF3SEEsU0FBQTs7QUFFQTtFQUNFLFVBQUE7QUF0SEY7O0FBMEhBO0VBQ0ksYUFBQTtBQXZISjs7QUF5SEM7RUFFQyxZQUFBO0FBdkhGOztBQTRIQztFQUNDLGdCQUFBO0VBQ0EsV0FBQTtBQXpIRjs7QUE0SEM7RUFDQyxjQUFBO0VBQ0EsYUFBQTtBQXpIRjs7QUEySEM7RUFDQyxjQUFBO0VBQ0EsV0FBQTtBQXhIRjs7QUEwSEM7RUFDQyxnQkFBQTtFQUNBLFdBQUE7QUF2SEY7O0FBMEhDO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0FBdkhGOztBQXlIQztFQUNDLGNBQUE7RUFDQSxXQUFBO0FBdEhGOztBQXlIQTtFQUFpRCxjQUFBO0FBckhqRDs7QUFzSEE7RUFBaUQsZ0JBQUE7QUFsSGpEOztBQW1IQTtFQUFpRCxnQkFBQTtBQS9HakQiLCJmaWxlIjoiZXJwLXNwYWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICAuQ29udGVudEVycFNwYWNlIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gICNjb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGNvbG9yOiAjOGM4YzhjO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAjY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IERhcmtHcmVlbjsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMjQ3MjM4LCAjMjQ3MjM4LCAgIzhFQkYyNSwjOEVCRjI1KTtcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLy8gY3NzIGJ1dHRvblxuICAkcnVsZXI6IDE2cHg7XG4gICRjb2xvci1yZWQ6ICM3MjZiNmI7XG4gICRjb2xvci1iZzogI0VCRUNGMDtcbiAgJGNvbG9yLXNoYWRvdzogI0JBQkVDQztcbiAgJGNvbG9yLXdoaXRlOiAjRkZGO1xuICAgYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gICAgZm9udC1zaXplOiAkcnVsZXI7XG4gIH1cbiAgYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6ICRydWxlcjtcbiAgYm9yZGVyLXJhZGl1czogJHJ1bGVyKjIwO1xuICBwYWRkaW5nOiAkcnVsZXI7XG4gIGJhY2tncm91bmQtY29sb3I6JGNvbG9yLWJnO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwICRjb2xvci13aGl0ZTtcbiAgfVxuICBidXR0b24ge1xuICBjb2xvcjojNjE2NzdDO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm94LXNoYWRvdzogLTVweCAtNXB4IDIwcHggJGNvbG9yLXdoaXRlLCAgMXB4IDFweCA1cHggO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogODAwO1xuICAmOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggJGNvbG9yLXNoYWRvdywgaW5zZXQgLTFweCAtMXB4IDJweCAkY29sb3Itd2hpdGU7XG4gIH1cbiAgJi51bml0IHtcbiAgICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICAvL2JveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4IDFweDtcbiAgICBkaXNwbGF5OmlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBtYXJnaW46IDAgJHJ1bGVyLzI7XG4gICAgZm9udC1zaXplOiAkcnVsZXIqMS4yO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICAuaWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7IFxuICAgIH1cbiAgfVxuICB9XG4gIC5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gICAgaW9uLWNhcmQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuY2FyZC10aXRsZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDM2JTtcbiAgICAgIGZvbnQtc2l6ZTogMi4wZW07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC5jYXJkLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUyJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG4gIC5teUZvb3RlcntcbiAgICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDVweDtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCAxcHggIzI0NzIzODtcbiAgICBkaXNwbGF5OmlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCAkcnVsZXIqMjtcbiAgICBmb250LXNpemU6ICRydWxlciozLjI7XG4gICAgd2lkdGg6IDM0MHB4O1xuICB9XG4gIC5teWdhbGxlcnl7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4OyBcbiAgICBkaXNwbGF5OmlubGluZS1mbGV4O1xuICB9XG4gIGlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9ue1xuICAgIGJvdHRvbTogNSU7XG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogIzI0NzIzODtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwcHggO1xuICAgICAgICBoZWlnaHQ6IDEwcHggO1xuICAgICAgICBvcGFjaXR5OiA1LjI7XG4gIH1cbn1cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyNDcyMzgsICMyNDcyMzgsICAjOEVCRjI1LCM4RUJGMjUpO1xuXG59XG5cblxuXG5cbi8vXG5cblxuXG4vLyAuY2xlYXJ7XG4vLyAgIGNsZWFyOiBib3RoO1xuLy8gfVxuXG5cbi8vIC5zbGlkZS10b2dnbGV7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIC5zbGlkZW1lbnV7XG4vLyAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbi8vICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gICBtYXJnaW46IDUwcHggYXV0bztcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vIH1cblxuLy8gLnNsaWRlbWVudSBsYWJlbHtcbi8vICAgd2lkdGg6IDI1JTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgZmxvYXQ6IGxlZnQ7XG4vLyAgIGNvbG9yOiAjMzMzO1xuLy8gICBvcGFjaXR5OiAwLjI7XG5cbi8vIH1cblxuXG5cblxuLy8gLnNsaWRlbWVudSBsYWJlbCAuaWNvbntcbi8vICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICBib3JkZXI6IHNvbGlkIDJweCAjMzMzO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGhlaWdodDogNTBweDtcbi8vICAgd2lkdGg6IDUwcHg7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBtYXJnaW46IDAgYXV0bztcbi8vICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vIH1cblxuLy8gLypCYXIgU3R5bGUqL1xuXG5cblxuLy8gLnNsaWRlciAuYmFye1xuLy8gICB3aWR0aDogNTAlO1xuLy8gICBoZWlnaHQ6IDVweDtcbi8vICAgYmFja2dyb3VuZDogcmdiKDEsIDY4LCAzNyk7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vIH1cblxuLy8gLypBbmltYXRpb25zKi9cbi8vIC5zbGlkZW1lbnUgbGFiZWwsIC5zbGlkZXIgLmJhciB7XG4vLyAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbi8vICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4vLyAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuLy8gfVxuXG4vLyAvKlRvZ2dsZSovXG5cbi8vIC5zbGlkZW1lbnUgLnNsaWRlLXRvZ2dsZTpjaGVja2VkICsgbGFiZWx7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyB9XG5cblxuXG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTE6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDA7IH1cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMjpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMzAlOyB9XG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTM6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDUwJTsgfVxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS00OmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiA3NSU7IH1cblxuXG5cbi8vIG5hdiB7XG4vLyAgIG1heC13aWR0aDoxMDAlO1xuLy8gICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsICNmZmZmZmYgMjUlLCAjZmZmZmZmIDc1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbi8vICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcbi8vIH1cblxuLy8gbmF2IHVsIHtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAyNSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4vLyB9XG5cbi8vIG5hdiB1bCBsaSB7XG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vIH1cblxuLy8gbmF2IHVsIGxpIGEge1xuLy8gICBwYWRkaW5nOjEwcHg7XG4vLyAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4vLyAgIGNvbG9yOiBibGFjaztcbi8vICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gfVxuXG4vLyBuYXYgdWwgbGkgYTpob3ZlciB7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4vLyAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbi8vICAgY29sb3I6ICM4RUJGMjU7XG4vLyB9XG5cblxuLmNsZWFye1xuICBjbGVhcjogYm90aDtcbn1cblxuXG4uc2xpZGUtdG9nZ2xle1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVtZW51e1xuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMjBweCAyMHB4IGF1dG87XG4gLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNsaWRlbWVudSBsYWJlbHtcbiAgd2lkdGg6IDI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiBncmVlbjtcbiAgb3BhY2l0eTogMC4yO1xuXG59XG5cbi5zbGlkZW1lbnUgbGFiZWw6aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uc2xpZGVtZW51IGxhYmVsIHNwYW57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4OyAgIFxuICBjb2xvcjogIzI0NzIzODsgXG59XG5cbi5zbGlkZW1lbnUgbGFiZWwgLmljb257XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzI0NzIzODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qQmFyIFN0eWxlKi9cblxuLnNsaWRlcntcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zbGlkZXIgLmJhcntcbiAgd2lkdGg6NTAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLypBbmltYXRpb25zKi9cbi5zbGlkZW1lbnUgbGFiZWwsIC5zbGlkZXIgLmJhciB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4vKlRvZ2dsZSovXG5cbi5zbGlkZW1lbnUgLnNsaWRlLXRvZ2dsZTpjaGVja2VkICsgbGFiZWx7XG4gIG9wYWNpdHk6IDE7XG59XG5cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG5cdH1cblx0LmJveCB7XG5cblx0XHRwYWRkaW5nOiAxcHg7XG5cdFxuXG5cdH1cblxuXHQuYSB7XG5cdFx0Z3JpZC1jb2x1bW46IDIgLyAzO1xuXHRcdGdyaWQtcm93OiAxO1xuXG5cdH1cblx0LmIge1xuXHRcdGdyaWQtY29sdW1uOiAxIDtcblx0XHRncmlkLXJvdzogMSAvIDM7XG5cdH1cblx0LmMge1xuXHRcdGdyaWQtY29sdW1uOiAzIDtcblx0XHRncmlkLXJvdzogMSA7XG5cdH1cblx0LmQge1xuXHRcdGdyaWQtY29sdW1uOiAyLzQ7XG5cdFx0Z3JpZC1yb3c6IDI7XG5cdH1cblxuXHQuZiB7XG5cdFx0Z3JpZC1jb2x1bW46IDEgLyAzO1xuXHRcdGdyaWQtcm93OiAzO1xuXHR9XG5cdC5lIHtcblx0XHRncmlkLWNvbHVtbjogICAzO1xuXHRcdGdyaWQtcm93OiAzO1xuXHR9XG5cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMDsgfVxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0yOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAyNSU7IH1cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMzpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNTAlOyB9XG4iXX0= */");

/***/ }),

/***/ 18501:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/erp/erp-space/erp-space.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n    \n<ion-header [translucent]=\"true\"  >\n  <ion-toolbar    background-image=\" linear-gradient(135deg,  #8EBF25,#8EBF25,#247238, #247238)\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" style=\"text-align:center; margin-left: 20xp;\" > ERP-SPACE</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n\n    <ion-grid class=\"ion-justify-content-center; \" >\n      <ion-row style=\"padding-top: 50px; padding-bottom: 50px;\">\n        <ion-col>\n          <div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            <ion-avatar >\n              <img  \n              src=\"https://www.computerhope.com/jargon/g/guest-user.jpg\">\n            </ion-avatar>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n \n      \n     </ion-grid>\n<div class=\"ContentErpSpace\">\n  <ion-row class=\"wrapper\">\n\n    <div class=\"box a\"  >\n    \n    <img style=\"\" src=\"../../assets/ImgErp/gestion-espace-final.png\" alt=\"\" routerLink=\"/erp/gestion-espace\"> \n  </div>\n    <div class=\"box b\"  >\n  <img style=\"\" src=\"../../assets/ImgErp/gestion-adherent-final.png\" alt=\"\" routerLink=\"/erp/gestion-adherent\" >  \n  \n  </div>\n    <div class=\"box c\"  >\n  <img style=\"\" src=\"../../assets/ImgErp/historique-final.png\" alt=\"\" routerLink=\"/erp/historiqueerp\">    \n  </div>\n    <div class=\"box d\" >\n  <img style = \"\" src=\"../../assets/ImgErp/gestion-materiel-finalpng.png\" alt=\"\" routerLink=\"/erp/gestion-material\">      \n  </div>\n      <div class=\"box e\"  >\n  <img style=\"\" src=\"../../assets/ImgErp/planning-final.png\" alt=\"\" routerLink=\"/erp/planning\">    \n  </div>\n    <div class=\"box f\"  >\n  <img style=\"\" src=\"../../assets/ImgErp/resource-humaines-final.png\" alt=\"\" routerLink=\"/erp/gestion-effectif\">    \n    \n  </div>\n  \n    </ion-row>\n\n</div>\n\n\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_erp_erp-space_erp-space_module_ts.js.map