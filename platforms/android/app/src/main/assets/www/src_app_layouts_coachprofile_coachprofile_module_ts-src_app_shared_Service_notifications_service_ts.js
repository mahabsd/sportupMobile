(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_coachprofile_coachprofile_module_ts-src_app_shared_Service_notifications_service_ts"],{

/***/ 42:
/*!********************************************************************!*\
  !*** ./src/app/layouts/coachprofile/coachphoto/coachphoto.page.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachphotoPage": () => (/* binding */ CoachphotoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_coachphoto_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./coachphoto.page.html */ 64283);
/* harmony import */ var _coachphoto_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coachphoto.page.scss */ 54568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 35758);
/* harmony import */ var src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Service/event.service */ 34489);
/* harmony import */ var src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Service/post.service */ 91820);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _Shared_Service_image_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Shared/Service/image.service */ 97030);
/* harmony import */ var _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Shared/Service/user.service */ 88838);
/* harmony import */ var _image_profile_image_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image-profile/image-profile.component */ 6510);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 78345);














let CoachphotoPage = class CoachphotoPage {
    constructor(imageService, userService, modalController, action, toastCtrl, eventService, router, postService) {
        this.imageService = imageService;
        this.userService = userService;
        this.modalController = modalController;
        this.action = action;
        this.toastCtrl = toastCtrl;
        this.eventService = eventService;
        this.router = router;
        this.postService = postService;
        this.images = [];
        this.posts = [];
        this.apImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiImg + 'Post/';
        this.messages = [];
        this.page = 1;
        this.subscription = this.imageService.getMessage().subscribe((message) => {
            if (message.event === 'addphoto') {
                //  this.selectImageSource();
            }
            else {
                // clear messages when empty message received
                this.messages = [];
            }
        });
    }
    ngOnInit() {
        //  this.getMe();
        this.postsOwnerId = this.postService.postsOwnerId;
        this.getAllPosts();
    }
    presentModal(img) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _image_profile_image_profile_component__WEBPACK_IMPORTED_MODULE_7__.ImageProfileComponent,
                cssClass: 'imageModal',
                componentProps: {
                    image: img,
                    isImages: true
                },
            });
            return yield modal.present();
        });
    }
    /* async addImage(source: CameraSource) {
   
       const fd = new FormData();
       await this.imageService.readyImage(source, fd);
       fd.append('createdBy', this.user$._id);
   
       this.imageService.addImage(fd).subscribe(async (res) => {
         // console.log(res);
         this.presentToast('Photo ajoutée!');
       });
     }
   
     async selectImageSource() {
       const buttons = [
         {
           text: 'Take Photo',
           icon: 'camera',
           handler: () => {
             this.addImage(CameraSource.Camera);
           },
         },
         {
           text: 'Choose from photos',
           icon: 'image',
           handler: () => {
             this.addImage(CameraSource.Photos);
           },
         },
       ];
   
       const actionSheet = await this.action.create({
         header: 'Select Image Source',
         buttons,
       });
   
       await actionSheet.present();
     }*/
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const myToast = yield this.toastCtrl
                .create({
                message,
                duration: 2000,
                color: 'success',
                position: 'top',
            })
                .then((toastData) => {
                toastData.present();
            });
        });
    }
    getMe() {
        this.userService.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.user$ = res.data.data;
        }));
    }
    getpostFiles(post) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)({
            mediafiles: this.postService.getPost(post._id),
        }).subscribe(({ mediafiles }) => {
            this.mediafiles = mediafiles.mediafiles;
            this.mediafiles.forEach(element => {
                this.images.push(element);
            });
        });
    }
    getExt(fileName) {
        const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
        return ext;
    }
    getAllPosts(event) {
        this.userService.getMe().subscribe(res => {
            this.user$ = res.data.data;
            this.postService.getAllPostsById(this.page, this.postsOwnerId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)()).subscribe(res => {
                this.posts = res.data.data;
                this.posts.forEach(post => {
                    this.getpostFiles(post);
                });
                if (event) {
                    event.target.complete();
                }
            });
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
};
CoachphotoPage.ctorParameters = () => [
    { type: _Shared_Service_image_service__WEBPACK_IMPORTED_MODULE_5__.ImageService },
    { type: _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_3__.PostService }
];
CoachphotoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-coachphoto',
        template: _raw_loader_coachphoto_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_coachphoto_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CoachphotoPage);



/***/ }),

/***/ 85934:
/*!*********************************************************************!*\
  !*** ./src/app/layouts/coachprofile/coachprofile-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachprofilePageRoutingModule": () => (/* binding */ CoachprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _coachprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coachprofile.page */ 71937);




