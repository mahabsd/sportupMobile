(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_erp_gestion-last-effectif_gestion-last-effectif_module_ts"],{

/***/ 18845:
/*!*******************************************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-last-effectif/gestion-last-effectif-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionLastEffectifPageRoutingModule": () => (/* binding */ GestionLastEffectifPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _gestion_last_effectif_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestion-last-effectif.page */ 69593);




const routes = [
    {
        path: '',
        component: _gestion_last_effectif_page__WEBPACK_IMPORTED_MODULE_0__.GestionLastEffectifPage
    }
];
let GestionLastEffectifPageRoutingModule = class GestionLastEffectifPageRoutingModule {
};
GestionLastEffectifPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GestionLastEffectifPageRoutingModule);



/***/ }),

/***/ 46252:
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-last-effectif/gestion-last-effectif.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionLastEffectifPageModule": () => (/* binding */ GestionLastEffectifPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _gestion_last_effectif_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestion-last-effectif-routing.module */ 18845);
/* harmony import */ var _gestion_last_effectif_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestion-last-effectif.page */ 69593);







let GestionLastEffectifPageModule = class GestionLastEffectifPageModule {
};
GestionLastEffectifPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gestion_last_effectif_routing_module__WEBPACK_IMPORTED_MODULE_0__.GestionLastEffectifPageRoutingModule
        ],
        declarations: [_gestion_last_effectif_page__WEBPACK_IMPORTED_MODULE_1__.GestionLastEffectifPage]
    })
], GestionLastEffectifPageModule);



/***/ }),

/***/ 69593:
/*!*********************************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-last-effectif/gestion-last-effectif.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionLastEffectifPage": () => (/* binding */ GestionLastEffectifPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_gestion_last_effectif_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gestion-last-effectif.page.html */ 46416);
/* harmony import */ var _gestion_last_effectif_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestion-last-effectif.page.scss */ 83574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 71965);
/* harmony import */ var _insert_last_effectif_modal_insert_last_effectif_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../insert-last-effectif-modal/insert-last-effectif-modal.page */ 48590);







let GestionLastEffectifPage = class GestionLastEffectifPage {
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
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.barChart.nativeElement, {
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
                component: _insert_last_effectif_modal_insert_last_effectif_modal_page__WEBPACK_IMPORTED_MODULE_3__.InsertLastEffectifModalPage,
                cssClass: 'cal-modal',
                backdropDismiss: false
            });
            yield modal.present();
            modal.onDidDismiss().then((result) => {
                console.log('ggggggg', result.data);
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
                console.log(events);
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
GestionLastEffectifPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
GestionLastEffectifPage.propDecorators = {
    barChart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['barChart',] }],
    myCal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_insert_last_effectif_modal_insert_last_effectif_modal_page__WEBPACK_IMPORTED_MODULE_3__.InsertLastEffectifModalPage,] }]
};
GestionLastEffectifPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-gestion-last-effectif',
        template: _raw_loader_gestion_last_effectif_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gestion_last_effectif_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GestionLastEffectifPage);



/***/ }),

