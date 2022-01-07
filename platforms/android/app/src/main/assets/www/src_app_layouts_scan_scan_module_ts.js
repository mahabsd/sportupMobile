(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_scan_scan_module_ts"],{

/***/ 74945:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/retry.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retry": () => (/* binding */ retry)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 77393);

function retry(count = -1) {
    return (source) => source.lift(new RetryOperator(count, source));
}
class RetryOperator {
    constructor(count, source) {
        this.count = count;
        this.source = source;
    }
    call(subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    }
}
class RetrySubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination, count, source) {
        super(destination);
        this.count = count;
        this.source = source;
    }
    error(err) {
        if (!this.isStopped) {
            const { source, count } = this;
            if (count === 0) {
                return super.error(err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    }
}
//# sourceMappingURL=retry.js.map

/***/ }),

/***/ 75340:
/*!********************************************************!*\
  !*** ./src/app/Shared/Service/avatarsimple.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarsimpleService": () => (/* binding */ AvatarsimpleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 74945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);





let AvatarsimpleService = class AvatarsimpleService {
    constructor(http) {
        this.http = http;
        this.base_path = 'http://127.0.0.1:5001';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)('Something bad happened; please try again later.');
    }
    // Create a new item
    createItem(item) {
        //console.log(item)
        return this.http
            .post(this.base_path + '/form-example', item, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    createimage(id, item) {
        //console.log(item)
        return this.http
            .post(this.base_path + '/im-example' + '/' + id, item, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
    // Get single student data by ID
    getItem(id) {
        return this.http
            .get(this.base_path + '/returndata' + '/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
};
AvatarsimpleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
AvatarsimpleService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], AvatarsimpleService);



/***/ }),

/***/ 28811:
/*!*************************************************!*\
  !*** ./src/app/Shared/Service/photo.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 51188);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Service_avatarsimple_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/avatarsimple.service */ 75340);






const { Camera, Filesystem, Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Plugins;
let PhotoService = class PhotoService {
    constructor(platform, router, avatarservice1) {
        this.router = router;
        this.avatarservice1 = avatarservice1;
        this.user = {
            id: 1,
            name: 'fares',
            surname: 'mallek',
            height: 185,
            weight: 75,
            gender: 0,
        };
        /*user = {
        id: 2,
        name: 'fares',
        surname: 'mallek',
        height: 185,
        weight: 275,
        gender: 0,
      };*/
        this.photos = [];
        this.PHOTO_STORAGE = "photos";
        this.convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            const reader = new FileReader;
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        this.platform = platform;
    }
    loadSaved() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // Retrieve cached photo array data
            const photoList = yield Storage.get({ key: this.PHOTO_STORAGE });
            this.photos = JSON.parse(photoList.value) || [];
            // If running on the web...
            if (!this.platform.is('hybrid')) {
                // Display the photo by reading into base64 format
                for (let photo of this.photos) {
                    // Read each saved photo's data from the Filesystem
                    const readFile = yield Filesystem.readFile({
                        path: photo.filepath,
                        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.FilesystemDirectory.Data
                    });
                    // Web platform only: Load the photo as base64 data
                    photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
                }
            }
        });
    }
    /* Use the device camera to take a photo:
    // https://capacitor.ionicframework.com/docs/apis/camera
  
    // Store the photo data into permanent file storage:
    // https://capacitor.ionicframework.com/docs/apis/filesystem
  
    // Store a reference to all photo filepaths using Storage API:
    // https://capacitor.ionicframework.com/docs/apis/storage
    */
    addNewToGallery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield Camera.getPhoto({
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.CameraResultType.Uri,
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.CameraSource.Camera,
                quality: 100 // highest quality (0 to 100)
            });
            //this.avatarservice1.createimage(this.user.id,capturedPhoto.base64String).subscribe((response) => {console.log(response)});
            this.router.navigate(['affichage']);
            const savedImageFile = yield this.savePicture(capturedPhoto);
            // Add new photo to Photos array
            this.photos.unshift(savedImageFile);
            // Cache all photo data for future retrieval
            Storage.set({
                key: this.PHOTO_STORAGE,
                value: JSON.stringify(this.photos)
            });
        });
    }
    // Save picture to file on device
    savePicture(cameraPhoto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // Convert photo to base64 format, required by Filesystem API to save
            const base64Data = yield this.readAsBase64(cameraPhoto);
            this.avatarservice1.createimage(this.user.id, base64Data).subscribe((response) => { });
            // Write the file to the data directory
            const fileName = new Date().getTime() + '.jpeg';
            const savedFile = yield Filesystem.writeFile({
                path: fileName,
                data: base64Data,
                directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.FilesystemDirectory.Data
            });
            if (this.platform.is('hybrid')) {
                // Display the new image by rewriting the 'file://' path to HTTP
                // Details: https://ionicframework.com/docs/building/webview#file-protocol
                return {
                    filepath: savedFile.uri,
                    webviewPath: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.convertFileSrc(savedFile.uri),
                };
            }
            else {
                // Use webPath to display the new image instead of base64 since it's
                // already loaded into memory
                return {
                    filepath: fileName,
                    webviewPath: cameraPhoto.webPath
                };
            }
        });
    }
    // Read camera photo into base64 format based on the platform the app is running on
    readAsBase64(cameraPhoto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // "hybrid" will detect Cordova or Capacitor
            if (this.platform.is('hybrid')) {
                // Read the file into base64 format
                const file = yield Filesystem.readFile({
                    path: cameraPhoto.path
                });
                return file.data;
            }
            else {
                // Fetch the photo, read as a blob, then convert to base64 format
                const response = yield fetch(cameraPhoto.webPath);
                const blob = yield response.blob();
                return yield this.convertBlobToBase64(blob);
            }
        });
    }
    // Delete picture by removing it from reference data and the filesystem
    deletePicture(photo, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // Remove this photo from the Photos reference data array
            this.photos.splice(position, 1);
            // Update photos array cache by overwriting the existing photo array
            Storage.set({
                key: this.PHOTO_STORAGE,
                value: JSON.stringify(this.photos)
            });
            // delete photo file from filesystem
            const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
            yield Filesystem.deleteFile({
                path: filename,
                directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.FilesystemDirectory.Data
            });
        });
    }
};
PhotoService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _Service_avatarsimple_service__WEBPACK_IMPORTED_MODULE_1__.AvatarsimpleService }
];
PhotoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], PhotoService);