const routes = [
    {
        path: '',
        component: _coachprofile_page__WEBPACK_IMPORTED_MODULE_0__.CoachprofilePage,
        children: [
            {
                path: 'coachphoto',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_coachprofile_coachphoto_coachphoto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./coachphoto/coachphoto.module */ 9532)).then(m => m.CoachphotoPageModule)
            },
            {
                path: 'coachpub',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_coachprofile_coachpub_coachpub_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./coachpub/coachpub.module */ 93607)).then(m => m.CoachpubPageModule)
            }
        ]
    },
];
let CoachprofilePageRoutingModule = class CoachprofilePageRoutingModule {
};
CoachprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoachprofilePageRoutingModule);



/***/ }),

/***/ 22834:
/*!*************************************************************!*\
  !*** ./src/app/layouts/coachprofile/coachprofile.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyLoadImageHooks": () => (/* binding */ LazyLoadImageHooks),
/* harmony export */   "CoachprofilePageModule": () => (/* binding */ CoachprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _palmares_pop_over_palmares_pop_over_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ././palmares-pop-over/palmares-pop-over.module */ 51740);
/* harmony import */ var _coachprofile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coachprofile-routing.module */ 85934);
/* harmony import */ var _coachprofile_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coachprofile.page */ 71937);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/component.module */ 55051);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home.module */ 63848);
/* harmony import */ var _coachphoto_coachphoto_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coachphoto/coachphoto.page */ 42);
/* harmony import */ var _coachpub_coachpub_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coachpub/coachpub.page */ 32888);
/* harmony import */ var _image_profile_image_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image-profile/image-profile.component */ 6510);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-lazyload-image */ 27260);
/* harmony import */ var _coach_menu_pop_over_coach_menu_pop_over_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coach-menu-pop-over/coach-menu-pop-over.component */ 38686);
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/modules/shared.module */ 57208);
















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

let CoachprofilePageModule = class CoachprofilePageModule {
};
CoachprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _coachprofile_routing_module__WEBPACK_IMPORTED_MODULE_1__.CoachprofilePageRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule,
            _home_home_module__WEBPACK_IMPORTED_MODULE_4__.HomePageModule,
            _palmares_pop_over_palmares_pop_over_module__WEBPACK_IMPORTED_MODULE_0__.PalmaresPopOverModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__.LazyLoadImageModule,
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule
        ],
        declarations: [_coachprofile_page__WEBPACK_IMPORTED_MODULE_2__.CoachprofilePage, _coachphoto_coachphoto_page__WEBPACK_IMPORTED_MODULE_5__.CoachphotoPage, _coachpub_coachpub_page__WEBPACK_IMPORTED_MODULE_6__.CoachpubPage, _image_profile_image_profile_component__WEBPACK_IMPORTED_MODULE_7__.ImageProfileComponent, _coach_menu_pop_over_coach_menu_pop_over_component__WEBPACK_IMPORTED_MODULE_8__.CoachMenuPopOverComponent
        ],
        exports: [_coachprofile_page__WEBPACK_IMPORTED_MODULE_2__.CoachprofilePage, _coachphoto_coachphoto_page__WEBPACK_IMPORTED_MODULE_5__.CoachphotoPage, _coachpub_coachpub_page__WEBPACK_IMPORTED_MODULE_6__.CoachpubPage, _image_profile_image_profile_component__WEBPACK_IMPORTED_MODULE_7__.ImageProfileComponent],
        providers: [{ provide: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_10__.LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],
    })
], CoachprofilePageModule);



/***/ }),

/***/ 71937:
/*!***********************************************************!*\
  !*** ./src/app/layouts/coachprofile/coachprofile.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachprofilePage": () => (/* binding */ CoachprofilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_coachprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./coachprofile.page.html */ 2698);
/* harmony import */ var _coachprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coachprofile.page.scss */ 26168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Service/favoris.service */ 38007);
/* harmony import */ var src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Service/follower.service */ 93647);
/* harmony import */ var src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Service/post.service */ 91820);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ 51188);
/* harmony import */ var src_app_Shared_Service_image_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Shared/Service/image.service */ 97030);















