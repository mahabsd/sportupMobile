(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 21584:
/*!*********************************************!*\
  !*** ./src/app/Shared/Auth/auth.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _Service_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/utils.service */ 95920);
/* harmony import */ var _Service_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/storage.service */ 12833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 40205);










let AuthService = class AuthService {
    constructor(utilsSer, http, toastCtrl, storage, utilsService, router) {
        this.utilsSer = utilsSer;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.utilsService = utilsService;
        this.router = router;
        this.statut = false;
    }
    login(user) {
        console.log(user);
        return this.utilsService.post(_Service_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService.apiUSER + 'login', user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
            this.setSession(res);
            // this.addUser(res.id);
            return res.data;
        }));
    }
    isLoggedIn() {
        return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.token);
    }
    isLoggedOut() {
        return !this.isLoggedIn();
    }
    isAuthenticated() {
        return this.isLoggedIn().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res));
    }
    getUser() {
        const user = this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentUser);
        return user;
    }
    logout() {
        this.storage.clear();
        this.router.navigateByUrl('/login');
    }
    getRole() {
        this.role = this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentUser);
        if (this.role) {
            this.role = this.role.role;
        }
        ;
        return this.role;
    }
    setSession(authResult) {
        var _a, _b, _c, _d;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log((_b = (_a = authResult.data) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b._id);
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.idUser, (_d = (_c = authResult.data) === null || _c === void 0 ? void 0 : _c.user) === null || _d === void 0 ? void 0 : _d._id);
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.token, authResult.token);
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currentUser, authResult.data.user);
        });
    }
    handleError(error) {
        var _a, _b, _c;
        console.log(error);
        if ((error === null || error === void 0 ? void 0 : error.error) instanceof ErrorEvent) {
            console.error('An error occurred:', (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            if ((error === null || error === void 0 ? void 0 : error.status) === 50) {
                this.presentToast('Probléme Serveur veuillez patienter Svp...', 'danger', 'middle');
            }
            console.error(`Backend returned code ${error === null || error === void 0 ? void 0 : error.status}, ` + `body was: ${(_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.message}`);
        }
        // return an observable with a user-facing error message
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)((_c = error === null || error === void 0 ? void 0 : error.error) === null || _c === void 0 ? void 0 : _c.message);
    }
    presentToast(message, color, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.myToast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                color,
                position
            });
            this.myToast.present();
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _Service_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _Service_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _Service_utils_service__WEBPACK_IMPORTED_MODULE_1__.UtilsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 76670:
/*!********************************************!*\
  !*** ./src/app/Shared/Guard/auth.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Auth/auth.service */ 21584);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);






let AuthGuard = class AuthGuard {
    constructor(authService, toastCtrl, router) {
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.router = router;
    }
    canActivate(next, state) {
        const url = state.url;
        return this.checkUserLogin(next, url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        return true;
    }
    canLoad(route, segments) {
        return true;
    }
    checkUserLogin(route, url) {
        return this.authService.isAuthenticated().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            if (res) {
                if (res) {
                    this.token = true;
                }
                return this.token;
            }
            else {
                // this.typeError('Connectez vous!')
                this.presentToast('Connectez vous!', 'warning', 'top');
                this.router.navigateByUrl('login');
                return false;
            }
        }));
    }
    presentToast(message, color, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.toast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                color,
                position
            });
            this.toast.present();
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _Auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], AuthGuard);



/***/ }),

/***/ 19637:
/*!*******************************************************!*\
  !*** ./src/app/Shared/Interceptors/JWInterceptors.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JWTInterceptor": () => (/* binding */ JWTInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 69412);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _Auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Auth/auth.service */ 21584);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ 38605);








let JWTInterceptor = class JWTInterceptor {
    constructor(storage, authService, platform, toastCtrl) {
        this.storage = storage;
        this.authService = authService;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.token$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.token);
    }
    intercept(request, next) {
        let promise = this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.token);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(promise).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(token => {
            let cloneReq = this.addToken(request, token);
            return next.handle(cloneReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
                console.log(error);
                if (error.status === 401) {
                    this.handleAuthError();
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(error);
                }
                let msg = error.error.message;
                this.presentToast(msg, 'danger', 'top');
                throw error;
            }));
        }));
        // request = request.clone({
        //   setHeaders: {
        //     authorization: `Bearer ${this.token$}`
        //   }
        // });
        // return next.handle(request);
        //   // Retry on faillure
        //   retry(2),
        //   catchError((error, caught) => {
        //     console.error(error);
        //     if (error.status === 0) {
        //       this.presentToast('Probléme serveur! \n Veuillez patienter SVP...', 'danger', 'middle');
        //     }
        //     if (error.status === 400) {
        //       this.presentToast(error?.error?.message, 'danger', 'middle');
        //     }
        //     if (error.status === 500) {
        //       this.handleServer();
        //       return of(error);
        //     }
        //     throw error;
        //   }));
    }
    addToken(request, token) {
        // console.log(token);
        if (token) {
            let clone;
            clone = request.clone({
                setHeaders: {
                    authorization: `Bearer ${token}`
                }
            });
            return clone;
        }
        return request;
    }
    // getToken(): Observable<any> {
    //   return this.storage.get(environment.token).pipe(map(res => { this.token$ = res; }));
    // }
    // public jwt() {
    //   this.getToken();
    //   const headers = new HttpHeaders({ authorization: 'Bearer ' + this.token$ });
    //   //   console.log(headers);
    //   return ({ headers });
    // }
    typeError() {
        return this.presentToast('Votre session est expiré', 'danger', 'top');
    }
    handleAuthError() {
        this.authService.logout();
        this.typeError();
    }
    // private handleServer() {
    //   this.presentToast('Probléme Serveur veuillez patienter Svp...', 'danger', 'middle');
    // }
    presentToast(message, color, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.myToast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                color,
                position
            }).then((toastData) => {
                toastData.present();
            });
        });
    }
};
JWTInterceptor.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__.Storage },
    { type: _Auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController }
];
JWTInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)()
], JWTInterceptor);



/***/ }),

/***/ 91820:
/*!************************************************!*\
  !*** ./src/app/Shared/Service/post.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostService": () => (/* binding */ PostService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 95920);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 12833);





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

/***/ 12833:
/*!***************************************************!*\
  !*** ./src/app/Shared/Service/storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69412);




let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
        this.storage$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this._storage = null;
    }
    set(key, value) {
        console.log(this.storage$.next(value));
        this.storage$.next(value);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.storage.set(key, value));
    }
    get(key) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.storage.get(key).then(res => res));
    }
    clear() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.storage.clear());
    }
    remove(key) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.storage.remove(key));
    }
    keys() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.storage.keys());
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 88838:
/*!************************************************!*\
  !*** ./src/app/Shared/Service/user.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 95920);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);

/* eslint-disable arrow-body-style */





let UserService = class UserService {
    constructor(utilsService, toastCtrl) {
        this.utilsService = utilsService;
        this.toastCtrl = toastCtrl;
    }
    getMe() {
        return this.utilsService.get(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'Me').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            return res;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    searchUser(config) {
        // Convert any filters over to Angular's URLSearchParams
        const params = {};
        Object.keys(config)
            .forEach((key) => {
            params[key] = config[key];
        });
        return this.utilsService.get('users' + ((config.name === 'feed') ? '/feed' : ''));
    }
    updateMe(user) {
        return this.utilsService.patch(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'updateMe', user);
    }
    updateCoverMe(user) {
        return this.utilsService.patch(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'cover', user);
    }
    updateUser(user) {
        return this.utilsService.patch(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER, user);
    }
    getUser(id) {
        return this.utilsService.get(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            return res;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    signUp(user) {
        return this.utilsService.post(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'signup', user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    confirmInscription(code) {
        return this.utilsService.post(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'confirm', code).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    forgotPassword(user) {
        return this.utilsService.post(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'forgotPassword', user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    resetPassword(token) {
        return this.utilsService.patch(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'resetPassword', token).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    renvoyerToken(user) {
        return this.utilsService.post(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'renvoi', user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    deactivate(user) {
        return this.utilsService.post(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apideactivation, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            return res;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    handleError(error) {
        var _a, _b, _c;
        console.log(error);
        if ((error === null || error === void 0 ? void 0 : error.error) instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            if ((error === null || error === void 0 ? void 0 : error.status) === 500) {
                this.presentToast('Probléme Serveur veuillez patienter Svp...', 'danger', 'middle');
            }
            console.error(`Backend returned code ${error === null || error === void 0 ? void 0 : error.status}, ` + `body was: ${(_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.message}`);
        }
        // return an observable with a user-facing error message
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)((_c = error === null || error === void 0 ? void 0 : error.error) === null || _c === void 0 ? void 0 : _c.message);
    }
    presentToast(message, color, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.myToast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                color,
                position
            });
            this.myToast.present();
        });
    }
    getAllusers() {
        return this.utilsService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    getUsersKids() {
        return this.utilsService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER}?role=kids`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.data.data));
    }
    getRoleUsers() {
        return this.utilsService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER}?role=user`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.data.data));
    }
};
UserService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 95920:
/*!*************************************************!*\
  !*** ./src/app/Shared/Service/utils.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsService": () => (/* binding */ UtilsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 12833);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
var UtilsService_1;






// import { DatePipe } from "@angular/common";


let UtilsService = UtilsService_1 = class UtilsService {
    constructor(httpClient, storage, toastCtrl) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        // this.jwt().subscribe(res => this.header = res);
        // this.jwt();
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
    // jwt() {
    //   return this.storage.get(environment.token).pipe(map(res => {
    //     this.token = res;
    //     if (this.token) {
    //       const headers = new HttpHeaders({ authorization: 'Bearer ' + this.token });
    //       //   console.log(headers);
    //       return { headers };
    //     }
    //   }));
    // }
    post(url, object) {
        // console.log(this.header);
        return this.httpClient
            .post(url, object).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
    }
    patch(url, object) {
        return this.httpClient.patch(url, object).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
    }
    put(url, object) {
        return this.httpClient.put(url, object).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
    }
    get(url) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ authorization: 'Bearer ' + this.token });
        return this.httpClient.get(url, { observe: 'response' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res.body), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
    }
    delete(url) {
        return this.httpClient.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
    }
    formatErrors(error) {
        console.log(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error.error);
    }
};
UtilsService.remoteAdress = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
UtilsService.apiUSER = UtilsService_1.remoteAdress + 'users/';
UtilsService.apiACTION = UtilsService_1.remoteAdress + 'actions/';
UtilsService.apiCLIENT = UtilsService_1.remoteAdress + 'clients/';
UtilsService.apiOPERATION = UtilsService_1.remoteAdress + 'operations/';
UtilsService.apiPost = UtilsService_1.remoteAdress + 'posts/';
UtilsService.apiComment = UtilsService_1.remoteAdress + 'comments/';
UtilsService.apiFavoris = UtilsService_1.remoteAdress + 'favoris/';
UtilsService.apiCoach = UtilsService_1.remoteAdress + 'coachs/';
UtilsService.apiImage = UtilsService_1.remoteAdress + 'images/';
UtilsService.apiFollower = UtilsService_1.remoteAdress + 'follower/';
UtilsService.apiChat = UtilsService_1.remoteAdress + 'chat/';
UtilsService.apiCalendar = UtilsService_1.remoteAdress + 'calendar/';
UtilsService.apiHobbies = UtilsService_1.remoteAdress + 'hobbies/';
UtilsService.apiacitivteKids = UtilsService_1.remoteAdress + 'activiteKids/';
UtilsService.apiInvite = UtilsService_1.remoteAdress + 'invi/';
UtilsService.apishared = UtilsService_1.remoteAdress + 'shared/';
UtilsService.apimediafile = UtilsService_1.remoteAdress + 'media/';
UtilsService.apimyaccesshistory = UtilsService_1.remoteAdress + 'accesshistory/myaccesshistory/';
UtilsService.apiNotif = UtilsService_1.remoteAdress + 'notifications/';
UtilsService.apiIp = UtilsService_1.remoteAdress + 'getIps/';
UtilsService.apimyactivityhistory = UtilsService_1.remoteAdress + 'activityhistory';
UtilsService.apideactivation = UtilsService_1.remoteAdress + 'deactivateaccount';
UtilsService.apiPage = UtilsService_1.remoteAdress + 'pages';
UtilsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
UtilsService = UtilsService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root',
    })
], UtilsService);



