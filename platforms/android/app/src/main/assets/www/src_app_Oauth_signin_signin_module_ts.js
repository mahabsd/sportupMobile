(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_Oauth_signin_signin_module_ts"],{

/***/ 45954:
/*!*******************************************************!*\
  !*** ./src/app/Oauth/signin/signin-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageRoutingModule": () => (/* binding */ SigninPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.page */ 26213);




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_0__.SigninPage
    }
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SigninPageRoutingModule);



/***/ }),

/***/ 39404:
/*!***********************************************!*\
  !*** ./src/app/Oauth/signin/signin.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageModule": () => (/* binding */ SigninPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin-routing.module */ 45954);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page */ 26213);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);








let SigninPageModule = class SigninPageModule {
};
SigninPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigninPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule
        ],
        providers: [],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_1__.SigninPage]
    })
], SigninPageModule);



/***/ }),

/***/ 26213:
/*!*********************************************!*\
  !*** ./src/app/Oauth/signin/signin.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPage": () => (/* binding */ SigninPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signin.page.html */ 92992);
/* harmony import */ var _signin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page.scss */ 19948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_Shared_Model_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Model/User */ 89040);
/* harmony import */ var src_app_Shared_patternValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/patternValidator */ 38877);
/* harmony import */ var _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/Service/user.service */ 88838);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_Service_hobbies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Service/hobbies.service */ 24271);











let SigninPage = class SigninPage {
    constructor(fb, toastCtrl, signinService, router, hobbiesService) {
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.signinService = signinService;
        this.router = router;
        this.hobbiesService = hobbiesService;
        this.section = '1';
        this.role = '';
        this.user = new src_app_Shared_Model_User__WEBPACK_IMPORTED_MODULE_2__.User();
    }
    ngOnInit() {
        this.user.role = 'user';
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            emailControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                // eslint-disable-next-line max-len
                (0,src_app_Shared_patternValidator__WEBPACK_IMPORTED_MODULE_3__.PatternValidator)(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            passwordControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            confirmPasswordControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            nameControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            roleControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            activiteControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            hobby: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
        });
        this.particulierForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            dateNaissanceControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            heightControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            weightControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            sexeControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        });
        this.proForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            phoneControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8)]),
            adresseControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        });
        this.hobbiesService.getHobbies().subscribe(res => console.log(res));
    }
    connectFacebook() {
        console.log('hello facebook');
    }
    connectGoogle() {
        console.log('hello google');
    }
    enableSection(event) {
        // this.section = '';
        this.section = event.target.id;
        this.role = this.user.role;
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
    saveUser() {
        const age = this.getAge(this.user.datedenaissance);
        if (age < 13)
            this.user.role = 'kids';
        this.signinService.signUp(this.user).subscribe(res => {
            this.presentToast('Bienvenue ' + this.user.name, 'success', 'middle');
            this.router.navigateByUrl('/confirmation');
        }, err => {
            this.presentToast(err, 'danger', 'top');
        });
        //add hobby to the registered user
        //    console.log(this.hobbies);
        // this.hobbiesService.addHobby(this.hobbies)
    }
    presentToast(message, color, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 5000,
                color,
                position
            });
            toast.present();
        });
    }
};
SigninPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_shared_Service_hobbies_service__WEBPACK_IMPORTED_MODULE_5__.HobbiesService }
];
SigninPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-signin',
        template: _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SigninPage);



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

