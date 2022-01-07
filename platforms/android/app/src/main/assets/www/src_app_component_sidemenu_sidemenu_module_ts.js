(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_component_sidemenu_sidemenu_module_ts"],{

/***/ 59617:
/*!***************************************************************!*\
  !*** ./src/app/component/sidemenu/sidemenu-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidemenuPageRoutingModule": () => (/* binding */ SidemenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sidemenu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidemenu.page */ 97200);
/* harmony import */ var _Shared_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Guard/auth.guard */ 76670);





const routes = [
    {
        path: '',
        component: _sidemenu_page__WEBPACK_IMPORTED_MODULE_0__.SidemenuPage,
        children: [
            {
                path: 'tabs',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("default-src_app_layouts_home_modal-sheare_modal-sheare_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_component_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tabs/tabs.module */ 68139)).then(m => m.TabsPageModule), canActivate: [_Shared_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
            },
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("default-src_app_Shared_Model_Comment_ts-src_app_Shared_Service_comment_service_ts-src_app_lay-a5d4e0"), __webpack_require__.e("default-src_app_layouts_home_modal-sheare_modal-sheare_page_ts"), __webpack_require__.e("default-src_app_layouts_home_status_status_component_ts"), __webpack_require__.e("default-src_app_layouts_home_home_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_shared_Service_notifications_service_ts-_804a1")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../layouts/home/home.module */ 63848)).then(m => m.HomePageModule), canActivate: [_Shared_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
            },
            {
                path: 'layouts',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../layouts/layouts.module */ 52372)).then(m => m.LayoutsModule), canActivate: [_Shared_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
            },
        ]
    }, {
        path: '',
        redirectTo: 'menu/tabs/home'
    }
];
let SidemenuPageRoutingModule = class SidemenuPageRoutingModule {
};
SidemenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], SidemenuPageRoutingModule);



/***/ }),

/***/ 31277:
/*!*******************************************************!*\
  !*** ./src/app/component/sidemenu/sidemenu.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidemenuPageModule": () => (/* binding */ SidemenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sidemenu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidemenu-routing.module */ 59617);
/* harmony import */ var _sidemenu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidemenu.page */ 97200);







let SidemenuPageModule = class SidemenuPageModule {
};
SidemenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sidemenu_routing_module__WEBPACK_IMPORTED_MODULE_0__.SidemenuPageRoutingModule
        ],
        declarations: [_sidemenu_page__WEBPACK_IMPORTED_MODULE_1__.SidemenuPage]
    })
], SidemenuPageModule);



/***/ }),

/***/ 97200:
/*!*****************************************************!*\
  !*** ./src/app/component/sidemenu/sidemenu.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidemenuPage": () => (/* binding */ SidemenuPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sidemenu_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sidemenu.page.html */ 76295);
/* harmony import */ var _sidemenu_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidemenu.page.scss */ 17858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/Auth/auth.service */ 21584);






let SidemenuPage = class SidemenuPage {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.selectedPath = '';
        this.appPages = [
            {
                title: 'Accueil',
                url: '/menu/home',
                icon: 'paper-plane'
            },
            {
                title: 'Messagerie ',
                url: '/menu/boite-reception',
                icon: 'heart'
            },
            {
                title: 'Maps',
                url: '/maps',
                icon: 'archive'
            },
            {
                title: 'Calendar',
                url: '/calendar',
                icon: 'Close'
            },
            {
                icon: 'settings',
                title: 'ERP',
                url: '/erp'
            },
            {
                icon: 'person',
                title: 'Coach',
                url: '/coachprofile/coachphoto'
            },
            {
                icon: 'heart',
                title: 'Kids',
                url: '/sign-kids'
            }
        ];
        this.Parametre = [{
                icon: 'settings',
                title: 'Paramétre',
                url: '/parametre'
            }, {
                icon: 'log-out',
                title: 'déconnexion',
                url: '/login'
            }];
        this.router.events.subscribe((event) => {
            // console.log(event.url);
            if (event && event.url) {
                this.selectedPath = event.url;
            }
        });
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logout();
    }
};
SidemenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
SidemenuPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sidemenu',
        template: _raw_loader_sidemenu_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sidemenu_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SidemenuPage);



