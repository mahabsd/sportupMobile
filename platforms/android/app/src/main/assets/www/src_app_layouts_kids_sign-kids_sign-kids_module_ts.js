(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_kids_sign-kids_sign-kids_module_ts"],{

/***/ 46023:
/*!********************************************************************!*\
  !*** ./src/app/layouts/kids/sign-kids/sign-kids-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignKidsPageRoutingModule": () => (/* binding */ SignKidsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sign_kids_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-kids.page */ 30551);




const routes = [
    {
        path: '',
        component: _sign_kids_page__WEBPACK_IMPORTED_MODULE_0__.SignKidsPage
    }
];
let SignKidsPageRoutingModule = class SignKidsPageRoutingModule {
};
SignKidsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignKidsPageRoutingModule);



/***/ }),

/***/ 76821:
/*!************************************************************!*\
  !*** ./src/app/layouts/kids/sign-kids/sign-kids.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignKidsPageModule": () => (/* binding */ SignKidsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sign_kids_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-kids-routing.module */ 46023);
/* harmony import */ var _sign_kids_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-kids.page */ 30551);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);









let SignKidsPageModule = class SignKidsPageModule {
};
SignKidsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _sign_kids_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignKidsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ],
        providers: [
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__.FileTransfer, _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__.FileTransferObject,
        ],
        declarations: [_sign_kids_page__WEBPACK_IMPORTED_MODULE_1__.SignKidsPage]
    })
], SignKidsPageModule);



/***/ }),

/***/ 30551:
/*!**********************************************************!*\
  !*** ./src/app/layouts/kids/sign-kids/sign-kids.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignKidsPage": () => (/* binding */ SignKidsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_kids_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-kids.page.html */ 94299);
/* harmony import */ var _sign_kids_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-kids.page.scss */ 25537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_patternValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/patternValidator */ 38877);
/* harmony import */ var src_app_Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Auth/auth.service */ 21584);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);



/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable eqeqeq */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/naming-convention */






let SignKidsPage = class SignKidsPage {
    constructor(toastCtrl, fb, router, authService) {
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.fileUrl = null;
        this.user = {
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            emailControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                // eslint-disable-next-line max-len
                (0,src_app_Shared_patternValidator__WEBPACK_IMPORTED_MODULE_2__.PatternValidator)(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            passwordControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
        });
    }
    logForm(form) {
        this.user.email = '';
        this.user.password = '';
    }
    ConnectFacebook() {
        console.log('hello facebook');
    }
    ConnectGoogle() {
        console.log('hello google');
    }
    SaveUser() {
        console.log('navigate to sign in width successfully');
    }
    ChangeImage() {
        console.log('Change Image');
    }
    login() {
        this.authService.login(this.user).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (response.user.role === "kids") {
                this.router.navigateByUrl('/tabsKids/accueil');
            }
            else {
                this.presentToast('vous n\'avez pas le droit d\accées', 'warning', 'top');
            }
        }), error => {
            console.error(error);
        });
    }
    ResetPassword() {
        console.log('reset password');
    }
    presentToast(message, color, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
SignKidsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
SignKidsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-sign-kids',
        template: _raw_loader_sign_kids_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sign_kids_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignKidsPage);



/***/ }),

