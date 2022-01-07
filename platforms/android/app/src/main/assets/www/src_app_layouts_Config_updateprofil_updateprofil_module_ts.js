(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_Config_updateprofil_updateprofil_module_ts"],{

/***/ 38102:
/*!****************************************************************************!*\
  !*** ./src/app/layouts/Config/updateprofil/updateprofil-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateprofilPageRoutingModule": () => (/* binding */ UpdateprofilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _updateprofil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateprofil.page */ 95298);




const routes = [
    {
        path: '',
        component: _updateprofil_page__WEBPACK_IMPORTED_MODULE_0__.UpdateprofilPage
    }
];
let UpdateprofilPageRoutingModule = class UpdateprofilPageRoutingModule {
};
UpdateprofilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateprofilPageRoutingModule);



/***/ }),

/***/ 79849:
/*!********************************************************************!*\
  !*** ./src/app/layouts/Config/updateprofil/updateprofil.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateprofilPageModule": () => (/* binding */ UpdateprofilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/component.module */ 55051);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _updateprofil_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateprofil-routing.module */ 38102);
/* harmony import */ var _updateprofil_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateprofil.page */ 95298);








let UpdateprofilPageModule = class UpdateprofilPageModule {
};
UpdateprofilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _updateprofil_routing_module__WEBPACK_IMPORTED_MODULE_1__.UpdateprofilPageRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_0__.ComponentModule,
        ],
        declarations: [_updateprofil_page__WEBPACK_IMPORTED_MODULE_2__.UpdateprofilPage]
    })
], UpdateprofilPageModule);



/***/ }),

/***/ 95298:
/*!******************************************************************!*\
  !*** ./src/app/layouts/Config/updateprofil/updateprofil.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateprofilPage": () => (/* binding */ UpdateprofilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_updateprofil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./updateprofil.page.html */ 48169);
/* harmony import */ var _updateprofil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateprofil.page.scss */ 94886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 51188);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Auth/auth.service */ 21584);
/* harmony import */ var src_app_Shared_Service_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Service/image.service */ 97030);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);










let UpdateprofilPage = class UpdateprofilPage {
    constructor(userService, action, imageService, authService) {
        this.userService = userService;
        this.action = action;
        this.imageService = imageService;
        this.authService = authService;
        this.user$ = [];
        this.apiImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiImg + 'User/';
        this.filesToUpload = null;
        this.disabledName = false;
        this.dateOfToday = new Date();
        this.options = { year: 'numeric', month: 'long', day: 'numeric' };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.getMe();
            this.editing = false;
        });
    }
    envoyer() {
        console.log('envoyer');
    }
    getMe() {
        this.userService.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.user$ = yield res.data.data;
            console.log(this.user$);
            this.birthDay = this.user$.datedenaissance;
            this.date = new Date(this.birthDay);
            this.date = this.date.toLocaleDateString("en-US", this.options);
            console.log(this.date);
            // console.log(this.date.toLocaleDateString("en-US", this.options))
            this.userService.getUser(this.user$._id).subscribe(user => {
                const createdAt = new Date(this.user$.createdAt);
                if (createdAt.getFullYear() === this.dateOfToday.getFullYear()) {
                    if (this.dateOfToday.getDay() - createdAt.getDate() < 61) {
                        this.disabledName = true;
                    }
                }
            });
        }));
    }
    toggleEdit() {
        if (this.editing === false) {
            this.editing = true;
        }
        else if (this.editing === true) {
            this.editing = false;
        }
        console.log(this.editing);
    }
    addImage(source) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const fd = new FormData();
            yield this.imageService.readyImage(source, fd);
            this.getFormData(this.user$, fd);
            this.userService.updateMe(fd).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                this.getMe();
                console.log("updated");
            }));
        });
    }
    selectImageSource() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const buttons = [
                {
                    text: 'Take Photo',
                    icon: 'camera',
                    handler: () => {
                        this.addImage(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera);
                    },
                },
                {
                    text: 'Choose from photos',
                    icon: 'image',
                    handler: () => {
                        this.addImage(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos);
                    },
                },
            ];
            const actionSheet = yield this.action.create({
                header: 'Select Image Source',
                buttons,
            });
            yield actionSheet.present();
        });
    }
    getFormData(object, formdata) {
        Object.keys(object).forEach((key) => formdata.append(key, object[key]));
    }
    updateMe() {
        const fd = new FormData();
        this.getFormData(this.user$, fd);
        this.userService.updateMe(fd).subscribe();
    }
};
UpdateprofilPage.ctorParameters = () => [
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: src_app_Shared_Service_image_service__WEBPACK_IMPORTED_MODULE_4__.ImageService },
    { type: src_app_Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
UpdateprofilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-updateprofil',
        template: _raw_loader_updateprofil_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_updateprofil_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UpdateprofilPage);



