(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_Config_securiteconnexion_securiteconnexion_module_ts"],{

/***/ 96009:
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/Config/securiteconnexion/securiteconnexion-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecuriteconnexionPageRoutingModule": () => (/* binding */ SecuriteconnexionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _securiteconnexion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./securiteconnexion.page */ 63182);




const routes = [
    {
        path: '',
        component: _securiteconnexion_page__WEBPACK_IMPORTED_MODULE_0__.SecuriteconnexionPage
    }
];
let SecuriteconnexionPageRoutingModule = class SecuriteconnexionPageRoutingModule {
};
SecuriteconnexionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SecuriteconnexionPageRoutingModule);



/***/ }),

/***/ 57108:
/*!******************************************************************************!*\
  !*** ./src/app/layouts/Config/securiteconnexion/securiteconnexion.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecuriteconnexionPageModule": () => (/* binding */ SecuriteconnexionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _securiteconnexion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./securiteconnexion-routing.module */ 96009);
/* harmony import */ var _securiteconnexion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./securiteconnexion.page */ 63182);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let SecuriteconnexionPageModule = class SecuriteconnexionPageModule {
};
SecuriteconnexionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _securiteconnexion_routing_module__WEBPACK_IMPORTED_MODULE_0__.SecuriteconnexionPageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_securiteconnexion_page__WEBPACK_IMPORTED_MODULE_1__.SecuriteconnexionPage]
    })
], SecuriteconnexionPageModule);



/***/ }),

/***/ 63182:
/*!****************************************************************************!*\
  !*** ./src/app/layouts/Config/securiteconnexion/securiteconnexion.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecuriteconnexionPage": () => (/* binding */ SecuriteconnexionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_securiteconnexion_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./securiteconnexion.page.html */ 93892);
/* harmony import */ var _securiteconnexion_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./securiteconnexion.page.scss */ 8411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_Service_accesshistory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Service/accesshistory.service */ 61647);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_app_shared_Service_get_ips_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Service/get-ips.service */ 44498);







let SecuriteconnexionPage = class SecuriteconnexionPage {
    constructor(accessHistory, http, getIps) {
        this.accessHistory = accessHistory;
        this.http = http;
        this.getIps = getIps;
        this.ipAddress = '';
    }
    ngOnInit() {
        this.loadIp();
        this.accessHistory.getHistory().subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.history = yield response;
            console.log(this.history);
        }));
    }
    isActive(ip) {
        if (this.ipAddress === ip) {
        }
    }
    loadIp() {
        this.getIps.getIps().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield console.log(res);
        }), (error) => {
            console.log(error);
        });
    }
};
SecuriteconnexionPage.ctorParameters = () => [
    { type: src_app_shared_Service_accesshistory_service__WEBPACK_IMPORTED_MODULE_2__.AccesshistoryService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: src_app_shared_Service_get_ips_service__WEBPACK_IMPORTED_MODULE_3__.GetIpsService }
];
SecuriteconnexionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-securiteconnexion',
        template: _raw_loader_securiteconnexion_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_securiteconnexion_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SecuriteconnexionPage);



/***/ }),

/***/ 61647:
/*!*********************************************************!*\
  !*** ./src/app/shared/Service/accesshistory.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccesshistoryService": () => (/* binding */ AccesshistoryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 1128);




