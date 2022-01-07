(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["default-src_app_Shared_Model_Comment_ts-src_app_Shared_Service_comment_service_ts-src_app_lay-a5d4e0"],{

/***/ 73070:
/*!*****************************************!*\
  !*** ./src/app/Shared/Model/Comment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Comment": () => (/* binding */ Comment)
/* harmony export */ });
class Comment {
}


/***/ }),

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

/***/ 38007:
/*!***************************************************!*\
  !*** ./src/app/Shared/Service/favoris.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavorisService": () => (/* binding */ FavorisService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 95920);




let FavorisService = class FavorisService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    addFavoris(post) {
        return this.apiService.patch(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost}${post}/favoris`, null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    getFavorisByService(post) {
        return this.apiService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost}${post}/Favoris`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    getSavedPosts(page, id) {
        return this.apiService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiFavoris}?page=${page}&limit=5&user=${id}`).pipe(((res) => res));
    }
    updateFavoriss(Favoris) {
        return this.apiService.patch(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiFavoris}${Favoris.id}`, Favoris);
    }
    deleteFavoris(id) {
        return this.apiService.delete(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiFavoris}`);
    }
    addShared(post) {
        return this.apiService.patch(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPost}${post}/favoris/shared`, null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    getAllSharedPosts(page, id) {
        return this.apiService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apishared}?page=${page}&limit=5&user=${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
};
FavorisService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
FavorisService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], FavorisService);



/***/ }),

/***/ 6510:
/*!*******************************************************************************!*\
  !*** ./src/app/layouts/coachprofile/image-profile/image-profile.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageProfileComponent": () => (/* binding */ ImageProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_image_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./image-profile.component.html */ 62631);
/* harmony import */ var _image_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-profile.component.scss */ 50543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 51188);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _shared_Service_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/Service/image.service */ 388);








let ImageProfileComponent = class ImageProfileComponent {
    constructor(modalController, imageService, action) {
        this.modalController = modalController;
        this.imageService = imageService;
        this.action = action;
        this.apImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiImg + 'image/';
        this.apiPost = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiImg + 'Post/';
    }
    ngOnInit() {
    }
    getExt(fileName) {
        const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
        return ext;
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true,
        });
    }
    addImage(source) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const fd = new FormData();
            yield this.imageService.readyImage(source, fd);
            fd.append('createdBy', this.image.createdBy);
            this.imageService.addImage(fd).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            }));
        });
    }
    selectImageSource() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const buttons = [
                {
                    text: 'Take Photo',
                    icon: 'camera',
                    handler: () => {
                        this.addImage(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera);
                    },
                },
                {
                    text: 'Choose from photos',
                    icon: 'image',
                    handler: () => {
                        this.addImage(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos);
                    },
                },
            ];
            const actionSheet = yield this.action.create({
                header: 'Select Image Source',
                buttons,
            });
            yield actionSheet.present();
        });
    }
    supprimer(image) {
        this.imageService.deleteimage(image.id).subscribe((res) => {
            this.dismiss();
        });
    }
    modifier(image) {
        this.imageService.updateImage(image).subscribe((res) => {
            this.dismiss();
        });
    }
};
ImageProfileComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _shared_Service_image_service__WEBPACK_IMPORTED_MODULE_4__.ImageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ActionSheetController }
];
ImageProfileComponent.propDecorators = {
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
ImageProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-image-profile',
        template: _raw_loader_image_profile_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_image_profile_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImageProfileComponent);



/***/ }),

/***/ 97119:
/*!****************************************************************!*\
  !*** ./src/app/layouts/post-display/post-display.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDisplayComponent": () => (/* binding */ PostDisplayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_post_display_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./post-display.component.html */ 79573);
/* harmony import */ var _post_display_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-display.component.css */ 50581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Service/post.service */ 91820);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 35758);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Service/favoris.service */ 38007);









