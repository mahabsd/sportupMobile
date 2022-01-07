(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_historiqueerp_historiqueerp_module_ts"],{

/***/ 3116:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/historiqueerp/historiqueerp-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriqueerpPageRoutingModule": () => (/* binding */ HistoriqueerpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _historiqueerp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historiqueerp.page */ 75089);




const routes = [
    {
        path: '',
        component: _historiqueerp_page__WEBPACK_IMPORTED_MODULE_0__.HistoriqueerpPage
    }
];
let HistoriqueerpPageRoutingModule = class HistoriqueerpPageRoutingModule {
};
HistoriqueerpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoriqueerpPageRoutingModule);



/***/ }),

/***/ 24200:
/*!***************************************************************!*\
  !*** ./src/app/layouts/historiqueerp/historiqueerp.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriqueerpPageModule": () => (/* binding */ HistoriqueerpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _historiqueerp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historiqueerp-routing.module */ 3116);
/* harmony import */ var _historiqueerp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historiqueerp.page */ 75089);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let HistoriqueerpPageModule = class HistoriqueerpPageModule {
};
HistoriqueerpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _historiqueerp_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoriqueerpPageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_historiqueerp_page__WEBPACK_IMPORTED_MODULE_1__.HistoriqueerpPage]
    })
], HistoriqueerpPageModule);



/***/ }),

/***/ 75089:
/*!*************************************************************!*\
  !*** ./src/app/layouts/historiqueerp/historiqueerp.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriqueerpPage": () => (/* binding */ HistoriqueerpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_historiqueerp_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./historiqueerp.page.html */ 25309);
/* harmony import */ var _historiqueerp_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historiqueerp.page.scss */ 66486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _erp_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../erp/top-menu/top-menu.component */ 477);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);