/***/ }),

/***/ 95288:
/*!*****************************************************!*\
  !*** ./src/app/layouts/scan/scan-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanPageRoutingModule": () => (/* binding */ ScanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _scan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan.page */ 59859);




const routes = [
    {
        path: '',
        component: _scan_page__WEBPACK_IMPORTED_MODULE_0__.ScanPage
    },
    {
        path: 'mesures',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_scan_mesures_mesures_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mesures/mesures.module */ 95783)).then(m => m.MesuresPageModule)
    },
    {
        path: 'affichage',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_scan_affichage_affichage_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./affichage/affichage.module */ 82909)).then(m => m.AffichagePageModule)
    }
];
let ScanPageRoutingModule = class ScanPageRoutingModule {
};
ScanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ScanPageRoutingModule);



/***/ }),

/***/ 64056:
/*!*********************************************!*\
  !*** ./src/app/layouts/scan/scan.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanPageModule": () => (/* binding */ ScanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _scan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-routing.module */ 95288);
/* harmony import */ var _scan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan.page */ 59859);







let ScanPageModule = class ScanPageModule {
};
ScanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _scan_routing_module__WEBPACK_IMPORTED_MODULE_0__.ScanPageRoutingModule
        ],
        declarations: [_scan_page__WEBPACK_IMPORTED_MODULE_1__.ScanPage]
    })
], ScanPageModule);



/***/ }),

/***/ 59859:
/*!*******************************************!*\
  !*** ./src/app/layouts/scan/scan.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanPage": () => (/* binding */ ScanPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_scan_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./scan.page.html */ 64200);
/* harmony import */ var _scan_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan.page.scss */ 53868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_Service_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Service/photo.service */ 28811);






let ScanPage = class ScanPage {
    constructor(photoService, actionSheetController) {
        this.photoService = photoService;
        this.actionSheetController = actionSheetController;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            //await this.photoService.loadSaved();
        });
    }
    showActionSheet(photo, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Photos',
                buttons: [{
                        text: 'Delete',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            this.photoService.deletePicture(photo, position);
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
ScanPage.ctorParameters = () => [
    { type: src_app_Shared_Service_photo_service__WEBPACK_IMPORTED_MODULE_2__.PhotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ActionSheetController }
];
ScanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-scan',
        template: _raw_loader_scan_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_scan_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ScanPage);



/***/ }),

/***/ 53868:
/*!*********************************************!*\
  !*** ./src/app/layouts/scan/scan.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".image-overlay {\n  z-index: 1;\n  position: absolute;\n  left: 25%;\n  top: 10%;\n  width: 50%;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkYiLCJmaWxlIjoic2Nhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Utb3ZlcmxheSB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjUlO1xuICB0b3A6IDEwJTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ 64200:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/scan/scan.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title color=\"primary\"> </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title color=\"primary\"></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col\n        size=\"6\"\n        *ngFor=\"let photo of photoService.photos; index as position\"\n      >\n        <ion-img\n          [src]=\"photo.webviewPath\"\n          (click)=\"showActionSheet(photo, position)\"\n        >\n        </ion-img>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-img src=\"./assets/icon/back.png\" class=\"image-overlay\"> </ion-img>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-fab-button (click)=\"photoService.addNewToGallery()\">\n      <ion-icon name=\"camera\"> </ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n<!--\n<ion-img  src=\"./assets/icon/back.png\"  class=\"image-overlay\">   </ion-img>\n  <img src=\"./assets/icon/back.png\">\n<ion-button href='/affichage'>affichage</ion-button>\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title style=\"\n      background-image: linear-gradient(\n        119deg,\n        rgba(92, 99, 91, 1) 0%,\n        rgba(36, 114, 56, 1) 35%,\n        rgb(122, 113, 172) 100%\n      );\n    \">\n      Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <strong>Ready to create an app?</strong>\n    <p></p>\n  </div>\n</ion-content>\n-->\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_scan_scan_module_ts.js.map