(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_Config_help-page_help-page_module_ts"],{

/***/ 2459:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/Config/help-page/help-page-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPagePageRoutingModule": () => (/* binding */ HelpPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _help_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-page.page */ 98658);




const routes = [
    {
        path: '',
        component: _help_page_page__WEBPACK_IMPORTED_MODULE_0__.HelpPagePage
    }
];
let HelpPagePageRoutingModule = class HelpPagePageRoutingModule {
};
HelpPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HelpPagePageRoutingModule);



/***/ }),

/***/ 25638:
/*!**************************************************************!*\
  !*** ./src/app/layouts/Config/help-page/help-page.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPagePageModule": () => (/* binding */ HelpPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _help_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-page-routing.module */ 2459);
/* harmony import */ var _help_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-page.page */ 98658);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let HelpPagePageModule = class HelpPagePageModule {
};
HelpPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _help_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpPagePageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_help_page_page__WEBPACK_IMPORTED_MODULE_1__.HelpPagePage]
    })
], HelpPagePageModule);



/***/ }),

/***/ 98658:
/*!************************************************************!*\
  !*** ./src/app/layouts/Config/help-page/help-page.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPagePage": () => (/* binding */ HelpPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_help_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./help-page.page.html */ 53188);
/* harmony import */ var _help_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help-page.page.scss */ 1793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let HelpPagePage = class HelpPagePage {
    constructor() { }
    ngOnInit() {
    }
};
HelpPagePage.ctorParameters = () => [];
HelpPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-help-page',
        template: _raw_loader_help_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_help_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HelpPagePage);



/***/ }),

/***/ 1793:
/*!**************************************************************!*\
  !*** ./src/app/layouts/Config/help-page/help-page.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".help-page {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 10px 20px;\n  font-size: 10px;\n}\n\nh1 {\n  color: green;\n}\n\n.button-contact {\n  background-color: green;\n  padding: 10px 15px;\n  border-radius: 5px;\n  color: white;\n  font-size: 15px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0MsWUFBQTtBQUVEOztBQUFBO0VBQ0MsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdEIiwiZmlsZSI6ImhlbHAtcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVscC1wYWdle1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuaDF7XG4gY29sb3I6IGdyZWVuO1xufVxuLmJ1dHRvbi1jb250YWN0e1xuIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuIHBhZGRpbmc6IDEwcHggMTVweDtcbiBib3JkZXItcmFkaXVzOiA1cHg7XG4gY29sb3I6IHdoaXRlO1xuIGZvbnQtc2l6ZTogMTVweDtcbiBmb250LXdlaWdodDogYm9sZDtcblxuIH1cbiJdfQ== */");

/***/ }),

