(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["default-src_app_layouts_kids_accueil_status-kids_add-status-kids_add-status-kids_page_ts"],{

/***/ 5655:
/*!******************************************************************************************!*\
  !*** ./src/app/layouts/kids/accueil/status-kids/add-status-kids/add-status-kids.page.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddStatusKidsPage": () => (/* binding */ AddStatusKidsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_status_kids_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-status-kids.page.html */ 50302);
/* harmony import */ var _add_status_kids_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-status-kids.page.scss */ 52047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 51188);
/* harmony import */ var src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Service/post.service */ 91820);
/* harmony import */ var src_app_Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Auth/auth.service */ 21584);
/* harmony import */ var src_app_Shared_Model_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/Model/Post */ 72529);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);













const { Camera } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Plugins;
let AddStatusKidsPage = class AddStatusKidsPage {
    constructor(plt, action, modalController, actionSheet, authService, postService, toastCtrl, Renderer, router) {
        this.plt = plt;
        this.action = action;
        this.modalController = modalController;
        this.actionSheet = actionSheet;
        this.authService = authService;
        this.postService = postService;
        this.toastCtrl = toastCtrl;
        this.Renderer = Renderer;
        this.router = router;
        // user: User = new User();
        this.post = new src_app_Shared_Model_Post__WEBPACK_IMPORTED_MODULE_5__.Post();
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
    AlertpresentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                color: 'dark',
                position: 'bottom'
            });
            toast.present();
        });
    }
    createPost() {
        var _a, _b, _c;
        console.log(this.filesToUpload);
        const fd = new FormData();
        if (this.filesToUpload) {
            if (fd.has('photo'))
                fd.delete('photo');
            fd.append('photo', this.filesToUpload, (_a = this.filesToUpload) === null || _a === void 0 ? void 0 : _a.name);
        }
        if ((_b = this.post) === null || _b === void 0 ? void 0 : _b.content) {
            fd.append('content', (_c = this.post) === null || _c === void 0 ? void 0 : _c.content);
            fd.append('type', 'kids');
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
            console.log(fd);
            this.postService.createPost(fd).subscribe((res) => {
                this.presentToast('Fichiers Ajoutées');
                this.closeModal();
                this.router.navigate(["/tabsKids/accueil"]);
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
            console.log(this.posts);
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
                        this.addImage(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera);
                    },
                },
                {
                    text: 'Choose from photos',
                    icon: 'image',
                    handler: () => {
                        this.Renderer.setAttribute(this.multiFileInput.nativeElement, "accept", "image/jpg, image/jpeg, image/gif, image/png");
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
            console.log('addimage');
            const image = yield Camera.getPhoto({
                quality: 60,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
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
            console.log(res);
            this.presentToast('Fichiers Ajoutées');
            this.closeModal();
            window.location.reload();
        });
    }
    selectFiles(event) {
        this.progressInfos = [];
        this.selectedFiles = event.target.files;
        this.selectedPreviews = [];
        if (this.selectedFiles.length > 1) {
            this.AlertpresentToast("vous devez ajouter seulement une image");
        }
        else {
            if (this.selectedFiles[0].type === 'image/png' || this.selectedFiles[0].type === 'image/jpeg') {
                const reader = new FileReader();
                reader.onload = e => this.selectedPreviews.push(reader.result);
                reader.readAsDataURL(this.selectedFiles[0]);
            }
            else if (this.selectedFiles[0].type === "video/mp4") {
                this.selectedPreviews.push('../../../assets/imgs/150.png');
            }
        }
        this.actionSheet.dismiss();
    }
    getType(file) {
        return file.type;
    }
};
AddStatusKidsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ActionSheetController },
    { type: src_app_Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_3__.PostService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2 },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
AddStatusKidsPage.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    pagetype: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    multiFileInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['fileInput', { static: false },] }]
};
AddStatusKidsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-add-status-kids',
        template: _raw_loader_add_status_kids_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_status_kids_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddStatusKidsPage);



/***/ }),

