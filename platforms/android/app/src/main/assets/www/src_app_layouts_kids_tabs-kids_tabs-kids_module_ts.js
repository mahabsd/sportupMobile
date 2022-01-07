(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_kids_tabs-kids_tabs-kids_module_ts"],{

/***/ 22330:
/*!********************************************************************!*\
  !*** ./src/app/layouts/kids/tabs-kids/tabs-kids-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsKidsPageRoutingModule": () => (/* binding */ TabsKidsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/Guard/adults-not-allowed.guard */ 41864);
/* harmony import */ var _tabs_kids_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-kids.page */ 9935);





const routes = [
    {
        path: '',
        component: _tabs_kids_page__WEBPACK_IMPORTED_MODULE_1__.TabsKidsPage,
        children: [
            {
                path: 'accueil',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_Shared_Model_Comment_ts-src_app_Shared_Service_comment_service_ts-src_app_lay-a5d4e0"), __webpack_require__.e("default-src_app_layouts_home_modal-sheare_modal-sheare_page_ts"), __webpack_require__.e("default-src_app_layouts_kids_accueil_accueil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/layouts/kids/accueil/accueil.module */ 86451)).then(m => m.AccueilPageModule),
                canActivate: [src_app_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
            {
                path: 'profil/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_profil_profil_module_ts"), __webpack_require__.e("src_app_shared_Service_notifications_service_ts-_804a0")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/layouts/profil/profil.module */ 31646)).then(m => m.ProfilPageModule),
                canActivate: [src_app_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_profil_profil_module_ts"), __webpack_require__.e("src_app_shared_Service_notifications_service_ts-_804a0")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/layouts/profil/profil.module */ 31646)).then(m => m.ProfilPageModule)
            },
            {
                path: 'boitereceptionkids',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_layouts_kids_boite-reception_boite-reception_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! src/app/layouts/kids/boite-reception/boite-reception.module */ 55891)).then(m => m.BoiteReceptionPageModule),
                canActivate: [src_app_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
            {
                path: 'profilkids/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_Shared_Model_Comment_ts-src_app_Shared_Service_comment_service_ts-src_app_lay-a5d4e0"), __webpack_require__.e("default-src_app_layouts_home_status_status_component_ts"), __webpack_require__.e("default-src_app_layouts_kids_profil_profil_module_ts"), __webpack_require__.e("src_app_shared_Service_notifications_service_ts-_804a3")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/layouts/kids/profil/profil.module */ 56534)).then(m => m.ProfilPageModule),
                canActivate: [src_app_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabsKids/accueil',
        pathMatch: 'full'
    }
];
let TabsKidsPageRoutingModule = class TabsKidsPageRoutingModule {
};
TabsKidsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], TabsKidsPageRoutingModule);



/***/ }),

/***/ 32227:
/*!************************************************************!*\
  !*** ./src/app/layouts/kids/tabs-kids/tabs-kids.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsKidsPageModule": () => (/* binding */ TabsKidsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tabs_kids_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-kids-routing.module */ 22330);
/* harmony import */ var _tabs_kids_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-kids.page */ 9935);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/component.module */ 55051);








let TabsKidsPageModule = class TabsKidsPageModule {
};
TabsKidsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tabs_kids_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsKidsPageRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_tabs_kids_page__WEBPACK_IMPORTED_MODULE_1__.TabsKidsPage]
    })
], TabsKidsPageModule);



/***/ }),

/***/ 9935:
/*!**********************************************************!*\
  !*** ./src/app/layouts/kids/tabs-kids/tabs-kids.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsKidsPage": () => (/* binding */ TabsKidsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_kids_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs-kids.page.html */ 47028);
/* harmony import */ var _tabs_kids_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-kids.page.scss */ 13257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var src_app_Shared_Service_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Service/image.service */ 97030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Service/event.service */ 34489);
/* harmony import */ var src_app_layouts_kids_accueil_status_kids_add_status_kids_add_status_kids_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/layouts/kids/accueil/status-kids/add-status-kids/add-status-kids.page */ 5655);
/* harmony import */ var src_app_shared_Service_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/Service/chat.service */ 11195);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-socket-io */ 75421);












