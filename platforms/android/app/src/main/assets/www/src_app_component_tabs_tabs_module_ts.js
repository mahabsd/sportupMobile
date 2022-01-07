(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_component_tabs_tabs_module_ts"],{

/***/ 63672:
/*!************************************************************!*\
  !*** ./src/app/Shared/Resolvers/ProfileResolverService.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileResolverService": () => (/* binding */ ProfileResolverService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var _Service_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Service/user.service */ 88838);




let ProfileResolverService = class ProfileResolverService {
    constructor(userService) {
        this.userService = userService;
    }
    resolve(route, state) {
        let Users = [];
        // this.UserService.getAllUsers().subscribe(async res => {
        //   Users = await res;
        //   console.log(res);
        // });
        const observable = rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable.create(observer => {
            observer.next(Users);
            observer.complete();
        });
        return this.userService.getMe();
    }
};
ProfileResolverService.ctorParameters = () => [
    { type: _Service_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService }
];
ProfileResolverService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ProfileResolverService);



/***/ }),

/***/ 88934:
/*!*******************************************************!*\
  !*** ./src/app/component/tabs/tabs-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 54428);
/* harmony import */ var _Shared_Resolvers_ProfileResolverService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Resolvers/ProfileResolverService */ 63672);
/* harmony import */ var src_app_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Guard/adults-not-allowed.guard */ 41864);
/* harmony import */ var src_app_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Guard/roles-guard.guard */ 8320);







const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_Shared_Model_Comment_ts-src_app_Shared_Service_comment_service_ts-src_app_lay-a5d4e0"), __webpack_require__.e("default-src_app_layouts_home_status_status_component_ts"), __webpack_require__.e("default-src_app_layouts_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../layouts/home/home.module */ 63848)).then(m => m.HomePageModule),
                        canActivate: [src_app_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_3__.RolesGuardGuard],
                        resolve: {
                            data: _Shared_Resolvers_ProfileResolverService__WEBPACK_IMPORTED_MODULE_1__.ProfileResolverService
                        }
                    },
                ]
            },
            {
                path: 'accueil',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_Shared_Model_Comment_ts-src_app_Shared_Service_comment_service_ts-src_app_lay-a5d4e0"), __webpack_require__.e("default-src_app_layouts_kids_accueil_accueil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../layouts/kids/accueil/accueil.module */ 86451)).then(m => m.AccueilPageModule),
                canActivate: [src_app_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_2__.AdultsNotAllowedGuard]
            },
            {
                path: 'commentskids',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_kids_comments-kids_comments-kids_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../layouts/kids/comments-kids/comments-kids.module */ 15968)).then(m => m.CommentsKidsPageModule),
                canActivate: [src_app_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_2__.AdultsNotAllowedGuard]
            },
            {
                path: 'layouts',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./../../layouts/layouts.module */ 52372)).then(m => m.LayoutsModule)
            },
            {
                path: 'profil/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_layouts_profil_profil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../layouts/profil/profil.module */ 31646)).then(m => m.ProfilPageModule),
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_layouts_profil_profil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./../../layouts/profil/profil.module */ 31646)).then(m => m.ProfilPageModule)
            },
            {
                path: 'home-erp',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_erp_home-erp_home-erp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../layouts/erp/home-erp/home-erp.module */ 34665)).then(m => m.HomeErpPageModule)
            },
            {
                path: 'profilkids/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_Shared_Model_Comment_ts-src_app_Shared_Service_comment_service_ts-src_app_lay-a5d4e0"), __webpack_require__.e("default-src_app_layouts_home_status_status_component_ts"), __webpack_require__.e("default-src_app_layouts_kids_profil_profil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../layouts/kids/profil/profil.module */ 56534)).then(m => m.ProfilPageModule),
                canActivate: [src_app_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_2__.AdultsNotAllowedGuard]
            },
            {
                path: 'hobbies',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_hobbies_hobbies_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../layouts/hobbies/hobbies.module */ 58370)).then(m => m.HobbiesPageModule)
            },
            {
                path: 'community',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_community_show-page_show-page_module_ts"), __webpack_require__.e("default-src_app_layouts_community_add_add_module_ts"), __webpack_require__.e("default-src_app_layouts_community_show-event_show-event_module_ts"), __webpack_require__.e("default-src_app_layouts_community_community_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../layouts/community/community.module */ 30309)).then(m => m.CommunityPageModule),
                canActivate: [src_app_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_3__.RolesGuardGuard]
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 68139:
/*!***********************************************!*\
  !*** ./src/app/component/tabs/tabs.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 88934);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 54428);
/* harmony import */ var _component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component.module */ 55051);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            _component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 54428:
/*!*********************************************!*\
  !*** ./src/app/component/tabs/tabs.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 90548);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 96712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_layouts_home_modal_sheare_modal_sheare_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layouts/home/modal-sheare/modal-sheare.page */ 74689);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var src_app_Shared_Service_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Service/image.service */ 97030);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Service/event.service */ 34489);
/* harmony import */ var src_app_shared_Service_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/Service/chat.service */ 11195);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-socket-io */ 75421);
/* harmony import */ var src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/Service/notifications.service */ 43367);