let CoachprofilePage = class CoachprofilePage {
    constructor(userService, modalController, followerService, activatedRoute, savepostsService, router, postService, translate, storage, action, imageService) {
        this.userService = userService;
        this.modalController = modalController;
        this.followerService = followerService;
        this.activatedRoute = activatedRoute;
        this.savepostsService = savepostsService;
        this.router = router;
        this.postService = postService;
        this.translate = translate;
        this.storage = storage;
        this.action = action;
        this.imageService = imageService;
        this.profileLabels = ['', '', ''];
        this.sliderOpts = {
            zoom: false,
            slidesPreview: 1.5,
            centeredSlides: true,
            spaceBetween: 20
        };
        this.follower = false;
        this.pub = false;
        this.posts$ = [];
        this.testConnected = false;
        // eslint-disable-next-line max-len
        this.coachInfo = { backgroundImage: 'https://www.nouvelleviepro.fr/assets/uploads/salon/nouvelleviepro-choisir_coaching.jpg' };
        this.apiImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiImg + 'User/';
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
        storage.get('lan').then((val) => {
            if (val)
                translate.use(val);
        });
    }
    ngOnInit() {
        this.idprofilePassed = this.activatedRoute.snapshot.params.id;
        this.type = this.activatedRoute.snapshot.params.type;
        this.getMe();
        this.getUserByid();
        this.getfollow();
        this.publiations();
        this.getfollowers();
    }
    dismiss() {
        this.modalController.dismiss({
            dismissed: true,
        });
    }
    getMe() {
        this.userService.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.user$ = yield res.data.data;
        }));
    }
    getUserByid() {
        this.userService.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.userService.getUser(this.idprofilePassed).subscribe((response) => {
                this.user$ = response.data.data;
                if (res.data.data._id === response.data.data._id) {
                    this.testConnected = true;
                }
            }, (error) => {
                console.error(error);
            });
        }));
    }
    publicationsClick() {
        this.pub = true;
    }
    segmentChanged(ev) {
        this.selected = ev.detail.value;
    }
    getfollow() {
        this.userService.getMe().subscribe((response) => {
            this.iduser1 = response.data.data.id;
            this.followerService
                .getFollow(this.idprofilePassed, this.iduser1)
                .subscribe((res) => {
                if (res == null) {
                    this.follower = false;
                }
                else {
                    this.followId = res._id;
                    this.follower = true;
                }
            });
        }, (error) => {
            console.error(error);
        });
    }
    publiations() {
        this.userId = this.router.url.slice(32, 56);
        this.postService.postsOwner(this.userId);
    }
    getfollowers() {
        this.followerService.getFollowers(this.userId).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.followingsNumber = res.results;
            this.followersNumber = res.resultsFollowers;
        }));
    }
    addImage(source) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const fd = new FormData();
            yield this.imageService.readyImage(source, fd);
            this.getFormData(this.user$, fd);
            this.userService.updateCoverMe(fd).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                yield this.getMe();
            }));
        });
    }
    selectImageSource() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const buttons = [
                {
                    text: 'Choose from gallery',
                    icon: 'image',
                    handler: () => {
                        this.addImage(_capacitor_core__WEBPACK_IMPORTED_MODULE_7__.CameraSource.Photos);
                    },
                },
            ];
            const actionSheet = yield this.action.create({
                header: 'Select from phone',
                buttons,
            });
            yield actionSheet.present();
        });
    }
    getFormData(object, formdata) {
        Object.keys(object).forEach((key) => formdata.append(key, object[key]));
    }
};
CoachprofilePage.ctorParameters = () => [
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__.FollowerService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_2__.FavorisService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_4__.PostService },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController },
    { type: src_app_Shared_Service_image_service__WEBPACK_IMPORTED_MODULE_8__.ImageService }
];
CoachprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-coachprofile',
        template: _raw_loader_coachprofile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_coachprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CoachprofilePage);



/***/ }),

/***/ 32888:
/*!****************************************************************!*\
  !*** ./src/app/layouts/coachprofile/coachpub/coachpub.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachpubPage": () => (/* binding */ CoachpubPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_coachpub_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./coachpub.page.html */ 23555);
/* harmony import */ var _coachpub_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coachpub.page.scss */ 33643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Service/post.service */ 91820);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var _delete_post_popover_delete_post_popover_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delete-post-popover/delete-post-popover.page */ 76565);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Service/event.service */ 34489);
/* harmony import */ var src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/Service/favoris.service */ 38007);










