(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_Oauth_confirmation_confirmation_module_ts"],{

/***/ 61657:
/*!*******************************************************************!*\
  !*** ./src/app/Oauth/confirmation/confirmation-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationPageRoutingModule": () => (/* binding */ ConfirmationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _confirmation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation.page */ 77616);




const routes = [
    {
        path: '',
        component: _confirmation_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmationPage
    }
];
let ConfirmationPageRoutingModule = class ConfirmationPageRoutingModule {
};
ConfirmationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmationPageRoutingModule);



/***/ }),

/***/ 38820:
/*!***********************************************************!*\
  !*** ./src/app/Oauth/confirmation/confirmation.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationPageModule": () => (/* binding */ ConfirmationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation-routing.module */ 61657);
/* harmony import */ var _confirmation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation.page */ 77616);







let ConfirmationPageModule = class ConfirmationPageModule {
};
ConfirmationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmationPageRoutingModule
        ],
        declarations: [_confirmation_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmationPage]
    })
], ConfirmationPageModule);



/***/ }),

/***/ 77616:
/*!*********************************************************!*\
  !*** ./src/app/Oauth/confirmation/confirmation.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationPage": () => (/* binding */ ConfirmationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_confirmation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./confirmation.page.html */ 67701);
/* harmony import */ var _confirmation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation.page.scss */ 60546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/Service/user.service */ 88838);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_Model_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Model/User */ 89040);








let ConfirmationPage = class ConfirmationPage {
    constructor(active, router, toastCtrl, userService) {
        this.active = active;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.userService = userService;
        this.code = '';
        this.user = new src_app_Shared_Model_User__WEBPACK_IMPORTED_MODULE_3__.User();
        this.renvoi = false;
    }
    ngOnInit() {
    }
    getAge(dateString) {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    confirmer() {
        let body = {
            token: this.code
        };
        this.userService.confirmInscription(body).subscribe((response) => {
            var _a, _b, _c;
            // if age is > 13 pro and particulier
            if (this.getAge((_a = response.data) === null || _a === void 0 ? void 0 : _a.age) > 13 || ((_b = response.data) === null || _b === void 0 ? void 0 : _b.role) === 'pro') {
                this.router.navigateByUrl('/login');
            }
            else if (this.getAge((_c = response.data) === null || _c === void 0 ? void 0 : _c.age) < 13) {
                this.router.navigateByUrl('/kids/sign-kids');
            }
        }, err => {
            var _a, _b;
            console.log(err);
            this.presentToast((_b = (_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message, 'danger', 'middle');
        });
    }
    presentToast(message, color, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                duration: 2000,
                color,
                position
            });
            toast.present();
        });
    }
    renvoyer() {
        this.renvoi = true;
        this.userService.renvoyerToken(this.user).subscribe((response) => {
            console.log('hello user', response);
            this.renvoi = false;
        }, err => {
            console.log(err);
            this.presentToast(err, 'danger', 'middle');
        });
    }
    activeRenvoi() {
        this.renvoi = true;
    }
};
ConfirmationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
ConfirmationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-confirmation',
        template: _raw_loader_confirmation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_confirmation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfirmationPage);



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