/***/ }),

/***/ 94886:
/*!********************************************************************!*\
  !*** ./src/app/layouts/Config/updateprofil/updateprofil.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #f8f8f8;\n}\n\nion-item {\n  --background: #f8f8f8;\n}\n\nh5 {\n  margin: 0px;\n}\n\nh6 {\n  margin: 0px;\n  color: #29c467;\n}\n\np {\n  margin-bottom: 20px;\n}\n\nion-select::part(placeholder) {\n  text-align: center;\n}\n\nion-select::part(icon) {\n  opacity: 0;\n}\n\nion-select {\n  --padding-start: 16px;\n}\n\nion-item {\n  box-shadow: 0px 0px 18px 5px rgba(0, 0, 0, 0.2);\n  border-radius: 30px !important;\n  font-size: 0.9em;\n  margin-bottom: 10px;\n  border: 1px solid #ffffff;\n  border-bottom: 0px !important;\n  text-align: center;\n}\n\nion-item.footer {\n  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2);\n  border-radius: 0px !important;\n  font-size: 0.9em;\n  margin-bottom: 90px;\n  border: 1px solid #ffffff;\n  border-bottom: 0px !important;\n  text-align: center;\n}\n\nion-item.textInput {\n  text-align: start;\n}\n\nion-item.textInput.palmares {\n  border-radius: 20px !important;\n  text-align: start;\n}\n\nion-content {\n  --padding-top: 10px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n}\n\nion-button {\n  width: 100px;\n  height: 40px;\n  --background: linear-gradient(300deg, #8EBF25, #3b8c4f, #247238, #247238);\n}\n\nion-label.desac {\n  font-weight: bold;\n  color: #3b8c4f;\n  margin-left: 20px;\n}\n\n.sendButton {\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZXByb2ZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRSxxQkFBQTtBQUNIOztBQUVDO0VBQ0UscUJBQUE7QUFDSDs7QUFFQztFQUNFLFdBQUE7QUFDSDs7QUFFQztFQUNFLFdBQUE7RUFDQSxjQUFBO0FBQ0g7O0FBRUM7RUFDRSxtQkFBQTtBQUNIOztBQUVDO0VBQ0Usa0JBQUE7QUFDSDs7QUFFQztFQUNFLFVBQUE7QUFDSDs7QUFFQztFQUNFLHFCQUFBO0FBQ0g7O0FBRUM7RUFDRSwrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUNIOztBQUdDO0VBQ0UsMENBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFBSDs7QUFJQztFQUVFLGlCQUFBO0FBRkg7O0FBTUM7RUFDQyw4QkFBQTtFQUNBLGlCQUFBO0FBSEY7O0FBU0M7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFOSDs7QUFTQztFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUVBQUE7QUFOSDs7QUFTQztFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBTkg7O0FBU0M7RUFFRSxtQkFBQTtBQVBIIiwiZmlsZSI6InVwZGF0ZXByb2ZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgaW9uLWNvbnRlbnQge1xuICAgLS1iYWNrZ3JvdW5kOiAjZjhmOGY4O1xuIH1cblxuIGlvbi1pdGVtIHtcbiAgIC0tYmFja2dyb3VuZDogI2Y4ZjhmODtcbiB9XG5cbiBoNSB7XG4gICBtYXJnaW46IDBweDtcbiB9XG5cbiBoNiB7XG4gICBtYXJnaW46IDBweDtcbiAgIGNvbG9yOiAjMjljNDY3O1xuIH1cblxuIHAge1xuICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiB9XG5cbiBpb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSB7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gfVxuXG4gaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gICBvcGFjaXR5OiAwO1xuIH1cblxuIGlvbi1zZWxlY3Qge1xuICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuIH1cblxuIGlvbi1pdGVtIHtcbiAgIGJveC1zaGFkb3c6IDBweCAwcHggMThweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIwKTtcbiAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gfVxuXG4gaW9uLWl0ZW0uZm9vdGVyIHtcbiAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yMCk7XG4gICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICBtYXJnaW4tYm90dG9tOiA5MHB4O1xuICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gfVxuXG4gaW9uLWl0ZW0udGV4dElucHV0IHtcblxuICAgdGV4dC1hbGlnbjogc3RhcnQ7XG5cbiB9XG5cbiBpb24taXRlbS50ZXh0SW5wdXQucGFsbWFyZXMge1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuXG5cbiB9XG5cblxuIGlvbi1jb250ZW50IHtcbiAgIC0tcGFkZGluZy10b3A6IDEwcHg7XG4gICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gICAtLXBhZGRpbmctZW5kOiAyMHB4O1xuIH1cblxuIGlvbi1idXR0b24ge1xuICAgd2lkdGg6IDEwMHB4O1xuICAgaGVpZ2h0OiA0MHB4O1xuICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzAwZGVnLCAjOEVCRjI1LCAjM2I4YzRmLCAjMjQ3MjM4LCAjMjQ3MjM4KTtcbiB9XG5cbiBpb24tbGFiZWwuZGVzYWMge1xuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICBjb2xvcjogIzNiOGM0ZjtcbiAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuIH1cblxuIC5zZW5kQnV0dG9uIHtcblxuICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiB9XG4iXX0= */");

