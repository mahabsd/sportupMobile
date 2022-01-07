(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_notifications_notifications_module_ts"],{

/***/ 49821:
/*!***************************************************!*\
  !*** ./src/app/Shared/Service/comment.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentService": () => (/* binding */ CommentService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 95920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);




let CommentService = class CommentService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    addComment(comment, post) {
        return this.apiService.post(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost}${post}/comments`, comment).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    getCommentByService(post) {
        return this.apiService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost}${post}/comments`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    updateComments(comment) {
        return this.apiService.patch(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiComment}${comment.id}`, comment);
    }
    deleteComment(id) {
        return this.apiService.delete(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiComment}` + id);
    }
    recordAudio(post, data) {
        return this.apiService.post(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost}${post}/comments/audioComment`, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
};
CommentService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
CommentService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CommentService);



/***/ }),

/***/ 95196:
/*!******************************************************************************!*\
  !*** ./src/app/layouts/notifications/notification/notification.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notification.component.html */ 40179);
/* harmony import */ var _notification_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component.scss */ 78523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 35758);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Shared/Service/comment.service */ 49821);
/* harmony import */ var _shared_Service_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/Service/post.service */ 28451);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/Service/follower.service */ 93647);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_Model_Follow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/Model/Follow */ 46921);
/* harmony import */ var src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/Service/notifications.service */ 43367);














let NotificationComponent = class NotificationComponent {
    constructor(postService, commentService, followerService, userService, router, notificationsService) {
        this.postService = postService;
        this.commentService = commentService;
        this.followerService = followerService;
        this.userService = userService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.comments = [];
        this.images = [];
        this.mediafiles = [];
        this.user = [];
        this.apiImgUser = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiImg}User/`;
        this.apiImg = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiImg}Post/`;
        this.myInformation = { userLastName: '', userFirstName: '' };
        this.follow = new src_app_shared_Model_Follow__WEBPACK_IMPORTED_MODULE_8__.Follow();
        this.notification = { reciever: '', userOwner: '', text: '' };
    }
    ngOnInit() {
        this.follower = false;
        this.getMe();
    }
    getMe() {
        this.getCommentByPost();
        this.timeAgo = moment__WEBPACK_IMPORTED_MODULE_5__(this.notif.createdAt).startOf('second').fromNow();
    }
    getCommentByPost() {
        var _a, _b, _c;
        this.notif.postId ?
            (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)({ comments: this.commentService.getCommentByService((_a = this.notif.postId) === null || _a === void 0 ? void 0 : _a._id),
                images: this.postService.getPost((_b = this.notif.postId) === null || _b === void 0 ? void 0 : _b._id),
                mediafiles: this.postService.getPost((_c = this.notif.postId) === null || _c === void 0 ? void 0 : _c._id), }).subscribe(({ comments, images, mediafiles }) => {
                this.comments = comments;
                this.images = images.images;
                this.mediafiles = mediafiles.mediafiles;
            }) : null;
    }
    getExt(fileName) {
        const ext = fileName === null || fileName === void 0 ? void 0 : fileName.substr(fileName.lastIndexOf('.') + 1);
        return ext;
    }
    getUser() {
        this.userService.getMe().subscribe((response) => {
            this.myInformation.userLastName = response.data.data.name;
            this.iduser = response.data.data.id;
            this.userRole = response.data.data.role;
            if (this.userRole === 'user') {
                this.isUser = true;
            }
            else if (this.userRole === 'Kids') {
                this.isKid = true;
            }
        }, (error) => {
            console.error(error);
        });
    }
    buttonSuivre(id, userOwner, userReceiver) {
        this.follow.userFollowed = userOwner;
        this.follow.userFollowing = userReceiver;
        this.followerService.createFollow(userReceiver, this.follow).subscribe((res) => {
            console.log(res);
            this.follower = true;
            this.createNotif(userReceiver, userOwner);
            this.deleteNotif(id);
        });
    }
    deleteNotif(id) {
        this.notificationsService.deleteNotif(id).subscribe(res => console.log(res));
    }
    createNotif(reciever, userOwner) {
        this.notification.reciever = userOwner;
        this.notification.userOwner = reciever;
        this.notification.text = 'à accepté(e) votre invitation';
        this.notificationsService.postNotification(this.notification).subscribe();
    }
};
NotificationComponent.ctorParameters = () => [
    { type: _shared_Service_post_service__WEBPACK_IMPORTED_MODULE_4__.PostService },
    { type: _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_3__.CommentService },
    { type: src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_6__.FollowerService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_9__.NotificationsService }
];
NotificationComponent.propDecorators = {
    notif: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }]
};
NotificationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-notification',
        template: _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notification_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationComponent);



/***/ }),

/***/ 31802:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/notifications/notifications-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageRoutingModule": () => (/* binding */ NotificationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 97353);




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ 93875:
/*!***************************************************************!*\
  !*** ./src/app/layouts/notifications/notifications.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageModule": () => (/* binding */ NotificationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 31802);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 97353);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification/notification.component */ 95196);








let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage, _notification_notification_component__WEBPACK_IMPORTED_MODULE_2__.NotificationComponent]
    })
], NotificationsPageModule);



/***/ }),

/***/ 97353:
/*!*************************************************************!*\
  !*** ./src/app/layouts/notifications/notifications.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notifications.page.html */ 5244);
/* harmony import */ var _notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.scss */ 41583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Service/event.service */ 34489);
/* harmony import */ var src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Service/notifications.service */ 43367);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-socket-io */ 75421);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Shared/Service/comment.service */ 49821);
/* harmony import */ var _shared_Service_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/Service/post.service */ 28451);












let NotificationsPage = class NotificationsPage {
    constructor(eventService, postService, commentService, router, notificationsService, userservice, socket) {
        this.eventService = eventService;
        this.postService = postService;
        this.commentService = commentService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.userservice = userservice;
        this.socket = socket;
        this.apiImgUser = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiImg}User/`;
        this.notifications = [];
        this.comments = [];
        this.images = [];
        this.mediafiles = [];
    }
    ngOnInit() {
        this.getMe();
        this.notif = this.router.url.slice(19);
        this.socket.connect();
        this.socket.emit('message', { msg: 'hey' });
        this.socket.fromEvent('message').subscribe((res) => {
            this.getMe();
        });
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
    getMe() {
        this.userservice.getMe().subscribe((res) => {
            this.user$ = res.data.data;
            this.userid = res.data.data._id;
            this.getNotifications();
        });
    }
    getNotifications() {
        this.notificationsService.getAllNotifications(this.userid).subscribe(res => {
            this.notifications = res;
            this.notifLength = this.notifications.length;
        });
    }
};
NotificationsPage.ctorParameters = () => [
    { type: src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService },
    { type: _shared_Service_post_service__WEBPACK_IMPORTED_MODULE_7__.PostService },
    { type: _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_6__.CommentService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__.Socket }
];
NotificationsPage.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-notifications',
        template: _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationsPage);