let CoachpubPage = class CoachpubPage {
    constructor(postService, userService, eventService, savepostsService, popoverController) {
        this.postService = postService;
        this.userService = userService;
        this.eventService = eventService;
        this.savepostsService = savepostsService;
        this.popoverController = popoverController;
        // eslint-disable-next-line max-len
        this.user$ = [];
        this.posts = [];
        this.indexPub = null;
        this.page = 1;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.getMe();
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
    getMe() {
        this.userService.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.user$ = yield res.data.data;
            yield this.getPosts();
        }));
    }
    getPosts(event) {
        this.postsOwnerId = this.postService.postsOwnerId;
        this.postService.getAllPostsById(this.page, this.postsOwnerId).subscribe((response) => {
            this.posts = this.posts.concat(response['data'].data);
            this.savepostsService.getSavedPosts(this.page, this.postsOwnerId).subscribe((res) => {
                this.posts$ = res.data.data;
                this.posts$.map(post => {
                    this.posts.push(post.post);
                });
            });
            this.savepostsService.getAllSharedPosts(this.page, this.postsOwnerId).subscribe((res) => {
                this.posts$ = res.data.data;
                this.posts$.map(post => {
                    this.posts.push(post.post);
                });
            });
            if (event) {
                event.target.complete();
            }
        }, error => {
            console.error(error);
        });
    }
    loadMore(event) {
        this.page++;
        this.getPosts(event);
    }
    openPostMenu(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _delete_post_popover_delete_post_popover_page__WEBPACK_IMPORTED_MODULE_4__.DeletePostPopoverPage,
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true,
                mode: 'ios',
                componentProps: {
                    paramID: ev,
                }
            });
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
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
};
CoachpubPage.ctorParameters = () => [
    { type: src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_2__.PostService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_5__.EventService },
    { type: src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_6__.FavorisService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController }
];
CoachpubPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-coachpub',
        template: _raw_loader_coachpub_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_coachpub_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CoachpubPage);



/***/ }),

/***/ 76565:
/*!**************************************************************************************!*\
  !*** ./src/app/layouts/coachprofile/delete-post-popover/delete-post-popover.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletePostPopoverPage": () => (/* binding */ DeletePostPopoverPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_delete_post_popover_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./delete-post-popover.page.html */ 72963);
/* harmony import */ var _delete_post_popover_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delete-post-popover.page.scss */ 21464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Service/post.service */ 91820);






let DeletePostPopoverPage = class DeletePostPopoverPage {
    constructor(postService, navParams) {
        this.postService = postService;
        this.navParams = navParams;
    }
    ngOnInit() {
        this.post = this.navParams.data.paramID;
    }
    delete(post) {
        this.postService.deletePost(post).subscribe();
    }
    update() {
    }
};
DeletePostPopoverPage.ctorParameters = () => [
    { type: src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_2__.PostService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams }
];
DeletePostPopoverPage.propDecorators = {
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
DeletePostPopoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-delete-post-popover',
        template: _raw_loader_delete_post_popover_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_delete_post_popover_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DeletePostPopoverPage);



/***/ }),

/***/ 51740:
/*!************************************************************************************!*\
  !*** ./src/app/layouts/coachprofile/palmares-pop-over/palmares-pop-over.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PalmaresPopOverModule": () => (/* binding */ PalmaresPopOverModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _palmares_pop_over_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ././palmares-pop-over.component */ 95410);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);








let PalmaresPopOverModule = class PalmaresPopOverModule {
};
PalmaresPopOverModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule
        ],
        declarations: [_palmares_pop_over_component__WEBPACK_IMPORTED_MODULE_0__.PalmaresPopOverComponent]
    })
], PalmaresPopOverModule);



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

