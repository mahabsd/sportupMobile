(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["default-src_app_layouts_kids_profil_profil_module_ts"],{

/***/ 89040:
/*!**************************************!*\
  !*** ./src/app/Shared/Model/User.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
}


/***/ }),

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

/***/ 33906:
/*!************************************************************************!*\
  !*** ./src/app/layouts/kids/popovercomponent/popovercomponent.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopovercomponentPage": () => (/* binding */ PopovercomponentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_popovercomponent_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./popovercomponent.page.html */ 12706);
/* harmony import */ var _popovercomponent_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popovercomponent.page.scss */ 16161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Auth/auth.service */ 21584);





let PopovercomponentPage = class PopovercomponentPage {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    dismissPopover() {
        this.authService.logout();
    }
};
PopovercomponentPage.ctorParameters = () => [
    { type: src_app_Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
PopovercomponentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-popovercomponent',
        template: _raw_loader_popovercomponent_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_popovercomponent_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PopovercomponentPage);



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

/***/ 28669:
/*!*********************************************************************************!*\
  !*** ./src/app/layouts/kids/profil/popovercomponent2/popovercomponent2.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popovercomponent2Page": () => (/* binding */ Popovercomponent2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_popovercomponent2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./popovercomponent2.page.html */ 33222);
/* harmony import */ var _popovercomponent2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popovercomponent2.page.scss */ 74287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let Popovercomponent2Page = class Popovercomponent2Page {
    constructor() { }
    dismissPopover(msg) {
        console.log(msg);
    }
    ngOnInit() {
    }
};
Popovercomponent2Page.ctorParameters = () => [];
Popovercomponent2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-popovercomponent2',
        template: _raw_loader_popovercomponent2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_popovercomponent2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Popovercomponent2Page);



/***/ }),

/***/ 65765:
/*!**************************************************************!*\
  !*** ./src/app/layouts/kids/profil/profil-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilPageRoutingModule": () => (/* binding */ ProfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil.page */ 48664);




const routes = [
    {
        path: '',
        component: _profil_page__WEBPACK_IMPORTED_MODULE_0__.ProfilPage
    }
];
let ProfilPageRoutingModule = class ProfilPageRoutingModule {
};
ProfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilPageRoutingModule);



/***/ }),

/***/ 56534:
/*!******************************************************!*\
  !*** ./src/app/layouts/kids/profil/profil.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilPageModule": () => (/* binding */ ProfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil-routing.module */ 65765);
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil.page */ 48664);
/* harmony import */ var _home_status_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/status/status.component */ 64184);








let ProfilPageModule = class ProfilPageModule {
};
ProfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profil_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilPageRoutingModule
        ],
        declarations: [_profil_page__WEBPACK_IMPORTED_MODULE_1__.ProfilPage, _home_status_status_component__WEBPACK_IMPORTED_MODULE_2__.StatusComponent]
    })
], ProfilPageModule);



/***/ }),

/***/ 48664:
/*!****************************************************!*\
  !*** ./src/app/layouts/kids/profil/profil.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilPage": () => (/* binding */ ProfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profil.page.html */ 6508);
/* harmony import */ var _profil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil.page.scss */ 1534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_kids_Service_postKids_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/kids/Service/postKids.service */ 35568);
/* harmony import */ var _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Shared/Service/user.service */ 88838);
/* harmony import */ var _popovercomponent_popovercomponent_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popovercomponent/popovercomponent.page */ 33906);
/* harmony import */ var _popovercomponent2_popovercomponent2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popovercomponent2/popovercomponent2.page */ 28669);
/* harmony import */ var src_app_Shared_Model_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/Model/User */ 89040);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profil_pop_over_suivre_page_pop_over_suivre_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../profil/pop-over-suivre-page/pop-over-suivre-page.component */ 19701);
/* harmony import */ var src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/Service/event.service */ 34489);
/* harmony import */ var src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/Shared/Service/post.service */ 91820);
/* harmony import */ var src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/Shared/Service/favoris.service */ 38007);
/* harmony import */ var src_app_shared_Service_image_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/Service/image.service */ 388);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _coachprofile_image_profile_image_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../coachprofile/image-profile/image-profile.component */ 6510);
/* harmony import */ var _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/video-player/ngx */ 524);
/* harmony import */ var _post_display_post_display_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../post-display/post-display.component */ 97119);
/* harmony import */ var _display_img_profil_kids_display_img_profil_kids_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./display-img-profil-kids/display-img-profil-kids.component */ 14674);



/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/type-annotation-spacing */



















let ProfilPage = class ProfilPage {
    constructor(userservice, postKidsService, popoverController, userService, activatedRoute, savepostsService, eventService, postService, imageService, videoPlayer, modalController) {
        this.userservice = userservice;
        this.postKidsService = postKidsService;
        this.popoverController = popoverController;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.savepostsService = savepostsService;
        this.eventService = eventService;
        this.postService = postService;
        this.imageService = imageService;
        this.videoPlayer = videoPlayer;
        this.modalController = modalController;
        this.images = [];
        this.apiImg = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_12__.environment.apiImg}Post/`;
        this.apiImgUser = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_12__.environment.apiImg}User/`;
        this.mediafiles = [];
        this.newMediaFiles = [];
        this.secondNewMediaFiles = [];
        this.thirdNewMediaFiles = [];
        this.tempMedia = [];
        this.posts = [];
        this.update = false;
        this.user = new src_app_Shared_Model_User__WEBPACK_IMPORTED_MODULE_6__.User();
        this.checkSelf = false;
        this.page = 1;
        this.postsimg = [];
        this.postsStatut = [];
        this.ResWithOneimg = [];
        this.ResWithTwoimg = [];
        this.ResWithThreeimg = [];
    }
    ngOnInit() {
        this.selected = 'photo';
        this.getMe();
        this.title = "Profile";
        this.idProfilePassed = this.activatedRoute.snapshot.params.id;
        this.getUserById();
        this.getPosts();
    }
    getUserById() {
        this.userService.getUser(this.idProfilePassed).subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield response.data.data;
            this.date = yield this.user.datedenaissance.slice(0, 10);
        }), (error) => {
            console.error(error);
        });
    }
    getMe() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.userservice.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
                if (this.idProfilePassed === res.data.data._id) {
                    this.checkSelf = yield true;
                }
            }));
        });
    }
    getMyPostsKids() {
        this.userservice.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.user_id = yield res.data.data._id;
            this.postKidsService.getMyPostsKids(this.user_id).subscribe((res1) => {
                this.posts = res1['data'];
            });
        }));
    }
    presentPopover(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popovercomponent_popovercomponent_page__WEBPACK_IMPORTED_MODULE_4__.PopovercomponentPage,
                cssClass: 'popoverProfil-custom-class',
                event: ev,
                translucent: true
            });
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentPopover2(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popovercomponent2_popovercomponent2_page__WEBPACK_IMPORTED_MODULE_5__.Popovercomponent2Page,
                cssClass: 'popoverProfil-custom-class',
                event: ev,
                translucent: true
            });
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    segmentChanged(ev) {
        this.selected = ev.detail.value;
        if (this.selected === 'propos') {
            this.title = "Modifier profile";
        }
        else {
            this.title = "Profile";
        }
    }
    updateComment() {
        this.update = !this.update;
    }
    optionsFn() {
        console.log(this.gendre);
    }
    presentPopoverNewMsg(ev, idProfilePassed) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _profil_pop_over_suivre_page_pop_over_suivre_page_component__WEBPACK_IMPORTED_MODULE_7__.PopOverSuivrePageComponent,
                // cssClass: 'popoverProfil-custom-class',
                event: ev,
                componentProps: { idpassed: idProfilePassed },
                translucent: true
            });
            // console.log(idProfilePassed)
            popover.style.cssText = '--max-width: 150px;--max-height: 100px;--border-radius:70px; ';
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    userUpdate() {
        this.userService.updateMe(this.user).subscribe(res => {
        });
        this.update = false;
    }
    divIndex(index) {
        if (index % 4 === 0) {
            return "3";
        }
        else if (index % 3 === 0) {
            return "2";
        }
        else if (index % 2 === 0) {
            return "1";
        }
        else
            return "0";
    }
    getimageBypostId(idpost) {
        this.imageService.getImageBypost(idpost).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            this.postsimg$ = yield res;
            this.postsimg$.map(post => {
                this.postsimg.push(post);
                this.postsimg.sort(function (a, b) {
                    return a.createdAt - b.createdAt;
                });
            });
            this.ResWithOneimg = this.postsimg.slice(0, 1);
            this.ResWithTwoimg = this.postsimg.slice(1, 5);
            this.ResWithThreeimg = this.postsimg.slice(5, this.postsimg.length);
        }));
    }
    getPostStatusOnly(idpost) {
        this.imageService.getPostStatusOnly(idpost).subscribe((res) => {
            this.postsStatut = this.postsStatut.concat(res);
        });
    }
    getPosts(event) {
        this.postsOwnerId = this.postService.postsOwnerId;
        this.postService.getAllPostsById(this.page, this.idProfilePassed).subscribe((response) => {
            this.posts = this.posts.concat(response['data'].data);
            this.posts.forEach(post => {
                this.getimageBypostId(post.id);
                this.getPostStatusOnly(post.id);
                this.posts.push(post);
            });
            this.savepostsService.getAllSharedPosts(this.page, this.idProfilePassed).subscribe((res) => {
                this.posts$ = res.data.data;
                //console.log(res.data.data);
                this.posts$.map(post => {
                    this.getimageBypostId(post.post.id);
                    this.getPostStatusOnly(post.post.id);
                    this.posts.push(post.post);
                    console.log(this.posts);
                });
            });
            if (event) {
                event.target.complete();
            }
        }, error => {
            console.error(error);
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
    loadMore(event) {
        this.page++;
        this.getPosts(event);
    }
    getAllsharedPosts() {
        this.savepostsService.getAllSharedPosts(this.page, this.idProfilePassed).subscribe((res) => {
            this.posts$ = res.data.data;
            console.log(res.data.data);
            this.posts$.map(post => {
                this.posts.push(post.post);
            });
        });
    }
    getExt(fileName) {
        const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
        //console.log(ext);
        return ext;
    }
    displayImage(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            //console.log(url);
            console.log(this.mediafiles);
            const modal = yield this.modalController.create({
                component: _coachprofile_image_profile_image_profile_component__WEBPACK_IMPORTED_MODULE_13__.ImageProfileComponent,
                cssClass: 'imageModal',
                componentProps: {
                    image: a,
                },
            });
            return yield modal.present();
        });
    }
    displayContentPhotoTab(files) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _display_img_profil_kids_display_img_profil_kids_component__WEBPACK_IMPORTED_MODULE_16__.DisplayImgProfilKidsComponent,
                cssClass: 'imageModal',
                componentProps: {
                    post: files,
                },
            });
            return yield modal.present();
        });
    }
    displayContent(files) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _post_display_post_display_component__WEBPACK_IMPORTED_MODULE_15__.PostDisplayComponent,
                cssClass: 'imageModal',
                componentProps: {
                    post: files,
                },
            });
            return yield modal.present();
        });
    }
    displayVideo(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            // console.log(url);
            const modal = yield this.modalController.create({
                component: _coachprofile_image_profile_image_profile_component__WEBPACK_IMPORTED_MODULE_13__.ImageProfileComponent,
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
};
ProfilPage.ctorParameters = () => [
    { type: _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: src_app_Shared_kids_Service_postKids_service__WEBPACK_IMPORTED_MODULE_2__.PostKidsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.PopoverController },
    { type: _Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute },
    { type: src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_10__.FavorisService },
    { type: src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_8__.EventService },
    { type: src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_9__.PostService },
    { type: src_app_shared_Service_image_service__WEBPACK_IMPORTED_MODULE_11__.ImageService },
    { type: _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_14__.VideoPlayer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.ModalController }
];
ProfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
        selector: 'app-profil',
        template: _raw_loader_profil_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profil_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilPage);



/***/ }),