/***/ 52047:
/*!********************************************************************************************!*\
  !*** ./src/app/layouts/kids/accueil/status-kids/add-status-kids/add-status-kids.page.scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  font-size: x-small !important;\n}\n\nion-toolbar ion-buttons ion-button.confirmer {\n  --border-radius: 50%;\n  --border-radius: 50%;\n  border-radius: 5px;\n  background: #13131363;\n  width: 80px;\n  height: 36px;\n}\n\n.myFooter {\n  border-radius: 32px;\n  margin-bottom: 10px;\n  box-shadow: 0.25px 0.25px 0.25px 0.25px;\n  display: inline-flex;\n  justify-content: center;\n  font-size: 51.2px;\n}\n\n.text-input {\n  height: auto;\n}\n\n.text-input div.input-wrapper {\n  background-color: #6d0c0c;\n  border-radius: 20px;\n}\n\n.text-input div.input-wrapper textarea.text-input {\n  margin-left: 8px;\n}\n\nion-button.confirmPost {\n  bottom: 0;\n  right: 0;\n  position: absolute;\n}\n\nion-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n\nion-row {\n  display: fixed;\n  bottom: 0;\n  left: 0;\n  background: #EEEFEF;\n}\n\n.myFooter ion-grid ion-row {\n  margin-left: auto;\n  margin-right: auto;\n  /* margin-bottom: 10px; */\n  /* border-radius: 50px; */\n  box-shadow: -1px 1px 2px 1px #6d6969;\n  position: fixed;\n  bottom: 0px;\n  width: 100%;\n  /* height: 6%; */\n  /* left: 0; */\n  /* right: 0; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #8c8c8c;\n  background-color: #EEE;\n}\n\n.myFooter > ion-img {\n  width: 40px;\n  height: 40px;\n}\n\nion-footer {\n  --background: transparent;\n}\n\nion-col {\n  --background-hover: red;\n}\n\nion-col:hover {\n  --ripple-color: #247238 !important;\n}\n\n.userItem {\n  --background: transparent ;\n}\n\nion-img {\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zdGF0dXMta2lkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSw2QkFBQTtBQUxGOztBQVVBO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVBGOztBQVVBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0FBUEY7O0FBU0U7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBUEo7O0FBU0k7RUFDRSxnQkFBQTtBQVBOOztBQWNBO0VBRUUsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQVpGOztBQWVBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVpGOztBQWVBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7QUFaRjs7QUFnQkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFiRjs7QUFnQkE7RUFDRSx5QkFBQTtBQWJGOztBQWdCQTtFQUNFLHVCQUFBO0FBYkY7O0FBaUJBO0VBRUUsa0NBQUE7QUFmRjs7QUFrQkE7RUFDRSwwQkFBQTtBQWZGOztBQWtCQTtFQUNFLFlBQUE7QUFmRiIsImZpbGUiOiJhZGQtc3RhdHVzLWtpZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHJ1bGVyOiAxNnB4O1xyXG4kY29sb3ItcmVkOiAjNzI2YjZiO1xyXG4kY29sb3ItYmc6ICNFQkVDRjA7XHJcbiRjb2xvci1zaGFkb3c6ICNCQUJFQ0M7XHJcbiRjb2xvci13aGl0ZTogI0ZGRjtcclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbmlvbi10b29sYmFyIGlvbi1idXR0b25zIGlvbi1idXR0b24uY29uZmlybWVyIHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogIzEzMTMxMzYzO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogMzZweDtcclxufVxyXG5cclxuLm15Rm9vdGVyIHtcclxuICBib3JkZXItcmFkaXVzOiAkcnVsZXIqMjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAuMjVweCAwLjI1cHggMC4yNXB4IDAuMjVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6ICRydWxlciozLjI7XHJcbn1cclxuXHJcbi50ZXh0LWlucHV0IHtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gIGRpdi5pbnB1dC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDksIDEyLCAxMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgIHRleHRhcmVhLnRleHQtaW5wdXQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAvL292ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIC8vbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9uLmNvbmZpcm1Qb3N0IHtcclxuXHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICBkaXNwbGF5OiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjRUVFRkVGO1xyXG59XHJcblxyXG5cclxuLm15Rm9vdGVyIGlvbi1ncmlkIGlvbi1yb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAvKiBtYXJnaW4tYm90dG9tOiAxMHB4OyAqL1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDUwcHg7ICovXHJcbiAgYm94LXNoYWRvdzogLTFweCAxcHggMnB4IDFweCAjNmQ2OTY5O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBoZWlnaHQ6IDYlOyAqL1xyXG4gIC8qIGxlZnQ6IDA7ICovXHJcbiAgLyogcmlnaHQ6IDA7ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbn1cclxuXHJcbi5teUZvb3Rlcj5pb24taW1nIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHhcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZWQ7XHJcblxyXG59XHJcblxyXG5pb24tY29sOmhvdmVyIHtcclxuXHJcbiAgLS1yaXBwbGUtY29sb3I6ICMyNDcyMzggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVzZXJJdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbn1cclxuXHJcbmlvbi1pbWcge1xyXG4gIGhlaWdodDogMzBweDtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ 50302:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/accueil/status-kids/add-status-kids/add-status-kids.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title color=\"light\">Créer une publication Kids</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" color=\"light\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"createPost()\" class=\"confirmer\" type=\"submit\" [disabled]=\"post.content===''\" color=\"light\"\n        shape=\"round\">\n        Publier\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-row class=\"row ion-align-items-center ion-justify-content-start\">\n\n\n\n\n    <!-- <ion-col no-padding class=\"col\" size=\"10\">\n      <div class=\"ZoneShare ion-text-nowrap\"> -->\n    <!-- <ion-row> -->\n    <ion-item lines=\"none\" class=\"userItem\">\n      <ion-avatar slot=\"start\">\n        <img src=\"http://placehold.it/75\">\n      </ion-avatar>\n      <ion-label>\n        <h3 class=\"ion-text-capitalize\">{{user?.name}}</h3>\n\n        <ion-icon name=\"earth-outline\" (click)=\"openActionSheet()\"> </ion-icon>\n      </ion-label>\n    </ion-item>\n\n\n\n\n  </ion-row>\n  <!-- </div>\n    </ion-col>\n  </ion-row>-->\n  <ion-row>\n    <ion-col>\n      <ion-textarea placeholder=\"Veuillez partager quelques sentiments!\" [(ngModel)]=\"post.content\"></ion-textarea>\n    </ion-col>\n\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"6\" *ngFor=\"let img of images;let i=index;\" class=\"ion-text-center\">\n      <ion-label>{{img.name}}\n        <p>{{img.createdAt | date:'short'}}</p>\n      </ion-label>\n      <img [src]=\"img.url\" alt=\"\">\n      <ion-fab vertical=\"bottom\" horizontal=\"end\">\n        <ion-fab-button color=\"danger\" size=\"small\" (click)=\"deleteImage(img,i)\">\n          <ion-icon name=\"trash-outline\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-scroll scrollY=\"true\">\n      <ng-container  *ngFor=\"let file of selectedPreviews\">\n        <img width=\"50px\"  [src]=\"file\"/>\n      </ng-container>\n      \n    \n    </ion-scroll>\n  \n  </ion-row>\n</ion-content>\n \n\n\n<ion-footer class=\"myFooter\">\n  <ion-grid>\n    <ion-row>\n      <ion-col (click)=\"selectImageSource()\">\n        \n        <input type=\"file\" multiple #fileInput (change)=\"selectFiles($event)\" hidden=\"true\" accept=\"image/jpg, image/png, application/pdf, video/mp4\">\n        <ion-img src=\"../../../../assets/icon/iconc_add_picture.png\"></ion-img>\n      </ion-col>\n    </ion-row>\n\n \n  </ion-grid>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_layouts_kids_accueil_status-kids_add-status-kids_add-status-kids_page_ts.js.map