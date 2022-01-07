(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_erp_gestion-effectif_gestion-effectif_module_ts"],{

/***/ 31364:
/*!*********************************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-effectif/gestion-effectif-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionEffectifPageRoutingModule": () => (/* binding */ GestionEffectifPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _gestion_effectif_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestion-effectif.page */ 83535);




const routes = [
    {
        path: '',
        component: _gestion_effectif_page__WEBPACK_IMPORTED_MODULE_0__.GestionEffectifPage
    }
];
let GestionEffectifPageRoutingModule = class GestionEffectifPageRoutingModule {
};
GestionEffectifPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GestionEffectifPageRoutingModule);



/***/ }),

/***/ 18741:
/*!*************************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-effectif/gestion-effectif.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionEffectifPageModule": () => (/* binding */ GestionEffectifPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _gestion_effectif_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestion-effectif-routing.module */ 31364);
/* harmony import */ var _gestion_effectif_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestion-effectif.page */ 83535);







let GestionEffectifPageModule = class GestionEffectifPageModule {
};
GestionEffectifPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gestion_effectif_routing_module__WEBPACK_IMPORTED_MODULE_0__.GestionEffectifPageRoutingModule,
        ],
        declarations: [_gestion_effectif_page__WEBPACK_IMPORTED_MODULE_1__.GestionEffectifPage]
    })
], GestionEffectifPageModule);



/***/ }),

/***/ 83535:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-effectif/gestion-effectif.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionEffectifPage": () => (/* binding */ GestionEffectifPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_gestion_effectif_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gestion-effectif.page.html */ 19610);
/* harmony import */ var _gestion_effectif_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestion-effectif.page.scss */ 6001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _insert_effectif_modal_insert_effectif_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../insert-effectif-modal/insert-effectif-modal.page */ 19804);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ 71965);







let GestionEffectifPage = class GestionEffectifPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.eventSource = [];
        this.newEvent = {
            title: 'jujutsu',
            description: 'sience entrainement',
            startTime: '07 2021 11:00:00',
            endTime: '07 2021 12:00:00'
        };
    }
    ionViewDidEnter() {
        this.createBarChart();
    }
    createBarChart() {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart(this.barChart.nativeElement, {
            type: 'bar',
            data: {
                labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
                datasets: [{
                        label: 'effectif 1',
                        data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)'
                    },
                    {
                        label: 'effectif 2',
                        data: [3.5, 4.8, 6, 7.9, 7.9, 8.5, 11, 18],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)'
                    },
                    {
                        label: 'effectif 3',
                        data: [4.5, 5.8, 7, 8.9, 8.9, 9.5, 12, 19],
                        backgroundColor: 'rgba(75, 192, 192, 0.2)'
                    }]
            },
            options: {
                scales: {},
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            boxHeight: 15,
                            boxWidth: 15
                        }
                    }
                }
            }
        });
    }
    ngOnInit() {
    }
    openCalModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _insert_effectif_modal_insert_effectif_modal_page__WEBPACK_IMPORTED_MODULE_2__.InsertEffectifModalPage,
                cssClass: 'cal-modal',
                backdropDismiss: false
            });
            yield modal.present();
            modal.onDidDismiss().then((result) => {
                var events = [];
                let Start = result.data.event.startTime;
                let newDate = new Date(Start);
                let End = result.data.event.endTime;
                let newDate1 = new Date(End);
                events.push({
                    title: 'Event - ',
                    startTime: new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()),
                    endTime: new Date(newDate1.getFullYear(), newDate1.getMonth(), newDate1.getDate()),
                    allDay: false,
                });
                this.eventSource = events;
            });
        });
    }
    showHideForm() {
        this.showAddEvent = !this.showAddEvent;
        this.newEvent = {
            title: '',
            description: '',
            startTime: new Date().toISOString(),
            endTime: new Date().toISOString()
        };
    }
};
GestionEffectifPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
GestionEffectifPage.propDecorators = {
    barChart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['barChart',] }],
    myCal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_insert_effectif_modal_insert_effectif_modal_page__WEBPACK_IMPORTED_MODULE_2__.InsertEffectifModalPage,] }]
};
GestionEffectifPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-gestion-effectif',
        template: _raw_loader_gestion_effectif_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gestion_effectif_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GestionEffectifPage);



