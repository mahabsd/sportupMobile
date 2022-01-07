(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_apropos_apropos_module_ts"],{

/***/ 20878:
/*!***********************************************************!*\
  !*** ./src/app/layouts/apropos/apropos-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AproposPageRoutingModule": () => (/* binding */ AproposPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _apropos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apropos.page */ 55420);




const routes = [
    {
        path: '',
        component: _apropos_page__WEBPACK_IMPORTED_MODULE_0__.AproposPage
    }
];
let AproposPageRoutingModule = class AproposPageRoutingModule {
};
AproposPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AproposPageRoutingModule);



/***/ }),

/***/ 51366:
/*!***************************************************!*\
  !*** ./src/app/layouts/apropos/apropos.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AproposPageModule": () => (/* binding */ AproposPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _apropos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apropos-routing.module */ 20878);
/* harmony import */ var _apropos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apropos.page */ 55420);







let AproposPageModule = class AproposPageModule {
};
AproposPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _apropos_routing_module__WEBPACK_IMPORTED_MODULE_0__.AproposPageRoutingModule
        ],
        declarations: [_apropos_page__WEBPACK_IMPORTED_MODULE_1__.AproposPage]
    })
], AproposPageModule);



/***/ }),

/***/ 55420:
/*!*************************************************!*\
  !*** ./src/app/layouts/apropos/apropos.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AproposPage": () => (/* binding */ AproposPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_apropos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./apropos.page.html */ 17276);
/* harmony import */ var _apropos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apropos.page.scss */ 53635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let AproposPage = class AproposPage {
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
AproposPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
AproposPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-apropos',
        template: _raw_loader_apropos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_apropos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AproposPage);



/***/ }),