let PostDisplayComponent = class PostDisplayComponent {
    constructor(postService, modalController, favorisService) {
        this.postService = postService;
        this.modalController = modalController;
        this.favorisService = favorisService;
        this.apiPost = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiImg}Post/`;
        this.shared = false;
        this.bookmarked = false;
    }
    get_url_extension(url) {
        return url.split(/[#?]/)[0].split('.').pop().trim();
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            dismissed: true,
        });
    }
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)({
            images: this.postService.getPost(this.post._id),
            mediafiles: this.postService.getPost(this.post._id),
            // newMediaFiles: this.mediafiles.splice(0,1),
        }).subscribe(({ images, mediafiles }) => {
            this.images = images.images;
            this.mediafiles = mediafiles.mediafiles;
            let tempMedia = mediafiles.mediafiles;
        });
    }
    share(post) {
        this.shared = true;
        this.favorisService.addShared(this.post._id).subscribe((res) => {
            this.shared = true;
        });
    }
    bookmark(post) {
        this.favorisService.addFavoris(this.post._id).subscribe((res) => {
            //console.log(res);
            this.bookmarked = true;
        });
    }
    unBookmark(post) {
        this.favorisService.addFavoris(this.post._id).subscribe((res) => {
            //console.log(res);
            this.bookmarked = false;
        });
    }
};
PostDisplayComponent.ctorParameters = () => [
    { type: src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_2__.PostService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_4__.FavorisService }
];
PostDisplayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-post-display',
        template: _raw_loader_post_display_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_post_display_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PostDisplayComponent);



/***/ }),

/***/ 388:
/*!*************************************************!*\
  !*** ./src/app/shared/Service/image.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageService": () => (/* binding */ ImageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 1128);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 51188);






let ImageService = class ImageService {
    constructor(apiService) {
        this.apiService = apiService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    // add image and save it in formdata
    readyImage(source, fd) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
                quality: 60,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.Base64,
                source,
            });
            const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
            const imageName = 'Give me a name';
            fd.append('photo', blobData, imageName);
        });
    }
    b64toBlob(b64Data, contentType = '', sliceSize = 512) {
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        const blob = new Blob(byteArrays, { type: contentType });
        return blob;
    }
    sendMessage(message) {
        this.subject.next({ event: message });
    }
    getMessage() {
        return this.subject.asObservable();
    }
    addImage(image) {
        return this.apiService
            .post(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiImage}`, image)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => res));
    }
    getAllImages() {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiImage}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => res.data.data));
    }
    getImage(id) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiImage}${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => res.data.data));
    }
    getImageByUserId(id) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiImage}?createdBy=${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => res.data.data));
    }
    updateImage(image) {
        return this.apiService.patch(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiImage}${image._id}`, image);
    }
    deleteimage(id) {
        return this.apiService.delete(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiImage}` + id);
    }
    getImageBypost(idPost) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apimediafile}MediaByPost/${idPost}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => res.data.data));
    }
    getPostStatusOnly(idPost) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apimediafile}GetPosts/StatusOnly/${idPost}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((res) => res.data.data));
    }
};
ImageService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
ImageService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root',
    })
], ImageService);



/***/ }),

/***/ 50581:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/post-display/post-display.component.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".iconstyle{\n\n  height: 40% !important;\n}\nion-chip{\n--background:white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHNCQUFzQjtBQUN4QjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCIiwiZmlsZSI6InBvc3QtZGlzcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25zdHlsZXtcblxuICBoZWlnaHQ6IDQwJSAhaW1wb3J0YW50O1xufVxuaW9uLWNoaXB7XG4tLWJhY2tncm91bmQ6d2hpdGU7XG59XG4iXX0= */");

/***/ }),

/***/ 50543:
/*!*********************************************************************************!*\
  !*** ./src/app/layouts/coachprofile/image-profile/image-profile.component.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-button {\n  --box-shadow: none;\n  --background: none;\n}\n\n#close {\n  position: absolute;\n}\n\n.menu {\n  width: 90%;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiaW1hZ2UtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuI2Nsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuIFxuICAubWVudSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiBcblxuIl19 */");

/***/ }),

/***/ 62631:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/coachprofile/image-profile/image-profile.component.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n  <ion-toolbar>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\" large>\n        <ion-icon name=\"close-circle-outline\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-row class=\"ion-justify-content-center\">\n\n      <img *ngIf=\"getExt(image.file_name) === 'jpeg' || getExt(image.file_name) === 'png'\"  src=\"{{ apiPost + image?.file_name }}\" />\n\n      <video  *ngIf=\"getExt(image.file_name) === 'mp4'\" controls width=\"100%\">\n        <source src=\"{{ apiPost + image?.file_name }}\" type=\"video/mp4\" />\n      </video>\n\n\n    <ion-col size=\"12\">\n      <ion-title style=\"\n          background-image: linear-gradient(\n            119deg,\n            rgba(92, 99, 91, 1) 0%,\n            rgba(36, 114, 56, 1) 35%,\n            rgb(122, 113, 172) 100%\n          );\n\">\n        <h5 style=\"color: white\" *ngIf=\"image\">{{ image?.createdAt | date }}</h5>\n        <h5 style=\"color: white\" *ngIf=\"video\">{{ video?.createdAt | date }}</h5>\n\n\n      </ion-title>\n    </ion-col>\n  </ion-row>\n");

/***/ }),