let AccesshistoryService = class AccesshistoryService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getHistory() {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apimyaccesshistory}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    deleteHistory() {
        return this.apiService.delete(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apimyaccesshistory}`);
    }
};
AccesshistoryService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
AccesshistoryService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AccesshistoryService);



/***/ }),

/***/ 44498:
/*!***************************************************!*\
  !*** ./src/app/shared/Service/get-ips.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetIpsService": () => (/* binding */ GetIpsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 1128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);




let GetIpsService = class GetIpsService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getIps() {
        return this.apiService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiIp}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
};
GetIpsService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
GetIpsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GetIpsService);



/***/ }),

/***/ 8411:
/*!******************************************************************************!*\
  !*** ./src/app/layouts/Config/securiteconnexion/securiteconnexion.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 800;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n  width: 90px;\n  height: 30px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #247238;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg, #247238, #247238, #8EBF25, #8EBF25);\n}\n\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label,\n.slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n\n.HeaderFilter {\n  background-color: #e4e4e4;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.item,\n.item-divider {\n  border-color: red;\n}\n\n.myItem {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.ListeParametre {\n  justify-content: center;\n  margin: 30px;\n  font-size: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3VyaXRlY29ubmV4aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUlBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUZKOztBQVlBO0VBQ0kscUNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBVEk7QUFBUjs7QUFZQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFmSTtFQWdCSixvQkFBQTtFQUNBLGFBakJJO0VBa0JKLHlCQWhCTztFQWlCUCwyQkFBQTtBQVRKOztBQVlBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRKOztBQVdJO0VBQ0ksK0RBQUE7QUFUUjs7QUFZSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWFI7O0FBYVE7RUFDSSxlQUFBO0FBWFo7O0FBaUJJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQWRSOztBQWlCSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBZlI7O0FBa0JJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBaEJSOztBQW9CQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQWpCSjs7QUFvQkE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FBakJKOztBQW9CQTtFQUNJLFlBQUE7QUFqQko7O0FBb0JBO0VBQ0ksVUFBQTtBQWpCSjs7QUFtQkk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWpCUjs7QUFxQkE7RUFDSSx5RUFBQTtBQWxCSjs7QUFzQkE7RUFHSSwrREFBQTtBQXJCSjs7QUF5SUE7RUFDSSxXQUFBO0FBdElKOztBQTBJQTtFQUNJLGFBQUE7QUF2SUo7O0FBMElBO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUF2SUo7O0FBMklBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQXhJSjs7QUE0SUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQXpJSjs7QUE0SUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUF6SUo7O0FBNElBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXpJSjs7QUE0SUEsWUFBQTs7QUFFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTFJSjs7QUE2SUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUExSUo7O0FBNklBLGFBQUE7O0FBQ0E7O0VBRUksaUNBQUE7RUFDQSx5Q0FBQTtFQUNBLHNDQUFBO0FBMUlKOztBQTZJQSxTQUFBOztBQUVBO0VBQ0ksVUFBQTtBQTNJSjs7QUFnSkE7RUFDSSxjQUFBO0FBN0lKOztBQWdKQTtFQUNJLGdCQUFBO0FBN0lKOztBQWdKQTtFQUNJLGdCQUFBO0FBN0lKOztBQWdKQTtFQUNJLHlCQUFBO0FBN0lKOztBQXNKQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFuSko7O0FBc0pBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBRUEsV0FBQTtBQXBKSjs7QUF1SkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQXBKSjs7QUF5SkE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBdEpKOztBQTBKQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBdkpKOztBQTBKQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBdkpKOztBQTJKQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBeEpKOztBQTJKQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBeEpKOztBQWdNQTs7RUFFSSxpQkFBQTtBQTdMSjs7QUFnTUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBN0xKOztBQWlNQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUE5TEoiLCJmaWxlIjoic2VjdXJpdGVjb25uZXhpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogIzhjOGM4YztcbiAgICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IERhcmtHcmVlbjsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMjQ3MjM4LCAjMjQ3MjM4LCAgIzhFQkYyNSwjOEVCRjI1KTtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cblxuLy8gY3NzIGJ1dHRvblxuJHJ1bGVyOiAxNnB4O1xuJGNvbG9yLXJlZDogIzcyNmI2YjtcbiRjb2xvci1iZzogI0VCRUNGMDtcbiRjb2xvci1zaGFkb3c6ICNCQUJFQ0M7XG4kY29sb3Itd2hpdGU6ICNGRkY7XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyO1xufVxuXG5idXR0b24ge1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlcioyMDtcbiAgICBwYWRkaW5nOiAkcnVsZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDAgJGNvbG9yLXdoaXRlO1xufVxuXG5idXR0b24ge1xuICAgIGNvbG9yOiAjNjE2NzdDO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJveC1zaGFkb3c6IC01cHggLTVweCAyMHB4ICRjb2xvci13aGl0ZSwgMXB4IDFweCA1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4ICRjb2xvci1zaGFkb3csIGluc2V0IC0xcHggLTFweCAycHggJGNvbG9yLXdoaXRlO1xuICAgIH1cblxuICAgICYudW5pdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgLy9ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAxcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwICRydWxlci8yO1xuICAgICAgICBmb250LXNpemU6ICRydWxlcioxLjI7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMzYlO1xuICAgICAgICBmb250LXNpemU6IDIuMGVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5jYXJkLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUyJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbn1cblxuLm15Rm9vdGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDVweDtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCAxcHggIzI0NzIzODtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgJHJ1bGVyKjI7XG4gICAgZm9udC1zaXplOiAkcnVsZXIqMy4yO1xuICAgIHdpZHRoOiAzNDBweDtcbn1cblxuLm15Z2FsbGVyeSB7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgIGJvdHRvbTogNSU7XG5cbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNDcyMzg7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIG9wYWNpdHk6IDUuMjtcbiAgICB9XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyNDcyMzgsICMyNDcyMzgsICM4RUJGMjUsICM4RUJGMjUpO1xuXG59XG5cbi5zaGFkb3dib3gge1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM4RUJGMjU7XG4gICAgLy8gYm94LXNoYWRvdzogMnB4IDFweCAxcHggIzI0NzIzODtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmLCAjZGRkIDQwJSwgI2NjYyk7XG59XG5cblxuLy9cblxuXG5cbi8vIC5jbGVhcntcbi8vICAgY2xlYXI6IGJvdGg7XG4vLyB9XG5cblxuLy8gLnNsaWRlLXRvZ2dsZXtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cblxuLy8gLnNsaWRlbWVudXtcbi8vICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuLy8gICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAgIG1hcmdpbjogNTBweCBhdXRvO1xuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gfVxuXG4vLyAuc2xpZGVtZW51IGxhYmVse1xuLy8gICB3aWR0aDogMjUlO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBmbG9hdDogbGVmdDtcbi8vICAgY29sb3I6ICMzMzM7XG4vLyAgIG9wYWNpdHk6IDAuMjtcblxuLy8gfVxuXG5cblxuXG4vLyAuc2xpZGVtZW51IGxhYmVsIC5pY29ue1xuLy8gICBmb250LXNpemU6IDIwcHg7XG4vLyAgIGJvcmRlcjogc29saWQgMnB4ICMzMzM7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgaGVpZ2h0OiA1MHB4O1xuLy8gICB3aWR0aDogNTBweDtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICBsaW5lLWhlaWdodDogNTBweDtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gfVxuXG4vLyAvKkJhciBTdHlsZSovXG5cblxuXG4vLyAuc2xpZGVyIC5iYXJ7XG4vLyAgIHdpZHRoOiA1MCU7XG4vLyAgIGhlaWdodDogNXB4O1xuLy8gICBiYWNrZ3JvdW5kOiByZ2IoMSwgNjgsIDM3KTtcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gfVxuXG4vLyAvKkFuaW1hdGlvbnMqL1xuLy8gLnNsaWRlbWVudSBsYWJlbCwgLnNsaWRlciAuYmFyIHtcbi8vICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuLy8gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbi8vICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4vLyB9XG5cbi8vIC8qVG9nZ2xlKi9cblxuLy8gLnNsaWRlbWVudSAuc2xpZGUtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbHtcbi8vICAgb3BhY2l0eTogMTtcbi8vIH1cblxuXG5cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMDsgfVxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0yOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAzMCU7IH1cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMzpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNTAlOyB9XG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTQ6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDc1JTsgfVxuXG5cblxuLy8gbmF2IHtcbi8vICAgbWF4LXdpZHRoOjEwMCU7XG4vLyAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgI2ZmZmZmZiAyNSUsICNmZmZmZmYgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuLy8gICBtYXJnaW46IDAgYXV0bztcbi8vICAgcGFkZGluZzogMTBweCAwO1xuLy8gfVxuXG4vLyBuYXYgdWwge1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDI1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDc1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbi8vICAgYm94LXNoYWRvdzogMCAwIDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vIH1cblxuLy8gbmF2IHVsIGxpIHtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gfVxuXG4vLyBuYXYgdWwgbGkgYSB7XG4vLyAgIHBhZGRpbmc6MTBweDtcbi8vICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4vLyAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbi8vICAgY29sb3I6IGJsYWNrO1xuLy8gICBmb250LXNpemU6IDEwcHg7XG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyB9XG5cbi8vIG5hdiB1bCBsaSBhOmhvdmVyIHtcbi8vICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbi8vICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuLy8gICBjb2xvcjogIzhFQkYyNTtcbi8vIH1cblxuXG4uY2xlYXIge1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG5cbi5zbGlkZS10b2dnbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZW1lbnUge1xuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMjBweCAyMHB4IGF1dG87XG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNsaWRlbWVudSBsYWJlbCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIG9wYWNpdHk6IDAuMjtcblxufVxuXG4uc2xpZGVtZW51IGxhYmVsOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4uc2xpZGVtZW51IGxhYmVsIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6ICMyNDcyMzg7XG59XG5cbi5zbGlkZW1lbnUgbGFiZWwgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMjQ3MjM4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKkJhciBTdHlsZSovXG5cbi5zbGlkZXIge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNsaWRlciAuYmFyIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLypBbmltYXRpb25zKi9cbi5zbGlkZW1lbnUgbGFiZWwsXG4uc2xpZGVyIC5iYXIge1xuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLypUb2dnbGUqL1xuXG4uc2xpZGVtZW51IC5zbGlkZS10b2dnbGU6Y2hlY2tlZCtsYWJlbCB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuXG5cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2Vkfi5zbGlkZXIgLmJhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMjpjaGVja2Vkfi5zbGlkZXIgLmJhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0zOmNoZWNrZWR+LnNsaWRlciAuYmFyIHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4uSGVhZGVyRmlsdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xuICAgIC8vIGhlaWdodDogNSU7XG5cbn1cblxuLkJhZHlGaWx0ZXIge31cblxuXG5cbiNjYXJ0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbn1cblxuLm91dHRlci1iYWRnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICAvL2JhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDY0cHg7XG59XG5cbi5pbm5lci1iYWRnZS1PSyB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAtMjBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG5cbn1cblxuLmlubmVyLWJhZGdlLU9LIC5iYWRnZUNhbmNlbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cblxuLmlubmVyLWJhZGdlLUtPIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAtMTBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5uZXItYmFkZ2UtS08gLmJhZGdlQ2FuY2VsIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogOHB4O1xuXG59XG5cbi5pbm5lci1iYWRnZS1UY2hhdCB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTIzcHg7XG4gICAgbGVmdDogLTIwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlubmVyLWJhZGdlLVRjaGF0IC5iYWRnZUNhbmNlbCB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuLy8gdWwge1xuLy8gICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4vLyAgIHdpZHRoOiA1MDBweDtcbi8vIH1cblxuLy8gaDMge1xuLy8gICBmb250OiBib2xkIDIwcHgvMS41IEhlbHZldGljYSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbi8vIH1cblxuLy8gbGkgaW1nIHtcbi8vICAgZmxvYXQ6IGxlZnQ7XG4vLyAgIG1hcmdpbjogMCAxNXB4IDAgMDtcbi8vIH1cblxuLy8gbGkgcCB7XG4vLyAgIGZvbnQ6IDIwMCAxMnB4LzEuNSBHZW9yZ2lhLCBUaW1lcyBOZXcgUm9tYW4sIHNlcmlmO1xuLy8gfVxuXG4vLyBsaSB7XG4vLyAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgIG92ZXJmbG93OiBhdXRvO1xuLy8gfVxuXG4vLyBsaTpob3ZlciB7XG4vLyAgIGJhY2tncm91bmQ6ICNlZWU7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cblxuLml0ZW0sXG4uaXRlbS1kaXZpZGVyIHtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLm15SXRlbSB7XG4gICAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gICAgcGFkZGluZy1ib3R0b206IDA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwICRydWxlcioyO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyKjMuMjtcbiAgICB3aWR0aDogMzQwcHg7XG5cbn1cblxuLkxpc3RlUGFyYW1ldHJlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgZm9udC1zaXplOiAkcnVsZXIqMjtcbn1cbiJdfQ== */");

/***/ }),

/***/ 93892:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/Config/securiteconnexion/securiteconnexion.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Sécurité et connexion\" [isParam]=\"true\"></app-header>\n\n<ion-content>\n  <ion-row style=\"margin: 15px 15px 15px 15px;\">\n    <ion-row>\n\n      <ion-col size=\"12\">\n        <div style=\"font-weight: bold;font-size:medium;margin-top: 5px;\">\n          <p style='font-size:small;color: #247238;'>VOS CONNEXIONS:</p>\n        </div>\n      </ion-col>\n\n    </ion-row>\n  </ion-row>\n  <ion-row style=\"margin: 15px 15px 15px 15px;\" *ngFor=\"let item of history\">\n    <ion-col size=\"9\">\n\n      <ion-label style=\"color: grey;font-weight: bold;font-size:small;margin-top: 5px;\">{{item._id.device}} {{item._id.location}}\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"3\">\n      <div style=\"font-weight: bold;font-size:medium;margin-top: -10px;\">\n        <p style='font-size:small;color: #247238;' *ngIf=\"isActive(item._id.ip)\">ACTIVE</p>\n      </div>\n\n    </ion-col>\n  </ion-row>\n</ion-content>\n ");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_Config_securiteconnexion_securiteconnexion_module_ts.js.map