/***/ 54568:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/coachprofile/coachphoto/coachphoto.page.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@media (min-width: 375px) {\n  .container {\n    display: grid;\n    margin: 20px;\n    grid-template-columns: calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) calc(calc(3 / var(--ion-grid-columns, 12)) * 100%) calc(calc(3 / var(--ion-grid-columns, 12)) * 100%);\n    grid-gap: 10px;\n    font-family: \"Lato\";\n    text-align: center;\n    font-size: 1.4em;\n    justify-content: space-evenly;\n  }\n}\n@media (min-width: 800px) {\n  .container {\n    display: grid;\n    margin: 10px;\n    grid-template-columns: calc(calc(2 / var(--ion-grid-columns, 12)) * 100%) calc(calc(2 / var(--ion-grid-columns, 12)) * 100%) calc(calc(2 / var(--ion-grid-columns, 12)) * 100%) calc(calc(2 / var(--ion-grid-columns, 12)) * 100%) calc(calc(2 / var(--ion-grid-columns, 12)) * 100%) calc(calc(2 / var(--ion-grid-columns, 12)) * 100%);\n    grid-gap: 10px;\n    font-family: \"Lato\";\n    text-align: center;\n    font-size: 1.4em;\n    justify-content: space-evenly;\n  }\n}\n@media (max-width: 460px) {\n  .container {\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: calc(calc(4 / var(--ion-grid-columns, 12)) * 100%) calc(calc(4 / var(--ion-grid-columns, 12)) * 100%) calc(calc(4 / var(--ion-grid-columns, 12)) * 100%);\n    font-family: \"Lato\";\n    text-align: center;\n    font-size: 1.4em;\n  }\n}\n@media (max-width: 375px) {\n  .container {\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: calc(calc(6 / var(--ion-grid-columns, 12)) * 100%) calc(calc(6 / var(--ion-grid-columns, 12)) * 100%);\n    font-family: \"Lato\";\n    text-align: center;\n    font-size: 1.4em;\n  }\n}\n.item {\n  margin: 3px;\n  font-size: 1.5em;\n  border-radius: 20px;\n  background-size: cover;\n}\n.a {\n  background-size: cover;\n  padding: 50px 0;\n}\n@media (max-width: 375px) {\n  .b {\n    background-size: cover;\n    grid-area: span 2 span 2;\n  }\n}\n@media (min-width: 375px) {\n  .b {\n    background-size: cover;\n    grid-area: 1/1/3/3;\n  }\n}\nion-content {\n  --background:#F8F8F8;\n}\nion-button {\n  --box-shadow:none;\n  --background: none;\n}\n#close {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYWNocGhvdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLGtPQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLDZCQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHdVQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLDZCQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLCtLQUFBO0lBRUEsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLDRIQUFBO0lBRUEsbUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VBSkY7QUFDRjtBQU9BO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUxGO0FBUUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUFMRjtBQU9BO0VBQ0U7SUFDRSxzQkFBQTtJQUVBLHdCQUFBO0VBTEY7QUFDRjtBQVFBO0VBQ0E7SUFDRSxzQkFBQTtJQUVBLGtCQUFBO0VBUEE7QUFDRjtBQVNBO0VBQ0Usb0JBQUE7QUFQRjtBQVVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQVBGO0FBVUE7RUFDRSxrQkFBQTtBQVBGIiwiZmlsZSI6ImNvYWNocGhvdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyhjYWxjKDMgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgY2FsYyhjYWxjKDMgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgY2FsYyhjYWxjKDMgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgY2FsYyhjYWxjKDMgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSk7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgIFxuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKGNhbGMoMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSBjYWxjKGNhbGMoMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSBjYWxjKGNhbGMoMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSBjYWxjKGNhbGMoMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSBjYWxjKGNhbGMoMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKSBjYWxjKGNhbGMoMiAvIHZhcigtLWlvbi1ncmlkLWNvbHVtbnMsIDEyKSkgKiAxMDAlKTtcbiAgICBncmlkLWdhcDogMTBweDtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyhjYWxjKDQgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgY2FsYyhjYWxjKDQgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgY2FsYyhjYWxjKDQgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSk7XG4gICBcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgXG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyhjYWxjKDYgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSkgY2FsYyhjYWxjKDYgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMikpICogMTAwJSk7XG4gICBcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgXG4gIH1cbn1cbi5pdGVtIHtcbiAgbWFyZ2luOiAzcHg7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5hIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC5iIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBcbiAgICBncmlkLWFyZWE6IHNwYW4gMiBzcGFuIDI7XG4gIH1cbiAgfVxuICBcbkBtZWRpYSAgKG1pbi13aWR0aDogMzc1cHgpIHtcbi5iIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiA7XG4gIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMyA7XG59XG59XG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiNGOEY4Rjg7XG59XG5cbmlvbi1idXR0b257XG4gIC0tYm94LXNoYWRvdzpub25lO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbiNjbG9zZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */");

/***/ }),

