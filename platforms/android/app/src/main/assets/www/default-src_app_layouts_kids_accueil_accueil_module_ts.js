(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["default-src_app_layouts_kids_accueil_accueil_module_ts"],{

/***/ 537:
/*!****************************************************!*\
  !*** ./src/app/Shared/kids/Service/api.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _Service_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Service/storage.service */ 12833);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
var ApiService_1;





// import { DatePipe } from "@angular/common";



let ApiService = ApiService_1 = class ApiService {
    constructor(httpClient, storage, toastCtrl) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
    }
    presentToast(message, color, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.myToast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                color,
                position
            });
            this.myToast.present();
        });
    }
    post(url, object) {
        // console.log(this.header);
        return this.httpClient
            .post(url, object, this.header)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
    }
    patch(url, object) {
        return this.httpClient.patch(url, object, this.header).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => res));
    }
    put(url, object) {
        return this.httpClient.put(url, object, this.header).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => res));
    }
    get(url) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ authorization: 'Bearer ' + this.token });
        return this.httpClient.get(url, this.header).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => res));
    }
    delete(url) {
        return this.httpClient.delete(url, this.header).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => res));
    }
    formatErrors(error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error.error);
    }
};
ApiService.remoteAdress = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
ApiService.apiUSER = ApiService_1.remoteAdress + 'users/';
ApiService.apiACTION = ApiService_1.remoteAdress + 'actions/';
ApiService.apiCLIENT = ApiService_1.remoteAdress + 'clients/';
ApiService.apiOPERATION = ApiService_1.remoteAdress + 'operations/';
ApiService.apiPost = ApiService_1.remoteAdress + 'posts/';
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _Service_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
ApiService = ApiService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root',
    })
], ApiService);



/***/ }),

/***/ 35568:
/*!*********************************************************!*\
  !*** ./src/app/Shared/kids/Service/postKids.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostKidsService": () => (/* binding */ PostKidsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 537);
/* harmony import */ var _Service_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Service/utils.service */ 95920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _Service_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Service/storage.service */ 12833);






let PostKidsService = class PostKidsService {
    constructor(utilsService, storage) {
        this.utilsService = utilsService;
        this.storage = storage;
    }
    getAllPostsKids() {
        console.log(`${_Service_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService.apiPost}?type=kids`);
        // return this.utilsService.get(`${UtilsService.apiPost}/?page=${page}&limit=5`).pipe(map(res => res.data));
        return this.utilsService.get(`${_Service_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService.apiPost}?type=kids`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res.data));
    }
    getMyPostsKids(id) {
        return this.utilsService.get(`${_Service_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService.apiPost}?user=` + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res.data));
    }
    likePostKids(post) {
        return this.utilsService.patch(_Service_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService.apiPost + 'likePost', post).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res));
    }
    disLikePostKids(post) {
        return this.utilsService.patch(_Service_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService.apiPost + 'dislikePost', post).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res));
    }
    addComment(comment, post) {
        return this.utilsService.post(`${_Service_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService.apiPost}${post}/comments`, comment).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => res));
    }
    getCommentByService(post) {
        return this.utilsService.get(`${_Service_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService.apiPost}${post}/comments`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => res.data.data));
    }
    deletePostKids(id) {
        return this.utilsService.delete(`${_Service_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService.apiPost}` + id);
    }
};
PostKidsService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService },
    { type: _Service_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService }
];
PostKidsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], PostKidsService);



/***/ }),

/***/ 4505:
/*!****************************************************************!*\
  !*** ./src/app/layouts/kids/accueil/accueil-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueilPageRoutingModule": () => (/* binding */ AccueilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _accueil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accueil.page */ 14457);




const routes = [
    {
        path: '',
        component: _accueil_page__WEBPACK_IMPORTED_MODULE_0__.AccueilPage
    },
    {
        path: 'add-status-kids',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_kids_accueil_status-kids_add-status-kids_add-status-kids_page_ts"), __webpack_require__.e("src_app_layouts_kids_accueil_status-kids_add-status-kids_add-status-kids_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./status-kids/add-status-kids/add-status-kids.module */ 32476)).then(m => m.AddStatusKidsPageModule)
    }
];
let AccueilPageRoutingModule = class AccueilPageRoutingModule {
};
AccueilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccueilPageRoutingModule);



/***/ }),

/***/ 86451:
/*!********************************************************!*\
  !*** ./src/app/layouts/kids/accueil/accueil.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueilPageModule": () => (/* binding */ AccueilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _accueil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accueil-routing.module */ 4505);
/* harmony import */ var _accueil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accueil.page */ 14457);
/* harmony import */ var _status_kids_status_kids_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status-kids/status-kids.component */ 614);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/component.module */ 55051);









let AccueilPageModule = class AccueilPageModule {
};
AccueilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _accueil_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccueilPageRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule
        ],
        declarations: [_accueil_page__WEBPACK_IMPORTED_MODULE_1__.AccueilPage, _status_kids_status_kids_component__WEBPACK_IMPORTED_MODULE_2__.StatusKidsComponent]
    })
], AccueilPageModule);



/***/ }),

/***/ 14457:
/*!******************************************************!*\
  !*** ./src/app/layouts/kids/accueil/accueil.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueilPage": () => (/* binding */ AccueilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_accueil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./accueil.page.html */ 40275);
/* harmony import */ var _accueil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accueil.page.scss */ 73566);
/* harmony import */ var _comments_kids_comments_kids_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../comments-kids/comments-kids.page */ 2756);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Shared/Service/comment.service */ 49821);
/* harmony import */ var _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Shared/Service/user.service */ 88838);
/* harmony import */ var src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/Service/post.service */ 91820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_Shared_kids_Service_postKids_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/kids/Service/postKids.service */ 35568);
/* harmony import */ var _home_modal_sheare_modal_sheare_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../home/modal-sheare/modal-sheare.page */ 74689);
/* harmony import */ var src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/Service/event.service */ 34489);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 78345);



/* eslint-disable quote-props */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable no-underscore-dangle */



/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-inferrable-types */

/* eslint-disable @typescript-eslint/type-annotation-spacing */

/* eslint-disable @typescript-eslint/dot-notation */





let AccueilPage = class AccueilPage {
    constructor(commentService, modalController, postKidsService, postService, userservice, eventService) {
        this.commentService = commentService;
        this.modalController = modalController;
        this.postKidsService = postKidsService;
        this.postService = postService;
        this.userservice = userservice;
        this.eventService = eventService;
        this.comments = [];
        this.comment = new Comment();
        this.initialButtonIcon = 'heart-outline';
        this.user$ = [];
        this.page = 1;
        this.xxxMap = new Map();
        this.dict = [];
        this.posts = [];
        this.posts1 = [];
    }
    ngOnInit() {
        // this.getAllPostsKids();
        this.getMe();
        this.getAllPostsByEvent();
    }
    getAllPostsKids() {
        this.postKidsService.getAllPostsKids().subscribe((res) => {
            this.posts = res['data'];
        });
    }
    getMe() {
        this.userservice.getMe().subscribe((res) => {
            this.user$ = res.data.data;
        });
    }
    like(post) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.postKidsService.likePostKids(post).subscribe((res) => {
                this.getAllPostsKids();
            });
            post.icon = 'heart';
            this.buttonColor = '#ff0000';
        });
    }
    disLike(post) {
        console.log('diss');
        this.postKidsService.disLikePostKids(post).subscribe((res) => {
            this.getAllPostsKids();
        });
    }
    presentModal(post) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _comments_kids_comments_kids_page__WEBPACK_IMPORTED_MODULE_2__.CommentsKidsPage,
                cssClass: 'my-custom-class',
                componentProps: {
                    post,
                    comments: this.comments,
                },
            });
            yield modal.present();
            yield modal.onWillDismiss().then((result) => {
                this.idpostcom = post.id;
                this.getCommentByPost();
            });
        });
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _home_modal_sheare_modal_sheare_page__WEBPACK_IMPORTED_MODULE_7__.ModalShearePage,
                componentProps: {
                    user: this.user$
                }
            });
            yield modal.present();
            yield modal.onWillDismiss().then((result) => {
                this.getAllPostsKids();
            });
        });
    }
    getCommentByPost() {
        this.posts.forEach((element) => {
            this.commentService.getCommentByService(element.id).subscribe((arg) => {
                this.comments = arg;
                this.dict.push({ post: element.id, comment: this.comments.length });
            });
        });
        this.dict.forEach((r) => {
            console.log(r);
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
    getAllPostsByEvent(event) {
        this.userservice.getMe().subscribe(res => {
            this.user$ = res.data.data;
            this.postService.getAllfollowingPosts(this.page, this.user$._id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)()).subscribe(res => {
                this.posts1 = res.data.data;
                this.posts1.forEach(e => {
                    this.posts = this.posts.concat(e);
                });
                if (event) {
                    event.target.complete();
                }
            });
        });
    }
    loadMore(event) {
        this.page++;
        this.getAllPostsByEvent(event);
    }
    doRefresh(event) {
        this.posts = [];
        setTimeout(() => {
            this.getAllPostsByEvent();
            event.target.complete();
        }, 1000);
    }
};
AccueilPage.ctorParameters = () => [
    { type: _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_3__.CommentService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_Shared_kids_Service_postKids_service__WEBPACK_IMPORTED_MODULE_6__.PostKidsService },
    { type: src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_5__.PostService },
    { type: _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_8__.EventService }
];
AccueilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-accueil',
        template: _raw_loader_accueil_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_accueil_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccueilPage);



/***/ }),

/***/ 614:
/*!***************************************************************************!*\
  !*** ./src/app/layouts/kids/accueil/status-kids/status-kids.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusKidsComponent": () => (/* binding */ StatusKidsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_status_kids_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./status-kids.component.html */ 4077);
/* harmony import */ var _status_kids_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status-kids.component.scss */ 27087);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Shared/Service/post.service */ 91820);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 35758);
/* harmony import */ var _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Shared/Service/user.service */ 88838);
/* harmony import */ var _Shared_Model_Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Shared/Model/Comment */ 73070);
/* harmony import */ var _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Shared/Service/comment.service */ 49821);
/* harmony import */ var src_app_Shared_kids_Service_postKids_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/kids/Service/postKids.service */ 35568);
/* harmony import */ var _comments_kids_comments_kids_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../comments-kids/comments-kids.page */ 2756);
/* harmony import */ var src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/Service/follower.service */ 93647);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_layouts_coachprofile_image_profile_image_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/layouts/coachprofile/image-profile/image-profile.component */ 6510);
/* harmony import */ var src_app_layouts_post_display_post_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/layouts/post-display/post-display.component */ 97119);
/* harmony import */ var _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/video-player/ngx */ 524);
/* harmony import */ var src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/Shared/Service/favoris.service */ 38007);
/* harmony import */ var _profil_display_img_profil_kids_display_img_profil_kids_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../profil/display-img-profil-kids/display-img-profil-kids.component */ 14674);



/* eslint-disable no-trailing-spaces */

















