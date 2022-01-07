(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["default-src_app_layouts_home_home_module_ts"],{

/***/ 97550:
/*!******************************************************************!*\
  !*** ./src/app/layouts/home/comments/comments-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsPageRoutingModule": () => (/* binding */ CommentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.page */ 70502);




const routes = [
    {
        path: '',
        component: _comments_page__WEBPACK_IMPORTED_MODULE_0__.CommentsPage
    }
];
let CommentsPageRoutingModule = class CommentsPageRoutingModule {
};
CommentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommentsPageRoutingModule);



/***/ }),

/***/ 66068:
/*!**********************************************************!*\
  !*** ./src/app/layouts/home/comments/comments.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsPageModule": () => (/* binding */ CommentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _comments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments-routing.module */ 97550);
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.page */ 70502);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let CommentsPageModule = class CommentsPageModule {
};
CommentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _comments_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommentsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_1__.CommentsPage]
    })
], CommentsPageModule);



/***/ }),

/***/ 70502:
/*!********************************************************!*\
  !*** ./src/app/layouts/home/comments/comments.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsPage": () => (/* binding */ CommentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_comments_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./comments.page.html */ 36678);
/* harmony import */ var _comments_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.page.scss */ 66621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Shared/Service/comment.service */ 49821);
/* harmony import */ var _Shared_Model_Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Shared/Model/Comment */ 73070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Service/notifications.service */ 43367);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-socket-io */ 75421);












let CommentsPage = class CommentsPage {
    constructor(commentService, modalController, notificationsService, userService, socket) {
        this.commentService = commentService;
        this.modalController = modalController;
        this.notificationsService = notificationsService;
        this.userService = userService;
        this.socket = socket;
        this.comments = [];
        this.apiImgUser = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiImg}User/`;
        this.comment = new _Shared_Model_Comment__WEBPACK_IMPORTED_MODULE_3__.Comment();
        this.notif = { reciever: '', userOwner: '', text: '', postId: '' };
        this.apiImg = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiImg}users/`;
    }
    ngOnInit() {
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            contentControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required)
        });
    }
    sendComment(post) {
        this.comments = [];
        this.notif = { reciever: '', userOwner: '', text: '', postId: '' };
        // eslint-disable-next-line no-underscore-dangle
        this.commentService.addComment(this.comment, post._id).subscribe(res => {
            this.comment = new _Shared_Model_Comment__WEBPACK_IMPORTED_MODULE_3__.Comment();
            this.getCommentByPost();
        });
        this.userService.getMe().subscribe((res) => {
            this.user$ = res.data.data;
            this.notif.reciever = post.user._id;
            this.notif.userOwner = this.user$._id;
            this.notif.text = "a commenté votre status";
            this.notif.postId = post._id;
            this.socket.connect();
            this.socket.emit('notifications', { msg: 'hey' });
            this.socket.fromEvent('notifications').subscribe((res) => {
                this.createNotif(this.notif);
            });
        });
    }
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    getCommentByPost() {
        // eslint-disable-next-line no-underscore-dangle
        this.commentService.getCommentByService(this.post._id).subscribe(arg => {
            this.comments = arg;
        });
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true,
        });
    }
    createNotif(notif) {
        this.notificationsService.postNotification(notif).subscribe();
    }
};
CommentsPage.ctorParameters = () => [
    { type: _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_2__.CommentService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_10__.Socket }
];
CommentsPage.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }],
    comments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
CommentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-comments',
        template: _raw_loader_comments_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_comments_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommentsPage);



/***/ }),

/***/ 87407:
/*!*****************************************************!*\
  !*** ./src/app/layouts/home/home-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 59678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    },
    {
        path: 'reactions',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_home_reactions_reactions_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reactions/reactions.module */ 67431)).then(m => m.ReactionsPageModule)
    },
    {
        path: 'comments',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./comments/comments.module */ 66068)).then(m => m.CommentsPageModule)
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 63848:
/*!*********************************************!*\
  !*** ./src/app/layouts/home/home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyLoadImageHooks": () => (/* binding */ LazyLoadImageHooks),
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 87407);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 59678);
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status/status.component */ 64184);
/* harmony import */ var _post_display_post_display_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-display/post-display.module */ 20301);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/component.module */ 55051);
/* harmony import */ var _comments_comments_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments/comments.module */ 66068);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-lazyload-image */ 27260);
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/modules/shared.module */ 57208);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/media/ngx */ 73661);
/* harmony import */ var _awesome_cordova_plugins_media_capture_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/media-capture/ngx */ 42853);
