/***/ 53635:
/*!***************************************************!*\
  !*** ./src/app/layouts/apropos/apropos.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 800;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n  width: 90px;\n  height: 30px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #247238;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg,#247238, #247238, #8EBF25,#8EBF25);\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 40px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 3px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label, .slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcm9wb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFHSjs7QUFERTtFQUNFLHFCQUFBO0FBSUo7O0FBRkU7RUFDRSxhQUFBO0VBSUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBRUo7O0FBTUc7RUFDQyxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFSTTtBQUtWOztBQUtFO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQWJRO0VBY1Isb0JBQUE7RUFDQSxhQWZRO0VBZ0JSLHlCQWRXO0VBZVgsMkJBQUE7QUFGRjs7QUFJRTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFFRTtFQUNFLCtEQUFBO0FBQUo7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUVJO0VBQ0UsZUFBQTtBQUFOOztBQUtJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUZOOztBQUlJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFGTjs7QUFJSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUZOOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBR0U7RUFDRSxZQUFBO0FBQUo7O0FBRUU7RUFDRSxVQUFBO0FBQ0o7O0FBQUk7RUFDRSxtQkFBQTtFQUNRLFdBQUE7RUFDTixZQUFBO0VBQ0EsWUFBQTtBQUVSOztBQUNBO0VBQ0UsdUVBQUE7QUFFRjs7QUFxSEE7RUFDRSxXQUFBO0FBbEhGOztBQXNIQTtFQUNFLGFBQUE7QUFuSEY7O0FBc0hBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFuSEY7O0FBdUhBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQXBIRjs7QUF3SEE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQXJIRjs7QUF3SEE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFySEY7O0FBd0hBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXJIRjs7QUF3SEEsWUFBQTs7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXRIRjs7QUF5SEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF0SEY7O0FBeUhBLGFBQUE7O0FBQ0E7RUFDRSxpQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esc0NBQUE7QUF0SEY7O0FBeUhBLFNBQUE7O0FBRUE7RUFDRSxVQUFBO0FBdkhGOztBQTRIQTtFQUFpRCxjQUFBO0FBeEhqRDs7QUF5SEE7RUFBaUQsZ0JBQUE7QUFySGpEOztBQXNIQTtFQUFpRCxnQkFBQTtBQWxIakQiLCJmaWxlIjoiYXByb3Bvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogIzhjOGM4YztcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgI2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBEYXJrR3JlZW47IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzI0NzIzOCwgIzI0NzIzOCwgICM4RUJGMjUsIzhFQkYyNSk7XG4gICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIC8vIGNzcyBidXR0b25cbiAgJHJ1bGVyOiAxNnB4O1xuICAkY29sb3ItcmVkOiAjNzI2YjZiO1xuICAkY29sb3ItYmc6ICNFQkVDRjA7XG4gICRjb2xvci1zaGFkb3c6ICNCQUJFQ0M7XG4gICRjb2xvci13aGl0ZTogI0ZGRjtcbiAgIGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyO1xuICB9XG4gIGJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAkcnVsZXI7XG4gIGJvcmRlci1yYWRpdXM6ICRydWxlcioyMDtcbiAgcGFkZGluZzogJHJ1bGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiRjb2xvci1iZztcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAkY29sb3Itd2hpdGU7XG4gIH1cbiAgYnV0dG9uIHtcbiAgY29sb3I6IzYxNjc3QztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IC01cHggLTVweCAyMHB4ICRjb2xvci13aGl0ZSwgIDFweCAxcHggNXB4IDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgJjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4ICRjb2xvci1zaGFkb3csIGluc2V0IC0xcHggLTFweCAycHggJGNvbG9yLXdoaXRlO1xuICB9XG4gICYudW5pdCB7XG4gICAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgLy9ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAxcHg7XG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgbWFyZ2luOiAwICRydWxlci8yO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyKjEuMjtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgLmljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyBcbiAgICB9XG4gIH1cbiAgfVxuICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzNiU7XG4gICAgICBmb250LXNpemU6IDIuMGVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuMGVtO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MiU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuICAubXlGb290ZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gICAgcGFkZGluZy1ib3R0b206IDA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxcHggMXB4ICMyNDcyMzg7XG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgJHJ1bGVyKjI7XG4gICAgZm9udC1zaXplOiAkcnVsZXIqMy4yO1xuICAgIHdpZHRoOiAzNDBweDtcbiAgfVxuICAubXlnYWxsZXJ5e1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDsgXG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgfVxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbntcbiAgICBib3R0b206IDUlO1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyNDcyMzg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMHB4IDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4IDtcbiAgICAgICAgb3BhY2l0eTogNS4yO1xuICB9XG59XG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMjQ3MjM4LCAjMjQ3MjM4LCAgIzhFQkYyNSwjOEVCRjI1KTtcblxufVxuXG5cblxuXG4vL1xuXG5cblxuLy8gLmNsZWFye1xuLy8gICBjbGVhcjogYm90aDtcbi8vIH1cblxuXG4vLyAuc2xpZGUtdG9nZ2xle1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyAuc2xpZGVtZW51e1xuLy8gICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4vLyAgIG1heC13aWR0aDogMTAwJTtcbi8vICAgbWFyZ2luOiA1MHB4IGF1dG87XG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyB9XG5cbi8vIC5zbGlkZW1lbnUgbGFiZWx7XG4vLyAgIHdpZHRoOiAyNSU7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gICBjb2xvcjogIzMzMztcbi8vICAgb3BhY2l0eTogMC4yO1xuXG4vLyB9XG5cblxuXG5cbi8vIC5zbGlkZW1lbnUgbGFiZWwgLmljb257XG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgYm9yZGVyOiBzb2xpZCAycHggIzMzMztcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBoZWlnaHQ6IDUwcHg7XG4vLyAgIHdpZHRoOiA1MHB4O1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyB9XG5cbi8vIC8qQmFyIFN0eWxlKi9cblxuXG5cbi8vIC5zbGlkZXIgLmJhcntcbi8vICAgd2lkdGg6IDUwJTtcbi8vICAgaGVpZ2h0OiA1cHg7XG4vLyAgIGJhY2tncm91bmQ6IHJnYigxLCA2OCwgMzcpO1xuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyB9XG5cbi8vIC8qQW5pbWF0aW9ucyovXG4vLyAuc2xpZGVtZW51IGxhYmVsLCAuc2xpZGVyIC5iYXIge1xuLy8gICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4vLyAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuLy8gICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbi8vIH1cblxuLy8gLypUb2dnbGUqL1xuXG4vLyAuc2xpZGVtZW51IC5zbGlkZS10b2dnbGU6Y2hlY2tlZCArIGxhYmVse1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gfVxuXG5cblxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0xOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAwOyB9XG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDMwJTsgfVxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0zOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiA1MCU7IH1cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tNDpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNzUlOyB9XG5cblxuXG4vLyBuYXYge1xuLy8gICBtYXgtd2lkdGg6MTAwJTtcbi8vICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCAjZmZmZmZmIDI1JSwgI2ZmZmZmZiA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4vLyAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyB9XG5cbi8vIG5hdiB1bCB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMjUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuLy8gICBib3gtc2hhZG93OiAwIDAgMjVweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gfVxuXG4vLyBuYXYgdWwgbGkge1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyB9XG5cbi8vIG5hdiB1bCBsaSBhIHtcbi8vICAgcGFkZGluZzoxMHB4O1xuLy8gICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbi8vICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuLy8gICBjb2xvcjogYmxhY2s7XG4vLyAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vIH1cblxuLy8gbmF2IHVsIGxpIGE6aG92ZXIge1xuLy8gICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4vLyAgIGNvbG9yOiAjOEVCRjI1O1xuLy8gfVxuXG5cbi5jbGVhcntcbiAgY2xlYXI6IGJvdGg7XG59XG5cblxuLnNsaWRlLXRvZ2dsZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlbWVudXtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAxMHB4IDIwcHggMjBweCBhdXRvO1xuIC8vIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbGlkZW1lbnUgbGFiZWx7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogZ3JlZW47XG4gIG9wYWNpdHk6IDAuMjtcblxufVxuXG4uc2xpZGVtZW51IGxhYmVsOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnNsaWRlbWVudSBsYWJlbCBzcGFue1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDsgICBcbiAgY29sb3I6ICMyNDcyMzg7IFxufVxuXG4uc2xpZGVtZW51IGxhYmVsIC5pY29ue1xuICBmb250LXNpemU6IDQwcHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICMyNDcyMzg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKkJhciBTdHlsZSovXG5cbi5zbGlkZXJ7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2xpZGVyIC5iYXJ7XG4gIHdpZHRoOjUwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qQW5pbWF0aW9ucyovXG4uc2xpZGVtZW51IGxhYmVsLCAuc2xpZGVyIC5iYXIge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLypUb2dnbGUqL1xuXG4uc2xpZGVtZW51IC5zbGlkZS10b2dnbGU6Y2hlY2tlZCArIGxhYmVse1xuICBvcGFjaXR5OiAxO1xufVxuXG5cblxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0xOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAwOyB9XG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDI1JTsgfVxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0zOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiA1MCU7IH1cbiJdfQ== */");