/***/ 19701:
/*!***************************************************************************************!*\
  !*** ./src/app/layouts/profil/pop-over-suivre-page/pop-over-suivre-page.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopOverSuivrePageComponent": () => (/* binding */ PopOverSuivrePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pop_over_suivre_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pop-over-suivre-page.component.html */ 47813);
/* harmony import */ var _pop_over_suivre_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-over-suivre-page.component.scss */ 36894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);






let PopOverSuivrePageComponent = class PopOverSuivrePageComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    dismissPopover(msg) {
        console.log(msg);
    }
    ngOnInit() {
    }
    wochat() {
        this.userService.getUser(this.idpassed).subscribe((response) => {
            this.user$ = response.data.data;
            if (response.data.data.role === 'user' || response.data.data.role === 'pro') {
                this.router.navigate(["chat", this.idpassed]);
            }
            else if (response.data.data.role === 'kids') {
                this.router.navigate(["chatkids", this.idpassed]);
            }
        }, (error) => {
            console.error(error);
        });
    }
};
PopOverSuivrePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
PopOverSuivrePageComponent.propDecorators = {
    idpassed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
PopOverSuivrePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-pop-over-suivre-page',
        template: _raw_loader_pop_over_suivre_page_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pop_over_suivre_page_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PopOverSuivrePageComponent);



/***/ }),

/***/ 16161:
/*!**************************************************************************!*\
  !*** ./src/app/layouts/kids/popovercomponent/popovercomponent.page.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-popover {\n  --width: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXJjb21wb25lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0csY0FBQTtBQUNKIiwiZmlsZSI6InBvcG92ZXJjb21wb25lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGlvbi1wb3BvdmVyIHtcclxuICAgIC0td2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuIl19 */");

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

/***/ 74287:
/*!***********************************************************************************!*\
  !*** ./src/app/layouts/kids/profil/popovercomponent2/popovercomponent2.page.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-popover {\n  --width: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG92ZXJjb21wb25lbnQyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNHLGNBQUE7QUFDSiIsImZpbGUiOiJwb3BvdmVyY29tcG9uZW50Mi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgaW9uLXBvcG92ZXIge1xuICAgIC0td2lkdGg6IDMyMHB4O1xuICB9XG4iXX0= */");

/***/ }),

