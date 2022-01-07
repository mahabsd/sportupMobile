(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_erp_gestion-espace_gestion-espace_module_ts"],{

/***/ 48761:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-espace/gestion-espace-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionEspacePageRoutingModule": () => (/* binding */ GestionEspacePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _gestion_espace_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestion-espace.page */ 79441);




const routes = [
    {
        path: '',
        component: _gestion_espace_page__WEBPACK_IMPORTED_MODULE_0__.GestionEspacePage
    }
];
let GestionEspacePageRoutingModule = class GestionEspacePageRoutingModule {
};
GestionEspacePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GestionEspacePageRoutingModule);



/***/ }),

/***/ 39769:
/*!*********************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-espace/gestion-espace.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionEspacePageModule": () => (/* binding */ GestionEspacePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _gestion_espace_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestion-espace-routing.module */ 48761);
/* harmony import */ var _gestion_espace_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestion-espace.page */ 79441);







let GestionEspacePageModule = class GestionEspacePageModule {
};
GestionEspacePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gestion_espace_routing_module__WEBPACK_IMPORTED_MODULE_0__.GestionEspacePageRoutingModule,
        ],
        declarations: [_gestion_espace_page__WEBPACK_IMPORTED_MODULE_1__.GestionEspacePage]
    })
], GestionEspacePageModule);



/***/ }),

/***/ 79441:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-espace/gestion-espace.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionEspacePage": () => (/* binding */ GestionEspacePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_gestion_espace_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gestion-espace.page.html */ 23578);
/* harmony import */ var _gestion_espace_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestion-espace.page.scss */ 23210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _insert_espace_modal_insert_espace_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../insert-espace-modal/insert-espace-modal.page */ 55705);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ 71965);







let GestionEspacePage = class GestionEspacePage {
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
            type: 'doughnut',
            data: {
                labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
                datasets: [{
                        label: 'effectif 1',
                        data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ]
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
                component: _insert_espace_modal_insert_espace_modal_page__WEBPACK_IMPORTED_MODULE_2__.InsertEspaceModalPage,
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
GestionEspacePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
GestionEspacePage.propDecorators = {
    barChart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['barChart',] }],
    myCal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_insert_espace_modal_insert_espace_modal_page__WEBPACK_IMPORTED_MODULE_2__.InsertEspaceModalPage,] }]
};
GestionEspacePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-gestion-espace',
        template: _raw_loader_gestion_espace_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gestion_espace_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GestionEspacePage);



/***/ }),