/***/ }),

/***/ 6001:
/*!*************************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-effectif/gestion-effectif.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 800;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n  width: 90px;\n  height: 30px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #247238;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg,#247238, #247238, #8EBF25,#8EBF25);\n}\n\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label, .slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n\n.HeaderFilter {\n  background-color: #e4e4e4;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.item, .item-divider {\n  border-color: red;\n}\n\n.myItem {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.ion-color-primary {\n  --ion-color-base: #247238 !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #247238) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #247238) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlc3Rpb24tZWZmZWN0aWYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFHSjs7QUFERTtFQUNFLHFCQUFBO0FBSUo7O0FBRkU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBS0o7O0FBR0c7RUFDQyxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFSTTtBQVFWOztBQUVFO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQWJRO0VBY1Isb0JBQUE7RUFDQSxhQWZRO0VBZ0JSLHlCQWRXO0VBZVgsMkJBQUE7QUFDRjs7QUFDRTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFERTtFQUNFLCtEQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdKOztBQUZJO0VBQ0UsZUFBQTtBQUlOOztBQUNJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUVOOztBQUFJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFFTjs7QUFBSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUVOOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBR0o7O0FBREU7RUFDRSxZQUFBO0FBSUo7O0FBRkU7RUFDRSxVQUFBO0FBS0o7O0FBSkk7RUFDRSxtQkFBQTtFQUNRLFdBQUE7RUFDTixZQUFBO0VBQ0EsWUFBQTtBQU1SOztBQUhBO0VBQ0UsdUVBQUE7QUFNRjs7QUFIQTtFQUNFLCtEQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0FBUUY7O0FBTkE7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQVNGOztBQVBBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVVGOztBQVBBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFVRjs7QUFSQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQVdGOztBQVJBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVdGOztBQVJBLFlBQUE7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFVRjs7QUFQQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVVGOztBQVBBLGFBQUE7O0FBQ0E7RUFDRSxpQ0FBQTtFQUNBLHlDQUFBO0VBQ0Esc0NBQUE7QUFVRjs7QUFQQSxTQUFBOztBQUVBO0VBQ0UsVUFBQTtBQVNGOztBQVBBO0VBQWlELGNBQUE7QUFXakQ7O0FBVkE7RUFBaUQsZ0JBQUE7QUFjakQ7O0FBYkE7RUFBaUQsZ0JBQUE7QUFpQmpEOztBQWhCQTtFQUNJLHlCQUFBO0FBbUJKOztBQWJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQWdCSjs7QUFkQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFpQko7O0FBZkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQWtCSjs7QUFoQkU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBbUJKOztBQWpCRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBb0JKOztBQWxCRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBcUJKOztBQW5CRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBc0JKOztBQXBCRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBdUJKOztBQXJCQTtFQUNJLGlCQUFBO0FBd0JKOztBQXRCRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUF5Qko7O0FBdkJFO0VBQ0Usb0NBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FBMEJKIiwiZmlsZSI6Imdlc3Rpb24tZWZmZWN0aWYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gICNjb250YWluZXIgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgI2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICM4YzhjOGM7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gICNjb250YWluZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gICNjb250YWluZXIge1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIC8vIGNzcyBidXR0b25cbiAgJHJ1bGVyOiAxNnB4O1xuICAkY29sb3ItcmVkOiAjNzI2YjZiO1xuICAkY29sb3ItYmc6ICNFQkVDRjA7XG4gICRjb2xvci1zaGFkb3c6ICNCQUJFQ0M7XG4gICRjb2xvci13aGl0ZTogI0ZGRjtcbiAgIGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyO1xuICB9XG4gIGJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAkcnVsZXI7XG4gIGJvcmRlci1yYWRpdXM6ICRydWxlcioyMDtcbiAgcGFkZGluZzogJHJ1bGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiRjb2xvci1iZztcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAkY29sb3Itd2hpdGU7XG4gIH1cbiAgYnV0dG9uIHtcbiAgY29sb3I6IzYxNjc3QztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IC01cHggLTVweCAyMHB4ICRjb2xvci13aGl0ZSwgIDFweCAxcHggNXB4IDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgJjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4ICRjb2xvci1zaGFkb3csIGluc2V0IC0xcHggLTFweCAycHggJGNvbG9yLXdoaXRlO1xuICB9XG4gICYudW5pdCB7XG4gICAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgbWFyZ2luOiAwICRydWxlci8yO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyKjEuMjtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgLmljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyBcbiAgICB9XG4gIH1cbiAgfVxuICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzNiU7XG4gICAgICBmb250LXNpemU6IDIuMGVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuMGVtO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MiU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuICAubXlGb290ZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gICAgcGFkZGluZy1ib3R0b206IDA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxcHggMXB4ICMyNDcyMzg7XG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgJHJ1bGVyKjI7XG4gICAgZm9udC1zaXplOiAkcnVsZXIqMy4yO1xuICAgIHdpZHRoOiAzNDBweDtcbiAgfVxuICAubXlnYWxsZXJ5e1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDsgXG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgfVxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbntcbiAgICBib3R0b206IDUlO1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyNDcyMzg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMHB4IDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4IDtcbiAgICAgICAgb3BhY2l0eTogNS4yO1xuICB9XG59XG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMjQ3MjM4LCAjMjQ3MjM4LCAgIzhFQkYyNSwjOEVCRjI1KTtcblxufVxuLnNoYWRvd2JveCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYsICNkZGQgNDAlLCAjY2NjKTtcbn1cbi5jbGVhcntcbiAgY2xlYXI6IGJvdGg7XG59XG4uc2xpZGUtdG9nZ2xle1xuICBkaXNwbGF5OiBub25lO1xufVxuLnNsaWRlbWVudXtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAxMHB4IDIwcHggMjBweCBhdXRvO1xufVxuLnNsaWRlbWVudSBsYWJlbHtcbiAgd2lkdGg6IDI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiBncmVlbjtcbiAgb3BhY2l0eTogMC4yO1xuXG59XG4uc2xpZGVtZW51IGxhYmVsOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5zbGlkZW1lbnUgbGFiZWwgc3BhbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7ICAgXG4gIGNvbG9yOiAjMjQ3MjM4OyBcbn1cblxuLnNsaWRlbWVudSBsYWJlbCAuaWNvbntcbiAgZm9udC1zaXplOiAzMHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjMjQ3MjM4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLypCYXIgU3R5bGUqL1xuXG4uc2xpZGVye1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNsaWRlciAuYmFye1xuICB3aWR0aDo1MCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKkFuaW1hdGlvbnMqL1xuLnNsaWRlbWVudSBsYWJlbCwgLnNsaWRlciAuYmFyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qVG9nZ2xlKi9cblxuLnNsaWRlbWVudSAuc2xpZGUtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbHtcbiAgb3BhY2l0eTogMTtcbn1cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMDsgfVxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0yOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAyNSU7IH1cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMzpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNTAlOyB9XG4uSGVhZGVyRmlsdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG4gIFxufVxuLkJhZHlGaWx0ZXJ7XG5cbn1cbiNjYXJ0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbn1cbi5vdXR0ZXItYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd2lkdGg6IDY0cHg7XG4gIH1cbiAgLmlubmVyLWJhZGdlLU9LIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmlubmVyLWJhZGdlLU9LIC5iYWRnZUNhbmNlbHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICAuaW5uZXItYmFkZ2UtS08ge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmlubmVyLWJhZGdlLUtPIC5iYWRnZUNhbmNlbHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4gIC5pbm5lci1iYWRnZS1UY2hhdCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTIzcHg7XG4gICAgbGVmdDogLTIwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaW5uZXItYmFkZ2UtVGNoYXQgLmJhZGdlQ2FuY2Vse1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cbi5pdGVtLCAuaXRlbS1kaXZpZGVyIHtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgfVxuICAubXlJdGVte1xuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xuICAgIHBhZGRpbmctYm90dG9tOiAwNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwICRydWxlcioyO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyKjMuMjtcbiAgICB3aWR0aDogMzQwcHg7XG4gIH1cbiAgLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMjQ3MjM4ICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMyNDcyMzgpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzI0NzIzOCkgIWltcG9ydGFudDt9Il19 */");