let StatusKidsComponent = class StatusKidsComponent {
    constructor(navCtrl, alertController, userservice, commentService, modalController, postKidsService, popoverCtrl, userService, followerService, videoPlayer, postService, favorisService) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.userservice = userservice;
        this.commentService = commentService;
        this.modalController = modalController;
        this.postKidsService = postKidsService;
        this.popoverCtrl = popoverCtrl;
        this.userService = userService;
        this.followerService = followerService;
        this.videoPlayer = videoPlayer;
        this.postService = postService;
        this.favorisService = favorisService;
        this.likeFn = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.disLikeFn = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.refreshPosts = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.apiImgUser = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.apiImg}User/`;
        this.apiImg = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.apiImg}Post/`;
        this.comment = new _Shared_Model_Comment__WEBPACK_IMPORTED_MODULE_4__.Comment();
        this.longPressActive = false;
        this.posts = [];
        this.comments = [];
        // user: any;
        this.tap = 0;
        this.press = 0;
        this.liked = false;
        this.bookmarked = false;
        this.follower = false;
        this.showComment = false;
        this.images = [];
        this.mediafiles = [];
        this.newMediaFiles = [];
        this.secondNewMediaFiles = [];
        this.thirdNewMediaFiles = [];
        window.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
        const _this = this;
        this.userService.getMe().subscribe((response) => {
            this.followerService
                .getFollow(this.post.user.id, response.data.data._id)
                .subscribe((res) => {
                if (res == null) {
                    _this.follower = false;
                }
                else {
                    _this.follower = true;
                }
            });
        }, (error) => console.error(error));
    }
    ngOnInit() {
        var _a;
        // this.checkSuivi(this.post.user.id);
        // eslint-disable-next-line no-underscore-dangle
        this.id = JSON.stringify((_a = this.user) === null || _a === void 0 ? void 0 : _a._id);
        this.getMe();
        this.getCommentByPost();
        // console.log(this.mediafiles);
    }
    presentAlertConfirm(post) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Are you sure you want to delete this post ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        },
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay' + post.id);
                            this.deletePost(post._id);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    deletePost(idpost) {
        this.postKidsService.deletePostKids(idpost).subscribe((arg) => { });
        this.refreshPosts.emit();
    }
    onTap() {
        console.log('ok');
        this.tap++;
    }
    like(post) {
        this.likeFn.emit(post);
    }
    disLike(post) {
        this.disLikeFn.emit(post);
    }
    onComment() {
        console.log('comment');
    }
    share() {
        console.log('share');
    }
    presentModal(post) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _comments_kids_comments_kids_page__WEBPACK_IMPORTED_MODULE_7__.CommentsKidsPage,
                cssClass: 'my-custom-class',
                componentProps: {
                    post,
                    comments: this.comments,
                    userid: (_a = this.user) === null || _a === void 0 ? void 0 : _a._id,
                },
            });
            yield modal.present();
            yield modal.onWillDismiss().then((result) => {
                this.getCommentByPost();
            });
        });
    }
    getCommentByPost() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.forkJoin)({
            comments: this.commentService.getCommentByService(this.post._id),
            images: this.postService.getPost(this.post._id),
            mediafiles: this.postService.getPost(this.post._id),
            a: this.postService.getPost(this.post._id),
        }).subscribe(({ comments, images, mediafiles, a }) => {
            this.comments = comments;
            this.images = images.images;
            this.mediafiles = mediafiles.mediafiles;
            let tempMedia = mediafiles.mediafiles;
            if (tempMedia.length < 4) {
                this.newMediaFiles = tempMedia.splice(0, 1);
            }
            if (tempMedia.length > 3) {
                this.newMediaFiles = tempMedia.slice(0, 1);
                this.thirdNewMediaFiles = tempMedia.slice(1, 3);
                this.secondNewMediaFiles = tempMedia.splice(3, this.mediafiles.length);
            }
            // console.log(this.newMediaFiles);
        });
    }
    showComments() {
        this.showComment = true;
    }
    hideComments() {
        this.showComment = false;
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    getMe() {
        this.userservice.getMe().subscribe((res) => {
            this.isUserConnected = res.data.data._id;
        });
    }
    checkSuivi(iduser) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            this.userService.getMe().subscribe((response) => {
                this.followerService
                    .getFollow(iduser, response.data.data._id)
                    .subscribe((res) => {
                    if (res == null) {
                        setTimeout(() => { this.follower = false; }, 0);
                        console.log('mouch follower' + iduser);
                    }
                    else {
                        this.follower = true;
                        setTimeout(() => { this.follower = true; }, 0);
                        console.log(' follower' + iduser);
                    }
                });
            }, (error) => console.error(error));
        });
    }
    getExt(fileName) {
        const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
        //console.log(ext);
        return ext;
    }
    displayImage(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _profil_display_img_profil_kids_display_img_profil_kids_component__WEBPACK_IMPORTED_MODULE_14__.DisplayImgProfilKidsComponent,
                cssClass: 'imageModal',
                componentProps: {
                    image: a,
                },
            });
            return yield modal.present();
        });
    }
    displayContent(files) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_layouts_post_display_post_display_component__WEBPACK_IMPORTED_MODULE_11__.PostDisplayComponent,
                cssClass: 'imageModal',
                componentProps: {
                    post: files,
                },
            });
            return yield modal.present();
        });
    }
    displayVideo(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            // console.log(url);
            const modal = yield this.modalController.create({
                component: src_app_layouts_coachprofile_image_profile_image_profile_component__WEBPACK_IMPORTED_MODULE_10__.ImageProfileComponent,
                cssClass: 'imageModal',
                componentProps: {
                    video: file,
                },
            });
            return yield modal.present();
        });
    }
    playvid(url) {
        this.videoPlayer.play(url).then(() => {
            //console.log('video completed');
        }).catch(err => {
            console.log(err);
        });
    }
    bookmark(post) {
        this.favorisService.addFavoris(post === null || post === void 0 ? void 0 : post._id).subscribe((res) => {
            console.log(res);
            this.bookmarked = true;
        });
    }
    unBookmark(post) {
        this.favorisService.addFavoris(post === null || post === void 0 ? void 0 : post._id).subscribe((res) => {
            console.log(res);
            this.bookmarked = false;
        });
    }
};
StatusKidsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.AlertController },
    { type: _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_5__.CommentService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController },
    { type: src_app_Shared_kids_Service_postKids_service__WEBPACK_IMPORTED_MODULE_6__.PostKidsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.PopoverController },
    { type: _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_8__.FollowerService },
    { type: _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_12__.VideoPlayer },
    { type: _Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_2__.PostService },
    { type: src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_13__.FavorisService }
];
StatusKidsComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonInfiniteScroll,] }],
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonVirtualScroll,] }],
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    likeFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output }],
    disLikeFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output }],
    refreshPosts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Output }]
};
StatusKidsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-status-kids',
        template: _raw_loader_status_kids_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_status_kids_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StatusKidsComponent);



/***/ }),

/***/ 2756:
/*!******************************************************************!*\
  !*** ./src/app/layouts/kids/comments-kids/comments-kids.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsKidsPage": () => (/* binding */ CommentsKidsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_comments_kids_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./comments-kids.page.html */ 64227);
/* harmony import */ var _comments_kids_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments-kids.page.scss */ 65994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Shared/Service/comment.service */ 49821);
/* harmony import */ var _Shared_Model_Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Shared/Model/Comment */ 73070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);



/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */







let CommentsKidsPage = class CommentsKidsPage {
    constructor(commentService, modalController, userService) {
        this.commentService = commentService;
        this.modalController = modalController;
        this.userService = userService;
        this.comments = [];
        this.apiImgUser = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiImg}User/`;
        this.title = "Comments";
        this.updateCom = false;
        this.comment = new _Shared_Model_Comment__WEBPACK_IMPORTED_MODULE_3__.Comment();
        this.apiImg = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiImg}users/`;
    }
    ngOnInit() {
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            contentControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
        });
        this.getCommentByPost();
    }
    updateComment(comment) {
        this.updateCom = true;
        this.selectedCom = comment;
    }
    sendComment(post) {
        this.comments = [];
        // eslint-disable-next-line no-underscore-dangle
        return this.commentService.addComment(this.comment, post._id).subscribe(res => {
            this.comment = new _Shared_Model_Comment__WEBPACK_IMPORTED_MODULE_3__.Comment();
            this.getCommentByPost();
        });
    }
    sendCommentUpdate() {
        this.updateCom = false;
        this.upcom = document.getElementById("contentCom").value;
        this.selectedCom.content = this.upcom;
        this.commentService.updateComments(this.selectedCom).subscribe(res => {
        });
    }
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    getCommentByPost() {
        // eslint-disable-next-line no-underscore-dangle
        this.commentService.getCommentByService(this.post._id).subscribe(arg => {
            this.comments = arg;
        });
    }
    deleteComment(idcom) {
        this.commentService.deleteComment(idcom).subscribe(arg => {
        });
        this.getCommentByPost();
    }
};
CommentsKidsPage.ctorParameters = () => [
    { type: _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_2__.CommentService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService }
];
CommentsKidsPage.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    comments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    userid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
CommentsKidsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-comments-kids',
        template: _raw_loader_comments_kids_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_comments_kids_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommentsKidsPage);



/***/ }),

/***/ 14674:
/*!**************************************************************************************************!*\
  !*** ./src/app/layouts/kids/profil/display-img-profil-kids/display-img-profil-kids.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayImgProfilKidsComponent": () => (/* binding */ DisplayImgProfilKidsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_display_img_profil_kids_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./display-img-profil-kids.component.html */ 47023);
/* harmony import */ var _display_img_profil_kids_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-img-profil-kids.component.scss */ 78965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Service/post.service */ 91820);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Service/favoris.service */ 38007);