/***/ 23210:
/*!*********************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-espace/gestion-espace.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 800;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n  width: 90px;\n  height: 30px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #247238;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg,#247238, #247238, #8EBF25,#8EBF25);\n}\n\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label, .slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n\n.HeaderFilter {\n  background-color: #e4e4e4;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.item, .item-divider {\n  border-color: red;\n}\n\n.myItem {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.ion-color-primary {\n  --ion-color-base: #247238 !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #247238) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #247238) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlc3Rpb24tZXNwYWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBR0o7O0FBREU7RUFDRSxxQkFBQTtBQUlKOztBQUZFO0VBQ0UsYUFBQTtFQUlBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUVKOztBQU1HO0VBQ0MscUNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBUk07QUFLVjs7QUFLRTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFiUTtFQWNSLG9CQUFBO0VBQ0EsYUFmUTtFQWdCUix5QkFkVztFQWVYLDJCQUFBO0FBRkY7O0FBSUU7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBRUU7RUFDRSwrREFBQTtBQUFKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBRUEsb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFFSTtFQUNFLGVBQUE7QUFBTjs7QUFLSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFGTjs7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRk47O0FBSUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFGTjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQURKOztBQUdFO0VBQ0UsWUFBQTtBQUFKOztBQUVFO0VBQ0UsVUFBQTtBQUNKOztBQUFJO0VBQ0UsbUJBQUE7RUFDUSxXQUFBO0VBQ04sWUFBQTtFQUNBLFlBQUE7QUFFUjs7QUFDQTtFQUNFLHVFQUFBO0FBRUY7O0FBRUE7RUFHRSwrREFBQTtBQURGOztBQXFIQTtFQUNFLFdBQUE7QUFsSEY7O0FBc0hBO0VBQ0UsYUFBQTtBQW5IRjs7QUFzSEE7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQW5IRjs7QUF1SEE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBcEhGOztBQXdIQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBckhGOztBQXdIQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQXJIRjs7QUF3SEE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBckhGOztBQXdIQSxZQUFBOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBdEhGOztBQXlIQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXRIRjs7QUF5SEEsYUFBQTs7QUFDQTtFQUNFLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxzQ0FBQTtBQXRIRjs7QUF5SEEsU0FBQTs7QUFFQTtFQUNFLFVBQUE7QUF2SEY7O0FBNEhBO0VBQWlELGNBQUE7QUF4SGpEOztBQXlIQTtFQUFpRCxnQkFBQTtBQXJIakQ7O0FBc0hBO0VBQWlELGdCQUFBO0FBbEhqRDs7QUFtSEE7RUFDSSx5QkFBQTtBQWhISjs7QUEwSEM7RUFDRyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBdkhKOztBQTBIQztFQUNHLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7QUF4SEo7O0FBMEhFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUF2SEo7O0FBMkhFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXhISjs7QUE0SEU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQXpISjs7QUEySEU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQXhISjs7QUE0SEU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQXpISjs7QUEySEU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQXhISjs7QUFnS0E7RUFDSSxpQkFBQTtBQTdKSjs7QUErSkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBNUpKOztBQWdLRTtFQUNFLG9DQUFBO0VBQ0EsMkVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQTdKSiIsImZpbGUiOiJnZXN0aW9uLWVzcGFjZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogIzhjOGM4YztcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgI2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBEYXJrR3JlZW47IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzI0NzIzOCwgIzI0NzIzOCwgICM4RUJGMjUsIzhFQkYyNSk7XG4gICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIC8vIGNzcyBidXR0b25cbiAgJHJ1bGVyOiAxNnB4O1xuICAkY29sb3ItcmVkOiAjNzI2YjZiO1xuICAkY29sb3ItYmc6ICNFQkVDRjA7XG4gICRjb2xvci1zaGFkb3c6ICNCQUJFQ0M7XG4gICRjb2xvci13aGl0ZTogI0ZGRjtcbiAgIGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyO1xuICB9XG4gIGJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAkcnVsZXI7XG4gIGJvcmRlci1yYWRpdXM6ICRydWxlcioyMDtcbiAgcGFkZGluZzogJHJ1bGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiRjb2xvci1iZztcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAkY29sb3Itd2hpdGU7XG4gIH1cbiAgYnV0dG9uIHtcbiAgY29sb3I6IzYxNjc3QztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IC01cHggLTVweCAyMHB4ICRjb2xvci13aGl0ZSwgIDFweCAxcHggNXB4IDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgJjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4ICRjb2xvci1zaGFkb3csIGluc2V0IC0xcHggLTFweCAycHggJGNvbG9yLXdoaXRlO1xuICB9XG4gICYudW5pdCB7XG4gICAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgLy9ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAxcHg7XG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgbWFyZ2luOiAwICRydWxlci8yO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyKjEuMjtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgLmljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyBcbiAgICB9XG4gIH1cbiAgfVxuICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzNiU7XG4gICAgICBmb250LXNpemU6IDIuMGVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuMGVtO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MiU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuICAubXlGb290ZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gICAgcGFkZGluZy1ib3R0b206IDA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxcHggMXB4ICMyNDcyMzg7XG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgJHJ1bGVyKjI7XG4gICAgZm9udC1zaXplOiAkcnVsZXIqMy4yO1xuICAgIHdpZHRoOiAzNDBweDtcbiAgfVxuICAubXlnYWxsZXJ5e1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDsgXG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgfVxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbntcbiAgICBib3R0b206IDUlO1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyNDcyMzg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMHB4IDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4IDtcbiAgICAgICAgb3BhY2l0eTogNS4yO1xuICB9XG59XG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMjQ3MjM4LCAjMjQ3MjM4LCAgIzhFQkYyNSwjOEVCRjI1KTtcblxufVxuXG4uc2hhZG93Ym94IHtcbiAvLyBib3JkZXI6IDFweCBzb2xpZCAjOEVCRjI1O1xuIC8vIGJveC1zaGFkb3c6IDJweCAxcHggMXB4ICMyNDcyMzg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYsICNkZGQgNDAlLCAjY2NjKTtcbn1cblxuXG4vL1xuXG5cblxuLy8gLmNsZWFye1xuLy8gICBjbGVhcjogYm90aDtcbi8vIH1cblxuXG4vLyAuc2xpZGUtdG9nZ2xle1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyAuc2xpZGVtZW51e1xuLy8gICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4vLyAgIG1heC13aWR0aDogMTAwJTtcbi8vICAgbWFyZ2luOiA1MHB4IGF1dG87XG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyB9XG5cbi8vIC5zbGlkZW1lbnUgbGFiZWx7XG4vLyAgIHdpZHRoOiAyNSU7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gICBjb2xvcjogIzMzMztcbi8vICAgb3BhY2l0eTogMC4yO1xuXG4vLyB9XG5cblxuXG5cbi8vIC5zbGlkZW1lbnUgbGFiZWwgLmljb257XG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgYm9yZGVyOiBzb2xpZCAycHggIzMzMztcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBoZWlnaHQ6IDUwcHg7XG4vLyAgIHdpZHRoOiA1MHB4O1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyB9XG5cbi8vIC8qQmFyIFN0eWxlKi9cblxuXG5cbi8vIC5zbGlkZXIgLmJhcntcbi8vICAgd2lkdGg6IDUwJTtcbi8vICAgaGVpZ2h0OiA1cHg7XG4vLyAgIGJhY2tncm91bmQ6IHJnYigxLCA2OCwgMzcpO1xuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyB9XG5cbi8vIC8qQW5pbWF0aW9ucyovXG4vLyAuc2xpZGVtZW51IGxhYmVsLCAuc2xpZGVyIC5iYXIge1xuLy8gICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4vLyAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuLy8gICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbi8vIH1cblxuLy8gLypUb2dnbGUqL1xuXG4vLyAuc2xpZGVtZW51IC5zbGlkZS10b2dnbGU6Y2hlY2tlZCArIGxhYmVse1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gfVxuXG5cblxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0xOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAwOyB9XG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDMwJTsgfVxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0zOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiA1MCU7IH1cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tNDpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNzUlOyB9XG5cblxuXG4vLyBuYXYge1xuLy8gICBtYXgtd2lkdGg6MTAwJTtcbi8vICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCAjZmZmZmZmIDI1JSwgI2ZmZmZmZiA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4vLyAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyB9XG5cbi8vIG5hdiB1bCB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMjUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuLy8gICBib3gtc2hhZG93OiAwIDAgMjVweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gfVxuXG4vLyBuYXYgdWwgbGkge1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyB9XG5cbi8vIG5hdiB1bCBsaSBhIHtcbi8vICAgcGFkZGluZzoxMHB4O1xuLy8gICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbi8vICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuLy8gICBjb2xvcjogYmxhY2s7XG4vLyAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vIH1cblxuLy8gbmF2IHVsIGxpIGE6aG92ZXIge1xuLy8gICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4vLyAgIGNvbG9yOiAjOEVCRjI1O1xuLy8gfVxuXG5cbi5jbGVhcntcbiAgY2xlYXI6IGJvdGg7XG59XG5cblxuLnNsaWRlLXRvZ2dsZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlbWVudXtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAxMHB4IDIwcHggMjBweCBhdXRvO1xuIC8vIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbGlkZW1lbnUgbGFiZWx7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogZ3JlZW47XG4gIG9wYWNpdHk6IDAuMjtcblxufVxuXG4uc2xpZGVtZW51IGxhYmVsOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnNsaWRlbWVudSBsYWJlbCBzcGFue1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDsgICBcbiAgY29sb3I6ICMyNDcyMzg7IFxufVxuXG4uc2xpZGVtZW51IGxhYmVsIC5pY29ue1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICMyNDcyMzg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKkJhciBTdHlsZSovXG5cbi5zbGlkZXJ7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2xpZGVyIC5iYXJ7XG4gIHdpZHRoOjUwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qQW5pbWF0aW9ucyovXG4uc2xpZGVtZW51IGxhYmVsLCAuc2xpZGVyIC5iYXIge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLypUb2dnbGUqL1xuXG4uc2xpZGVtZW51IC5zbGlkZS10b2dnbGU6Y2hlY2tlZCArIGxhYmVse1xuICBvcGFjaXR5OiAxO1xufVxuXG5cblxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0xOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAwOyB9XG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDI1JTsgfVxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0zOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiA1MCU7IH1cbi5IZWFkZXJGaWx0ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcbiAgIC8vIGhlaWdodDogNSU7XG4gICBcbn1cbi5CYWR5RmlsdGVye1xuXG59XG5cblxuIFxuICNjYXJ0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiB9XG5cbiAub3V0dGVyLWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIC8vYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogNjRweDtcbiAgfVxuICAuaW5uZXItYmFkZ2UtT0sge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogLTIwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIFxuXG4gIH1cbiAgLmlubmVyLWJhZGdlLU9LIC5iYWRnZUNhbmNlbHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG5cbiAgLmlubmVyLWJhZGdlLUtPIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAtMTBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbm5lci1iYWRnZS1LTyAuYmFkZ2VDYW5jZWx7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBcbiAgfVxuXG4gIC5pbm5lci1iYWRnZS1UY2hhdCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTIzcHg7XG4gICAgbGVmdDogLTIwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaW5uZXItYmFkZ2UtVGNoYXQgLmJhZGdlQ2FuY2Vse1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gIH1cblxuXG5cblxuXG5cblxuXG5cblxuLy8gdWwge1xuLy8gICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4vLyAgIHdpZHRoOiA1MDBweDtcbi8vIH1cblxuLy8gaDMge1xuLy8gICBmb250OiBib2xkIDIwcHgvMS41IEhlbHZldGljYSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbi8vIH1cblxuLy8gbGkgaW1nIHtcbi8vICAgZmxvYXQ6IGxlZnQ7XG4vLyAgIG1hcmdpbjogMCAxNXB4IDAgMDtcbi8vIH1cblxuLy8gbGkgcCB7XG4vLyAgIGZvbnQ6IDIwMCAxMnB4LzEuNSBHZW9yZ2lhLCBUaW1lcyBOZXcgUm9tYW4sIHNlcmlmO1xuLy8gfVxuXG4vLyBsaSB7XG4vLyAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gfVxuXG4vLyBsaTpob3ZlciB7XG4vLyAgIGJhY2tncm91bmQ6ICNlZWU7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cblxuLml0ZW0sIC5pdGVtLWRpdmlkZXIge1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xuICB9XG4gIC5teUl0ZW17XG4gICAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gICAgcGFkZGluZy1ib3R0b206IDA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgJHJ1bGVyKjI7XG4gICAgZm9udC1zaXplOiAkcnVsZXIqMy4yO1xuICAgIHdpZHRoOiAzNDBweDtcblxuICB9XG5cbiAgLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjMjQ3MjM4ICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiwgNTYsIDEyOCwgMjU1KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMyNDcyMzgpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzI0NzIzOCkgIWltcG9ydGFudDt9XG5cbiJdfQ== */");

