(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_Config_parametre_parametre_module_ts"],{

/***/ 19476:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/Config/parametre/parametre-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametrePageRoutingModule": () => (/* binding */ ParametrePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _parametre_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parametre.page */ 53281);




const routes = [
    {
        path: '',
        component: _parametre_page__WEBPACK_IMPORTED_MODULE_0__.ParametrePage
    }
];
let ParametrePageRoutingModule = class ParametrePageRoutingModule {
};
ParametrePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ParametrePageRoutingModule);



/***/ }),

/***/ 58964:
/*!**************************************************************!*\
  !*** ./src/app/layouts/Config/parametre/parametre.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametrePageModule": () => (/* binding */ ParametrePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _parametre_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parametre-routing.module */ 19476);
/* harmony import */ var _parametre_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parametre.page */ 53281);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let ParametrePageModule = class ParametrePageModule {
};
ParametrePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _parametre_routing_module__WEBPACK_IMPORTED_MODULE_0__.ParametrePageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_parametre_page__WEBPACK_IMPORTED_MODULE_1__.ParametrePage]
    })
], ParametrePageModule);



/***/ }),

/***/ 53281:
/*!************************************************************!*\
  !*** ./src/app/layouts/Config/parametre/parametre.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametrePage": () => (/* binding */ ParametrePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_parametre_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./parametre.page.html */ 93573);
/* harmony import */ var _parametre_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parametre.page.scss */ 81217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Auth/auth.service */ 21584);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);







let ParametrePage = class ParametrePage {
    constructor(authService, userService, elemRef) {
        this.authService = authService;
        this.userService = userService;
        this.elemRef = elemRef;
        this.apiImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiImg + 'User/';
    }
    onClickOutside(targetElement) {
        const target = this.elemRef.nativeElement.querySelector('div');
        if (targetElement.tagName === target.tagName) {
            this.dropDown = false;
        }
    }
    ngOnInit() {
        this.getMe();
        this.dropDown = false;
    }
    getMe() {
        this.userService.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield res.data.data;
            this.name = yield this.user.name;
            // console.log(this.user);
        }));
    }
    logout() {
        this.authService.logout();
    }
    openDropDown() {
        if (this.dropDown === false) {
            this.dropDown = true;
        }
        else if (this.dropDown === true) {
            this.dropDown = false;
        }
    }
};
ParametrePage.ctorParameters = () => [
    { type: src_app_Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef }
];
ParametrePage.propDecorators = {
    onClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostListener, args: ['click', ['$event.target'],] }]
};
ParametrePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-parametre',
        template: _raw_loader_parametre_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_parametre_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ParametrePage);



/***/ }),

