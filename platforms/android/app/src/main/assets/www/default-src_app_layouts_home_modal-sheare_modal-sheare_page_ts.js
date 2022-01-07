(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["default-src_app_layouts_home_modal-sheare_modal-sheare_page_ts"],{

/***/ 74689:
/*!****************************************************************!*\
  !*** ./src/app/layouts/home/modal-sheare/modal-sheare.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalShearePage": () => (/* binding */ ModalShearePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_modal_sheare_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal-sheare.page.html */ 66960);
/* harmony import */ var _modal_sheare_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-sheare.page.scss */ 22831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Shared/Auth/auth.service */ 21584);
/* harmony import */ var _Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Shared/Service/post.service */ 91820);
/* harmony import */ var _Shared_Model_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Shared/Model/Post */ 72529);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 51188);












const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Plugins;
let ModalShearePage = class ModalShearePage {
    constructor(plt, action, modalController, actionSheet, authService, postService, toastCtrl, Renderer) {
        this.plt = plt;
        this.action = action;
        this.modalController = modalController;
        this.actionSheet = actionSheet;
        this.authService = authService;
        this.postService = postService;
        this.toastCtrl = toastCtrl;
        this.Renderer = Renderer;
        // user: User = new User();
        this.post = new _Shared_Model_Post__WEBPACK_IMPORTED_MODULE_4__.Post();
        this.filesToUpload = null;
        this.images = [];
        this.posts = [];
        this.selectedPreviews = [];
    }
    ngOnInit() {
        this.loadImage();
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            contentControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        });
        this.getUser();
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    openActionSheet() {
        this.actionSheet
            .create({
            header: 'Qui peut voir votre publication?',
            animated: true,
            mode: 'md',
            cssClass: 'my-custom-class',
            buttons: [
                {
                    text: 'Public',
                    role: 'destructive',
                    icon: 'world',
                    cssClass: 'title-img',
                    handler: () => {
                        console.log('Facebook share');
                    },
                },
                {
                    text: 'Amis',
                    icon: 'people',
                    cssClass: 'twitterIcon',
                    handler: () => {
                        console.log('Share clicked');
                    },
                },
                {
                    text: 'Amis sauf',
                    icon: 'person',
                    cssClass: 'whatsappIcon',
                    handler: () => {
                        console.log('Favorite clicked');
                    },
                },
                {
                    text: 'Moi uniquement',
                    icon: 'bag',
                    cssClass: 'whatsappIcon',
                    handler: () => {
                        console.log('Favorite clicked');
                    },
                },
            ],
        })
            .then((res) => {
            res.present();
        });
    }
    segmentChanged(data) {
        console.log('gggg', data);
    }
    getUser() {
        this.authService.getUser().subscribe((res) => {
            this.user = res;
            return this.user;
        });
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                color: 'success',
                position: 'top'
            });
            toast.present();
        });
    }
    createPost() {
        var _a, _b, _c;
        const fd = new FormData();
        if (this.filesToUpload) {
            if (fd.has('photo'))
                fd.delete('photo');
            fd.append('photo', this.filesToUpload, (_a = this.filesToUpload) === null || _a === void 0 ? void 0 : _a.name);
        }
        if ((_b = this.post) === null || _b === void 0 ? void 0 : _b.content) {
            fd.append('content', (_c = this.post) === null || _c === void 0 ? void 0 : _c.content);
            fd.append('type', 'user');
            if (this.page) {
                fd.append('pageId', this.page);
            }
        }
        if (this.selectedFiles) {
            if (fd.has('photo')) {
                const photo = fd.get('photo');
                fd.delete('photo');
                fd.append('files', photo);
            }
            this.uploadFiles(fd);
        }
        else {
            this.postService.createPost(fd).subscribe((res) => {
                this.presentToast('Fichiers Ajoutées');
                this.closeModal();
                return res;
            });
        }
        /*  this.postService.createPost(fd).subscribe((res) => {
            this.closeModal();
            return res;
          });*/
    }
    loadImage() {
        this.postService.getAllPosts().subscribe((res) => {
            this.posts = res;
        });
    }
    deleteImage(post, index) {
        this.postService.deletePost(post).subscribe((res) => {
            this.images.splice(index, 1);
        });
    }
    selectImageSource() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const buttons = [
                {
                    text: 'Take Photo',
                    icon: 'camera',
                    handler: () => {
                        this.addImage(_capacitor_core__WEBPACK_IMPORTED_MODULE_5__.CameraSource.Camera);
                    },
                },
                {
                    text: 'Choose from photos',
                    icon: 'image',
                    handler: () => {
                        this.Renderer.setAttribute(this.multiFileInput.nativeElement, "accept", "image/jpg, image/jpeg, image/png");
                        this.multiFileInput.nativeElement.click();
                    },
                },
                {
                    text: 'Record Video',
                    icon: 'video',
                    handler: () => {
                        // this.recordVideo();
                    },
                },
                {
                    text: 'Record Audio',
                    icon: 'audio',
                    handler: () => {
                        // this.recordAudio();
                    },
                },
            ];
            if (!this.plt.is('hybrid')) {
                buttons.push({
                    text: 'Choose a file',
                    icon: 'attach',
                    handler: () => {
                        this.Renderer.setAttribute(this.multiFileInput.nativeElement, "accept", "image/jpg, image/png, application/pdf, video/mp4");
                        this.multiFileInput.nativeElement.click();
                    },
                });
            }
            const actionSheet = yield this.action.create({
                header: 'Select Image Source',
                buttons,
            });
            yield actionSheet.present();
        });
    }
    addImage(source) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield Camera.getPhoto({
                quality: 60,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__.CameraResultType.Base64,
                source,
            });
            console.log('image', image);
            const blobData = this.b64toBlob(image.base64String, `image/${image.format}`);
            const imageName = 'Give me a name';
            // this.post.photo = blobData;
            this.filesToUpload = blobData;
            console.log(this.filesToUpload);
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
    uploadFiles(formData) {
        this.message = '';
        for (const file of this.selectedFiles) {
            formData.append('files', file);
        }
        this.postService.uploadImageFile(formData).subscribe((res) => {
            this.presentToast('Fichiers Ajoutées');
            this.closeModal();
            window.location.reload();
        });
    }
    selectFiles(event) {
        this.progressInfos = [];
        this.selectedFiles = event.target.files;
        this.selectedPreviews = [];
        for (const file of this.selectedFiles) {
            if (file.type === 'image/jpeg') {
                const reader = new FileReader();
                reader.onload = e => this.selectedPreviews.push(reader.result);
                reader.readAsDataURL(file);
            }
            else if (file.type === "video/mp4") {
                this.selectedPreviews.push('../../../assets/imgs/150.png');
            }
        }
        this.actionSheet.dismiss();
    }
    getType(file) {
        return file.type;
    }
};
ModalShearePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: _Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_3__.PostService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2 }
];
ModalShearePage.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    multiFileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['fileInput', { static: false },] }]
};
ModalShearePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-modal-sheare',
        template: _raw_loader_modal_sheare_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_sheare_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalShearePage);