let DisplayImgProfilKidsComponent = class DisplayImgProfilKidsComponent {
    constructor(postService, modalController, favorisService) {
        this.postService = postService;
        this.modalController = modalController;
        this.favorisService = favorisService;
        this.apiImg = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiImg}Post/`;
        this.isimage = false;
        this.isvideo = false;
    }
    get_url_extension(url) {
        return url.split(/[#?]/)[0].split('.').pop().trim();
    }
    ngOnInit() {
        if (this.post.split(/[#?]/)[0].split('.').pop().trim().includes('png') || this.post.split(/[#?]/)[0].split('.').pop().trim().includes('jpeg')) {
            this.isimage = true;
        }
        else if (this.post.split(/[#?]/)[0].split('.').pop().trim().includes('mp4') || this.post.split(/[#?]/)[0].split('.').pop().trim().includes('avi')) {
            this.isvideo = true;
        }
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true,
        });
    }
};
DisplayImgProfilKidsComponent.ctorParameters = () => [
    { type: src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_2__.PostService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_4__.FavorisService }
];
DisplayImgProfilKidsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-display-img-profil-kids',
        template: _raw_loader_display_img_profil_kids_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_display_img_profil_kids_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DisplayImgProfilKidsComponent);



/***/ }),

/***/ 73566:
/*!********************************************************!*\
  !*** ./src/app/layouts/kids/accueil/accueil.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-col.my-thin-col {\n  padding: 0;\n  margin-left: 6px;\n  width: calc(calc(6 / var(--ion-grid-columns, 12.5)) * 100%);\n  max-width: calc(calc(6 / var(--ion-grid-columns, 12.5)) * 100%);\n}\n\n.stylecards {\n  box-shadow: rgba(0, 0, 0, 0.08) -2px 3px 6px;\n  border-radius: 10px;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.labelnblikes {\n  font-size: smaller;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #cecece;\n  justify-content: center;\n  width: 96%;\n  margin-left: 2%;\n  margin-right: 2%;\n  margin-bottom: 5px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg,#247238, #247238, #8EBF25,#8EBF25);\n}\n\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label, .slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.ZoneShare {\n  height: 45px;\n  background: #e4e3e3;\n  border-radius: 23px;\n  padding-top: 0.3em;\n}\n\n.ZoneShare p {\n  font-size: xx-small;\n  margin-top: 5px;\n  padding: 8px 20px;\n  align-items: flex-start;\n  display: grid;\n}\n\n.swiper-slide:not(.swiper-slide-active) > div {\n  display: none;\n}\n\nion-slide {\n  width: 4rem !important;\n  margin-right: -2px !important;\n}\n\n.img-wrapper {\n  min-height: 200px;\n  width: 103%;\n  background-repeat: no-repeat;\n  border-radius: 15px;\n}\n\n.centered {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n\n.myImageUser {\n  border-radius: 15px;\n  width: 30px;\n  height: 30px;\n}\n\nh1 {\n  font-size: 14px;\n  font-weight: 400;\n  margin: 10px 0 0 0;\n  color: #888888;\n}\n\na {\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 10px;\n  display: inline-block;\n  text-decoration: none;\n  color: #008A68;\n}\n\nsvg {\n  cursor: pointer;\n  overflow: visible;\n  width: 60px;\n}\n\nsvg #heart {\n  transform-origin: center;\n  animation: animateHeartOut 0.3s linear forwards;\n}\n\nsvg #main-circ {\n  transform-origin: 29.5px 29.5px;\n}\n\n#checkbox {\n  display: none;\n}\n\n#checkbox:checked + label svg #heart {\n  transform: scale(0.2);\n  fill: #E2264D;\n  animation: animateHeart 0.3s linear forwards 0.25s;\n}\n\n#checkbox:checked + label svg #main-circ {\n  transition: all 2s;\n  animation: animateCircle 0.3s linear forwards;\n  opacity: 1;\n}\n\n#checkbox:checked + label svg #grp1 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n\n#checkbox:checked + label svg #grp1 #oval1 {\n  transform: scale(0) translate(0, -30px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp1 #oval2 {\n  transform: scale(0) translate(10px, -50px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp2 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n\n#checkbox:checked + label svg #grp2 #oval1 {\n  transform: scale(0) translate(30px, -15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp2 #oval2 {\n  transform: scale(0) translate(60px, -15px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp3 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n\n#checkbox:checked + label svg #grp3 #oval1 {\n  transform: scale(0) translate(30px, 0px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp3 #oval2 {\n  transform: scale(0) translate(60px, 10px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp4 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n\n#checkbox:checked + label svg #grp4 #oval1 {\n  transform: scale(0) translate(30px, 15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp4 #oval2 {\n  transform: scale(0) translate(40px, 50px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp5 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n\n#checkbox:checked + label svg #grp5 #oval1 {\n  transform: scale(0) translate(-10px, 20px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp5 #oval2 {\n  transform: scale(0) translate(-60px, 30px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp6 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n\n#checkbox:checked + label svg #grp6 #oval1 {\n  transform: scale(0) translate(-30px, 0px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp6 #oval2 {\n  transform: scale(0) translate(-60px, -5px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp7 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n\n#checkbox:checked + label svg #grp7 #oval1 {\n  transform: scale(0) translate(-30px, -15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp7 #oval2 {\n  transform: scale(0) translate(-55px, -30px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp2 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n\n#checkbox:checked + label svg #grp3 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n\n#checkbox:checked + label svg #grp4 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n\n#checkbox:checked + label svg #grp5 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n\n#checkbox:checked + label svg #grp6 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n\n#checkbox:checked + label svg #grp7 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n\n@keyframes animateCircle {\n  40% {\n    transform: scale(10);\n    opacity: 1;\n    fill: #DD4688;\n  }\n  55% {\n    transform: scale(11);\n    opacity: 1;\n    fill: #D46ABF;\n  }\n  65% {\n    transform: scale(12);\n    opacity: 1;\n    fill: #CC8EF5;\n  }\n  75% {\n    transform: scale(13);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0.5;\n  }\n  85% {\n    transform: scale(17);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0.2;\n  }\n  95% {\n    transform: scale(18);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0.1;\n  }\n  100% {\n    transform: scale(19);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0;\n  }\n}\n\n@keyframes animateHeart {\n  0% {\n    transform: scale(0.2);\n  }\n  40% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes animateHeartOut {\n  0% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.imgUser {\n  height: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,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SUk7RUFBTSxVQUFBO0VBQVcsNkJBQUE7QUFoSXJCOztBQWlJSTtFQUFNLFVBQUE7RUFBVyw2QkFBQTtBQTdIckI7O0FBOEhJO0VBQU0sVUFBQTtFQUFXLDZCQUFBO0FBMUhyQjs7QUEySEk7RUFBTSxVQUFBO0VBQVcsNkJBQUE7QUF2SHJCOztBQXdISTtFQUFNLFVBQUE7RUFBVyw2QkFBQTtBQXBIckI7O0FBdUhBO0VBQ0U7SUFBSSxvQkFBQTtJQUFxQixVQUFBO0lBQVcsYUFBQTtFQWpIcEM7RUFrSEE7SUFBSSxvQkFBQTtJQUFxQixVQUFBO0lBQVcsYUFBQTtFQTdHcEM7RUE4R0E7SUFBSSxvQkFBQTtJQUFxQixVQUFBO0lBQVcsYUFBQTtFQXpHcEM7RUEwR0E7SUFBSSxvQkFBQTtJQUFxQixVQUFBO0lBQVcsaUJBQUE7SUFBa0IsZUFBQTtJQUFnQixpQkFBQTtFQW5HdEU7RUFvR0E7SUFBSSxvQkFBQTtJQUFxQixVQUFBO0lBQVcsaUJBQUE7SUFBa0IsZUFBQTtJQUFnQixpQkFBQTtFQTdGdEU7RUE4RkE7SUFBSSxvQkFBQTtJQUFxQixVQUFBO0lBQVcsaUJBQUE7SUFBa0IsZUFBQTtJQUFnQixpQkFBQTtFQXZGdEU7RUF3RkE7SUFBSyxvQkFBQTtJQUFxQixVQUFBO0lBQVcsaUJBQUE7SUFBa0IsZUFBQTtJQUFnQixlQUFBO0VBakZ2RTtBQUNGOztBQW1GQTtFQUNFO0lBQUcscUJBQUE7RUFoRkg7RUFpRkE7SUFBSSxxQkFBQTtFQTlFSjtFQStFQTtJQUFLLG1CQUFBO0VBNUVMO0FBQ0Y7O0FBOEVBO0VBQ0U7SUFBRyxxQkFBQTtFQTNFSDtFQTRFQTtJQUFLLG1CQUFBO0VBekVMO0FBQ0Y7O0FBMEVBO0VBRUEsd0JBQUE7QUF6RUEiLCJmaWxlIjoiYWNjdWVpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICAjY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogIzhjOGM4YztcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgI2NvbnRhaW5lciBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgaW9uLWNvbC5teS10aGluLWNvbCB7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgd2lkdGg6IGNhbGMoY2FsYyg2IC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgMTIuNSkpICogMTAwJSk7XG4gICAgbWF4LXdpZHRoOiBjYWxjKGNhbGMoNiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyLjUpKSAqIDEwMCUpO1xuICB9XG5cbiAgLnN0eWxlY2FyZHN7XG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gOCUpIC0ycHggM3B4IDZweCA7Ym9yZGVyLXJhZGl1czogMTBweDsgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuICAubGFiZWxuYmxpa2Vze1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgfVxuICAjY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IERhcmtHcmVlbjsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMjQ3MjM4LCAjMjQ3MjM4LCAgIzhFQkYyNSwjOEVCRjI1KTtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICAvLyBjc3MgYnV0dG9uXG4gICRydWxlcjogMTZweDtcbiAgJGNvbG9yLXJlZDogIzcyNmI2YjtcbiAgJGNvbG9yLWJnOiAjRUJFQ0YwO1xuICAkY29sb3Itc2hhZG93OiAjQkFCRUNDO1xuICAkY29sb3Itd2hpdGU6ICNGRkY7XG5cblxuICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzNiU7XG4gICAgICBmb250LXNpemU6IDIuMGVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuMGVtO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MiU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuICAubXlGb290ZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gICAgcGFkZGluZy1ib3R0b206IDA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxcHggMXB4ICNjZWNlY2U7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDk2JTtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLm15Z2FsbGVyeXtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgfVxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbntcbiAgICBib3R0b206IDUlO1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyNDcyMzg7XG4gICAgICAgIHdpZHRoOiAxMHB4IDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4IDtcbiAgICAgICAgb3BhY2l0eTogNS4yO1xuICB9XG59XG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMjQ3MjM4LCAjMjQ3MjM4LCAgIzhFQkYyNSwjOEVCRjI1KTtcblxufVxuXG4uc2hhZG93Ym94IHtcbiAvLyBib3JkZXI6IDFweCBzb2xpZCAjOEVCRjI1O1xuIC8vIGJveC1zaGFkb3c6IDJweCAxcHggMXB4ICMyNDcyMzg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYsICNkZGQgNDAlLCAjY2NjKTtcbn1cblxuXG4vL1xuXG5cblxuLy8gLmNsZWFye1xuLy8gICBjbGVhcjogYm90aDtcbi8vIH1cblxuXG4vLyAuc2xpZGUtdG9nZ2xle1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyAuc2xpZGVtZW51e1xuLy8gICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4vLyAgIG1heC13aWR0aDogMTAwJTtcbi8vICAgbWFyZ2luOiA1MHB4IGF1dG87XG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyB9XG5cbi8vIC5zbGlkZW1lbnUgbGFiZWx7XG4vLyAgIHdpZHRoOiAyNSU7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gICBjb2xvcjogIzMzMztcbi8vICAgb3BhY2l0eTogMC4yO1xuXG4vLyB9XG5cblxuXG5cbi8vIC5zbGlkZW1lbnUgbGFiZWwgLmljb257XG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgYm9yZGVyOiBzb2xpZCAycHggIzMzMztcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBoZWlnaHQ6IDUwcHg7XG4vLyAgIHdpZHRoOiA1MHB4O1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyB9XG5cbi8vIC8qQmFyIFN0eWxlKi9cblxuXG5cbi8vIC5zbGlkZXIgLmJhcntcbi8vICAgd2lkdGg6IDUwJTtcbi8vICAgaGVpZ2h0OiA1cHg7XG4vLyAgIGJhY2tncm91bmQ6IHJnYigxLCA2OCwgMzcpO1xuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyB9XG5cbi8vIC8qQW5pbWF0aW9ucyovXG4vLyAuc2xpZGVtZW51IGxhYmVsLCAuc2xpZGVyIC5iYXIge1xuLy8gICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4vLyAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuLy8gICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbi8vIH1cblxuLy8gLypUb2dnbGUqL1xuXG4vLyAuc2xpZGVtZW51IC5zbGlkZS10b2dnbGU6Y2hlY2tlZCArIGxhYmVse1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gfVxuXG5cblxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0xOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAwOyB9XG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDMwJTsgfVxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0zOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiA1MCU7IH1cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tNDpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNzUlOyB9XG5cblxuXG4vLyBuYXYge1xuLy8gICBtYXgtd2lkdGg6MTAwJTtcbi8vICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCAjZmZmZmZmIDI1JSwgI2ZmZmZmZiA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4vLyAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyB9XG5cbi8vIG5hdiB1bCB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMjUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuLy8gICBib3gtc2hhZG93OiAwIDAgMjVweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gfVxuXG4vLyBuYXYgdWwgbGkge1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyB9XG5cbi8vIG5hdiB1bCBsaSBhIHtcbi8vICAgcGFkZGluZzoxMHB4O1xuLy8gICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbi8vICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuLy8gICBjb2xvcjogYmxhY2s7XG4vLyAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vIH1cblxuLy8gbmF2IHVsIGxpIGE6aG92ZXIge1xuLy8gICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4vLyAgIGNvbG9yOiAjOEVCRjI1O1xuLy8gfVxuXG5cbi5jbGVhcntcbiAgY2xlYXI6IGJvdGg7XG59XG5cblxuLnNsaWRlLXRvZ2dsZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlbWVudXtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAxMHB4IDIwcHggMjBweCBhdXRvO1xuIC8vIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbGlkZW1lbnUgbGFiZWx7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogZ3JlZW47XG4gIG9wYWNpdHk6IDAuMjtcblxufVxuXG4uc2xpZGVtZW51IGxhYmVsOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnNsaWRlbWVudSBsYWJlbCBzcGFue1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICMyNDcyMzg7XG59XG5cbi5zbGlkZW1lbnUgbGFiZWwgLmljb257XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzI0NzIzODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qQmFyIFN0eWxlKi9cblxuLnNsaWRlcntcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zbGlkZXIgLmJhcntcbiAgd2lkdGg6NTAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuXG4vKkFuaW1hdGlvbnMqL1xuLnNsaWRlbWVudSBsYWJlbCwgLnNsaWRlciAuYmFyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qVG9nZ2xlKi9cblxuLnNsaWRlbWVudSAuc2xpZGUtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbHtcbiAgb3BhY2l0eTogMTtcbn1cblxuXG5cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMDsgfVxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0yOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAyNSU7IH1cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMzpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNTAlOyB9XG4uSGVhZGVyRmlsdGVye1xuICAvLyAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcbiAgIC8vIGhlaWdodDogNSU7XG5cbn1cbi5CYWR5RmlsdGVye1xuXG59XG5cblxuXG4gI2NhcnQtYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMHB4O1xuIH1cblxuIC5vdXR0ZXItYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgLy9iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHdpZHRoOiA2NHB4O1xuICB9XG4gIC5pbm5lci1iYWRnZS1PSyB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiAtMjBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG5cbiAgfVxuICAuaW5uZXItYmFkZ2UtT0sgLmJhZGdlQ2FuY2Vse1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cblxuICAuaW5uZXItYmFkZ2UtS08ge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmlubmVyLWJhZGdlLUtPIC5iYWRnZUNhbmNlbHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogOHB4O1xuXG4gIH1cblxuICAuaW5uZXItYmFkZ2UtVGNoYXQge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yM3B4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmlubmVyLWJhZGdlLVRjaGF0IC5iYWRnZUNhbmNlbHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG5cblxuXG5cblxuXG5cblxuXG5cbi8vIHVsIHtcbi8vICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuLy8gICB3aWR0aDogNTAwcHg7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udDogYm9sZCAyMHB4LzEuNSBIZWx2ZXRpY2EsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4vLyB9XG5cbi8vIGxpIGltZyB7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gICBtYXJnaW46IDAgMTVweCAwIDA7XG4vLyB9XG5cbi8vIGxpIHAge1xuLy8gICBmb250OiAyMDAgMTJweC8xLjUgR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbi8vIH1cblxuLy8gbGkge1xuLy8gICBwYWRkaW5nOiAxMHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gbGk6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kOiAjZWVlO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi8vIC5pbWFnZXMge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIH1cblxuLy8gICAuaW1hZ2VzIC5Vc2VyUG9zdGVkIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDQwJTtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgdG9wOjEwcHg7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgfVxuXG4uWm9uZVNoYXJlIHtcbiAgLy8gbWFyZ2luLXRvcDogLTVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kOiAjZTRlM2UzO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBwYWRkaW5nLXRvcDogMC4zZW07XG59XG5cbi5ab25lU2hhcmUgcCB7XG4gIGZvbnQtc2l6ZTogeHgtc21hbGw7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBncmlkO1xufVxuLnN3aXBlci1zbGlkZTpub3QoLnN3aXBlci1zbGlkZS1hY3RpdmUpID4gZGl2IHtcbiAgZGlzcGxheTpub25lO1xufVxuaW9uLXNsaWRlIHtcbiAgd2lkdGg6IDRyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAtMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmltZy13cmFwcGVyIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAzJTtcbiAgICAvL2JhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIC8vYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxcHggMXB4ICMyNDcyMzg7XG4gICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMjE5LCAyMTUsIDIxNSksIHJnYigyMTksIDIxNSwgMjE1KTQwJSwgcmdiKDIxOSwgMjE1LCAyMTUpKTtcblxuXG59XG4uY2VudGVyZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG59XG4ubXlJbWFnZVVzZXJ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcblxufVxuXG5cblxuXG5oMXtmb250LXNpemU6MTRweDsgZm9udC13ZWlnaHQ6NDAwOyBtYXJnaW46MTBweCAwIDAgMDsgY29sb3I6Izg4ODg4ODt9XG5cbmF7Zm9udC1zaXplOjEycHg7IGZvbnQtd2VpZ2h0OmJvbGQ7IG1hcmdpbi10b3A6MTBweDsgZGlzcGxheTppbmxpbmUtYmxvY2s7IHRleHQtZGVjb3JhdGlvbjpub25lOyBjb2xvcjojMDA4QTY4O31cblxuc3Zne1xuICBjdXJzb3I6cG9pbnRlcjsgb3ZlcmZsb3c6dmlzaWJsZTsgd2lkdGg6NjBweDtcbiAgI2hlYXJ0e3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOyBhbmltYXRpb246YW5pbWF0ZUhlYXJ0T3V0IC4zcyBsaW5lYXIgZm9yd2FyZHM7fVxuICAjbWFpbi1jaXJje3RyYW5zZm9ybS1vcmlnaW46MjkuNXB4IDI5LjVweDt9XG59XG5cbiNjaGVja2JveHtkaXNwbGF5Om5vbmU7fVxuXG4jY2hlY2tib3g6Y2hlY2tlZCArIGxhYmVsIHN2Z3tcbiAgICAjaGVhcnR7dHJhbnNmb3JtOnNjYWxlKC4yKTsgZmlsbDojRTIyNjREOyBhbmltYXRpb246YW5pbWF0ZUhlYXJ0IC4zcyBsaW5lYXIgZm9yd2FyZHMgLjI1czt9XG4gICAgI21haW4tY2lyY3t0cmFuc2l0aW9uOmFsbCAyczsgYW5pbWF0aW9uOmFuaW1hdGVDaXJjbGUgLjNzIGxpbmVhciBmb3J3YXJkczsgb3BhY2l0eToxO31cbiAgICAjZ3JwMXtcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcbiAgICAgICNvdmFsMXtcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgwLCAtMzBweCk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XG4gICAgICAgIHRyYW5zaXRpb246LjVzIHRyYW5zZm9ybSAuM3M7fVxuICAgICAgI292YWwye1xuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKDEwcHgsIC01MHB4KTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcbiAgICAgICAgdHJhbnNpdGlvbjoxLjVzIHRyYW5zZm9ybSAuM3M7fVxuICAgIH1cbiAgICAjZ3JwMntcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcbiAgICAgICNvdmFsMXtcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgzMHB4LCAtMTVweCk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XG4gICAgICAgIHRyYW5zaXRpb246LjVzIHRyYW5zZm9ybSAuM3M7fVxuICAgICAgI292YWwye1xuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKDYwcHgsIC0xNXB4KTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcbiAgICAgICAgdHJhbnNpdGlvbjoxLjVzIHRyYW5zZm9ybSAuM3M7fVxuICAgIH1cbiAgICAjZ3JwM3tcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcbiAgICAgICNvdmFsMXtcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xuICAgICAgICB0cmFuc2l0aW9uOi41cyB0cmFuc2Zvcm0gLjNzO31cbiAgICAgICNvdmFsMntcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSg2MHB4LCAxMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcbiAgICAgICAgdHJhbnNpdGlvbjoxLjVzIHRyYW5zZm9ybSAuM3M7fVxuICAgIH1cbiAgICAjZ3JwNHtcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcbiAgICAgICNvdmFsMXtcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgzMHB4LCAxNXB4KTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcbiAgICAgICAgdHJhbnNpdGlvbjouNXMgdHJhbnNmb3JtIC4zczt9XG4gICAgICAjb3ZhbDJ7XG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoNDBweCwgNTBweCk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XG4gICAgICAgIHRyYW5zaXRpb246MS41cyB0cmFuc2Zvcm0gLjNzO31cbiAgICB9XG4gICAgI2dycDV7XG4gICAgICBvcGFjaXR5OjE7IHRyYW5zaXRpb246LjFzIGFsbCAuM3M7XG4gICAgICAjb3ZhbDF7XG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoLTEwcHgsIDIwcHgpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xuICAgICAgICB0cmFuc2l0aW9uOi41cyB0cmFuc2Zvcm0gLjNzO31cbiAgICAgICNvdmFsMntcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgtNjBweCwgMzBweCk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XG4gICAgICAgIHRyYW5zaXRpb246MS41cyB0cmFuc2Zvcm0gLjNzO31cbiAgICB9XG4gICAgI2dycDZ7XG4gICAgICBvcGFjaXR5OjE7IHRyYW5zaXRpb246LjFzIGFsbCAuM3M7XG4gICAgICAjb3ZhbDF7XG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoLTMwcHgsIDBweCk7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XG4gICAgICAgIHRyYW5zaXRpb246LjVzIHRyYW5zZm9ybSAuM3M7fVxuICAgICAgI292YWwye1xuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKC02MHB4LCAtNXB4KTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcbiAgICAgICAgdHJhbnNpdGlvbjoxLjVzIHRyYW5zZm9ybSAuM3M7fVxuICAgIH1cbiAgICAjZ3JwN3tcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcbiAgICAgICNvdmFsMXtcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgtMzBweCwgLTE1cHgpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xuICAgICAgICB0cmFuc2l0aW9uOi41cyB0cmFuc2Zvcm0gLjNzO31cbiAgICAgICNvdmFsMntcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgtNTVweCwgLTMwcHgpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xuICAgICAgICB0cmFuc2l0aW9uOjEuNXMgdHJhbnNmb3JtIC4zczt9XG4gICAgfVxuICAgICNncnAye29wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgb3BhY2l0eSAuM3M7fVxuICAgICNncnAze29wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgb3BhY2l0eSAuM3M7fVxuICAgICNncnA0e29wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgb3BhY2l0eSAuM3M7fVxuICAgICNncnA1e29wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgb3BhY2l0eSAuM3M7fVxuICAgICNncnA2e29wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgb3BhY2l0eSAuM3M7fVxuICAgICNncnA3e29wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgb3BhY2l0eSAuM3M7fVxufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVDaXJjbGV7XG4gIDQwJXt0cmFuc2Zvcm06c2NhbGUoMTApOyBvcGFjaXR5OjE7IGZpbGw6I0RENDY4ODt9XG4gIDU1JXt0cmFuc2Zvcm06c2NhbGUoMTEpOyBvcGFjaXR5OjE7IGZpbGw6I0Q0NkFCRjt9XG4gIDY1JXt0cmFuc2Zvcm06c2NhbGUoMTIpOyBvcGFjaXR5OjE7IGZpbGw6I0NDOEVGNTt9XG4gIDc1JXt0cmFuc2Zvcm06c2NhbGUoMTMpOyBvcGFjaXR5OjE7IGZpbGw6dHJhbnNwYXJlbnQ7IHN0cm9rZTojQ0M4RUY1OyBzdHJva2Utd2lkdGg6LjU7fVxuICA4NSV7dHJhbnNmb3JtOnNjYWxlKDE3KTsgb3BhY2l0eToxOyBmaWxsOnRyYW5zcGFyZW50OyBzdHJva2U6I0NDOEVGNTsgc3Ryb2tlLXdpZHRoOi4yO31cbiAgOTUle3RyYW5zZm9ybTpzY2FsZSgxOCk7IG9wYWNpdHk6MTsgZmlsbDp0cmFuc3BhcmVudDsgc3Ryb2tlOiNDQzhFRjU7IHN0cm9rZS13aWR0aDouMTt9XG4gIDEwMCV7dHJhbnNmb3JtOnNjYWxlKDE5KTsgb3BhY2l0eToxOyBmaWxsOnRyYW5zcGFyZW50OyBzdHJva2U6I0NDOEVGNTsgc3Ryb2tlLXdpZHRoOjA7fVxufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVIZWFydHtcbiAgMCV7dHJhbnNmb3JtOnNjYWxlKC4yKTt9XG4gIDQwJXt0cmFuc2Zvcm06c2NhbGUoMS4yKTt9XG4gIDEwMCV7dHJhbnNmb3JtOnNjYWxlKDEpO31cbn1cblxuQGtleWZyYW1lcyBhbmltYXRlSGVhcnRPdXR7XG4gIDAle3RyYW5zZm9ybTpzY2FsZSgxLjQpO31cbiAgMTAwJXt0cmFuc2Zvcm06c2NhbGUoMSk7fVxufVxuLmltZ1VzZXJcbntcbmhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuXG4iXX0= */");

/***/ }),

/***/ 27087:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/kids/accueil/status-kids/status-kids.component.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-col.my-thin-col {\n  padding: 0;\n  margin-left: 6px;\n  width: calc(calc(6 / var(--ion-grid-columns, 12.5)) * 100%);\n  max-width: calc(calc(6 / var(--ion-grid-columns, 12.5)) * 100%);\n}\n\n.stylecards {\n  box-shadow: rgba(0, 0, 0, 0.08) -2px 3px 6px;\n  border-radius: 10px;\n}\n\n.labelnblikes {\n  font-size: smaller;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #cecece;\n  justify-content: center;\n  width: 96%;\n  margin-left: 2%;\n  margin-right: 2%;\n  margin-bottom: 5px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg,#247238, #247238, #8EBF25,#8EBF25);\n}\n\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label, .slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\ninput:focus {\n  outline: none;\n}\n\n.ZoneShare {\n  height: 25px;\n  background: #e4e3e3;\n  border-radius: 23px;\n}\n\n.swiper-slide:not(.swiper-slide-active) > div {\n  display: none;\n}\n\nion-slide {\n  width: 4rem !important;\n  margin-right: -2px !important;\n}\n\n.centered {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n\n.myImageUser {\n  border-radius: 15px;\n  width: 30px;\n  height: 30px;\n}\n\nh1 {\n  font-size: 14px;\n  font-weight: 400;\n  margin: 10px 0 0 0;\n  color: #888888;\n}\n\na {\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 10px;\n  display: inline-block;\n  text-decoration: none;\n  color: #008A68;\n}\n\nsvg {\n  cursor: pointer;\n  overflow: visible;\n  width: 60px;\n}\n\nsvg #heart {\n  transform-origin: center;\n  animation: animateHeartOut 0.3s linear forwards;\n}\n\nsvg #main-circ {\n  transform-origin: 29.5px 29.5px;\n}\n\n#checkbox {\n  display: none;\n}\n\n#checkbox:checked + label svg #heart {\n  transform: scale(0.2);\n  fill: #E2264D;\n  animation: animateHeart 0.3s linear forwards 0.25s;\n}\n\n#checkbox:checked + label svg #main-circ {\n  transition: all 2s;\n  animation: animateCircle 0.3s linear forwards;\n  opacity: 1;\n}\n\n#checkbox:checked + label svg #grp1 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n\n#checkbox:checked + label svg #grp1 #oval1 {\n  transform: scale(0) translate(0, -30px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp1 #oval2 {\n  transform: scale(0) translate(10px, -50px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp2 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n\n#checkbox:checked + label svg #grp2 #oval1 {\n  transform: scale(0) translate(30px, -15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp2 #oval2 {\n  transform: scale(0) translate(60px, -15px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp3 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n\n#checkbox:checked + label svg #grp3 #oval1 {\n  transform: scale(0) translate(30px, 0px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp3 #oval2 {\n  transform: scale(0) translate(60px, 10px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp4 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n\n#checkbox:checked + label svg #grp4 #oval1 {\n  transform: scale(0) translate(30px, 15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp4 #oval2 {\n  transform: scale(0) translate(40px, 50px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp5 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n\n#checkbox:checked + label svg #grp5 #oval1 {\n  transform: scale(0) translate(-10px, 20px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp5 #oval2 {\n  transform: scale(0) translate(-60px, 30px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp6 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n\n#checkbox:checked + label svg #grp6 #oval1 {\n  transform: scale(0) translate(-30px, 0px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp6 #oval2 {\n  transform: scale(0) translate(-60px, -5px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp7 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n\n#checkbox:checked + label svg #grp7 #oval1 {\n  transform: scale(0) translate(-30px, -15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp7 #oval2 {\n  transform: scale(0) translate(-55px, -30px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n\n#checkbox:checked + label svg #grp2 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n\n#checkbox:checked + label svg #grp3 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n\n#checkbox:checked + label svg #grp4 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n\n#checkbox:checked + label svg #grp5 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n\n#checkbox:checked + label svg #grp6 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n\n#checkbox:checked + label svg #grp7 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n\n@keyframes animateCircle {\n  40% {\n    transform: scale(10);\n    opacity: 1;\n    fill: #DD4688;\n  }\n  55% {\n    transform: scale(11);\n    opacity: 1;\n    fill: #D46ABF;\n  }\n  65% {\n    transform: scale(12);\n    opacity: 1;\n    fill: #CC8EF5;\n  }\n  75% {\n    transform: scale(13);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0.5;\n  }\n  85% {\n    transform: scale(17);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0.2;\n  }\n  95% {\n    transform: scale(18);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0.1;\n  }\n  100% {\n    transform: scale(19);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0;\n  }\n}\n\n@keyframes animateHeart {\n  0% {\n    transform: scale(0.2);\n  }\n  40% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes animateHeartOut {\n  0% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n.imgUser {\n  height: 100px !important;\n}\n\n#first {\n  height: 190px;\n  width: 250px;\n  border-radius: 10px;\n  object-fit: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1px;\n  margin-left: 20px;\n  margin-right: 5px;\n}\n\n#next {\n  margin: 1px;\n  border-radius: 5px;\n  width: 95px;\n  height: 95px;\n  object-fit: cover;\n}\n\n.nextContainer {\n  display: flex;\n  flex-wrap: wrap;\n  width: auto;\n  height: auto;\n  margin-left: 2px;\n}\n\n.a {\n  background-size: cover;\n  padding: 50px 0;\n}\n\n.iconstyle {\n  height: 40% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy1raWRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUNFO0VBQ0UscUJBQUE7QUFFSjs7QUFBRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDJEQUFBO0VBQ0EsK0RBQUE7QUFHSjs7QUFBRTtFQUNFLDRDQUFBO0VBQTBDLG1CQUFBO0FBSTlDOztBQUZFO0VBQ0Usa0JBQUE7QUFLSjs7QUFIRTtFQUNFLGFBQUE7RUFJQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFHSjs7QUFRSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFMTjs7QUFPSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBTE47O0FBT0k7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFMTjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUxKOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQUpKOztBQU1FO0VBQ0UsWUFBQTtBQUhKOztBQUtFO0VBQ0UsVUFBQTtBQUZKOztBQUdJO0VBQ0UsbUJBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFEUjs7QUFJQTtFQUNFLHVFQUFBO0FBREY7O0FBS0E7RUFHRSwrREFBQTtBQUpGOztBQXdIQTtFQUNFLFdBQUE7QUFySEY7O0FBeUhBO0VBQ0UsYUFBQTtBQXRIRjs7QUF5SEE7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQXRIRjs7QUEwSEE7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O0FBd0VBO0VBRUUsc0JBQUE7QUF0RUYiLCJmaWxlIjoic3RhdHVzLWtpZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIGlvbi1jb2wubXktdGhpbi1jb2wge1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIHdpZHRoOiBjYWxjKGNhbGMoNiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyLjUpKSAqIDEwMCUpO1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKGNhbGMoNiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyLjUpKSAqIDEwMCUpO1xyXG4gIH1cclxuXHJcbiAgLnN0eWxlY2FyZHN7XHJcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA4JSkgLTJweCAzcHggNnB4IDtib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAubGFiZWxuYmxpa2Vze1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIH1cclxuICAjY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBEYXJrR3JlZW47IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMjQ3MjM4LCAjMjQ3MjM4LCAgIzhFQkYyNSwjOEVCRjI1KTtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC8vIGNzcyBidXR0b25cclxuICAkcnVsZXI6IDE2cHg7XHJcbiAgJGNvbG9yLXJlZDogIzcyNmI2YjtcclxuICAkY29sb3ItYmc6ICNFQkVDRjA7XHJcbiAgJGNvbG9yLXNoYWRvdzogI0JBQkVDQztcclxuICAkY29sb3Itd2hpdGU6ICNGRkY7XHJcblxyXG5cclxuICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDM2JTtcclxuICAgICAgZm9udC1zaXplOiAyLjBlbTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjBlbTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUyJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuICAubXlGb290ZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCAxcHggI2NlY2VjZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5teWdhbGxlcnl7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gIH1cclxuICBpb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbntcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyNDcyMzg7XHJcbiAgICAgICAgd2lkdGg6IDEwcHggO1xyXG4gICAgICAgIGhlaWdodDogMTBweCA7XHJcbiAgICAgICAgb3BhY2l0eTogNS4yO1xyXG4gIH1cclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyNDcyMzgsICMyNDcyMzgsICAjOEVCRjI1LCM4RUJGMjUpO1xyXG5cclxufVxyXG5cclxuLnNoYWRvd2JveCB7XHJcbiAvLyBib3JkZXI6IDFweCBzb2xpZCAjOEVCRjI1O1xyXG4gLy8gYm94LXNoYWRvdzogMnB4IDFweCAxcHggIzI0NzIzODtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmLCAjZGRkIDQwJSwgI2NjYyk7XHJcbn1cclxuXHJcblxyXG4vL1xyXG5cclxuXHJcblxyXG4vLyAuY2xlYXJ7XHJcbi8vICAgY2xlYXI6IGJvdGg7XHJcbi8vIH1cclxuXHJcblxyXG4vLyAuc2xpZGUtdG9nZ2xle1xyXG4vLyAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vIC5zbGlkZW1lbnV7XHJcbi8vICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4vLyAgIG1heC13aWR0aDogMTAwJTtcclxuLy8gICBtYXJnaW46IDUwcHggYXV0bztcclxuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyB9XHJcblxyXG4vLyAuc2xpZGVtZW51IGxhYmVse1xyXG4vLyAgIHdpZHRoOiAyNSU7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgIGNvbG9yOiAjMzMzO1xyXG4vLyAgIG9wYWNpdHk6IDAuMjtcclxuXHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbi8vIC5zbGlkZW1lbnUgbGFiZWwgLmljb257XHJcbi8vICAgZm9udC1zaXplOiAyMHB4O1xyXG4vLyAgIGJvcmRlcjogc29saWQgMnB4ICMzMzM7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGhlaWdodDogNTBweDtcclxuLy8gICB3aWR0aDogNTBweDtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBtYXJnaW46IDAgYXV0bztcclxuLy8gICBsaW5lLWhlaWdodDogNTBweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vIH1cclxuXHJcbi8vIC8qQmFyIFN0eWxlKi9cclxuXHJcblxyXG5cclxuLy8gLnNsaWRlciAuYmFye1xyXG4vLyAgIHdpZHRoOiA1MCU7XHJcbi8vICAgaGVpZ2h0OiA1cHg7XHJcbi8vICAgYmFja2dyb3VuZDogcmdiKDEsIDY4LCAzNyk7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAvKkFuaW1hdGlvbnMqL1xyXG4vLyAuc2xpZGVtZW51IGxhYmVsLCAuc2xpZGVyIC5iYXIge1xyXG4vLyAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcclxuLy8gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcclxuLy8gICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcclxuLy8gfVxyXG5cclxuLy8gLypUb2dnbGUqL1xyXG5cclxuLy8gLnNsaWRlbWVudSAuc2xpZGUtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbHtcclxuLy8gICBvcGFjaXR5OiAxO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMDsgfVxyXG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDMwJTsgfVxyXG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTM6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDUwJTsgfVxyXG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTQ6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDc1JTsgfVxyXG5cclxuXHJcblxyXG4vLyBuYXYge1xyXG4vLyAgIG1heC13aWR0aDoxMDAlO1xyXG4vLyAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgI2ZmZmZmZiAyNSUsICNmZmZmZmYgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xyXG4vLyAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcclxuLy8gfVxyXG5cclxuLy8gbmF2IHVsIHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMjUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbi8vIH1cclxuXHJcbi8vIG5hdiB1bCBsaSB7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyB9XHJcblxyXG4vLyBuYXYgdWwgbGkgYSB7XHJcbi8vICAgcGFkZGluZzoxMHB4O1xyXG4vLyAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4vLyAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuLy8gICBjb2xvcjogYmxhY2s7XHJcbi8vICAgZm9udC1zaXplOiAxMHB4O1xyXG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gfVxyXG5cclxuLy8gbmF2IHVsIGxpIGE6aG92ZXIge1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbi8vICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4vLyAgIGNvbG9yOiAjOEVCRjI1O1xyXG4vLyB9XHJcblxyXG5cclxuLmNsZWFye1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5cclxuLnNsaWRlLXRvZ2dsZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2xpZGVtZW51e1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggMjBweCAyMHB4IGF1dG87XHJcbiAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2xpZGVtZW51IGxhYmVse1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBvcGFjaXR5OiAwLjI7XHJcblxyXG59XHJcblxyXG4uc2xpZGVtZW51IGxhYmVsOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5zbGlkZW1lbnUgbGFiZWwgc3BhbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiAjMjQ3MjM4O1xyXG59XHJcblxyXG4uc2xpZGVtZW51IGxhYmVsIC5pY29ue1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBib3JkZXI6IHNvbGlkIDJweCAjMjQ3MjM4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKkJhciBTdHlsZSovXHJcblxyXG4uc2xpZGVye1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnNsaWRlciAuYmFye1xyXG4gIHdpZHRoOjUwJTtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcblxyXG4vKkFuaW1hdGlvbnMqL1xyXG4uc2xpZGVtZW51IGxhYmVsLCAuc2xpZGVyIC5iYXIge1xyXG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLypUb2dnbGUqL1xyXG5cclxuLnNsaWRlbWVudSAuc2xpZGUtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuXHJcbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMDsgfVxyXG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDI1JTsgfVxyXG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTM6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDUwJTsgfVxyXG4uSGVhZGVyRmlsdGVye1xyXG4gIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG4gICAvLyBoZWlnaHQ6IDUlO1xyXG5cclxufVxyXG4uQmFkeUZpbHRlcntcclxuXHJcbn1cclxuXHJcblxyXG5cclxuICNjYXJ0LWJhZGdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuIH1cclxuXHJcbiAub3V0dGVyLWJhZGdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIC8vYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gIH1cclxuICAuaW5uZXItYmFkZ2UtT0sge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBsZWZ0OiAtMjBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHJcbiAgfVxyXG4gIC5pbm5lci1iYWRnZS1PSyAuYmFkZ2VDYW5jZWx7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIC5pbm5lci1iYWRnZS1LTyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaW5uZXItYmFkZ2UtS08gLmJhZGdlQ2FuY2Vse1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG5cclxuICAuaW5uZXItYmFkZ2UtVGNoYXQge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yM3B4O1xyXG4gICAgbGVmdDogLTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmlubmVyLWJhZGdlLVRjaGF0IC5iYWRnZUNhbmNlbHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuaW5wdXQ6Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gdWwge1xyXG4vLyAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuLy8gICB3aWR0aDogNTAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIGgzIHtcclxuLy8gICBmb250OiBib2xkIDIwcHgvMS41IEhlbHZldGljYSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuLy8gfVxyXG5cclxuLy8gbGkgaW1nIHtcclxuLy8gICBmbG9hdDogbGVmdDtcclxuLy8gICBtYXJnaW46IDAgMTVweCAwIDA7XHJcbi8vIH1cclxuXHJcbi8vIGxpIHAge1xyXG4vLyAgIGZvbnQ6IDIwMCAxMnB4LzEuNSBHZW9yZ2lhLCBUaW1lcyBOZXcgUm9tYW4sIHNlcmlmO1xyXG4vLyB9XHJcblxyXG4vLyBsaSB7XHJcbi8vICAgcGFkZGluZzogMTBweDtcclxuLy8gICBvdmVyZmxvdzogYXV0bztcclxuLy8gfVxyXG5cclxuLy8gbGk6aG92ZXIge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyB9XHJcblxyXG4vLyAuaW1hZ2VzIHtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICB9XHJcblxyXG4vLyAgIC5pbWFnZXMgLlVzZXJQb3N0ZWQge1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgd2lkdGg6IDQwJTtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHRvcDoxMHB4O1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gICB9XHJcblxyXG4uWm9uZVNoYXJle1xyXG4gICAvLyBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U0ZTNlMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbn1cclxuLnN3aXBlci1zbGlkZTpub3QoLnN3aXBlci1zbGlkZS1hY3RpdmUpID4gZGl2IHtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuaW9uLXNsaWRlIHtcclxuICB3aWR0aDogNHJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogLTJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuLmNlbnRlcmVkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgbGVmdDogNXB4O1xyXG59XHJcbi5teUltYWdlVXNlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuaDF7Zm9udC1zaXplOjE0cHg7IGZvbnQtd2VpZ2h0OjQwMDsgbWFyZ2luOjEwcHggMCAwIDA7IGNvbG9yOiM4ODg4ODg7fVxyXG5cclxuYXtmb250LXNpemU6MTJweDsgZm9udC13ZWlnaHQ6Ym9sZDsgbWFyZ2luLXRvcDoxMHB4OyBkaXNwbGF5OmlubGluZS1ibG9jazsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7IGNvbG9yOiMwMDhBNjg7fVxyXG5cclxuc3Zne1xyXG4gIGN1cnNvcjpwb2ludGVyOyBvdmVyZmxvdzp2aXNpYmxlOyB3aWR0aDo2MHB4O1xyXG4gICNoZWFydHt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjsgYW5pbWF0aW9uOmFuaW1hdGVIZWFydE91dCAuM3MgbGluZWFyIGZvcndhcmRzO31cclxuICAjbWFpbi1jaXJje3RyYW5zZm9ybS1vcmlnaW46MjkuNXB4IDI5LjVweDt9XHJcbn1cclxuXHJcbiNjaGVja2JveHtkaXNwbGF5Om5vbmU7fVxyXG5cclxuI2NoZWNrYm94OmNoZWNrZWQgKyBsYWJlbCBzdmd7XHJcbiAgICAjaGVhcnR7dHJhbnNmb3JtOnNjYWxlKC4yKTsgZmlsbDojRTIyNjREOyBhbmltYXRpb246YW5pbWF0ZUhlYXJ0IC4zcyBsaW5lYXIgZm9yd2FyZHMgLjI1czt9XHJcbiAgICAjbWFpbi1jaXJje3RyYW5zaXRpb246YWxsIDJzOyBhbmltYXRpb246YW5pbWF0ZUNpcmNsZSAuM3MgbGluZWFyIGZvcndhcmRzOyBvcGFjaXR5OjE7fVxyXG4gICAgI2dycDF7XHJcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcclxuICAgICAgI292YWwxe1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoMCwgLTMwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjouNXMgdHJhbnNmb3JtIC4zczt9XHJcbiAgICAgICNvdmFsMntcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKDEwcHgsIC01MHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246MS41cyB0cmFuc2Zvcm0gLjNzO31cclxuICAgIH1cclxuICAgICNncnAye1xyXG4gICAgICBvcGFjaXR5OjE7IHRyYW5zaXRpb246LjFzIGFsbCAuM3M7XHJcbiAgICAgICNvdmFsMXtcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKDMwcHgsIC0xNXB4KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246LjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgICAjb3ZhbDJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSg2MHB4LCAtMTVweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOjEuNXMgdHJhbnNmb3JtIC4zczt9XHJcbiAgICB9XHJcbiAgICAjZ3JwM3tcclxuICAgICAgb3BhY2l0eToxOyB0cmFuc2l0aW9uOi4xcyBhbGwgLjNzO1xyXG4gICAgICAjb3ZhbDF7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjouNXMgdHJhbnNmb3JtIC4zczt9XHJcbiAgICAgICNvdmFsMntcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKDYwcHgsIDEwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoxLjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgfVxyXG4gICAgI2dycDR7XHJcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcclxuICAgICAgI292YWwxe1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoMzBweCwgMTVweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOi41cyB0cmFuc2Zvcm0gLjNzO31cclxuICAgICAgI292YWwye1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoNDBweCwgNTBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOjEuNXMgdHJhbnNmb3JtIC4zczt9XHJcbiAgICB9XHJcbiAgICAjZ3JwNXtcclxuICAgICAgb3BhY2l0eToxOyB0cmFuc2l0aW9uOi4xcyBhbGwgLjNzO1xyXG4gICAgICAjb3ZhbDF7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgtMTBweCwgMjBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOi41cyB0cmFuc2Zvcm0gLjNzO31cclxuICAgICAgI292YWwye1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoLTYwcHgsIDMwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoxLjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgfVxyXG4gICAgI2dycDZ7XHJcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcclxuICAgICAgI292YWwxe1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoLTMwcHgsIDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOi41cyB0cmFuc2Zvcm0gLjNzO31cclxuICAgICAgI292YWwye1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoLTYwcHgsIC01cHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoxLjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgfVxyXG4gICAgI2dycDd7XHJcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcclxuICAgICAgI292YWwxe1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoLTMwcHgsIC0xNXB4KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246LjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgICAjb3ZhbDJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgtNTVweCwgLTMwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoxLjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgfVxyXG4gICAgI2dycDJ7b3BhY2l0eToxOyB0cmFuc2l0aW9uOi4xcyBvcGFjaXR5IC4zczt9XHJcbiAgICAjZ3JwM3tvcGFjaXR5OjE7IHRyYW5zaXRpb246LjFzIG9wYWNpdHkgLjNzO31cclxuICAgICNncnA0e29wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgb3BhY2l0eSAuM3M7fVxyXG4gICAgI2dycDV7b3BhY2l0eToxOyB0cmFuc2l0aW9uOi4xcyBvcGFjaXR5IC4zczt9XHJcbiAgICAjZ3JwNntvcGFjaXR5OjE7IHRyYW5zaXRpb246LjFzIG9wYWNpdHkgLjNzO31cclxuICAgICNncnA3e29wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgb3BhY2l0eSAuM3M7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVDaXJjbGV7XHJcbiAgNDAle3RyYW5zZm9ybTpzY2FsZSgxMCk7IG9wYWNpdHk6MTsgZmlsbDojREQ0Njg4O31cclxuICA1NSV7dHJhbnNmb3JtOnNjYWxlKDExKTsgb3BhY2l0eToxOyBmaWxsOiNENDZBQkY7fVxyXG4gIDY1JXt0cmFuc2Zvcm06c2NhbGUoMTIpOyBvcGFjaXR5OjE7IGZpbGw6I0NDOEVGNTt9XHJcbiAgNzUle3RyYW5zZm9ybTpzY2FsZSgxMyk7IG9wYWNpdHk6MTsgZmlsbDp0cmFuc3BhcmVudDsgc3Ryb2tlOiNDQzhFRjU7IHN0cm9rZS13aWR0aDouNTt9XHJcbiAgODUle3RyYW5zZm9ybTpzY2FsZSgxNyk7IG9wYWNpdHk6MTsgZmlsbDp0cmFuc3BhcmVudDsgc3Ryb2tlOiNDQzhFRjU7IHN0cm9rZS13aWR0aDouMjt9XHJcbiAgOTUle3RyYW5zZm9ybTpzY2FsZSgxOCk7IG9wYWNpdHk6MTsgZmlsbDp0cmFuc3BhcmVudDsgc3Ryb2tlOiNDQzhFRjU7IHN0cm9rZS13aWR0aDouMTt9XHJcbiAgMTAwJXt0cmFuc2Zvcm06c2NhbGUoMTkpOyBvcGFjaXR5OjE7IGZpbGw6dHJhbnNwYXJlbnQ7IHN0cm9rZTojQ0M4RUY1OyBzdHJva2Utd2lkdGg6MDt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZUhlYXJ0e1xyXG4gIDAle3RyYW5zZm9ybTpzY2FsZSguMik7fVxyXG4gIDQwJXt0cmFuc2Zvcm06c2NhbGUoMS4yKTt9XHJcbiAgMTAwJXt0cmFuc2Zvcm06c2NhbGUoMSk7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVIZWFydE91dHtcclxuICAwJXt0cmFuc2Zvcm06c2NhbGUoMS40KTt9XHJcbiAgMTAwJXt0cmFuc2Zvcm06c2NhbGUoMSk7fVxyXG59XHJcbi5pbWdVc2VyXHJcbntcclxuaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4jZmlyc3Qge1xyXG4gIGhlaWdodDogMTkwcHg7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuXHJcbiNuZXh0IHtcclxuICBtYXJnaW46IDFweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDk1cHg7XHJcbiAgaGVpZ2h0OiA5NXB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5uZXh0Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLmEge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG59XHJcbi5pY29uc3R5bGV7XHJcblxyXG4gIGhlaWdodDogNDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 65994:
/*!********************************************************************!*\
  !*** ./src/app/layouts/kids/comments-kids/comments-kids.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item.commentaire {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: fixed;\n  display: block;\n  width: 97%;\n  margin: 5px;\n  --background: rgba(128, 128, 128, 0.507);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLWtpZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsU0FBQTtFQUNFLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0FBQUoiLCJmaWxlIjoiY29tbWVudHMta2lkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS5jb21tZW50YWlyZVxyXG57XHJcbiAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MDcpO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 78965:
/*!****************************************************************************************************!*\
  !*** ./src/app/layouts/kids/profil/display-img-profil-kids/display-img-profil-kids.component.scss ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNwbGF5LWltZy1wcm9maWwta2lkcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 40275:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/accueil/accueil.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [isKid]=\"true\"> </app-header>\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\"\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <div style=\"display:flex;flex-wrap:wrap;justify-content:space-around;width:100%\">\n      <div class=\"my-thin-col stylecards\" *ngFor=\"let post of posts \">\n        <app-status-kids\n          [post]=\"post\"\n          [user]=\"user$\"\n          (disLikeFn)=\"disLike(post)\"\n          (likeFn)=\"like(post)\"\n        ></app-status-kids>\n      </div>\n    </div>\n  </ion-grid>\n  <ion-infinite-scroll threshold=\"5%\" (ionInfinite)=\"loadMore($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"crescent\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ 4077:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/accueil/status-kids/status-kids.component.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div *ngIf=\"newMediaFiles.length!==0;else noImage\" style=\"padding:5px;margin:5px;width:180px\">\n  <div>\n    <div *ngIf=\"isUserConnected != post.user.id && follower === false\">\n      <ion-row\n        style=\"height: 40px; text-align: initial\"\n        routerLink=\"/profil/{{ post.user.id }}/kids\"\n      >\n        <ion-col size=\"3\">\n          <ion-avatar>\n            <img [src]=\"apiImgUser + post?.user?.photo\" class=\"myImageUser\" />\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"9\" style=\"margin-left: 35px; margin-top: -77px\">\n          <ion-label\n            style=\"color: gray; margin-top: 45px; font-size: x-small\"\n            >{{ post.user.name }}</ion-label\n          >\n          <ion-label style=\"color: gray; font-size: xx-small; display: block\">{{\n            post.createdAt | date\n          }}</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf=\"isUserConnected === post.user.id\">\n      <ion-row\n        style=\"height: 40px; text-align: initial\"\n        routerLink=\"/tabs/profilkids/{{ post.user.id }}\"\n      >\n        <ion-col size=\"3\">\n          <ion-avatar>\n            <img [src]=\"apiImgUser + post?.user?.photo\" class=\"myImageUser\" />\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"9\" style=\"margin-left: 35px; margin-top: -77px\">\n          <ion-label\n            style=\"color: gray; margin-top: 45px; font-size: x-small\"\n            >{{ post.user.name }}</ion-label\n          >\n          <ion-label style=\"color: gray; font-size: xx-small; display: block\">{{\n            post.createdAt | date\n          }}</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf=\"follower === true && isUserConnected != post.user.id\">\n      <ion-row\n        style=\"height: 40px; text-align: initial\"\n        routerLink=\"/tabs/profilkids/{{ post.user.id }}\"\n      >\n        <ion-col size=\"3\">\n          <ion-avatar>\n            <img [src]=\"apiImgUser + post?.user?.photo\" class=\"myImageUser\" />\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"9\" style=\"margin-left: 35px; margin-top: -77px\">\n          <ion-label\n            style=\"color: gray; margin-top: 45px; font-size: x-small\"\n            >{{ post.user.name }}</ion-label\n          >\n          <ion-label style=\"color: gray; font-size: xx-small; display: block\">{{\n            post.createdAt | date\n          }}</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-row>\n      <ion-col size=\"9\">\n        <ion-label style=\"color: gray; font-size: small; font-weight: bold\">{{\n          post.title\n        }}</ion-label>\n        <ion-label\n          style=\"\n            color: gray;\n            font-size: x-small;\n            display: block;\n            width: 250px;\n            text-align: left;\n          \"\n          >{{ post.content }}\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div\n    *ngIf=\"newMediaFiles.length > 0 && thirdNewMediaFiles.length === 0\"\n    (click)=\"displayContent(post)\"\n  >\n    <div style=\"display: flex; justify-content: center\">\n      <div *ngFor=\"let file of newMediaFiles\">\n        <ng-container  *ngIf=\"getExt(file.file_name) === 'png'\">\n          <div\n            style=\"width: 150px; margin: 0 auto\"\n            id=\"first\"\n            [style.background-size]=\"'cover'\"\n            [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n            [lazyLoad]=\"apiImg + file?.file_name\"\n            errorImage=\"../../../assets/imgs/150.png\"\n          >\n            <ion-icon></ion-icon>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n          <div\n            style=\"\n              margin-left: 15px;\n              width: 250px;\n              height: 200px;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              border-radius: 10px;\n            \"\n            [style.background-size]=\"'cover'\"\n            [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n            errorImage=\"../../../assets/imgs/150.png\"\n            (click)=\"displayVideo(file)\"\n          >\n            <ion-icon\n              style=\"height: 50px; width: 50px\"\n              name=\"videocam\"\n            ></ion-icon>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"nextContainer\">\n        <div *ngFor=\"let file of mediafiles\">\n          <ng-container *ngIf=\"getExt(file.file_name) === 'png'\">\n            <div\n              id=\"next\"\n              [style.background-size]=\"'cover'\"\n              [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n              [lazyLoad]=\"apiImg + file?.file_name\"\n              errorImage=\"../../../assets/imgs/150.png\"\n            >\n              <ion-icon></ion-icon>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n            <div\n              [style.background-size]=\"'cover'\"\n              [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n              errorImage=\"../../../assets/imgs/150.png\"\n              (click)=\"displayVideo(mediafiles)\"\n            >\n              <ion-icon name=\"videocam\"></ion-icon>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style=\"display: flex;flex-direction:column\">\n  <div style=\"display:flex;justify-content:space-around;margin-top:5px\">\n    <div>\n      <ng-container style=\"display:flex;align-items:center\"\n        *ngIf=\"!post.likedBy.includes(user?._id); else dislikedTemp\"\n      >\n        <ion-icon\n          (click)=\"like(post)\"\n          style=\"color: #7F867D;\"\n          name=\"heart-outline\"\n        ></ion-icon>\n        <span style=\"color: #7F867D;\">{{ post.likes }}</span>\n      </ng-container>\n      <ng-template style=\"display:flex;align-items:center\" #dislikedTemp>\n        <ion-icon\n          (click)=\"disLike(post)\"\n          style=\"fill: red;\"\n          name=\"heart\"\n        ></ion-icon>\n        <span style=\"color: #7F867D;\">{{ post.likes }}</span>\n      </ng-template>\n    </div>\n\n    <div style=\"display: flex;\">\n      <div style=\"display:flex;align-items:center\">\n        <ion-icon\n        style=\"color: #7F867D;\"\n          (click)=\"presentModal(post)\"\n          name=\"chatbubble-ellipses-outline\"\n        ></ion-icon>\n        <span style=\"color: #7F867D;\">{{ comments.length }} </span>\n      </div>\n\n      <div>\n        <ng-container style=\"display:flex;align-items:center\" *ngIf=\"!bookmarked; else unbook\">\n          <ion-icon style=\"color: #7F867D;\" (click)=\"bookmark(post)\" name=\"bookmark-outline\"></ion-icon>\n          <span style=\"color: #7F867D;\">{{ post?.favorisNb }}</span>\n        </ng-container>\n        <ng-template style=\"display:flex;align-items:center\" #unbook>\n          <ion-icon style=\"color: #7F867D;\" name=\"bookmark\" (click)=\"unBookmark(post)\"></ion-icon>\n          <span style=\"color: #7F867D;\">{{ post?.favorisNb }}</span>\n        </ng-template>\n      </div>\n    </div>\n\n  </div>\n  <div style=\"width: 30%;\">\n    <ng-container *ngIf=\"comments.length!==0 && showComment===false\"  style=\"position: relative;\">\n      <p (click)=\"showComments()\" style=\"display:flex;align-items:center;font-size:10px;position:absolute;right:20px;color:#7F867D;transform:translateX(-100px) translateY(-15px);\">Afficher plus de commentaires <ion-icon name=\"chevron-forward-outline\"></ion-icon></p>\n    </ng-container>\n    <div style=\"display: flex;align-items:center\">\n      <ng-container *ngIf=\"showComment===false; else not\" >\n\n        <ng-container *ngIf=\"comments.length!==0\" >\n          <div style=\"display: flex;align-items:center;padding-top:15px;width:150px\" >\n            <div style=\"display: flex;flex-direction:column;align-items:center\">\n              <img style=\"width: 22px; height:22px;border-radius:50%;object-fit:cover\" src={{apiImgUser+comments[0].user.photo}} alt=\"\">\n              <span style=\"font-size: 12px;\">{{comments[0].user.name}}</span>\n            </div>\n            <span style=\"background-color:#EEEFEF ;margin:2px;padding:7px 10px;width:220px;height:30px;border-radius:15px;text-align:start;text-overflow:ellipsis;overflow:hidden;white-space: nowrap;font-size:10px\">{{comments[0].content}}</span>\n          </div>\n        </ng-container>\n      </ng-container>\n\n    </div>\n    <div style=\"margin-top: 10px;\">\n      <ng-template #not>\n        <p (click)=\"hideComments()\" style=\"display:flex;align-items:center;font-size:10px;position:absolute;right:20px;color:#7F867D;transform:translateX(-100px)\">Afficher moins de commentaires <ion-icon name=\"chevron-down-outline\"></ion-icon></p>\n      </ng-template>\n      <ng-container *ngIf=\"showComment===true\">\n        <div style=\"display: flex;align-items:center;margin:3px 0;width:150px\" *ngFor=\"let item of comments.slice().reverse()\" >\n          <div style=\"display: flex;flex-direction:column;align-items:center\">\n            <img style=\"width: 22px; height:22px;border-radius:50%;object-fit:cover\" src={{apiImgUser+item.user.photo}} alt=\"\">\n            <span style=\"font-size: 12px;\">{{item.user.name}}</span>\n          </div>\n          <span style=\"background-color:#EEEFEF ;margin:2px;padding:7px 10px;width:220px;height:30px;border-radius:15px;text-align:start;text-overflow:ellipsis;overflow:hidden;white-space: nowrap;font-size:10px\">{{item.content}}</span>\n        </div>\n      </ng-container>\n    </div>\n    <div style=\"display: flex;justify-content:space-between;align-items:center; background-color:#EEEFEF; border-radius:10px;margin:10px 0 0 0\">\n      <div style=\"display: flex;align-items:center;padding:0px 10px\">\n        <input placeholder=\"Ecrivez un commentaire ...\" style=\"font-size:10px;border: none; background-color:#EEEFEF;padding:2px;width:150px\" type=\"text\">\n      </div>\n      <!-- <div style=\"display: flex;\">\n        <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/pics.svg\" alt=\"\">\n        <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/camera.svg\" alt=\"\">\n        <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/gif.svg\" alt=\"\">\n        <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/attach.svg\" alt=\"\">\n        <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/mic.svg\" alt=\"\">\n      </div> -->\n    </div>\n  </div>\n  </div>\n</div>\n<ng-template style=\"padding:10px;\" #noImage>\n  <div>\n    <div *ngIf=\"isUserConnected !== post.user.id && follower === false\">\n      <ion-row\n        style=\"height: 40px; text-align: initial\"\n        routerLink=\"/profil/{{ post.user.id }}/kids\"\n      >\n        <ion-col size=\"3\">\n          <ion-avatar>\n            <img [src]=\"apiImgUser + post?.user?.photo\" class=\"myImageUser\" />\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"9\" style=\"margin-left: 35px; margin-top: -77px\">\n          <ion-label\n            style=\"color: gray; margin-top: 45px; font-size: x-small\"\n            >{{ post.user.name }}</ion-label\n          >\n          <ion-label style=\"color: gray; font-size: xx-small; display: block\">{{\n            post.createdAt | date\n          }}</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf=\"isUserConnected === post.user.id\">\n      <ion-row\n        style=\"height: 40px; text-align: initial\"\n        routerLink=\"/tabs/profilkids/{{ post.user.id }}\"\n      >\n        <ion-col size=\"3\">\n          <ion-avatar>\n            <img [src]=\"apiImgUser + post?.user?.photo\" class=\"myImageUser\" />\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"9\" style=\"margin-left: 35px; margin-top: -77px\">\n          <ion-label\n            style=\"color: gray; margin-top: 45px; font-size: x-small\"\n            >{{ post.user.name }}</ion-label\n          >\n          <ion-label style=\"color: gray; font-size: xx-small; display: block\">{{\n            post.createdAt | date\n          }}</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf=\"follower === true && isUserConnected != post.user.id\">\n      <ion-row\n        style=\"height: 40px; text-align: initial\"\n        routerLink=\"/tabs/profilkids/{{ post.user.id }}\"\n      >\n        <ion-col size=\"3\">\n          <ion-avatar>\n            <img [src]=\"apiImgUser + post?.user?.photo\" class=\"myImageUser\" />\n          </ion-avatar>\n        </ion-col>\n        <ion-col size=\"9\" style=\"margin-left: 35px; margin-top: -77px\">\n          <ion-label\n            style=\"color: gray; margin-top: 45px; font-size: x-small\"\n            >{{ post.user.name }}</ion-label\n          >\n          <ion-label style=\"color: gray; font-size: xx-small; display: block\">{{\n            post.createdAt | date\n          }}</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-row>\n      <ion-col size=\"9\">\n        <ion-label style=\"color: gray; font-size: small; font-weight: bold\">{{\n          post.title\n        }}</ion-label>\n        <ion-label\n          style=\"\n            color: gray;\n            font-size: x-small;\n            display: block;\n            width: 250px;\n            text-align: left;\n          \"\n          >{{ post.content }}\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div\n    *ngIf=\"newMediaFiles.length > 0 && thirdNewMediaFiles.length === 0\"\n    (click)=\"displayContent(post)\"\n  >\n    <div style=\"display: flex; justify-content: center\">\n      <div *ngFor=\"let file of newMediaFiles\">\n        <ng-container  *ngIf=\"getExt(file.file_name) === 'png'\">\n          <div\n            style=\"width: 150px; margin: 0 auto\"\n            id=\"first\"\n            [style.background-size]=\"'cover'\"\n            [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n            [lazyLoad]=\"apiImg + file?.file_name\"\n            errorImage=\"../../../assets/imgs/150.png\"\n          >\n            <ion-icon></ion-icon>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n          <div\n            style=\"\n              margin-left: 15px;\n              width: 250px;\n              height: 200px;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              border-radius: 10px;\n            \"\n            [style.background-size]=\"'cover'\"\n            [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n            errorImage=\"../../../assets/imgs/150.png\"\n            (click)=\"displayVideo(file)\"\n          >\n            <ion-icon\n              style=\"height: 50px; width: 50px\"\n              name=\"videocam\"\n            ></ion-icon>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"nextContainer\">\n        <div *ngFor=\"let file of mediafiles\">\n          <ng-container *ngIf=\"getExt(file.file_name) === 'png'\">\n            <div\n              id=\"next\"\n              [style.background-size]=\"'cover'\"\n              [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n              [lazyLoad]=\"apiImg + file?.file_name\"\n              errorImage=\"../../../assets/imgs/150.png\"\n            >\n              <ion-icon></ion-icon>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n            <div\n              [style.background-size]=\"'cover'\"\n              [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n              errorImage=\"../../../assets/imgs/150.png\"\n              (click)=\"displayVideo(mediafiles)\"\n            >\n              <ion-icon name=\"videocam\"></ion-icon>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n    <div style=\"display: flex;flex-direction:column\">\n    <div style=\"display:flex;justify-content:space-around\">\n      <div>\n        <div style=\"display:flex;align-items:center\"\n          *ngIf=\"!post.likedBy.includes(user?._id); else dislikedTemp\"\n        >\n          <ion-icon\n            (click)=\"like(post)\"\n            name=\"heart-outline\"\n            style=\"color: #7F867D;\"\n          ></ion-icon>\n          <span style=\"color: #7F867D;\">{{ post.likes }}</span>\n        </div>\n        <ng-template style=\"display:flex;align-items:center\" #dislikedTemp>\n          <ion-icon\n            (click)=\"disLike(post)\"\n            style=\"fill: red;\"\n            name=\"heart\"\n          ></ion-icon>\n          <span style=\"color: #7F867D;\">{{ post.likes }}</span>\n        </ng-template>\n      </div>\n\n      <div style=\"display:flex\">\n        <div style=\"display:flex;align-items:center\">\n          <ion-icon\n            (click)=\"presentModal(post)\"\n            style=\"color: #7F867D;\"\n            name=\"chatbubble-ellipses-outline\"\n          ></ion-icon>\n          <span style=\"color: #7F867D;\">{{ comments.length }} </span>\n        </div>\n\n        <div>\n          <ng-container style=\"display:flex;align-items:center\" *ngIf=\"!bookmarked; else unbook\">\n            <ion-icon style=\"color: #7F867D;\" (click)=\"bookmark(post)\" name=\"bookmark-outline\"></ion-icon>\n            <span style=\"color: #7F867D;\">{{ post?.favorisNb }}</span>\n          </ng-container>\n          <ng-template style=\"display:flex;align-items:center\" #unbook>\n            <ion-icon style=\"color: #7F867D;\" name=\"bookmark\" (click)=\"unBookmark(post)\"></ion-icon>\n            <span style=\"color: #7F867D;\">{{ post?.favorisNb }}</span>\n          </ng-template>\n        </div>\n      </div>\n\n    </div>\n    <div style=\"width: 90%;margin:0 5px\">\n      <div style=\"display: flex;align-items:center\">\n        <ng-container *ngIf=\"showComment===false; else not\" >\n          <ng-container *ngIf=\"comments.length!==0\"  style=\"position: relative;\">\n            <p (click)=\"showComments()\" style=\"display:flex;align-items:center;font-size:10px;position:absolute;right:20px;color:#7F867D;transform:translateY(-20px)\">Afficher plus de commentaires <ion-icon name=\"chevron-forward-outline\"></ion-icon></p>\n          </ng-container>\n          <ng-container *ngIf=\"comments.length!==0\" >\n            <div style=\"display: flex;align-items:center;padding-top:15px\" >\n              <div style=\"display: flex;flex-direction:column;align-items:center\">\n                <img style=\"width: 22px; height:22px;border-radius:50%;object-fit:cover\" src={{apiImgUser+comments[0].user.photo}} alt=\"\">\n                <span style=\"font-size: 12px;\">{{comments[0].user.name}}</span>\n              </div>\n              <span style=\"background-color:#EEEFEF ;margin:2px;padding:7px 10px;width:220px;height:30px;border-radius:15px;text-align:start;text-overflow:ellipsis;overflow:hidden;white-space: nowrap;font-size:10px\">{{comments[0].content}}</span>\n            </div>\n          </ng-container>\n        </ng-container>\n        <ng-template #not>\n          <p (click)=\"hideComments()\" style=\"display:flex;align-items:center;font-size:10px;position:absolute;right:20px;color:#7F867D\">Afficher moins de commentaires <ion-icon name=\"chevron-down-outline\"></ion-icon></p>\n\n        </ng-template>\n      </div>\n      <div style=\"margin-top: 10px;\">\n        <ng-container *ngIf=\"showComment===true\">\n          <div style=\"display: flex;align-items:center;margin:3px 0\" *ngFor=\"let item of comments.slice().reverse()\" >\n            <div style=\"display: flex;flex-direction:column;align-items:center\">\n              <img style=\"width: 22px; height:22px;border-radius:50%;object-fit:cover\" src={{apiImgUser+item.user.photo}} alt=\"\">\n              <span style=\"font-size: 12px;\">{{item.user.name}}</span>\n            </div>\n            <span style=\"background-color:#EEEFEF ;margin:2px;padding:7px 10px;width:220px;height:30px;border-radius:15px;text-align:start;text-overflow:ellipsis;overflow:hidden;white-space: nowrap;font-size:10px\">{{item.content}}</span>\n          </div>\n        </ng-container>\n      </div>\n      <div style=\"display: flex;justify-content:space-between;align-items:center; background-color:#EEEFEF; border-radius:10px;margin:10px 0 20px 0\">\n        <div style=\"display: flex;align-items:center;padding:0px 10px\">\n          <img style=\"width: 30px; height:30px;border-radius:50%;object-fit:cover\"  src={{apiImgUser+user.photo}} routerLink=\"/tabs/layouts/coachprofile/{{ post.user.id || post.post.user.id }}/me\" />\n          <input placeholder=\"Ecrivez un commentaire ...\" style=\"margin-left:5px;font-size:15px;border: none; background-color:#EEEFEF;margin-right:10px;padding:10px\" type=\"text\">\n        </div>\n        <div style=\"display: flex;\">\n          <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/pics.svg\" alt=\"\">\n          <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/camera.svg\" alt=\"\">\n          <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/gif.svg\" alt=\"\">\n          <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/attach.svg\" alt=\"\">\n          <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/mic.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    </div>\n</ng-template>\n\n");

/***/ }),

/***/ 64227:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/comments-kids/comments-kids.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title style=\"color: white;\"\n     >Comments</ion-title\n    >\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismissModal()\"><ion-icon name=\"close-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <ion-list *ngFor=\"let item of comments\">\n    <ion-item-sliding>\n      <ng-container *ngIf=\"item?.user?._id===userid; else dislikedTemp\">\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\">\n            <ion-icon\n              slot=\"icon-only\"\n              (click)=\"deleteComment(item._id)\"\n              name=\"trash\"\n            ></ion-icon>\n          </ion-item-option>\n          <ion-item-option>\n            <ion-icon\n              slot=\"icon-only\"\n              name=\"create-outline\"\n              (click)=\"updateComment(item)\"\n            ></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n\n        <ion-item>\n          <ion-avatar slot=\"end\">\n            <ion-img [src]=\"apiImgUser+item?.user?.photo\"></ion-img>\n          </ion-avatar>\n          <ion-label style=\"text-align: end\">\n            <h2>{{item?.user?.name}} </h2>\n            <p>{{item?.content}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item-options side=\"start\">\n          <ion-item-option color=\"danger\">\n            <ion-icon slot=\"icon-only\" name=\"person-outline\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ng-container>\n\n      <ng-template #dislikedTemp>\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <ion-img [src]=\"apiImgUser+item?.user$.photo\"></ion-img>\n          </ion-avatar>\n          <ion-label>\n            <h2>{{item?.user?.name}} </h2>\n            <p>{{item?.content}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item-options side=\"start\">\n          <ion-item-option color=\"danger\">\n            <ion-icon slot=\"icon-only\" name=\"person-outline\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ng-template>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-item class=\"commentaire\" [formGroup]=\"commentForm\">\n    <ion-col size=\"8\" style=\"text-align: start\">\n      <ng-container *ngIf=\"updateCom; else noupdate\">\n        <ion-input\n          class=\"commentaire\"\n          type=\"text\"\n          value=\"{{selectedCom.content}}\"\n          id=\"contentCom\"\n          name=\"contentCom\"\n          placeholder=\"Ecrire un commentaire\"\n        ></ion-input>\n      </ng-container>\n\n      <ng-template #noupdate>\n        <ion-input\n          class=\"commentaire\"\n          type=\"text\"\n          [(ngModel)]=\"comment.content\"\n          formControlName=\"contentControl\"\n          placeholder=\"Ecrire un commentaire\"\n        ></ion-input>\n      </ng-template>\n    </ion-col>\n    <ion-col size=\"4\" style=\"text-align: end\">\n      <ng-container *ngIf=\"updateCom; else noupdatebutton\">\n        <ion-button\n          class=\"commentaire\"\n          (click)=\"sendCommentUpdate()\"\n          shape=\"round\"\n          fill=\"clear\"\n          size=\"small \"\n        >\n          <ion-icon name=\"send\"></ion-icon>\n        </ion-button>\n      </ng-container>\n      <ng-template #noupdatebutton>\n        <ion-button\n          class=\"commentaire\"\n          [hidden]=\"commentForm.invalid\"\n          (click)=\"sendComment(post)\"\n          shape=\"round\"\n          fill=\"clear\"\n          size=\"small \"\n        >\n          <ion-icon name=\"send\"></ion-icon>\n        </ion-button>\n      </ng-template>\n    </ion-col>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ 47023:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/profil/display-img-profil-kids/display-img-profil-kids.component.html ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\" large>\n        <ion-icon name=\"close-circle-outline\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-col size=\"12\">\n      <img\n     \n        src=\"{{ apiImg +post}}\"\n      />\n\n      <video\n      *ngIf=\"isvideo\"\n        controls\n        width=\"100%\"\n      >\n        <source src=\"{{ apiImg + post }}\" type=\"video/mp4\" />\n      </video>\n\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-title\n        style=\"\n          background-image: linear-gradient(\n            119deg,\n            rgba(92, 99, 91, 1) 0%,\n            rgba(36, 114, 56, 1) 35%,\n            rgb(169, 194, 26) 100%\n          );\n        \"\n      >\n      </ion-title>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_layouts_kids_accueil_accueil_module_ts.js.map