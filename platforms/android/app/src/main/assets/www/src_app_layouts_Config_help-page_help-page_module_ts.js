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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Aide\" [isParam]=\"true\"></app-header>\n\n\n<ion-content>\n  <div class=\"help-page\">\n    <h1> Pages d???aide : </h1>\n\n   ???\tCr??ation d???un compte et d???un nom d???utilisateur:\n   <br />\n   <br />\n   -\tComment cr??er un compte Smuppy ?<br />\n   <br />\n   Application Smuppy pour Android et iPhone :\n   T??l??chargez l???application Smuppy depuis l???App Store (iPhone) ou le Google Play Store (Android) via les liens ci-dessous :\n   Play Store : lien\n   App Store : lien\n   Une fois l???application install??e, appuyez sur l???ic??ne Smuppy pour l???ouvrir.\n   Appuyez sur S???inscrire avec un e-mail (Android) ou Cr??er un compte (iPhone), puis saisissez votre adresse e-mail (code de confirmation requis) et appuyez sur Suivant.\n   Si vous d??cidez de vous inscrire avec votre adresse e-mail, cr??ez un nom d???utilisateur et un mot de passe, renseignez vos informations de profil, puis appuyez sur Suivant.\n\n   N.B : Si vous vous inscrivez avec votre adresse e-mail, veillez ?? la saisir correctement et ?? choisir une adresse e-mail ?? laquelle vous seul(e) avez acc??s. Si vous vous d??connectez et oubliez votre mot de passe, vous devrez ??tre en mesure d???acc??der ?? votre adresse e-mail pour r??cup??rer l???acc??s ?? votre compte Smuppy.\n   <br />\n   <br />\n   ???\tComment mettre ?? jour les informations de mon profil Smuppy ?<br />  <br />\n   Vous devrez ??tre connecter ?? votre compte pour pouvoir mettre ?? jour les informations de votre profil.\n   Pour mettre ?? jour les informations de votre profil, notamment votre nom d???utilisateur et l???adresse e-mail associ??e ?? votre compte :\n   -\tAcc??dez ?? votre profil. <br />\n   -\tAppuyez sur Modifier le profil. <br />\n   -\tEntrez vos informations, puis appuyez sur l???ic??ne Envoyer  <br />\n   N???oubliez pas que si votre compte est consult?? par un grand nombre de personnes, votre changement de nom d???utilisateur devra ??ventuellement ??tre examin??. Dans ce cas, vous serez inform??(e) d??s que nous aurons termin?? l???examen. Dans le cas contraire, votre nom d???utilisateur sera imm??diatement modifi?? s???il est disponible. Vos abonn??s peuvent ??tre inform??s de votre changement de nom d???utilisateur\n   Certaines informations de profil ne sont visibles que par vous-m??me. C???est notamment le cas de l???adresse e-mail, du num??ro de t??l??phone et du sexe.\n   <br /> <br />\n      ???\tD??couvrez ce que vous pouvez faire si vous avez oubli?? votre mot de passe :<br /> <br />\n   Que faire si j???ai oubli?? mon mot de passe Smuppy ?<br />\n   Si vous avez oubli?? votre mot de passe, vous pouvez le r??initialiser ?? l???aide de votre adresse e-mail, de votre num??ro de t??l??phone. Si ce n???est pas possible, ouvrez l???application Smuppy pour obtenir de l???aide.\n\n   R??initialiser votre mot de passe ?? l???aide de votre adresse e-mail, de votre num??ro de t??l??phone.  <br />\n\n   Pour r??initialiser votre mot de passe, commencez par ouvrir l???application Smuppy. Ensuite : <br />\n\n   -\tSur l?????cran de connexion, au-dessus de Se connecter, appuyez sur Mot de passe oubli??. <br />\n   -\tAppuyez sur Nom d???utilisateur ou T??l??phone.<br />\n   -\tSaisissez votre adresse e-mail, votre nom d???utilisateur ou votre num??ro de t??l??phone, puis appuyez sur Suivant.\n   <br /> <br />\n\n   ???\tQue faire si un nom d???utilisateur Smuppy est d??j?? pris, mais semble inactif ?<br />\n   Si le nom d???utilisateur que vous souhaitez utiliser est associ?? ?? un compte apparemment inactif, vous pouvez choisir une version disponible du nom d???utilisateur. Vous pouvez ajouter des points, des chiffres, des tirets bas ou des abr??viations afin de cr??er un nom d???utilisateur qui n???a pas encore ??t?? pris.\n\n   Pour changer de nom d???utilisateur, modifiez votre profil.  <br />  <br />\n\n   ???\tQuelle est la politique de Smuppy pour les noms d???utilisateur inactifs ?<br />\n   Nous encourageons les personnes ?? se connecter et ?? utiliser Smuppy apr??s avoir cr???? un compte. Pour que votre compte reste actif, assurez-vous de vous connecter et de partager des photos, mais ??galement d???aimer des photos et de les commenter.\n   <br />  <br />\n   ???\tComment d??sactiver mon compte Smuppy ?<br />\n   Lorsque vous d??sactivez votre compte, votre profil, vos photos, vos commentaires et vos mentions J???aime sont masqu??s.\n   <br />\n   Pour d??sactiver votre compte :<br />\n   -\tConnectez-vous ?? Smuppy Cliquez sur Modifier le profil.<br />\n   -\tFaites d??filer l?????cran vers le bas et cliquez sur D??sactiver mon compte.<br />\n   -\tChoisissez une option dans le menu d??roulant ?? c??t?? de Pourquoi d??sactivez-vous votre compte ? <br /> puis saisissez ?? nouveau votre mot de passe. L???option permettant de d??sactiver votre compte appara??tra uniquement lorsque vous aurez s??lectionn?? le motif de la d??sactivation dans le menu d??roulant et saisi ?? nouveau votre mot de passe.\n   Vous devez ??tre en mesure de vous connecter ?? votre compte pour pouvoir le d??sactiver temporairement. Si vous avez oubli?? votre nom d???utilisateur ou votre mot de passe, consultez nos conseils pour vous connecter.\n   <br /> <br />\n   Si vous ne souhaitez pas d??sactiver votre compte, mais voulez changer les personnes qui peuvent le voir, vous pouvez d??finir vos publications comme priv??es ou bloquer des personnes.\n   <br /><br />\n\n   <button class=\"button-contact\" routerLink=\"/contact\"> Contact </button>\n   </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_Config_help-page_help-page_module_ts.js.map