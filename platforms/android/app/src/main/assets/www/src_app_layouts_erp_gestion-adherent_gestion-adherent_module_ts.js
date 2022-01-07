(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_erp_gestion-adherent_gestion-adherent_module_ts"],{

/***/ 36909:
/*!*********************************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-adherent/gestion-adherent-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionAdherentPageRoutingModule": () => (/* binding */ GestionAdherentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _gestion_adherent_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestion-adherent.page */ 46006);




const routes = [
    {
        path: '',
        component: _gestion_adherent_page__WEBPACK_IMPORTED_MODULE_0__.GestionAdherentPage
    }
];
let GestionAdherentPageRoutingModule = class GestionAdherentPageRoutingModule {
};
GestionAdherentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GestionAdherentPageRoutingModule);



/***/ }),

/***/ 47255:
/*!*************************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-adherent/gestion-adherent.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionAdherentPageModule": () => (/* binding */ GestionAdherentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _gestion_adherent_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestion-adherent-routing.module */ 36909);
/* harmony import */ var _gestion_adherent_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestion-adherent.page */ 46006);







let GestionAdherentPageModule = class GestionAdherentPageModule {
};
GestionAdherentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gestion_adherent_routing_module__WEBPACK_IMPORTED_MODULE_0__.GestionAdherentPageRoutingModule,
        ],
        declarations: [_gestion_adherent_page__WEBPACK_IMPORTED_MODULE_1__.GestionAdherentPage]
    })
], GestionAdherentPageModule);



/***/ }),

/***/ 46006:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-adherent/gestion-adherent.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionAdherentPage": () => (/* binding */ GestionAdherentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_gestion_adherent_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gestion-adherent.page.html */ 96883);
/* harmony import */ var _gestion_adherent_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestion-adherent.page.scss */ 3684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _insert_adherent_modal_insert_adherent_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../insert-adherent-modal/insert-adherent-modal.page */ 68479);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ 71965);







let GestionAdherentPage = class GestionAdherentPage {
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
    ngOnInit() {
    }
    createBarChart() {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart(this.barChart.nativeElement, {
            type: 'line',
            data: {
                labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
                datasets: [{
                        label: 'adherent 1',
                        data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 0.2)'
                    },
                    {
                        label: 'adherent 2',
                        data: [4.5, 7.8, 3, 5.9, 9.9, 11.5, 7, 3],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 0.2)'
                    },
                    {
                        label: 'adherent 3',
                        data: [6.5, 4.8, 9, 2.2, 5.9, 3.5, 15, 10],
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 0.2)'
                        // fill: false,
                        // lineTension: 0.1,
                        // backgroundColor: 'rgba(75,192,192,0.4)',
                        // borderColor: 'rgba(75,192,192,1)',
                        // borderCapStyle: 'butt',
                        // borderDash: [],
                        // borderDashOffset: 0.0,
                        // borderJoinStyle: 'miter',
                        // pointBorderColor: 'rgba(75,192,192,1)',
                        // pointBackgroundColor: '#fff',
                        // pointBorderWidth: 1,
                        // pointHoverRadius: 5,
                        // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        // pointHoverBorderColor: 'rgba(220,220,220,1)',
                        // pointHoverBorderWidth: 2,
                        // pointRadius: 1,
                        // pointHitRadius: 10,
                        // spanGaps: false,
                        // borderWidth: 1
                        // radius: 5
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
            // options: {
            //   responsive: true,
            //   title: {
            //     display: true,
            //     position: "top",
            //     text: "Facebook to Instagram - Social Networking",
            //     fontSize: 12,
            //     fontColor: "#666"
            //   },
            //   legend: {
            //     display: true,
            //     position: "bottom",
            //     labels: {
            //       fontColor: "#999",
            //       fontSize: 14
            //     }
            //   }
        });
    }
    openCalModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _insert_adherent_modal_insert_adherent_modal_page__WEBPACK_IMPORTED_MODULE_2__.InsertAdherentModalPage,
                cssClass: 'cal-modal',
                backdropDismiss: false
            });
            yield modal.present();
            modal.onDidDismiss().then((result) => {
                const events = [];
                const start = result.data.event.startTime;
                const newDate = new Date(start);
                const end = result.data.event.endTime;
                const newDate1 = new Date(end);
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
GestionAdherentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
GestionAdherentPage.propDecorators = {
    barChart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['barChart',] }],
    myCal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_insert_adherent_modal_insert_adherent_modal_page__WEBPACK_IMPORTED_MODULE_2__.InsertAdherentModalPage,] }]
};
GestionAdherentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-gestion-adherent',
        template: _raw_loader_gestion_adherent_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gestion_adherent_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GestionAdherentPage);