/***/ }),

/***/ 19610:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/erp/gestion-effectif/gestion-effectif.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar background-image=\" linear-gradient(135deg,  #8EBF25,#8EBF25,#247238, #247238)\">\n    <ion-buttons slot=\"start\">\n      <ion-icon routerLink=\"/erp-space\" color=\"light\" name=\"chevron-back-outline\"></ion-icon>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n\n\n    </ion-buttons>\n    <ion-title color=\"light\" style=\"text-align:center; margin-left: 20xp;\"> Gestion-effectif</ion-title>\n  </ion-toolbar>\n\n  <ion-segment>\n    <ion-segment-button value=\"vente\" routerLink=\"/gestion-vente\" checked>\n      Vente\n    </ion-segment-button>\n    <ion-segment-button value=\"facturation\" routerLink=\"/gestion-facturation\">\n      Facturation\n    </ion-segment-button>\n    <ion-segment-button value=\"effectif\" routerLink=\"/gestion-last-effectif\">\n      Effectif\n    </ion-segment-button>\n  </ion-segment>\n\n</ion-header>\n<ion-content>\n  <div id=\"container\">\n    <ion-card class=\"welcome-card\">\n      <ion-card-header>\n      </ion-card-header>\n      <ion-card-content>\n\n        <canvas #barChart></canvas>\n\n      </ion-card-content>\n    </ion-card>\n    <ion-row class=\"BadyFilter\">\n      <ion-row class=\"myItem\" style=\"width:95% ; border: 20px !important\">\n        <ion-col>\n          <ion-item-sliding>\n            <ion-item>\n              <ion-label>\n                <p>\n                  Effectif 1</p>\n              </ion-label>\n              <ion-img style=\"width: 20px;\" src=\"../../assets/ImgErp/flesh.png\"></ion-img>\n\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                style=\"background-image: linear-gradient(135deg,#247238, #247238,  #8EBF25,#8EBF25) !important\">\n                <div>\n                  <ion-icon style=\"padding-right:10px\" slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </div>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n      <ion-row class=\"myItem\" style=\"width:95% ; border: 20px !important\">\n        <ion-col>\n          <ion-item-sliding>\n            <ion-item>\n              <ion-label>\n                <p>\n                  Effectif 2</p>\n              </ion-label>\n              <ion-img style=\"width: 20px;\" src=\"../../assets/ImgErp/flesh.png\"></ion-img>\n\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                style=\"background-image: linear-gradient(135deg,#247238, #247238,  #8EBF25,#8EBF25) !important\">\n                <div>\n                  <ion-icon style=\"padding-right:10px\" slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </div>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n      <ion-row class=\"myItem\" style=\"width:95% ; border: 20px !important\">\n        <ion-col>\n          <ion-item-sliding>\n            <ion-item>\n              <ion-label>\n                <p>\n                  Effectif 3</p>\n              </ion-label>\n              <ion-img style=\"width: 20px;\" src=\"../../assets/ImgErp/flesh.png\"></ion-img>\n\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                style=\"background-image: linear-gradient(135deg,#247238, #247238,  #8EBF25,#8EBF25) !important\">\n                <div>\n                  <ion-icon style=\"padding-right:10px\" slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </div>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-row>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button style=\"width: 40px; height: 40px;\" color=\"primary\" (click)=\"openCalModal()\">\n      <h2 style=\"margin-top: 3px !important;font-size: 40px !important; \">+</h2>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n<ion-footer>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_erp_gestion-effectif_gestion-effectif_module_ts.js.map