/***/ }),

/***/ 48169:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/Config/updateprofil/updateprofil.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"MODIFIER PROFILE\" [isParam]=\"true\"></app-header>\n<ion-content *ngIf=\"editing===true\" >\n  <ion-row style=\"margin-bottom: 10px;\">\n    <ion-col size=\"3\">\n      <ion-avatar>\n        <img [src]=\"apiImg+user$?.photo\">\n      </ion-avatar>\n    </ion-col>\n    <ion-col size=\"9\">\n      <h5>{{user$.name}} {{user$.lastname}}</h5>\n      <h6 (click)=\"selectImageSource()\">modifier la photo de profil</h6>\n    </ion-col>\n  </ion-row>\n\n  <ion-item class=\"textInput\">\n    <ion-input type=\"text\" placeholder=\"A PROPOS\" rows=\"6\" placeholder=\"NOM D'UTILISATION\" [disabled]=\"disabledName\" [(ngModel)]=\"user$.name\">\n    </ion-input>\n  </ion-item>\n  <ion-grid>\n    <ion-row>\n      <p style=\"font-size: small;\">\n        Aidez les gens a trouver votre compte a l'aide de votre nom le plus connu,\n        que ce soit votre nom complet ,votre surnom ou votre nom d'entreprise\n\n      </p>\n    </ion-row>\n    <ion-item class=\"textInput palmares\">\n      <ion-textarea type=\"text\" placeholder=\"A PROPOS\" rows=\"3\" [(ngModel)]=\"user$.palmares\"></ion-textarea>\n    </ion-item>\n    <ion-item class=\"textInput\">\n      <ion-label>Adresse e-mail</ion-label>\n      <ion-input type=\"email\" placeholder=\"ADRESSE E-MAIL\" [(ngModel)]=\"user$.email\"></ion-input>\n    </ion-item>\n    <ion-item class=\"textInput\">\n      <ion-label>Numero de telephone</ion-label>\n      <ion-input type=\"number\" placeholder=\"NUMERO DE TELEPHONE\" [(ngModel)]=\"user$.phone\"></ion-input>\n    </ion-item>\n    <ion-item class=\"textInput\">\n      <ion-label>Date de naissance</ion-label>\n      <ion-datetime displayFormat=\"MMM D, YYYY\" min=\"1900\" [(ngModel)]=\"user$.datedenaissance\"></ion-datetime>\n    </ion-item>\n  </ion-grid>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-select placeholder=\"Genre\" okText=\"Okay\" cancelText=\"Dismiss\" [(ngModel)]=\"user$.sexe\">\n          <ion-select-option value=\"homme\">Homme</ion-select-option>\n          <ion-select-option value=\"femme\">Femme</ion-select-option>\n          <ion-select-option value=\"autre\">Autre</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item lines=\"none\">\n        <ion-input style=\"font-size: small;\" type=\"text\" placeholder=\"POIDS\" [(ngModel)]=\"user$.weight\"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item lines=\"none\">\n        <ion-input style=\"font-size: small;\" type=\"text\" placeholder=\"TAILLE\" [(ngModel)]=\"user$.height\"></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"padding:20px;\">\n    <!-- <button style=\"\n      margin-right: 25px;\n      background-image: linear-gradient(\n        40deg,\n        rgba(92, 99, 91, 1) 0%,\n        rgba(36, 114, 56, 1) 35%,\n        rgb(142, 191, 37, 1) 100%\n      );\n      padding: 11px 15px;\n      border-radius: 10px;\n      color: white;\n      font-size: 10px;\n    \" (click)=\"updateMe()\">Envoyer\n    </button> -->\n\n    <ion-label class=\"desac\" routerLink=\"/desactivermoncompte\">Desactivez mon compte</ion-label>\n  </ion-row>\n  <div style=\"display: flex;\">\n    <img (click)=\"updateMe()\"  (click)=\"toggleEdit()\" style=\"width: 30px;height:30px;margin-right:10px\" src=\"../../../assets/svg/green-tick.svg\" alt=\"\">\n    <img (click)=\"toggleEdit()\" style=\"width: 30px;height:30px\" src=\"../../../assets/svg/red-x.svg\" alt=\"\">\n  </div>\n</ion-content>\n<ion-content *ngIf=\"editing===false\" >\n  <ion-row style=\"margin-bottom: 10px;\">\n    <ion-col size=\"3\">\n      <ion-avatar>\n        <img [src]=\"apiImg+user$?.photo\">\n      </ion-avatar>\n    </ion-col>\n    <ion-col size=\"9\">\n      <h5>{{user$.name}} {{user$.lastname}}</h5>\n    </ion-col>\n  </ion-row >\n  <ion-row style=\"position: relative;\">\n    <div (click)=\"toggleEdit()\" style=\"width:20px;height:20px;position:absolute;right:0;top:-30px\">\n      <img src=\"../../../assets/svg/green-pen.svg\" alt=\"\">\n    </div>\n  </ion-row>\n  <ion-item class=\"textInput\">\n    <span  >\n      {{user$.name}}\n    </span>\n  </ion-item>\n  <ion-grid>\n    <ion-row>\n      <p style=\"font-size: small;\">\n        Aidez les gens a trouver votre compte a l'aide de votre nom le plus connu,\n        que ce soit votre nom complet ,votre surnom ou votre nom d'entreprise\n      </p>\n    </ion-row>\n    <label>A PROPOS</label>\n    <ion-item style=\"height: 150px;padding:15px 0;margin-top:10px\" class=\"textInput palmares\">\n      <span style=\"height: 150px;width:100%\">{{user$.palmares}}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>\n    </ion-item>\n    <ion-item class=\"textInput\">\n      <ion-label>Email</ion-label>\n      <span>{{user$.email}}</span>\n    </ion-item>\n    <ion-item class=\"textInput\">\n      <ion-label>Numero de telephone</ion-label>\n      <span>{{user$.phone}}</span>\n    </ion-item>\n    <ion-item class=\"textInput\">\n      <ion-label>Date de naissance</ion-label>\n      <span displayFormat=\"MMM D YYYY\">{{date}}</span>\n    </ion-item>\n  </ion-grid>\n  <ion-row>\n    <ion-col>\n      <ion-item class=\"textInput\">\n        <ion-label>Gender</ion-label>\n        <span style=\"text-transform: capitalize;\">{{user$.sexe}}</span>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item class=\"textInput\">\n        <ion-label>Weight</ion-label>\n        <span>{{user$.weight}} Kg</span>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item class=\"textInput\">\n        <ion-label>Height</ion-label>\n        <span>{{user$.height}}cm</span>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"padding:20px;\">\n\n    <ion-label class=\"desac\" routerLink=\"/desactivermoncompte\">Desactivez mon compte</ion-label>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_Config_updateprofil_updateprofil_module_ts.js.map