let HistoriqueerpPage = class HistoriqueerpPage {
    constructor(alertController, modalController) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.checkedEvents = [1];
        this.events = [
            { titre: 'Cours de natation adulte', date: new Date(), description: 'description evenement' },
            // eslint-disable-next-line max-len
            { titre: 'Cours de natation adulte', date: Date.parse('16 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
            // eslint-disable-next-line max-len
            { titre: 'Cours de natation adulte', date: Date.parse('15 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
            { titre: 'Cours de natation adulte', date: Date.parse('15 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
            { titre: 'Cours de natation adulte', date: Date.parse('15 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
            { titre: 'Cours de natation adulte', date: Date.parse('14 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
            { titre: 'Cours de natation adulte', date: Date.parse('13 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
            { titre: 'Cours de natation adulte', date: Date.parse('12 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
            { titre: 'Cours de natation adulte', date: Date.parse('12 Aug 2021 00:00:00 GMT'), description: 'description evenement' },
        ];
    }
    addEventChecked(event) {
        this.checkedEvents.push(event);
    }
    check(event) {
        if (this.checkedEvents.includes(event)) {
            return true;
        }
        return false;
    }
    ngOnInit() {
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _erp_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_2__.TopMenuComponent,
                cssClass: 'erp-parametre-modal'
            });
            return yield modal.present();
        });
    }
    presentAlertConfirm(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.checkedEvents.includes(event)) {
                const alert = yield this.alertController.create({
                    header: 'Confirmer',
                    message: 'êtes-vous sûr ?',
                    buttons: [
                        {
                            text: 'Annuler',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                console.log('null');
                            }
                        }, {
                            text: 'Oui',
                            handler: () => {
                                this.addEventChecked(event);
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    separateDate(record, recordIndex, records) {
        const datepipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe('en-US');
        if (recordIndex === 0) {
            return record.date;
        }
        const firstPrev = datepipe.transform(records[recordIndex - 1].date, 'MM/dd/yyyy');
        const firstCurrent = datepipe.transform(record.date, 'MM/dd/yyyy');
        //transformer  firstprev et firstcurrent au format (dd/mm/yyyy) et apres les comparer
        const datenow = new Date();
        if (firstPrev !== firstCurrent) {
            return firstCurrent;
        }
        return null;
    }
};
HistoriqueerpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
HistoriqueerpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-historiqueerp',
        template: _raw_loader_historiqueerp_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_historiqueerp_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HistoriqueerpPage);



/***/ }),

/***/ 66486:
/*!***************************************************************!*\
  !*** ./src/app/layouts/historiqueerp/historiqueerp.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container strong {\n  font-size: 10px;\n  line-height: 20px;\n}\n\n#container p {\n  font-size: 10px;\n  line-height: 18px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 800;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n  width: 90px;\n  height: 30px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #247238;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg,#247238, #247238, #8EBF25,#8EBF25);\n}\n\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label, .slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n\n.HeaderFilter {\n  background-color: #e4e4e4;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.item, .item-divider {\n  border-color: red;\n}\n\n.myItem {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.ion-color-primary {\n  --ion-color-base: #247238 !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #247238) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #247238) !important;\n}\n\n/*Optional*/\n\n.bar-stable {\n  background-color: #d9d9d9 !important;\n}\n\n.tabs {\n  background-color: #d9d9d9 !important;\n}\n\n.icon-size-lg {\n  font-size: 40px;\n}\n\n/*Timeline*/\n\n.pos-absolute-right {\n  position: absolute;\n  right: 8px;\n}\n\n.timeline {\n  position: relative;\n  margin: 9px 0 0 0;\n}\n\n.timeline:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: #06cc34;\n  left: 34px;\n  margin-left: -10px;\n  z-index: 1;\n}\n\n.timeline .timeline-thumb {\n  border-radius: 300px;\n  width: 30px;\n  height: 30px;\n  z-index: 1;\n  position: absolute;\n  left: 10px;\n}\n\n.timeline .timeline-thumb.timeline-icon {\n  height: 30px;\n  text-align: center;\n  color: white;\n  border: 5px solid #CBD0D3;\n}\n\n.timeline .timeline-thumb.timeline-icon i {\n  font-size: 15px;\n  margin: 3px 0;\n  display: block;\n}\n\n.timeline .timeline-item {\n  margin-left: 22px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 8px;\n}\n\n.timeline .timeline-stats {\n  position: relative;\n  font-size: 10px;\n  color: #7F8C8D;\n}\n\n.divider-title {\n  background: #e4e4e4;\n  padding: 2x 2px;\n  padding-left: 20px;\n  margin-left: 25px;\n  font-size: small;\n}\n\n/* === Color Themes === */\n\n.text-muted {\n  color: #6d6d72 !important;\n}\n\n.color-gray {\n  color: #8e8e93 !important;\n}\n\n.color-red {\n  color: #ff3b30 !important;\n}\n\n.bg-color-red {\n  background-color: #ff3b30 !important;\n}\n\n.color-white {\n  color: #ffffff !important;\n}\n\n.color-yellow {\n  color: #ffcc00 !important;\n}\n\n.bg-color-yellow {\n  background-color: #ffcc00 !important;\n}\n\n.color-green {\n  color: #4cd964 !important;\n}\n\n.color-orange {\n  color: #ff9500 !important;\n}\n\n.bg-color-orange {\n  background-color: #ff9500 !important;\n}\n\n.color-blue {\n  color: #007aff !important;\n}\n\n.bg-color-blue {\n  background-color: #007aff !important;\n}\n\n.color-lightblue {\n  color: #5ac8fa !important;\n}\n\n.bg-color-lightblue {\n  background-color: #5ac8fa !important;\n}\n\n.color-bluegray {\n  color: #607d8b !important;\n}\n\n.bg-color-bluegray {\n  background-color: #607d8b !important;\n}\n\n.color-night {\n  color: #2B1B17 !important;\n}\n\n.color-black {\n  color: black !important;\n}\n\n.bg-color-white {\n  background-color: #ffffff;\n}\n\n.bg-color-green {\n  background-color: #4cd964 !important;\n}\n\n.container-timeline {\n  padding: 10px;\n}\n\n.line {\n  margin-top: 100px;\n  background: linear-gradient(300deg, #8EBF25, #3b8c4f, #247238, #247238);\n  height: 200%;\n  width: 5px;\n  position: fixed;\n  top: 0%;\n  left: 22px;\n  transform: translate(-50%, -50%);\n}\n\n.imageCheck {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.item, .item-divider {\n  border-color: lightgray;\n}\n\nion-buttons ion-button {\n  --border-radius: 50%;\n  border-radius: 50%;\n  background: #1313131f;\n  width: 36px;\n  height: 36px;\n}\n\n.dateHeader {\n  margin-left: 30px;\n  font-size: 12px;\n  color: #313131;\n}\n\n.item .item-divider {\n  border-color: #ffffff00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcmlxdWVlcnAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBSUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBRUY7O0FBTUM7RUFDQyxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFSTTtBQUtSOztBQUtBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQWJRO0VBY1Isb0JBQUE7RUFDQSxhQWZRO0VBZ0JSLHlCQWRXO0VBZVgsMkJBQUE7QUFGQTs7QUFJQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFEQTs7QUFFQTtFQUNFLCtEQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUVFO0VBQ0UsZUFBQTtBQUFKOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFGSjs7QUFJRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRkY7O0FBSUE7RUFD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QTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0FBL0pSOztBQW1LQTtFQUVFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQWpLRjs7QUFxS0E7RUFDRSx1QkFBQTtBQWxLRjs7QUFxS0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWxLRjs7QUF1S0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBcEtKOztBQXlLQTtFQUNFLHVCQUFBO0FBdEtGIiwiZmlsZSI6Imhpc3RvcmlxdWVlcnAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogRGFya0dyZWVuOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMjQ3MjM4LCAjMjQ3MjM4LCAgIzhFQkYyNSwjOEVCRjI1KTtcbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi8vIGNzcyBidXR0b25cbiRydWxlcjogMTZweDtcbiRjb2xvci1yZWQ6ICM3MjZiNmI7XG4kY29sb3ItYmc6ICNFQkVDRjA7XG4kY29sb3Itc2hhZG93OiAjQkFCRUNDO1xuJGNvbG9yLXdoaXRlOiAjRkZGO1xuIGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gIGZvbnQtc2l6ZTogJHJ1bGVyO1xufVxuYnV0dG9uIHtcbmJvcmRlcjogMDtcbm91dGxpbmU6IDA7XG5mb250LXNpemU6ICRydWxlcjtcbmJvcmRlci1yYWRpdXM6ICRydWxlcioyMDtcbnBhZGRpbmc6ICRydWxlcjtcbmJhY2tncm91bmQtY29sb3I6JGNvbG9yLWJnO1xudGV4dC1zaGFkb3c6IDFweCAxcHggMCAkY29sb3Itd2hpdGU7XG59XG5idXR0b24ge1xuY29sb3I6IzYxNjc3QztcbmZvbnQtd2VpZ2h0OiBib2xkO1xuYm94LXNoYWRvdzogLTVweCAtNXB4IDIwcHggJGNvbG9yLXdoaXRlLCAgMXB4IDFweCA1cHggO1xudHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG5jdXJzb3I6IHBvaW50ZXI7XG5mb250LXdlaWdodDogODAwO1xuJjphY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAkY29sb3Itc2hhZG93LCBpbnNldCAtMXB4IC0xcHggMnB4ICRjb2xvci13aGl0ZTtcbn1cbiYudW5pdCB7XG4gIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xuICBsaW5lLWhlaWdodDogMDtcbiAgLy9ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAxcHg7XG4gIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIG1hcmdpbjogMCAkcnVsZXIvMjtcbiAgZm9udC1zaXplOiAkcnVsZXIqMS4yO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICAuaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwOyBcbiAgfVxufVxufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgaW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNhcmQtdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM2JTtcbiAgICBmb250LXNpemU6IDIuMGVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMGVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUyJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuLm15Rm9vdGVye1xuICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcbiAgcGFkZGluZy1ib3R0b206IDA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCAxcHggIzI0NzIzODtcbiAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCAkcnVsZXIqMjtcbiAgZm9udC1zaXplOiAkcnVsZXIqMy4yO1xuICB3aWR0aDogMzQwcHg7XG59XG4ubXlnYWxsZXJ5e1xuICBib3JkZXItcmFkaXVzOiA2cHg7IFxuICBkaXNwbGF5OmlubGluZS1mbGV4O1xufVxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb257XG4gIGJvdHRvbTogNSU7XG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjQ3MjM4O1xuICAgICAgICAgICAgd2lkdGg6IDEwcHggO1xuICAgICAgaGVpZ2h0OiAxMHB4IDtcbiAgICAgIG9wYWNpdHk6IDUuMjtcbn1cbn1cbmlvbi10b29sYmFyIHtcbi0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMjQ3MjM4LCAjMjQ3MjM4LCAgIzhFQkYyNSwjOEVCRjI1KTtcblxufVxuXG4uc2hhZG93Ym94IHtcbi8vIGJvcmRlcjogMXB4IHNvbGlkICM4RUJGMjU7XG4vLyBib3gtc2hhZG93OiAycHggMXB4IDFweCAjMjQ3MjM4O1xuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZiwgI2RkZCA0MCUsICNjY2MpO1xufVxuXG5cbi8vXG5cblxuXG4vLyAuY2xlYXJ7XG4vLyAgIGNsZWFyOiBib3RoO1xuLy8gfVxuXG5cbi8vIC5zbGlkZS10b2dnbGV7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIC5zbGlkZW1lbnV7XG4vLyAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbi8vICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gICBtYXJnaW46IDUwcHggYXV0bztcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vIH1cblxuLy8gLnNsaWRlbWVudSBsYWJlbHtcbi8vICAgd2lkdGg6IDI1JTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgZmxvYXQ6IGxlZnQ7XG4vLyAgIGNvbG9yOiAjMzMzO1xuLy8gICBvcGFjaXR5OiAwLjI7XG5cbi8vIH1cblxuXG5cblxuLy8gLnNsaWRlbWVudSBsYWJlbCAuaWNvbntcbi8vICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICBib3JkZXI6IHNvbGlkIDJweCAjMzMzO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGhlaWdodDogNTBweDtcbi8vICAgd2lkdGg6IDUwcHg7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBtYXJnaW46IDAgYXV0bztcbi8vICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vIH1cblxuLy8gLypCYXIgU3R5bGUqL1xuXG5cblxuLy8gLnNsaWRlciAuYmFye1xuLy8gICB3aWR0aDogNTAlO1xuLy8gICBoZWlnaHQ6IDVweDtcbi8vICAgYmFja2dyb3VuZDogcmdiKDEsIDY4LCAzNyk7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vIH1cblxuLy8gLypBbmltYXRpb25zKi9cbi8vIC5zbGlkZW1lbnUgbGFiZWwsIC5zbGlkZXIgLmJhciB7XG4vLyAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbi8vICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4vLyAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuLy8gfVxuXG4vLyAvKlRvZ2dsZSovXG5cbi8vIC5zbGlkZW1lbnUgLnNsaWRlLXRvZ2dsZTpjaGVja2VkICsgbGFiZWx7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyB9XG5cblxuXG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTE6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDA7IH1cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMjpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMzAlOyB9XG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTM6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDUwJTsgfVxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS00OmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiA3NSU7IH1cblxuXG5cbi8vIG5hdiB7XG4vLyAgIG1heC13aWR0aDoxMDAlO1xuLy8gICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsICNmZmZmZmYgMjUlLCAjZmZmZmZmIDc1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbi8vICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcbi8vIH1cblxuLy8gbmF2IHVsIHtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAyNSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4vLyB9XG5cbi8vIG5hdiB1bCBsaSB7XG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vIH1cblxuLy8gbmF2IHVsIGxpIGEge1xuLy8gICBwYWRkaW5nOjEwcHg7XG4vLyAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4vLyAgIGNvbG9yOiBibGFjaztcbi8vICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gfVxuXG4vLyBuYXYgdWwgbGkgYTpob3ZlciB7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4vLyAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbi8vICAgY29sb3I6ICM4RUJGMjU7XG4vLyB9XG5cblxuLmNsZWFye1xuY2xlYXI6IGJvdGg7XG59XG5cblxuLnNsaWRlLXRvZ2dsZXtcbmRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZW1lbnV7XG5mb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG5tYXgtd2lkdGg6IDEwMCU7XG5tYXJnaW46IDEwcHggMTBweCAyMHB4IDIwcHggYXV0bztcbi8vIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbGlkZW1lbnUgbGFiZWx7XG53aWR0aDogMjUlO1xudGV4dC1hbGlnbjogY2VudGVyO1xuZGlzcGxheTogYmxvY2s7XG5mbG9hdDogbGVmdDtcbmNvbG9yOiBncmVlbjtcbm9wYWNpdHk6IDAuMjtcblxufVxuXG4uc2xpZGVtZW51IGxhYmVsOmhvdmVye1xuY3Vyc29yOiBwb2ludGVyO1xuY29sb3I6IGdyZWVuO1xufVxuXG4uc2xpZGVtZW51IGxhYmVsIHNwYW57XG5kaXNwbGF5OiBibG9jaztcbnBhZGRpbmc6IDEwcHg7ICAgXG5jb2xvcjogIzI0NzIzODsgXG59XG5cbi5zbGlkZW1lbnUgbGFiZWwgLmljb257XG5mb250LXNpemU6IDMwcHg7XG5ib3JkZXI6IHNvbGlkIDJweCAjMjQ3MjM4O1xudGV4dC1hbGlnbjogY2VudGVyO1xuaGVpZ2h0OiAzMHB4O1xud2lkdGg6IDMwcHg7XG5kaXNwbGF5OiBibG9jaztcbm1hcmdpbjogMCBhdXRvO1xubGluZS1oZWlnaHQ6IDUwcHg7XG5ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qQmFyIFN0eWxlKi9cblxuLnNsaWRlcntcbndpZHRoOiA3MCU7XG5oZWlnaHQ6IDVweDtcbmRpc3BsYXk6IGJsb2NrO1xuYmFja2dyb3VuZDogI2NjYztcbm1hcmdpbi10b3A6IDEwcHg7XG5ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zbGlkZXIgLmJhcntcbndpZHRoOjUwJTtcbmhlaWdodDogNXB4O1xuYmFja2dyb3VuZDogZ3JlZW47XG5ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qQW5pbWF0aW9ucyovXG4uc2xpZGVtZW51IGxhYmVsLCAuc2xpZGVyIC5iYXIge1xudHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4tbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLypUb2dnbGUqL1xuXG4uc2xpZGVtZW51IC5zbGlkZS10b2dnbGU6Y2hlY2tlZCArIGxhYmVse1xub3BhY2l0eTogMTtcbn1cblxuXG5cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMDsgfVxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0yOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAyNSU7IH1cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMzpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNTAlOyB9XG4uSGVhZGVyRmlsdGVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xuIC8vIGhlaWdodDogNSU7XG4gXG59XG4uQmFkeUZpbHRlcntcblxufVxuXG5cblxuI2NhcnQtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4ub3V0dGVyLWJhZGdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHg7XG4gIC8vYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDY0cHg7XG59XG4uaW5uZXItYmFkZ2UtT0sge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gXG5cbn1cbi5pbm5lci1iYWRnZS1PSyAuYmFkZ2VDYW5jZWx7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5cbi5pbm5lci1iYWRnZS1LTyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IC0xMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5uZXItYmFkZ2UtS08gLmJhZGdlQ2FuY2Vse1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiA4cHg7XG4gIFxufVxuXG4uaW5uZXItYmFkZ2UtVGNoYXQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yM3B4O1xuICBsZWZ0OiAtMjBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmlubmVyLWJhZGdlLVRjaGF0IC5iYWRnZUNhbmNlbHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogOHB4O1xufVxuXG5cblxuXG5cblxuXG5cblxuXG4vLyB1bCB7XG4vLyAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbi8vICAgd2lkdGg6IDUwMHB4O1xuLy8gfVxuXG4vLyBoMyB7XG4vLyAgIGZvbnQ6IGJvbGQgMjBweC8xLjUgSGVsdmV0aWNhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuLy8gfVxuXG4vLyBsaSBpbWcge1xuLy8gICBmbG9hdDogbGVmdDtcbi8vICAgbWFyZ2luOiAwIDE1cHggMCAwO1xuLy8gfVxuXG4vLyBsaSBwIHtcbi8vICAgZm9udDogMjAwIDEycHgvMS41IEdlb3JnaWEsIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XG4vLyB9XG5cbi8vIGxpIHtcbi8vICAgcGFkZGluZzogMTBweDtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyB9XG5cbi8vIGxpOmhvdmVyIHtcbi8vICAgYmFja2dyb3VuZDogI2VlZTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG4uaXRlbSwgLml0ZW0tZGl2aWRlciB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuLm15SXRlbXtcbiAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gIHBhZGRpbmctYm90dG9tOiAwNXB4O1xuICBsaW5lLWhlaWdodDogMDtcbiAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCAkcnVsZXIqMjtcbiAgZm9udC1zaXplOiAkcnVsZXIqMy4yO1xuICB3aWR0aDogMzQwcHg7XG5cbn1cblxuLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgLS1pb24tY29sb3ItYmFzZTogIzI0NzIzOCAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgIzI0NzIzOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzI0NzIzOCkgIWltcG9ydGFudDt9XG5cbi8qT3B0aW9uYWwqL1xuLmJhci1zdGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5ICFpbXBvcnRhbnQ7XG59XG4udGFic3tcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOSAhaW1wb3J0YW50O1xufVxuLmljb24tc2l6ZS1sZyB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLypUaW1lbGluZSovXG5cbi5wb3MtYWJzb2x1dGUtcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogOHB4O1xufVxuXG4udGltZWxpbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDlweCAwIDAgMDtcbn1cblxuLnRpbWVsaW5lOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDZjYzM0O1xuICAgIGxlZnQ6IDM0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtdGh1bWIudGltZWxpbmUtaWNvbiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiA1cHggc29saWQgI0NCRDBEMztcbn1cblxuLnRpbWVsaW5lIC50aW1lbGluZS10aHVtYi50aW1lbGluZS1pY29uIGkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDNweCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGltZWxpbmUgLnRpbWVsaW5lLWl0ZW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi50aW1lbGluZSAudGltZWxpbmUtc3RhdHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICM3RjhDOEQ7XG59XG5cblxuLmRpdmlkZXItdGl0bGUge1xuICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gICAgcGFkZGluZzogMnggMnB4O1xucGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTpzbWFsbDtcblxufVxuXG4vKiA9PT0gQ29sb3IgVGhlbWVzID09PSAqL1xuLnRleHQtbXV0ZWQge1xuICAgIGNvbG9yOiAjNmQ2ZDcyICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1ncmF5IHtcbiAgICBjb2xvcjogIzhlOGU5MyAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItcmVkIHtcbiAgICBjb2xvcjogI2ZmM2IzMCAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItcmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzYjMwICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci13aGl0ZSB7XG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLXllbGxvdyB7XG4gICAgY29sb3I6ICNmZmNjMDAgIWltcG9ydGFudDtcbn1cblxuLmJnLWNvbG9yLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2MwMCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItZ3JlZW4ge1xuICAgIGNvbG9yOiAjNGNkOTY0ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1vcmFuZ2Uge1xuICAgIGNvbG9yOiAjZmY5NTAwICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1vcmFuZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk1MDAgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJsdWUge1xuICAgIGNvbG9yOiAjMDA3YWZmICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWZmICFpbXBvcnRhbnQ7XG59XG5cbi5jb2xvci1saWdodGJsdWUge1xuICAgIGNvbG9yOiAjNWFjOGZhICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jb2xvci1saWdodGJsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YWM4ZmEgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLWJsdWVncmF5IHtcbiAgICBjb2xvcjogIzYwN2Q4YiAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3ItYmx1ZWdyYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGIgIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLW5pZ2h0IHtcbiAgICBjb2xvcjogIzJCMUIxNyAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItYmxhY2sge1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4uYmctY29sb3Itd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5iZy1jb2xvci1ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRjZDk2NCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyLXRpbWVsaW5lIHtcbiBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubGluZXtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAzMDBkZWdcbiAgICAsICM4RUJGMjUsICMzYjhjNGYsICMyNDcyMzgsICMyNDcyMzgpO1xuICAgICAgICBoZWlnaHQ6IDIwMCU7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwJTtcbiAgICAgICAgbGVmdDogMjJweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cblxuLmltYWdlQ2hlY2t7XG4gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiBcbn1cbi5pdGVtLCAuaXRlbS1kaXZpZGVyICB7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIxMSwgMjExLCAyMTEpO1xufVxuXG5pb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzEzMTMxMzFmO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICAvLyBmaWxsLW9wYWNpdHk6IDtcbn1cblxuIFxuICAuZGF0ZUhlYWRlciB7IFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDsgXG4gICAgY29sb3I6IHJnYig0OSwgNDksIDQ5KTs7XG4gIH1cbiBcbiBcblxuLml0ZW0gLml0ZW0tZGl2aWRlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjAwO1xufSJdfQ== */");

/***/ }),

/***/ 25309:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/historiqueerp/historiqueerp.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Historique\" [isPram]=\"true\"></app-header>\n<ion-content>\n\n  <div class=\"container-timeline\">\n    <ion-row>\n      <ion-col size=\"1\">\n        <div class=\"line\">\n\n        </div>\n      </ion-col>\n      <ion-col size=\"11\">\n      </ion-col>\n    </ion-row>\n    <ion-virtual-scroll [items]=\"events\" approxItemHeight=\"320px\" [headerFn]=\"separateDate\">\n      <ion-item-divider *virtualHeader=\"let header; \" style=\"--background:none;border-bottom: none;\" lines=\"none\">\n\n\n        <div class=\"dateHeader\"><b>{{header |date: 'yyyy-MM-dd'}}</b></div>\n\n      </ion-item-divider>\n      <ion-row *virtualItem=\"let event; let i = index;\" (click)=\"presentAlertConfirm(i+1)\">\n        <ion-row>\n          <ion-col size=\"1\">\n\n            <div style=\"height:80px; width:80px; \" *ngIf=\"!check(i+1)\">\n              <img src=\"assets/IconMenu/emptyCheck.png\" class=\"imageCheck\" />\n              <b style=\"position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%); color: aliceblue; font-size: 1rem;\">{{i+1}}</b>\n            </div>\n            <div style=\"height:80px; width:80px; \" *ngIf=\"check(i+1)\">\n              <img src=\"assets/IconMenu/check.png\" class=\"imageCheck\" />\n\n            </div>\n\n\n\n          </ion-col>\n          <ion-col size=\"11\">\n\n            <ion-card>\n\n\n              <ion-card-content>\n                <b> {{ event.titre }} </b>\n                <h2>{{ event.description }} </h2>\n              </ion-card-content>\n\n            </ion-card>\n\n          </ion-col>\n        </ion-row>\n\n\n\n      </ion-row>\n    </ion-virtual-scroll>\n  </div>\n\n</ion-content>\n<ion-footer>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_historiqueerp_historiqueerp_module_ts.js.map