/***/ }),

/***/ 28451:
/*!************************************************!*\
  !*** ./src/app/shared/Service/post.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostService": () => (/* binding */ PostService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 1128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 9231);





let PostService = class PostService {
    constructor(utilsService, storage) {
        this.utilsService = utilsService;
        this.storage = storage;
    }
    createPost(post) {
        return this.utilsService
            .post(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost, post)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res));
    }
    deletePost(post) {
        return this.utilsService
            .delete(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost + post._id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res));
    }
    likePost(post) {
        console.log(post);
        return this.utilsService
            .patch(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost + 'likePost', post)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res));
    }
    disLikePost(post) {
        return this.utilsService
            .patch(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost + 'dislikePost', post)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res));
    }
    getAllPosts(page) {
        return this.utilsService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost}?page=${page}&limit=5`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => { return res.data; }));
    }
    getAllPostsById(page, id) {
        // console.log(page);
        // return this.utilsService.get(`${UtilsService.apiPost}/?page=${page}&limit=5`).pipe(map(res => res.data));
        console.log(id);
        return this.utilsService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost}?user=${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => { return res; }));
    }
    getPost(id) {
        return this.utilsService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost}${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => { return res.data.data; }));
    }
    getAllPostsKids() {
        console.log(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost}?type=kids`);
        // return this.utilsService.get(`${UtilsService.apiPost}/?page=${page}&limit=5`).pipe(map(res => res.data));
        return this.utilsService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost}?type=kids`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res.data));
    }
    uploadImageFile(formData) {
        return this.utilsService.post(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost}` + 'multiple', formData);
    }
    postsOwner(id) {
        this.postsOwnerId = id;
    }
    getAllfollowingPosts(page, iduser) {
        return this.utilsService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost}following/${iduser}?page=${page}&limit=5`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res));
    }
    getAllPostsByPage(id) {
        console.log(id);
        return this.utilsService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost}?pageId=${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => { return res; }));
    }
};
PostService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService }
];
PostService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], PostService);



/***/ }),

/***/ 78523:
/*!********************************************************************************!*\
  !*** ./src/app/layouts/notifications/notification/notification.component.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 41583:
/*!***************************************************************!*\
  !*** ./src/app/layouts/notifications/notifications.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 40179:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/notifications/notification/notification.component.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p style=\"display: flex;\">\n  <img src={{apiImgUser+notif.userOwner.photo}} style=\"width: 45px;height:45px;object-fit: cover; margin: 2px 7px 0 10px;border-radius:50%\" alt=\"\" />\n    <p style=\"\n        width: 60%;\n        height: 40px;\n        margin-right: 10px;\n        font-size: smaller;\n        display: flex;\n        align-items: flex-start;\n        justify-content:center;\n        flex-direction:column;\n      \">\n      <ng-container *ngIf=\"notif.text.includes('anniversaire');else other\" >\n        <ng-container style=\"display: flex;flex-direction:column\" *ngIf=\"notif.userOwner.id===notif.reciever.id;else notYou\" >\n          <span><b style=\"text-transform: capitalize;\">{{notif.userOwner.name}}&nbsp;</b> c'est votre anniversaire </span>\n          <span style=\"opacity: 50%;font-size:12px\">{{timeAgo}}</span>\n        </ng-container>\n        <ng-template style=\"display: flex;flex-direction:column\" #notYou>\n          <span><b style=\"text-transform: capitalize;\">{{notif.userOwner.name}}&nbsp;</b> fête son anniversaire</span>\n          <span style=\"opacity: 50%;font-size:12px\">{{timeAgo}}</span>\n        </ng-template>\n      </ng-container>\n      <ng-template #other>\n        <ng-container *ngIf=\"notif.text==='a partagé votre status' || notif.text==='a aimé votre status' || notif.text==='a commenté votre status' || notif.text==='a enregistré votre status';else notStatus\" >\n          <div routerLink=\"/one-status/{{  notif.postId?.id  }}\" style=\"display: flex;flex-direction:column\">\n            <span><b style=\"text-transform: capitalize;\">{{notif.userOwner.name}}&nbsp;</b> {{notif.text}}</span>\n            <span style=\"opacity: 50%;font-size:12px\">{{timeAgo}}</span>\n          </div>\n        </ng-container>\n        <ng-template #notStatus >\n          <span *ngIf=\"!follower\" ><b style=\"text-transform: capitalize;\">{{notif.userOwner.name}}&nbsp;</b> {{notif.text}}</span>\n          <span *ngIf=\"follower\"> maintenant vous etes amis</span>\n          <span style=\"opacity: 50%;font-size:12px\">{{timeAgo}}</span>\n        </ng-template>\n      </ng-template>\n    </p>\n    <p>\n      <ng-container *ngIf=\"notif.text==='a créé un événnement'\">\n        <ion-icon style=\"width: 55px;height:55px;color: #498034\" name=\"calendar\"></ion-icon>\n      </ng-container>\n      <ng-container *ngIf=\"getExt(mediafiles[0]?.file_name) === 'png'\">\n        <img style=\"width: 55px;height:55px;object-fit:cover\" src={{apiImg+mediafiles[0]?.file_name}} alt=\"\">\n      </ng-container>\n      <ng-container *ngIf=\"notif.text==='vous a envoyé une invitation'\">\n        <button style=\"background: linear-gradient(45deg, #4B5149 0%, #286029 35%, #8AB211 100%);padding:5px;color:white;border-radius:5px\" (click)=\"buttonSuivre(notif._id, notif.userOwner._id, notif.reciever._id)\" *ngIf=\"!follower\">Confirmer</button>\n      </ng-container>\n      <ng-container *ngIf=\"notif.text.includes('anniversaire')\" >\n        <img src=\"../../../assets/svg/birthday-cake.svg\" style=\"width: 55px;height:55px;\" name=\"calendar\">\n      </ng-container>\n    </p>\n");

/***/ }),

/***/ 5244:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/notifications/notifications.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon routerLink=\"/tabs/home\" color=\"light\" name=\"chevron-back-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-title color=\"light\" style=\"text-align: center; width: 100%; margin-left: 20xp\">\n      <div style=\"display: flex; align-items: center; justify-content: center\">\n        <ion-icon color=\"light\" name=\"notifications\"></ion-icon>\n        <p style=\"margin-left: 5px\">Notifications</p>\n      </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-card *ngFor=\"let notif of notifications.slice().reverse();let i=index; \" scrollY=\"true\" style=\"\n      font-size: 15px;\n      width: 100%;\n      display: flex;\n      align-items: center;\n      margin: 4px 0;\n      box-shadow: unset;\n    \"\n   >\n    <app-notification style=\"display: flex;justify-content:space-between;align-items:center;width:90%\" [notif]=\"notif\" ></app-notification>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_notifications_notifications_module_ts.js.map