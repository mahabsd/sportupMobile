(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_Oauth_login_login_module_ts"],{

/***/ 20693:
/*!*****************************************************!*\
  !*** ./src/app/Oauth/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 85538);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 25024:
/*!*********************************************!*\
  !*** ./src/app/Oauth/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 20693);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 85538);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);
/* harmony import */ var _Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/Auth/auth.service */ 21584);
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/modules/shared.module */ 57208);










let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        ],
        providers: [
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__.FileTransfer, _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__.FileTransferObject,
            _Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 85538:
/*!*******************************************!*\
  !*** ./src/app/Oauth/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 82756);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 28355);
/* harmony import */ var _Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/Auth/auth.service */ 21584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _Shared_patternValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/patternValidator */ 38877);
/* harmony import */ var src_app_Shared_Model_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Model/User */ 89040);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ 38605);












let LoginPage = class LoginPage {
    constructor(fb, toastCtrl, alertController, router, authService, translate, storage) {
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.router = router;
        this.authService = authService;
        this.translate = translate;
        this.storage = storage;
        this.passwordType = "password";
        this.fileUrl = null;
        this.user = new src_app_Shared_Model_User__WEBPACK_IMPORTED_MODULE_4__.User();
        this.loginLabels = ['', '', ''];
        translate.setDefaultLang('en');
        this.storage.get('lan').then((val) => {
            if (val)
                translate.use(val);
        });
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                // eslint-disable-next-line max-len
                (0,_Shared_patternValidator__WEBPACK_IMPORTED_MODULE_3__.PatternValidator)(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required)
        });
    }
    connectFacebook() {
        console.log('hello facebook');
    }
    connectGoogle() {
        console.log('hello google');
    }
    showPassword() {
        this.passwordType = "text";
    }
    hidePassword() {
        this.passwordType = "password";
    }
    login() {
        // console.log(this.loginForm);
        this.authService.login(this.loginForm.value).subscribe((response) => {
            // console.log('hello user', response);
            if (response.user.role === "user" || response.user.role === "pro" || response.user.role === "admin") {
                location.href = '/tabs/home';
            }
            else {
                this.presentToast('vous n\'avez pas le droit d\accées', 'warning', 'top');
            }
        }, error => {
            console.error(error);
            if (error.error.message === 'Vous devez activer votre compte') {
                this.presentAlertConfirm(error.error.message);
            }
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
    presentAlertConfirm(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'alertCtrl',
                header: 'Confirm!',
                message,
                buttons: [
                    {
                        text: 'Annuller',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Confirmer',
                        handler: () => {
                            this.router.navigateByUrl('/confirmation');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

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

/***/ 28355:
/*!*********************************************!*\
  !*** ./src/app/Oauth/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  height: 100vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  /* align-items: baseline; */\n  justify-content: space-evenly;\n  display: flex;\n  flex-direction: column;\n}\n\nion-content {\n  background: none;\n  --ion-background-color: linear-gradient(300deg, #8EBF25, #3b8c4f, #247238, #247238);\n}\n\nbody,\nhtml {\n  background-color: #EBECF0;\n}\n\n.form-controll {\n  background-color: transparent;\n  color: #FFF;\n  box-shadow: none;\n  text-shadow: none;\n  font-weight: 500;\n}\n\n.hr {\n  margin: 3rem 0 0 0;\n  width: 50%;\n  box-shadow: 0px -25px 45px 0.4em black;\n}\n\nion-avatar {\n  width: 7em;\n  height: 7em;\n  box-shadow: 0px 3px 6px 0px black;\n}\n\ninput,\nselect,\ntextarea,\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\ndiv,\np {\n  color: #FFF;\n}\n\nform {\n  padding: 16px;\n  width: 320px;\n  margin: 0 auto;\n}\n\n.segment {\n  padding: 8px 0;\n  text-align: center;\n}\n\nion-button {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  height: 2em;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nbutton,\nion-input {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 24px;\n  width: 100%;\n}\n\nion-input {\n  margin-right: 8px;\n  padding: 0.5em !important;\n  border: 2px solid #ccc;\n  box-shadow: inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;\n  width: 100%;\n  box-sizing: border-box;\n  transition: all 0.2s ease-in-out;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n}\n\nion-input:focus {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 600;\n  margin-bottom: 2em;\n}\n\nbutton:hover {\n  box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;\n}\n\nbutton:active {\n  background-color: red;\n}\n\nbutton .icon {\n  margin-right: 8px;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  width: 48px;\n  height: 48px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\nbutton.red {\n  display: block;\n  width: 100%;\n  color: #726b6b;\n}\n\nion-button {\n  color: #61677C;\n  font-weight: bold;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 600;\n  margin-bottom: 2em;\n}\n\nion-button:hover {\n  box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;\n}\n\nion-button:active {\n  background-color: linear-gradient(300deg, #8EBF25, #3b8c4f, #247238, #247238);\n}\n\nion-button .icon {\n  margin-right: 8px;\n}\n\nion-button.unit {\n  border-radius: 8px;\n  line-height: 0;\n  width: 48px;\n  height: 48px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n}\n\nion-button.unit .icon {\n  margin-right: 0;\n}\n\nion-button.red {\n  display: block;\n  width: 100%;\n  height: 3.5em;\n  color: #726b6b;\n}\n\ninput::-moz-placeholder {\n  color: #000 !important;\n}\n\n.input-group {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.input-group label {\n  margin: 0;\n  flex: 1;\n}\n\nion-label.ion-padding-top {\n  text-decoration: underline;\n}\n\n.alertCtrl {\n  --background: yellow;\n  --color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFFQSxtRkFBQTtBQURGOztBQVVBOztFQUVFLHlCQU5TO0FBRFg7O0FBVUE7RUFDRSw2QkFBQTtFQUNBLFdBVFk7RUFVWixnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBUEY7O0FBVUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUVBLGlDQUFBO0FBUkY7O0FBV0E7Ozs7RUFJRSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUF0Q007QUE4QlI7O0FBV0E7O0VBRUUsV0F2Q1k7QUErQmQ7O0FBYUE7RUFDRSxhQWpETTtFQWtETixZQUFBO0VBQ0EsY0FBQTtBQVZGOztBQWFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBVkY7O0FBYUE7RUFFRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBL0RNO0VBZ0VOLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQWhFUztFQWlFVCwyQkFBQTtBQVhGOztBQWNBOztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUEzRU07RUE0RU4sb0JBQUE7RUFDQSxhQTdFTTtFQThFTix5QkE1RVM7RUE2RVQsMkJBQUE7QUFaRjs7QUFlQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFaRjs7QUFlQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUNBLGdFQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0Esd0JBQUE7QUFiRjs7QUFlRTtFQUNFLCtEQUFBO0FBYko7O0FBaUJBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBRUEsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWZGOztBQWlCRTtFQUNFLG1EQUFBO0FBZko7O0FBa0JFO0VBQ0UscUJBQUE7QUFoQko7O0FBb0JFO0VBQ0UsaUJBQUE7QUFsQko7O0FBcUJFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFuQko7O0FBcUJJO0VBQ0UsZUFBQTtBQW5CTjs7QUF1QkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBakpRO0FBNEhaOztBQXlCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUVBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF2QkY7O0FBeUJFO0VBQ0UsbURBQUE7QUF2Qko7O0FBMEJFO0VBQ0UsNkVBQUE7QUF4Qko7O0FBNEJFO0VBQ0UsaUJBQUE7QUExQko7O0FBNkJFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUEzQko7O0FBNkJJO0VBQ0UsZUFBQTtBQTNCTjs7QUErQkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQS9MUTtBQWtLWjs7QUFpQ0E7RUFDRSxzQkFBQTtBQTlCRjs7QUFpQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQTlCRjs7QUFnQ0U7RUFDRSxTQUFBO0VBQ0EsT0FBQTtBQTlCSjs7QUFtQ0E7RUFDRSwwQkFBQTtBQWhDRjs7QUFtQ0E7RUFDRSxvQkFBQTtFQUNBLGFBQUE7QUFoQ0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcblxyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIC8qIGFsaWduLWl0ZW1zOiBiYXNlbGluZTsgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IERhcmtHcmVlbjtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMzAwZGVnLCAjOEVCRjI1LCAjM2I4YzRmLCAjMjQ3MjM4LCAjMjQ3MjM4KTtcclxufVxyXG5cclxuJHJ1bGVyOiAxNnB4O1xyXG4kY29sb3ItcmVkOiAjNzI2YjZiO1xyXG4kY29sb3ItYmc6ICNFQkVDRjA7XHJcbiRjb2xvci1zaGFkb3c6ICNCQUJFQ0M7XHJcbiRjb2xvci13aGl0ZTogI0ZGRjtcclxuXHJcbmJvZHksXHJcbmh0bWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZztcclxufVxyXG5cclxuLmZvcm0tY29udHJvbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uaHIge1xyXG4gIG1hcmdpbjogM3JlbSAwIDAgMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAtMjVweCA0NXB4IDAuNGVtIGJsYWNrO1xyXG59XHJcblxyXG5pb24tYXZhdGFyIHtcclxuICB3aWR0aDogN2VtO1xyXG4gIGhlaWdodDogN2VtO1xyXG4gIC8vIG1hcmdpbi10b3A6NWVtO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCBibGFjaztcclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEsXHJcbmJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xyXG4gIGZvbnQtc2l6ZTogJHJ1bGVyO1xyXG59XHJcblxyXG5kaXYsXHJcbnAge1xyXG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgLy90ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggJGNvbG9yLXdoaXRlO1xyXG59XHJcblxyXG5cclxuZm9ybSB7XHJcbiAgcGFkZGluZzogJHJ1bGVyO1xyXG4gIHdpZHRoOiAkcnVsZXIqMjA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zZWdtZW50IHtcclxuICBwYWRkaW5nOiAkcnVsZXIqMC41IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuXHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC1zaXplOiAkcnVsZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogJHJ1bGVyKjIwO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZztcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwICRjb2xvci13aGl0ZTtcclxufVxyXG5cclxuYnV0dG9uLFxyXG5pb24taW5wdXQge1xyXG5cclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBmb250LXNpemU6ICRydWxlcjtcclxuICBib3JkZXItcmFkaXVzOiAkcnVsZXIqMjA7XHJcbiAgcGFkZGluZzogJHJ1bGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZztcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwICRjb2xvci13aGl0ZTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206ICRydWxlcioxLjU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAkcnVsZXIvMjtcclxuICBwYWRkaW5nOiAwLjVlbSAhaW1wb3J0YW50O1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDJweCAycHggNXB4ICRjb2xvci1zaGFkb3csIGluc2V0IC01cHggLTVweCAxMHB4ICRjb2xvci13aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4ICRjb2xvci1zaGFkb3csIGluc2V0IC0xcHggLTFweCAycHggJGNvbG9yLXdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBjb2xvcjogIzYxNjc3QztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAvLyAgYm94LXNoYWRvdzogLTVweCAtNXB4IDIwcHggJGNvbG9yLXdoaXRlLCAgNXB4IDVweCAyMHB4ICRjb2xvci1zaGFkb3c7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IC0ycHggLTJweCA1cHggJGNvbG9yLXdoaXRlLCAycHggMnB4IDVweCAkY29sb3Itc2hhZG93O1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggJGNvbG9yLXNoYWRvdywgaW5zZXQgLTFweCAtMXB4IDJweCAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6ICRydWxlci8yO1xyXG4gIH1cclxuXHJcbiAgJi51bml0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogJHJ1bGVyKjM7XHJcbiAgICBoZWlnaHQ6ICRydWxlciozO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgJHJ1bGVyLzI7XHJcbiAgICBmb250LXNpemU6ICRydWxlcioxLjI7XHJcblxyXG4gICAgLmljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnJlZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICRjb2xvci1yZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBjb2xvcjogIzYxNjc3QztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAvLyAgYm94LXNoYWRvdzogLTVweCAtNXB4IDIwcHggJGNvbG9yLXdoaXRlLCAgNXB4IDVweCAyMHB4ICRjb2xvci1zaGFkb3c7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IC0ycHggLTJweCA1cHggJGNvbG9yLXdoaXRlLCAycHggMnB4IDVweCAkY29sb3Itc2hhZG93O1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDMwMGRlZywgIzhFQkYyNSwgIzNiOGM0ZiwgIzI0NzIzOCwgIzI0NzIzOCk7XHJcbiAgICAvLyBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAkY29sb3Itc2hhZG93LCBpbnNldCAtMXB4IC0xcHggMnB4ICRjb2xvci13aGl0ZTtcclxuICB9XHJcblxyXG4gIC5pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogJHJ1bGVyLzI7XHJcbiAgfVxyXG5cclxuICAmLnVuaXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHdpZHRoOiAkcnVsZXIqMztcclxuICAgIGhlaWdodDogJHJ1bGVyKjM7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAkcnVsZXIvMjtcclxuICAgIGZvbnQtc2l6ZTogJHJ1bGVyKjEuMjtcclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYucmVkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMuNWVtO1xyXG4gICAgY29sb3I6ICRjb2xvci1yZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmlvbi1sYWJlbC5pb24tcGFkZGluZy10b3Age1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYWxlcnRDdHJsIHtcclxuICAtLWJhY2tncm91bmQ6IHllbGxvdztcclxuICAtLWNvbG9yOiAjMDAwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 82756:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Oauth/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div id=\"container\">\n\n\n    <ion-row class=\"ion-padding-top\" style=\" justify-content: center;\">\n      <ion-avatar>\n        <img src=\"../../../assets/imgs/logo.jpg\">\n      </ion-avatar>\n    </ion-row>\n    <div class=\"segment\">\n      <h1>Bienvenue</h1>\n    </div>\n    <form [formGroup]=\"loginForm\">\n      <ion-input type=\"email\" autofocus=\"false\" class=\"form-controll ion-margin-bottom\" mdInput formControlName=\"email\"\n        [ngClass]=\"{'error':loginForm.controls['email'].errors && !loginForm.controls['email'].pristine}\"\n        color=\"{{loginForm.controls['email'].errors && !loginForm.controls['email'].pristine ? 'warning':'primary'}}\"\n        placeholder=\"Adresse Email\" name=\"email\" required>\n      </ion-input>\n      <ion-input type={{passwordType}} style=\"position: relative;z-index:0\" class=\"form-controll ion-margin-bottom\" mdInput placeholder=\"Mot de passe\"\n        formControlName=\"password\" name=\"password\" required>\n      <ng-container *ngIf=\"passwordType==='password' else hide\" >\n        <ion-icon style=\"color:black;position:absolute;right:-30px;z-index:20\" (click)=\"showPassword()\" name=\"eye-off\"></ion-icon>\n      </ng-container>\n      <ng-template #hide>\n        <ion-icon style=\"color:black;position:absolute;right:-30px;z-index:20\" (click)=\"hidePassword()\" name=\"eye\"></ion-icon>\n      </ng-template>\n\n      </ion-input>\n\n      <ion-button (click)=\"login()\" color=\"transparent\" shape=\"round\" [disabled]=\" loginForm.invalid\" class=\"red \"\n        type=\" submit\">\n        CONNEXION\n      </ion-button>\n\n      <div class=\"segment\">\n        <button (click)=\"connectFacebook()\" class=\"unit\" type=\"button\">\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n        </button>\n        <button class=\"unit\" type=\"button\">\n          <ion-icon name=\"logo-google\"></ion-icon>\n        </button>\n        <button [routerLink]=\"['/signin']\" class=\"unit\" type=\"button\">\n          <ion-icon name=\"log-in-outline\"></ion-icon>\n        </button>\n      </div>\n\n\n\n    </form>\n    <ion-row style=\"  justify-content: center;\">\n\n      <ion-label class=\"ion-padding-top\" [routerLink]=\"['/resetpass']\">{{ \"login.oublie\" | translate}}</ion-label>\n    </ion-row>\n    <ion-row style=\"  justify-content: center;\">\n\n      <ion-label class=\"ion-padding-top\" [routerLink]=\"['/signin-kids']\">{{ \"login.enfants\" | translate}}</ion-label>\n    </ion-row>\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Oauth_login_login_module_ts.js.map