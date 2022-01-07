(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_coachprofile_saved-posts_saved-posts_module_ts-src_app_shared_Service_notific-6e609a"],{

/***/ 40535:
/*!********************************************************************************!*\
  !*** ./src/app/layouts/coachprofile/saved-posts/saved-posts-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedPOSTSPageRoutingModule": () => (/* binding */ SavedPOSTSPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _saved_posts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved-posts.page */ 91532);




const routes = [
    {
        path: '',
        component: _saved_posts_page__WEBPACK_IMPORTED_MODULE_0__.SavedPOSTSPage
    }
];
let SavedPOSTSPageRoutingModule = class SavedPOSTSPageRoutingModule {
};
SavedPOSTSPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SavedPOSTSPageRoutingModule);



/***/ }),

/***/ 79225:
/*!************************************************************************!*\
  !*** ./src/app/layouts/coachprofile/saved-posts/saved-posts.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedPOSTSPageModule": () => (/* binding */ SavedPOSTSPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _saved_posts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saved-posts-routing.module */ 40535);
/* harmony import */ var _saved_posts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved-posts.page */ 91532);
/* harmony import */ var _home_status_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/status/status.component */ 64184);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/component.module */ 55051);









let SavedPOSTSPageModule = class SavedPOSTSPageModule {
};
SavedPOSTSPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _saved_posts_routing_module__WEBPACK_IMPORTED_MODULE_0__.SavedPOSTSPageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule
        ],
        declarations: [_saved_posts_page__WEBPACK_IMPORTED_MODULE_1__.SavedPOSTSPage, _home_status_status_component__WEBPACK_IMPORTED_MODULE_2__.StatusComponent]
    })
], SavedPOSTSPageModule);



/***/ }),

/***/ 91532:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/coachprofile/saved-posts/saved-posts.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SavedPOSTSPage": () => (/* binding */ SavedPOSTSPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_saved_posts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./saved-posts.page.html */ 39165);
/* harmony import */ var _saved_posts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saved-posts.page.scss */ 17731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Service/favoris.service */ 38007);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Service/event.service */ 34489);
/* harmony import */ var src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/Service/post.service */ 91820);








let SavedPOSTSPage = class SavedPOSTSPage {
    constructor(savepostsService, userService, eventService, postService) {
        this.savepostsService = savepostsService;
        this.userService = userService;
        this.eventService = eventService;
        this.postService = postService;
        this.page = 1;
        this.posts$ = [];
        this.indexPub = null;
    }
    ngOnInit() {
        this.getSavedPosts(event);
    }
    getSavedPosts(event) {
        this.userService.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.userId = yield res.data.data._id;
            this.user = yield res.data.data;
            this.savepostsService.getSavedPosts(this.page, this.userId).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                this.posts = yield res.data.data;
                yield this.posts.map(post => {
                    this.posts$.push(post.post);
                });
            }));
        }));
    }
    loadMore(event) {
        this.page++;
        this.getSavedPosts(event);
    }
    logScrolling(event) {
        if (event.detail.deltaY < 0) {
            this.isScrollTop = false;
        }
        else {
            this.isScrollTop = true;
            ;
        }
        this.eventService.sendMessage(this.isScrollTop);
    }
    // Function to call like API
    like(event) {
        this.indexPub = event.index;
        this.postService.likePost(event.post).subscribe(res => {
        });
    }
    // Function to call deslike API
    disLike(event) {
        this.indexPub = event.index;
        this.postService.disLikePost(event.post).subscribe(res => {
        });
    }
};
SavedPOSTSPage.ctorParameters = () => [
    { type: src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_2__.FavorisService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_4__.EventService },
    { type: src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_5__.PostService }
];
SavedPOSTSPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-saved-posts',
        template: _raw_loader_saved_posts_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_saved_posts_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SavedPOSTSPage);



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

/***/ 17731:
/*!************************************************************************!*\
  !*** ./src/app/layouts/coachprofile/saved-posts/saved-posts.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: grey;\n  padding: 20px;\n  width: 100%;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmVkLXBvc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoic2F2ZWQtcG9zdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH0iXX0= */");

/***/ }),

/***/ 39165:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/coachprofile/saved-posts/saved-posts.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [isSaved]=\"true\"></app-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n<div>\n  <span>Toutes les publications </span>\n  <span>enregistrées</span>\n</div>\n  <ion-row  *ngFor=\"let post of posts$; let index = index\">\n    <app-status [post]=\"post\" [index]=\"index\" [user]=\"user\" [isBookMarked]=true (disLikeFn)=\"disLike($event)\" (likeFn)=\"like($event)\">\n    </app-status>\n  </ion-row>\n  <ion-infinite-scroll threshold=\"5%\" (ionInfinite)=\"loadMore($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_coachprofile_saved-posts_saved-posts_module_ts-src_app_shared_Service_notific-6e609a.js.map