/***/ 60546:
/*!***********************************************************!*\
  !*** ./src/app/Oauth/confirmation/confirmation.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  height: 100%;\n  background-color: DarkGreen;\n  /* For browsers that do not support gradients */\n  background-image: linear-gradient(300deg, #8EBF25, #3b8c4f, #247238, #247238);\n}\n\nbody,\nhtml {\n  background-color: #EBECF0;\n}\n\n.form-controll {\n  background-color: transparent;\n  color: #FFF;\n  box-shadow: none;\n  text-shadow: none;\n  font-weight: 500;\n}\n\n.hr {\n  margin: 3rem 0 0 0;\n  width: 50%;\n  box-shadow: 0px -25px 45px 0.4em black;\n}\n\nion-avatar {\n  width: 7em;\n  height: 7em;\n  box-shadow: 0px 3px 6px 0px black;\n}\n\ninput,\nselect,\ntextarea,\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\ndiv,\np {\n  color: #FFF;\n}\n\nform {\n  padding: 16px;\n  width: 320px;\n  margin: 0 auto;\n}\n\n.segment {\n  padding: 8px 0;\n  text-align: center;\n}\n\nion-button {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  height: 2em;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nbutton,\nion-input {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 24px;\n  width: 100%;\n}\n\nion-input {\n  margin-right: 8px;\n  padding: 0.5em !important;\n  border: 2px solid #ccc;\n  box-shadow: inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;\n  width: 100%;\n  box-sizing: border-box;\n  transition: all 0.2s ease-in-out;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n}\n\nion-input:focus {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 600;\n  margin-bottom: 2em;\n}\n\nbutton:hover {\n  box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;\n}\n\nbutton:active {\n  background-color: red;\n}\n\nbutton .icon {\n  margin-right: 8px;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  width: 48px;\n  height: 48px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\nbutton.red {\n  display: block;\n  width: 100%;\n  color: #726b6b;\n}\n\nion-button {\n  color: #61677C;\n  font-weight: bold;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 600;\n  margin-bottom: 2em;\n}\n\nion-button:hover {\n  box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;\n}\n\nion-button:active {\n  background-color: linear-gradient(300deg, #8EBF25, #3b8c4f, #247238, #247238);\n}\n\nion-button .icon {\n  margin-right: 8px;\n}\n\nion-button.unit {\n  border-radius: 8px;\n  line-height: 0;\n  width: 48px;\n  height: 48px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n}\n\nion-button.unit .icon {\n  margin-right: 0;\n}\n\nion-button.red {\n  display: block;\n  width: 100%;\n  height: 3.5em;\n  color: #726b6b;\n}\n\ninput::-moz-placeholder {\n  color: #000 !important;\n}\n\n.input-group {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.input-group label {\n  margin: 0;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtFQUNBLDZFQUFBO0FBQ0o7O0FBUUE7O0VBRUkseUJBTk87QUFDWDs7QUFRQTtFQUNJLDZCQUFBO0VBQ0EsV0FUVTtFQVVWLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0NBQUE7QUFMSjs7QUFRQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUFMSjs7QUFRQTs7OztFQUlJLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQXJDSTtBQWdDUjs7QUFRQTs7RUFFSSxXQXRDVTtBQWlDZDs7QUFVQTtFQUNJLGFBaERJO0VBaURKLFlBQUE7RUFDQSxjQUFBO0FBUEo7O0FBVUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFQSjs7QUFVQTtFQUVJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUE5REk7RUErREosb0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBL0RPO0VBZ0VQLDJCQUFBO0FBUko7O0FBV0E7O0VBR0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxlQTFFSTtFQTJFSixvQkFBQTtFQUNBLGFBNUVJO0VBNkVKLHlCQTNFTztFQTRFUCwyQkFBQTtBQVRKOztBQVlBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQVRKOztBQVlBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSx3QkFBQTtBQVZKOztBQVlJO0VBQ0ksK0RBQUE7QUFWUjs7QUFjQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUVBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFaSjs7QUFjSTtFQUNJLG1EQUFBO0FBWlI7O0FBZUk7RUFDSSxxQkFBQTtBQWJSOztBQWlCSTtFQUNJLGlCQUFBO0FBZlI7O0FBa0JJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFoQlI7O0FBa0JRO0VBQ0ksZUFBQTtBQWhCWjs7QUFvQkk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBaEpJO0FBOEhaOztBQXNCQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUVBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFwQko7O0FBc0JJO0VBQ0ksbURBQUE7QUFwQlI7O0FBdUJJO0VBQ0ksNkVBQUE7QUFyQlI7O0FBeUJJO0VBQ0ksaUJBQUE7QUF2QlI7O0FBMEJJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUF4QlI7O0FBMEJRO0VBQ0ksZUFBQTtBQXhCWjs7QUE0Qkk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQTlMSTtBQW9LWjs7QUE4QkE7RUFDSSxzQkFBQTtBQTNCSjs7QUE4QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQTNCSjs7QUE2Qkk7RUFDSSxTQUFBO0VBQ0EsT0FBQTtBQTNCUiIsImZpbGUiOiJjb25maXJtYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IERhcmtHcmVlbjtcbiAgICAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzAwZGVnLCAjOEVCRjI1LCAjM2I4YzRmLCAjMjQ3MjM4LCAjMjQ3MjM4KTtcbn1cblxuJHJ1bGVyOiAxNnB4O1xuJGNvbG9yLXJlZDogIzcyNmI2YjtcbiRjb2xvci1iZzogI0VCRUNGMDtcbiRjb2xvci1zaGFkb3c6ICNCQUJFQ0M7XG4kY29sb3Itd2hpdGU6ICNGRkY7XG5cbmJvZHksXG5odG1sIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmc7XG59XG5cbi5mb3JtLWNvbnRyb2xsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmhyIHtcbiAgICBtYXJnaW46IDNyZW0gMCAwIDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwcHggLTI1cHggNDVweCAwLjRlbSBibGFjaztcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDdlbTtcbiAgICBoZWlnaHQ6IDdlbTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggYmxhY2s7XG59XG5cbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEsXG5idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgICBmb250LXNpemU6ICRydWxlcjtcbn1cblxuZGl2LFxucCB7XG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICAvL3RleHQtc2hhZG93OiAxcHggMXB4IDFweCAkY29sb3Itd2hpdGU7XG59XG5cblxuZm9ybSB7XG4gICAgcGFkZGluZzogJHJ1bGVyO1xuICAgIHdpZHRoOiAkcnVsZXIqMjA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zZWdtZW50IHtcbiAgICBwYWRkaW5nOiAkcnVsZXIqMC41IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYnV0dG9uIHtcblxuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlcioyMDtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmc7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAkY29sb3Itd2hpdGU7XG59XG5cbmJ1dHRvbixcbmlvbi1pbnB1dCB7XG5cbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBmb250LXNpemU6ICRydWxlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkcnVsZXIqMjA7XG4gICAgcGFkZGluZzogJHJ1bGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZztcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwICRjb2xvci13aGl0ZTtcbn1cblxubGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206ICRydWxlcioxLjU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAkcnVsZXIvMjtcbiAgICBwYWRkaW5nOiAwLjVlbSAhaW1wb3J0YW50O1xuXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDVweCAkY29sb3Itc2hhZG93LCBpbnNldCAtNXB4IC01cHggMTBweCAkY29sb3Itd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDJweCAkY29sb3Itc2hhZG93LCBpbnNldCAtMXB4IC0xcHggMnB4ICRjb2xvci13aGl0ZTtcbiAgICB9XG59XG5cbmJ1dHRvbiB7XG4gICAgY29sb3I6ICM2MTY3N0M7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gIGJveC1zaGFkb3c6IC01cHggLTVweCAyMHB4ICRjb2xvci13aGl0ZSwgIDVweCA1cHggMjBweCAkY29sb3Itc2hhZG93O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAtMnB4IC0ycHggNXB4ICRjb2xvci13aGl0ZSwgMnB4IDJweCA1cHggJGNvbG9yLXNoYWRvdztcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggJGNvbG9yLXNoYWRvdywgaW5zZXQgLTFweCAtMXB4IDJweCAkY29sb3Itd2hpdGU7XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRydWxlci8yO1xuICAgIH1cblxuICAgICYudW5pdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgd2lkdGg6ICRydWxlciozO1xuICAgICAgICBoZWlnaHQ6ICRydWxlciozO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCAkcnVsZXIvMjtcbiAgICAgICAgZm9udC1zaXplOiAkcnVsZXIqMS4yO1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYucmVkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXJlZDtcbiAgICB9XG59XG5cbmlvbi1idXR0b24ge1xuICAgIGNvbG9yOiAjNjE2NzdDO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vICBib3gtc2hhZG93OiAtNXB4IC01cHggMjBweCAkY29sb3Itd2hpdGUsICA1cHggNXB4IDIwcHggJGNvbG9yLXNoYWRvdztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogLTJweCAtMnB4IDVweCAkY29sb3Itd2hpdGUsIDJweCAycHggNXB4ICRjb2xvci1zaGFkb3c7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMzAwZGVnLCAjOEVCRjI1LCAjM2I4YzRmLCAjMjQ3MjM4LCAjMjQ3MjM4KTtcbiAgICAgICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggJGNvbG9yLXNoYWRvdywgaW5zZXQgLTFweCAtMXB4IDJweCAkY29sb3Itd2hpdGU7XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRydWxlci8yO1xuICAgIH1cblxuICAgICYudW5pdCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgd2lkdGg6ICRydWxlciozO1xuICAgICAgICBoZWlnaHQ6ICRydWxlciozO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCAkcnVsZXIvMjtcbiAgICAgICAgZm9udC1zaXplOiAkcnVsZXIqMS4yO1xuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYucmVkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMuNWVtO1xuICAgICAgICBjb2xvcjogJGNvbG9yLXJlZDtcbiAgICB9XG59XG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICBsYWJlbCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ 67701:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Oauth/confirmation/confirmation.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div id=\"container\">\n\n\n    <ion-row class=\"ion-padding-top\" style=\" justify-content: center;\">\n      <ion-avatar>\n        <img src=\"../../../assets/imgs/logo.jpg\">\n      </ion-avatar>\n    </ion-row>\n    <div class=\"segment\">\n      <h1>Ajouter le code de confirmation</h1>\n      <p>Tu trouve le code de confirmation dans l'email</p>\n    </div>\n    <form *ngIf=\"!renvoi\" >\n\n      <ion-input type=\"text\" class=\"form-controll ion-margin-bottom\" placeholder=\"Code de confirmation\" name=\"code\"\n        [(ngModel)]=\"code\" required></ion-input>\n\n      <ion-button (click)=\"confirmer()\" color=\"transparent\" shape=\"round\"  class=\"red \"\n        type=\" submit\">\n        Confirmer\n      </ion-button>\n\n\n\n    </form>\n    <form *ngIf=\"renvoi\" >\n\n      <ion-input type=\"text\" class=\"form-controll ion-margin-bottom\" placeholder=\"Votre email\" name=\"code\"\n        [(ngModel)]=\"user.email\" required></ion-input>\n\n      <ion-button (click)=\"renvoyer()\" color=\"transparent\" shape=\"round\"  class=\"red \"\n        type=\" submit\">\n        Confirmer\n      </ion-button>\n\n\n\n    </form>\n    <ion-row style=\"  justify-content: center;\">\n\n      <ion-label class=\"ion-padding-top\" (click)=\"activeRenvoi()\" >Renvoyer le code de confirmation ?</ion-label>\n    </ion-row>\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_Oauth_confirmation_confirmation_module_ts.js.map