/***/ 53188:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/Config/help-page/help-page.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Aide\" [isParam]=\"true\"></app-header>\n\n\n<ion-content>\n  <div class=\"help-page\">\n    <h1> Pages d’aide : </h1>\n\n   •\tCréation d’un compte et d’un nom d’utilisateur:\n   <br />\n   <br />\n   -\tComment créer un compte Smuppy ?<br />\n   <br />\n   Application Smuppy pour Android et iPhone :\n   Téléchargez l’application Smuppy depuis l’App Store (iPhone) ou le Google Play Store (Android) via les liens ci-dessous :\n   Play Store : lien\n   App Store : lien\n   Une fois l’application installée, appuyez sur l’icône Smuppy pour l’ouvrir.\n   Appuyez sur S’inscrire avec un e-mail (Android) ou Créer un compte (iPhone), puis saisissez votre adresse e-mail (code de confirmation requis) et appuyez sur Suivant.\n   Si vous décidez de vous inscrire avec votre adresse e-mail, créez un nom d’utilisateur et un mot de passe, renseignez vos informations de profil, puis appuyez sur Suivant.\n\n   N.B : Si vous vous inscrivez avec votre adresse e-mail, veillez à la saisir correctement et à choisir une adresse e-mail à laquelle vous seul(e) avez accès. Si vous vous déconnectez et oubliez votre mot de passe, vous devrez être en mesure d’accéder à votre adresse e-mail pour récupérer l’accès à votre compte Smuppy.\n   <br />\n   <br />\n   •\tComment mettre à jour les informations de mon profil Smuppy ?<br />  <br />\n   Vous devrez être connecter à votre compte pour pouvoir mettre à jour les informations de votre profil.\n   Pour mettre à jour les informations de votre profil, notamment votre nom d’utilisateur et l’adresse e-mail associée à votre compte :\n   -\tAccédez à votre profil. <br />\n   -\tAppuyez sur Modifier le profil. <br />\n   -\tEntrez vos informations, puis appuyez sur l’icône Envoyer  <br />\n   N’oubliez pas que si votre compte est consulté par un grand nombre de personnes, votre changement de nom d’utilisateur devra éventuellement être examiné. Dans ce cas, vous serez informé(e) dès que nous aurons terminé l’examen. Dans le cas contraire, votre nom d’utilisateur sera immédiatement modifié s’il est disponible. Vos abonnés peuvent être informés de votre changement de nom d’utilisateur\n   Certaines informations de profil ne sont visibles que par vous-même. C’est notamment le cas de l’adresse e-mail, du numéro de téléphone et du sexe.\n   <br /> <br />\n      •\tDécouvrez ce que vous pouvez faire si vous avez oublié votre mot de passe :<br /> <br />\n   Que faire si j’ai oublié mon mot de passe Smuppy ?<br />\n   Si vous avez oublié votre mot de passe, vous pouvez le réinitialiser à l’aide de votre adresse e-mail, de votre numéro de téléphone. Si ce n’est pas possible, ouvrez l’application Smuppy pour obtenir de l’aide.\n\n   Réinitialiser votre mot de passe à l’aide de votre adresse e-mail, de votre numéro de téléphone.  <br />\n\n   Pour réinitialiser votre mot de passe, commencez par ouvrir l’application Smuppy. Ensuite : <br />\n\n   -\tSur l’écran de connexion, au-dessus de Se connecter, appuyez sur Mot de passe oublié. <br />\n   -\tAppuyez sur Nom d’utilisateur ou Téléphone.<br />\n   -\tSaisissez votre adresse e-mail, votre nom d’utilisateur ou votre numéro de téléphone, puis appuyez sur Suivant.\n   <br /> <br />\n\n   •\tQue faire si un nom d’utilisateur Smuppy est déjà pris, mais semble inactif ?<br />\n   Si le nom d’utilisateur que vous souhaitez utiliser est associé à un compte apparemment inactif, vous pouvez choisir une version disponible du nom d’utilisateur. Vous pouvez ajouter des points, des chiffres, des tirets bas ou des abréviations afin de créer un nom d’utilisateur qui n’a pas encore été pris.\n\n   Pour changer de nom d’utilisateur, modifiez votre profil.  <br />  <br />\n\n   •\tQuelle est la politique de Smuppy pour les noms d’utilisateur inactifs ?<br />\n   Nous encourageons les personnes à se connecter et à utiliser Smuppy après avoir créé un compte. Pour que votre compte reste actif, assurez-vous de vous connecter et de partager des photos, mais également d’aimer des photos et de les commenter.\n   <br />  <br />\n   •\tComment désactiver mon compte Smuppy ?<br />\n   Lorsque vous désactivez votre compte, votre profil, vos photos, vos commentaires et vos mentions J’aime sont masqués.\n   <br />\n   Pour désactiver votre compte :<br />\n   -\tConnectez-vous à Smuppy Cliquez sur Modifier le profil.<br />\n   -\tFaites défiler l’écran vers le bas et cliquez sur Désactiver mon compte.<br />\n   -\tChoisissez une option dans le menu déroulant à côté de Pourquoi désactivez-vous votre compte ? <br /> puis saisissez à nouveau votre mot de passe. L’option permettant de désactiver votre compte apparaîtra uniquement lorsque vous aurez sélectionné le motif de la désactivation dans le menu déroulant et saisi à nouveau votre mot de passe.\n   Vous devez être en mesure de vous connecter à votre compte pour pouvoir le désactiver temporairement. Si vous avez oublié votre nom d’utilisateur ou votre mot de passe, consultez nos conseils pour vous connecter.\n   <br /> <br />\n   Si vous ne souhaitez pas désactiver votre compte, mais voulez changer les personnes qui peuvent le voir, vous pouvez définir vos publications comme privées ou bloquer des personnes.\n   <br /><br />\n\n   <button class=\"button-contact\" routerLink=\"/contact\"> Contact </button>\n   </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_Config_help-page_help-page_module_ts.js.map