/***/ 25537:
/*!************************************************************!*\
  !*** ./src/app/layouts/kids/sign-kids/sign-kids.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  height: 800px;\n  background-color: DarkGreen;\n  /* For browsers that do not support gradients */\n  background-image: linear-gradient(135deg, #8EBF25, #8EBF25, #247238, #247238);\n}\n\nbody, html {\n  background-color: #EBECF0;\n}\n\ninput, ion-input, select, textarea, button {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\ndiv, p {\n  color: #BABECC;\n  text-shadow: 1px 1px 1px #FFF;\n}\n\nform {\n  padding: 16px;\n  width: 320px;\n  margin: 0 auto;\n}\n\n.segment {\n  padding: 32px 0;\n  text-align: center;\n}\n\nbutton, input, ion-input {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  height: 50px;\n}\n\nion-input {\n  padding: 15px;\n}\n\nion-input {\n  --placeholder-color: #8a8b8e;\n  --placeholder-opacity: 1;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 24px;\n  width: 100%;\n}\n\ninput, ion-input {\n  margin-right: 8px;\n  box-shadow: inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;\n  width: 100%;\n  box-sizing: border-box;\n  transition: all 0.2s ease-in-out;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n}\n\ninput:focus, ion-input:focus {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 5px 5px 20px #BABECC;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 600;\n}\n\nbutton:hover {\n  box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton .icon {\n  margin-right: 8px;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  width: 48px;\n  height: 48px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\nbutton.red {\n  display: block;\n  width: 100%;\n  color: #726b6b;\n}\n\n.input-group {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.input-group label {\n  margin: 0;\n  flex: 1;\n}\n\n#ButtonConnect {\n  background-image: linear-gradient(135deg, #247238, #247238, #8EBF25, #8EBF25);\n  width: 60%;\n  margin-left: 20%;\n  border-radius: 25px;\n}\n\n.fishes {\n  position: relative;\n}\n\n.fish {\n  position: absolute;\n  height: 30vh;\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\n.logosignin {\n  width: 80px;\n  height: 80px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.container {\n  position: relative;\n}\n\n.image {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.form-controll {\n  color: black;\n}\n\n.overlay {\n  position: absolute;\n  bottom: 0px;\n  color: #f1f1f1;\n  width: 100%;\n  transition: 0.5s ease;\n  opacity: 0;\n  color: white;\n  font-size: 20px;\n  padding: 20px 0 0 0;\n  text-align: center;\n  opacity: 1;\n  left: 32%;\n  top: 15%;\n}\n\n.img2 {\n  width: auto;\n  height: auto;\n}\n\n.img2 img {\n  width: 36%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24ta2lkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFBNkIsK0NBQUE7RUFDN0IsNkVBQUE7QUFESjs7QUFVQTtFQUNFLHlCQUxTO0FBRlg7O0FBVUM7RUFDRyxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFiTTtBQU1WOztBQVVBO0VBQ0UsY0FkYTtFQWViLDZCQUFBO0FBUEY7O0FBV0E7RUFDRSxhQXZCUTtFQXdCUixZQUFBO0VBQ0EsY0FBQTtBQVJGOztBQVdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBcENRO0VBcUNSLG9CQUFBO0VBQ0EsYUF0Q1E7RUF1Q1IseUJBckNTO0VBc0NULFlBQUE7QUFSRjs7QUFVQTtFQUNFLGFBQUE7QUFQRjs7QUFhQTtFQUNFLDRCQUFBO0VBQ0Esd0JBQUE7QUFWRjs7QUFZQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFURjs7QUFZQTtFQUNFLGlCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSx3QkFBQTtBQVRGOztBQVdFO0VBQ0UsK0RBQUE7QUFUSjs7QUFhQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFWRjs7QUFZRTtFQUNFLG1EQUFBO0FBVko7O0FBYUU7RUFDRSwrREFBQTtBQVhKOztBQWNFO0VBQ0UsaUJBQUE7QUFaSjs7QUFlRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBYko7O0FBZUk7RUFDRSxlQUFBO0FBYk47O0FBaUJFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQS9HUTtBQWdHWjs7QUFtQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQWhCRjs7QUFrQkU7RUFDRSxTQUFBO0VBQ0EsT0FBQTtBQWhCSjs7QUFtQkE7RUFDSSw2RUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBaEJKOztBQW1CQTtFQUVNLGtCQUFBO0FBakJOOztBQW9CSTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQWxCTjs7QUFvQkk7RUFDRSxXQUFBO0VBQWEsWUFBQTtFQUFnQixjQUFBO0VBQzdCLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBZk47O0FBa0JJO0VBQ0Usa0JBQUE7QUFmTjs7QUFpQkk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFkTjs7QUFpQkk7RUFDRSxZQUFBO0FBZE47O0FBaUJJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFkTjs7QUFpQkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWROOztBQWdCTTtFQUNFLFVBQUE7QUFkUiIsImZpbGUiOiJzaWduLWtpZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuI2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBEYXJrR3JlZW47IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICAjOEVCRjI1LCM4RUJGMjUsIzI0NzIzOCwgIzI0NzIzOCk7XG4gIH1cblxuICAkcnVsZXI6IDE2cHg7XG4kY29sb3ItcmVkOiAjNzI2YjZiO1xuJGNvbG9yLWJnOiAjRUJFQ0YwO1xuJGNvbG9yLXNoYWRvdzogI0JBQkVDQztcbiRjb2xvci13aGl0ZTogI0ZGRjtcblxuYm9keSwgaHRtbCB7XG4gIGJhY2tncm91bmQtY29sb3I6JGNvbG9yLWJnO1xufVxuXG4gaW5wdXQsaW9uLWlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBidXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgICBmb250LXNpemU6ICRydWxlcjtcbn1cblxuZGl2LCBwIHtcbiAgY29sb3I6ICRjb2xvci1zaGFkb3c7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAkY29sb3Itd2hpdGU7XG59XG5cblxuZm9ybSB7XG4gIHBhZGRpbmc6ICRydWxlcjtcbiAgd2lkdGg6ICRydWxlcioyMDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zZWdtZW50IHtcbiAgcGFkZGluZzogJHJ1bGVyKjIgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24sIGlucHV0LGlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAkcnVsZXI7XG4gIGJvcmRlci1yYWRpdXM6ICRydWxlcioyMDtcbiAgcGFkZGluZzogJHJ1bGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiRjb2xvci1iZztcbiAgaGVpZ2h0OjUwcHg7XG59XG5pb24taW5wdXQge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG5cblxuXG5pb24taW5wdXR7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6ICM4YThiOGU7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206ICRydWxlcioxLjU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCxpb24taW5wdXQge1xuICBtYXJnaW4tcmlnaHQ6ICRydWxlci8yO1xuICBib3gtc2hhZG93OiAgaW5zZXQgMnB4IDJweCA1cHggJGNvbG9yLXNoYWRvdywgaW5zZXQgLTVweCAtNXB4IDEwcHggJGNvbG9yLXdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblxuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAgaW5zZXQgMXB4IDFweCAycHggJGNvbG9yLXNoYWRvdywgaW5zZXQgLTFweCAtMXB4IDJweCAkY29sb3Itd2hpdGU7XG4gIH1cbn1cblxuYnV0dG9uIHtcbiAgY29sb3I6IzYxNjc3QztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IC01cHggLTVweCAyMHB4ICRjb2xvci13aGl0ZSwgIDVweCA1cHggMjBweCAkY29sb3Itc2hhZG93O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IC0ycHggLTJweCA1cHggJGNvbG9yLXdoaXRlLCAycHggMnB4IDVweCAkY29sb3Itc2hhZG93O1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4ICRjb2xvci1zaGFkb3csIGluc2V0IC0xcHggLTFweCAycHggJGNvbG9yLXdoaXRlO1xuICB9XG5cbiAgLmljb24ge1xuICAgIG1hcmdpbi1yaWdodDogJHJ1bGVyLzI7XG4gIH1cblxuICAmLnVuaXQge1xuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAkcnVsZXIqMztcbiAgICBoZWlnaHQ6ICRydWxlciozO1xuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIG1hcmdpbjogMCAkcnVsZXIvMjtcbiAgICBmb250LXNpemU6ICRydWxlcioxLjI7XG5cbiAgICAuaWNvbiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgJi5yZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiRjb2xvci1yZWQ7XG4gIH1cbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIGxhYmVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZmxleDogMTtcbiAgfVxufVxuI0J1dHRvbkNvbm5lY3Qge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyNDcyMzgsICMyNDcyMzggLCM4RUJGMjUsIzhFQkYyNSk7XG4gICAgd2lkdGg6NjAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICAgYm9yZGVyLXJhZGl1czoyNXB4O1xuXG59XG4uZmlzaGVzXG4gICAge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgfVxuICAgIC5maXNoXG4gICAge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OjMwdmg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAubG9nb3NpZ25pbntcbiAgICAgIHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDgwcHg7ICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5pbWFnZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5mb3JtLWNvbnRyb2xsIHtcbiAgICAgIGNvbG9yOmJsYWNrO1xuXG4gICAgfVxuICAgIC5vdmVybGF5IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGxlZnQ6IDMyJTtcbiAgICAgIHRvcDogMTUlO1xuICAgIH1cblxuICAgIC5pbWcyIHtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMzYlO1xuICAgICAgfVxuICAgIH1cbiJdfQ== */");

/***/ }),