/***/ 26168:
/*!*************************************************************!*\
  !*** ./src/app/layouts/coachprofile/coachprofile.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@media (min-width: 414px) {\n  ion-tab-button {\n    margin: 20px;\n    box-shadow: -2px 2px 3px 1px rgba(0, 0, 0, 0.39);\n    background: #ffffff;\n    border-radius: 10px;\n    color: #616160;\n    max-width: 110px;\n    min-width: 50px;\n  }\n\n  .details {\n    margin-right: 10px;\n    color: white;\n    position: absolute;\n    align-self: flex-end;\n    height: 50px;\n    font-size: 20px !important;\n  }\n}\n@media (max-width: 414px) {\n  ion-tab-button {\n    margin: 5px;\n    box-shadow: -2px 2px 3px 1px rgba(0, 0, 0, 0.39);\n    background: #ffffff;\n    border-radius: 10px;\n    width: 80px;\n    height: 30px;\n    color: #616160;\n    max-width: 110px;\n    min-width: 80px;\n  }\n\n  .details {\n    margin-right: 10px;\n    color: white;\n    position: absolute;\n    align-self: flex-end;\n    height: 50px;\n    font-size: 20px !important;\n  }\n}\n@media (max-width: 320px) {\n  ion-tab-button {\n    margin: 0px;\n  }\n}\nion-tab-button #middle {\n  margin: 10px;\n}\nion-tab-button ion-label {\n  font-weight: 400;\n  font-size: 9.5px;\n}\nion-tab-bar .tab-selected {\n  background: #f1f2f2;\n  color: #616160;\n}\nion-tab-bar {\n  background: none;\n  margin: 10px 20px 10px 20px;\n  border-bottom: none;\n}\nion-content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --background: #f8f8f8;\n}\nion-textarea {\n  background: none;\n}\nion-item {\n  --background: none;\n}\n.profileID {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 150px;\n  text-align: start;\n  color: white;\n}\n.profileContainer {\n  flex-direction: column;\n  justify-content: flex-end;\n  height: 200px;\n  background-size: cover;\n  padding-left: 10px;\n}\n.details {\n  margin-right: 10px;\n  color: white;\n  position: absolute;\n  align-self: flex-end;\n  height: 50px;\n  font-size: 10px !important;\n}\n.edit-profile-cover {\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYWNocHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxnREFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsZ0RBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VBQUY7O0VBR0E7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLDBCQUFBO0VBQUY7QUFDRjtBQUlBO0VBQ0U7SUFDRSxXQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0UsWUFBQTtBQUhGO0FBTUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBSEY7QUFNQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUhGO0FBTUE7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFIRjtBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBSEY7QUFNQTtFQUNFLGdCQUFBO0FBSEY7QUFNQTtFQUNFLGtCQUFBO0FBSEY7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUhGO0FBTUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQU1BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQUhGO0FBS0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFGRiIsImZpbGUiOiJjb2FjaHByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDQxNHB4KSB7XG4gIGlvbi10YWItYnV0dG9uIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgYm94LXNoYWRvdzogLTJweCAycHggM3B4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzkpO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogIzYxNjE2MDtcbiAgICBtYXgtd2lkdGg6IDExMHB4O1xuICAgIG1pbi13aWR0aDogNTBweDtcbiAgfVxuXG4gIC5kZXRhaWxzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gIGlvbi10YWItYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBib3gtc2hhZG93OiAtMnB4IDJweCAzcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zOSk7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBjb2xvcjogIzYxNjE2MDtcbiAgICBtYXgtd2lkdGg6IDExMHB4O1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgfVxuXG4gIC5kZXRhaWxzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgaW9uLXRhYi1idXR0b24ge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG5cbmlvbi10YWItYnV0dG9uICNtaWRkbGUge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbmlvbi10YWItYnV0dG9uIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogOS41cHg7XG59XG5cbmlvbi10YWItYmFyIC50YWItc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjZjFmMmYyO1xuICBjb2xvcjogIzYxNjE2MDtcbn1cblxuaW9uLXRhYi1iYXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW46IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4ucHJvZmlsZUlEIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxNTBweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2ZpbGVDb250YWluZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5kZXRhaWxzIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uZWRpdC1wcm9maWxlLWNvdmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 33643:
/*!******************************************************************!*\
  !*** ./src/app/layouts/coachprofile/coachpub/coachpub.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: var(--ion-color-light-tint);\n}\n\n.ion-page {\n  justify-content: start;\n}\n\nion-textarea {\n  background: none;\n}\n\nion-item {\n  --background: none;\n}\n\n.profileID {\n  width: 200px;\n}\n\n.profileID h4 {\n  text-align: center;\n  color: white;\n}\n\n.profileContainer {\n  flex-direction: column;\n  justify-content: flex-end;\n  height: 200px;\n  background-size: cover;\n}\n\nion-segment-button {\n  background-color: whitesmoke;\n  box-shadow: -4px 3px 7px 2px rgba(0, 0, 0, 0.21);\n  border-radius: 10px;\n  margin: 15px;\n  width: 110px;\n  min-height: 10px;\n  text-transform: none;\n  --indicator-color: none;\n}\n\nion-segment-button ion-label {\n  font-size: 14px;\n}\n\n.segment-button-checked {\n  color: var(--color);\n  background-color: #e6e6e6;\n}\n\n.mygallery {\n  border-radius: 6px;\n}\n\n.imageContainer {\n  padding: 5px;\n}\n\n#avatarPub {\n  width: 50px;\n  height: 50px;\n  justify-content: center;\n  align-items: baseline;\n}\n\n#identText {\n  color: #616160;\n  margin-left: 20px;\n}\n\n#rightPostMenu {\n  display: flex;\n  justify-content: flex-end;\n}\n\n#identText h5 {\n  font-weight: 100;\n  margin: 0px;\n}\n\n#identText h4 {\n  margin: 0px;\n}\n\n.postButton {\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}\n\n.delete {\n  color: black;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  box-shadow: none !important;\n  margin: 0;\n  font-size: larger;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYWNocHViLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNFLHlDQUFBO0FBQ0g7O0FBRUM7RUFDRSxzQkFBQTtBQUNIOztBQUVDO0VBQ0UsZ0JBQUE7QUFDSDs7QUFFQztFQUNFLGtCQUFBO0FBQ0g7O0FBRUM7RUFFRSxZQUFBO0FBQUg7O0FBSUM7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFESDs7QUFLQztFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFGSDs7QUFLQztFQUNFLDRCQUFBO0VBRUEsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FBSEg7O0FBTUM7RUFDRSxlQUFBO0FBSEg7O0FBTUM7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBSEg7O0FBT0M7RUFDRSxrQkFBQTtBQUpIOztBQVVDO0VBQ0UsWUFBQTtBQVBIOztBQVdDO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBUkg7O0FBV0M7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFSSDs7QUFXQztFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQVJIOztBQVlDO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBVEg7O0FBWUM7RUFFRSxXQUFBO0FBVkg7O0FBY0M7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFYSDs7QUFjQztFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBWEgiLCJmaWxlIjoiY29hY2hwdWIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGlvbi1jb250ZW50IHtcbiAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xuIH1cblxuIC5pb24tcGFnZSB7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuIH1cblxuIGlvbi10ZXh0YXJlYSB7XG4gICBiYWNrZ3JvdW5kOiBub25lO1xuIH1cblxuIGlvbi1pdGVtIHtcbiAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiB9XG5cbiAucHJvZmlsZUlEIHtcblxuICAgd2lkdGg6IDIwMHB4O1xuXG4gfVxuXG4gLnByb2ZpbGVJRCBoNCB7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBjb2xvcjogd2hpdGU7XG4gfVxuXG5cbiAucHJvZmlsZUNvbnRhaW5lciB7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgIGhlaWdodDogMjAwcHg7XG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuIH1cblxuIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG5cbiAgIGJveC1zaGFkb3c6IC00cHggM3B4IDdweCAycHggcmdiYSgwLCAwLCAwLCAwLjIxKTtcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICBtYXJnaW46IDE1cHg7XG4gICB3aWR0aDogMTEwcHg7XG4gICBtaW4taGVpZ2h0OiAxMHB4O1xuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAtLWluZGljYXRvci1jb2xvcjogbm9uZTtcbiB9XG5cbiBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgIGZvbnQtc2l6ZTogMTRweDtcbiB9XG5cbiAuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xuXG4gfVxuXG4gLm15Z2FsbGVyeSB7XG4gICBib3JkZXItcmFkaXVzOiA2cHg7XG5cblxuXG4gfVxuXG4gLmltYWdlQ29udGFpbmVyIHtcbiAgIHBhZGRpbmc6IDVweDtcbiB9XG5cblxuICNhdmF0YXJQdWIge1xuICAgd2lkdGg6IDUwcHg7XG4gICBoZWlnaHQ6IDUwcHg7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiB9XG5cbiAjaWRlbnRUZXh0IHtcbiAgIGNvbG9yOiAjNjE2MTYwO1xuICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gfVxuXG4gI3JpZ2h0UG9zdE1lbnUge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiB9XG5cbiAjaWRlbnRUZXh0IGg1IHtcbiAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICBtYXJnaW46IDBweDtcbiB9XG5cbiAjaWRlbnRUZXh0IGg0IHtcblxuICAgbWFyZ2luOiAwcHg7XG4gfVxuXG5cbiAucG9zdEJ1dHRvbiB7XG4gICB3aWR0aDogNDBweDtcbiAgIGhlaWdodDogNDBweDtcbiAgIHBhZGRpbmc6IDVweDtcbiB9XG5cbiAuZGVsZXRlIHtcbiAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgbWFyZ2luOiAwO1xuICAgZm9udC1zaXplOiBsYXJnZXI7XG4gICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuIH1cbiJdfQ== */");

