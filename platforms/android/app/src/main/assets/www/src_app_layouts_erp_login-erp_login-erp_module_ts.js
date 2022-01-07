(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_erp_login-erp_login-erp_module_ts"],{

/***/ 89040:
/*!**************************************!*\
  !*** ./src/app/Shared/Model/User.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
}


/***/ }),

/***/ 38877:
/*!********************************************!*\
  !*** ./src/app/Shared/patternValidator.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatternValidator": () => (/* binding */ PatternValidator)
/* harmony export */ });
function PatternValidator(regexp) {
    return (control) => {
        const value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { 'patternInvalid': { regexp } } : null;
    };
}


/***/ }),

/***/ 13725:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/erp/login-erp/login-erp-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginErpPageRoutingModule": () => (/* binding */ LoginErpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_erp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-erp.page */ 67299);




const routes = [
    {
        path: '',
        component: _login_erp_page__WEBPACK_IMPORTED_MODULE_0__.LoginErpPage
    }
];
let LoginErpPageRoutingModule = class LoginErpPageRoutingModule {
};
LoginErpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginErpPageRoutingModule);



/***/ }),

/***/ 75461:
/*!***********************************************************!*\
  !*** ./src/app/layouts/erp/login-erp/login-erp.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginErpPageModule": () => (/* binding */ LoginErpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_erp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-erp-routing.module */ 13725);
/* harmony import */ var _login_erp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-erp.page */ 67299);







let LoginErpPageModule = class LoginErpPageModule {
};
LoginErpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_erp_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginErpPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_login_erp_page__WEBPACK_IMPORTED_MODULE_1__.LoginErpPage]
    })
], LoginErpPageModule);



/***/ }),

/***/ 67299:
/*!*********************************************************!*\
  !*** ./src/app/layouts/erp/login-erp/login-erp.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginErpPage": () => (/* binding */ LoginErpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_erp_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login-erp.page.html */ 14504);
/* harmony import */ var _login_erp_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-erp.page.scss */ 98393);
/* harmony import */ var _Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Shared/Auth/auth.service */ 21584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_Shared_Model_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Model/User */ 89040);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_Shared_patternValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/patternValidator */ 38877);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);










let LoginErpPage = class LoginErpPage {
    constructor(authService, toastCtrl, router) {
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.user = new src_app_Shared_Model_User__WEBPACK_IMPORTED_MODULE_3__.User();
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            emailControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                // eslint-disable-next-line max-len
                (0,src_app_Shared_patternValidator__WEBPACK_IMPORTED_MODULE_4__.PatternValidator)(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            passwordControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
        });
    }
    login() {
        // console.log(this.user);
        this.authService.login(this.user).subscribe((response) => {
            // console.log('hello user', response);
            // 1 response.role ==="admin"
            // 2 navigate to ('erp')
            // else presentToast('vous navez pas le droit daccess', 'danger', 'top')
            // navigate to /tabs/home
            if (response.user.role === 'admin') {
                this.router.navigateByUrl('/erp/erp-space');
            }
            else {
                this.presentToast('vous navez pas le droit daccess', 'danger', 'top');
            }
        }, error => {
        });
    }
    presentToast(message, color, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                color,
                position
            });
            toast.present();
        });
    }
};
LoginErpPage.ctorParameters = () => [
    { type: _Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
LoginErpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login-erp',
        template: _raw_loader_login_erp_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_erp_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginErpPage);



/***/ }),