/***/ 1534:
/*!******************************************************!*\
  !*** ./src/app/layouts/kids/profil/profil.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap\");\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\n.parent {\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.image1 {\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.image2 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  bottom: 10px;\n  left: 14px;\n  height: 80px;\n}\nion-segment-button {\n  border-radius: 15px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 5px 4px 4px;\n  height: 38px;\n  color: #858484;\n  --background-checked: #d8d6d6ab;\n  text-transform: none;\n  min-height: unset;\n  --indicator-color: none;\n  min-width: 80px;\n}\n.planning {\n  border-radius: 15px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 5px 4px 4px;\n  height: 38px;\n  color: #858484;\n  --background-checked: #d8d6d6ab;\n  text-transform: none;\n  min-height: unset;\n  --indicator-color: none;\n  min-width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n.myFooter {\n  background-color: #f8f5f5;\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #cecece;\n  justify-content: center;\n  width: 96%;\n  margin-left: 2%;\n  margin-right: 2%;\n  margin-bottom: 5px;\n}\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\nion-slides {\n  height: 100%;\n}\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\nion-toolbar {\n  --background: linear-gradient(135deg, #247238, #247238, #8ebf25, #8ebf25);\n}\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n.clear {\n  clear: both;\n}\n.slide-toggle {\n  display: none;\n}\n.slidemenu {\n  font-family: \"Leckerli One\", cursive;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n/*Bar Style*/\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n/*Animations*/\n.slidemenu label,\n.slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n/*Toggle*/\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n.ZoneShare {\n  height: 25px;\n  background: #e4e3e3;\n  border-radius: 23px;\n}\n.swiper-slide:not(.swiper-slide-active) > div {\n  display: none;\n}\nion-slide {\n  width: 4rem !important;\n  margin-right: -2px !important;\n}\n.img-wrapper {\n  background-repeat: no-repeat;\n  border-radius: 15px;\n}\n.centered {\n  position: fixed;\n  top: 35%;\n  left: 5px;\n}\nh1 {\n  font-size: 14px;\n  font-weight: 400;\n  margin: 10px 0 0 0;\n  color: #888888;\n}\na {\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 10px;\n  display: inline-block;\n  text-decoration: none;\n  color: #008a68;\n}\nsvg {\n  cursor: pointer;\n  overflow: visible;\n  width: 60px;\n}\nsvg #heart {\n  transform-origin: center;\n  animation: animateHeartOut 0.3s linear forwards;\n}\nsvg #main-circ {\n  transform-origin: 29.5px 29.5px;\n}\n#checkbox {\n  display: none;\n}\n#checkbox:checked + label svg #heart {\n  transform: scale(0.2);\n  fill: #e2264d;\n  animation: animateHeart 0.3s linear forwards 0.25s;\n}\n#checkbox:checked + label svg #main-circ {\n  transition: all 2s;\n  animation: animateCircle 0.3s linear forwards;\n  opacity: 1;\n}\n#checkbox:checked + label svg #grp1 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp1 #oval1 {\n  transform: scale(0) translate(0, -30px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp1 #oval2 {\n  transform: scale(0) translate(10px, -50px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp2 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp2 #oval1 {\n  transform: scale(0) translate(30px, -15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp2 #oval2 {\n  transform: scale(0) translate(60px, -15px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp3 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp3 #oval1 {\n  transform: scale(0) translate(30px, 0px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp3 #oval2 {\n  transform: scale(0) translate(60px, 10px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp4 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp4 #oval1 {\n  transform: scale(0) translate(30px, 15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp4 #oval2 {\n  transform: scale(0) translate(40px, 50px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp5 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp5 #oval1 {\n  transform: scale(0) translate(-10px, 20px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp5 #oval2 {\n  transform: scale(0) translate(-60px, 30px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp6 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp6 #oval1 {\n  transform: scale(0) translate(-30px, 0px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp6 #oval2 {\n  transform: scale(0) translate(-60px, -5px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp7 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp7 #oval1 {\n  transform: scale(0) translate(-30px, -15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp7 #oval2 {\n  transform: scale(0) translate(-55px, -30px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp2 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp3 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp4 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp5 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp6 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp7 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n@keyframes animateCircle {\n  40% {\n    transform: scale(10);\n    opacity: 1;\n    fill: #dd4688;\n  }\n  55% {\n    transform: scale(11);\n    opacity: 1;\n    fill: #d46abf;\n  }\n  65% {\n    transform: scale(12);\n    opacity: 1;\n    fill: #cc8ef5;\n  }\n  75% {\n    transform: scale(13);\n    opacity: 1;\n    fill: transparent;\n    stroke: #cc8ef5;\n    stroke-width: 0.5;\n  }\n  85% {\n    transform: scale(17);\n    opacity: 1;\n    fill: transparent;\n    stroke: #cc8ef5;\n    stroke-width: 0.2;\n  }\n  95% {\n    transform: scale(18);\n    opacity: 1;\n    fill: transparent;\n    stroke: #cc8ef5;\n    stroke-width: 0.1;\n  }\n  100% {\n    transform: scale(19);\n    opacity: 1;\n    fill: transparent;\n    stroke: #cc8ef5;\n    stroke-width: 0;\n  }\n}\n@keyframes animateHeart {\n  0% {\n    transform: scale(0.2);\n  }\n  40% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes animateHeartOut {\n  0% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.imgUser {\n  height: 230px;\n  object-fit: cover;\n}\n.mylabelabonnement {\n  white-space: nowrap;\n  font-family: \"Leckerli One\", cursive;\n  font-weight: bold;\n  color: darkgreen;\n}\n.shape {\n  border-style: solid;\n  border-width: 0 70px 40px 0;\n  float: right;\n  height: 0px;\n  width: 0px;\n  /* IE 9 */\n  /* Opera 10.5 */\n  /* Safari and Chrome */\n  transform: rotate(360deg);\n}\n.offer {\n  background: #fff;\n  border: 1px solid #ddd;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n  margin: 15px 0;\n  overflow: hidden;\n}\n.offer-radius {\n  border-radius: 7px;\n}\n.offer-danger {\n  border-color: #d9534f;\n}\n.offer-danger .shape {\n  border-color: transparent #d9534f transparent transparent;\n  border-color: rgba(255, 255, 255, 0) #d9534f rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);\n}\n.offer-warning {\n  border-color: #f0ad4e;\n}\n.offer-warning .shape {\n  border-color: transparent #f0ad4e transparent transparent;\n  border-color: rgba(255, 255, 255, 0) #f0ad4e rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);\n}\n.shape-text {\n  color: #fff;\n  font-size: 12px;\n  font-weight: bold;\n  position: relative;\n  right: -40px;\n  top: 2px;\n  white-space: nowrap;\n  /* IE 9 */\n  /* Opera 10.5 */\n  /* Safari and Chrome */\n  transform: rotate(30deg);\n}\n.offer-content {\n  padding: 0 20px 10px;\n}\n.mylabelsegment {\n  font-family: cursive;\n  font-weight: bold;\n  color: #8a8b8a;\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\nion-col.my-thin-col {\n  padding: 0;\n  margin-left: 6px;\n  width: calc(calc(6 / var(--ion-grid-columns, 12.5)) * 100%);\n  max-width: calc(calc(6 / var(--ion-grid-columns, 12.5)) * 100%);\n}\n.stylecards {\n  box-shadow: rgba(0, 0, 0, 0.08) -2px 3px 6px;\n  border-radius: 10px;\n}\n.labelnblikes {\n  font-size: smaller;\n}\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n.content-profil {\n  padding: 0 10px 20px 10px;\n}\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #cecece;\n  justify-content: center;\n  width: 96%;\n  margin-left: 2%;\n  margin-right: 2%;\n  margin-bottom: 5px;\n}\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\nion-slides {\n  height: 100%;\n}\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\nion-toolbar {\n  --background: linear-gradient(135deg, #247238, #247238, #8ebf25, #8ebf25);\n}\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n.clear {\n  clear: both;\n}\n.slide-toggle {\n  display: none;\n}\n.slidemenu {\n  font-family: \"Leckerli One\", cursive;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n/*Bar Style*/\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n/*Animations*/\n.slidemenu label,\n.slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n/*Toggle*/\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n.ZoneShare {\n  height: 25px;\n  background: #e4e3e3;\n  border-radius: 23px;\n}\n.swiper-slide:not(.swiper-slide-active) > div {\n  display: none;\n}\nion-slide {\n  width: 4rem !important;\n  margin-right: -2px !important;\n}\n.img-wrapper {\n  padding: 20px;\n}\n.centered {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n.myImageUser {\n  border-radius: 15px;\n  margin-right: 25px;\n  width: 30px;\n  height: 30px;\n}\nh1 {\n  font-size: 14px;\n  font-weight: 400;\n  margin: 10px 0 0 0;\n  color: #888888;\n}\na {\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 10px;\n  display: inline-block;\n  text-decoration: none;\n  color: #008a68;\n}\nsvg {\n  cursor: pointer;\n  overflow: visible;\n  width: 60px;\n}\nsvg #heart {\n  transform-origin: center;\n  animation: animateHeartOut 0.3s linear forwards;\n}\nsvg #main-circ {\n  transform-origin: 29.5px 29.5px;\n}\n#checkbox {\n  display: none;\n}\n#checkbox:checked + label svg #heart {\n  transform: scale(0.2);\n  fill: #e2264d;\n  animation: animateHeart 0.3s linear forwards 0.25s;\n}\n#checkbox:checked + label svg #main-circ {\n  transition: all 2s;\n  animation: animateCircle 0.3s linear forwards;\n  opacity: 1;\n}\n#checkbox:checked + label svg #grp1 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp1 #oval1 {\n  transform: scale(0) translate(0, -30px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp1 #oval2 {\n  transform: scale(0) translate(10px, -50px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp2 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp2 #oval1 {\n  transform: scale(0) translate(30px, -15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp2 #oval2 {\n  transform: scale(0) translate(60px, -15px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp3 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp3 #oval1 {\n  transform: scale(0) translate(30px, 0px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp3 #oval2 {\n  transform: scale(0) translate(60px, 10px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp4 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp4 #oval1 {\n  transform: scale(0) translate(30px, 15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp4 #oval2 {\n  transform: scale(0) translate(40px, 50px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp5 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp5 #oval1 {\n  transform: scale(0) translate(-10px, 20px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp5 #oval2 {\n  transform: scale(0) translate(-60px, 30px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp6 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp6 #oval1 {\n  transform: scale(0) translate(-30px, 0px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp6 #oval2 {\n  transform: scale(0) translate(-60px, -5px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp7 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp7 #oval1 {\n  transform: scale(0) translate(-30px, -15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp7 #oval2 {\n  transform: scale(0) translate(-55px, -30px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp2 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp3 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp4 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp5 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp6 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp7 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n@keyframes animateCircle {\n  40% {\n    transform: scale(10);\n    opacity: 1;\n    fill: #dd4688;\n  }\n  55% {\n    transform: scale(11);\n    opacity: 1;\n    fill: #d46abf;\n  }\n  65% {\n    transform: scale(12);\n    opacity: 1;\n    fill: #cc8ef5;\n  }\n  75% {\n    transform: scale(13);\n    opacity: 1;\n    fill: transparent;\n    stroke: #cc8ef5;\n    stroke-width: 0.5;\n  }\n  85% {\n    transform: scale(17);\n    opacity: 1;\n    fill: transparent;\n    stroke: #cc8ef5;\n    stroke-width: 0.2;\n  }\n  95% {\n    transform: scale(18);\n    opacity: 1;\n    fill: transparent;\n    stroke: #cc8ef5;\n    stroke-width: 0.1;\n  }\n  100% {\n    transform: scale(19);\n    opacity: 1;\n    fill: transparent;\n    stroke: #cc8ef5;\n    stroke-width: 0;\n  }\n}\n@keyframes animateHeart {\n  0% {\n    transform: scale(0.2);\n  }\n  40% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes animateHeartOut {\n  0% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.first-bloc {\n  display: flex;\n  margin-top: 15px;\n}\n.first-photo {\n  height: 185px;\n  width: 170px;\n  border-radius: 10px;\n  margin-left: 0px;\n  object-fit: cover;\n}\n.fourPics {\n  height: 80px;\n  width: 80px;\n  margin: 0px 12px 5px 0px;\n  border-radius: 10px;\n  object-fit: cover;\n}\n.photo-set-one {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 10px;\n}\n.body {\n  padding: 20px 20px 0 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#photo-set-two {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 15px;\n  justify-content: space-between;\n}\n.eightPic {\n  width: 75px;\n  margin: 7px;\n  border-radius: 10px;\n}\n.left-tape-0 {\n  position: absolute;\n  border-radius: 5px;\n  width: 20px;\n  height: 30px;\n  background-color: rgba(226, 183, 43, 0.753);\n  transform: rotate(-30deg);\n  top: -15px;\n  left: -10px;\n}\n.right-tape-0 {\n  position: absolute;\n  border-radius: 5px;\n  width: 20px;\n  height: 30px;\n  background-color: rgba(226, 183, 43, 0.753);\n  transform: rotate(30deg);\n  top: -15px;\n  right: -12px;\n}\n.left-tape-1 {\n  position: absolute;\n  border-radius: 5px;\n  width: 20px;\n  height: 30px;\n  background-color: rgba(189, 43, 226, 0.753);\n  transform: rotate(-15deg);\n  top: -15px;\n  left: -5px;\n}\n.right-tape-1 {\n  position: absolute;\n  border-radius: 5px;\n  width: 20px;\n  height: 30px;\n  background-color: rgba(189, 43, 226, 0.753);\n  transform: rotate(15deg);\n  top: -17px;\n  right: -5px;\n}\n.left-tape-2 {\n  position: absolute;\n  border-radius: 5px;\n  width: 20px;\n  height: 30px;\n  background-color: rgba(61, 43, 226, 0.753);\n  transform: rotate(-15deg);\n  top: -15px;\n  left: -5px;\n}\n.right-tape-2 {\n  position: absolute;\n  border-radius: 5px;\n  width: 20px;\n  height: 30px;\n  background-color: rgba(61, 43, 226, 0.753);\n  transform: rotate(15deg);\n  top: -17px;\n  right: -5px;\n}\n.left-tape-3 {\n  position: absolute;\n  border-radius: 5px;\n  width: 20px;\n  height: 30px;\n  background-color: rgba(43, 226, 67, 0.753);\n  transform: rotate(-15deg);\n  top: -15px;\n  left: -5px;\n}\n.right-tape-3 {\n  position: absolute;\n  border-radius: 5px;\n  width: 20px;\n  height: 30px;\n  background-color: rgba(43, 226, 67, 0.753);\n  transform: rotate(15deg);\n  top: -17px;\n  right: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNBLGtEQUFBO0FBNUhKO0FBOEhFO0VBQ0Usa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLFVBQUE7QUE1SEo7QUE4SEU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUE1SEo7QUE2SEk7RUFDRSx1Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUEzSE47QUE2SEk7RUFDRSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUEzSE47QUE4SEU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUE1SEo7QUE2SEk7RUFDRSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUEzSE47QUE2SEk7RUFDRSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUEzSE47QUE4SEU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUE1SEo7QUE2SEk7RUFDRSx3Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUEzSE47QUE2SEk7RUFDRSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUEzSE47QUE4SEU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUE1SEo7QUE2SEk7RUFDRSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUEzSE47QUE2SEk7RUFDRSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUEzSE47QUE4SEU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUE1SEo7QUE2SEk7RUFDRSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUEzSE47QUE2SEk7RUFDRSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUEzSE47QUE4SEU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUE1SEo7QUE2SEk7RUFDRSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUEzSE47QUE2SEk7RUFDRSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUEzSE47QUE4SEU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUE1SEo7QUE2SEk7RUFDRSwyQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUEzSE47QUE2SEk7RUFDRSwyQ0FBQTtFQUNBLHVC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QUE7RUFDQSxXQUFBO0FBOVBGO0FBaVFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBOVBGO0FBaVFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBOVBGIiwiZmlsZSI6InByb2ZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGVja2VybGkrT25lJmRpc3BsYXk9c3dhcFwiKTtcblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLmltYWdlMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuXG59XG4uaW1hZ2UyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDE0cHg7XG4gIGhlaWdodDogODBweDtcbn1cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCByZ2IoMCAwIDAgLyA0MyUpO1xuICBtYXJnaW46IDVweCA0cHggNHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGNvbG9yOiAjODU4NDg0O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2Q4ZDZkNmFiO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbWluLWhlaWdodDogdW5zZXQ7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiBub25lO1xuICBtaW4td2lkdGg6IDgwcHg7XG59XG4ucGxhbm5pbmd7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCByZ2IoMCAwIDAgLyA0MyUpO1xuICBtYXJnaW46IDVweCA0cHggNHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGNvbG9yOiAjODU4NDg0O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2Q4ZDZkNmFiO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbWluLWhlaWdodDogdW5zZXQ7XG4gIC0taW5kaWNhdG9yLWNvbG9yOiBub25lO1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogRGFya0dyZWVuOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMjQ3MjM4LCAjMjQ3MjM4LCAgIzhFQkYyNSwjOEVCRjI1KTtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4vLyBjc3MgYnV0dG9uXG4kcnVsZXI6IDE2cHg7XG4kY29sb3ItcmVkOiAjNzI2YjZiO1xuJGNvbG9yLWJnOiAjZWJlY2YwO1xuJGNvbG9yLXNoYWRvdzogI2JhYmVjYztcbiRjb2xvci13aGl0ZTogI2ZmZjtcblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgaW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNhcmQtdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM2JTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTIlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG59XG4ubXlGb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmNWY1O1xuICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcbiAgcGFkZGluZy1ib3R0b206IDA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCAxcHggI2NlY2VjZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA5NiU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm15Z2FsbGVyeSB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGJvdHRvbTogNSU7XG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjQ3MjM4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBvcGFjaXR5OiA1LjI7XG4gIH1cbn1cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjQ3MjM4LCAjMjQ3MjM4LCAjOGViZjI1LCAjOGViZjI1KTtcbn1cblxuLnNoYWRvd2JveCB7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICM4RUJGMjU7XG4gIC8vIGJveC1zaGFkb3c6IDJweCAxcHggMXB4ICMyNDcyMzg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYsICNkZGQgNDAlLCAjY2NjKTtcbn1cblxuLy9cblxuLy8gLmNsZWFye1xuLy8gICBjbGVhcjogYm90aDtcbi8vIH1cblxuLy8gLnNsaWRlLXRvZ2dsZXtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cblxuLy8gLnNsaWRlbWVudXtcbi8vICAgZm9udC1mYW1pbHk6ICdMZWNrZXJsaSBPbmUnLCBjdXJzaXZlOztcbi8vICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gICBtYXJnaW46IDUwcHggYXV0bztcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vIH1cblxuLy8gLnNsaWRlbWVudSBsYWJlbHtcbi8vICAgd2lkdGg6IDI1JTtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgZmxvYXQ6IGxlZnQ7XG4vLyAgIGNvbG9yOiAjMzMzO1xuLy8gICBvcGFjaXR5OiAwLjI7XG5cbi8vIH1cblxuLy8gLnNsaWRlbWVudSBsYWJlbCAuaWNvbntcbi8vICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICBib3JkZXI6IHNvbGlkIDJweCAjMzMzO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIGhlaWdodDogNTBweDtcbi8vICAgd2lkdGg6IDUwcHg7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBtYXJnaW46IDAgYXV0bztcbi8vICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vIH1cblxuLy8gLypCYXIgU3R5bGUqL1xuXG4vLyAuc2xpZGVyIC5iYXJ7XG4vLyAgIHdpZHRoOiA1MCU7XG4vLyAgIGhlaWdodDogNXB4O1xuLy8gICBiYWNrZ3JvdW5kOiByZ2IoMSwgNjgsIDM3KTtcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gfVxuXG4vLyAvKkFuaW1hdGlvbnMqL1xuLy8gLnNsaWRlbWVudSBsYWJlbCwgLnNsaWRlciAuYmFyIHtcbi8vICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuLy8gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbi8vICAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4vLyB9XG5cbi8vIC8qVG9nZ2xlKi9cblxuLy8gLnNsaWRlbWVudSAuc2xpZGUtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbHtcbi8vICAgb3BhY2l0eTogMTtcbi8vIH1cblxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0xOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAwOyB9XG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDMwJTsgfVxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0zOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiA1MCU7IH1cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tNDpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNzUlOyB9XG5cbi8vIG5hdiB7XG4vLyAgIG1heC13aWR0aDoxMDAlO1xuLy8gICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsICNmZmZmZmYgMjUlLCAjZmZmZmZmIDc1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbi8vICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcbi8vIH1cblxuLy8gbmF2IHVsIHtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAyNSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4vLyB9XG5cbi8vIG5hdiB1bCBsaSB7XG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vIH1cblxuLy8gbmF2IHVsIGxpIGEge1xuLy8gICBwYWRkaW5nOjEwcHg7XG4vLyAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4vLyAgIGNvbG9yOiBibGFjaztcbi8vICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gfVxuXG4vLyBuYXYgdWwgbGkgYTpob3ZlciB7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4vLyAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbi8vICAgY29sb3I6ICM4RUJGMjU7XG4vLyB9XG5cbi5jbGVhciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uc2xpZGUtdG9nZ2xlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlbWVudSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxlY2tlcmxpIE9uZVwiLCBjdXJzaXZlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAxMHB4IDIwcHggMjBweCBhdXRvO1xuICAvLyBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2xpZGVtZW51IGxhYmVsIHtcbiAgd2lkdGg6IDI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiBncmVlbjtcbiAgb3BhY2l0eTogMC4yO1xufVxuLnNsaWRlbWVudSBsYWJlbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGdyZWVuO1xufVxuLnNsaWRlbWVudSBsYWJlbCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjMjQ3MjM4O1xufVxuLnNsaWRlbWVudSBsYWJlbCAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzI0NzIzODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4vKkJhciBTdHlsZSovXG4uc2xpZGVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2xpZGVyIC5iYXIge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi8qQW5pbWF0aW9ucyovXG4uc2xpZGVtZW51IGxhYmVsLFxuLnNsaWRlciAuYmFyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG4vKlRvZ2dsZSovXG5cbi5zbGlkZW1lbnUgLnNsaWRlLXRvZ2dsZTpjaGVja2VkICsgbGFiZWwge1xuICBvcGFjaXR5OiAxO1xufVxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0xOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXIge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMjpjaGVja2VkIH4gLnNsaWRlciAuYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMzpjaGVja2VkIH4gLnNsaWRlciAuYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuI2NhcnQtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xufVxuLm91dHRlci1iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICAvL2JhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA2NHB4O1xufVxuLmlubmVyLWJhZGdlLU9LIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMjBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmlubmVyLWJhZGdlLU9LIC5iYWRnZUNhbmNlbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmlubmVyLWJhZGdlLUtPIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogLTEwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbm5lci1iYWRnZS1LTyAuYmFkZ2VDYW5jZWwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiA4cHg7XG59XG4uaW5uZXItYmFkZ2UtVGNoYXQge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yM3B4O1xuICBsZWZ0OiAtMjBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmlubmVyLWJhZGdlLVRjaGF0IC5iYWRnZUNhbmNlbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi8vIHVsIHtcbi8vICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuLy8gICB3aWR0aDogNTAwcHg7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udDogYm9sZCAyMHB4LzEuNSBIZWx2ZXRpY2EsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4vLyB9XG5cbi8vIGxpIGltZyB7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gICBtYXJnaW46IDAgMTVweCAwIDA7XG4vLyB9XG5cbi8vIGxpIHAge1xuLy8gICBmb250OiAyMDAgMTJweC8xLjUgR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbi8vIH1cblxuLy8gbGkge1xuLy8gICBwYWRkaW5nOiAxMHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gbGk6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kOiAjZWVlO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi8vIC5pbWFnZXMge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIH1cblxuLy8gICAuaW1hZ2VzIC5Vc2VyUG9zdGVkIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDQwJTtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgdG9wOjEwcHg7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgfVxuLlpvbmVTaGFyZSB7XG4gIC8vIG1hcmdpbi10b3A6IC01cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZDogI2U0ZTNlMztcbiAgYm9yZGVyLXJhZGl1czogMjNweDtcbn1cbi5zd2lwZXItc2xpZGU6bm90KC5zd2lwZXItc2xpZGUtYWN0aXZlKSA+IGRpdiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pb24tc2xpZGUge1xuICB3aWR0aDogNHJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IC0ycHggIWltcG9ydGFudDtcbn1cbi5pbWctd3JhcHBlciB7XG4gIC8vYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgLy9ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCAxcHggIzI0NzIzODtcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDIxOSwgMjE1LCAyMTUpLCByZ2IoMjE5LCAyMTUsIDIxNSk0MCUsIHJnYigyMTksIDIxNSwgMjE1KSk7XG59XG4uY2VudGVyZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzUlO1xuICBsZWZ0OiA1cHg7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG4gIGNvbG9yOiAjODg4ODg4O1xufVxuYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwOGE2ODtcbn1cbnN2ZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHdpZHRoOiA2MHB4O1xuICAjaGVhcnQge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBhbmltYXRpb246IGFuaW1hdGVIZWFydE91dCAwLjNzIGxpbmVhciBmb3J3YXJkcztcbiAgfVxuICAjbWFpbi1jaXJjIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAyOS41cHggMjkuNXB4O1xuICB9XG59XG4jY2hlY2tib3gge1xuICBkaXNwbGF5OiBub25lO1xufVxuI2NoZWNrYm94OmNoZWNrZWQgKyBsYWJlbCBzdmcge1xuICAjaGVhcnQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yKTtcbiAgICBmaWxsOiAjZTIyNjRkO1xuICAgIGFuaW1hdGlvbjogYW5pbWF0ZUhlYXJ0IDAuM3MgbGluZWFyIGZvcndhcmRzIDAuMjVzO1xuICB9XG4gICNtYWluLWNpcmMge1xuICAgIHRyYW5zaXRpb246IGFsbCAycztcbiAgICBhbmltYXRpb246IGFuaW1hdGVDaXJjbGUgMC4zcyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAjZ3JwMSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGFsbCAwLjNzO1xuICAgICNvdmFsMSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgwLCAtMzBweCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDAgMDtcbiAgICAgIHRyYW5zaXRpb246IDAuNXMgdHJhbnNmb3JtIDAuM3M7XG4gICAgfVxuICAgICNvdmFsMiB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgxMHB4LCAtNTBweCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDAgMDtcbiAgICAgIHRyYW5zaXRpb246IDEuNXMgdHJhbnNmb3JtIDAuM3M7XG4gICAgfVxuICB9XG4gICNncnAyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDAuMXMgYWxsIDAuM3M7XG4gICAgI292YWwxIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDMwcHgsIC0xNXB4KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMCAwO1xuICAgICAgdHJhbnNpdGlvbjogMC41cyB0cmFuc2Zvcm0gMC4zcztcbiAgICB9XG4gICAgI292YWwyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDYwcHgsIC0xNXB4KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMCAwO1xuICAgICAgdHJhbnNpdGlvbjogMS41cyB0cmFuc2Zvcm0gMC4zcztcbiAgICB9XG4gIH1cbiAgI2dycDMge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBhbGwgMC4zcztcbiAgICAjb3ZhbDEge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMzBweCwgMHB4KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMCAwO1xuICAgICAgdHJhbnNpdGlvbjogMC41cyB0cmFuc2Zvcm0gMC4zcztcbiAgICB9XG4gICAgI292YWwyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDYwcHgsIDEwcHgpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwIDA7XG4gICAgICB0cmFuc2l0aW9uOiAxLjVzIHRyYW5zZm9ybSAwLjNzO1xuICAgIH1cbiAgfVxuICAjZ3JwNCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGFsbCAwLjNzO1xuICAgICNvdmFsMSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgzMHB4LCAxNXB4KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMCAwO1xuICAgICAgdHJhbnNpdGlvbjogMC41cyB0cmFuc2Zvcm0gMC4zcztcbiAgICB9XG4gICAgI292YWwyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDQwcHgsIDUwcHgpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwIDA7XG4gICAgICB0cmFuc2l0aW9uOiAxLjVzIHRyYW5zZm9ybSAwLjNzO1xuICAgIH1cbiAgfVxuICAjZ3JwNSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGFsbCAwLjNzO1xuICAgICNvdmFsMSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgtMTBweCwgMjBweCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDAgMDtcbiAgICAgIHRyYW5zaXRpb246IDAuNXMgdHJhbnNmb3JtIDAuM3M7XG4gICAgfVxuICAgICNvdmFsMiB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgtNjBweCwgMzBweCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDAgMDtcbiAgICAgIHRyYW5zaXRpb246IDEuNXMgdHJhbnNmb3JtIDAuM3M7XG4gICAgfVxuICB9XG4gICNncnA2IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDAuMXMgYWxsIDAuM3M7XG4gICAgI292YWwxIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKC0zMHB4LCAwcHgpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwIDA7XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzIHRyYW5zZm9ybSAwLjNzO1xuICAgIH1cbiAgICAjb3ZhbDIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoLTYwcHgsIC01cHgpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwIDA7XG4gICAgICB0cmFuc2l0aW9uOiAxLjVzIHRyYW5zZm9ybSAwLjNzO1xuICAgIH1cbiAgfVxuICAjZ3JwNyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGFsbCAwLjNzO1xuICAgICNvdmFsMSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgtMzBweCwgLTE1cHgpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwIDA7XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzIHRyYW5zZm9ybSAwLjNzO1xuICAgIH1cbiAgICAjb3ZhbDIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoLTU1cHgsIC0zMHB4KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMCAwO1xuICAgICAgdHJhbnNpdGlvbjogMS41cyB0cmFuc2Zvcm0gMC4zcztcbiAgICB9XG4gIH1cbiAgI2dycDIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBvcGFjaXR5IDAuM3M7XG4gIH1cbiAgI2dycDMge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBvcGFjaXR5IDAuM3M7XG4gIH1cbiAgI2dycDQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBvcGFjaXR5IDAuM3M7XG4gIH1cbiAgI2dycDUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBvcGFjaXR5IDAuM3M7XG4gIH1cbiAgI2dycDYge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBvcGFjaXR5IDAuM3M7XG4gIH1cbiAgI2dycDcge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBvcGFjaXR5IDAuM3M7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZUNpcmNsZSB7XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWxsOiAjZGQ0Njg4O1xuICB9XG4gIDU1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWxsOiAjZDQ2YWJmO1xuICB9XG4gIDY1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMik7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWxsOiAjY2M4ZWY1O1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMyk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICBzdHJva2U6ICNjYzhlZjU7XG4gICAgc3Ryb2tlLXdpZHRoOiAwLjU7XG4gIH1cbiAgODUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDE3KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgIHN0cm9rZTogI2NjOGVmNTtcbiAgICBzdHJva2Utd2lkdGg6IDAuMjtcbiAgfVxuICA5NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTgpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgc3Ryb2tlOiAjY2M4ZWY1O1xuICAgIHN0cm9rZS13aWR0aDogMC4xO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTkpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgc3Ryb2tlOiAjY2M4ZWY1O1xuICAgIHN0cm9rZS13aWR0aDogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBhbmltYXRlSGVhcnQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZUhlYXJ0T3V0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4uaW1nVXNlciB7XG4gIGhlaWdodDogMjMwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLm15bGFiZWxhYm9ubmVtZW50IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1mYW1pbHk6IFwiTGVja2VybGkgT25lXCIsIGN1cnNpdmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZGFya2dyZWVuO1xufVxuLnNoYXBlIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDcwcHggNDBweCAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMHB4O1xuICB3aWR0aDogMHB4O1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLyogSUUgOSAqL1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAvKiBPcGVyYSAxMC41ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbn1cbi5vZmZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luOiAxNXB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub2ZmZXItcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLm9mZmVyLWRhbmdlciB7XG4gIGJvcmRlci1jb2xvcjogI2Q5NTM0Zjtcbn1cbi5vZmZlci1kYW5nZXIgLnNoYXBlIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZDk1MzRmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgI2Q5NTM0ZiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cbi5vZmZlci13YXJuaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjBhZDRlO1xufVxuLm9mZmVyLXdhcm5pbmcgLnNoYXBlIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjBhZDRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgI2YwYWQ0ZSByZ2JhKDI1NSwgMjU1LCAyNTUsIDApXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cbi5zaGFwZS10ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IC00MHB4O1xuICB0b3A6IDJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTsgLyogSUUgOSAqL1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAvKiBPcGVyYSAxMC41ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpOyAvKiBTYWZhcmkgYW5kIENocm9tZSAqL1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG59XG4ub2ZmZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMjBweCAxMHB4O1xufVxuLy8gMTMzNVxuXG4ubXlsYWJlbHNlZ21lbnQge1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiByZ2IoMTM4LCAxMzksIDEzOCk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5pb24tY29sLm15LXRoaW4tY29sIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgd2lkdGg6IGNhbGMoY2FsYyg2IC8gdmFyKC0taW9uLWdyaWQtY29sdW1ucywgMTIuNSkpICogMTAwJSk7XG4gIG1heC13aWR0aDogY2FsYyhjYWxjKDYgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMi41KSkgKiAxMDAlKTtcbn1cblxuLnN0eWxlY2FyZHMge1xuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA4JSkgLTJweCAzcHggNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmxhYmVsbmJsaWtlcyB7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cbiNjb250YWluZXIge1xuICBoZWlnaHQ6IDgwMHB4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBEYXJrR3JlZW47IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyNDcyMzgsICMyNDcyMzgsICAjOEVCRjI1LCM4RUJGMjUpO1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi8vIGNzcyBidXR0b25cbiRydWxlcjogMTZweDtcbiRjb2xvci1yZWQ6ICM3MjZiNmI7XG4kY29sb3ItYmc6ICNlYmVjZjA7XG4kY29sb3Itc2hhZG93OiAjYmFiZWNjO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICBpb24tY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY2FyZC10aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzYlO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIC5jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLmNvbnRlbnQtcHJvZmlsIHtcbiAgcGFkZGluZzogMCAxMHB4IDIwcHggMTBweDtcbn1cblxuLm15Rm9vdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gIHBhZGRpbmctYm90dG9tOiAwNXB4O1xuICBsaW5lLWhlaWdodDogMDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxcHggMXB4ICNjZWNlY2U7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5teWdhbGxlcnkge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICBib3R0b206IDUlO1xuICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzI0NzIzODtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgb3BhY2l0eTogNS4yO1xuICB9XG59XG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI0NzIzOCwgIzI0NzIzOCwgIzhlYmYyNSwgIzhlYmYyNSk7XG59XG5cbi5zaGFkb3dib3gge1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjOEVCRjI1O1xuICAvLyBib3gtc2hhZG93OiAycHggMXB4IDFweCAjMjQ3MjM4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmLCAjZGRkIDQwJSwgI2NjYyk7XG59XG5cbi8vXG5cbi8vIC5jbGVhcntcbi8vICAgY2xlYXI6IGJvdGg7XG4vLyB9XG5cbi8vIC5zbGlkZS10b2dnbGV7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIC5zbGlkZW1lbnV7XG4vLyAgIGZvbnQtZmFtaWx5OiAnTGVja2VybGkgT25lJywgY3Vyc2l2ZTs7XG4vLyAgIG1heC13aWR0aDogMTAwJTtcbi8vICAgbWFyZ2luOiA1MHB4IGF1dG87XG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyB9XG5cbi8vIC5zbGlkZW1lbnUgbGFiZWx7XG4vLyAgIHdpZHRoOiAyNSU7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gICBjb2xvcjogIzMzMztcbi8vICAgb3BhY2l0eTogMC4yO1xuXG4vLyB9XG5cbi8vIC5zbGlkZW1lbnUgbGFiZWwgLmljb257XG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgYm9yZGVyOiBzb2xpZCAycHggIzMzMztcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBoZWlnaHQ6IDUwcHg7XG4vLyAgIHdpZHRoOiA1MHB4O1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyB9XG5cbi8vIC8qQmFyIFN0eWxlKi9cblxuLy8gLnNsaWRlciAuYmFye1xuLy8gICB3aWR0aDogNTAlO1xuLy8gICBoZWlnaHQ6IDVweDtcbi8vICAgYmFja2dyb3VuZDogcmdiKDEsIDY4LCAzNyk7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vIH1cblxuLy8gLypBbmltYXRpb25zKi9cbi8vIC5zbGlkZW1lbnUgbGFiZWwsIC5zbGlkZXIgLmJhciB7XG4vLyAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbi8vICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4vLyAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuLy8gfVxuXG4vLyAvKlRvZ2dsZSovXG5cbi8vIC5zbGlkZW1lbnUgLnNsaWRlLXRvZ2dsZTpjaGVja2VkICsgbGFiZWx7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyB9XG5cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMDsgfVxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0yOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAzMCU7IH1cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMzpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNTAlOyB9XG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTQ6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDc1JTsgfVxuXG4vLyBuYXYge1xuLy8gICBtYXgtd2lkdGg6MTAwJTtcbi8vICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCAjZmZmZmZmIDI1JSwgI2ZmZmZmZiA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4vLyAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyB9XG5cbi8vIG5hdiB1bCB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMjUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuLy8gICBib3gtc2hhZG93OiAwIDAgMjVweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gfVxuXG4vLyBuYXYgdWwgbGkge1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyB9XG5cbi8vIG5hdiB1bCBsaSBhIHtcbi8vICAgcGFkZGluZzoxMHB4O1xuLy8gICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbi8vICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuLy8gICBjb2xvcjogYmxhY2s7XG4vLyAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vIH1cblxuLy8gbmF2IHVsIGxpIGE6aG92ZXIge1xuLy8gICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4vLyAgIGNvbG9yOiAjOEVCRjI1O1xuLy8gfVxuXG4uY2xlYXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnNsaWRlLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZW1lbnUge1xuICBmb250LWZhbWlseTogXCJMZWNrZXJsaSBPbmVcIiwgY3Vyc2l2ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggMTBweCAyMHB4IDIwcHggYXV0bztcbiAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNsaWRlbWVudSBsYWJlbCB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogZ3JlZW47XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLnNsaWRlbWVudSBsYWJlbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uc2xpZGVtZW51IGxhYmVsIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICMyNDcyMzg7XG59XG5cbi5zbGlkZW1lbnUgbGFiZWwgLmljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICMyNDcyMzg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKkJhciBTdHlsZSovXG5cbi5zbGlkZXIge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNsaWRlciAuYmFyIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qQW5pbWF0aW9ucyovXG4uc2xpZGVtZW51IGxhYmVsLFxuLnNsaWRlciAuYmFyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qVG9nZ2xlKi9cblxuLnNsaWRlbWVudSAuc2xpZGUtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhciB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG59XG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTM6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhciB7XG4gIG1hcmdpbi1sZWZ0OiA1MCU7XG59XG5cbiNjYXJ0LWJhZGdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLm91dHRlci1iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICAvL2JhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA2NHB4O1xufVxuLmlubmVyLWJhZGdlLU9LIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMjBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmlubmVyLWJhZGdlLU9LIC5iYWRnZUNhbmNlbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW5uZXItYmFkZ2UtS08ge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmlubmVyLWJhZGdlLUtPIC5iYWRnZUNhbmNlbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmlubmVyLWJhZGdlLVRjaGF0IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjNweDtcbiAgbGVmdDogLTIwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbm5lci1iYWRnZS1UY2hhdCAuYmFkZ2VDYW5jZWwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi8vIHVsIHtcbi8vICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuLy8gICB3aWR0aDogNTAwcHg7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udDogYm9sZCAyMHB4LzEuNSBIZWx2ZXRpY2EsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4vLyB9XG5cbi8vIGxpIGltZyB7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gICBtYXJnaW46IDAgMTVweCAwIDA7XG4vLyB9XG5cbi8vIGxpIHAge1xuLy8gICBmb250OiAyMDAgMTJweC8xLjUgR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbi8vIH1cblxuLy8gbGkge1xuLy8gICBwYWRkaW5nOiAxMHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gbGk6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kOiAjZWVlO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi8vIC5pbWFnZXMge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIH1cblxuLy8gICAuaW1hZ2VzIC5Vc2VyUG9zdGVkIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDQwJTtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgdG9wOjEwcHg7XG4vLyAgICAgbGVmdDogMDtcbi8vICAgfVxuXG4uWm9uZVNoYXJlIHtcbiAgLy8gbWFyZ2luLXRvcDogLTVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjZTRlM2UzO1xuICBib3JkZXItcmFkaXVzOiAyM3B4O1xufVxuLnN3aXBlci1zbGlkZTpub3QoLnN3aXBlci1zbGlkZS1hY3RpdmUpID4gZGl2IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlvbi1zbGlkZSB7XG4gIHdpZHRoOiA0cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogLTJweCAhaW1wb3J0YW50O1xufVxuLmltZy13cmFwcGVyIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDVweDtcbn1cbi5teUltYWdlVXNlciB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgY29sb3I6ICM4ODg4ODg7XG59XG5cbmEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDhhNjg7XG59XG5cbnN2ZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHdpZHRoOiA2MHB4O1xuICAjaGVhcnQge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICBhbmltYXRpb246IGFuaW1hdGVIZWFydE91dCAwLjNzIGxpbmVhciBmb3J3YXJkcztcbiAgfVxuICAjbWFpbi1jaXJjIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAyOS41cHggMjkuNXB4O1xuICB9XG59XG5cbiNjaGVja2JveCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNjaGVja2JveDpjaGVja2VkICsgbGFiZWwgc3ZnIHtcbiAgI2hlYXJ0IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMik7XG4gICAgZmlsbDogI2UyMjY0ZDtcbiAgICBhbmltYXRpb246IGFuaW1hdGVIZWFydCAwLjNzIGxpbmVhciBmb3J3YXJkcyAwLjI1cztcbiAgfVxuICAjbWFpbi1jaXJjIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnM7XG4gICAgYW5pbWF0aW9uOiBhbmltYXRlQ2lyY2xlIDAuM3MgbGluZWFyIGZvcndhcmRzO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgI2dycDEge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBhbGwgMC4zcztcbiAgICAjb3ZhbDEge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMCwgLTMwcHgpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwIDA7XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzIHRyYW5zZm9ybSAwLjNzO1xuICAgIH1cbiAgICAjb3ZhbDIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMTBweCwgLTUwcHgpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwIDA7XG4gICAgICB0cmFuc2l0aW9uOiAxLjVzIHRyYW5zZm9ybSAwLjNzO1xuICAgIH1cbiAgfVxuICAjZ3JwMiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGFsbCAwLjNzO1xuICAgICNvdmFsMSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgzMHB4LCAtMTVweCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDAgMDtcbiAgICAgIHRyYW5zaXRpb246IDAuNXMgdHJhbnNmb3JtIDAuM3M7XG4gICAgfVxuICAgICNvdmFsMiB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSg2MHB4LCAtMTVweCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDAgMDtcbiAgICAgIHRyYW5zaXRpb246IDEuNXMgdHJhbnNmb3JtIDAuM3M7XG4gICAgfVxuICB9XG4gICNncnAzIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDAuMXMgYWxsIDAuM3M7XG4gICAgI292YWwxIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDMwcHgsIDBweCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDAgMDtcbiAgICAgIHRyYW5zaXRpb246IDAuNXMgdHJhbnNmb3JtIDAuM3M7XG4gICAgfVxuICAgICNvdmFsMiB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSg2MHB4LCAxMHB4KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMCAwO1xuICAgICAgdHJhbnNpdGlvbjogMS41cyB0cmFuc2Zvcm0gMC4zcztcbiAgICB9XG4gIH1cbiAgI2dycDQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBhbGwgMC4zcztcbiAgICAjb3ZhbDEge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMzBweCwgMTVweCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDAgMDtcbiAgICAgIHRyYW5zaXRpb246IDAuNXMgdHJhbnNmb3JtIDAuM3M7XG4gICAgfVxuICAgICNvdmFsMiB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSg0MHB4LCA1MHB4KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMCAwO1xuICAgICAgdHJhbnNpdGlvbjogMS41cyB0cmFuc2Zvcm0gMC4zcztcbiAgICB9XG4gIH1cbiAgI2dycDUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBhbGwgMC4zcztcbiAgICAjb3ZhbDEge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoLTEwcHgsIDIwcHgpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwIDA7XG4gICAgICB0cmFuc2l0aW9uOiAwLjVzIHRyYW5zZm9ybSAwLjNzO1xuICAgIH1cbiAgICAjb3ZhbDIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoLTYwcHgsIDMwcHgpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwIDA7XG4gICAgICB0cmFuc2l0aW9uOiAxLjVzIHRyYW5zZm9ybSAwLjNzO1xuICAgIH1cbiAgfVxuICAjZ3JwNiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGFsbCAwLjNzO1xuICAgICNvdmFsMSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgtMzBweCwgMHB4KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMCAwO1xuICAgICAgdHJhbnNpdGlvbjogMC41cyB0cmFuc2Zvcm0gMC4zcztcbiAgICB9XG4gICAgI292YWwyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKC02MHB4LCAtNXB4KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMCAwO1xuICAgICAgdHJhbnNpdGlvbjogMS41cyB0cmFuc2Zvcm0gMC4zcztcbiAgICB9XG4gIH1cbiAgI2dycDcge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBhbGwgMC4zcztcbiAgICAjb3ZhbDEge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoLTMwcHgsIC0xNXB4KTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMCAwO1xuICAgICAgdHJhbnNpdGlvbjogMC41cyB0cmFuc2Zvcm0gMC4zcztcbiAgICB9XG4gICAgI292YWwyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKC01NXB4LCAtMzBweCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDAgMDtcbiAgICAgIHRyYW5zaXRpb246IDEuNXMgdHJhbnNmb3JtIDAuM3M7XG4gICAgfVxuICB9XG4gICNncnAyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDAuMXMgb3BhY2l0eSAwLjNzO1xuICB9XG4gICNncnAzIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDAuMXMgb3BhY2l0eSAwLjNzO1xuICB9XG4gICNncnA0IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDAuMXMgb3BhY2l0eSAwLjNzO1xuICB9XG4gICNncnA1IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDAuMXMgb3BhY2l0eSAwLjNzO1xuICB9XG4gICNncnA2IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDAuMXMgb3BhY2l0eSAwLjNzO1xuICB9XG4gICNncnA3IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDAuMXMgb3BhY2l0eSAwLjNzO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZUNpcmNsZSB7XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWxsOiAjZGQ0Njg4O1xuICB9XG4gIDU1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWxsOiAjZDQ2YWJmO1xuICB9XG4gIDY1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMik7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWxsOiAjY2M4ZWY1O1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMyk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgICBzdHJva2U6ICNjYzhlZjU7XG4gICAgc3Ryb2tlLXdpZHRoOiAwLjU7XG4gIH1cbiAgODUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDE3KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgIHN0cm9rZTogI2NjOGVmNTtcbiAgICBzdHJva2Utd2lkdGg6IDAuMjtcbiAgfVxuICA5NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTgpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgc3Ryb2tlOiAjY2M4ZWY1O1xuICAgIHN0cm9rZS13aWR0aDogMC4xO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTkpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgc3Ryb2tlOiAjY2M4ZWY1O1xuICAgIHN0cm9rZS13aWR0aDogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVIZWFydCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMik7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGVIZWFydE91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG4uZmlyc3QtYmxvYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG5cbn1cbi5maXJzdC1waG90byB7XG4gIGhlaWdodDogMTg1cHg7XG4gIHdpZHRoOiAxNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5mb3VyUGljcyB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1hcmdpbjogMHB4IDEycHggNXB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5waG90by1zZXQtb25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5ib2R5IHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDAgMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3Bob3RvLXNldC10d28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmVpZ2h0UGljIHtcbiAgd2lkdGg6IDc1cHg7XG4gIG1hcmdpbjogN3B4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubGVmdC10YXBlLTAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjYsIDE4MywgNDMsIDAuNzUzKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcbiAgdG9wOiAtMTVweDtcbiAgbGVmdDogLTEwcHg7XG59XG5cbi5yaWdodC10YXBlLTAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjYsIDE4MywgNDMsIDAuNzUzKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICB0b3A6IC0xNXB4O1xuICByaWdodDogLTEycHg7XG59XG5cbi5sZWZ0LXRhcGUtMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4OSwgNDMsIDIyNiwgMC43NTMpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xuICB0b3A6IC0xNXB4O1xuICBsZWZ0OiAtNXB4O1xufVxuXG4ucmlnaHQtdGFwZS0xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg5LCA0MywgMjI2LCAwLjc1Myk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTtcbiAgdG9wOiAtMTdweDtcbiAgcmlnaHQ6IC01cHg7XG59XG5cbi5sZWZ0LXRhcGUtMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYxLCA0MywgMjI2LCAwLjc1Myk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XG4gIHRvcDogLTE1cHg7XG4gIGxlZnQ6IC01cHg7XG59XG5cbi5yaWdodC10YXBlLTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MSwgNDMsIDIyNiwgMC43NTMpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gIHRvcDogLTE3cHg7XG4gIHJpZ2h0OiAtNXB4O1xufVxuXG4ubGVmdC10YXBlLTMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgMjI2LCA2NywgMC43NTMpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xuICB0b3A6IC0xNXB4O1xuICBsZWZ0OiAtNXB4O1xufVxuXG4ucmlnaHQtdGFwZS0zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDIyNiwgNjcsIDAuNzUzKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xuICB0b3A6IC0xN3B4O1xuICByaWdodDogLTVweDtcbn1cblxuIl19 */");

/***/ }),