/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Shared_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shared/Guard/auth.guard */ 76670);




const routes = [
    {
        path: '',
        redirectTo: 'menu/tabs/home',
        pathMatch: 'full'
    },
    {
        path: 'resetpass',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Oauth_resetpass_resetpass_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Oauth/resetpass/resetpass.module */ 29230)).then(m => m.ResetpassPageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic-native_file-transfer___ivy_ngcc___ngx_index_js-src_app_Shared_patt-22d426"), __webpack_require__.e("src_app_Oauth_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Oauth/login/login.module */ 25024)).then(m => m.LoginPageModule)
    },
    {
        path: 'login-erp',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_erp_login-erp_login-erp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layouts/erp/login-erp/login-erp.module */ 75461)).then(m => m.LoginErpPageModule)
    },
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./layouts/layouts.module */ 52372)).then(m => m.LayoutsModule), canActivate: [_Shared_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'signin-kids',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic-native_file-transfer___ivy_ngcc___ngx_index_js-src_app_Shared_patt-22d426"), __webpack_require__.e("src_app_layouts_kids_sign-kids_sign-kids_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./layouts/kids/sign-kids/sign-kids.module */ 76821)).then(m => m.SignKidsPageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("default-src_app_layouts_home_modal-sheare_modal-sheare_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_component_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./component/tabs/tabs.module */ 68139)).then(m => m.TabsPageModule), canActivate: [_Shared_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'menu',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_component_sidemenu_sidemenu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./component/sidemenu/sidemenu.module */ 31277)).then(m => m.SidemenuPageModule)
    },
    {
        path: 'signin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_Oauth_signin_signin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Oauth/signin/signin.module */ 39404)).then(m => m.SigninPageModule)
    },
    {
        path: 'signinformation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Oauth_signinformation_signinformation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Oauth/signinformation/signinformation.module */ 92833)).then(m => m.SigninformationPageModule),
        canActivate: [_Shared_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'confirmation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Oauth_confirmation_confirmation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Oauth/confirmation/confirmation.module */ 38820)).then(m => m.ConfirmationPageModule)
    },
    {
        path: 'popovercomponent',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_kids_popovercomponent_popovercomponent_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./layouts/kids/popovercomponent/popovercomponent.module */ 46896)).then(m => m.PopovercomponentPageModule)
    },
    {
        path: 'show-image',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_component_modal_show-image_show-image_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./component/modal/show-image/show-image.module */ 3607)).then(m => m.ShowImagePageModule)
    },
    {
        path: '**',
        redirectTo: ''
    },
    {
        path: 'planning-kids',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js-src_app_shared_Service_notifications_service_ts"), __webpack_require__.e("default-node_modules_ionic2-calendar___ivy_ngcc___fesm2015_ionic2-calendar_js-src_app_layouts-f62444"), __webpack_require__.e("src_app_layouts_kids_planning_planning_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/layouts/kids/planning/planning.module */ 55022)).then(m => m.PlanningPageModule),
        //  canActivate:[AdultsNotAllowedGuard]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Shared/Auth/auth.service */ 21584);
/* harmony import */ var _Shared_Service_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Shared/Service/storage.service */ 12833);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);











let AppComponent = class AppComponent {
    constructor(router, storage, platform, splashScreen, statusBar, authService) {
        this.router = router;
        this.storage = storage;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authService = authService;
        this.selectedPath = '';
        this.appPages = [
            {
                title: 'Accueil',
                url: '/tabs/home',
                icon: 'paper-plane'
            },
            {
                title: 'Messagerie ',
                url: '/boitereception',
                icon: 'heart'
            },
            {
                title: 'Maps',
                url: '/maps',
                icon: 'archive'
            },
            {
                title: 'Hobbies',
                url: '/tabs/hobbies',
                icon: 'archive'
            },
            {
                title: 'Calendar',
                url: '/calendar',
                icon: 'Close'
            },
            {
                icon: 'settings',
                title: 'ERP',
                url: '/login-erp'
            },
            {
                icon: 'heart',
                title: 'Kids',
                url: '/sign-kids'
            }
        ];
        this.parametre = [{
                icon: 'settings',
                title: 'Paramétre',
                url: '/parametre'
            }, {
                icon: 'log-out',
                title: 'déconnexion',
                url: '/login'
            }];
        this.initializeApp();
        this.router.events.subscribe((event) => {
            // console.log(event.url);
            if (event && event.url) {
                this.selectedPath = event.url;
            }
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.platform.ready().then(() => {
                this.storage.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.token).subscribe(res => {
                    this.token = res;
                    // console.log(this.token);
                    return this.token;
                });
            });
        });
    }
    logout() {
        this.authService.logout();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _Shared_Service_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-maps */ 37385);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 2880);
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/crop/ngx */ 68699);
/* harmony import */ var _Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Shared/Auth/auth.service */ 21584);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/layouts.module */ 52372);
/* harmony import */ var _Shared_Interceptors_JWInterceptors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Shared/Interceptors/JWInterceptors */ 19637);
/* harmony import */ var _Shared_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Shared/Guard/auth.guard */ 76670);
/* harmony import */ var _Shared_Service_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Shared/Service/storage.service */ 12833);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/component.module */ 55051);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-socket-io */ 75421);
/* harmony import */ var _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/video-player/ngx */ 524);
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/modules/shared.module */ 57208);
/* harmony import */ var _shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/Guard/adults-not-allowed.guard */ 41864);
























const config = { url: 'http://localhost:4112', options: {} };
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,],
        exports: [],
        entryComponents: [],
        imports: [
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_14__.SharedModule,
            _ionic_storage__WEBPACK_IMPORTED_MODULE_18__.IonicStorageModule.forRoot({
                name: '__mydb',
                driverOrder: ['localstorage', 'sqlite', 'indexeddb', 'websql']
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonicModule.forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_8__.LayoutsModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_12__.ComponentModule,
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_22__.SocketIoModule.forRoot(config)
        ],
        providers: [
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__.ImagePicker,
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_6__.Crop,
            _Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService,
            _Shared_Service_storage_service__WEBPACK_IMPORTED_MODULE_11__.StorageService,
            _Shared_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard,
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_1__.StatusBar,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen,
            _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_13__.VideoPlayer,
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonicRouteStrategy
            },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HTTP_INTERCEPTORS, useClass: _Shared_Interceptors_JWInterceptors__WEBPACK_IMPORTED_MODULE_9__.JWTInterceptor, multi: true },
            // { provide: HTTP_INTERCEPTORS, useClass: H401Interceptor, multi: true },
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__.GoogleMaps,
            _shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_15__.AdultsNotAllowedGuard
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 46534:
/*!*******************************************************!*\
  !*** ./src/app/component/component-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentRoutingModule": () => (/* binding */ ComponentRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [];
let ComponentRoutingModule = class ComponentRoutingModule {
};
ComponentRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], ComponentRoutingModule);



/***/ }),

/***/ 55051:
/*!***********************************************!*\
  !*** ./src/app/component/component.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentModule": () => (/* binding */ ComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _layouts_erp_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/erp/top-menu/top-menu.component */ 477);
/* harmony import */ var _component_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-routing.module */ 46534);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 84456);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _parametres_parametres_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parametres/parametres.component */ 24162);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 63359);









let ComponentModule = class ComponentModule {
};
ComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _parametres_parametres_component__WEBPACK_IMPORTED_MODULE_3__.ParametresComponent, _layouts_erp_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_0__.TopMenuComponent],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _parametres_parametres_component__WEBPACK_IMPORTED_MODULE_3__.ParametresComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _component_routing_module__WEBPACK_IMPORTED_MODULE_1__.ComponentRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
        ]
    })
], ComponentModule);



/***/ }),

/***/ 63359:
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./footer.component.html */ 97043);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 43778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FooterComponent);



/***/ }),

/***/ 84456:
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.component.html */ 59373);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 21658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_layouts_erp_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layouts/erp/top-menu/top-menu.component */ 477);
/* harmony import */ var src_app_layouts_coachprofile_coach_menu_pop_over_coach_menu_pop_over_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/layouts/coachprofile/coach-menu-pop-over/coach-menu-pop-over.component */ 38686);
/* harmony import */ var src_app_layouts_coachprofile_palmares_pop_over_palmares_pop_over_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/layouts/coachprofile/palmares-pop-over/palmares-pop-over.component */ 95410);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var _modal_show_image_show_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/show-image/show-image.page */ 96190);












let HeaderComponent = class HeaderComponent {
    constructor(modalCtrl, popoverController, location, userservice, modalController) {
        this.modalCtrl = modalCtrl;
        this.popoverController = popoverController;
        this.location = location;
        this.userservice = userservice;
        this.modalController = modalController;
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        this.isModal = false;
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        this.isDetails = false;
        this.isEllipsis = false;
        this.isOption = false;
        this.isOptionPageSuivre = false;
        this.isCoach = false;
        this.isWelcome = false;
        this.isPalmares = false;
        this.isModProfile = false;
        this.BoiteRecepetionKids = false;
        this.BoiteRecepetion = false;
        this.ChatAdulte = false;
        this.isNotifications = false;
        this.isKid = false;
        this.isStatus = false;
        this.isKidPlanning = false;
        this.KidsProfile = false;
        this.SuivrePage = false;
        this.isParam = false;
        this.isPage = false;
        this.isPages = false;
        this.inParam = false;
        this.AdulteProfile = false;
        this.CoachProfileNotConnectedUser = false;
        this.ChatKids = false;
        this.follower = false;
    }
    ngOnInit() {
        this.getMe();
    }
    close() {
        this.modalCtrl.dismiss();
    }
    backButtonPalmares() {
        this.location.back();
    }
    openCoachMenu(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_layouts_coachprofile_coach_menu_pop_over_coach_menu_pop_over_component__WEBPACK_IMPORTED_MODULE_3__.CoachMenuPopOverComponent,
                cssClass: 'pop-over-style',
                componentProps: { Etatfollow: this.type, IdprofilePassed: this.idprofillepassed, followid: this.followid },
                event: ev,
                translucent: true,
                mode: 'ios'
            });
            if (this.type === 'followed') {
                popover.style.cssText = '--max-height:100px;--max-width:200px;';
            }
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
        });
    }
    openCoachPalmares(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_layouts_coachprofile_palmares_pop_over_palmares_pop_over_component__WEBPACK_IMPORTED_MODULE_4__.PalmaresPopOverComponent,
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true,
                mode: 'ios'
            });
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
        });
    }
    openERPModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_layouts_erp_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_2__.TopMenuComponent,
                cssClass: 'erp-parametre-modal'
            });
            return yield modal.present();
        });
    }
    getMe() {
        this.userservice.getMe().subscribe((res) => {
            this.user$ = res.data.data;
            this.userid = res.data.data._id;
        });
    }
    openSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_show_image_show_image_page__WEBPACK_IMPORTED_MODULE_6__.ShowImagePage,
                cssClass: ''
            });
            return yield modal.present();
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const onClosedData = 'Wrapped Up!';
            yield this.modalController.dismiss(onClosedData);
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController }
];
HeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isDetails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isEllipsis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isOptionPageSuivre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isCoach: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isWelcome: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isPalmares: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isModProfile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    BoiteRecepetionKids: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    BoiteRecepetion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    ChatAdulte: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isNotifications: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isKid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isKidPlanning: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    KidsProfile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    SuivrePage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isParam: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    inParam: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    AdulteProfile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    CoachProfileNotConnectedUser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    ChatKids: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    idprofillepassed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    followid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isCommunityCreate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isSaved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isActivityKids: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isPublicity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    isBoostPub: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderComponent);