/***/ 98393:
/*!***********************************************************!*\
  !*** ./src/app/layouts/erp/login-erp/login-erp.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #247238;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg,#247238, #247238, #8EBF25,#8EBF25);\n}\n\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n\n.LogoS {\n  display: flex;\n  justify-content: center;\n  box-shadow: 5px 4px 15px 5px rgba(0, 0, 0, 0.21);\n  height: 100px;\n  width: 100px;\n}\n\n.title {\n  padding-top: 30px;\n  margin: 0 20px;\n  justify-content: center;\n  display: grid;\n  text-align: center;\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\nimg {\n  max-width: 100px;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label, .slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.ZoneShare {\n  height: 25px;\n  background: #e4e3e3;\n  border-radius: 23px;\n}\n\n.swiper-slide:not(.swiper-slide-active) > div {\n  display: none;\n}\n\nion-slide {\n  width: 4rem !important;\n  margin-right: -2px !important;\n}\n\n.message-box {\n  position: relative;\n}\n\n.message-box .message-input {\n  background: none;\n  border: none;\n  outline: none !important;\n  resize: none;\n  /* color: rgba(255, 255, 255, .8);*/\n  font-size: 15px;\n  height: 24px;\n  margin: 0;\n  padding-right: 25px;\n  width: 400px;\n  color: #444;\n}\n\n.message-box textarea:focus:-webkit-placeholder {\n  color: transparent;\n}\n\n.message-box .message-submit {\n  background-image: linear-gradient(135deg, #247238, #247238, #8EBF25, #8EBF25);\n  position: absolute;\n  height: 25px;\n  top: 8px;\n  left: 10px;\n  right: 10px;\n  width: 100px;\n  font-size: large;\n  border-radius: 10px 10px 10px 10px;\n  text-align: center;\n}\n\n.MyinputUpdate {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 10px;\n  padding: 5px 10px;\n  background-color: white;\n  text-shadow: 1px 1px 0 #FFF;\n  width: 94%;\n  margin-bottom: 10px;\n  margin-left: 8px;\n  margin-right: 5px;\n}\n\nion-avatar {\n  position: relative;\n  display: grid;\n  justify-content: center;\n}\n\nion-card {\n  box-shadow: -2px 5px 15px 5px rgba(0, 0, 0, 0.22);\n}\n\nion-content {\n  background: none;\n  --background:rgb(236, 236, 236);\n}\n\n.catBtn {\n  --background: linear-gradient(135deg, #247238, #247238, #8EBF25, #8EBF25);\n}\n\n.formStyle {\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,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aW4tZXJwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcblxuICAjY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG5cblxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogIzhjOGM4YztcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgI2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBEYXJrR3JlZW47IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzI0NzIzOCwgIzI0NzIzOCwgICM4RUJGMjUsIzhFQkYyNSk7XG4gICAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIC8vIGNzcyBidXR0b25cbiAgJHJ1bGVyOiAxNnB4O1xuICAkY29sb3ItcmVkOiAjNzI2YjZiO1xuICAkY29sb3ItYmc6ICNFQkVDRjA7XG4gICRjb2xvci1zaGFkb3c6ICNCQUJFQ0M7XG4gICRjb2xvci13aGl0ZTogI0ZGRjtcblxuXG4gIC5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gICAgaW9uLWNhcmQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuY2FyZC10aXRsZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDM2JTtcbiAgICAgIGZvbnQtc2l6ZTogMi4wZW07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIC5jYXJkLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4wZW07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUyJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG4gIC5teUZvb3RlcntcbiAgICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDVweDtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCAxcHggIzI0NzIzODtcbiAgICBkaXNwbGF5OmlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMCAkcnVsZXIqMjtcbiAgICBmb250LXNpemU6ICRydWxlciozLjI7XG4gICAgd2lkdGg6IDM0MHB4O1xuICB9XG4gIC5teWdhbGxlcnl7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4OyBcbiAgICBkaXNwbGF5OmlubGluZS1mbGV4O1xuICB9XG4gIGlvbi1zbGlkZXMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICA6aG9zdCA6Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9ue1xuICAgIGJvdHRvbTogNSU7XG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogIzI0NzIzODtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwcHggO1xuICAgICAgICBoZWlnaHQ6IDEwcHggO1xuICAgICAgICBvcGFjaXR5OiA1LjI7XG4gIH1cbn1cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyNDcyMzgsICMyNDcyMzgsICAjOEVCRjI1LCM4RUJGMjUpO1xuXG59XG4gXG4uc2hhZG93Ym94IHtcbiAvLyBib3JkZXI6IDFweCBzb2xpZCAjOEVCRjI1O1xuIC8vIGJveC1zaGFkb3c6IDJweCAxcHggMXB4ICMyNDcyMzg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYsICNkZGQgNDAlLCAjY2NjKTtcbn1cblxuLkxvZ29Te1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogNXB4IDRweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuMjEpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5Mb2dvRXJwe1xuIFxufVxuIC50aXRsZXtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cblxuXG4uY2xlYXJ7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5cbi5zbGlkZS10b2dnbGV7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZW1lbnV7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggMTBweCAyMHB4IDIwcHggYXV0bztcbiAvLyBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW1ne1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4uc2xpZGVtZW51IGxhYmVse1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IGdyZWVuO1xuICBvcGFjaXR5OiAwLjI7XG5cbn1cblxuLnNsaWRlbWVudSBsYWJlbDpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5zbGlkZW1lbnUgbGFiZWwgc3BhbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7ICAgXG4gIGNvbG9yOiAjMjQ3MjM4OyBcbn1cblxuLnNsaWRlbWVudSBsYWJlbCAuaWNvbntcbiAgZm9udC1zaXplOiAzMHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjMjQ3MjM4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLypCYXIgU3R5bGUqL1xuXG4uc2xpZGVye1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNsaWRlciAuYmFye1xuICB3aWR0aDo1MCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5cbi8qQW5pbWF0aW9ucyovXG4uc2xpZGVtZW51IGxhYmVsLCAuc2xpZGVyIC5iYXIge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLypUb2dnbGUqL1xuXG4uc2xpZGVtZW51IC5zbGlkZS10b2dnbGU6Y2hlY2tlZCArIGxhYmVse1xuICBvcGFjaXR5OiAxO1xufVxuXG5cblxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0xOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAwOyB9XG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDI1JTsgfVxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0zOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiA1MCU7IH1cbi5IZWFkZXJGaWx0ZXJ7XG4gIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xuICAgLy8gaGVpZ2h0OiA1JTtcbiAgIFxufVxuLkJhZHlGaWx0ZXJ7XG5cbn1cblxuXG4gXG4gI2NhcnQtYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMHB4O1xuIH1cblxuIC5vdXR0ZXItYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgLy9iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHdpZHRoOiA2NHB4O1xuICB9XG4gIC5pbm5lci1iYWRnZS1PSyB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAtMjBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgXG5cbiAgfVxuICAuaW5uZXItYmFkZ2UtT0sgLmJhZGdlQ2FuY2Vse1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cblxuICAuaW5uZXItYmFkZ2UtS08ge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmlubmVyLWJhZGdlLUtPIC5iYWRnZUNhbmNlbHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIFxuICB9XG5cbiAgLmlubmVyLWJhZGdlLVRjaGF0IHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjNweDtcbiAgICBsZWZ0OiAtMjBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbm5lci1iYWRnZS1UY2hhdCAuYmFkZ2VDYW5jZWx7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuXG5cblxuXG5cblxuXG5cblxuXG4vLyB1bCB7XG4vLyAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbi8vICAgd2lkdGg6IDUwMHB4O1xuLy8gfVxuXG4vLyBoMyB7XG4vLyAgIGZvbnQ6IGJvbGQgMjBweC8xLjUgSGVsdmV0aWNhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuLy8gfVxuXG4vLyBsaSBpbWcge1xuLy8gICBmbG9hdDogbGVmdDtcbi8vICAgbWFyZ2luOiAwIDE1cHggMCAwO1xuLy8gfVxuXG4vLyBsaSBwIHtcbi8vICAgZm9udDogMjAwIDEycHgvMS41IEdlb3JnaWEsIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XG4vLyB9XG5cbi8vIGxpIHtcbi8vICAgcGFkZGluZzogMTBweDtcbi8vICAgb3ZlcmZsb3c6IGF1dG87XG4vLyB9XG5cbi8vIGxpOmhvdmVyIHtcbi8vICAgYmFja2dyb3VuZDogI2VlZTtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG4vLyAuaW1hZ2VzIHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICB9XG4gIFxuLy8gICAuaW1hZ2VzIC5Vc2VyUG9zdGVkIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDQwJTtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgdG9wOjEwcHg7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgfVxuXG4uWm9uZVNoYXJle1xuICAgLy8gbWFyZ2luLXRvcDogLTVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogI2U0ZTNlMztcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xufVxuLnN3aXBlci1zbGlkZTpub3QoLnN3aXBlci1zbGlkZS1hY3RpdmUpID4gZGl2IHtcbiAgZGlzcGxheTpub25lO1xufVxuaW9uLXNsaWRlIHtcbiAgd2lkdGg6IDRyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAtMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG5cbiAgLm1lc3NhZ2UtYm94IHtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXG4gICAgJiAubWVzc2FnZS1pbnB1dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIC8qIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTsqL1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIGNvbG9yOiAjNDQ0O1xuXG4gICAgfVxuXG4gICAgdGV4dGFyZWE6Zm9jdXM6LXdlYmtpdC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmIC5tZXNzYWdlLXN1Ym1pdCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyNDcyMzgsICMyNDcyMzgsICM4RUJGMjUsICM4RUJGMjUpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5NeWlucHV0VXBkYXRlICB7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgZm9udC1zaXplOiAkcnVsZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDAgJGNvbG9yLXdoaXRlO1xuICAgIC8vYm94LXNoYWRvdzogLTVweCAtNXB4IDEwcHggJGNvbG9yLXdoaXRlLCAxcHggMXB4IDJweDtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiBcbiAgfVxuaW9uLWF2YXRhcntcbiAgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiAgaW9uLWNhcmR7XG4gICAgYm94LXNoYWRvdzogLTJweCA1cHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjIyKTtcbiAgfVxuXG4gIGlvbi1jb250ZW50e1xuICAgIGJhY2tncm91bmQ6bm9uZSA7XG4tLWJhY2tncm91bmQ6cmdiKDIzNiwgMjM2LCAyMzYpO1xuICB9XG5cbiAgLmNhdEJ0bntcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyNDcyMzgsICMyNDcyMzgsICM4RUJGMjUsICM4RUJGMjUpO1xuICB9XG5cbiAgLmZvcm1TdHlsZXtcblxuICAgIHBhZGRpbmctbGVmdDogNXB4OyBwYWRkaW5nLXJpZ2h0OiA1cHg7IG1hcmdpbi10b3A6IDMwcHg7XG4gIH0iXX0= */");