/***/ }),

/***/ 17858:
/*!*******************************************************!*\
  !*** ./src/app/component/sidemenu/sidemenu.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".active-item {\n  border-left: 8px solid #3b8c4f;\n}\n\nion-header ion-toolbar {\n  background: transparent;\n  --background: var(--ion-color-bg);\n  color: #FFF;\n}\n\nion-footer ion-toolbar,\nion-footer ion-toolbar ion-item {\n  background: transparent;\n  --background: var(--ion-color-bg);\n  color: #FFF;\n}\n\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n#menu-material .menu-header {\n  padding: 5px 15px;\n  background-image: url(\"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fsport-background&psig=AOvVaw2vciHbJGDCAHNhci9UxZH5&ust=1604479689195000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCcp-L-5ewCFQAAAAAdAAAAABAD\");\n  background-size: cover;\n  color: white;\n}\n\n#menu-material .menu-header .name {\n  font-weight: 500;\n  margin-bottom: 3px;\n}\n\n#menu-material .menu-header .e-mail {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n#menu-material .user-avatar {\n  padding: 0.5em;\n  height: 12vh;\n}\n\n#menu-material .label {\n  color: #999;\n  font-weight: 400;\n}\n\n#menu-material ion-icon {\n  color: #777;\n}\n\n.bar.bar-profile {\n  background-color: #d82121;\n  height: 170px;\n}\n\n.bar .profile {\n  overflow: hidden;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  padding-top: 15px;\n}\n\n.profile .name {\n  color: #0f0f0f;\n  margin-top: 10px !important;\n  margin-bottom: 10px !important;\n}\n\n.profile-picture {\n  border-radius: 50%;\n}\n\n.menu .has-header {\n  top: 169px;\n}\n\n.active-item {\n  border-left: 8px solid #3b8c4f;\n}\n\nion-header ion-toolbar {\n  background: transparent;\n  --background: var(--ion-color-bg);\n  color: #FFF;\n}\n\nion-footer ion-toolbar,\nion-footer ion-toolbar ion-item {\n  background: transparent;\n  --background: var(--ion-color-bg);\n  color: #FFF;\n}\n\nion-fab {\n  margin-bottom: 5rem;\n  margin-right: 0.5rem;\n}\n\nion-fab-button {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVtZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBOztFQUVFLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyRUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDJEQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNEQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGOztBQU1FO0VBQ0UsaUJBQUE7RUFDQSw2UEFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUhKOztBQUtJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUhOOztBQU1JO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBSk47O0FBUUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQU5KOztBQVNFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBUEo7O0FBVUU7RUFDRSxXQUFBO0FBUko7O0FBWUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFURjs7QUFZQTtFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBVkY7O0FBYUE7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQVZGOztBQWFBO0VBQ0Usa0JBQUE7QUFWRjs7QUFhQTtFQUNFLFVBQUE7QUFWRjs7QUFjQTtFQUNFLDhCQUFBO0FBWEY7O0FBY0E7RUFDRSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtBQVhGOztBQWNBOztFQUVFLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FBWEY7O0FBZUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FBWkY7O0FBZUE7RUFDRSx5QkFBQTtBQVpGIiwiZmlsZSI6InNpZGVtZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtaXRlbSB7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgIzNiOGM0Zjtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iZyk7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyLFxuaW9uLWZvb3RlciBpb24tdG9vbGJhciBpb24taXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iZyk7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi8vIGZvciBzdHlsZSBhdmF0YXJcbi8vIE1hdGVyaWFsIERlc2lnbiBTaWRlbWVudVxuXG4jbWVudS1tYXRlcmlhbCB7XG4gIC5tZW51LWhlYWRlciB7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3d3dy5nb29nbGUuY29tL3VybD9zYT1pJnVybD1odHRwcyUzQSUyRiUyRnd3dy5mcmVlcGlrLmNvbSUyRmZyZWUtcGhvdG9zLXZlY3RvcnMlMkZzcG9ydC1iYWNrZ3JvdW5kJnBzaWc9QU92VmF3MnZjaUhiSkdEQ0FITmhjaTlVeFpINSZ1c3Q9MTYwNDQ3OTY4OTE5NTAwMCZzb3VyY2U9aW1hZ2VzJmNkPXZmZSZ2ZWQ9MENBSVFqUnhxRndvVENNQ2NwLUwtNWV3Q0ZRQUFBQUFkQUFBQUFCQUQnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIC5uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgfVxuXG4gICAgLmUtbWFpbCB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWF2YXRhciB7XG4gICAgcGFkZGluZzogLjVlbTtcbiAgICBoZWlnaHQ6IDEydmg7XG4gIH1cblxuICAubGFiZWwge1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn1cblxuLmJhci5iYXItcHJvZmlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDMzLCAzMyk7XG4gIGhlaWdodDogMTcwcHg7XG59XG5cbi5iYXIgLnByb2ZpbGUge1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLnByb2ZpbGUgLm5hbWUge1xuICBjb2xvcjogIzBmMGYwZjtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlLXBpY3R1cmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5tZW51IC5oYXMtaGVhZGVyIHtcbiAgdG9wOiAxNjlweDtcbn1cblxuXG4uYWN0aXZlLWl0ZW0ge1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICMzYjhjNGY7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmcpO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhcixcbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmcpO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuXG5pb24tZmFiIHtcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuIl19 */");