/***/ }),

/***/ 22831:
/*!******************************************************************!*\
  !*** ./src/app/layouts/home/modal-sheare/modal-sheare.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-size: x-small !important;\n}\n\nion-toolbar ion-buttons ion-button.confirmer {\n  --border-radius: 50%;\n  --border-radius: 50%;\n  border-radius: 5px;\n  background: #13131363;\n  width: 80px;\n  height: 36px;\n}\n\n.myFooter {\n  border-radius: 32px;\n  margin-bottom: 10px;\n  box-shadow: 0.25px 0.25px 0.25px 0.25px;\n  display: inline-flex;\n  justify-content: center;\n  font-size: 51.2px;\n}\n\n.text-input {\n  height: auto;\n}\n\n.text-input div.input-wrapper {\n  background-color: #6d0c0c;\n  border-radius: 20px;\n}\n\n.text-input div.input-wrapper textarea.text-input {\n  margin-left: 8px;\n}\n\nion-button.confirmPost {\n  bottom: 0;\n  right: 0;\n  position: absolute;\n}\n\nion-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n\nion-row {\n  display: fixed;\n  bottom: 0;\n  left: 0;\n  background: #EEEFEF;\n}\n\n.myFooter ion-grid ion-row {\n  margin-left: auto;\n  margin-right: auto;\n  /* margin-bottom: 10px; */\n  /* border-radius: 50px; */\n  box-shadow: -1px 1px 2px 1px #6d6969;\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  /* height: 6%; */\n  /* left: 0; */\n  /* right: 0; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #8c8c8c;\n  background-color: #EEE;\n}\n\n.myFooter > ion-img {\n  width: 40px;\n  height: 40px;\n}\n\nion-footer {\n  --background: transparent;\n}\n\nion-col {\n  --background-hover: red;\n}\n\nion-col:hover {\n  --ripple-color: #247238 !important;\n}\n\n.userItem {\n  --background: transparent ;\n}\n\nion-img {\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLXNoZWFyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSw2QkFBQTtBQUxGOztBQVVBO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVBGOztBQVVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0FBUEY7O0FBU0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBU0k7RUFDRSxnQkFBQTtBQVBOOztBQWNBO0VBRUUsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQVpGOztBQWVBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVpGOztBQWVBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7QUFaRjs7QUFnQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFiRjs7QUFnQkE7RUFDRSx5QkFBQTtBQWJGOztBQWdCQTtFQUNFLHVCQUFBO0FBYkY7O0FBaUJBO0VBRUUsa0NBQUE7QUFmRjs7QUFrQkE7RUFDRSwwQkFBQTtBQWZGOztBQWtCQTtFQUNFLFlBQUE7QUFmRiIsImZpbGUiOiJtb2RhbC1zaGVhcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHJ1bGVyOiAxNnB4O1xuJGNvbG9yLXJlZDogIzcyNmI2YjtcbiRjb2xvci1iZzogI0VCRUNGMDtcbiRjb2xvci1zaGFkb3c6ICNCQUJFQ0M7XG4kY29sb3Itd2hpdGU6ICNGRkY7XG5cbnAge1xuICBmb250LXNpemU6IHgtc21hbGwgIWltcG9ydGFudDtcbn1cblxuXG5cbmlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24uY29uZmlybWVyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICMxMzEzMTM2MztcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMzZweDtcbn1cblxuLm15Rm9vdGVyIHtcbiAgYm9yZGVyLXJhZGl1czogJHJ1bGVyKjI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAuMjVweCAwLjI1cHggMC4yNXB4IDAuMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6ICRydWxlciozLjI7XG59XG5cbi50ZXh0LWlucHV0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuXG4gIGRpdi5pbnB1dC13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA5LCAxMiwgMTIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cbiAgICB0ZXh0YXJlYS50ZXh0LWlucHV0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAvL292ZXJmbG93LXk6IGF1dG87XG4gICAgICAvL21heC1oZWlnaHQ6IDEwMHB4O1xuICAgIH1cbiAgfVxufVxuXG5pb24tYnV0dG9uLmNvbmZpcm1Qb3N0IHtcblxuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmlvbi1mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbmlvbi1yb3cge1xuICBkaXNwbGF5OiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjRUVFRkVGO1xufVxuXG5cbi5teUZvb3RlciBpb24tZ3JpZCBpb24tcm93IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cbiAgLyogYm9yZGVyLXJhZGl1czogNTBweDsgKi9cbiAgYm94LXNoYWRvdzogLTFweCAxcHggMnB4IDFweCAjNmQ2OTY5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogaGVpZ2h0OiA2JTsgKi9cbiAgLyogbGVmdDogMDsgKi9cbiAgLyogcmlnaHQ6IDA7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzhjOGM4YztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbn1cblxuLm15Rm9vdGVyPmlvbi1pbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4XG59XG5cbmlvbi1mb290ZXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tY29sIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZWQ7XG5cbn1cblxuaW9uLWNvbDpob3ZlciB7XG5cbiAgLS1yaXBwbGUtY29sb3I6ICMyNDcyMzggIWltcG9ydGFudDtcbn1cblxuLnVzZXJJdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxufVxuXG5pb24taW1nIHtcbiAgaGVpZ2h0OiAzMHB4O1xuXG59XG4iXX0= */");