/***/ 94299:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/sign-kids/sign-kids.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-row class=\"container\" >\n\n        <ion-img src=\"../../../assets/kidslogin.png\" alt=\"Avatar\" class=\"image\"></ion-img>\n        <div class=\"overlay\">\n          <div class=\"img2\">\n            <img src=\"https://w7.pngwing.com/pngs/489/253/png-transparent-circular-economy-logo-ellen-macarthur-foundation-circle-company-service-logo.png\" alt=\"Avatar\" class=\"image\">\n          </div>\n        </div>\n\n\n  </ion-row>\n\n  <div>\n    <form [formGroup]=\"loginForm\">\n      <div style=\"margin-top: 15px;\">\n\n      <ion-row>\n          <ion-row>\n            <ion-col size=\"1\">\n            </ion-col>\n            <ion-col>\n\n\n\n            <ion-input type=\"email\" style=\"margin: 5px;\"  autofocus=\"true\" class=\"form-controll ion-margin-bottom\" mdInput formControlName=\"emailControl\"\n            [ngClass]=\"{'error':loginForm.controls['emailControl'].errors && !loginForm.controls['emailControl'].pristine}\"\n            color=\"{{loginForm.controls['emailControl'].errors && !loginForm.controls['emailControl'].pristine ? 'warning':'dark'}}\"\n            placeholder=\"Adresse Email\" name=\"email\" [(ngModel)]=\"user.email\" required >\n\n            <ion-icon style=\"color: #88ba26;  padding: 15px;\" name=\"pencil-sharp\" slot=\"end\"></ion-icon>\n\n\n          </ion-input>\n\n\n        </ion-col>\n        <ion-col size=\"1\">\n        </ion-col>\n          </ion-row>\n        </ion-row>\n        <ion-row>\n          <ion-row>\n            <ion-col size=\"1\">\n            </ion-col>\n            <ion-col>\n\n              <ion-input   style=\"margin: 5px;\" type=\"password\" class=\"form-controll ion-margin-bottom\" mdInput placeholder=\"Mot de passe\"\n              formControlName=\"passwordControl\" name=\"password\" [(ngModel)]=\"user.password\" required>\n\n              <ion-icon style=\"color: #88ba26;   padding: 15px;\" name=\"pencil-sharp\" item-right></ion-icon>\n\n\n          </ion-input>\n\n            </ion-col>\n            <ion-col size=\"1\">\n            </ion-col>\n          </ion-row>\n        </ion-row>\n      </div>\n        <ion-row style=\"margin-bottom: 20px;  justify-content: center;\">\n        <ion-label style=\"color:#72c6ec;font-size: x-small;\"  (click)=\"ResetPassword()\" >JE N'AI PAS RECUE DE CODE</ion-label>\n      </ion-row>\n        <button   id=\"ButtonConnect\"  (click)=\"login()\"  class=\"red\" type=\"submit\"  [disabled]=\" loginForm.invalid\">\n        <span style=\"color:white;font-weight: lighter;  font-family: MyriadPro-Regular;\n        \"> CONNEXION</span> </button>\n\n\n\n    </form>\n  </div>\n  </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_kids_sign-kids_sign-kids_module_ts.js.map