/***/ }),

/***/ 96190:
/*!***************************************************************!*\
  !*** ./src/app/component/modal/show-image/show-image.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowImagePage": () => (/* binding */ ShowImagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_show_image_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./show-image.page.html */ 78569);
/* harmony import */ var _show_image_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-image.page.scss */ 82475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Service/follower.service */ 93647);








let ShowImagePage = class ShowImagePage {
    constructor(navParams, modalController, userService, router, followerService) {
        this.navParams = navParams;
        this.modalController = modalController;
        this.userService = userService;
        this.router = router;
        this.followerService = followerService;
    }
    ngOnInit() {
        this.getMe();
    }
    close() {
        this.modalController.dismiss();
    }
    getItems($event) {
        const val = $event.target.value;
        if (val && val.trim() !== '') {
            this.isItemAvailable = true;
            if (this.userRole === 'user' || this.userRole === 'pro') {
                this.userService.getRoleUsers().subscribe(res => {
                    this.users = res;
                    this.usersfiltered = this.users.filter((item) => {
                        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                    });
                });
            }
            else {
                this.userService.getUsersKids().subscribe(res => {
                    this.users = res;
                    this.usersfiltered = this.users.filter((item) => {
                        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                    });
                });
            }
        }
        else {
            this.isItemAvailable = false;
        }
    }
    getMe() {
        this.userService.getMe().subscribe((res) => {
            this.userConnectedId = res.data.data._id;
            this.userRole = res.data.data.role;
        });
    }
    gotoProfile(userId) {
        if (userId === this.userConnectedId) {
            if (this.userRole === 'user' || this.userRole === 'pro') {
                this.router.navigate(['menu/tabs/layouts/coachprofile/', userId, 'me', 'coachphoto']);
            }
            else {
                this.router.navigate(['tabs/profilkids/', userId]);
            }
            this.close();
        }
        else {
            if (this.userRole === 'user' || this.userRole === 'pro') {
                this.getfollow(userId);
            }
            else {
                this.followerService.getFollow(userId, this.userConnectedId)
                    .subscribe((res) => {
                    if (res == null) {
                        this.router.navigate(['/profil-kid/', userId]);
                    }
                    else {
                        this.router.navigate(['tabs/profilkids/', userId]);
                    }
                }, (error) => {
                    console.error(error);
                });
            }
            this.close();
        }
    }
    getfollow(iduserpassed) {
        this.followerService.getFollow(iduserpassed, this.userConnectedId)
            .subscribe((res) => {
            if (res == null) {
                this.router.navigate(['profil', iduserpassed, 'adulte']);
            }
            else {
                this.router.navigate(['menu/tabs/layouts/coachprofile', iduserpassed, 'followed/coachphoto']);
            }
        }, (error) => {
            console.error(error);
        });
    }
};
ShowImagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__.FollowerService }
];
ShowImagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-show-image',
        template: _raw_loader_show_image_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_show_image_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShowImagePage);

//profil follow      // this.router.navigate(['profil',userId,'adulte']);


/***/ }),

/***/ 24162:
/*!**************************************************************!*\
  !*** ./src/app/component/parametres/parametres.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParametresComponent": () => (/* binding */ ParametresComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_parametres_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./parametres.component.html */ 56239);
/* harmony import */ var _parametres_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parametres.component.scss */ 45551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/Service/post.service */ 91820);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);






let ParametresComponent = class ParametresComponent {
    constructor(postService, alertController, popoverController) {
        this.postService = postService;
        this.alertController = alertController;
        this.popoverController = popoverController;
    }
    ngOnInit() {
    }
    deletePost(post) {
        this.postService.deletePost(post).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.popoverController.dismiss();
        }));
    }
    alertDelete(post) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Voullez vous vraiment supprimer cette status!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'danger',
                        handler: () => {
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            this.deletePost(post);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ParametresComponent.ctorParameters = () => [
    { type: _Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_2__.PostService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
ParametresComponent.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
ParametresComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-parametres',
        template: _raw_loader_parametres_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_parametres_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ParametresComponent);



/***/ }),

/***/ 38686:
/*!*******************************************************************************************!*\
  !*** ./src/app/layouts/coachprofile/coach-menu-pop-over/coach-menu-pop-over.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachMenuPopOverComponent": () => (/* binding */ CoachMenuPopOverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_coach_menu_pop_over_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./coach-menu-pop-over.component.html */ 66578);
/* harmony import */ var _coach_menu_pop_over_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coach-menu-pop-over.component.scss */ 40706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Auth/auth.service */ 21584);
/* harmony import */ var src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Service/follower.service */ 93647);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var _shared_Service_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/Service/storage.service */ 9231);










let CoachMenuPopOverComponent = class CoachMenuPopOverComponent {
    constructor(authService, userService, router, modalCtrl, storageService, followerService) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.storageService = storageService;
        this.followerService = followerService;
        this.follower = false;
        this.isconnected = false;
    }
    ngOnInit() {
        this.getMe();
        //  this.getfollow()
        if (this.Etatfollow === 'followed') {
            this.follower = true;
        }
        else if (this.Etatfollow === 'me') {
            this.follower = false;
        }
    }
    getMe() {
        this.userService.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(res.data.data);
            this.user$ = res.data.data;
        }));
    }
    logout() {
        this.authService.logout();
    }
    desabonner() {
        this.followerService
            .deleteFollow(this.followid)
            .subscribe((res) => {
            this.router.navigate(["profil", this.IdprofilePassed, 'adulte']);
        });
    }
};
CoachMenuPopOverComponent.ctorParameters = () => [
    { type: src_app_Shared_Auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _shared_Service_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__.FollowerService }
];
CoachMenuPopOverComponent.propDecorators = {
    Etatfollow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    IdprofilePassed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    followid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
CoachMenuPopOverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-coach-menu-pop-over',
        template: _raw_loader_coach_menu_pop_over_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_coach_menu_pop_over_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CoachMenuPopOverComponent);



/***/ }),

/***/ 95410:
/*!***************************************************************************************!*\
  !*** ./src/app/layouts/coachprofile/palmares-pop-over/palmares-pop-over.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PalmaresPopOverComponent": () => (/* binding */ PalmaresPopOverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_palmares_pop_over_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./palmares-pop-over.component.html */ 71810);
/* harmony import */ var _palmares_pop_over_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./palmares-pop-over.component.scss */ 48492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);






let PalmaresPopOverComponent = class PalmaresPopOverComponent {
    constructor(router, modalCtrl) {
        this.router = router;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    palamares() {
        this.modalCtrl.dismiss();
        this.router.navigateByUrl('/palmares');
    }
};
PalmaresPopOverComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
PalmaresPopOverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-palmares-pop-over',
        template: _raw_loader_palmares_pop_over_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_palmares_pop_over_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PalmaresPopOverComponent);



/***/ }),

/***/ 477:
/*!************************************************************!*\
  !*** ./src/app/layouts/erp/top-menu/top-menu.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopMenuComponent": () => (/* binding */ TopMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_top_menu_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./top-menu.component.html */ 40984);
/* harmony import */ var _top_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-menu.component.scss */ 85918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TopMenuComponent = class TopMenuComponent {
    constructor() { }
    ngOnInit() { }
};
TopMenuComponent.ctorParameters = () => [];
TopMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-top-menu',
        template: _raw_loader_top_menu_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_top_menu_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TopMenuComponent);



/***/ }),

/***/ 8312:
/*!*****************************************************!*\
  !*** ./src/app/layouts/kids/kids-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KidsRoutingModule": () => (/* binding */ KidsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/Guard/adults-not-allowed.guard */ 41864);
/* harmony import */ var src_app_Shared_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Shared/Guard/auth.guard */ 76670);





const routes = [
    {
        path: '',
        children: [
            {
                path: 'boitereceptionkids',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_kids_boite-reception_boite-reception_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./boite-reception/boite-reception.module */ 55891)).then(m => m.BoiteReceptionPageModule),
                canActivate: [src_app_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
            {
                path: 'planning',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js-src_app_shared_Service_notifications_service_ts"), __webpack_require__.e("default-node_modules_ionic2-calendar___ivy_ngcc___fesm2015_ionic2-calendar_js-src_app_layouts-f62444"), __webpack_require__.e("src_app_layouts_kids_planning_planning_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./planning/planning.module */ 55022)).then(m => m.PlanningPageModule)
            },
            {
                path: 'tabsKids',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("default-src_app_layouts_kids_accueil_status-kids_add-status-kids_add-status-kids_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_kids_tabs-kids_tabs-kids_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs-kids/tabs-kids.module */ 32227)).then(m => m.TabsKidsPageModule), canActivate: [src_app_Shared_Guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
            },
            {
                path: 'maps',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_kids_maps_maps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./maps/maps.module */ 67982)).then(m => m.MapsPageModule),
                canActivate: [src_app_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
            {
                path: 'activite',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_kids_activite_activite_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./activite/activite.module */ 69421)).then(m => m.ActivitePageModule),
                canActivate: [src_app_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
            {
                path: 'sign-kids',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ionic-native_file-transfer___ivy_ngcc___ngx_index_js-src_app_Shared_patt-22d426"), __webpack_require__.e("src_app_layouts_kids_sign-kids_sign-kids_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sign-kids/sign-kids.module */ 76821)).then(m => m.SignKidsPageModule)
            },
            {
                path: 'profilkids',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("default-src_app_Shared_Model_Comment_ts-src_app_Shared_Service_comment_service_ts-src_app_lay-a5d4e0"), __webpack_require__.e("default-src_app_layouts_home_status_status_component_ts"), __webpack_require__.e("default-src_app_layouts_kids_profil_profil_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_shared_Service_notifications_service_ts-_804a2")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profil/profil.module */ 56534)).then(m => m.ProfilPageModule),
                canActivate: [src_app_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
            {
                path: 'notificationsKids',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_kids_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notifications/notifications.module */ 70396)).then(m => m.NotificationsPageModule)
            }
        ]
    },
    {
        path: 'tabs-kids',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("default-src_app_layouts_kids_accueil_status-kids_add-status-kids_add-status-kids_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_kids_tabs-kids_tabs-kids_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs-kids/tabs-kids.module */ 32227)).then(m => m.TabsKidsPageModule)
    },
];
let KidsRoutingModule = class KidsRoutingModule {
};
KidsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], KidsRoutingModule);