let LazyLoadImageHooks = class LazyLoadImageHooks extends ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__.IntersectionObserverHooks {
    constructor(toastController) {
        super();
        this.toastController = toastController;
    }
    ;
    setup(attributes) {
        attributes.offset = 10;
        attributes.defaultImagePath = '../../../assets/imgs/150.png';
        attributes.errorImagePath = '../../../assets/imgs/150.png';
        return super.setup(attributes);
    }
};
LazyLoadImageHooks.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController }
];
LazyLoadImageHooks = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injectable)()
], LazyLoadImageHooks);

let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_4__.ComponentModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__.LazyLoadImageModule,
            _comments_comments_module__WEBPACK_IMPORTED_MODULE_5__.CommentsPageModule,
            _post_display_post_display_module__WEBPACK_IMPORTED_MODULE_3__.PostDisplayModule,
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage, _status_status_component__WEBPACK_IMPORTED_MODULE_2__.StatusComponent],
        exports: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage, _status_status_component__WEBPACK_IMPORTED_MODULE_2__.StatusComponent],
        providers: [{ provide: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__.LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File,
            _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_8__.Media, _awesome_cordova_plugins_media_capture_ngx__WEBPACK_IMPORTED_MODULE_9__.MediaCapture],
    })
], HomePageModule);



/***/ }),

/***/ 59678:
/*!*******************************************!*\
  !*** ./src/app/layouts/home/home.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 15521);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 38597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _modal_sheare_modal_sheare_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-sheare/modal-sheare.page */ 74689);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/Service/user.service */ 88838);
/* harmony import */ var _Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/Service/post.service */ 91820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 78345);
/* harmony import */ var src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Service/event.service */ 34489);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ 38605);












let HomePage = class HomePage {
    constructor(modalController, loadingController, toastCtrl, postService, eventService, userService, translate, storage) {
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.postService = postService;
        this.eventService = eventService;
        this.userService = userService;
        this.translate = translate;
        this.storage = storage;
        this.menuLabels = ['Tout', 'Favoris', 'Communauté'];
        this.indexPub = null;
        this.posts = [];
        this.sharedPosts = [];
        this.page = 1;
        this.hello = [];
        this.maximumPages = 10;
        this.user$ = [];
        this.slideOpts = {
            loop: true,
            effect: 'slide',
            freeModeSticky: false,
            width: 55,
            spaceBetween: 25
        };
        this.scrolTo = null;
        this.isScrollTop = false;
        this.messages = [];
        this.currentUser = '';
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        storage.get('lan').then((val) => {
            if (val)
                translate.use(val);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.getMe();
            this.getAllPostsByEvent();
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
        this.userService.getMe().subscribe(res => {
            this.user$ = res.data.data;
            this.postService.getAllfollowingPosts(this.page, this.user$._id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)()).subscribe(res => {
                this.posts = this.posts.concat(res.data.data);
                this.posts = this.posts.concat(res.data.shared);
                this.sharedPosts = res.data.shared;
                this.hello = this.posts.sort(function (x, y) {
                    return +new Date(y.createdAt) - +new Date(x.createdAt);
                });
                if (event) {
                    event.target.complete();
                }
                // console.log(this.hello);
                // this.hello.map(el=>console.log(el.post?.id))
            });
        });
    }
    loadMore(event) {
        this.page++;
        this.getAllPostsByEvent(event);
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_sheare_modal_sheare_page__WEBPACK_IMPORTED_MODULE_2__.ModalShearePage,
                componentProps: {
                    user: this.user$
                }
            });
            yield modal.present();
            yield modal.onWillDismiss().then((result) => {
            });
        });
    }
    doRefresh(event) {
        this.posts = [];
        setTimeout(() => {
            this.getAllPostsByEvent();
            event.target.complete();
        }, 1000);
    }
    getMe() {
        this.userService.getMe().subscribe(res => {
            this.user$ = res.data.data;
        });
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
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Loading...',
                spinner: 'bubbles'
            });
            yield this.loading.present();
        });
    }
    presentToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const myToast = yield this.toastCtrl.create({
                message: 'ok',
                duration: 2000,
                color: 'success',
                position: 'top'
            }).then((toastData) => {
                toastData.present();
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_4__.PostService },
    { type: src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_5__.EventService },
    { type: _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage }
];
HomePage.propDecorators = {
    list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCard, { read: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 20301:
/*!*************************************************************!*\
  !*** ./src/app/layouts/post-display/post-display.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDisplayModule": () => (/* binding */ PostDisplayModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _post_display_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-display.component */ 97119);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);