/***/ 83574:
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-last-effectif/gestion-last-effectif.page.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 800;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n  width: 90px;\n  height: 30px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #247238;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg,#247238, #247238, #8EBF25,#8EBF25);\n}\n\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label, .slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n\n.HeaderFilter {\n  background-color: #e4e4e4;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.item, .item-divider {\n  border-color: red;\n}\n\n.myItem {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.ion-color-primary {\n  --ion-color-base: #247238 !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #247238) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #247238) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlc3Rpb24tbGFzdC1lZmZlY3RpZi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUdKOztBQURFO0VBQ0UscUJBQUE7QUFJSjs7QUFGRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFLSjs7QUFHRztFQUNDLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQVJNO0FBUVY7O0FBRUU7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBYlE7RUFjUixvQkFBQTtFQUNBLGFBZlE7RUFnQlIseUJBZFc7RUFlWCwyQkFBQTtBQUNGOztBQUNFO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQURFO0VBQ0UsK0RBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBRkk7RUFDRSxlQUFBO0FBSU47O0FBQ0k7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBRU47O0FBQUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUVOOztBQUFJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRU47O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFERTtFQUNFLFlBQUE7QUFJSjs7QUFGRTtFQUNFLFVBQUE7QUFLSjs7QUFKSTtFQUNFLG1CQUFBO0VBQ1EsV0FBQTtFQUNOLFlBQUE7RUFDQSxZQUFBO0FBTVI7O0FBSEE7RUFDRSx1RUFBQTtBQU1GOztBQUhBO0VBQ0UsK0RBQUE7QUFNRjs7QUFKQTtFQUNFLFdBQUE7QUFPRjs7QUFMQTtFQUNFLGFBQUE7QUFRRjs7QUFOQTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBU0Y7O0FBUEE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBVUY7O0FBUEE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQVVGOztBQVJBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBV0Y7O0FBUkE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBV0Y7O0FBUkEsWUFBQTs7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVVGOztBQVBBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBVUY7O0FBUEEsYUFBQTs7QUFDQTtFQUNFLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxzQ0FBQTtBQVVGOztBQVBBLFNBQUE7O0FBRUE7RUFDRSxVQUFBO0FBU0Y7O0FBUEE7RUFBaUQsY0FBQTtBQVdqRDs7QUFWQTtFQUFpRCxnQkFBQTtBQWNqRDs7QUFiQTtFQUFpRCxnQkFBQTtBQWlCakQ7O0FBaEJBO0VBQ0kseUJBQUE7QUFtQko7O0FBYkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBZ0JKOztBQWRBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWlCSjs7QUFmRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBa0JKOztBQWhCRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFtQko7O0FBakJFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFvQko7O0FBbEJFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFxQko7O0FBbkJFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFzQko7O0FBcEJFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUF1Qko7O0FBckJBO0VBQ0ksaUJBQUE7QUF3Qko7O0FBdEJFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQXlCSjs7QUF2QkU7RUFDRSxvQ0FBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUEwQkoiLCJmaWxlIjoiZ2VzdGlvbi1sYXN0LWVmZmVjdGlmLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gICNjb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGNvbG9yOiAjOGM4YzhjO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAjY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICAvLyBjc3MgYnV0dG9uXG4gICRydWxlcjogMTZweDtcbiAgJGNvbG9yLXJlZDogIzcyNmI2YjtcbiAgJGNvbG9yLWJnOiAjRUJFQ0YwO1xuICAkY29sb3Itc2hhZG93OiAjQkFCRUNDO1xuICAkY29sb3Itd2hpdGU6ICNGRkY7XG4gICBidXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgICBmb250LXNpemU6ICRydWxlcjtcbiAgfVxuICBidXR0b24ge1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogJHJ1bGVyO1xuICBib3JkZXItcmFkaXVzOiAkcnVsZXIqMjA7XG4gIHBhZGRpbmc6ICRydWxlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjokY29sb3ItYmc7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDAgJGNvbG9yLXdoaXRlO1xuICB9XG4gIGJ1dHRvbiB7XG4gIGNvbG9yOiM2MTY3N0M7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3gtc2hhZG93OiAtNXB4IC01cHggMjBweCAkY29sb3Itd2hpdGUsICAxcHggMXB4IDVweCA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICY6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAkY29sb3Itc2hhZG93LCBpbnNldCAtMXB4IC0xcHggMnB4ICRjb2xvci13aGl0ZTtcbiAgfVxuICAmLnVuaXQge1xuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIG1hcmdpbjogMCAkcnVsZXIvMjtcbiAgICBmb250LXNpemU6ICRydWxlcioxLjI7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIC5pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDsgXG4gICAgfVxuICB9XG4gIH1cbiAgLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgICBpb24tY2FyZCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMzYlO1xuICAgICAgZm9udC1zaXplOiAyLjBlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLmNhcmQtc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTIlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbiAgLm15Rm9vdGVye1xuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xuICAgIHBhZGRpbmctYm90dG9tOiAwNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMXB4IDFweCAjMjQ3MjM4O1xuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwICRydWxlcioyO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyKjMuMjtcbiAgICB3aWR0aDogMzQwcHg7XG4gIH1cbiAgLm15Z2FsbGVyeXtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7IFxuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gIH1cbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb257XG4gICAgYm90dG9tOiA1JTtcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjQ3MjM4O1xuICAgICAgICAgICAgICB3aWR0aDogMTBweCA7XG4gICAgICAgIGhlaWdodDogMTBweCA7XG4gICAgICAgIG9wYWNpdHk6IDUuMjtcbiAgfVxufVxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzI0NzIzOCwgIzI0NzIzOCwgICM4RUJGMjUsIzhFQkYyNSk7XG5cbn1cbi5zaGFkb3dib3gge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmLCAjZGRkIDQwJSwgI2NjYyk7XG59XG4uY2xlYXJ7XG4gIGNsZWFyOiBib3RoO1xufVxuLnNsaWRlLXRvZ2dsZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zbGlkZW1lbnV7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggMTBweCAyMHB4IDIwcHggYXV0bztcbn1cbi5zbGlkZW1lbnUgbGFiZWx7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogZ3JlZW47XG4gIG9wYWNpdHk6IDAuMjtcblxufVxuLnNsaWRlbWVudSBsYWJlbDpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogZ3JlZW47XG59XG4uc2xpZGVtZW51IGxhYmVsIHNwYW57XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4OyAgIFxuICBjb2xvcjogIzI0NzIzODsgXG59XG5cbi5zbGlkZW1lbnUgbGFiZWwgLmljb257XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzI0NzIzODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qQmFyIFN0eWxlKi9cblxuLnNsaWRlcntcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zbGlkZXIgLmJhcntcbiAgd2lkdGg6NTAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLypBbmltYXRpb25zKi9cbi5zbGlkZW1lbnUgbGFiZWwsIC5zbGlkZXIgLmJhciB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4vKlRvZ2dsZSovXG5cbi5zbGlkZW1lbnUgLnNsaWRlLXRvZ2dsZTpjaGVja2VkICsgbGFiZWx7XG4gIG9wYWNpdHk6IDE7XG59XG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTE6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDA7IH1cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMjpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMjUlOyB9XG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTM6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDUwJTsgfVxuLkhlYWRlckZpbHRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xuICBcbn1cbi5CYWR5RmlsdGVye1xuXG59XG4jY2FydC1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG59XG4ub3V0dGVyLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHdpZHRoOiA2NHB4O1xuICB9XG4gIC5pbm5lci1iYWRnZS1PSyB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAtMjBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbm5lci1iYWRnZS1PSyAuYmFkZ2VDYW5jZWx7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLmlubmVyLWJhZGdlLUtPIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAtMTBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbm5lci1iYWRnZS1LTyAuYmFkZ2VDYW5jZWx7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuICAuaW5uZXItYmFkZ2UtVGNoYXQge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yM3B4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmlubmVyLWJhZGdlLVRjaGF0IC5iYWRnZUNhbmNlbHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG4uaXRlbSwgLml0ZW0tZGl2aWRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIH1cbiAgLm15SXRlbXtcbiAgICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDVweDtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBkaXNwbGF5OmlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCAkcnVsZXIqMjtcbiAgICBmb250LXNpemU6ICRydWxlciozLjI7XG4gICAgd2lkdGg6IDM0MHB4O1xuICB9XG4gIC5pb24tY29sb3ItcHJpbWFyeSB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzI0NzIzOCAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjMjQ3MjM4KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICMyNDcyMzgpICFpbXBvcnRhbnQ7fVxuICJdfQ== */");