/***/ }),

/***/ 21464:
/*!****************************************************************************************!*\
  !*** ./src/app/layouts/coachprofile/delete-post-popover/delete-post-popover.page.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtcG9zdC1wb3BvdmVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 64283:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/coachprofile/coachphoto/coachphoto.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-grid>\n    <!-- -->\n\n    <div class=\"container\">\n      <ng-container *ngFor=\"let item of images ; let i = index; \">\n\n        <div *ngIf=\"getExt(item.file_name) === 'png'\" [ngClass]=\"[i === 0 ? 'item b' : 'item a']\"\n          [style.background-size]=\"'cover'\" [style.background-image]=\"'url('+ apImg+item?.file_name + ')'\"\n          [lazyLoad]=\"apImg+item?.file_name\" errorImage=\"../../../assets/imgs/150.png\" (click)=\"presentModal(item)\">\n        </div>\n        <div *ngIf=\"getExt(item.file_name) === 'mp4'\" [ngClass]=\"[i === 0 ? 'item b' : 'item a']\"\n        [style.background-size]=\"'cover'\" [style.background-image]=\"'url('+ apImg+item?.file_name + ')'\"\n        [lazyLoad]=\"apImg+item?.file_name\" errorImage=\"../../../assets/imgs/150.png\" (click)=\"presentModal(item)\">\n        \n      </div>\n      </ng-container>\n\n\n    </div>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ 2698:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/coachprofile/coachprofile.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title={{user$?.name}} style=\"text-transform: capitalize \" [isCoach]=\"true\" [type]=\"type\"\n  [idprofillepassed]=\"idprofilePassed\" [followid]=\"followId\"></app-header>\n<ion-row [style.background-image]=\"'url(' + apiImg+user$?.cover + ')'\" class=\"profileContainer\">\n  <ion-avatar class=\"edit-profile-cover\" (click)=\"selectImageSource()\" *ngIf=\"idprofilePassed === this.iduser1\">\n    <ion-icon name=\"create\"> </ion-icon>\n  </ion-avatar>\n  <div class=\"profileID\">\n    <ion-avatar>\n      <img [src]=\"apiImg+user$?.photo\">\n    </ion-avatar>\n    <h4>{{user$?.name}}</h4>\n  </div>\n  <ion-row class=\"details\">\n    <ion-col>\n      <p>{{followersNumber<1000?followersNumber: followersNumber/1000 +'k'}}</p>\n    </ion-col>\n    <ion-col>\n      <p>{{'profile.abonnees' | translate}}</p>\n    </ion-col>\n    <ion-col>\n      <p>{{followingsNumber<1000?followingsNumber: followingsNumber/1000 +'k'}}</p>\n    </ion-col>\n    <ion-col>\n      <p>{{'profile.abonnement' | translate}}</p>\n    </ion-col>\n  </ion-row>\n</ion-row>\n<ion-content>\n  <ion-tabs>\n    <ion-tab-bar slot=\"top\">\n      <ion-tab-button tab=\"coachphoto\">\n        <ion-label>{{'profile.photo' | translate}}</ion-label>\n      </ion-tab-button>\n      <ion-tab-button tab=\"coachpub\" id=\"middle\">\n        <ion-label>{{'profile.publication' | translate}}</ion-label>\n      </ion-tab-button>\n      <ion-tab-button [routerLink]=\"['/calendar']\">\n        <ion-label>{{'profile.calendrier' | translate}}</ion-label>\n      </ion-tab-button>\n      <ion-tab-button [routerLink]=\"['/palmares',idprofilePassed]\">\n        <ion-label>{{'profile.palmares' | translate}}</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-content>\n");

/***/ }),