/***/ 79573:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/post-display/post-display.component.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content>\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-button (click)=\"dismiss()\" large>\n        <ion-icon   color=\"light\" name=\"chevron-back-outline\" ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-row class=\"ion-justify-content-center\">\n\n    <ion-col size=\"12\" *ngFor=\"let mediafile of mediafiles\">\n      <img\n        *ngIf=\"get_url_extension(mediafile?.file_name).includes('png', 'jpeg')\"\n        src=\"{{ apiPost + mediafile?.file_name }}\"\n      />\n\n      <video\n        *ngIf=\"get_url_extension(mediafile?.file_name).includes('mp4', 'avi')\"\n        controls\n        width=\"100%\"\n      >\n        <source src=\"{{ apiPost + mediafile?.file_name }}\" type=\"video/mp4\" />\n      </video>\n      <ion-row lines=\"none\">\n        <ion-col size=\"col-2\">\n          <ion-chip *ngIf=\"post?.type==='user'\">\n            <ng-container\n              *ngIf=\"!post?.likedBy.includes(user?._id); else dislikedTemp\"\n            >\n              <ion-button\n                (dblclick)=\"showReactions($event)\"\n                (click)=\"like(post, $event.target)\"\n                shape=\"round\"\n                fill=\"clear\"\n                size=\"large\"\n              >\n                <img\n                  src=\"../../../../assets/iconPost/{{ post?.iconLike }}.svg\"\n                  class=\"iconstyle\"\n                  id=\"icon_liked\"\n                />\n                <sub>{{ post?.likes }} </sub>\n              </ion-button>\n            </ng-container>\n            <ng-template #dislikedTemp>\n              <ion-button\n                (dblclick)=\"showReactions($event)\"\n                (click)=\"disLike(post, $event.target)\"\n                shape=\"round\"\n                fill=\"clear\"\n                size=\"large\"\n                color=\"white\"\n              >\n                <img\n                class=\"iconstyle\"\n                  src=\"../../../../assets/iconPost/{{ post?.iconLike }}.svg\"\n                  id=\"icon_like\"\n                />\n                <sub>{{ post?.likes }} </sub>\n              </ion-button>\n            </ng-template>\n          </ion-chip>\n        </ion-col>\n        <ion-col style=\"text-align: end\">\n          <ion-chip>\n            <ion-button\n              (click)=\"presentModal(post)\"  *ngIf=\"post?.type==='user'\"\n              shape=\"round\"\n              fill=\"clear\"\n              size=\"large\"\n              color=\"light\"\n            >\n              <img\n                class=\"iconstyle\"\n                src=\"../../../../assets/iconPost/icon_comment.svg\"\n              />\n              <sub>{{ comments?.length }}</sub>\n            </ion-button>\n            <ng-container *ngIf=\"!bookmarked; else unbook\">\n              <ion-button\n                (click)=\"bookmark(post)\"\n                shape=\"round\"\n                fill=\"clear\"\n                size=\"large \"\n                color=\"white\"\n              >\n                <img\n                  class=\"iconstyle\"\n                  src=\"../../../../assets/iconPost/icon_bookmark.svg\"\n                />\n                <sub>{{ post?.favorisNb }}</sub>\n              </ion-button>\n            </ng-container>\n            <ng-template #unbook>\n              <ion-button\n                (click)=\"unBookmark(post)\"\n                shape=\"round\"\n                fill=\"clear\"\n                size=\"large \"\n                color=\"white\"\n              >\n                <img\n                  class=\"iconstyle\"\n                  src=\"../../../../assets/iconPost/icon_bookmarked.svg\"\n                />\n                <sub>{{ post?.favorisNb }}</sub>\n              </ion-button>\n            </ng-template>\n            <ion-button\n              (click)=\"share(post)\"\n              shape=\"round\"\n              fill=\"clear\"\n              size=\"large \"\n            >\n              <img\n                class=\"iconstyle\"\n                src=\"../../../../assets/iconPost/icon_share.svg\"\n              />\n              <sub>{{ post?.sharedeNb }}</sub>\n            </ion-button>\n          </ion-chip>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n\n    <ion-col size=\"12\">\n      <ion-title\n        style=\"\n          background-image: linear-gradient(\n            119deg,\n            rgba(92, 99, 91, 1) 0%,\n            rgba(36, 114, 56, 1) 35%,\n            rgb(169, 194, 26) 100%\n          );\n        \"\n      >\n        <h5 style=\"color: white\">{{ mediafiles[0]?.createdAt | date }}</h5>\n      </ion-title>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_Shared_Model_Comment_ts-src_app_Shared_Service_comment_service_ts-src_app_lay-a5d4e0.js.map