/***/ }),

/***/ 3684:
/*!*************************************************************************!*\
  !*** ./src/app/layouts/erp/gestion-adherent/gestion-adherent.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 800;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n  width: 90px;\n  height: 30px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #247238;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg,#247238, #247238, #8EBF25,#8EBF25);\n}\n\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label, .slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n\n.HeaderFilter {\n  background-color: #e4e4e4;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.item, .item-divider {\n  border-color: red;\n}\n\n.myItem {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.ion-color-primary {\n  --ion-color-base: #247238 !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #247238) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #247238) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlc3Rpb24tYWRoZXJlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFHSjs7QUFERTtFQUNFLHFCQUFBO0FBSUo7O0FBRkU7RUFDRSxhQUFBO0VBSUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBRUo7O0FBTUc7RUFDQyxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFSTTtBQUtWOztBQUtFO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQWJRO0VBY1Isb0JBQUE7RUFDQSxhQWZRO0VBZ0JSLHlCQWRXO0VBZVgsMkJBQUE7QUFGRjs7QUFJRTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFFRTtFQUNFLCtEQUFBO0FBQUo7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUVJO0VBQ0UsZUFBQTtBQUFOOztBQUtJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUZOOztBQUlJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFGTjs7QUFJSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUZOOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBSUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBR0U7RUFDRSxZQUFBO0FBQUo7O0FBRUU7RUFDRSxVQUFBO0FBQ0o7O0FBQUk7RUFDRSxtQkFBQTtFQUNRLFdBQUE7RUFDTixZQUFBO0VBQ0EsWUFBQTtBQUVSOztBQUNBO0VBQ0UsdUVBQUE7QUFFRjs7QUFFQTtFQUdFLCtEQUFBO0FBREY7O0FBcUhBO0VBQ0UsV0FBQTtBQWxIRjs7QUFzSEE7RUFDRSxhQUFBO0FBbkhGOztBQXNIQTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBbkhGOztBQXVIQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFwSEY7O0FBd0hBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFySEY7O0FBd0hBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBckhGOztBQXdIQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFySEY7O0FBd0hBLFlBQUE7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF0SEY7O0FBeUhBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBdEhGOztBQXlIQSxhQUFBOztBQUNBO0VBQ0UsaUNBQUE7RUFDQSx5Q0FBQTtFQUNBLHNDQUFBO0FBdEhGOztBQXlIQSxTQUFBOztBQUVBO0VBQ0UsVUFBQTtBQXZIRjs7QUE0SEE7RUFBaUQsY0FBQTtBQXhIakQ7O0FBeUhBO0VBQWlELGdCQUFBO0FBckhqRDs7QUFzSEE7RUFBaUQsZ0JBQUE7QUFsSGpEOztBQW1IQTtFQUNJLHlCQUFBO0FBaEhKOztBQTBIQztFQUNHLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUF2SEo7O0FBMEhDO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBRUEsV0FBQTtBQXhISjs7QUEwSEU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQXZISjs7QUEySEU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBeEhKOztBQTRIRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBekhKOztBQTJIRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBeEhKOztBQTRIRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBekhKOztBQTJIRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBeEhKOztBQWdLQTtFQUNJLGlCQUFBO0FBN0pKOztBQStKRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUE1Sko7O0FBZ0tFO0VBQ0Usb0NBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FBN0pKIiwiZmlsZSI6Imdlc3Rpb24tYWRoZXJlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gICNjb250YWluZXIgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgI2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICM4YzhjOGM7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gICNjb250YWluZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gICNjb250YWluZXIge1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogRGFya0dyZWVuOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyNDcyMzgsICMyNDcyMzgsICAjOEVCRjI1LCM4RUJGMjUpO1xuICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICAvLyBjc3MgYnV0dG9uXG4gICRydWxlcjogMTZweDtcbiAgJGNvbG9yLXJlZDogIzcyNmI2YjtcbiAgJGNvbG9yLWJnOiAjRUJFQ0YwO1xuICAkY29sb3Itc2hhZG93OiAjQkFCRUNDO1xuICAkY29sb3Itd2hpdGU6ICNGRkY7XG4gICBidXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgICBmb250LXNpemU6ICRydWxlcjtcbiAgfVxuICBidXR0b24ge1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogJHJ1bGVyO1xuICBib3JkZXItcmFkaXVzOiAkcnVsZXIqMjA7XG4gIHBhZGRpbmc6ICRydWxlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjokY29sb3ItYmc7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDAgJGNvbG9yLXdoaXRlO1xuICB9XG4gIGJ1dHRvbiB7XG4gIGNvbG9yOiM2MTY3N0M7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3gtc2hhZG93OiAtNXB4IC01cHggMjBweCAkY29sb3Itd2hpdGUsICAxcHggMXB4IDVweCA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICY6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAkY29sb3Itc2hhZG93LCBpbnNldCAtMXB4IC0xcHggMnB4ICRjb2xvci13aGl0ZTtcbiAgfVxuICAmLnVuaXQge1xuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIC8vYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggMXB4O1xuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIG1hcmdpbjogMCAkcnVsZXIvMjtcbiAgICBmb250LXNpemU6ICRydWxlcioxLjI7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIC5pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDsgXG4gICAgfVxuICB9XG4gIH1cbiAgLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgICBpb24tY2FyZCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMzYlO1xuICAgICAgZm9udC1zaXplOiAyLjBlbTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLmNhcmQtc3VidGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTIlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbiAgLm15Rm9vdGVye1xuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xuICAgIHBhZGRpbmctYm90dG9tOiAwNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMXB4IDFweCAjMjQ3MjM4O1xuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwICRydWxlcioyO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyKjMuMjtcbiAgICB3aWR0aDogMzQwcHg7XG4gIH1cbiAgLm15Z2FsbGVyeXtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7IFxuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gIH1cbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIDpob3N0IDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb257XG4gICAgYm90dG9tOiA1JTtcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjQ3MjM4O1xuICAgICAgICAgICAgICB3aWR0aDogMTBweCA7XG4gICAgICAgIGhlaWdodDogMTBweCA7XG4gICAgICAgIG9wYWNpdHk6IDUuMjtcbiAgfVxufVxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzI0NzIzOCwgIzI0NzIzOCwgICM4RUJGMjUsIzhFQkYyNSk7XG5cbn1cblxuLnNoYWRvd2JveCB7XG4gLy8gYm9yZGVyOiAxcHggc29saWQgIzhFQkYyNTtcbiAvLyBib3gtc2hhZG93OiAycHggMXB4IDFweCAjMjQ3MjM4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmLCAjZGRkIDQwJSwgI2NjYyk7XG59XG5cblxuLy9cblxuXG5cbi8vIC5jbGVhcntcbi8vICAgY2xlYXI6IGJvdGg7XG4vLyB9XG5cblxuLy8gLnNsaWRlLXRvZ2dsZXtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cblxuLy8gLnNsaWRlbWVudXtcbi8vICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuLy8gICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAgIG1hcmdpbjogNTBweCBhdXRvO1xuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gfVxuXG4vLyAuc2xpZGVtZW51IGxhYmVse1xuLy8gICB3aWR0aDogMjUlO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBmbG9hdDogbGVmdDtcbi8vICAgY29sb3I6ICMzMzM7XG4vLyAgIG9wYWNpdHk6IDAuMjtcblxuLy8gfVxuXG5cblxuXG4vLyAuc2xpZGVtZW51IGxhYmVsIC5pY29ue1xuLy8gICBmb250LXNpemU6IDIwcHg7XG4vLyAgIGJvcmRlcjogc29saWQgMnB4ICMzMzM7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgaGVpZ2h0OiA1MHB4O1xuLy8gICB3aWR0aDogNTBweDtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICBsaW5lLWhlaWdodDogNTBweDtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gfVxuXG4vLyAvKkJhciBTdHlsZSovXG5cblxuXG4vLyAuc2xpZGVyIC5iYXJ7XG4vLyAgIHdpZHRoOiA1MCU7XG4vLyAgIGhlaWdodDogNXB4O1xuLy8gICBiYWNrZ3JvdW5kOiByZ2IoMSwgNjgsIDM3KTtcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gfVxuXG4vLyAvKkFuaW1hdGlvbnMqL1xuLy8gLnNsaWRlbWVudSBsYWJlbCwgLnNsaWRlciAuYmFyIHtcbi8vICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuLy8gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbi8vICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4vLyB9XG5cbi8vIC8qVG9nZ2xlKi9cblxuLy8gLnNsaWRlbWVudSAuc2xpZGUtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbHtcbi8vICAgb3BhY2l0eTogMTtcbi8vIH1cblxuXG5cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMDsgfVxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0yOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAzMCU7IH1cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMzpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNTAlOyB9XG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTQ6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDc1JTsgfVxuXG5cblxuLy8gbmF2IHtcbi8vICAgbWF4LXdpZHRoOjEwMCU7XG4vLyAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgI2ZmZmZmZiAyNSUsICNmZmZmZmYgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuLy8gICBtYXJnaW46IDAgYXV0bztcbi8vICAgcGFkZGluZzogMTBweCAwO1xuLy8gfVxuXG4vLyBuYXYgdWwge1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDI1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDc1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbi8vICAgYm94LXNoYWRvdzogMCAwIDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vIH1cblxuLy8gbmF2IHVsIGxpIHtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gfVxuXG4vLyBuYXYgdWwgbGkgYSB7XG4vLyAgIHBhZGRpbmc6MTBweDtcbi8vICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4vLyAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbi8vICAgY29sb3I6IGJsYWNrO1xuLy8gICBmb250LXNpemU6IDEwcHg7XG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyB9XG5cbi8vIG5hdiB1bCBsaSBhOmhvdmVyIHtcbi8vICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuLy8gICBjb2xvcjogIzhFQkYyNTtcbi8vIH1cblxuXG4uY2xlYXJ7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5cbi5zbGlkZS10b2dnbGV7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZW1lbnV7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggMTBweCAyMHB4IDIwcHggYXV0bztcbiAvLyBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2xpZGVtZW51IGxhYmVse1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IGdyZWVuO1xuICBvcGFjaXR5OiAwLjI7XG5cbn1cblxuLnNsaWRlbWVudSBsYWJlbDpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5zbGlkZW1lbnUgbGFiZWwgc3BhbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7ICAgXG4gIGNvbG9yOiAjMjQ3MjM4OyBcbn1cblxuLnNsaWRlbWVudSBsYWJlbCAuaWNvbntcbiAgZm9udC1zaXplOiAzMHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjMjQ3MjM4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLypCYXIgU3R5bGUqL1xuXG4uc2xpZGVye1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNsaWRlciAuYmFye1xuICB3aWR0aDo1MCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKkFuaW1hdGlvbnMqL1xuLnNsaWRlbWVudSBsYWJlbCwgLnNsaWRlciAuYmFyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qVG9nZ2xlKi9cblxuLnNsaWRlbWVudSAuc2xpZGUtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbHtcbiAgb3BhY2l0eTogMTtcbn1cblxuXG5cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMDsgfVxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0yOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAyNSU7IH1cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMzpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNTAlOyB9XG4uSGVhZGVyRmlsdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG4gICAvLyBoZWlnaHQ6IDUlO1xuICAgXG59XG4uQmFkeUZpbHRlcntcblxufVxuXG5cbiBcbiAjY2FydC1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gfVxuXG4gLm91dHRlci1iYWRnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICAvL2JhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDY0cHg7XG4gIH1cbiAgLmlubmVyLWJhZGdlLU9LIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBcblxuICB9XG4gIC5pbm5lci1iYWRnZS1PSyAuYmFkZ2VDYW5jZWx7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuXG4gIC5pbm5lci1iYWRnZS1LTyB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogLTEwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaW5uZXItYmFkZ2UtS08gLmJhZGdlQ2FuY2Vse1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgXG4gIH1cblxuICAuaW5uZXItYmFkZ2UtVGNoYXQge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yM3B4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmlubmVyLWJhZGdlLVRjaGF0IC5iYWRnZUNhbmNlbHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG5cblxuXG5cblxuXG5cblxuXG5cbi8vIHVsIHtcbi8vICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuLy8gICB3aWR0aDogNTAwcHg7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udDogYm9sZCAyMHB4LzEuNSBIZWx2ZXRpY2EsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4vLyB9XG5cbi8vIGxpIGltZyB7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gICBtYXJnaW46IDAgMTVweCAwIDA7XG4vLyB9XG5cbi8vIGxpIHAge1xuLy8gICBmb250OiAyMDAgMTJweC8xLjUgR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbi8vIH1cblxuLy8gbGkge1xuLy8gICBwYWRkaW5nOiAxMHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gbGk6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kOiAjZWVlO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi5pdGVtLCAuaXRlbS1kaXZpZGVyIHtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgfVxuICAubXlJdGVte1xuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xuICAgIHBhZGRpbmctYm90dG9tOiAwNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwICRydWxlcioyO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyKjMuMjtcbiAgICB3aWR0aDogMzQwcHg7XG5cbiAgfVxuXG4gIC5pb24tY29sb3ItcHJpbWFyeSB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzI0NzIzOCAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjMjQ3MjM4KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICMyNDcyMzgpICFpbXBvcnRhbnQ7fVxuXG4iXX0= */");