/***/ }),

/***/ 46416:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/erp/gestion-last-effectif/gestion-last-effectif.page.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar background-image=\" linear-gradient(135deg,  #8EBF25,#8EBF25,#247238, #247238)\">\n    <ion-buttons slot=\"start\">\n      <ion-icon routerLink=\"/erp-space\" color=\"light\" name=\"chevron-back-outline\"></ion-icon>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n\n\n    </ion-buttons>\n    <ion-title color=\"light\" style=\"text-align:center; margin-left: 20xp;\"> Gestion effectif</ion-title>\n  </ion-toolbar>\n\n  <ion-segment>\n    <ion-segment-button value=\"vente\" routerLink=\"/gestion-vente\">\n      Vente\n    </ion-segment-button>\n    <ion-segment-button value=\"facturation\" routerLink=\"/gestion-facturation\">\n      Facturation\n    </ion-segment-button>\n    <ion-segment-button style=\"background-color: white;\" value=\"effectif11\" routerLink=\"/gestion-last-effectif\" checked>\n      Effectif\n    </ion-segment-button>\n  </ion-segment>\n\n</ion-header>\n<ion-content>\n  <div id=\"container\">\n    <ion-card class=\"welcome-card\">\n      <ion-card-header>\n      </ion-card-header>\n      <ion-card-content>\n\n        <canvas #barChart></canvas>\n\n      </ion-card-content>\n    </ion-card>\n    <ion-row class=\"BadyFilter\">\n      <ion-row class=\"myItem\" style=\"width:95% ; border: 20px !important\">\n        <ion-col>\n          <ion-item-sliding>\n            <ion-item>\n              <ion-label>\n                <p>\n                  Effectif 1</p>\n              </ion-label>\n              <ion-img style=\"width: 20px;\" src=\"../../assets/ImgErp/flesh.png\"></ion-img>\n\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                style=\"background-image: linear-gradient(135deg,#247238, #247238,  #8EBF25,#8EBF25) !important\">\n                <div>\n                  <ion-icon style=\"padding-right:10px\" slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </div>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n      <ion-row class=\"myItem\" style=\"width:95% ; border: 20px !important\">\n        <ion-col>\n          <ion-item-sliding>\n            <ion-item>\n              <ion-label>\n                <p>\n                  Effectif 2</p>\n              </ion-label>\n              <ion-img style=\"width: 20px;\" src=\"../../assets/ImgErp/flesh.png\"></ion-img>\n\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                style=\"background-image: linear-gradient(135deg,#247238, #247238,  #8EBF25,#8EBF25) !important\">\n                <div>\n                  <ion-icon style=\"padding-right:10px\" slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </div>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n      <ion-row class=\"myItem\" style=\"width:95% ; border: 20px !important\">\n        <ion-col>\n          <ion-item-sliding>\n            <ion-item>\n              <ion-label>\n                <p>\n                  Effectif 3</p>\n              </ion-label>\n              <ion-img style=\"width: 20px;\" src=\"../../assets/ImgErp/flesh.png\"></ion-img>\n\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                style=\"background-image: linear-gradient(135deg,#247238, #247238,  #8EBF25,#8EBF25) !important\">\n                <div>\n                  <ion-icon style=\"padding-right:10px\" slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </div>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-row>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button style=\"width: 40px; height: 40px;\" color=\"primary\" (click)=\"openCalModal()\">\n      <h2 style=\"margin-top: 3px !important;font-size: 40px !important; \">+</h2>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n<ion-footer>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_erp_gestion-last-effectif_gestion-last-effectif_module_ts.js.map