/***/ 36894:
/*!*****************************************************************************************!*\
  !*** ./src/app/layouts/profil/pop-over-suivre-page/pop-over-suivre-page.component.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  margin: 10px auto;\n  border-radius: 70px;\n  --min-height: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcC1vdmVyLXN1aXZyZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoicG9wLW92ZXItc3VpdnJlLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICBtYXJnaW46MTBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czo3MHB4O1xyXG4gICAgLS1taW4taGVpZ2h0OiAxMDA7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 12706:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/popovercomponent/popovercomponent.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-list lines=\"none\" >\n  <ion-item button>\n    <ion-icon name=\"bookmark-outline\" item-left></ion-icon>\n    Enregistré</ion-item>\n  <ion-item button [routerLink]=\"['/parametre']\">\n    <ion-icon name=\"settings-outline\" item-left></ion-icon>\n    Paramétres</ion-item>\n  <ion-item button (click)=\"dismissPopover()\">\n    <ion-icon name=\"power-outline\" item-left></ion-icon>\n    Déconnexion</ion-item>\n\n</ion-list>\n");

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

/***/ }),

/***/ 33222:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/profil/popovercomponent2/popovercomponent2.page.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list lines=\"none\">\n  <ion-item>\n    <ion-icon\n      style=\"font-size: 30px; margin-right: 10px\"\n      name=\"share\"\n    ></ion-icon>\n    Share</ion-item\n  >\n  <ion-item>\n    <ion-icon\n      style=\"font-size: 30px; margin-right: 10px\"\n      name=\"bookmark-outline\"\n    ></ion-icon>\n    Save</ion-item\n  >\n  <ion-item>\n    <ion-icon\n      style=\"font-size: 30px; margin-right: 10px\"\n      name=\"create\"\n    ></ion-icon>\n    Edit</ion-item\n  >\n  <ion-item>\n    <ion-icon\n      style=\"font-size: 30px; margin-right: 10px\"\n      name=\"close\"\n    ></ion-icon>\n    Delete</ion-item\n  >\n</ion-list>\n");