let PostDisplayModule = class PostDisplayModule {
};
PostDisplayModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule
        ],
        declarations: [_post_display_component__WEBPACK_IMPORTED_MODULE_0__.PostDisplayComponent]
    })
], PostDisplayModule);



/***/ }),

/***/ 66621:
/*!**********************************************************!*\
  !*** ./src/app/layouts/home/comments/comments.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item.commentaire {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: fixed;\n  display: block;\n  width: 97%;\n  margin: 5px;\n  --background: rgba(128, 128, 128, 0.507);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFNBQUE7RUFDRSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBQUFKIiwiZmlsZSI6ImNvbW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLmNvbW1lbnRhaXJlXG57XG4gIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogOTclO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUwNyk7XG59XG4iXX0= */");

/***/ }),

/***/ 38597:
/*!*********************************************!*\
  !*** ./src/app/layouts/home/home.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\nion-buttons ion-button {\n  font-family: \"MyriadPro-Regular\";\n  --border-radius: 30%;\n  border-radius: 30%;\n  background: #332f2f1f;\n  width: 36px;\n  height: 36px;\n}\n\n.ion-activated {\n  border-radius: 50% !important;\n  --background-color: #13131396 !important;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n\n#rowTabFiltre {\n  color: #898b8b;\n  margin: 10px !important;\n}\n\n.unit {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 11px !important;\n}\n\nion-grid {\n  display: grid;\n  justify-content: center;\n}\n\n.clear {\n  clear: both;\n}\n\n#rowTabFiltre ion-col ion-button {\n  --background: #eee;\n  color: #7f867d;\n  font-family: \"MyriadPro-Regular\";\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label,\n.slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\nion-title {\n  text-align: center;\n}\n\n.ZoneShare {\n  height: 45px;\n  background: #e4e3e3;\n  border-radius: 23px;\n  padding-top: 0.3em;\n}\n\n.ZoneShare p {\n  font-size: xx-small;\n  margin-top: 5px;\n  padding: 8px 20px;\n  align-items: flex-start;\n  display: grid;\n}\n\n.row ion-col:first-child {\n  display: flex;\n}\n\nimgProfile {\n  max-width: 75% !important;\n  max-height: 75% !important;\n}\n\n.swiper-slide:not(.swiper-slide-active) > div {\n  display: none;\n}\n\nion-slide {\n  width: 4rem !important;\n  margin-right: 1rem !important;\n}\n\nion-row.bodyFilter {\n  display: grid;\n  grid-gap: 2px;\n  justify-content: normal;\n  margin-top: 10px;\n}\n\nion-fab {\n  margin-bottom: 5rem;\n}\n\nion-fab-button {\n  --background: transparent;\n}\n\n.focus {\n  --ion-item-background: rgb(218, 214, 214);\n  --ion-item-color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,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LG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBeEJGOztBQTJCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBeEJGOztBQTJCQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBeEJGOztBQTJCQTtFQUNFLGtCQUFBO0FBeEJGOztBQTJCQTtFQUVFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsYUFBQTtBQXpCRjs7QUE0QkE7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FBekJGOztBQTRCQTtFQUNFLGFBQUE7QUF6QkY7O0FBNEJBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQXpCRjs7QUE0QkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsbUJBQUE7QUF6QkY7O0FBNEJBO0VBQ0UseUJBQUE7QUF6QkY7O0FBNEJBO0VBQ0UseUNBQUE7RUFDQSxzQkFBQTtBQXpCRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk15cmlhZFByby1SZWd1bGFyXCI7XG4gIC0tYm9yZGVyLXJhZGl1czogMzAlO1xuICBib3JkZXItcmFkaXVzOiAzMCU7XG4gIGJhY2tncm91bmQ6ICMzMzJmMmYxZjtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbn1cblxuLmlvbi1hY3RpdmF0ZWQge1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzEzOTYgIWltcG9ydGFudDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jY29udGFpbmVyIHtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi8vIGNzcyBidXR0b25cbiRydWxlcjogMTZweDtcbiRjb2xvci1yZWQ6ICM3MjZiNmI7XG4kY29sb3ItYmc6ICNlYmVjZjA7XG4kY29sb3Itc2hhZG93OiAjYmFiZWNjO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICBpb24tY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jYXJkLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNiU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTIlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG5cbi5teWdhbGxlcnkge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgYm90dG9tOiA1JTtcblxuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzI0NzIzODtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgb3BhY2l0eTogNS4yO1xuICB9XG59XG5cbi5zaGFkb3dib3gge1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjOEVCRjI1O1xuICAvLyBib3gtc2hhZG93OiAycHggMXB4IDFweCAjMjQ3MjM4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmLCAjZGRkIDQwJSwgI2NjYyk7XG59XG5cbi8vXG5cbiNyb3dUYWJGaWx0cmUge1xuICBjb2xvcjogIzg5OGI4YjtcbiAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC8vIG1hcmdpbi1sZWZ0OiAtMjVweCAhaW1wb3J0YW50O1xuXG59XG5cbi51bml0IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbiNyb3dUYWJGaWx0cmUgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWVlO1xuICBjb2xvcjogIzdmODY3ZDtcbiAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvLVJlZ3VsYXJcIjtcbn1cblxuLnNsaWRlLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZW1lbnUge1xuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMjBweCAyMHB4IGF1dG87XG4gIC8vIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbGlkZW1lbnUgbGFiZWwge1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IGdyZWVuO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5zbGlkZW1lbnUgbGFiZWw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnNsaWRlbWVudSBsYWJlbCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjMjQ3MjM4O1xufVxuXG4uc2xpZGVtZW51IGxhYmVsIC5pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjMjQ3MjM4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLypCYXIgU3R5bGUqL1xuXG4uc2xpZGVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zbGlkZXIgLmJhciB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKkFuaW1hdGlvbnMqL1xuLnNsaWRlbWVudSBsYWJlbCxcbi5zbGlkZXIgLmJhciB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4vKlRvZ2dsZSovXG5cbi5zbGlkZW1lbnUgLnNsaWRlLXRvZ2dsZTpjaGVja2VkICsgbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTE6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhciB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhciB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG5cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMzpjaGVja2VkIH4gLnNsaWRlciAuYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuXG5cbiNjYXJ0LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLm91dHRlci1iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICAvL2JhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA2NHB4O1xufVxuXG4uaW5uZXItYmFkZ2UtT0sge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IC0yMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbm5lci1iYWRnZS1PSyAuYmFkZ2VDYW5jZWwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmlubmVyLWJhZGdlLUtPIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogLTEwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlubmVyLWJhZGdlLUtPIC5iYWRnZUNhbmNlbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmlubmVyLWJhZGdlLVRjaGF0IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjNweDtcbiAgbGVmdDogLTIwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlubmVyLWJhZGdlLVRjaGF0IC5iYWRnZUNhbmNlbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uWm9uZVNoYXJlIHtcbiAgLy8gbWFyZ2luLXRvcDogLTVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBiYWNrZ3JvdW5kOiAjZTRlM2UzO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xuICBwYWRkaW5nLXRvcDogMC4zZW07XG59XG5cbi5ab25lU2hhcmUgcCB7XG4gIGZvbnQtc2l6ZTogeHgtc21hbGw7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4ucm93IGlvbi1jb2w6Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pbWdQcm9maWxlIHtcbiAgbWF4LXdpZHRoOiA3NSUgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNzUlICFpbXBvcnRhbnQ7XG59XG5cbi5zd2lwZXItc2xpZGU6bm90KC5zd2lwZXItc2xpZGUtYWN0aXZlKSA+IGRpdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi1zbGlkZSB7XG4gIHdpZHRoOiA0cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG5pb24tcm93LmJvZHlGaWx0ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuaW9uLWZhYiB7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvY3VzIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiByZ2IoMjE4LCAyMTQsIDIxNCk7XG4gIC0taW9uLWl0ZW0tY29sb3I6IGdyZXk7XG59XG4iXX0= */");