let TabsPage = class TabsPage {
    constructor(imageService, modalController, router, userservice, eventService, chatService, socket, notificationsService) {
        this.imageService = imageService;
        this.modalController = modalController;
        this.router = router;
        this.userservice = userservice;
        this.eventService = eventService;
        this.chatService = chatService;
        this.socket = socket;
        this.notificationsService = notificationsService;
        this.user$ = [];
        this.menuOpened = false;
        this.urlpage = this.router.url.split('/', 6);
        this.notseenMessagesNumber = 0;
        this.notifLength = 0;
    }
    ngOnInit() {
        this.getMe();
        this.subscription = this.eventService.getMessage().subscribe((message) => {
            this.menuOpened = message.event;
        });
        this.socket.connect();
        this.socket.emit('notifications', { msg: 'hey' });
        this.socket.fromEvent('notifications').subscribe((res) => {
            this.getMe();
        });
    }
    getMe() {
        this.userservice.getMe().subscribe((res) => {
            this.user$ = res.data.data;
            this.userid = res.data.data._id;
            this.getNumberNonreadChats();
            this.getNotifications();
        });
    }
    openMenu() {
        this.menuOpened = true;
    }
    openShareModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_layouts_home_modal_sheare_modal_sheare_page__WEBPACK_IMPORTED_MODULE_2__.ModalShearePage,
                componentProps: {
                    user: this.user$,
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
    getNotifications() {
        this.notificationsService.getAllNotifications(this.userid).subscribe(res => {
            this.notifications = res.filter(notif => notif.seen === false);
            this.notifLength = this.notifications.length;
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: src_app_Shared_Service_image_service__WEBPACK_IMPORTED_MODULE_4__.ImageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_5__.EventService },
    { type: src_app_shared_Service_chat_service__WEBPACK_IMPORTED_MODULE_6__.ChatService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_11__.Socket },
    { type: src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_7__.NotificationsService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 43367:
/*!*********************************************************!*\
  !*** ./src/app/shared/Service/notifications.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 1128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);




let NotificationsService = class NotificationsService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getAllNotifications(id) {
        return this.apiService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiNotif}${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    postNotification(notif) {
        return this.apiService.patch(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiNotif}`, notif).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    updateNotification(notifs) {
        return this.apiService.post(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiNotif}`, notifs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    checkNotification(reciever, userOwner) {
        return this.apiService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiNotif}${reciever}/${userOwner}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data));
    }
    deleteNotif(id) {
        return this.apiService.delete(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiNotif}${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
};
NotificationsService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
NotificationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NotificationsService);



/***/ }),

/***/ 96712:
/*!***********************************************!*\
  !*** ./src/app/component/tabs/tabs.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-tab-bar {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n  border-radius: 15px;\n  position: absolute;\n  bottom: 0px;\n  width: 75%;\n  height: 6%;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  color: #c2bfbf;\n  background-color: #EEE;\n  box-shadow: -1px 1px 2px 1px #b0acac;\n  border: none;\n}\n\nion-tabs {\n  --background: transparent !important;\n}\n\nion-tab-button {\n  background-color: transparent;\n}\n\nion-tab-bar {\n  transition: all 1s;\n}\n\n.showTabs {\n  position: absolute;\n  transition: all 1s;\n  transform: translateY(0px);\n}\n\n.hideTabs {\n  position: absolute;\n  transition: all 1s;\n  transform: translateY(100px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUhGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBSkYiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogNiU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2MyYmZiZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgYm94LXNoYWRvdzogLTFweCAxcHggMnB4IDFweCAjYjBhY2FjO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlvbi10YWJzIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG59XG5cblxuXG5cbmlvbi10YWItYmFyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xufVxuXG4uc2hvd1RhYnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG5cbn1cblxuLmhpZGVUYWJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDBweCk7XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ 90548:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/tabs/tabs.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs  >\n  <!-- Tab bar -->\n  <ion-tab-bar slot=\"bottom\" translucent=\"true\" [ngClass]=\"menuOpened? 'hideTabs' : 'showTabs'\">\n    <ion-tab-button title=\"accueil\">\n      <img [routerLink]=\"['/tabs/home']\"  style=\"width: 20px;height:20px\" src=\"../../assets/svg/home.svg\" />\n    </ion-tab-button>\n    <ion-tab-button tab=\"map\">\n      <ion-badge id=\"notifications-badge\" color=\"danger\" *ngIf=\"notseenMessagesNumber > 0\">{{notseenMessagesNumber}}</ion-badge>\n      <img [routerLink]=\"['/tabs/layouts/boitereception']\"  style=\"width: 20px;height:20px\" src=\"../../assets/svg/messages.svg\" />\n    </ion-tab-button>\n    <ion-tab-button>\n      <img style=\"width: 20px;height:20px\" src=\"../../assets/svg/add-home.svg\" (click)=\"openShareModal()\" />\n    </ion-tab-button>\n    <ion-tab-button>\n      <ion-badge id=\"notifications-badge\" *ngIf=\"notifLength>0\" color=\"danger\">{{notifLength}}</ion-badge>\n      <img style=\"width: 20px;height:20px\" [routerLink]=\"['/tabs/layouts/notifications']\" src=\"../../assets/svg/notif-icon.svg\" />\n    </ion-tab-button>\n    <ion-tab-button routerLink=\"/tabs/layouts/coachprofile/{{userid}}/me\">\n      <img style=\"width: 20px;height:20px\" src=\"../../assets/svg/person-icon.svg\" />\n    </ion-tab-button>\n  </ion-tab-bar>\n  <app-footer></app-footer>\n</ion-tabs>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_component_tabs_tabs_module_ts.js.map