/***/ }),

/***/ 66960:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/home/modal-sheare/modal-sheare.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title color=\"light\">Créer une publication</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" color=\"light\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"createPost()\" class=\"confirmer\" type=\"submit\" [disabled]=\"post.content===''\" color=\"light\"\n        shape=\"round\">\n        Publier\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-row class=\"row ion-align-items-center ion-justify-content-start\">\n\n\n\n\n    <!-- <ion-col no-padding class=\"col\" size=\"10\">\n      <div class=\"ZoneShare ion-text-nowrap\"> -->\n    <!-- <ion-row> -->\n    <ion-item lines=\"none\" class=\"userItem\">\n      <ion-avatar slot=\"start\">\n        <img src=\"http://placehold.it/75\">\n      </ion-avatar>\n      <ion-label>\n        <h3 class=\"ion-text-capitalize\">{{user?.name}}</h3>\n\n        <ion-icon name=\"earth-outline\" (click)=\"openActionSheet()\"> </ion-icon>\n      </ion-label>\n    </ion-item>\n\n\n\n\n  </ion-row>\n  <!-- </div>\n    </ion-col>\n  </ion-row>-->\n  <ion-row>\n    <ion-col>\n      <ion-textarea placeholder=\"Veuillez partager quelques sentiments!\" [(ngModel)]=\"post.content\"></ion-textarea>\n    </ion-col>\n\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"6\" *ngFor=\"let img of images;let i=index;\" class=\"ion-text-center\">\n      <ion-label>{{img.name}}\n        <p>{{img.createdAt | date:'short'}}</p>\n      </ion-label>\n      <img [src]=\"img.url\" alt=\"\">\n      <ion-fab vertical=\"bottom\" horizontal=\"end\">\n        <ion-fab-button color=\"danger\" size=\"small\" (click)=\"deleteImage(img,i)\">\n          <ion-icon name=\"trash-outline\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-scroll scrollY=\"true\">\n      <ng-container  *ngFor=\"let file of selectedPreviews\">\n        <img width=\"50px\"  [src]=\"file\"/>\n      </ng-container>\n      \n    \n    </ion-scroll>\n  \n  </ion-row>\n</ion-content>\n \n\n\n<ion-footer class=\"myFooter\">\n  <ion-grid>\n    <ion-row>\n      <ion-col (click)=\"selectImageSource()\">\n        \n        <input type=\"file\" multiple #fileInput (change)=\"selectFiles($event)\" hidden=\"true\" accept=\"image/jpg, image/png, application/pdf, video/mp4\">\n        <ion-img src=\"../../../../assets/icon/iconc_add_picture.png\"></ion-img>\n      </ion-col>\n    </ion-row>\n\n \n  </ion-grid>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_layouts_home_modal-sheare_modal-sheare_page_ts.js.map