/***/ }),

/***/ 36678:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/home/comments/comments.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar>\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"dismiss()\" large>\n      <ion-icon name=\"close-circle-outline\" size=\"large\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n<ion-content fullscreen>\n  <ion-list *ngFor=\"let item of comments\">\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <ion-img [src]=\"apiImg+item?.user?.photo\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h2>{{item?.user?.name}}</h2>\n        <p>{{item?.content}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-item class=\"commentaire\" [formGroup]=\"commentForm\">\n    <ion-col size=\"8\" style=\"text-align:start;\">\n      <ion-input class=\"commentaire\" type=\"text\" [(ngModel)]=\"comment.content\" formControlName=\"contentControl\"\n        placeholder=\"Ecrire un commentaire\"></ion-input>\n    </ion-col>\n    <ion-col size=\"4\" style=\"text-align:end;\">\n      <ion-button class=\"commentaire\" [hidden]=\"commentForm.invalid\" (click)=\"sendComment(post)\" shape=\"round\"\n        fill=\"clear\" size=\"small \">\n        <ion-icon name=\"send\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-item>\n\n</ion-content>\n");

/***/ }),

/***/ 15521:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/home/home.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Home\" [isOption]=\"true\"></app-header>\n<ion-content style=\"background-color: gray;\" padding [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <div style=\"background-color: rgb(241, 241, 241);\" id=\"container\">\n    <ion-grid >\n      <ion-row id=\"rowTabFiltre\">\n        <ion-col style=\"margin: -12px 0;\">\n          <button\n          color=\"white\"\n          style=\"\n            box-shadow: 0px 3px 10px rgba(114, 114, 114, 0.452);\n            border-radius: 10px;\n            margin: 0 10px;\n            height: 30px;\n            width: 80px;\n            color: #898b8b;\n            background: white\"\n            routerLink=\"/tabs/hobbies\">\n            {{'home.tout' | translate}}\n         </button>\n          <button\n          color=\"white\"\n          style=\"\n            box-shadow: 0px 3px 10px rgba(114, 114, 114, 0.452);\n            border-radius: 10px;\n            margin: 0 10px;\n            height: 30px;\n            width: 80px;\n            color: #898b8b;\n            background: white\"\n            routerLink=\"/tabs/hobbies\">\n            {{'home.favoris' | translate}}\n\n    </button>\n        <button\n          color=\"white\"\n          style=\"\n            box-shadow: 0px 3px 10px rgba(114, 114, 114, 0.452);\n            border-radius: 10px;\n            margin: 0 10px;\n            height: 30px;\n            width: 90px;\n            color: #898b8b;\n            background: white\"\n            routerLink=\"/tabs/community\">\n            {{'community' | translate}}\n\n        </button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"bodyFilter\" style=\"margin: -5px 0 0 0;\">\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n          <ion-refresher-content\n            pullingIcon=\"chevron-down-circle-outline\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\"\n          >\n          </ion-refresher-content>\n        </ion-refresher>\n\n        <!-- <ion-virtual-scroll [items]=\"posts\"> -->\n        <div\n        style=\"background-color: white;margin:5px -4px 0 -5px\"\n          *ngFor=\"let post of posts;let i=index;\"\n          [class.focus]=\"indexPub===i\"\n          scrollY=\"true\">\n          <ng-container>\n            <app-status\n\n            [post]=\"post\"\n            [index]=\"i\"\n            [user]=\"user$\"\n            (disLikeFn)=\"disLike($event)\"\n            (likeFn)=\"like($event)\"\n          >\n          </app-status>\n          </ng-container>\n        </div>\n        <!-- </ion-virtual-scroll> -->\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-infinite-scroll threshold=\"5%\" (ionInfinite)=\"loadMore($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"crescent\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_layouts_home_home_module_ts.js.map