/***/ }),

/***/ 82859:
/*!*********************************************!*\
  !*** ./src/app/layouts/kids/kids.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyLoadImageHooks": () => (/* binding */ LazyLoadImageHooks),
/* harmony export */   "KidsModule": () => (/* binding */ KidsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _kids_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kids-routing.module */ 8312);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ 27260);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ 57208);







let LazyLoadImageHooks = class LazyLoadImageHooks extends ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__.IntersectionObserverHooks {
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
LazyLoadImageHooks = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], LazyLoadImageHooks);

let KidsModule = class KidsModule {
};
KidsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _kids_routing_module__WEBPACK_IMPORTED_MODULE_0__.KidsRoutingModule,
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImageModule,
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        ],
        providers: [{ provide: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__.LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],
    })
], KidsModule);



/***/ }),

/***/ 34875:
/*!***************************************************!*\
  !*** ./src/app/layouts/layouts-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsRoutingModule": () => (/* binding */ LayoutsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/Guard/adults-not-allowed.guard */ 41864);
/* harmony import */ var _shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Guard/roles-guard.guard */ 8320);





const routes = [
    {
        path: '',
        children: [
            {
                path: 'profil/:id/:typepage',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_profil_profil_module_ts"), __webpack_require__.e("src_app_shared_Service_notifications_service_ts-_804a0")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profil/profil.module */ 31646)).then(m => m.ProfilPageModule), canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'profil-kid/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_profil_profil_module_ts"), __webpack_require__.e("src_app_shared_Service_notifications_service_ts-_804a0")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profil/profil.module */ 31646)).then(m => m.ProfilPageModule),
            },
            {
                path: 'apropos',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_apropos_apropos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./apropos/apropos.module */ 51366)).then(m => m.AproposPageModule), canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'search',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_search_search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./search/search.module */ 7724)).then(m => m.SearchPageModule),
            },
            {
                path: 'modal-sheare',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("default-src_app_layouts_home_modal-sheare_modal-sheare_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_home_modal-sheare_modal-sheare_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/modal-sheare/modal-sheare.module */ 68931)).then(m => m.ModalShearePageModule),
            },
            {
                path: 'boitereception',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_boite-reception_boite-reception_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./boite-reception/boite-reception.module */ 74106)).then(m => m.BoiteReceptionPageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'chat/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_boite-reception_chat_chat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./boite-reception/chat/chat.module */ 94933)).then(m => m.ChatPageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'chatkids/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_kids_boite-reception_chatkids_chatkids_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./kids/boite-reception/chatkids/chatkids.module */ 82646)).then(m => m.ChatkidsPageModule),
                canActivate: [_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
            {
                path: 'maps',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_maps_maps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./maps/maps.module */ 62289)).then(m => m.MapsPageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'parametre',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_Config_parametre_parametre_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Config/parametre/parametre.module */ 58964)).then(m => m.ParametrePageModule),
                //canActivate:[RolesGuardGuard]
            },
            {
                path: 'abonnerinviteramis',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_Config_abonnerinviteramis_abonnerinviteramis_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Config/abonnerinviteramis/abonnerinviteramis.module */ 20808)).then(m => m.AbonnerinviteramisPageModule),
                // canActivate:[RolesGuardGuard]
            },
            {
                path: 'updateprofil',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_Config_updateprofil_updateprofil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Config/updateprofil/updateprofil.module */ 79849)).then(m => m.UpdateprofilPageModule),
                //  canActivate:[RolesGuardGuard]
            },
            {
                path: 'securiteconnexion',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_Config_securiteconnexion_securiteconnexion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Config/securiteconnexion/securiteconnexion.module */ 57108)).then(m => m.SecuriteconnexionPageModule),
                // canActivate:[RolesGuardGuard]
            },
            {
                path: 'langue',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_Config_langue_langue_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Config/langue/langue.module */ 36727)).then(m => m.LanguePageModule),
            },
            {
                path: 'historiquepersonnel',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_Config_historiquepersonnel_historiquepersonnel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Config/historiquepersonnel/historiquepersonnel.module */ 51218)).then(m => m.HistoriquepersonnelPageModule),
                // canActivate:[RolesGuardGuard]
            },
            {
                path: 'contact',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_Config_contact_contact_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Config/contact/contact.module */ 12332)).then(m => m.ContactPageModule),
                // canActivate:[RolesGuardGuard]
            },
            {
                path: 'help',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_Config_help-page_help-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Config/help-page/help-page.module */ 25638)).then(m => m.HelpPagePageModule),
                // canActivate:[RolesGuardGuard]
            },
            {
                path: 'desactivermoncompte',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_Config_desactivermoncompte_desactivermoncompte_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Config/desactivermoncompte/desactivermoncompte.module */ 85501)).then(m => m.DesactivermoncomptePageModule)
            },
            {
                path: 'calendar',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js-src_app_shared_Service_notifications_service_ts"), __webpack_require__.e("default-node_modules_ionic2-calendar___ivy_ngcc___fesm2015_ionic2-calendar_js-src_app_layouts-f62444"), __webpack_require__.e("src_app_layouts_Planing_calendar_calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Planing/calendar/calendar.module */ 14040)).then(m => m.CalendarPageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'statistiqueuser',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_statistiqueuser_statistiqueuser_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./statistiqueuser/statistiqueuser.module */ 20021)).then(m => m.StatistiqueuserPageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'image-modal',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_image-modal_image-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./image-modal/image-modal.module */ 12790)).then(m => m.ImageModalPageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'erp',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_erp_erp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./erp/erp.module */ 84545)).then(m => m.ErpPageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'insert-material-modal',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_insert-material-modal_insert-material-modal_page_ts"), __webpack_require__.e("src_app_layouts_insert-material-modal_insert-material-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./insert-material-modal/insert-material-modal.module */ 7711)).then(m => m.InsertMaterialModalPageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'insert-espace-modal',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_insert-espace-modal_insert-espace-modal_page_ts"), __webpack_require__.e("src_app_layouts_insert-espace-modal_insert-espace-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./insert-espace-modal/insert-espace-modal.module */ 88199)).then(m => m.InsertEspaceModalPageModule),
            },
            {
                path: 'insert-adherent-modal',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_insert-adherent-modal_insert-adherent-modal_page_ts"), __webpack_require__.e("src_app_layouts_insert-adherent-modal_insert-adherent-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./insert-adherent-modal/insert-adherent-modal.module */ 96472)).then(m => m.InsertAdherentModalPageModule),
            },
            {
                path: 'insert-effectif-modal',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_insert-effectif-modal_insert-effectif-modal_page_ts"), __webpack_require__.e("src_app_layouts_insert-effectif-modal_insert-effectif-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./insert-effectif-modal/insert-effectif-modal.module */ 51636)).then(m => m.InsertEffectifModalPageModule),
            },
            {
                path: 'planning',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js-src_app_shared_Service_notifications_service_ts"), __webpack_require__.e("default-node_modules_ionic2-calendar___ivy_ngcc___fesm2015_ionic2-calendar_js-src_app_layouts-f62444"), __webpack_require__.e("src_app_layouts_Planing_calendar_calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Planing/calendar/calendar.module */ 14040)).then(m => m.CalendarPageModule),
            },
            {
                path: 'historiqueerp',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_historiqueerp_historiqueerp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./historiqueerp/historiqueerp.module */ 24200)).then(m => m.HistoriqueerpPageModule),
            },
            {
                path: 'insert-vente-modal',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_insert-vente-modal_insert-vente-modal_page_ts"), __webpack_require__.e("src_app_layouts_insert-vente-modal_insert-vente-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./insert-vente-modal/insert-vente-modal.module */ 45037)).then(m => m.InsertVenteModalPageModule),
            },
            {
                path: 'insert-facteur-modal',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_insert-facteur-modal_insert-facteur-modal_page_ts"), __webpack_require__.e("src_app_layouts_insert-facteur-modal_insert-facteur-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./insert-facteur-modal/insert-facteur-modal.module */ 2453)).then(m => m.InsertFacteurModalPageModule),
            },
            {
                path: 'insert-last-effectif-modal',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_insert-last-effectif-modal_insert-last-effectif-modal_page_ts"), __webpack_require__.e("src_app_layouts_insert-last-effectif-modal_insert-last-effectif-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./insert-last-effectif-modal/insert-last-effectif-modal.module */ 36011))
                    .then(m => m.InsertLastEffectifModalPageModule),
            },
            {
                path: 'accueil',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("default-src_app_Shared_Model_Comment_ts-src_app_Shared_Service_comment_service_ts-src_app_lay-a5d4e0"), __webpack_require__.e("default-src_app_layouts_home_modal-sheare_modal-sheare_page_ts"), __webpack_require__.e("default-src_app_layouts_kids_accueil_accueil_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./kids/accueil/accueil.module */ 86451)).then(m => m.AccueilPageModule),
                canActivate: [_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("default-src_app_Shared_Model_Comment_ts-src_app_Shared_Service_comment_service_ts-src_app_lay-a5d4e0"), __webpack_require__.e("default-src_app_layouts_home_modal-sheare_modal-sheare_page_ts"), __webpack_require__.e("default-src_app_layouts_home_status_status_component_ts"), __webpack_require__.e("default-src_app_layouts_home_home_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_shared_Service_notifications_service_ts-_804a1")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 63848)).then(m => m.HomePageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'planning-kids',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js-src_app_shared_Service_notifications_service_ts"), __webpack_require__.e("default-node_modules_ionic2-calendar___ivy_ngcc___fesm2015_ionic2-calendar_js-src_app_layouts-f62444"), __webpack_require__.e("src_app_layouts_kids_planning_planning_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./kids/planning/planning.module */ 55022)).then(m => m.PlanningPageModule),
                canActivate: [_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
            {
                path: 'message',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_kids_message_message_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./kids/message/message.module */ 55167)).then(m => m.MessagePageModule),
                canActivate: [_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
            {
                path: 'maps',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_kids_maps_maps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./kids/maps/maps.module */ 67982)).then(m => m.MapsPageModule),
                canActivate: [_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
            {
                path: 'activite',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_kids_activite_activite_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./kids/activite/activite.module */ 69421)).then(m => m.ActivitePageModule),
                canActivate: [_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
            {
                path: 'kids',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./kids/kids.module */ 82859)).then(m => m.KidsModule),
                canActivate: [_shared_Guard_adults_not_allowed_guard__WEBPACK_IMPORTED_MODULE_0__.AdultsNotAllowedGuard]
            },
            {
                path: 'ami',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_ami_ami_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ami/ami.module */ 10378)).then(m => m.AmiPageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'coachprofile/:id/:type',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("default-src_app_Shared_Model_Comment_ts-src_app_Shared_Service_comment_service_ts-src_app_lay-a5d4e0"), __webpack_require__.e("default-src_app_layouts_home_modal-sheare_modal-sheare_page_ts"), __webpack_require__.e("default-src_app_layouts_home_status_status_component_ts"), __webpack_require__.e("default-src_app_layouts_home_home_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_coachprofile_coachprofile_module_ts-src_app_shared_Service_notifications_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./coachprofile/coachprofile.module */ 22834)).then(m => m.CoachprofilePageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'palmares/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_coachprofile_palmares_palmares_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./coachprofile/palmares/palmares.module */ 97167)).then(m => m.PalmaresPageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'scan',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("src_app_layouts_scan_scan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./scan/scan.module */ 64056)).then(m => m.ScanPageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'notifications',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js-src_app_shared_Service_notifications_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notifications/notifications.module */ 93875)).then(m => m.NotificationsPageModule)
            },
            {
                path: 'politiques-utilisation',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_Config_politiques-utilisation_politiques-utilisation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Config/politiques-utilisation/politiques-utilisation.module */ 34169)).
                    then(m => m.PolitiquesUtilisationPageModule),
                // canActivate:[RolesGuardGuard]
            },
            {
                path: 'confidentialite',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_Config_confidentialite_confidentialite_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Config/confidentialite/confidentialite.module */ 98512)).
                    then(m => m.ConfidentialitePageModule),
                // canActivate:[RolesGuardGuard]
            },
            {
                path: 'reglespublicitaires',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_Config_reglespublicitaires_reglespublicitaires_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Config/reglespublicitaires/reglespublicitaires.module */ 9682)).
                    then(m => m.ReglespublicitairesModule),
                // canActivate:[RolesGuardGuard]
            },
            {
                path: 'profiladulte/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_profil-adulte_profil-adulte_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profil-adulte/profil-adulte.module */ 91285)).then(m => m.ProfilAdultePageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'one-status/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_home_one-status_one-status_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/one-status/one-status.module */ 46970)).then(m => m.OneStatusPageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'community',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("default-src_app_layouts_home_modal-sheare_modal-sheare_page_ts"), __webpack_require__.e("default-src_app_layouts_community_show-page_show-page_module_ts"), __webpack_require__.e("default-src_app_layouts_community_add_add_module_ts"), __webpack_require__.e("default-src_app_layouts_community_show-event_show-event_module_ts"), __webpack_require__.e("default-src_app_layouts_community_community_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./community/community.module */ 30309)).then(m => m.CommunityPageModule),
                canActivate: [_shared_Guard_roles_guard_guard__WEBPACK_IMPORTED_MODULE_1__.RolesGuardGuard]
            },
            {
                path: 'help-page',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_Config_help-page_help-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Config/help-page/help-page.module */ 25638)).then(m => m.HelpPagePageModule)
            },
            {
                path: 'show-event/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("default-src_app_layouts_community_show-event_show-event_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_shared_Service_calendar_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./community/show-event/show-event.module */ 16890)).then(m => m.ShowEventPageModule)
            },
            {
                path: 'show-page/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("default-src_app_layouts_home_modal-sheare_modal-sheare_page_ts"), __webpack_require__.e("default-src_app_layouts_community_show-page_show-page_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./community/show-page/show-page.module */ 17299)).then(m => m.ShowPagePageModule)
            },
            {
                path: 'add',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_layouts_community_add_add_module_ts"), __webpack_require__.e("src_app_shared_Service_page_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./community/add/add.module */ 38188)).then(m => m.AddPageModule)
            },
            {
                path: 'saved-posts',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_capacitor_core_dist_esm_index_js"), __webpack_require__.e("default-src_app_Shared_Model_Comment_ts-src_app_Shared_Service_comment_service_ts-src_app_lay-a5d4e0"), __webpack_require__.e("default-src_app_layouts_home_status_status_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_coachprofile_saved-posts_saved-posts_module_ts-src_app_shared_Service_notific-6e609a")]).then(__webpack_require__.bind(__webpack_require__, /*! ./coachprofile/saved-posts/saved-posts.module */ 79225)).then(m => m.SavedPOSTSPageModule)
            },
            {
                path: 'welcome',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_layouts_welcome_welcome_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./welcome/welcome.module */ 68848)).then(m => m.WelcomePageModule)
            },
            {
                path: 'publicity',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_publicity_publicity_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./publicity/publicity.module */ 91162)).then(m => m.PublicityPageModule)
            },
            {
                path: 'boost-pub',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_boost-pub_boost-pub_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./boost-pub/boost-pub.module */ 86808)).then(m => m.BoostPubPageModule)
            },
        ],
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'publicity',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_publicity_publicity_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./publicity/publicity.module */ 91162)).then(m => m.PublicityPageModule)
    },
    {
        path: 'boost-pub',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_boost-pub_boost-pub_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./boost-pub/boost-pub.module */ 86808)).then(m => m.BoostPubPageModule)
    },
];
let LayoutsRoutingModule = class LayoutsRoutingModule {
};
LayoutsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], LayoutsRoutingModule);