/***/ 23555:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/coachprofile/coachpub/coachpub.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <ion-row class=\"bodyFilter\">\n    <ion-refresher slot=\"fixed\">\n      <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n    <!-- <ion-virtual-scroll [items]=\"posts\"> -->\n    <ion-card *ngFor=\"let post of posts;let i=index;\" scrollY=\"true\" style=\"width : 100%; border-radius: 10px;padding:0 10px\">\n      <ng-container *ngIf=\"user$?._id===post?.user?.id\" >\n        <div style=\"display: flex;justify-content:space-between\">\n          <div></div>\n          <div class=\"delete\" color=\"light\" (click)=\"openPostMenu(post)\">\n            <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n          </div>\n        </div>\n        <app-status [post]=\"post\"\n        [index]=\"i\"\n        [user]=\"user$\"\n        (disLikeFn)=\"disLike($event)\"\n        (likeFn)=\"like($event)\">\n        </app-status>\n      </ng-container>\n    </ion-card>\n    <!-- </ion-virtual-scroll> -->\n  </ion-row>\n\n  <ion-infinite-scroll threshold=\"5%\" (ionInfinite)=\"loadMore($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"crescent\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n");

/***/ }),

/***/ 72963:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/coachprofile/delete-post-popover/delete-post-popover.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list>\n\n  <ion-item (click)=\"delete(post)\">\n\n    <ion-label>\n      <h3 id=\"dec\">supprimer</h3>\n\n    </ion-label>\n\n  </ion-item>\n  <!--\n <ion-item (click)=\"update()\">\n\n    <ion-label>\n      <h3 id=\"dec\">metre à jour</h3>\n\n    </ion-label>\n      </ion-item>\n\n-->\n\n</ion-list>");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_coachprofile_coachprofile_module_ts-src_app_shared_Service_notifications_service_ts.js.map