/***/ 81217:
/*!**************************************************************!*\
  !*** ./src/app/layouts/Config/parametre/parametre.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #f8f8f8;\n}\n\n.leaderboard {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-left: 40px;\n  padding-bottom: 20px;\n}\n\n.article {\n  padding: 15px;\n  display: flex;\n  align-items: center;\n}\n\nimg {\n  margin-right: 10px;\n}\n\n.item {\n  color: black;\n  font-size: 15px;\n}\n\n.article1 {\n  padding-top: 10px;\n  display: flex;\n  align-items: center;\n}\n\n.deconnexion {\n  color: #3b8c4f;\n  font-weight: bold !important;\n  margin-top: 20px;\n}\n\n.profileID {\n  display: flex;\n  justify-content: flex-start;\n  padding-left: 20px;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFtZXRyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVGIiwiZmlsZSI6InBhcmFtZXRyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cblxuLmxlYWRlcmJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uYXJ0aWNsZSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pbWd7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLml0ZW0ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwKTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYXJ0aWNsZTEge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRlY29ubmV4aW9uIHtcbiAgY29sb3I6ICMzYjhjNGY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5wcm9maWxlSUQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ 93573:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/Config/parametre/parametre.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"PARAMETRES\" [inParam]=\"true\"></app-header>\n\n<ion-content>\n  <div class=\"profileID\">\n    <ion-avatar style=\"height:50px; width:50px\" >\n      <img [src]=\"apiImg+user?.photo\">\n    </ion-avatar>\n    <h4> &nbsp;&nbsp; {{name}}</h4>\n  </div>\n  <div *ngIf=\"user?.role==='kids'\" >\n    <main class=\"leaderboard\">\n      <div class=\"article\" routerLink=\"/abonnerinviteramis\">\n        <img style=\"width:30px;height:30px\" src=\"../../../assets/svg/invite.svg\" alt=\"\">\n        <span class=\"item\">S'ABONNER ET INVITER DES AMIS</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/confidentialite\">\n        <img style=\"width:30px;height:30px\" src=\"../../../assets/svg/confident.svg\" alt=\"\">\n        <span class=\"item\">CONFIDENTIALITE ET SECURITE</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/politiques-utilisation\">\n        <img style=\"width:30px;height:30px\" src=\"../../../assets/svg/politic.svg\" alt=\"\">\n        <span class=\"item\">POLITIQUE D'UTILISATION DES DONNEES</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/updateprofil\">\n        <img style=\"width:30px;height:30px\" src=\"../../../assets/svg/edit-profil.svg\" alt=\"\">\n        <span class=\"item\">MODIFIER PROFIL</span>\n      </div>\n\n\n      <div class=\"article\" routerLink=\"/securiteconnexion\">\n        <img style=\"width:30px;height:30px\" src=\"../../../assets/svg/security.svg\" alt=\"\">\n        <span class=\"item\">SECURITE ET CONNEXION</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/langue\">\n        <img style=\"width:30px;height:30px\" src=\"../../../assets/svg/language.svg\" alt=\"\">\n        <span class=\"item\">LANGUE</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/historiquepersonnel\">\n        <img style=\"width:30px;height:30px\" src=\"../../../assets/svg/historic.svg\" alt=\"\">\n        <span class=\"item\">HISTORIQUE PERSONNEL</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/contact\">\n        <img style=\"width:30px;height:30px\" src=\"../../../assets/svg/contact.svg\" alt=\"\">\n        <span class=\"item\">CONTACT</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/help\">\n        <img style=\"width:30px;height:30px\" src=\"../../../assets/svg/help.svg\" alt=\"\">\n        <span class=\"item\">AIDE</span>\n      </div>\n\n      <div (click)=\"openDropDown()\" (blur)=\"openDropDown()\" class=\"article\">\n        <img style=\"width:30px;height:30px\" src=\"../../../assets/svg/add-account.svg\" alt=\"\">\n        <span class=\"item\">AJOUTER UN COMPTE</span>\n      </div>\n\n      <div class=\"article1\" routerLink=\"/desactivermoncompte\">\n        <img style=\"width:30px;height:30px\" src=\"../../../assets/svg/disactive-account.svg\" alt=\"\">\n        <span class=\"item\">DESACTIVER MON COMPTE</span>\n      </div>\n\n      <div class=\"article1\" (click)=\"logout()\">\n        <img style=\"width:30px;height:30px\" src=\"../../../assets/svg/logout.svg\" alt=\"\">\n        <span class=\"deconnexion\">DECONNEXION</span>\n      </div>\n      <ng-container *ngIf=\"dropDown\">\n        <div style=\"position: absolute;background-color:rgb(243, 243, 243);padding:15px;border-radius:15px;bottom:0;display:flex;flex-direction:column;\n        width:300px;color:rgb(143, 143, 143);box-shadow:-5px 5px 10px rgb(113, 113, 113);align-items:center\">\n          <span (blur)=\"openDropDown()\" routerLink=\"/signin-kids\" style=\"font-size: 15px;margin:10px;font-weight:bold\">Se connecter à un compte existant</span>\n          <span (blur)=\"openDropDown()\" routerLink=\"/signin\" style=\"font-size: 15px;margin:10px\">Créer un nouveau compte</span>\n        </div>\n      </ng-container>\n    </main>\n  </div>\n  <div *ngIf=\"user?.role==='user'\" >\n    <main class=\"leaderboard\">\n      <div class=\"article\" routerLink=\"/abonnerinviteramis\">\n        <span class=\"item\">S'ABONNER ET INVITER DES AMIS</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/confidentialite\">\n        <span class=\"item\">CONFIDENTIALITE ET SECURITE</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/politiques-utilisation\">\n        <span class=\"item\">POLITIQUE D'UTILISATION DES DONNEES</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/updateprofil\">\n        <span class=\"item\">MODIFIER PROFIL</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/securiteconnexion\">\n        <span class=\"item\">SECURITE ET CONNEXION</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/langue\">\n        <span class=\"item\">LANGUE</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/historiquepersonnel\">\n        <span class=\"item\">HISTORIQUE PERSONNEL</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/contact\">\n        <span class=\"item\">CONTACT</span>\n      </div>\n\n      <div class=\"article\" routerLink=\"/help\">\n        <span class=\"item\">AIDE</span>\n      </div>\n\n      <div (click)=\"openDropDown()\" (blur)=\"openDropDown()\" class=\"article\">\n        <span class=\"item\">AJOUTER UN COMPTE</span>\n      </div>\n\n      <div class=\"article1\" routerLink=\"/desactivermoncompte\">\n        <span class=\"item\">DESACTIVER MON COMPTE</span>\n      </div>\n\n      <div class=\"article1\" (click)=\"logout()\">\n        <span class=\"deconnexion\">DECONNEXION</span>\n      </div>\n      <ng-container *ngIf=\"dropDown\" style=\"position: relative;\">\n        <div style=\"position: absolute;background-color:rgb(243, 243, 243);padding:15px;border-radius:15px;bottom:30px;right:10px;display:flex;flex-direction:column;\n        width:300px;color:rgb(143, 143, 143);box-shadow:-5px 5px 10px rgb(113, 113, 113);align-items:center\">\n          <span (blur)=\"openDropDown()\" routerLink=\"/login\" style=\"font-size: 15px;margin:10px;font-weight:bold\">Se connecter à un compte existant</span>\n          <span (blur)=\"openDropDown()\" routerLink=\"/signin\" style=\"font-size: 15px;margin:10px\">Créer un nouveau compte</span>\n        </div>\n      </ng-container>\n    </main>\n  </div>\n</ion-content>\n<ion-footer>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_Config_parametre_parametre_module_ts.js.map