/***/ }),

/***/ 17276:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/apropos/apropos.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n    \n<ion-header [translucent]=\"true\"  >\n  <ion-toolbar    background-image=\" linear-gradient(135deg,  #8EBF25,#8EBF25,#247238, #247238)\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" style=\"text-align:center; margin-left: 20xp;\" > Profil</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div id=\"container\">\n    <ion-grid class=\"ion-justify-content-center\" style=\"background-color:#f1f2f2\">\n      <ion-row>\n        <ion-col>\n          <div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            <ion-avatar>\n              <img  \n              src=\"https://www.computerhope.com/jargon/g/guest-user.jpg\">\n            </ion-avatar>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"background-color:#f1f2f2\">\n        <ion-col>\n          <div class=\"segment\">\n            <ion-label style=\"font-family:Montserrat,sans-serif; color:#898b8b;font-size: small;\">BEN ALI Nassir</ion-label>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"background-color:#f1f2f2\">\n        <ion-col></ion-col>\n        <ion-col>\n          <div>\n            <p style=\"font-family: Montserrat,sans-serif; color:#898b8b;font-size: small;\">253</p>\n          </div>\n          <div>\n            <p style=\"font-family: Montserrat,sans-serif; color:#898b8b;font-size: small;\">Publications</p>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            <p style=\"font-family: Montserrat,sans-serif; color:#898b8b;font-size: small;\">500</p>\n          </div>\n          <div>\n            <p style=\"font-family: Montserrat,sans-serif; color:#898b8b;font-size: small;\">Abonnés</p>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div>\n            <p style=\"font-family: Montserrat,sans-serif; color:#898b8b;font-size: small;\">2K</p>\n          </div>\n          <div>\n            <p style=\"font-family: Montserrat,sans-serif; color:#898b8b;font-size: small;\">Abonnements</p>\n          </div>\n        </ion-col>\n        <ion-col></ion-col>\n\n      </ion-row>\n      <ion-row style=\"background-color: white; height: 2px;\">\n\n      </ion-row>\n\n\n        <!-- <nav class=\"slidemenu\">\n  \n     \n          <input type=\"radio\" name=\"slideItem\" id=\"slide-item-1\" class=\"slide-toggle\" checked/>\n          <label style=\"padding-left: 10px;margin-right: 10px;\" for=\"slide-item-1\"><p class=\"icon\">♬</p><span>Home</span></label>\n          \n\n          <input type=\"radio\" name=\"slideItem\" id=\"slide-item-2\" class=\"slide-toggle\"/>\n          <label for=\"slide-item-2\"><p class=\"icon\">★</p><span>About</span></label>\n          \n          \n          <input type=\"radio\" name=\"slideItem\" id=\"slide-item-3\" class=\"slide-toggle\"/>\n          <label for=\"slide-item-3\"><p class=\"icon\">✈</p><span>Folio</span></label>\n          \n   \n          <div class=\"clear\"></div>\n          \n       \n          <div class=\"slider\">\n            <div class=\"bar\"></div>\n          </div>\n          \n        </nav>\n     -->\n\n\n\n      <!-- <ion-row style=\"background-color :#f1f2f2;padding-top: 5px;\">\n        <ion-col>\n          <button (click)=\"Button_Publication()\" class=\"unit\" type=\"button\">\n            <h6 style=\"font-family: Montserrat,sans-serif; color:#898b8b;font-size: small; \">Publications</h6>\n          \n          </button>\n        </ion-col>\n        <ion-col>\n          <button (click)=\"Button_A_Propos()\" routerLink=\"/apropos\" class=\"unit\" type=\"button\">\n            <h6 style=\"font-family: Montserrat,sans-serif; color:#898b8b;font-size: small; \"> A propos</h6>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button (click)=\"Button_Plus()\" class=\"unit\" type=\"button\">\n            <h6 style=\"font-family: Montserrat,sans-serif; color:#898b8b;font-size: small; \">Plus</h6>\n          </button>\n        </ion-col>\n      </ion-row> -->\n      <ion-row style=\"background-color: white !important;\">\n        <nav class=\"slidemenu\" style=\"width: 100%; margin-left: 80px;\">\n\n          <!-- Item 1 -->\n            <input type=\"radio\" name=\"slideItem\" id=\"slide-item-1\" class=\"slide-toggle\" />\n            <label for=\"slide-item-1\" style=\"margin-right: 10px;\"><p class=\"icon\"><img src=\"../../assets/icon/iconc2.png\" /></p></label>\n            \n      \n          <!-- Item 2 -->\n         \n            <input type=\"radio\" name=\"slideItem\" id=\"slide-item-2\" class=\"slide-toggle\" checked/>\n            <label for=\"slide-item-2\" style=\"margin-right: 10px;\"><p class=\"icon\"><img src=\"../../assets/icon/iconc3.png\" /></p></label>\n            \n      \n      \n          <!-- Item 3 -->\n      \n            <input type=\"radio\" name=\"slideItem\" id=\"slide-item-3\" class=\"slide-toggle\"/>\n            <label for=\"slide-item-3\" style=\"margin-right: 10px;\"><p class=\"icon\"><img src=\"../../assets/icon/iconc1.png\" /></p></label>\n            \n          \n      \n          <!-- Item 4 -->\n        \n          \n          <div class=\"clear\"></div>\n          \n          <!-- Bar -->\n          <div class=\"slider\">\n            <div class=\"bar\"></div>\n          </div>\n          \n        </nav>\n        <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"background-color :white;padding-bottom: 50px\" class=\"shadowbox\">\n          <ion-slide>\n            <div class=\"slide-content\" >\n              <ion-card style=\"background-color :#f1f2f2\">\n                <div class=\"concert bg\"></div>\n                <ion-card-header >\n                  <ion-card-title style=\"text-align: left;font-family: Montserrat;\">A propos :</ion-card-title>\n                </ion-card-header>\n                <ion-card-content class=\"item item-body\">\n                  <p style=\"text-align: left;font-family: Montserrat,sans-serif; color:#020202;font-size: small;\">\n                    It is a card game for you and small group of friends. \n                    When you start, you will be given a word or a category\n                    and one of the following subject areas: \n                    Song Lyrics, Song Title, Movie Quote, Movie Title, \n                    TV Show Quote, TV Show Title , or Book Title</p>\n      \n                </ion-card-content>\n              </ion-card>\n            </div>\n          </ion-slide>\n          <ion-slide>\n            <div class=\"slide-content\">\n              <ion-card style=\"background-color :#f1f2f2\">\n                <div class=\"concert bg\"></div>\n                <ion-card-header >\n                  <ion-card-title style=\"text-align: left;font-family: Montserrat;\">A propos :</ion-card-title>\n                </ion-card-header>\n                <ion-card-content class=\"item item-body\">\n                  <p style=\"text-align: left;font-family: Montserrat,sans-serif; color:#020202;font-size: small;\">\n                    It is a card game for you and small group of friends. \n                    When you start, you will be given a word or a category\n                    and one of the following subject areas: \n                    Song Lyrics, Song Title, Movie Quote, Movie Title, \n                    TV Show Quote, TV Show Title , or Book Title</p>\n      \n                </ion-card-content>\n              </ion-card>\n            </div>\n          </ion-slide>\n          <ion-slide>\n            <div class=\"slide-content\">\n              <ion-card style=\"background-color :#f1f2f2\">\n                <div class=\"concert bg\"></div>\n                <ion-card-header >\n                  <ion-card-title style=\"text-align: left;font-family: Montserrat;\">A propos :</ion-card-title>\n                </ion-card-header>\n                <ion-card-content class=\"item item-body\">\n                  <p style=\"text-align: left;font-family: Montserrat,sans-serif; color:#020202;font-size: small;\">\n                    It is a card game for you and small group of friends. \n                    When you start, you will be given a word or a category\n                    and one of the following subject areas: \n                    Song Lyrics, Song Title, Movie Quote, Movie Title, \n                    TV Show Quote, TV Show Title , or Book Title</p>\n      \n                </ion-card-content>\n              </ion-card>\n            </div>\n          </ion-slide>\n      \n        </ion-slides>\n      </ion-row>\n      <ion-row>\n      </ion-row>\n\n    </ion-grid>\n\n\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"myFooter\"  \n  style=\" margin-left: 10px;margin-right: 10px;margin-top: 7px;margin-bottom: 7px;\">\n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col>\n      <div>\n        <img src=\"../../assets/icon/icon2.png\" />\n      </div>\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col>\n      <div>\n        <img  routerLink=\"/shearch\" src=\"../../assets/icon/icon1.png\" />\n      </div>\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col>\n      <div>\n        <img src=\"../../assets/icon/icon5.png\" />\n      </div>\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col>\n      <div>\n        <img src=\"../../assets/icon/icon3.png\" />\n      </div>\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col>\n      <div>\n        <img src=\"../../assets/icon/icon4.png\" />\n      </div>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_apropos_apropos_module_ts.js.map