/***/ }),

/***/ 52372:
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsModule": () => (/* binding */ LayoutsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts-routing.module */ 34875);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/component.module */ 55051);
/* harmony import */ var _kids_kids_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kids/kids.module */ 82859);






// AoT requires an exported function for factories
let LayoutsModule = class LayoutsModule {
};
LayoutsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutsRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule,
            _kids_kids_module__WEBPACK_IMPORTED_MODULE_2__.KidsModule,
        ],
    })
], LayoutsModule);



/***/ }),

/***/ 41864:
/*!**********************************************************!*\
  !*** ./src/app/shared/Guard/adults-not-allowed.guard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdultsNotAllowedGuard": () => (/* binding */ AdultsNotAllowedGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Service_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Service/user.service */ 53313);




let AdultsNotAllowedGuard = class AdultsNotAllowedGuard {
    constructor(router, userservice) {
        this.router = router;
        this.userservice = userservice;
    }
    canActivate() {
        const user = JSON.parse(localStorage.getItem('__mydb/_ionickv/currentUser'));
        if (user.role === 'kids') {
            return true;
        }
        else {
            this.router.navigate(['menu/tabs/home']);
            return false;
        }
    }
};
AdultsNotAllowedGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _Service_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService }
];
AdultsNotAllowedGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AdultsNotAllowedGuard);



/***/ }),

/***/ 8320:
/*!***************************************************!*\
  !*** ./src/app/shared/Guard/roles-guard.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesGuardGuard": () => (/* binding */ RolesGuardGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 39895);



let RolesGuardGuard = class RolesGuardGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        const user = JSON.parse(localStorage.getItem('__mydb/_ionickv/currentUser'));
        if (user.role === 'admin'
            || user.role === 'user'
            || user.role === 'pro') {
            return true;
        }
        else {
            this.router.navigate(['tabsKids/accueil']);
            return false;
        }
    }
};
RolesGuardGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router }
];
RolesGuardGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], RolesGuardGuard);



/***/ }),

/***/ 93647:
/*!****************************************************!*\
  !*** ./src/app/shared/Service/follower.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowerService": () => (/* binding */ FollowerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 1128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);




