(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_Config_historiquepersonnel_historiquepersonnel_module_ts"],{

/***/ 72310:
/*!******************************************************************************************!*\
  !*** ./src/app/layouts/Config/historiquepersonnel/historiquepersonnel-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriquepersonnelPageRoutingModule": () => (/* binding */ HistoriquepersonnelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _historiquepersonnel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historiquepersonnel.page */ 87255);




const routes = [
    {
        path: '',
        component: _historiquepersonnel_page__WEBPACK_IMPORTED_MODULE_0__.HistoriquepersonnelPage
    }
];
let HistoriquepersonnelPageRoutingModule = class HistoriquepersonnelPageRoutingModule {
};
HistoriquepersonnelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoriquepersonnelPageRoutingModule);



/***/ }),

/***/ 51218:
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/Config/historiquepersonnel/historiquepersonnel.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriquepersonnelPageModule": () => (/* binding */ HistoriquepersonnelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _historiquepersonnel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./historiquepersonnel-routing.module */ 72310);
/* harmony import */ var _historiquepersonnel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historiquepersonnel.page */ 87255);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let HistoriquepersonnelPageModule = class HistoriquepersonnelPageModule {
};
HistoriquepersonnelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _historiquepersonnel_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoriquepersonnelPageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_historiquepersonnel_page__WEBPACK_IMPORTED_MODULE_1__.HistoriquepersonnelPage]
    })
], HistoriquepersonnelPageModule);



/***/ }),

/***/ 87255:
/*!********************************************************************************!*\
  !*** ./src/app/layouts/Config/historiquepersonnel/historiquepersonnel.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoriquepersonnelPage": () => (/* binding */ HistoriquepersonnelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_historiquepersonnel_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./historiquepersonnel.page.html */ 62086);
/* harmony import */ var _historiquepersonnel_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./historiquepersonnel.page.scss */ 33081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_Service_activityhistory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Service/activityhistory.service */ 85766);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);







let HistoriquepersonnelPage = class HistoriquepersonnelPage {
    constructor(activityHistory, userService) {
        this.activityHistory = activityHistory;
        this.userService = userService;
        this.dates = [];
        this.datesTwo = [];
        this.datesThree = [];
        this.months = ["Jan", "Fev", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.apiImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiImg + 'User/';
    }
    ngOnInit() {
        this.getMe();
        this.activityHistory.getHistory().subscribe((res) => {
            this.history = res;
            console.log(this.history);
            this.history.reverse();
            this.dates = [...new Set(this.history.map(item => item.dateCreated))];
            // console.log(this.dates);
            this.makeDates(this.dates);
        });
    }
    makeDates(dates) {
        dates.map(el => (this.a = new Date(el),
            this.a.getDate(),
            this.datesTwo.push(`${this.months[this.a.getMonth()]} ${this.a.getDate()}, ${this.a.getFullYear()}`),
            this.datesThree = [...new Set(this.datesTwo.map(item => item))]));
        // console.log(this.datesThree);
    }
    getMe() {
        this.userService.getMe().subscribe(res => {
            this.user$ = res.data.data;
        });
    }
};
HistoriquepersonnelPage.ctorParameters = () => [
    { type: src_app_shared_Service_activityhistory_service__WEBPACK_IMPORTED_MODULE_2__.ActivityhistoryService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
HistoriquepersonnelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-historiquepersonnel',
        template: _raw_loader_historiquepersonnel_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_historiquepersonnel_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HistoriquepersonnelPage);



/***/ }),

/***/ 85766:
/*!***********************************************************!*\
  !*** ./src/app/shared/Service/activityhistory.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityhistoryService": () => (/* binding */ ActivityhistoryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 1128);