/***/ }),

/***/ 76295:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/sidemenu/sidemenu.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-app> -->\n\n<!-- <ion-split-pane> -->\n<ion-menu contentId=\"main-content\" auto-hide=\"true\" type=\"overlay\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title\n        style=\"\n          background-image: linear-gradient(\n            119deg,\n            rgba(92, 99, 91, 1) 0%,\n            rgba(36, 114, 56, 1) 35%,\n            rgb(122, 113, 172) 100%\n          );\n        \"\n        >Menu</ion-title\n      >\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list id=\"inbox-list\">\n      <ion-menu-toggle\n        auto-hide=\"false\"\n        *ngFor=\"let p of appPages; let i = index\"\n      >\n        <ion-item\n          [class.active-item]=\"selectedPath.startsWith(p.url)\"\n          routerDirection=\"root\"\n          [routerLink]=\"[p.url]\"\n          lines=\"none\"\n        >\n          <ion-icon\n            slot=\"start\"\n            [ios]=\"p.icon + '-outline'\"\n            [md]=\"p.icon + '-sharp'\"\n          ></ion-icon>\n          <ion-label>{{ p.title }}</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-list>\n  </ion-content>\n  <ion-footer translucent=\"true\">\n    <ion-toolbar translucent=\"true\">\n      <ion-item tappable (click)=\"logout()\" routerDirection=\"root\" lines=\"none\">\n        <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n        <ion-label>Déconnexion</ion-label>\n      </ion-item>\n    </ion-toolbar>\n  </ion-footer>\n</ion-menu>\n\n<ion-router-outlet id=\"main-content\"></ion-router-outlet>\n<!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" fill=\"clear\">\n    <ion-fab-button fill=\"clear\">\n      <img src=\"../assets/icon/icon_scan.svg\" alt=\"\">\n\n    </ion-fab-button>\n  </ion-fab> -->\n<!-- </ion-split-pane> -->\n<!-- </ion-app> -->\n<!-- </ion-app> -->\n");

/***/ })

}]);
//# sourceMappingURL=src_app_component_sidemenu_sidemenu_module_ts.js.map