let FollowerService = class FollowerService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    createFollow(userId, follow) {
        return this.apiService.post(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiFollower}${userId}`, follow).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
    }
    getFollow(followed, following) {
        return this.apiService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiFollower}${followed}/${following}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    getFollowForFriends(following, page) {
        return this.apiService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiFollower}${following}/${page}/1`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    /* getCommentByService(post): Observable<Comment[]> {
     return this.apiService.get(`${UtilsService.apiPost}${post}/comments`).pipe(map((res) => res.data.data));
   }
 
 
   updateComments(comment: Comment) {
 
     return this.apiService.patch(`${UtilsService.apiComment}${comment.id}`,comment);
   }
 */
    deleteFollow(id) {
        return this.apiService.delete(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiFollower}` + id);
    }
    getFollowers(userId) {
        return this.apiService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiFollower}${userId}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
};
FollowerService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
FollowerService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], FollowerService);



/***/ }),

/***/ 9231:
/*!***************************************************!*\
  !*** ./src/app/shared/Service/storage.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69412);




let StorageService = class StorageService {
    constructor(storage) {
        this.storage = storage;
        this.storage$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this._storage = null;
    }
    set(key, value) {
        console.log(this.storage$.next(value));
        this.storage$.next(value);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.storage.set(key, value));
    }
    get(key) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.storage.get(key).then(res => res));
    }
    clear() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.storage.clear());
    }
    remove(key) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.storage.remove(key));
    }
    keys() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.storage.keys());
    }
};
StorageService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage }
];
StorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ 53313:
/*!************************************************!*\
  !*** ./src/app/shared/Service/user.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 1128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);

/* eslint-disable arrow-body-style */





let UserService = class UserService {
    constructor(utilsService, toastCtrl) {
        this.utilsService = utilsService;
        this.toastCtrl = toastCtrl;
    }
    getMe() {
        return this.utilsService.get(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'Me').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            return res;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    searchUser(config) {
        // Convert any filters over to Angular's URLSearchParams
        const params = {};
        Object.keys(config)
            .forEach((key) => {
            params[key] = config[key];
        });
        return this.utilsService.get('users' + ((config.name === 'feed') ? '/feed' : ''));
    }
    updateMe(user) {
        return this.utilsService.patch(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'updateMe', user);
    }
    updateCoverMe(user) {
        return this.utilsService.patch(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'cover', user);
    }
    updateUser(user) {
        return this.utilsService.patch(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER, user);
    }
    getUser(id) {
        return this.utilsService.get(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            return res;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    signUp(user) {
        return this.utilsService.post(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'signup', user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    confirmInscription(code) {
        return this.utilsService.post(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'confirm', code).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    forgotPassword(user) {
        return this.utilsService.post(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'forgotPassword', user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    resetPassword(token) {
        return this.utilsService.patch(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'resetPassword', token).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    renvoyerToken(user) {
        return this.utilsService.post(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER + 'renvoi', user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    deactivate(user) {
        return this.utilsService.post(_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apideactivation, user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => {
            return res;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    handleError(error) {
        var _a, _b, _c;
        console.log(error);
        if ((error === null || error === void 0 ? void 0 : error.error) instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', (_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            if ((error === null || error === void 0 ? void 0 : error.status) === 500) {
                this.presentToast('Probléme Serveur veuillez patienter Svp...', 'danger', 'middle');
            }
            console.error(`Backend returned code ${error === null || error === void 0 ? void 0 : error.status}, ` + `body was: ${(_b = error === null || error === void 0 ? void 0 : error.error) === null || _b === void 0 ? void 0 : _b.message}`);
        }
        // return an observable with a user-facing error message
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)((_c = error === null || error === void 0 ? void 0 : error.error) === null || _c === void 0 ? void 0 : _c.message);
    }
    presentToast(message, color, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.myToast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                color,
                position
            });
            this.myToast.present();
        });
    }
    getAllusers() {
        return this.utilsService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    getUsersKids() {
        return this.utilsService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER}?role=kids`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.data.data));
    }
    getRoleUsers() {
        return this.utilsService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiUSER}?role=user`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res.data.data));
    }
};
UserService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 1128:
/*!*************************************************!*\
  !*** ./src/app/shared/Service/utils.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilsService": () => (/* binding */ UtilsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 9231);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
var UtilsService_1;






// import { DatePipe } from "@angular/common";


let UtilsService = UtilsService_1 = class UtilsService {
    constructor(httpClient, storage, toastCtrl) {
        this.httpClient = httpClient;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        // this.jwt().subscribe(res => this.header = res);
        // this.jwt();
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
    // jwt() {
    //   return this.storage.get(environment.token).pipe(map(res => {
    //     this.token = res;
    //     if (this.token) {
    //       const headers = new HttpHeaders({ authorization: 'Bearer ' + this.token });
    //       //   console.log(headers);
    //       return { headers };
    //     }
    //   }));
    // }
    post(url, object) {
        // console.log(this.header);
        return this.httpClient
            .post(url, object).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
    }
    patch(url, object) {
        return this.httpClient.patch(url, object).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
    }
    put(url, object) {
        return this.httpClient.put(url, object).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
    }
    get(url) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders({ authorization: 'Bearer ' + this.token });
        return this.httpClient.get(url, { observe: 'response' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res.body), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
    }
    delete(url) {
        return this.httpClient.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.formatErrors));
    }
    formatErrors(error) {
        console.log(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error.error);
    }
};
UtilsService.remoteAdress = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
UtilsService.apiUSER = UtilsService_1.remoteAdress + 'users/';
UtilsService.apiACTION = UtilsService_1.remoteAdress + 'actions/';
UtilsService.apiCLIENT = UtilsService_1.remoteAdress + 'clients/';
UtilsService.apiOPERATION = UtilsService_1.remoteAdress + 'operations/';
UtilsService.apiPost = UtilsService_1.remoteAdress + 'posts/';
UtilsService.apiComment = UtilsService_1.remoteAdress + 'comments/';
UtilsService.apiFavoris = UtilsService_1.remoteAdress + 'favoris/';
UtilsService.apiCoach = UtilsService_1.remoteAdress + 'coachs/';
UtilsService.apiImage = UtilsService_1.remoteAdress + 'images/';
UtilsService.apiFollower = UtilsService_1.remoteAdress + 'follower/';
UtilsService.apiChat = UtilsService_1.remoteAdress + 'chat/';
UtilsService.apiCalendar = UtilsService_1.remoteAdress + 'calendar/';
UtilsService.apiHobbies = UtilsService_1.remoteAdress + 'hobbies/';
UtilsService.apiacitivteKids = UtilsService_1.remoteAdress + 'activiteKids/';
UtilsService.apiInvite = UtilsService_1.remoteAdress + 'invi/';
UtilsService.apishared = UtilsService_1.remoteAdress + 'shared/';
UtilsService.apimediafile = UtilsService_1.remoteAdress + 'media/';
UtilsService.apimyaccesshistory = UtilsService_1.remoteAdress + 'accesshistory/myaccesshistory/';
UtilsService.apiNotif = UtilsService_1.remoteAdress + 'notifications/';
UtilsService.apiIp = UtilsService_1.remoteAdress + 'getIps/';
UtilsService.apimyactivityhistory = UtilsService_1.remoteAdress + 'activityhistory';
UtilsService.apideactivation = UtilsService_1.remoteAdress + 'deactivateaccount';
UtilsService.apiPage = UtilsService_1.remoteAdress + 'pages';
UtilsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
UtilsService = UtilsService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root',
    })
], UtilsService);



/***/ }),

/***/ 66676:
/*!****************************************************!*\
  !*** ./src/app/shared/modules/shared.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedComponent": () => (/* binding */ SharedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_shared_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./shared.component.html */ 21002);
/* harmony import */ var _shared_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.component.css */ 55203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let SharedComponent = class SharedComponent {
    constructor() { }
    ngOnInit() {
    }
};
SharedComponent.ctorParameters = () => [];
SharedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-shared',
        template: _raw_loader_shared_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_shared_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SharedComponent);



/***/ }),

/***/ 57208:
/*!*************************************************!*\
  !*** ./src/app/shared/modules/shared.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.component */ 66676);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 29790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/http-loader */ 32472);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 38605);








function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_1__.TranslateHttpLoader(http);
}
let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.IonicStorageModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient]
                }
            })
        ],
        declarations: [_shared_component__WEBPACK_IMPORTED_MODULE_0__.SharedComponent],
        exports: [_shared_component__WEBPACK_IMPORTED_MODULE_0__.SharedComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule]
    })
], SharedModule);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiUrl: 'http://localhost:4112/api/v1/',
    apiUrl: 'http://192.168.1.21:4112/api/v1/',
    // apiImg: 'http://9db908ef441a.ngrok.io/img/',
    apiImg: 'http://192.168.1.21:4112/img/',
    token: 'token',
    currentUser: 'currentUser',
    idUser: 'id',
    expiresIn: 'expiredIn'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55203:
/*!*****************************************************!*\
  !*** ./src/app/shared/modules/shared.component.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n#menu-material .menu-header {\n  padding: 5px 15px;\n  background-image: url(\"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fsport-background&psig=AOvVaw2vciHbJGDCAHNhci9UxZH5&ust=1604479689195000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCcp-L-5ewCFQAAAAAdAAAAABAD\");\n  background-size: cover;\n  color: white;\n}\n\n#menu-material .menu-header .name {\n  font-weight: 500;\n  margin-bottom: 3px;\n}\n\n#menu-material .menu-header .e-mail {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n#menu-material .user-avatar {\n  padding: 0.5em;\n  height: 12vh;\n}\n\n#menu-material .label {\n  color: #999;\n  font-weight: 400;\n}\n\n#menu-material ion-icon {\n  color: #777;\n}\n\n.bar.bar-profile {\n  background-color: #d82121;\n  height: 170px;\n}\n\n.bar .profile {\n  overflow: hidden;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  padding-top: 15px;\n}\n\n.profile .name {\n  color: #0f0f0f;\n  margin-top: 10px !important;\n  margin-bottom: 10px !important;\n}\n\n.profile-picture {\n  border-radius: 50%;\n}\n\n.menu .has-header {\n  top: 169px;\n}\n\n.active-item {\n  border-left: 8px solid #3b8c4f;\n}\n\nion-header ion-toolbar {\n  background: transparent;\n  --background: var(--ion-color-bg);\n  color: #FFF;\n}\n\nion-footer ion-toolbar, ion-footer ion-toolbar ion-item {\n  background: transparent;\n  --background: var(--ion-color-bg);\n  color: #FFF;\n}\n\nion-fab {\n  margin-bottom: 5rem;\n  margin-right: 0.5rem;\n}\n\nion-fab-button {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0RBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBTUU7RUFDRSxpQkFBQTtFQUNBLDZQQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBSEo7O0FBS0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBSE47O0FBTUk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFKTjs7QUFRRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBTko7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFTRTtFQUNFLFdBQUE7QUFQSjs7QUFVQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQVBGOztBQVVBO0VBRUUsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFSRjs7QUFXQTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtBQVJGOztBQVdBO0VBRUUsVUFBQTtBQVRGOztBQWFBO0VBQ0UsOEJBQUE7QUFWRjs7QUFhQTtFQUNFLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FBVkY7O0FBWUE7RUFDRSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtBQVRGOztBQWFBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQVZGOztBQVlBO0VBQ0UseUJBQUE7QUFURiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi8vIGZvciBzdHlsZSBhdmF0YXJcbi8vIE1hdGVyaWFsIERlc2lnbiBTaWRlbWVudVxuXG4jbWVudS1tYXRlcmlhbCB7XG4gIC5tZW51LWhlYWRlciB7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3d3dy5nb29nbGUuY29tL3VybD9zYT1pJnVybD1odHRwcyUzQSUyRiUyRnd3dy5mcmVlcGlrLmNvbSUyRmZyZWUtcGhvdG9zLXZlY3RvcnMlMkZzcG9ydC1iYWNrZ3JvdW5kJnBzaWc9QU92VmF3MnZjaUhiSkdEQ0FITmhjaTlVeFpINSZ1c3Q9MTYwNDQ3OTY4OTE5NTAwMCZzb3VyY2U9aW1hZ2VzJmNkPXZmZSZ2ZWQ9MENBSVFqUnhxRndvVENNQ2NwLUwtNWV3Q0ZRQUFBQUFkQUFBQUFCQUQnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIC5uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgfVxuXG4gICAgLmUtbWFpbCB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWF2YXRhciB7XG4gICAgcGFkZGluZzogLjVlbTtcbiAgICBoZWlnaHQ6IDEydmg7XG4gIH1cblxuICAubGFiZWwge1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG59XG4uYmFyLmJhci1wcm9maWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMzMsIDMzKTtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cblxuLmJhciAucHJvZmlsZSB7XG5cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4ucHJvZmlsZSAubmFtZSB7XG4gIGNvbG9yOiAjMGYwZjBmO1xuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUtcGljdHVyZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm1lbnUgLmhhcy1oZWFkZXJcbntcbiAgdG9wOiAxNjlweDtcbn1cblxuXG4uYWN0aXZlLWl0ZW0ge1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkICMzYjhjNGY7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmcpO1xuICBjb2xvcjojRkZGO1xufVxuaW9uLWZvb3RlciBpb24tdG9vbGJhciAsIGlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYmcpO1xuICBjb2xvcjojRkZGO1xufVxuXG5cbmlvbi1mYWIge1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xufVxuaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4gXG4gIl19 */");

/***/ }),

/***/ 43778:
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".footer {\n  height: 7px;\n  margin: 0;\n  background-image: linear-gradient(135deg, #247238, #247238, #8EBF25, #8EBF25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNkVBQUE7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xuICBoZWlnaHQ6IDdweDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyNDcyMzgsICMyNDcyMzgsICAjOEVCRjI1LCM4RUJGMjUpO1xufVxuIl19 */");

/***/ }),

/***/ 21658:
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-buttons ion-button {\n  --border-radius: 50%;\n  border-radius: 50%;\n  background: #1313131f;\n  width: 36px;\n  height: 36px;\n}\n\n.title-font {\n  font-weight: 150;\n  font-size: 18px;\n}\n\n.image {\n  position: absolute;\n  animation: spin 15s linear infinite;\n}\n\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.savedPosts {\n  margin-left: 130px;\n  display: flex;\n  align-items: center;\n  color: white;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBSUEsbUNBQUE7QUFGRjs7QUFpQkE7RUFDRTtJQUVFLHlCQUFBO0VBSkY7QUFDRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFMRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzEzMTMxMzFmO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICAvLyBmaWxsLW9wYWNpdHk6IDtcbn1cblxuXG4udGl0bGUtZm9udCB7XG4gIGZvbnQtd2VpZ2h0OiAxNTA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBzcGluIDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogc3BpbiAxNXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5ALW1vei1rZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4uc2F2ZWRQb3N0c3tcbiAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZToyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ 82475:
/*!*****************************************************************!*\
  !*** ./src/app/component/modal/show-image/show-image.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".close-fake {\n  --background: transparent;\n  margin-top: 40px;\n}\n.close-fake ion-icon {\n  font-size: 2rem;\n}\nion-content {\n  --background: rgba(44, 39, 45, 0.84);\n}\nion-slides {\n  height: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctaW1hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFNQSxnQkFBQTtBQUpGO0FBQUU7RUFDRSxlQUFBO0FBRUo7QUFJQTtFQUNFLG9DQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7QUFERiIsImZpbGUiOiJzaG93LWltYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZS1mYWtlIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoNDQsIDM5LCA0NSwgMC44NCk7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDgwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 45551:
/*!****************************************************************!*\
  !*** ./src/app/component/parametres/parametres.component.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJhbWV0cmVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 40706:
/*!*********************************************************************************************!*\
  !*** ./src/app/layouts/coachprofile/coach-menu-pop-over/coach-menu-pop-over.component.scss ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --inner-border-width: 0px;\n}\n\nion-label {\n  padding: 0%;\n}\n\nh6 {\n  font-weight: bold;\n  color: #616160;\n  font-size: 12px;\n}\n\nh6#erp {\n  color: #ffca22;\n}\n\n.ionPopOver {\n  width: 20px;\n  /* margin-right: 5px; */\n  margin: 5px;\n}\n\n.item-native {\n  padding-inline-start: 0 !important;\n}\n\nion-content {\n  background-color: transparent;\n}\n\n.disconnect {\n  color: #3b8c4f;\n}\n\n.pop-over-style .popover-content {\n  --min-width: 300px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYWNoLW1lbnUtcG9wLW92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBRUUsY0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0Usa0NBQUE7QUFBRjs7QUFHQTtFQUNFLDZCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBSUE7RUFDRSw2QkFBQTtBQURGIiwiZmlsZSI6ImNvYWNoLW1lbnUtcG9wLW92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIHBhZGRpbmc6IDAlO1xufVxuXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzYxNjE2MDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5oNiNlcnAge1xuXG4gIGNvbG9yOiAjZmZjYTIyO1xufVxuXG4uaW9uUG9wT3ZlciB7XG4gIHdpZHRoOiAyMHB4O1xuICAvKiBtYXJnaW4tcmlnaHQ6IDVweDsgKi9cbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5pdGVtLW5hdGl2ZSB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kaXNjb25uZWN0IHtcbiAgY29sb3I6ICMzYjhjNGY7XG59XG5cblxuLnBvcC1vdmVyLXN0eWxlIC5wb3BvdmVyLWNvbnRlbnQge1xuICAtLW1pbi13aWR0aDogMzAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 48492:
/*!*****************************************************************************************!*\
  !*** ./src/app/layouts/coachprofile/palmares-pop-over/palmares-pop-over.component.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-start:10px;\n}\n\nh5.details {\n  color: #616160;\n  font-weight: 100;\n  margin: 0px;\n  text-align: start;\n  font-size: 16px;\n}\n\nh5.title {\n  color: #616160;\n  font-weight: 100;\n  margin: 0px;\n  text-align: center;\n  font-size: 16px;\n}\n\nb {\n  text-align: center;\n  font-size: 23px;\n}\n\nh4 {\n  color: #247238;\n  font-size: 20px;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 500;\n  margin: 0px;\n}\n\n.upper {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.lower {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\na {\n  color: #616160;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbG1hcmVzLXBvcC1vdmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0JBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUtFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0FBRkoiLCJmaWxlIjoicGFsbWFyZXMtcG9wLW92ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXG5pb24tY29udGVudHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6MTBweDtcbn1cbiAgXG5oNS5kZXRhaWxzIHtcbiAgICBjb2xvcjogIzYxNjE2MCA7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBtYXJnaW46IDBweDtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5oNS50aXRsZSB7XG4gICAgY29sb3I6ICM2MTYxNjAgO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbiBcbiBcbiAgYiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuIFxuXG4gIGg0e1xuICAgIGNvbG9yOiAjMjQ3MjM4IDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbjogMHB4O1xufVxuXG4udXBwZXJ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubG93ZXJ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5hIHtcbiAgICBjb2xvcjojNjE2MTYwIDtcbn0iXX0= */");

/***/ }),

/***/ 85918:
/*!**************************************************************!*\
  !*** ./src/app/layouts/erp/top-menu/top-menu.component.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background: #eee;\n  /* Grey background color */\n}\n\n.itemList {\n  background-color: #eee;\n  /* Grey background color */\n  color: black;\n  /* Black text color */\n  display: block;\n  /* Make the links appear below each other */\n  padding: 12px;\n  /* Add some padding */\n  text-decoration: none;\n  /* Remove underline from links */\n}\n\n.itemText {\n  font-size: 16px;\n  color: #616160;\n}\n\n.itemLi {\n  list-style-type: none;\n  padding: 5px;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 40px;\n  vertical-align: center;\n}\n\n.roundedInput {\n  --border-color: var(--ion-color-medium-shade);\n  --border-radius: 50px;\n  --border-width: 4px;\n  --box-shadow: 2px gray;\n  --highlight-height: 0;\n  --background: #f8f9fa1a;\n}\n\n.tail {\n  position: absolute;\n  top: -20px;\n  right: 0px;\n  width: 30px;\n  z-index: 5;\n}\n\n.mContent {\n  padding: 10px;\n}\n\na {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFBb0IsMEJBQUE7QUFFeEI7O0FBQ0M7RUFDRyxzQkFBQTtFQUF3QiwwQkFBQTtFQUN4QixZQUFBO0VBQWMscUJBQUE7RUFDZCxjQUFBO0VBQWdCLDJDQUFBO0VBQ2hCLGFBQUE7RUFBZSxxQkFBQTtFQUNmLHFCQUFBO0VBQXVCLGdDQUFBO0FBTzNCOztBQUhDO0VBQ0csZUFBQTtFQUNDLGNBQUE7QUFNTDs7QUFKQztFQUNHLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQU9KOztBQUZDO0VBQ0csNkNBQUE7RUFFQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0FBSUo7O0FBREE7RUFDRyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFJSDs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFDQTtFQUNHLHFCQUFBO0FBRUgiLCJmaWxlIjoidG9wLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNlZWU7IC8qIEdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xufVxuIFxuIC5pdGVtTGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlOyAvKiBHcmV5IGJhY2tncm91bmQgY29sb3IgKi9cbiAgICBjb2xvcjogYmxhY2s7IC8qIEJsYWNrIHRleHQgY29sb3IgKi9cbiAgICBkaXNwbGF5OiBibG9jazsgLyogTWFrZSB0aGUgbGlua3MgYXBwZWFyIGJlbG93IGVhY2ggb3RoZXIgKi9cbiAgICBwYWRkaW5nOiAxMnB4OyAvKiBBZGQgc29tZSBwYWRkaW5nICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvKiBSZW1vdmUgdW5kZXJsaW5lIGZyb20gbGlua3MgKi9cbiB9XG5cbiBcbiAuaXRlbVRleHR7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgICBjb2xvcjogIzYxNjE2MDtcbiB9XG4gLml0ZW1MaXtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgIFxuIH1cblxuIC5yb3VuZGVkSW5wdXQge1xuICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiBcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDRweDtcbiAgICAtLWJveC1zaGFkb3c6IDJweCBncmF5O1xuICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgICAtLWJhY2tncm91bmQ6ICNmOGY5ZmExYTtcbiAgIH1cblxuLnRhaWx7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICB0b3A6IC0yMHB4O1xuICAgcmlnaHQ6IDBweDtcbiAgIHdpZHRoOiAzMHB4O1xuICAgei1pbmRleDogNTtcbiAgIH1cblxuXG5cbi5tQ29udGVudHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuYSB7XG4gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <!-- <ion-router-outlet ></ion-router-outlet>\n  <ion-app>\n  <ion-split-pane >\n    <ion-menu contentId=\"main-content\" auto-hide=\"true\" type=\"overlay\" *ngIf=\"token\">\n\n      <ion-header>\n        <ion-toolbar>\n          <ion-title style=\"\n      background-image: linear-gradient(\n        119deg,\n        rgba(92, 99, 91, 1) 0%,\n        rgba(36, 114, 56, 1) 35%,\n        rgb(122, 113, 172) 100%\n      );\n    \">Menu</ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item [class.active-item]=\"selectedPath.startsWith(p.url)\" routerDirection=\"root\" [routerLink]=\"[p.url]\"\n              lines=\"none\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n      <ion-footer translucent=\"true\">\n        <ion-toolbar translucent=\"true\">\n          <ion-item tappable (click)=\"logout()\" routerDirection=\"root\" lines=\"none\">\n            <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n            <ion-label>Déconnexion</ion-label>\n          </ion-item>\n        </ion-toolbar>\n      </ion-footer>\n    </ion-menu>\n -->\n\n  <ion-router-outlet></ion-router-outlet>\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\"  slot=\"fixed\" fill=\"clear\" *ngIf=\"token\" >\n      <ion-fab-button fill=\"clear\" >\n        <img src=\"../assets/icon/icon_scan.svg\" alt=\"\">\n\n      </ion-fab-button>\n    </ion-fab> -->\n  <!-- </ion-split-pane> -->\n  <!-- </ion-app> -->\n\n</ion-app>\n");

/***/ }),

/***/ 97043:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.component.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p class=\"footer\">\n</p>\n");

/***/ }),

/***/ 59373:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon *ngIf=\"!isModal && isModProfile\" color=\"light\" routerLink=\"/profil\" name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-icon *ngIf=\"!isModal && BoiteRecepetionKids\" color=\"light\" routerLink=\"/tabsKids/accueil\"\n        name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-icon *ngIf=\"!isModal && BoiteRecepetion\" color=\"light\" routerLink=\"/tabs/home\"\n        name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-icon *ngIf=\"isKidPlanning\" color=\"light\" routerLink=\"/tabsKids/profilkids/{{userid}}\"\n        name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-icon *ngIf=\"isPages\" color=\"light\" routerLink=\"/tabs/community\"\n        name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-icon *ngIf=\"isPage\" color=\"light\" routerLink=\"/tabs/community\"\n        name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-icon *ngIf=\"isPublicity\" color=\"light\" routerLink=\"/menu/tabs/home\"\n        name=\"chevron-back-outline\">\n      </ion-icon><ion-icon *ngIf=\"isBoostPub\" color=\"light\" routerLink=\"/tabs/layouts/publicity\"\n      name=\"chevron-back-outline\">\n    </ion-icon>\n\n      <ion-icon *ngIf=\"isStatus\" color=\"light\" routerLink=\"/tabsKids/profilkids/{{userid}}\"\n        name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-icon *ngIf=\"!isModal && ChatAdulte\" color=\"light\" routerLink=\"/tabs/home\" name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-icon *ngIf=\"!isModal && ChatKids\" color=\"light\" routerLink=\"/tabsKids/boitereceptionkids\" name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-icon *ngIf=\"!isModal && isPalmares\" color=\"light\" (click)=\"backButtonPalmares()\" name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-icon *ngIf=\"!isModal && KidsProfile\" color=\"light\" routerLink=\"/tabsKids/accueil\"\n        name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-icon *ngIf=\"!isModal && SuivrePage\" color=\"light\" routerLink=\"/tabsKids/accueil\" name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-icon *ngIf=\"!isModal && AdulteProfile\" color=\"light\" routerLink=\"/tabsKids/accueil\"\n        name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-icon *ngIf=\"isCommunityCreate\" color=\"light\" routerLink=\"/tabs/community\" name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-button shape=\"rounded\" *ngIf=\"isCoach || isOption\" [routerLink]=\"['/tabs/layouts/scan']\"\n        routerLinkActive=\"router-link-active\">\n        <img src=\"../../assets/icon/icon_scan.png\" class=\"image\" alt=\"\">\n      </ion-button>\n      <ion-button shape=\"rounded\" *ngIf=\"CoachProfileNotConnectedUser\" [routerLink]=\"['/tabs/layouts/scan']\"\n        routerLinkActive=\"router-link-active\">\n        <img src=\"../../assets/icon/icon_scan.png\" class=\"image\" alt=\"\">\n      </ion-button>\n      <ion-buttons slot=\"start\">\n        <ion-icon *ngIf=\"isParam\" color=\"light\" routerLink=\"/parametre\"\n          name=\"chevron-back-outline\">\n        </ion-icon>\n      </ion-buttons>\n      <ion-buttons slot=\"start\">\n        <ion-icon *ngIf=\"inParam\" color=\"light\" routerLink=\"/tabs/layouts/coachprofile/{{userid}}/me/coachphoto\"\n          name=\"chevron-back-outline\">\n        </ion-icon>\n      </ion-buttons>\n      <ion-buttons slot=\"start\">\n        <ion-icon *ngIf=\"isSaved\" color=\"light\" routerLink=\"/tabs/layouts/coachprofile/{{userid}}/me/coachphoto\"\n          name=\"chevron-back-outline\">\n        </ion-icon>\n      </ion-buttons>\n      <div *ngIf=\"isSaved\"  class=\"savedPosts\">\n        <ion-icon  color=\"light\"\n        name=\"bookmark-outline\">\n      </ion-icon>\n        Enregistré\n      </div>\n      <ion-buttons *ngIf=\"isActivityKids\" (click)=\"closeModal()\" slot=\"start\">\n        <ion-icon  color=\"light\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-buttons>\n\n\n      <ion-buttons>\n        <ion-button shape=\"rounded\" *ngIf=\"isKid\" slot=\"start\" [routerLink]=\"['/activite']\"\n          routerLinkActive=\"router-link-active\">\n          <img src=\"../../assets/icon/etoile_gris.png\" color=\"light\" alt=\"\">\n        </ion-button>\n      </ion-buttons>\n    </ion-buttons>\n    <ion-buttons slot=\"end\"  (click)=\"openSearch()\">\n      <ion-button shape=\"rounded\" routerLinkActive=\"router-link-active\">\n        <img style=\"width: 20px;height:20px\" src=\"../../assets/svg/search.svg\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"isOptionPageSuivre\">\n      <ion-button shape=\"rounded\" (click)=\"openCoachMenu($event)\">\n        <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n      </ion-button>\n      <ion-button shape=\"rounded\" [routerLink]=\"['/tabs/layouts/maps']\" routerLinkActive=\"router-link-active\">\n        <img src=\"../../assets/icon/icon_position.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"isOption\">\n      <ion-button shape=\"rounded\" [routerLink]=\"['/tabs/layouts/maps']\" routerLinkActive=\"router-link-active\">\n        <img src=\"../../assets/icon/icon_position.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"isEllipsis\">\n      <ion-button shape=\"rounded\" (click)=\"openERPModal()\">\n        <ion-icon color=\"light\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"isCoach\">\n      <ion-button shape=\"rounded\" (click)=\"openCoachMenu($event)\">\n        <ion-icon color=\"light\" name=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"light\" *ngIf=\"isKid\" class=\"ion-text-center\">\n      Accueil</ion-title>\n      <ion-title color=\"light\" *ngIf=\"isWelcome\" class=\"ion-text-center\">\n        Bienvenue</ion-title>\n      <ion-title color=\"light\" *ngIf=\"isPages\" class=\"ion-text-center\">\n        Pages</ion-title>\n        <ion-title color=\"light\" *ngIf=\"isPage\" class=\"ion-text-center\">\n          Page</ion-title>\n      <ion-title color=\"light\" *ngIf=\"isStatus\" class=\"ion-text-center\">\n        Post</ion-title>\n    <ion-title color=\"light\" *ngIf=\"BoiteRecepetion\" class=\"ion-text-center\">\n      Boite réception</ion-title>\n      <ion-title color=\"light\" *ngIf=\"isKidPlanning\" class=\"ion-text-center\">\n        Calendrier</ion-title>\n        <ion-title color=\"light\" *ngIf=\"isPublicity\" class=\"ion-text-center\">\n          Espace Publicité</ion-title>\n          <ion-title color=\"light\" *ngIf=\"isBoostPub\" class=\"ion-text-center\">\n            Booster la publication</ion-title>\n    <ion-title color=\"light\" class=\"ion-text-center title-font\">\n      {{title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n");

/***/ }),

/***/ 78569:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/modal/show-image/show-image.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-icon (click)=\"close()\" name=\"chevron-back-outline\">\n  </ion-icon>\n  <ion-searchbar placeholder=\"\" (ionChange)=\"getItems($event)\"></ion-searchbar>\n\n</ion-header>\n\n<ion-content style=\"background-color: white;\" fullscreen>\n  <ion-list *ngIf=\"isItemAvailable\">\n    <ion-item *ngFor=\"let item of usersfiltered\" (click)=\"gotoProfile(item._id)\" >{{ item.name }}</ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 56239:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/parametres/parametres.component.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list>\n  <ion-item>\n    <ion-label>Modifier mon status</ion-label>\n  </ion-item>\n  <ion-item (click)=\"alertDelete(post)\" >\n    <ion-label>Supprimer mon status</ion-label>\n  </ion-item>\n</ion-list>\n");

/***/ }),

/***/ 66578:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/coachprofile/coach-menu-pop-over/coach-menu-pop-over.component.html ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div  *ngIf=\"follower===false\" >\n\n<ion-list>\n  <ion-item style=\"--padding-start:0\"  [routerLink]=\"['/tabs/layouts/saved-posts']\" >\n    <img src=\"./assets/iconPost/bookmark.svg\" class=\"ionPopOver\">\n    <ion-label>\n      <h6>Enregistré</h6>\n    </ion-label>\n  </ion-item>\n  <ion-item style=\"--padding-start:0\">\n    <img src=\"./assets/iconPost/icon_megaphone.svg\" class=\"ionPopOver\">\n    <ion-label>\n      <h6>Espace Publicité</h6>\n    </ion-label>\n  </ion-item>\n  <ion-item href=\"/login-erp\" detail=\"false\" style=\"--padding-start:0\">\n    <img src=\"./assets/iconPost/icon_erp.svg\" class=\"ionPopOver\">\n    <ion-label>\n      <h6 id='erp'>ERP</h6>\n    </ion-label>\n  </ion-item>\n  <ion-item href=\"/parametre\" detail=\"false\" style=\"--padding-start:0\">\n    <img src=\"./assets/iconPost/icon_parametre.svg\" class=\"ionPopOver\">\n    <ion-label>\n      <h6>Paramètres</h6>\n    </ion-label>\n  </ion-item>\n  <ion-item (click)=\"logout()\" detail=\"false\" style=\"--padding-start:0\">\n    <img src=\"./assets/iconPost/deconnexion.png\" class=\"ionPopOver\">\n    <ion-label>\n      <h6 class=\"disconnect\">Déconnexion</h6>\n    </ion-label>\n  </ion-item>\n</ion-list>\n</div>\n\n\n<div  *ngIf=\"follower===true\" >\n\n  <ion-list style=\" height: 100px;width:190px\" >\n    <ion-item style=\"--padding-start:0\" [routerLinkActive]=\"'active'\" routerLink=\"/chat/{{IdprofilePassed}}\" detail=\"false\">\n      <ion-icon name=\"send-outline\" class=\"ionPopOver\"></ion-icon>\n      <ion-label>\n        <h6>Envoyer un message</h6>\n      </ion-label>\n    </ion-item>\n\n\n\n    <ion-item style=\"--padding-start:0\" (click)=\"desabonner()\">\n      <ion-icon name=\"person-remove-outline\" class=\"ionPopOver\"></ion-icon>\n      <ion-label>\n        <h6>Se désabonner</h6>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n  </div>\n");

/***/ }),

/***/ 71810:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/coachprofile/palmares-pop-over/palmares-pop-over.component.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-grid class=\"upper\">\n    <ion-row>\n      <ion-col size=\"3\">\n        <h5 class=\"details\">2k</h5>\n      </ion-col>\n      <ion-col size=\"9\">\n        <h5 class=\"details\">Abonnees</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <h5 class=\"details\">500</h5>\n      </ion-col>\n      <ion-col size=\"9\">\n        <h5 class=\"details\">Abonnements</h5>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"lower\">\n    <ion-row class=\"ion-justify-content-center\" (click)=\"palamares()\">\n      <h4> Palmarés </h4>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <h5 class=\"title\"> Coach Sportif </h5>\n      <ion-row>\n        <a>en savoir plus</a>\n      </ion-row>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>");

/***/ }),

/***/ 40984:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/erp/top-menu/top-menu.component.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (" \n\n  <ion-content   >\n \n    <img src=\"assets/imgs/menuTail.png\" class=\"tail\"/>\n    <ul class=\"itemList\">\n      <li class=\"itemLi\"> <ion-item class=\"roundedInput\">\n        <ion-icon name=\"search\" slot=\"start\"></ion-icon>\n   \n        <ion-input style=\"height:20px\"></ion-input>\n        \n      </ion-item></li>\n     \n      <li  class=\"itemLi\"><ion-icon name=\"person-add\" style=\"margin-right: 10px;\"></ion-icon><a href=\"/erp-space\" ><b  class=\"itemText\">Gestion d'espace</b></a>  </li>\n      <li class=\"itemLi\"><ion-icon name=\"stats-chart\" style=\"margin-right: 10px;\"></ion-icon><a href=\"/gestion-effectif\"> <b class=\"itemText\">Gestion des resources humaines</b></a></li>\n      <li class=\"itemLi\"><ion-icon name=\"stats-chart\" style=\"margin-right: 10px;\"></ion-icon><a href=\"/gestion-adherent\"> <b class=\"itemText\">Gestion d'adherents </b></a></li>\n    <li class=\"itemLi\"><ion-icon name=\"stats-chart\" style=\"margin-right: 10px;\"></ion-icon><a href=\"/gestion-material\"><b class=\"itemText\">Gestion d'matériel</b> </a> </li>\n      <li class=\"itemLi\" ><ion-icon   name=\"flag\" style=\"margin-right: 10px;\"></ion-icon><a href=\"/planning\"><b class=\"itemText\">Planning</b></a></li>\n      <li class=\"itemLi\"><ion-icon name=\"time\" style=\"margin-right: 10px;\"></ion-icon><a href=\"/historiqueerp\"><b class=\"itemText\">Historique</b></a></li>\n    </ul>\n \n  </ion-content>\n  <ion-footer>\n  </ion-footer>\n  \n  \n\n");

/***/ }),

/***/ 21002:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/shared.component.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<p>\n  shared works!\n</p>\n");

/***/ }),

/***/ 77020:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map