/***/ }),

/***/ 6508:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/profil/profil.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        routerLink=\"/tabsKids/accueil\"\n        color=\"light\"\n        name=\"chevron-back-outline\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"checkSelf===true\">\n      <ion-button color=\"secondary\" (click)=\"presentPopover($event)\">\n        <ion-icon\n          style=\"color: white\"\n          slot=\"icon-only\"\n          ios=\"ellipsis-horizontal\"\n          md=\"ellipsis-vertical\"\n        >\n        </ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\" *ngIf=\"checkSelf!==true\">\n      <ion-button\n        shape=\"rounded\"\n        (click)=\"presentPopoverNewMsg($event,idProfilePassed)\"\n      >\n        <ion-icon color=\"light\" name=\"chevron-down-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title color=\"light\" style=\"text-align: center; margin-left: 20xp\">\n      {{title}}</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content\n  class=\"parent\"\n  [scrollEvents]=\"true\"\n  (ionScroll)=\"logScrolling($event)\"\n>\n  <div class=\"image1\">\n    <ion-img\n      class=\"imgUser\"\n      src=\"https://www.heysigmund.com/wp-content/uploads/Breaking-Up-With-Kids-The-New-Normal.jpg\"\n    ></ion-img>\n\n    <ion-avatar class=\"image2\">\n      <img [src]=\"apiImgUser +user?.photo\" style=\"width: 55px;height:55px;border-radius:50%\" />\n      <span style=\"text-transform: capitalize;color:white;font-weight:bold;margin-top:5px\">{{user?.name}}</span>\n    </ion-avatar>\n  </div>\n  <ion-row  style=\"background-color: #f0f0f0\">\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"3\">\n      <ion-label class=\"mylabelabonnement\"> 2k Abonnes </ion-label>\n    </ion-col>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"4\">\n      <ion-label class=\"mylabelabonnement\"> 500 abonnements </ion-label>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n  </ion-row>\n\n  <div style=\"background-color: #f0f0f0\">\n    <!-- Segment with default selection -->\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"photo\">\n      <ion-segment-button value=\"photo\">\n        <ion-label style=\"font-family: 'Leckerli One', cursive\">Photo</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"Publications\">\n        <ion-label style=\"font-family: 'Leckerli One', cursive\">Publications</ion-label>\n      </ion-segment-button>\n\n      <div class=\"planning\" routerLink=\"/planning-kids\">\n        <ion-label style=\"font-family: 'Leckerli One', cursive\">Planning</ion-label>\n      </div>\n\n      <ion-segment-button value=\"propos\">\n        <ion-label style=\"font-family: 'Leckerli One', cursive\">à propos</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div class=\"body\" *ngIf=\"selected==='photo'\">\n      <div *ngIf=\"this.postsimg.length===1\">\n        <div class=\"first-bloc\">\n          <div\n            style=\"position: relative\"\n            *ngFor=\"let file of ResWithOneimg\"\n          >\n            <div class=\"left-tape-0\"></div>\n            <div class=\"right-tape-0\"></div>\n            <ng-container *ngIf=\"getExt(file.file_name) === 'png'\">\n              <div\n                class=\"first-photo\"\n                [style.background-size]=\"'cover'\"\n                [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n                errorImage=\"../../../assets/imgs/150.png\"\n                (click)=\"displayContentPhotoTab(file?.file_name)\"\n              >\n              </div>\n            </ng-container>\n            <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n              <div\n                [style.background-size]=\"'cover'\" class=\"first-photo\"\n                [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n                errorImage=\"../../../assets/imgs/150.png\"\n                (click)=\"displayVideo(file)\"\n              >\n                <ion-icon\n                  style=\"height: 50px; width: 50px\"\n                  name=\"videocam\"\n                ></ion-icon>\n              </div>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"this.postsimg.length>=1&&this.postsimg.length<6\">\n        <div class=\"first-bloc\">\n          <div\n            style=\"position: relative\"\n            *ngFor=\"let file of ResWithOneimg let index=index\"\n          >\n            <div class=\"left-tape-0\"></div>\n            <div class=\"right-tape-0\"></div>\n            <ng-container *ngIf=\"getExt(file.file_name) === 'png'\">\n              <div\n                style=\"height: 200px\" class=\"first-photo\"\n                [style.background-size]=\"'cover'\"\n                [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n                errorImage=\"../../../assets/imgs/150.png\"\n                (click)=\"displayContentPhotoTab(file?.file_name)\"\n              >\n                <ion-icon></ion-icon>\n              </div>\n            </ng-container>\n            <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n              <div\n                [style.background-size]=\"'cover'\" class=\"first-photo\"\n                [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n                errorImage=\"../../../assets/imgs/150.png\"\n                (click)=\"displayVideo(file)\"\n              >\n                <ion-icon\n                  style=\"height: 50px; width: 50px\"\n                  name=\"videocam\"\n                ></ion-icon>\n              </div>\n            </ng-container>\n          </div>\n          <div class=\"photo-set-one\">\n            <div\n\n              style=\"position: relative\"\n              *ngFor=\"let file of ResWithTwoimg; let index=index\"\n            >\n              <div class=\"{{'left-tape-'+divIndex(index)}}\"></div>\n              <div class=\"{{'right-tape-'+divIndex(index)}}\"></div>\n              <ng-container *ngIf=\"getExt(file.file_name) === 'png'\">\n                <div\n                  style=\"height: 100px\" class=\"fourPics\"\n                  [style.background-size]=\"'cover'\"\n                  [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n\n                  errorImage=\"../../../assets/imgs/150.png\"\n                  (click)=\"displayContentPhotoTab(file?.file_name)\"\n                >\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n                <div\n                  [style.background-size]=\"'cover'\"\n                  [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n                  errorImage=\"../../../assets/imgs/150.png\"\n                  (click)=\"displayVideo(file)\"\n                >\n                  <ion-icon\n                    style=\"height: 50px; width: 50px\"\n                    name=\"videocam\"\n                  ></ion-icon>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"this.postsimg.length>5\">\n        <div class=\"first-bloc\">\n          <div\n            class=\"first-photo\"\n            style=\"position: relative\"\n            *ngFor=\"let file of ResWithOneimg\"\n          >\n            <div class=\"left-tape-0\"></div>\n            <div class=\"right-tape-0\"></div>\n\n            <ng-container *ngIf=\"getExt(file.file_name) === 'png'\">\n              <div\n                style=\"height: 200px\"\n                [style.background-size]=\"'cover'\" class=\"first-photo\"\n                [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n                errorImage=\"../../../assets/imgs/150.png\"\n                (click)=\"displayContentPhotoTab(file?.file_name)\"\n              >\n                <ion-icon></ion-icon>\n              </div>\n            </ng-container>\n            <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n              <div\n                [style.background-size]=\"'cover'\"\n                [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n                errorImage=\"../../../assets/imgs/150.png\"\n                (click)=\"displayVideo(file)\"\n              >\n                <ion-icon\n                  style=\"height: 50px; width: 50px\"\n                  name=\"videocam\"\n                ></ion-icon>\n              </div>\n            </ng-container>\n          </div>\n          <div class=\"photo-set-one\">\n            <div\n              style=\"position: relative\"\n              *ngFor=\"let file of ResWithTwoimg let index=index\"\n            >\n              <div class=\"{{'left-tape-'+divIndex(index)}}\"></div>\n              <div class=\"{{'right-tape-'+divIndex(index)}}\"></div>\n              <ng-container *ngIf=\"getExt(file.file_name) === 'png'\">\n                <div\n                  style=\"height: 100px\" class=\"fourPics\"\n                  [style.background-size]=\"'cover'\"\n                  [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n                  errorImage=\"../../../assets/imgs/150.png\"\n                  (click)=\"displayContentPhotoTab(file?.file_name)\"\n                >\n                  <ion-icon></ion-icon>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n                <div\n                  [style.background-size]=\"'cover'\"\n                  [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n                  errorImage=\"../../../assets/imgs/150.png\"\n                  (click)=\"displayVideo(file)\"\n                >\n                  <ion-icon\n                    style=\"height: 50px; width: 50px\"\n                    name=\"videocam\"\n                  ></ion-icon>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n        <div id=\"photo-set-two\">\n          <div\n\n            style=\"position: relative\"\n            *ngFor=\"let file of ResWithThreeimg let index=index\"\n          >\n            <div class=\"{{'left-tape-'+divIndex(index)}}\"></div>\n            <div class=\"{{'right-tape-'+divIndex(index)}}\"></div>\n            <ng-container *ngIf=\"getExt(file.file_name) === 'png'\">\n              <div\n                style=\"height: 100px\" class=\"eightPic\"\n                [style.background-size]=\"'cover'\"\n                [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n                errorImage=\"../../../assets/imgs/150.png\"\n                (click)=\"displayContentPhotoTab(file?.file_name)\"\n              >\n                <ion-icon></ion-icon>\n              </div>\n            </ng-container>\n            <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n              <div\n                [style.background-size]=\"'cover'\"\n                [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n                errorImage=\"../../../assets/imgs/150.png\"\n                (click)=\"displayVideo(file)\"\n              >\n                <ion-icon\n                  style=\"height: 50px; width: 50px\"\n                  name=\"videocam\"\n                ></ion-icon>\n              </div>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"content-profil\" *ngIf=\"selected==='propos'\">\n      <div>\n        <div\n          style=\"\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n          \"\n        >\n          <h4>A propos</h4>\n          <ion-icon\n            (click)=\"updateComment()\"\n            style=\"color: green\"\n            name=\"create\"\n          ></ion-icon>\n        </div>\n      </div>\n      <ng-container *ngIf=\"update;else noupdate\">\n        <textarea\n          rows=\"5\"\n          cols=\"40\"\n          wrap=\"soft\"\n          style=\"margin: 10px 25px; resize: none; text-indent: -35px\"\n        >\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt consequuntur mollitia cum soluta dolorem omnis quam totam.\n          </textarea\n        >\n        <div style=\"display: flex; align-items: center; margin-bottom: 15px\">\n          <div>\n            <ion-icon\n              style=\"margin-right: 10px;color: green\"\n              name=\"location-sharp\"\n            ></ion-icon>\n            <ion-label style=\"font-weight: bold\">Adresse</ion-label>\n          </div>\n          <div>\n            <input\n              style=\"margin-left: 5px; width: 120px; text-align: center\"\n              class=\"commentaire\"\n              id=\"contentadresse\"\n              type=\"text\"\n              value=\"{{user.adresse}} 21 baker street\"\n            />\n          </div>\n          <div style=\"margin: 0 5px\">\n            <ion-label style=\"font-weight: bold\">Code postal</ion-label>\n          </div>\n          <div>\n            <input\n              style=\"width: 55px; text-align: center\"\n              class=\"commentaire\"\n              id=\"contentPostal\"\n              type=\"text\"\n              value=\"2083\"\n            />\n          </div>\n        </div>\n\n        <div\n          style=\"\n            display: flex;\n            align-items: center;\n            margin-left: 25px;\n            margin-bottom: 10px;\n          \"\n        >\n          <div>\n            <ion-label style=\"font-weight: bold\">Ville</ion-label>\n          </div>\n          <div style=\"display: flex; align-items: center\">\n            <input\n              style=\"\n                margin-left: 5px;\n                width: 100px;\n                text-align: center;\n                margin-right: 5px;\n              \"\n              type=\"text\"\n              id=\"contentVille\"\n              value=\"{{user.ville}} Tunis\"\n            />\n          </div>\n          <div>\n            <ion-label style=\"font-weight: bold\">Pays</ion-label>\n          </div>\n          <div>\n            <input\n              style=\"\n                margin-left: 5px;\n                width: 100px;\n                text-align: center;\n                margin-right: 5px;\n              \"\n              type=\"text\"\n              id=\"contentPays\"\n              value=\"{{user.location}} Tunisie\"\n            />\n          </div>\n        </div>\n\n        <div style=\"display: flex; align-items: center\">\n          <ion-icon style=\"margin-right: 10px;color: green\" name=\"calendar\"></ion-icon>\n          <div style=\"margin-right: 10px\">\n            <ion-label style=\"font-weight: bold\">Date naissance</ion-label>\n          </div>\n          <div>\n            <input\n              class=\"commentaire\"\n              type=\"date\"\n              id=\"datenaissance\"\n              value=\"{{date}}\"\n            />\n          </div>\n        </div>\n        <div style=\"display: flex; align-items: center\">\n          <ion-icon style=\"margin-right: 10px;color: green\" name=\"school\"></ion-icon>\n          <p style=\"font-weight: bold; margin-right: 10px\">\n            Etablissement scolaire\n          </p>\n          <input type=\"text\" value=\"SCHOOL\" style=\"width: 130px\" />\n        </div>\n        <div style=\"display: flex;align-items:center\">\n          <div style=\"margin-top: 15px; display:flex;align-items:center\">\n            <ion-icon style=\"margin-right: 10px;color: green\" name=\"transgender\"></ion-icon>\n            <ion-label style=\"font-weight: bold\">Genre</ion-label>\n          </div>\n\n          <ion-item  style=\"margin: 10px 15px 0 15px;\">\n            <ng-container *ngIf=\"user.sexe==='Homme';else Femme\">\n              <ion-select\n                interface=\"popover\"\n                placeholder=\"Select One\"\n                value=\"Homme\"\n                [(ngModel)]=\"user.sexe\"\n              >\n                <ion-select-option value=\"Femme\">Femme</ion-select-option>\n                <ion-select-option value=\"Homme\">Homme</ion-select-option>\n                <ion-select-option value=\"Autre\">Autre</ion-select-option>\n              </ion-select>\n            </ng-container>\n\n            <ng-template #Femme>\n              <ion-select\n                interface=\"popover\"\n                placeholder=\"Select One\"\n                value=\"Femme\"\n                [(ngModel)]=\"user.sexe\"\n              >\n                <ion-select-option value=\"Femme\">Femme</ion-select-option>\n                <ion-select-option value=\"Homme\">Homme</ion-select-option>\n                <ion-select-option value=\"Autre\">Autre</ion-select-option>\n              </ion-select>\n            </ng-template>\n          </ion-item>\n        </div>\n        <div style=\"display: flex; justify-content: space-between\">\n          <div></div>\n          <div style=\"margin: 15px\">\n            <ion-icon\n              style=\"font-size: 30px; color: red\"\n              (click)=\"updateComment()\"\n              name=\"close-circle-outline\"\n            ></ion-icon>\n            <ion-icon\n              style=\"font-size: 30px; color: green\"\n              (click)=\"userUpdate()\"\n              name=\"checkmark-circle-outline\"\n            ></ion-icon>\n          </div>\n        </div>\n      </ng-container>\n\n      <ng-template #noupdate>\n        <p style=\"margin: 10px 25px; text-align: left\">\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae\n          deserunt consequuntur mollitia cum soluta dolorem omnis quam totam.\n        </p>\n        <div style=\"display: flex\">\n          <div style=\"display: flex; align-items: center; margin-right: 15px\">\n            <ion-icon\n              style=\"margin-right: 10px;color: green\"\n              name=\"location-sharp\"\n            ></ion-icon>\n            <ion-label style=\"font-weight: bold\">Adresse</ion-label>\n            <!-- <div>{{user.adresse}}</div> -->\n            <p style=\"margin-left: 10px\">21 baker street</p>\n          </div>\n          <div style=\"display: flex; align-items: center\">\n            <ion-label style=\"font-weight: bold\">Code postal</ion-label>\n            <p style=\"margin-left: 10px\">2083</p>\n          </div>\n        </div>\n\n        <div style=\"display: flex; margin-left: 25px\">\n          <div style=\"display: flex; align-items: center; margin-right: 15px\">\n            <ion-label style=\"font-weight: bold\">Ville</ion-label>\n            <!-- <div> {{user.ville}} </div> -->\n            <p style=\"margin-left: 10px\">Tunis</p>\n          </div>\n          <div style=\"display: flex; align-items: center\">\n            <ion-label style=\"font-weight: bold\">Pays</ion-label>\n            <p style=\"margin-left: 10px\">Tunisie</p>\n          </div>\n          <div>{{user.pays}}</div>\n        </div>\n        <div style=\"display: flex; align-items: center\">\n          <ion-icon style=\"color: green\" name=\"school\"></ion-icon>\n          <ion-label style=\"font-weight: bold; margin-left: 10px\"\n            >Etablissement scolaire</ion-label\n          >\n          <p style=\"margin-left: 10px\">SCHOOL</p>\n        </div>\n        <div>\n          <div style=\"display: flex; align-items: center\">\n            <ion-icon style=\"color: green\" name=\"calendar\"></ion-icon>\n            <ion-label style=\"font-weight: bold; margin-left: 10px\"\n              >Date naissance</ion-label\n            >\n            <div>\n              <ion-datetime\n                class=\"commentaire\"\n                type=\"date\"\n                id=\"datenaissance\"\n                [(ngModel)]=\"user.datedenaissance\"\n              >\n              </ion-datetime>\n            </div>\n          </div>\n        </div>\n\n        <div style=\"display: flex\">\n          <div style=\"margin-top: 15px;display:flex;align-items:center \">\n            <ion-icon style=\"margin: 0 12px 0 1px;color: green\" name=\"transgender\"></ion-icon>\n            <ion-label style=\"font-weight: bold\">Genre</ion-label>\n          </div>\n\n          <p style=\"margin-left: 20px\">{{user.sexe}}</p>\n        </div>\n      </ng-template>\n    </div>\n\n    <div *ngIf=\"selected==='Publications'\">\n      <div\n        style=\"\n          padding: 10px 5px;\n          border-radius: 0px;\n          margin: 5px 0;\n          position: relative;\n          background-color:white\n        \"\n        *ngFor=\"let post of posts\"\n      >\n        <div style=\"margin: 5px;\">\n          <div style=\"display: flex; align-items: center\">\n            <ion-avatar style=\"margin: 5px 20px; width: 40px; height: 40px\">\n              <img [src]=\"apiImgUser +user?.photo\" />\n            </ion-avatar>\n\n            <div style=\"display: flex; flex-direction: column\">\n              <ion-label style=\"font-weight: bold\"\n                >{{post.user.name}}</ion-label\n              >\n              <ion-label>{{post.createdAt| date}}</ion-label>\n            </div>\n            <p\n              style=\"\n                font-size: 30px;\n                position: absolute;\n                right: 60px;\n                top: -30px;\n              \"\n              (click)=\"presentPopover2($event)\"\n            >\n              ...\n            </p>\n          </div>\n          <div style=\"display: flex; flex-direction: column; margin-left: 65px\">\n            <ion-label style=\"font-weight: bold\">{{post.title}}</ion-label>\n            <ion-label>{{post.content}} </ion-label>\n          </div>\n        </div>\n        <div\n          style=\"\n            display: flex;\n            justify-content: space-around;\n            align-items: center;\n            margin: 10px 0;\n          \"\n        >\n          <div style=\"display: flex; align-items: center\">\n            <ion-icon\n              name=\"heart-outline\"\n              style=\"color: red; font-size: 30px; margin-right: 10px\"\n            ></ion-icon>\n            Like\n          </div>\n          <div style=\"display: flex; align-items: center\">\n            <ion-icon\n              name=\"chatbubble-ellipses-outline\"\n              style=\"font-size: 30px; margin-right: 10px\"\n            ></ion-icon>\n            Comment\n          </div>\n        </div>\n        <div id=\"main-content\"></div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 47813:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/profil/pop-over-suivre-page/pop-over-suivre-page.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-list lines=\"none\" style=\"border-radius: 20px;\">\n  <ion-item   button   (click)=\"wochat()\" style=\"font-size: 10px;    color: grey;  \">    Envoyer un message</ion-item>\n  <ion-item button style=\"font-size: 10px;    color: grey;  \">    Copier l'URL du profil</ion-item>\n  <ion-item button (click)=\"dismissPopover('Showcase')\" style=\"font-size: 10px;    color: grey;  \">    Partager ce profil</ion-item>\n\n</ion-list>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_layouts_kids_profil_profil_module_ts.js.map