/***/ }),

/***/ 96883:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/erp/gestion-adherent/gestion-adherent.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar background-image=\" linear-gradient(135deg,  #8EBF25,#8EBF25,#247238, #247238)\">\n    <ion-buttons slot=\"start\">\n      <ion-icon routerLink=\"/erp-space\" color=\"light\" name=\"chevron-back-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title color=\"light\" style=\"text-align:center; margin-left: 20xp;\"> Gestion adherents</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div id=\"container\">\n    <ion-card class=\"welcome-card\">\n      <ion-card-header>\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #barChart></canvas>\n      </ion-card-content>\n    </ion-card>\n    <ion-row class=\"BadyFilter\">\n      <ion-row class=\"myItem\" style=\"width:95% ; border: 20px !important\">\n        <ion-col>\n          <ion-item-sliding>\n            <ion-item>\n              <ion-label>\n                <p> Adherent 1</p>\n              </ion-label>\n              <ion-img style=\"width: 20px;\" src=\"../../assets/ImgErp/flesh.png\"></ion-img>\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                style=\"background-image: linear-gradient(135deg,#247238, #247238,  #8EBF25,#8EBF25) !important\">\n                <div>\n                  <ion-icon style=\"padding-right:10px\" slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </div>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n      <ion-row class=\"myItem\" style=\"width:95% ; border: 20px !important\">\n        <ion-col>\n          <ion-item-sliding>\n            <ion-item>\n              <ion-label>\n                <p> Adherent 2</p>\n              </ion-label>\n              <ion-img style=\"width: 20px;\" src=\"../../assets/ImgErp/flesh.png\"></ion-img>\n\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                style=\"background-image: linear-gradient(135deg,#247238, #247238,  #8EBF25,#8EBF25) !important\">\n                <div>\n                  <ion-icon style=\"padding-right:10px\" slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </div>\n              </ion-item-option>\n            </ion-item-options>\n\n          </ion-item-sliding>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n\n      <ion-row class=\"myItem\" style=\"width:95% ; border: 20px !important\">\n        <ion-col>\n          <ion-item-sliding>\n            <ion-item>\n              <ion-label>\n                <p>\n\n                  Adherent 3</p>\n              </ion-label>\n              <ion-img style=\"width: 20px;\" src=\"../../assets/ImgErp/flesh.png\"></ion-img>\n\n            </ion-item>\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                style=\"background-image: linear-gradient(135deg,#247238, #247238,  #8EBF25,#8EBF25) !important\">\n                <div>\n                  <ion-icon style=\"padding-right:10px\" slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </div>\n              </ion-item-option>\n            </ion-item-options>\n\n          </ion-item-sliding>\n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-row>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button style=\"width: 40px; height: 40px;\" color=\"primary\" (click)=\"openCalModal()\">\n      <h2 style=\"margin-top: 3px !important;font-size: 40px !important; \">+</h2>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n<ion-footer>\n\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_erp_gestion-adherent_gestion-adherent_module_ts.js.map