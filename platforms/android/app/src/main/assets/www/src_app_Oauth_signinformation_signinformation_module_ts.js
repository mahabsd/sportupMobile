(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_Oauth_signinformation_signinformation_module_ts"],{

/***/ 85184:
/*!*************************************************************************!*\
  !*** ./src/app/Oauth/signinformation/signinformation-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninformationPageRoutingModule": () => (/* binding */ SigninformationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _signinformation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signinformation.page */ 26295);




const routes = [
    {
        path: '',
        component: _signinformation_page__WEBPACK_IMPORTED_MODULE_0__.SigninformationPage
    }
];
let SigninformationPageRoutingModule = class SigninformationPageRoutingModule {
};
SigninformationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SigninformationPageRoutingModule);



/***/ }),

/***/ 92833:
/*!*****************************************************************!*\
  !*** ./src/app/Oauth/signinformation/signinformation.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninformationPageModule": () => (/* binding */ SigninformationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _signinformation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signinformation-routing.module */ 85184);
/* harmony import */ var _signinformation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signinformation.page */ 26295);







let SigninformationPageModule = class SigninformationPageModule {
};
SigninformationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signinformation_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigninformationPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_signinformation_page__WEBPACK_IMPORTED_MODULE_1__.SigninformationPage]
    })
], SigninformationPageModule);



/***/ }),

/***/ 26295:
/*!***************************************************************!*\
  !*** ./src/app/Oauth/signinformation/signinformation.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninformationPage": () => (/* binding */ SigninformationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_signinformation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signinformation.page.html */ 3960);
/* harmony import */ var _signinformation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signinformation.page.scss */ 38737);
/* harmony import */ var src_app_Shared_Model_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Model/User */ 89040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);







let SigninformationPage = class SigninformationPage {
    constructor(
    // private camera: Camera,
    fb, activeRoute, router) {
        this.fb = fb;
        this.activeRoute = activeRoute;
        this.router = router;
        this.userImg = '';
        this.base64Img = '';
        this.user = {
            age: '',
            taille: '',
            poids: '',
            sexe: ''
        };
        this.Editdata = new src_app_Shared_Model_User__WEBPACK_IMPORTED_MODULE_2__.User();
        // this.activeRoute.params.subscribe(param => {
        //   if (param && param.data) {
        //     this.data = JSON.parse(param.data);
        //     console.log('new passing data', this.data);
        //   }
        // });
        this.userImg = 'assets/imgs/logo.png';
    }
    openGallery() {
    }
    logForm(form) {
        // manzeh 1 / pharmacie
        // 6 persone / groupe
        console.log(this.user);
        this.user.age = '';
        this.user.taille = '';
        this.user.poids = '';
        this.user.sexe = '';
    }
    ngOnInit() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            emailControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            passwordControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            confirmControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            mobileControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            add1Control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            add2COntrol: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            postcodeControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
            stateControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
        });
    }
    // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    // openGallery() {
    //   this.camera.getPicture(this.gelleryOptions).then((imgData) => {
    //     console.log('image data =>  ', imgData);
    //     this.base64Img = 'data:image/jpeg;base64,' + imgData;
    //     this.userImg = this.base64Img;
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }
    ConnectFacebook() {
        console.log('hello facebook go to inscription by facebook');
    }
    ConnectGoogle() {
        console.log('hello google go to inscription by google');
    }
    SaveUser() {
        // this.Editdata.User_First_Name = this.data.User_First_Name;
        // this.Editdata.User_Email = this.data.User_Email;
        // this.Editdata.User_Password = this.data.User_Password;
        // this.Editdata.User_Naissance = this.user.age;
        // this.Editdata.User_Cut = this.user.poids;
        // this.Editdata.User_Weight = this.user.taille;
        // this.Editdata.User_Sexe = this.user.sexe;
        // this.signinService.updateItem(this.data._id, this.Editdata).subscribe(response => {
        //   this.router.navigate(['/home']);
        //   console.log(response);
        // });
        // console.log('user updated successfully');
        // this.user.age = '';
        // this.user.taille = '';
        // this.user.poids = '';
        // this.user.sexe = '';
    }
    login() {
        console.log('back to user');
    }
    ResetPassword() {
        console.log('reset passowrd');
    }
};
SigninformationPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
SigninformationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-signinformation',
        template: _raw_loader_signinformation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signinformation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SigninformationPage);



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