/***/ }),

/***/ 23578:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/erp/gestion-espace/gestion-espace.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar background-image=\" linear-gradient(135deg,  #8EBF25,#8EBF25,#247238, #247238)\">\n    <ion-buttons slot=\"start\">\n      <ion-icon href=\"/erp-space\" color=\"light\" name=\"chevron-back-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title color=\"light\" style=\"text-align:center; margin-left: 20xp;\"> Gestion d'espace</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div id=\"container\">\n\n    <ion-card class=\"welcome-card\">\n      <ion-card-header>\n      </ion-card-header>\n      <ion-card-content>\n\n        <canvas #barChart></canvas>\n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-row class=\"BadyFilter\">\n      <ion-row class=\"myItem\" style=\"width:95% ; border: 20px !important\">\n        <ion-col>\n          <ion-item-sliding>\n            <ion-item>\n              <ion-label>\n                <p>\n\n                  Espace 1</p>\n              </ion-label>\n              <ion-img style=\"width: 20px;\" src=\"../../assets/ImgErp/flesh.png\"></ion-img>\n\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                style=\"background-image: linear-gradient(135deg,#247238, #247238,  #8EBF25,#8EBF25) !important\">\n                <div>\n                  <ion-icon style=\"padding-right:10px\" slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </div>\n              </ion-item-option>\n            </ion-item-options>\n\n          </ion-item-sliding>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <ion-row class=\"myItem\" style=\"width:95% ; border: 20px !important\">\n        <ion-col>\n          <ion-item-sliding>\n            <ion-item>\n              <ion-label>\n                <p>\n\n                  Espace 2</p>\n              </ion-label>\n              <ion-img style=\"width: 20px;\" src=\"../../assets/ImgErp/flesh.png\"></ion-img>\n\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                style=\"background-image: linear-gradient(135deg,#247238, #247238,  #8EBF25,#8EBF25) !important\">\n                <div>\n                  <ion-icon style=\"padding-right:10px\" slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </div>\n              </ion-item-option>\n            </ion-item-options>\n\n          </ion-item-sliding>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <ion-row class=\"myItem\" style=\"width:95% ; border: 20px !important\">\n        <ion-col>\n          <ion-item-sliding>\n            <ion-item>\n              <ion-label>\n                <p>\n\n                  Espace 3</p>\n              </ion-label>\n              <ion-img style=\"width: 20px;\" src=\"../../assets/ImgErp/flesh.png\"></ion-img>\n\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                style=\"background-image: linear-gradient(135deg,#247238, #247238,  #8EBF25,#8EBF25) !important\">\n                <div>\n                  <ion-icon style=\"padding-right:10px\" slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </div>\n              </ion-item-option>\n            </ion-item-options>\n\n          </ion-item-sliding>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-row>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button style=\"width: 40px; height: 40px;\" color=\"primary\" (click)=\"openCalModal()\">\n      <h2 style=\"margin-top: 3px !important;font-size: 40px !important; \">+</h2>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n<ion-footer>\n\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_erp_gestion-espace_gestion-espace_module_ts.js.map