let TabsKidsPage = class TabsKidsPage {
    constructor(imageService, modalController, router, userservice, eventService, chatService, socket) {
        this.imageService = imageService;
        this.modalController = modalController;
        this.router = router;
        this.userservice = userservice;
        this.eventService = eventService;
        this.chatService = chatService;
        this.socket = socket;
        this.user$ = [];
        this.menuOpened = false;
        this.urlpage = this.router.url.split('/', 6);
    }
    ngOnInit() {
        this.getMe();
        this.subscription = this.eventService.getMessage().subscribe((message) => {
            this.menuOpened = message.event;
        });
        this.socket.connect();
        this.socket.emit('message', { msg: 'hey' });
        this.socket.fromEvent('message').subscribe((res) => {
            this.getMe();
        });
    }
    getMe() {
        this.userservice.getMe().subscribe((res) => {
            this.user$ = res.data.data;
            this.userid = res.data.data._id;
        });
    }
    openMenu() {
        this.menuOpened = true;
    }
    openModal() {
        this.openShareModal("accueil");
    }
    openShareModal(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_layouts_kids_accueil_status_kids_add_status_kids_add_status_kids_page__WEBPACK_IMPORTED_MODULE_5__.AddStatusKidsPage,
                componentProps: {
                    user: this.user$,
                    // pagetype:type
                },
            });
            yield modal.present();
            yield modal.onWillDismiss().then((result) => {
            });
        });
    }
    sendMessage(message) {
        // send message to subscribers via observable subject
        this.imageService.sendMessage(message);
    }
    add(event) {
        console.log(event);
    }
    getNumberNonreadChats() {
        this.notseenMessagesNumber = 0;
        this.chatService.getAllChatsByuser(this.userid).subscribe(res => {
            res.map(msg => {
                if (msg.messages[msg.messages.length - 1].userSender !== this.userid) {
                    if (msg.seenuser1.user1 === this.userid) {
                        if (msg.seenuser1.lastVisit < msg.messages[msg.messages.length - 1].createdDate) {
                            this.notseenMessagesNumber = this.notseenMessagesNumber + 1;
                        }
                    }
                    else if (msg.seenuser2.user2 === this.userid) {
                        if (msg.seenuser2.lastVisit < msg.messages[msg.messages.length - 1].createdDate) {
                            this.notseenMessagesNumber = this.notseenMessagesNumber + 1;
                        }
                    }
                }
            });
        });
    }
};
TabsKidsPage.ctorParameters = () => [
    { type: src_app_Shared_Service_image_service__WEBPACK_IMPORTED_MODULE_3__.ImageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_4__.EventService },
    { type: src_app_shared_Service_chat_service__WEBPACK_IMPORTED_MODULE_6__.ChatService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__.Socket }
];
TabsKidsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-tabs-kids',
        template: _raw_loader_tabs_kids_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_kids_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsKidsPage);



/***/ }),

/***/ 13257:
/*!************************************************************!*\
  !*** ./src/app/layouts/kids/tabs-kids/tabs-kids.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-tab-bar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n  border-radius: 15px;\n  position: absolute;\n  bottom: 0px;\n  width: 75%;\n  height: 6%;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  color: #c2bfbf;\n  background-color: #EEE;\n  box-shadow: -1px 1px 2px 1px #b0acac;\n  border: none;\n}\n\nion-tabs {\n  --background: transparent !important;\n}\n\nion-tab-button {\n  background-color: transparent;\n}\n\nion-tab-bar {\n  transition: all 1s;\n}\n\n.showTabs {\n  position: absolute;\n  transition: all 1s;\n  transform: translateY(0px);\n}\n\n.hideTabs {\n  position: absolute;\n  transition: all 1s;\n  transform: translateY(100px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMta2lkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usb0NBQUE7QUFDSjs7QUFFRTtFQUNFLDZCQUFBO0FBQ0o7O0FBTUU7RUFDRSxrQkFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBSEo7O0FBT0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFKSiIsImZpbGUiOiJ0YWJzLWtpZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1iYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGhlaWdodDogNiU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2MyYmZiZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgICBib3gtc2hhZG93OiAtMXB4IDFweCAycHggMXB4ICNiMGFjYWM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10YWJzIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXRhYi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIGlvbi10YWItYmFyIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICB9XHJcbiAgXHJcbiAgLnNob3dUYWJzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAuaGlkZVRhYnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcclxuICBcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ 47028:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/tabs-kids/tabs-kids.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs >\n  <!-- Tab bar -->\n  <ion-tab-bar slot=\"bottom\" translucent=\"true\" [ngClass]=\"menuOpened? 'hideTabs' : 'showTabs'\">\n    <ion-tab-button title=\"accueil\">\n      <img [routerLink]=\"['/tabsKids/accueil']\" src=\"../../assets/icon/icon_home.png\" />\n    </ion-tab-button>\n\n    <!--\n <ion-tab-button tab=\"map\" *ngIf=\"user$.role==='kids'\">\n      <ion-badge id=\"notifications-badge\" color=\"danger\">5</ion-badge>\n      <img [routerLink]=\"['/tabs/layouts/boitereception']\" src=\"../../assets/icon/icon_boite.png\" />\n    </ion-tab-button>-->\n    <ion-tab-button tab=\"map\">\n      <ion-badge id=\"notifications-badge\" color=\"danger\" *ngIf=\"notseenMessagesNumber > 0\">{{notseenMessagesNumber}}</ion-badge>\n      <img [routerLink]=\"['/tabsKids/boitereceptionkids']\" src=\"../../assets/icon/icon_boite.png\" />\n    </ion-tab-button>\n    <ion-tab-button>\n      <img src=\"../../assets/icon/icon_nvposte.png\" (click)=\"openModal()\" />\n    </ion-tab-button>\n    <ion-tab-button>\n      <ion-badge id=\"notifications-badge\" color=\"danger\">5</ion-badge>\n      <img [routerLink]=\"['/tabs/layouts/notifications']\" src=\"../../assets/icon/icon_notification.png\" />\n    </ion-tab-button>\n    <ion-tab-button routerLink=\"/tabsKids/profilkids/{{userid}}\">\n      <img src=\"../../assets/icon/icon_profile.png\" />\n\n    </ion-tab-button>\n  </ion-tab-bar>\n  <app-footer></app-footer>\n</ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_kids_tabs-kids_tabs-kids_module_ts.js.map