let ActivityhistoryService = class ActivityhistoryService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getHistory() {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apimyactivityhistory}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    deleteHistory() {
        return this.apiService.delete(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apimyaccesshistory}`);
    }
};
ActivityhistoryService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
ActivityhistoryService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ActivityhistoryService);



/***/ }),

/***/ 33081:
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/Config/historiquepersonnel/historiquepersonnel.page.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 800;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n  width: 90px;\n  height: 30px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #247238;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg, #247238, #247238, #8EBF25, #8EBF25);\n}\n\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label,\n.slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n\n.HeaderFilter {\n  background-color: #e4e4e4;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.item,\n.item-divider {\n  border-color: red;\n}\n\n.myItem {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.chat {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.card {\n  height: 500px;\n  border-radius: 15px !important;\n  background-color: white !important;\n  border: 0px !important;\n}\n\n.msg_card_body {\n  overflow-y: auto;\n}\n\n.type_msg {\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: #494747 !important;\n  height: 60px !important;\n  overflow-y: auto;\n}\n\n.type_msg:focus {\n  box-shadow: none !important;\n  outline: 0px !important;\n}\n\n.attach_btn {\n  border-radius: 15px 0 0 15px !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: #222121 !important;\n  cursor: pointer;\n}\n\n.send_btn {\n  border-radius: 0 15px 15px 0 !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n  border: 0 !important;\n  color: #0c0c0c !important;\n  cursor: pointer;\n}\n\n.img_cont_msg {\n  height: 40px;\n  width: 40px;\n}\n\n.msg_cotainer {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 10px;\n  border-radius: 15px;\n  background-color: #f0f1f3;\n  padding: 10px;\n  position: relative;\n}\n\n.msg_cotainer_send {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: 10px;\n  margin-left: 100px;\n  border-radius: 15px;\n  background-color: #f0f1f3;\n  padding: 10px;\n  position: relative;\n}\n\n.msg_time {\n  position: absolute;\n  left: 0;\n  bottom: -15px;\n  color: rgba(120, 41, 247, 0.5);\n  font-size: 10px;\n}\n\n.msg_time_send {\n  position: absolute;\n  right: 0;\n  bottom: -15px;\n  color: rgba(120, 41, 247, 0.5);\n  font-size: 10px;\n}\n\n.message-box {\n  position: relative;\n}\n\n.message-box .message-input {\n  background: none;\n  border: none;\n  outline: none !important;\n  resize: none;\n  /* color: rgba(255, 255, 255, .8);*/\n  font-size: 15px;\n  height: 24px;\n  margin: 0;\n  padding-right: 25px;\n  width: 400px;\n  color: #444;\n}\n\n.message-box textarea:focus:-webkit-placeholder {\n  color: transparent;\n}\n\n.message-box .message-submit {\n  background-image: linear-gradient(135deg, #247238, #247238, #8EBF25, #8EBF25);\n  position: absolute;\n  height: 25px;\n  top: 8px;\n  left: 10px;\n  right: 10px;\n  width: 80px;\n  font-size: large;\n  border-radius: 10px 10px 10px 10px;\n  text-align: center;\n}\n\n.ButtonFab {\n  border: 1px solid #ccc;\n  border-color: #ccc;\n  top: 30px !important;\n  left: 40px;\n  border-radius: 50px;\n}\n\n[class*=icono] {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  color: #f0f1f3;\n  box-sizing: border-box;\n}\n\n[class*=icono]:after, [class*=icono]:before {\n  content: \"\";\n  box-sizing: border-box;\n}\n\n[class*=icono-arrow4] {\n  width: 0;\n  height: 0;\n  border: 7px solid transparent;\n  border-top: 7px solid;\n  border-right: 7px solid;\n  margin: -13px;\n  left: -4px;\n  top: 43px;\n}\n\n[class*=icono-arrow4][class*=-left] {\n  transform: rotate(45deg);\n}\n\n[class*=icono-arrow5] {\n  width: 0;\n  height: 0;\n  border: 7px solid transparent;\n  border-top: 7px solid;\n  border-right: 7px solid;\n  margin: 0px;\n  left: 17px;\n  top: 20px;\n}\n\n[class*=icono-arrow5][class*=-right] {\n  transform: rotate(-135deg);\n}\n\n.MyinputUpdate {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 10px;\n  padding: 16px;\n  background-color: white;\n  text-shadow: 1px 1px 0 #FFF;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  width: 94%;\n  margin-bottom: 10px;\n  margin-left: 8px;\n  margin-right: 5px;\n}\n\n.MyinputUpdate1 {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 160px;\n  padding: 16px;\n  background-color: white;\n  text-shadow: 1px 1px 0 #FFF;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  width: 27%;\n  height: 10PX;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  margin-left: 11px;\n  margin-right: 5px;\n}\n\n.ion-textarea {\n  border: 0;\n  outline: 0;\n  border-radius: 10px;\n  background-color: white;\n  text-shadow: 1px 1px 0 #FFF;\n  box-shadow: 5px 5px 5px 5px gray, 5px 5px 5px 5px;\n  width: 94%;\n  height: 40%;\n  margin-bottom: 10px;\n  margin-left: 8px;\n  margin-right: 5px;\n}\n\n.list .item-radio .item-content {\n  background-color: black;\n  color: white;\n}\n\n.list .item-radio .radio-icon {\n  background-color: black;\n  color: white;\n}\n\n.item-radio input:checked + .radio-content .item-content {\n  /* style the item content when its checked */\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcmlxdWVwZXJzb25uZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBSUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBRko7O0FBWUE7RUFDSSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFUSTtBQUFSOztBQVlBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxlQWZJO0VBZ0JKLG9CQUFBO0VBQ0EsYUFqQkk7RUFrQkoseUJBaEJPO0VBaUJQLDJCQUFBO0FBVEo7O0FBWUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBV0k7RUFDSSwrREFBQTtBQVRSOztBQVlJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBRUEsb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFYUjs7QUFhUTtFQUNJLGVBQUE7QUFYWjs7QUFpQkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBZFI7O0FBaUJJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFmUjs7QUFrQkk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFoQlI7O0FBb0JBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFB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QUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBbk5KOztBQXFOSTtFQUNJLHdCQUFBO0FBbk5SOztBQXdOQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBck5KOztBQXVOSTtFQUNJLDBCQUFBO0FBck5SOztBQTBOQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUE1b0JJO0VBNm9CSixtQkFBQTtFQUNBLGFBOW9CSTtFQStvQkosdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQXZOSjs7QUEwTkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBM3BCSTtFQTRwQkosb0JBQUE7RUFDQSxhQTdwQkk7RUE4cEJKLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxpQkFBQTtBQXhOSjs7QUEwTkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlEQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF2Tko7O0FBME5BO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBdk5GOztBQXlOQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQXRORjs7QUF3TkE7RUFDSSw0Q0FBQTtFQUNBLGlCQUFBO0FBck5KIiwiZmlsZSI6Imhpc3RvcmlxdWVwZXJzb25uZWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogIzhjOGM4YztcbiAgICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IERhcmtHcmVlbjsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMjQ3MjM4LCAjMjQ3MjM4LCAgIzhFQkYyNSwjOEVCRjI1KTtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cblxuLy8gY3NzIGJ1dHRvblxuJHJ1bGVyOiAxNnB4O1xuJGNvbG9yLXJlZDogIzcyNmI2YjtcbiRjb2xvci1iZzogI0VCRUNGMDtcbiRjb2xvci1zaGFkb3c6ICNCQUJFQ0M7XG4kY29sb3Itd2hpdGU6ICNGRkY7XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyO1xufVxuXG5idXR0b24ge1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlcioyMDtcbiAgICBwYWRkaW5nOiAkcnVsZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDAgJGNvbG9yLXdoaXRlO1xufVxuXG5idXR0b24ge1xuICAgIGNvbG9yOiAjNjE2NzdDO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJveC1zaGFkb3c6IC01cHggLTVweCAyMHB4ICRjb2xvci13aGl0ZSwgMXB4IDFweCA1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4ICRjb2xvci1zaGFkb3csIGluc2V0IC0xcHggLTFweCAycHggJGNvbG9yLXdoaXRlO1xuICAgIH1cblxuICAgICYudW5pdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgLy9ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAxcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwICRydWxlci8yO1xuICAgICAgICBmb250LXNpemU6ICRydWxlcioxLjI7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzYlO1xuICAgICAgICBmb250LXNpemU6IDIuMGVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5jYXJkLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUyJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbn1cblxuLm15Rm9vdGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDVweDtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCAxcHggIzI0NzIzODtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgJHJ1bGVyKjI7XG4gICAgZm9udC1zaXplOiAkcnVsZXIqMy4yO1xuICAgIHdpZHRoOiAzNDBweDtcbn1cblxuLm15Z2FsbGVyeSB7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgIGJvdHRvbTogNSU7XG5cbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNDcyMzg7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIG9wYWNpdHk6IDUuMjtcbiAgICB9XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyNDcyMzgsICMyNDcyMzgsICM4RUJGMjUsICM4RUJGMjUpO1xuXG59XG5cbi5zaGFkb3dib3gge1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM4RUJGMjU7XG4gICAgLy8gYm94LXNoYWRvdzogMnB4IDFweCAxcHggIzI0NzIzODtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmLCAjZGRkIDQwJSwgI2NjYyk7XG59XG5cblxuLy9cblxuXG5cbi8vIC5jbGVhcntcbi8vICAgY2xlYXI6IGJvdGg7XG4vLyB9XG5cblxuLy8gLnNsaWRlLXRvZ2dsZXtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cblxuLy8gLnNsaWRlbWVudXtcbi8vICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuLy8gICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAgIG1hcmdpbjogNTBweCBhdXRvO1xuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gfVxuXG4vLyAuc2xpZGVtZW51IGxhYmVse1xuLy8gICB3aWR0aDogMjUlO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBmbG9hdDogbGVmdDtcbi8vICAgY29sb3I6ICMzMzM7XG4vLyAgIG9wYWNpdHk6IDAuMjtcblxuLy8gfVxuXG5cblxuXG4vLyAuc2xpZGVtZW51IGxhYmVsIC5pY29ue1xuLy8gICBmb250LXNpemU6IDIwcHg7XG4vLyAgIGJvcmRlcjogc29saWQgMnB4ICMzMzM7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgaGVpZ2h0OiA1MHB4O1xuLy8gICB3aWR0aDogNTBweDtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICBsaW5lLWhlaWdodDogNTBweDtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gfVxuXG4vLyAvKkJhciBTdHlsZSovXG5cblxuXG4vLyAuc2xpZGVyIC5iYXJ7XG4vLyAgIHdpZHRoOiA1MCU7XG4vLyAgIGhlaWdodDogNXB4O1xuLy8gICBiYWNrZ3JvdW5kOiByZ2IoMSwgNjgsIDM3KTtcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gfVxuXG4vLyAvKkFuaW1hdGlvbnMqL1xuLy8gLnNsaWRlbWVudSBsYWJlbCwgLnNsaWRlciAuYmFyIHtcbi8vICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuLy8gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbi8vICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4vLyB9XG5cbi8vIC8qVG9nZ2xlKi9cblxuLy8gLnNsaWRlbWVudSAuc2xpZGUtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbHtcbi8vICAgb3BhY2l0eTogMTtcbi8vIH1cblxuXG5cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMDsgfVxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0yOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAzMCU7IH1cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMzpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNTAlOyB9XG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTQ6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDc1JTsgfVxuXG5cblxuLy8gbmF2IHtcbi8vICAgbWF4LXdpZHRoOjEwMCU7XG4vLyAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgI2ZmZmZmZiAyNSUsICNmZmZmZmYgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuLy8gICBtYXJnaW46IDAgYXV0bztcbi8vICAgcGFkZGluZzogMTBweCAwO1xuLy8gfVxuXG4vLyBuYXYgdWwge1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDI1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDc1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbi8vICAgYm94LXNoYWRvdzogMCAwIDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vIH1cblxuLy8gbmF2IHVsIGxpIHtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gfVxuXG4vLyBuYXYgdWwgbGkgYSB7XG4vLyAgIHBhZGRpbmc6MTBweDtcbi8vICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4vLyAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbi8vICAgY29sb3I6IGJsYWNrO1xuLy8gICBmb250LXNpemU6IDEwcHg7XG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyB9XG5cbi8vIG5hdiB1bCBsaSBhOmhvdmVyIHtcbi8vICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuLy8gICBjb2xvcjogIzhFQkYyNTtcbi8vIH1cblxuXG4uY2xlYXIge1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG5cbi5zbGlkZS10b2dnbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZW1lbnUge1xuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMjBweCAyMHB4IGF1dG87XG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNsaWRlbWVudSBsYWJlbCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIG9wYWNpdHk6IDAuMjtcblxufVxuXG4uc2xpZGVtZW51IGxhYmVsOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4uc2xpZGVtZW51IGxhYmVsIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICMyNDcyMzg7XG59XG5cbi5zbGlkZW1lbnUgbGFiZWwgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMjQ3MjM4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKkJhciBTdHlsZSovXG5cbi5zbGlkZXIge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNsaWRlciAuYmFyIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLypBbmltYXRpb25zKi9cbi5zbGlkZW1lbnUgbGFiZWwsXG4uc2xpZGVyIC5iYXIge1xuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLypUb2dnbGUqL1xuXG4uc2xpZGVtZW51IC5zbGlkZS10b2dnbGU6Y2hlY2tlZCtsYWJlbCB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuXG5cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2Vkfi5zbGlkZXIgLmJhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMjpjaGVja2Vkfi5zbGlkZXIgLmJhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0zOmNoZWNrZWR+LnNsaWRlciAuYmFyIHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4uSGVhZGVyRmlsdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xuICAgIC8vIGhlaWdodDogNSU7XG5cbn1cblxuLkJhZHlGaWx0ZXIge31cblxuXG5cbiNjYXJ0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbn1cblxuLm91dHRlci1iYWRnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICAvL2JhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDY0cHg7XG59XG5cbi5pbm5lci1iYWRnZS1PSyB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAtMjBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG5cbn1cblxuLmlubmVyLWJhZGdlLU9LIC5iYWRnZUNhbmNlbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cblxuLmlubmVyLWJhZGdlLUtPIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAtMTBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5uZXItYmFkZ2UtS08gLmJhZGdlQ2FuY2VsIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogOHB4O1xuXG59XG5cbi5pbm5lci1iYWRnZS1UY2hhdCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTIzcHg7XG4gICAgbGVmdDogLTIwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlubmVyLWJhZGdlLVRjaGF0IC5iYWRnZUNhbmNlbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuLy8gdWwge1xuLy8gICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4vLyAgIHdpZHRoOiA1MDBweDtcbi8vIH1cblxuLy8gaDMge1xuLy8gICBmb250OiBib2xkIDIwcHgvMS41IEhlbHZldGljYSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbi8vIH1cblxuLy8gbGkgaW1nIHtcbi8vICAgZmxvYXQ6IGxlZnQ7XG4vLyAgIG1hcmdpbjogMCAxNXB4IDAgMDtcbi8vIH1cblxuLy8gbGkgcCB7XG4vLyAgIGZvbnQ6IDIwMCAxMnB4LzEuNSBHZW9yZ2lhLCBUaW1lcyBOZXcgUm9tYW4sIHNlcmlmO1xuLy8gfVxuXG4vLyBsaSB7XG4vLyAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gfVxuXG4vLyBsaTpob3ZlciB7XG4vLyAgIGJhY2tncm91bmQ6ICNlZWU7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cblxuLml0ZW0sXG4uaXRlbS1kaXZpZGVyIHtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLm15SXRlbSB7XG4gICAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gICAgcGFkZGluZy1ib3R0b206IDA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwICRydWxlcioyO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyKjMuMjtcbiAgICB3aWR0aDogMzQwcHg7XG5cbn1cblxuXG5cblxuXG4uY2hhdCB7XG5cbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tc2dfY2FyZF9ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG5cblxuLnR5cGVfbXNnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMykgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBjb2xvcjogcmdiKDczLCA3MSwgNzEpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnR5cGVfbXNnOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hdHRhY2hfYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDAgMCAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYigzNCwgMzMsIDMzKSAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlbmRfYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAwIDE1cHggMTVweCAwICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYigxMiwgMTIsIDEyKSAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uaW1nX2NvbnRfbXNnIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG59XG5cblxuLm1zZ19jb3RhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjFmMztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1zZ19jb3RhaW5lcl9zZW5kIHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYxZjM7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tc2dfdGltZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAtMTVweDtcbiAgICBjb2xvcjogcmdiYSgxMjAsIDQxLCAyNDcsIDAuNSk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ubXNnX3RpbWVfc2VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogLTE1cHg7XG4gICAgY29sb3I6IHJnYmEoMTIwLCA0MSwgMjQ3LCAwLjUpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuXG5cblxuLm1lc3NhZ2UtYm94IHtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXG4gICAgJiAubWVzc2FnZS1pbnB1dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIC8qIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTsqL1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIGNvbG9yOiAjNDQ0O1xuXG4gICAgfVxuXG4gICAgdGV4dGFyZWE6Zm9jdXM6LXdlYmtpdC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmIC5tZXNzYWdlLXN1Ym1pdCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyNDcyMzgsICMyNDcyMzgsICM4RUJGMjUsICM4RUJGMjUpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLkJ1dHRvbkZhYiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XG4gICAgdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuXG59XG5cbltjbGFzcyo9XCJpY29ub1wiXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGNvbG9yOiAjZjBmMWYzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG59XG5cbltjbGFzcyo9XCJpY29uby1hcnJvdzRcIl0ge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXI6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQ7XG4gICAgbWFyZ2luOiAtMTNweDtcbiAgICBsZWZ0OiAtNHB4O1xuICAgIHRvcDogNDNweDtcblxuICAgICZbY2xhc3MqPVwiLWxlZnRcIl0ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuXG59XG5cbltjbGFzcyo9XCJpY29uby1hcnJvdzVcIl0ge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXI6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbGVmdDogMTdweDtcbiAgICB0b3A6IDIwcHg7XG5cbiAgICAmW2NsYXNzKj1cIi1yaWdodFwiXSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgIH1cblxuXG59XG4uTXlpbnB1dFVwZGF0ZSAge1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogJHJ1bGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAkY29sb3Itd2hpdGU7XG4gICAgYm94LXNoYWRvdzogLTVweCAtNXB4IDIwcHggJGNvbG9yLXdoaXRlLCAxcHggMXB4IDVweDtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuXG4gIC5NeWlucHV0VXBkYXRlMSAge1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlcioxMDtcbiAgICBwYWRkaW5nOiAkcnVsZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwICRjb2xvci13aGl0ZTtcbiAgICBib3gtc2hhZG93OiAtNXB4IC01cHggMjBweCAkY29sb3Itd2hpdGUsIDFweCAxcHggNXB4O1xuICAgIHdpZHRoOiAyNyU7XG4gICAgaGVpZ2h0OiAxMFBYO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICBtYXJnaW4tbGVmdDogMTFweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAuaW9uLXRleHRhcmVhe1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwICRjb2xvci13aGl0ZTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCA1cHggZ3JheSwgNXB4IDVweCA1cHggNXB4O1xuICAgIHdpZHRoOiA5NCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuXG4gIH1cbi5saXN0IC5pdGVtLXJhZGlvIC5pdGVtLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxpc3QgLml0ZW0tcmFkaW8gLnJhZGlvLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuLml0ZW0tcmFkaW8gaW5wdXQ6Y2hlY2tlZCArIC5yYWRpby1jb250ZW50IC5pdGVtLWNvbnRlbnQge1xuICAgIC8qIHN0eWxlIHRoZSBpdGVtIGNvbnRlbnQgd2hlbiBpdHMgY2hlY2tlZCAqL1xuICAgIGJhY2tncm91bmQ6IGJsYWNrOyBcbn0iXX0= */");

/***/ }),

/***/ 62086:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/Config/historiquepersonnel/historiquepersonnel.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Historique personnel\" [isParam]=\"true\"></app-header>\n\n<ion-content style=\"padding-top:50px;\">\n  <span style=\"margin-left:50px;font-size:20px;font-weight:bold;color:green\">HISTORIQUE PERSONNEL</span>\n  <p style=\"font-size: 18px;margin:10px\">\n    l'historique personnel contient votre activité sportup, comme les publications que vous créées et ce que vous\n    avez aimé vous pouvez sélectionner, gérer l'activité pour gérer les publications que vous avez crées\n  </p>\n\n  <div style=\"margin-top:30px\" *ngFor=\"let date of datesThree\" >\n    <strong style=\"margin-left:15px\">{{date}}</strong>\n    <div *ngFor=\"let event of history\">\n\n      <div style=\"display: flex;margin:15px\" *ngIf=\"date=== (event.dateCreated | date)\" >\n        <ion-avatar style=\"margin-right: 20px;\">\n          <img [src]=\"apiImg+user$?.photo\">\n        </ion-avatar>\n        <div>\n          <b style=\"font-size: 13px;\"> {{event.description}}</b>\n          <p> {{event.activity}}</p>\n      </div>\n      </div>\n\n\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_Config_historiquepersonnel_historiquepersonnel_module_ts.js.map