/***/ }),

/***/ 14504:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/erp/login-erp/login-erp.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/home\">\n      </ion-back-button>\n\n\n    </ion-buttons>\n    <ion-title style=\"color: white;\"> ERP-LOGIN</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row style=\"padding-top: 30px;\" class=\"title\">\n\n    <ion-col>\n\n      <ion-label style=\"color: grey;font-weight: bold;font-size:smaller;margin-top: 5px;margin-bottom: 5px;\">\n        Ajouter des fonctionnalités et des avantages exeptionnelles a votre application\n      </ion-label>\n\n\n    </ion-col>\n\n  </ion-row>\n\n\n  <ion-row style=\"padding-top: 40px;  display: flex; justify-content: center;\">\n\n\n    <!-- <ion-row style=\"margin-top: 20px; margin-bottom: 20px; margin-buttom: 100px;  justify-content: center;\"> -->\n\n    <ion-avatar>\n\n\n      <img class=\"LogoS\"\n        src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOn9Vd__ZtxxYqjbAn2HSBFotatAMCMlTeHA&usqp=CAU\">\n\n    </ion-avatar>\n\n\n    <!-- </ion-row> -->\n\n\n  </ion-row>\n\n\n  <ion-row class=\"ion-justify-content-center\">\n\n    <ion-col text-center>\n      <ion-card no-padding\n        style=\"margin:5rem 40px 0 !important;background: rgb(238, 238, 238);     border-radius: 15px;\">\n        <ion-card-content>\n\n\n          <form [formGroup]=\"loginForm\" class=\"formStyle\">\n            <ion-row class=\"ion-justify-content-center\">\n              <ion-col size=\"12\">\n                <input class=\"MyinputUpdate\" type=\"email\" [(ngModel)]=\"user.email\" formControlName=\"emailControl\"\n                  placeholder=\"E-Mail\" />\n              </ion-col>\n              <ion-col size=\"12\">\n                <input class=\"MyinputUpdate\" type=\"password\" [(ngModel)]=\"user.password\"\n                  formControlName=\"passwordControl\" placeholder=\"Mot de passe\" />\n              </ion-col>\n\n              <ion-button (click)=\"login()\" disabled={{loginForm.invalid}} class=\"catBtn\">\n                Connexion\n\n              </ion-button>\n\n\n            </ion-row>\n\n\n\n\n          </form>\n        </ion-card-content>\n        <ion-row class=\"ion-justify-content-center\" style=\" margin-bottom: 10px;\">\n\n\n          <ion-col class=\"ion-text-center\">\n            <ion-label style=\"color: grey;font-weight: bold;font-size:small; \" [routerLink]=\"['/resetpass']\">\n              Mot de passe oubliée ?\n            </ion-label>\n          </ion-col>\n\n        </ion-row>\n      </ion-card>\n    </ion-col>\n\n\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_erp_login-erp_login-erp_module_ts.js.map