/***/ 38737:
/*!*****************************************************************!*\
  !*** ./src/app/Oauth/signinformation/signinformation.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  height: 800px;\n  background-color: DarkGreen;\n  /* For browsers that do not support gradients */\n  background-image: linear-gradient(135deg, #247238, #247238, #8EBF25, #8EBF25);\n}\n\nbody, html {\n  background-color: #EBECF0;\n}\n\ninput, select, textarea, button {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\ndiv, p {\n  color: #BABECC;\n  text-shadow: 1px 1px 1px #FFF;\n}\n\nform {\n  padding: 16px;\n  width: 320px;\n  margin: 0 auto;\n}\n\n.segment {\n  padding: 32px 0;\n  text-align: center;\n}\n\nbutton, input {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 24px;\n  width: 100%;\n}\n\ninput {\n  margin-right: 8px;\n  box-shadow: inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF;\n  width: 100%;\n  box-sizing: border-box;\n  transition: all 0.2s ease-in-out;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-appearance: none;\n}\n\ninput:focus {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 5px 5px 20px #BABECC;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 600;\n}\n\nbutton:hover {\n  box-shadow: -2px -2px 5px #FFF, 2px 2px 5px #BABECC;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton .icon {\n  margin-right: 8px;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  width: 48px;\n  height: 48px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\nbutton.red {\n  display: block;\n  width: 100%;\n  color: #726b6b;\n}\n\n.input-group {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.input-group label {\n  margin: 0;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbmZvcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFBNkIsK0NBQUE7RUFDN0IsNkVBQUE7QUFFSjs7QUFPQTtFQUNFLHlCQUxTO0FBQ1g7O0FBT0M7RUFDRyxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFiTTtBQVNWOztBQU9BO0VBQ0UsY0FkYTtFQWViLDZCQUFBO0FBSkY7O0FBUUE7RUFDRSxhQXZCUTtFQXdCUixZQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBcENRO0VBcUNSLG9CQUFBO0VBQ0EsYUF0Q1E7RUF1Q1IseUJBckNTO0VBc0NULDJCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLGdFQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0Esd0JBQUE7QUFMRjs7QUFPRTtFQUNFLCtEQUFBO0FBTEo7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTkY7O0FBUUU7RUFDRSxtREFBQTtBQU5KOztBQVNFO0VBQ0UsK0RBQUE7QUFQSjs7QUFVRTtFQUNFLGlCQUFBO0FBUko7O0FBV0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQVRKOztBQVdJO0VBQ0UsZUFBQTtBQVROOztBQWFFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQXJHUTtBQTBGWjs7QUFlQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBWkY7O0FBY0U7RUFDRSxTQUFBO0VBQ0EsT0FBQTtBQVpKIiwiZmlsZSI6InNpZ25pbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBEYXJrR3JlZW47IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMjQ3MjM4LCAjMjQ3MjM4LCAgIzhFQkYyNSwjOEVCRjI1KTtcclxuICB9XHJcblxyXG4gICRydWxlcjogMTZweDtcclxuJGNvbG9yLXJlZDogIzcyNmI2YjtcclxuJGNvbG9yLWJnOiAjRUJFQ0YwO1xyXG4kY29sb3Itc2hhZG93OiAjQkFCRUNDO1xyXG4kY29sb3Itd2hpdGU6ICNGRkY7XHJcblxyXG5ib2R5LCBodG1sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiRjb2xvci1iZztcclxufVxyXG5cclxuIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XHJcbiAgICBmb250LXNpemU6ICRydWxlcjtcclxufVxyXG5cclxuZGl2LCBwIHtcclxuICBjb2xvcjogJGNvbG9yLXNoYWRvdztcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggJGNvbG9yLXdoaXRlO1xyXG59XHJcblxyXG5cclxuZm9ybSB7XHJcbiAgcGFkZGluZzogJHJ1bGVyO1xyXG4gIHdpZHRoOiAkcnVsZXIqMjA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zZWdtZW50IHtcclxuICBwYWRkaW5nOiAkcnVsZXIqMiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uLCBpbnB1dCB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgZm9udC1zaXplOiAkcnVsZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogJHJ1bGVyKjIwO1xyXG4gIHBhZGRpbmc6ICRydWxlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiRjb2xvci1iZztcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwICRjb2xvci13aGl0ZTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206ICRydWxlcioxLjU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW4tcmlnaHQ6ICRydWxlci8yO1xyXG4gIGJveC1zaGFkb3c6ICBpbnNldCAycHggMnB4IDVweCAkY29sb3Itc2hhZG93LCBpbnNldCAtNXB4IC01cHggMTBweCAkY29sb3Itd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAgaW5zZXQgMXB4IDFweCAycHggJGNvbG9yLXNoYWRvdywgaW5zZXQgLTFweCAtMXB4IDJweCAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGNvbG9yOiM2MTY3N0M7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm94LXNoYWRvdzogLTVweCAtNXB4IDIwcHggJGNvbG9yLXdoaXRlLCAgNXB4IDVweCAyMHB4ICRjb2xvci1zaGFkb3c7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAtMnB4IC0ycHggNXB4ICRjb2xvci13aGl0ZSwgMnB4IDJweCA1cHggJGNvbG9yLXNoYWRvdztcclxuICB9XHJcbiAgXHJcbiAgJjphY3RpdmUge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggJGNvbG9yLXNoYWRvdywgaW5zZXQgLTFweCAtMXB4IDJweCAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogJHJ1bGVyLzI7XHJcbiAgfVxyXG4gIFxyXG4gICYudW5pdCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgd2lkdGg6ICRydWxlciozO1xyXG4gICAgaGVpZ2h0OiAkcnVsZXIqMztcclxuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAkcnVsZXIvMjtcclxuICAgIGZvbnQtc2l6ZTogJHJ1bGVyKjEuMjtcclxuICAgIFxyXG4gICAgLmljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7IFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLnJlZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6JGNvbG9yLXJlZDtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ 3960:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Oauth/signinformation/signinformation.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title\n      style=\"\n        background-image: linear-gradient(\n          119deg,\n          rgba(92, 99, 91, 1) 0%,\n          rgba(36, 114, 56, 1) 35%,\n          rgb(122, 113, 172) 100%\n        );\n      \"\n      >Sign in</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div id=\"container\">\n    <ion-row style=\"justify-content: center\">\n      <ion-avatar>\n        <img src=\"{{userImg}}\" alt=\"\" (click)=\"openGallery()\" />\n      </ion-avatar>\n    </ion-row>\n    <div class=\"segment\">\n      <h1>Créer un compte</h1>\n    </div>\n    <form>\n      <label>\n        <input\n          type=\"text\"\n          placeholder=\"Quel est votre age\"\n          [(ngModel)]=\"user.age\"\n          ngControl=\"age\"\n          name=\"age\"\n          required\n        />\n      </label>\n      <label>\n        <input\n          type=\"text\"\n          placeholder=\"Quel est votre taille\"\n          [(ngModel)]=\"user.taille\"\n          ngControl=\"taille\"\n          name=\"taille\"\n          required\n        />\n      </label>\n      <label>\n        <input\n          type=\"text\"\n          placeholder=\"Quel est votre poids\"\n          [(ngModel)]=\"user.poids\"\n          ngControl=\"poids\"\n          name=\"poids\"\n          required\n        />\n      </label>\n      <label>\n        <input\n          type=\"text\"\n          placeholder=\"Quel est votre sexe\"\n          [(ngModel)]=\"user.sexe\"\n          ngControl=\"sexe\"\n          name=\"sexe\"\n          required\n        />\n      </label>\n      <div class=\"segment\">\n        <button (click)=\"login()\" class=\"unit\" type=\"button\">\n          <ion-icon name=\"arrow-back-outline\"></ion-icon>\n        </button>\n        <ion-button\n          (click)=\"SaveUser()\"\n          [disabled]=\"registerForm.invalid\"\n          class=\"unit\"\n          type=\"button\"\n        >\n          <ion-icon name=\"bookmark-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </form>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_Oauth_signinformation_signinformation_module_ts.js.map