/***/ 19948:
/*!***********************************************!*\
  !*** ./src/app/Oauth/signin/signin.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  height: 100vh;\n  margin-top: auto;\n  margin-bottom: auto;\n  /* align-items: baseline; */\n  justify-content: space-around;\n  display: flex;\n  flex-direction: column;\n}\n\nion-content {\n  background: none;\n  --ion-background-color: linear-gradient(300deg, #8EBF25, #3b8c4f, #247238, #247238);\n}\n\nbody, html {\n  background-color: #EBECF0;\n}\n\n.form-controll {\n  background-color: transparent;\n  color: #FFF;\n  box-shadow: none;\n  text-shadow: none;\n  font-weight: 500;\n}\n\nion-avatar {\n  width: 7em;\n  height: 7em;\n  box-shadow: 0px 3px 6px 0px black;\n}\n\ninput, select, textarea, button {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\ndiv, p {\n  color: #FFF;\n}\n\nform {\n  padding: 0 16px;\n  width: 320px;\n  margin: 0 auto;\n}\n\n.segment {\n  padding: 8px 0;\n  text-align: center;\n}\n\nbutton, ion-input {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nion-select {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 24px;\n  width: 100%;\n}\n\nion-input {\n  margin-right: 8px;\n  padding: 0 0.5em !important;\n  border: 2px solid #ccc;\n  box-shadow: inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;\n  width: 100%;\n  box-sizing: border-box;\n  transition: all 0.2s ease-in-out;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n}\n\nion-input:focus {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nion-select {\n  margin-right: 8px;\n  padding: 0.5em 1em !important;\n  border: 2px solid #ccc;\n  width: 100%;\n  box-sizing: border-box;\n  transition: all 0.2s ease-in-out;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n}\n\nion-select:focus {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 600;\n  margin-bottom: 2em;\n}\n\nbutton .icon {\n  margin-right: 8px;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  width: 48px;\n  height: 48px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\nbutton.red {\n  display: block;\n  width: 100%;\n  color: #3b8c4f;\n}\n\n.input-group {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.input-group label {\n  margin: 0;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFRQTtFQUNFLGdCQUFBO0VBRUEsbUZBQUE7QUFORjs7QUFRQTtFQUNFLHlCQVRTO0FBSVg7O0FBT0E7RUFDRSw2QkFBQTtFQUNBLFdBWFk7RUFZWixnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUFKRjs7QUFNQztFQUNHLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQTdCTTtBQTBCVjs7QUFNQTtFQUNFLFdBN0JZO0FBMEJkOztBQVFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFwRFE7RUFxRFIsb0JBQUE7RUFDQSxhQXREUTtFQXVEUix5QkFyRFM7RUFzRFQsMkJBQUE7QUFMRjs7QUFPQztFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUE3RFE7RUE4RFIsb0JBQUE7QUFKRjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdFQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0Esd0JBQUE7QUFORjs7QUFRRTtFQUNFLCtEQUFBO0FBTko7O0FBU0E7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFFQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSx3QkFBQTtBQVBGOztBQVNFO0VBQ0UsK0RBQUE7QUFQSjs7QUFXQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUVBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFrQkU7RUFDRSxpQkFBQTtBQWhCSjs7QUFtQkU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWpCSjs7QUFtQkk7RUFDRSxlQUFBO0FBakJOOztBQXFCRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQW5CSjs7QUF1QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQXBCRjs7QUFzQkU7RUFDRSxTQUFBO0VBQ0EsT0FBQTtBQXBCSiIsImZpbGUiOiJzaWduaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcblxyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIC8qIGFsaWduLWl0ZW1zOiBiYXNlbGluZTsgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiAgJHJ1bGVyOiAxNnB4O1xyXG4kY29sb3ItcmVkOiAjNzI2YjZiO1xyXG4kY29sb3ItYmc6ICNFQkVDRjA7XHJcbiRjb2xvci1zaGFkb3c6ICNCQUJFQ0M7XHJcbiRjb2xvci13aGl0ZTogI0ZGRjtcclxuaW9uLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogRGFya0dyZWVuO1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgzMDBkZWcsICM4RUJGMjUsICMzYjhjNGYsICMyNDcyMzgsICMyNDcyMzgpO1xyXG59XHJcbmJvZHksIGh0bWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6JGNvbG9yLWJnO1xyXG59XHJcbi5mb3JtLWNvbnRyb2xse1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5cclxufVxyXG5pb24tYXZhdGFye1xyXG4gIHdpZHRoOiA3ZW07XHJcbiAgaGVpZ2h0OiA3ZW07XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggMHB4IGJsYWNrO1xyXG59XHJcbiBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xyXG4gICAgZm9udC1zaXplOiAkcnVsZXI7XHJcbn1cclxuXHJcbmRpdiwgcCB7XHJcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAvL3RleHQtc2hhZG93OiAxcHggMXB4IDFweCAkY29sb3Itd2hpdGU7XHJcbn1cclxuXHJcblxyXG5mb3JtIHtcclxuICBwYWRkaW5nOiAgMCAkcnVsZXI7XHJcbiAgd2lkdGg6ICRydWxlcioyMDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnNlZ21lbnQge1xyXG4gIHBhZGRpbmc6ICRydWxlciowLjUgMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiwgaW9uLWlucHV0IHtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBmb250LXNpemU6ICRydWxlcjtcclxuICBib3JkZXItcmFkaXVzOiAkcnVsZXIqMjA7XHJcbiAgcGFkZGluZzogJHJ1bGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6JGNvbG9yLWJnO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDAgJGNvbG9yLXdoaXRlO1xyXG59XHJcbiBpb24tc2VsZWN0IHtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBmb250LXNpemU6ICRydWxlcjtcclxuICBib3JkZXItcmFkaXVzOiAkcnVsZXIqMjA7XHJcbiAgLy8gcGFkZGluZzogJHJ1bGVyO1xyXG5cclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206ICRydWxlcioxLjU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAkcnVsZXIvMjtcclxuICBwYWRkaW5nOjAgMC41ZW0gIWltcG9ydGFudDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gIGJveC1zaGFkb3c6ICBpbnNldCAycHggMnB4IDVweCAkY29sb3Itc2hhZG93LCBpbnNldCAtNXB4IC01cHggMTBweCAkY29sb3Itd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAgaW5zZXQgMXB4IDFweCAycHggJGNvbG9yLXNoYWRvdywgaW5zZXQgLTFweCAtMXB4IDJweCAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcbmlvbi1zZWxlY3Qge1xyXG4gIG1hcmdpbi1yaWdodDogJHJ1bGVyLzI7XHJcbiAgcGFkZGluZzowLjVlbSAxZW0gIWltcG9ydGFudDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gIC8vIGJveC1zaGFkb3c6ICBpbnNldCAycHggMnB4IDVweCAkY29sb3Itc2hhZG93LCBpbnNldCAtNXB4IC01cHggMTBweCAkY29sb3Itd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAgaW5zZXQgMXB4IDFweCAycHggJGNvbG9yLXNoYWRvdywgaW5zZXQgLTFweCAtMXB4IDJweCAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGNvbG9yOiM2MTY3N0M7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgLy9ib3gtc2hhZG93OiAtNXB4IC01cHggMjBweCAkY29sb3Itd2hpdGUsICA1cHggNXB4IDIwcHggJGNvbG9yLXNoYWRvdztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOjJlbTtcclxuICAmOmhvdmVyIHtcclxuICAgIC8vIGJveC1zaGFkb3c6IC0ycHggLTJweCA1cHggJGNvbG9yLXdoaXRlLCAycHggMnB4IDVweCAkY29sb3Itc2hhZG93O1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggJGNvbG9yLXNoYWRvdywgaW5zZXQgLTFweCAtMXB4IDJweCAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6ICRydWxlci8yO1xyXG4gIH1cclxuXHJcbiAgJi51bml0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICB3aWR0aDogJHJ1bGVyKjM7XHJcbiAgICBoZWlnaHQ6ICRydWxlciozO1xyXG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgbWFyZ2luOiAwICRydWxlci8yO1xyXG4gICAgZm9udC1zaXplOiAkcnVsZXIqMS4yO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5yZWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiMzYjhjNGY7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 92992:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Oauth/signin/signin.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div id=\"container\">\n\n    <ion-row class=\"ion-padding-top ion-justify-content-center\">\n      <ion-avatar>\n        <img src=\"../../../assets/imgs/logo.jpg\">\n      </ion-avatar>\n    </ion-row>\n    <!-- <ion-row class=\"ion-justify-content-center\">\n            <div class=\"hr\"> </div>\n        </ion-row> -->\n    <ng-template [ngIf]=\"section  === '1'\">\n      <form [formGroup]=\"registerForm\">\n        <div class=\"segment\">\n          <h1>Créer un compte</h1>\n        </div>\n        <ion-input type=\"text\" autofocus=\"true\" class=\"form-controll ion-margin-bottom\" placeholder=\"Nom et prénom\"\n          [(ngModel)]=\"user.name\" mdInput formControlName=\"nameControl\" name=\"name\" required>\n        </ion-input>\n        <ion-input type=\"email\" class=\"form-controll ion-margin-bottom\" placeholder=\"Adresse email\"\n          [(ngModel)]=\"user.email\" mdInput formControlName=\"emailControl\" name=\"email\" required></ion-input>\n\n     \n        <ion-input type=\"password\" class=\"form-controll ion-margin-bottom\" placeholder=\"Mot de passe\"\n          [(ngModel)]=\"user.password\" mdInput formControlName=\"passwordControl\" name=\"password\" required>\n        </ion-input>\n        <ion-input type=\"password\" class=\"form-controll ion-margin-bottom\" placeholder=\"Confirmer le mot de passe\"\n          [(ngModel)]=\"user.passwordConfirm\" mdInput formControlName=\"confirmPasswordControl\" name=\"confirmepassword\"\n          required>\n        </ion-input>\n\n        <ion-select placeholder=\"Particulier / Professionnel\" [(ngModel)]=\"user.role\" mdInput\n          formControlName=\"roleControl\" class=\"form-controll ion-margin-bottom\" okText=\"Okay\" cancelText=\"Dismiss\">\n\n          <ion-select-option value=\"user\">Particulier</ion-select-option>\n          <ion-select-option value=\"pro\">Professionnel</ion-select-option>\n\n        </ion-select>\n        <ion-select placeholder=\"choisis une activité préférée\" [(ngModel)]=\"user.activity\" mdInput\n        formControlName=\"activiteControl\">\n        <ion-select-option value=\"Aquatique\">Aquatique</ion-select-option>\n        <ion-select-option value=\"Avec Moteur\">Avec Moteur </ion-select-option>\n        <ion-select-option value=\"Dans les airs\">Dans les airs </ion-select-option>\n        <ion-select-option value=\"Divers\">Divers</ion-select-option>\n        <ion-select-option value=\"En Equipe\">En Equipe </ion-select-option>\n        <ion-select-option value=\"Full nature\">Full nature</ion-select-option>\n        <ion-select-option value=\"Dans les airs\">Dans les airs </ion-select-option>\n        <ion-select-option value=\"Marche\">Marche</ion-select-option>\n        <ion-select-option value=\"Rando\">Rando</ion-select-option>\n        <ion-select-option value=\"Raquettes\">Raquettes</ion-select-option>\n        <ion-select-option value=\"Sans Moteur\">Sans Moteur  </ion-select-option>\n        <ion-select-option value=\"Sport De Glisse\">Sport De Glisse</ion-select-option>\n        <ion-select-option value=\"sports De Duels\">sports De Duels  </ion-select-option>\n        <ion-select-option value=\"Training et Dancing\">Training et Dancing</ion-select-option>\n      </ion-select>\n        <div class=\"segment\">\n          <button [routerLink]=\"['/login']\" class=\"unit\" type=\"button\">\n            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n          </button>\n          <button (click)=\"enableSection($event)\" id=\"2\" [disabled]=\"registerForm.invalid\" class=\"unit\" type=\"button\">\n            <ion-icon name=\"arrow-forward-outline\" id=\"2\"></ion-icon>\n          </button>\n\n        </div>\n      </form>\n\n    </ng-template>\n    <ng-template [ngIf]=\"section  === '2' && user.role==='user'\">\n      <form [formGroup]=\"particulierForm\">\n        <div class=\"segment\">\n          <h1>Particulier</h1>\n        </div>\n        <ion-input type=\"date\" class=\"form-controll ion-margin-bottom\" placeholder=\"Date de naissance\"\n          [(ngModel)]=\"user.datedenaissance\" mdInput formControlName=\"dateNaissanceControl\" name=\"datedenaissance\"\n          required>\n        </ion-input>\n        <ion-input type=\"text\" class=\"form-controll ion-margin-bottom\" placeholder=\"Taille\" [(ngModel)]=\"user.height\"\n          mdInput formControlName=\"heightControl\" name=\"height\" required>\n        </ion-input>\n        <ion-input type=\"text\" class=\"form-controll ion-margin-bottom\" placeholder=\"Poids\" [(ngModel)]=\"user.weight\"\n          mdInput formControlName=\"weightControl\" name=\"weight\" required>\n        </ion-input>\n\n\n\n        <ion-select placeholder=\"Sexe\" [(ngModel)]=\"user.sexe\" mdInput [(ngModel)]=\"user.sexe\"\n          formControlName=\"sexeControl\" class=\"form-controll ion-margin-bottom\" okText=\"Ok\" cancelText=\"Annuler\">\n\n          <ion-select-option value=\"homme\">Homme</ion-select-option>\n          <ion-select-option value=\"femme\">Femme</ion-select-option>\n\n        </ion-select>\n\n        <div class=\"segment\">\n          <button (click)=\"enableSection($event)\" id=\"1\" class=\"unit\" type=\"button\">\n            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n          </button>\n          <button (click)=\"saveUser()\" [disabled]=\"particulierForm.invalid\" class=\"unit\" type=\"button\">\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </button>\n\n        </div>\n      </form>\n    </ng-template>\n    <ng-template [ngIf]=\"section  === '2' && user.role==='pro'\">\n      <form [formGroup]=\"proForm\">\n        <div class=\"segment\">\n          <h1>Professionnel</h1>\n        </div>\n\n        <ion-input type=\"text\" class=\"form-controll ion-margin-bottom\" placeholder=\"Adresse\" [(ngModel)]=\"user.adresse\"\n          mdInput formControlName=\"adresseControl\" name=\"adresse\" required>\n        </ion-input>\n        <div>\n          <h5 *ngIf=\"registerForm.invalid\">eurr</h5>\n        </div>\n        <ion-input type=\"number\" class=\"form-controll ion-margin-bottom\" placeholder=\"Téléphone\"\n          [(ngModel)]=\"user.phone\" mdInput formControlName=\"phoneControl\" name=\"phone\" minlength=\"8\" maxlength=\"12\"\n          required></ion-input>\n\n        <div class=\"segment\">\n          <button (click)=\"enableSection($event)\" id=\"1\" class=\"unit\" type=\"button\">\n            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n          </button>\n          <button (click)=\"saveUser()\" [disabled]=\"proForm.invalid\" class=\"unit\" type=\"button\">\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </button>\n\n        </div>\n      </form>\n    </ng-template>\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Oauth_signin_signin_module_ts.js.map