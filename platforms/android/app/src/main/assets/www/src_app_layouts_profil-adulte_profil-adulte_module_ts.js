(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_profil-adulte_profil-adulte_module_ts"],{

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

/***/ 20885:
/*!***********************************************************************!*\
  !*** ./src/app/layouts/profil-adulte/profil-adulte-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilAdultePageRoutingModule": () => (/* binding */ ProfilAdultePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profil_adulte_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil-adulte.page */ 28822);




const routes = [
    {
        path: '',
        component: _profil_adulte_page__WEBPACK_IMPORTED_MODULE_0__.ProfilAdultePage
    }
];
let ProfilAdultePageRoutingModule = class ProfilAdultePageRoutingModule {
};
ProfilAdultePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilAdultePageRoutingModule);



/***/ }),

/***/ 91285:
/*!***************************************************************!*\
  !*** ./src/app/layouts/profil-adulte/profil-adulte.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilAdultePageModule": () => (/* binding */ ProfilAdultePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profil_adulte_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil-adulte-routing.module */ 20885);
/* harmony import */ var _layouts_profil_pop_over_suivre_page_pop_over_suivre_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/profil/pop-over-suivre-page/pop-over-suivre-page.component */ 19701);
/* harmony import */ var _profil_adulte_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profil-adulte.page */ 28822);








let ProfilAdultePageModule = class ProfilAdultePageModule {
};
ProfilAdultePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profil_adulte_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilAdultePageRoutingModule
        ],
        declarations: [_profil_adulte_page__WEBPACK_IMPORTED_MODULE_2__.ProfilAdultePage, _layouts_profil_pop_over_suivre_page_pop_over_suivre_page_component__WEBPACK_IMPORTED_MODULE_1__.PopOverSuivrePageComponent]
    })
], ProfilAdultePageModule);



/***/ }),

/***/ 28822:
/*!*************************************************************!*\
  !*** ./src/app/layouts/profil-adulte/profil-adulte.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilAdultePage": () => (/* binding */ ProfilAdultePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profil_adulte_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profil-adulte.page.html */ 17444);
/* harmony import */ var _profil_adulte_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil-adulte.page.scss */ 14418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_Shared_kids_Service_postKids_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/kids/Service/postKids.service */ 35568);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_Model_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Model/User */ 89040);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _kids_popovercomponent_popovercomponent_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kids/popovercomponent/popovercomponent.page */ 33906);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var _profil_pop_over_suivre_page_pop_over_suivre_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profil/pop-over-suivre-page/pop-over-suivre-page.component */ 19701);











let ProfilAdultePage = class ProfilAdultePage {
    constructor(userservice, postKidsService, popoverController, userService, activatedRoute) {
        this.userservice = userservice;
        this.postKidsService = postKidsService;
        this.popoverController = popoverController;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.posts = [];
        this.update = false;
        this.user = new src_app_Shared_Model_User__WEBPACK_IMPORTED_MODULE_3__.User();
        this.checkSelf = false;
    }
    ngOnInit() {
        this.selected = 'photo';
        this.getMe();
        this.getMyPostsKids();
        this.title = "Profile";
        this.idprofilePassed = this.activatedRoute.snapshot.params.id;
        this.getUserByid();
    }
    getUserByid() {
        this.userService.getUser(this.idprofilePassed).subscribe((response) => {
            console.log('user clicked' + response.data.data);
            this.user = response.data.data;
            // this.profileClickedName = response.data.data.name;
        }, (error) => {
            console.error(error);
        });
    }
    getMe() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.userservice.getMe().subscribe((res) => {
                //  this.user = res.data.data;
                if (this.idprofilePassed == res.data.data._id) {
                    this.checkSelf = true;
                    console.log('nafsoussssssss');
                }
            });
        });
    }
    getMyPostsKids() {
        this.userservice.getMe().subscribe((res) => {
            this.user_id = res.data.data._id;
            console.log(this.user_id);
            this.postKidsService.getMyPostsKids(this.user_id).subscribe((res1) => {
                this.posts = res1['data'];
                console.log(this.posts);
            });
        });
    }
    presentPopover(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _kids_popovercomponent_popovercomponent_page__WEBPACK_IMPORTED_MODULE_4__.PopovercomponentPage,
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
        console.log('Segment changed', ev.detail.value);
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
    presentPopoverNewMsg(ev, idprofilePassed) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _profil_pop_over_suivre_page_pop_over_suivre_page_component__WEBPACK_IMPORTED_MODULE_6__.PopOverSuivrePageComponent,
                // cssClass: 'popoverProfil-custom-class',
                event: ev,
                componentProps: { idpassed: idprofilePassed },
                translucent: true
            });
            // console.log(idprofilePassed)
            popover.style.cssText = '--max-width: 150px;--max-height: 100px;--border-radius:70px; ';
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
        });
    }
    userUpdate() {
        this.userService.updateMe(this.user).subscribe(res => {
            console.log(res);
        });
        this.update = false;
    }
};
ProfilAdultePage.ctorParameters = () => [
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_Shared_kids_Service_postKids_service__WEBPACK_IMPORTED_MODULE_2__.PostKidsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute }
];
ProfilAdultePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-profil-adulte',
        template: _raw_loader_profil_adulte_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profil_adulte_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilAdultePage);



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

/***/ 14418:
/*!***************************************************************!*\
  !*** ./src/app/layouts/profil-adulte/profil-adulte.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@import url(\"https://fonts.googleapis.com/css2?family=MonteCarlo&display=swap\");\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\n.parent {\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.image1 {\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.image2 {\n  width: 80px;\n  position: absolute;\n  bottom: 1px;\n  left: 14px;\n}\nion-segment-button {\n  border-radius: 15px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 5px 4px 4px;\n  height: 38px;\n  color: #858484;\n  --background-checked: #d8d6d6ab;\n  text-transform: none;\n  min-height: unset;\n  --indicator-color:none;\n  min-width: 80px;\n}\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n.myFooter {\n  background-color: #f8f5f5;\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #cecece;\n  justify-content: center;\n  width: 96%;\n  margin-left: 2%;\n  margin-right: 2%;\n  margin-bottom: 5px;\n}\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\nion-slides {\n  height: 100%;\n}\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\nion-toolbar {\n  --background: linear-gradient(135deg,#247238, #247238, #8EBF25,#8EBF25);\n}\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n.clear {\n  clear: both;\n}\n.slide-toggle {\n  display: none;\n}\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n/*Bar Style*/\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n/*Animations*/\n.slidemenu label, .slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n/*Toggle*/\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n.ZoneShare {\n  height: 25px;\n  background: #e4e3e3;\n  border-radius: 23px;\n}\n.swiper-slide:not(.swiper-slide-active) > div {\n  display: none;\n}\nion-slide {\n  width: 4rem !important;\n  margin-right: -2px !important;\n}\n.img-wrapper {\n  min-height: 200px;\n  width: 103%;\n  background-repeat: no-repeat;\n  border-radius: 15px;\n}\n.centered {\n  position: fixed;\n  top: 35%;\n  left: 5px;\n}\n.myImageUser {\n  border-radius: 15px;\n  width: 50px;\n  height: 50px;\n}\nh1 {\n  font-size: 14px;\n  font-weight: 400;\n  margin: 10px 0 0 0;\n  color: #888888;\n}\na {\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 10px;\n  display: inline-block;\n  text-decoration: none;\n  color: #008A68;\n}\nsvg {\n  cursor: pointer;\n  overflow: visible;\n  width: 60px;\n}\nsvg #heart {\n  transform-origin: center;\n  animation: animateHeartOut 0.3s linear forwards;\n}\nsvg #main-circ {\n  transform-origin: 29.5px 29.5px;\n}\n#checkbox {\n  display: none;\n}\n#checkbox:checked + label svg #heart {\n  transform: scale(0.2);\n  fill: #E2264D;\n  animation: animateHeart 0.3s linear forwards 0.25s;\n}\n#checkbox:checked + label svg #main-circ {\n  transition: all 2s;\n  animation: animateCircle 0.3s linear forwards;\n  opacity: 1;\n}\n#checkbox:checked + label svg #grp1 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp1 #oval1 {\n  transform: scale(0) translate(0, -30px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp1 #oval2 {\n  transform: scale(0) translate(10px, -50px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp2 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp2 #oval1 {\n  transform: scale(0) translate(30px, -15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp2 #oval2 {\n  transform: scale(0) translate(60px, -15px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp3 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp3 #oval1 {\n  transform: scale(0) translate(30px, 0px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp3 #oval2 {\n  transform: scale(0) translate(60px, 10px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp4 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp4 #oval1 {\n  transform: scale(0) translate(30px, 15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp4 #oval2 {\n  transform: scale(0) translate(40px, 50px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp5 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp5 #oval1 {\n  transform: scale(0) translate(-10px, 20px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp5 #oval2 {\n  transform: scale(0) translate(-60px, 30px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp6 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp6 #oval1 {\n  transform: scale(0) translate(-30px, 0px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp6 #oval2 {\n  transform: scale(0) translate(-60px, -5px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp7 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp7 #oval1 {\n  transform: scale(0) translate(-30px, -15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp7 #oval2 {\n  transform: scale(0) translate(-55px, -30px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp2 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp3 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp4 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp5 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp6 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp7 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n@keyframes animateCircle {\n  40% {\n    transform: scale(10);\n    opacity: 1;\n    fill: #DD4688;\n  }\n  55% {\n    transform: scale(11);\n    opacity: 1;\n    fill: #D46ABF;\n  }\n  65% {\n    transform: scale(12);\n    opacity: 1;\n    fill: #CC8EF5;\n  }\n  75% {\n    transform: scale(13);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0.5;\n  }\n  85% {\n    transform: scale(17);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0.2;\n  }\n  95% {\n    transform: scale(18);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0.1;\n  }\n  100% {\n    transform: scale(19);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0;\n  }\n}\n@keyframes animateHeart {\n  0% {\n    transform: scale(0.2);\n  }\n  40% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes animateHeartOut {\n  0% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.imgUser {\n  height: 5% !important;\n}\n.mylabelabonnement {\n  white-space: nowrap;\n  font-family: cursive;\n  font-weight: bold;\n  color: darkgreen;\n}\n.shape {\n  border-style: solid;\n  border-width: 0 70px 40px 0;\n  float: right;\n  height: 0px;\n  width: 0px;\n  /* IE 9 */\n  /* Opera 10.5 */\n  /* Safari and Chrome */\n  transform: rotate(360deg);\n}\n.offer {\n  background: #fff;\n  border: 1px solid #ddd;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n  margin: 15px 0;\n  overflow: hidden;\n}\n.offer-radius {\n  border-radius: 7px;\n}\n.offer-danger {\n  border-color: #d9534f;\n}\n.offer-danger .shape {\n  border-color: transparent #d9534f transparent transparent;\n  border-color: rgba(255, 255, 255, 0) #d9534f rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);\n}\n.offer-warning {\n  border-color: #f0ad4e;\n}\n.offer-warning .shape {\n  border-color: transparent #f0ad4e transparent transparent;\n  border-color: rgba(255, 255, 255, 0) #f0ad4e rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);\n}\n.shape-text {\n  color: #fff;\n  font-size: 12px;\n  font-weight: bold;\n  position: relative;\n  right: -40px;\n  top: 2px;\n  white-space: nowrap;\n  /* IE 9 */\n  /* Opera 10.5 */\n  /* Safari and Chrome */\n  transform: rotate(30deg);\n}\n.offer-content {\n  padding: 0 20px 10px;\n}\n.mylabelsegment {\n  font-family: cursive;\n  font-weight: bold;\n  color: #8a8b8a;\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\nion-col.my-thin-col {\n  padding: 0;\n  margin-left: 6px;\n  width: calc(calc(6 / var(--ion-grid-columns, 12.5)) * 100%);\n  max-width: calc(calc(6 / var(--ion-grid-columns, 12.5)) * 100%);\n}\n.stylecards {\n  box-shadow: rgba(0, 0, 0, 0.08) -2px 3px 6px;\n  border-radius: 10px;\n}\n.labelnblikes {\n  font-size: smaller;\n}\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n.content-profil {\n  padding: 0 10px;\n}\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #cecece;\n  justify-content: center;\n  width: 96%;\n  margin-left: 2%;\n  margin-right: 2%;\n  margin-bottom: 5px;\n}\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\nion-slides {\n  height: 100%;\n}\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\nion-toolbar {\n  --background: linear-gradient(135deg,#247238, #247238, #8EBF25,#8EBF25);\n}\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n.clear {\n  clear: both;\n}\n.slide-toggle {\n  display: none;\n}\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n/*Bar Style*/\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n/*Animations*/\n.slidemenu label, .slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n/*Toggle*/\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n.ZoneShare {\n  height: 25px;\n  background: #e4e3e3;\n  border-radius: 23px;\n}\n.swiper-slide:not(.swiper-slide-active) > div {\n  display: none;\n}\nion-slide {\n  width: 4rem !important;\n  margin-right: -2px !important;\n}\n.img-wrapper {\n  min-height: 200px;\n  width: 103%;\n  background-repeat: no-repeat;\n  border-radius: 15px;\n}\n.centered {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n.myImageUser {\n  border-radius: 15px;\n  width: 30px;\n  height: 30px;\n}\nh1 {\n  font-size: 14px;\n  font-weight: 400;\n  margin: 10px 0 0 0;\n  color: #888888;\n}\na {\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 10px;\n  display: inline-block;\n  text-decoration: none;\n  color: #008A68;\n}\nsvg {\n  cursor: pointer;\n  overflow: visible;\n  width: 60px;\n}\nsvg #heart {\n  transform-origin: center;\n  animation: animateHeartOut 0.3s linear forwards;\n}\nsvg #main-circ {\n  transform-origin: 29.5px 29.5px;\n}\n#checkbox {\n  display: none;\n}\n#checkbox:checked + label svg #heart {\n  transform: scale(0.2);\n  fill: #E2264D;\n  animation: animateHeart 0.3s linear forwards 0.25s;\n}\n#checkbox:checked + label svg #main-circ {\n  transition: all 2s;\n  animation: animateCircle 0.3s linear forwards;\n  opacity: 1;\n}\n#checkbox:checked + label svg #grp1 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp1 #oval1 {\n  transform: scale(0) translate(0, -30px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp1 #oval2 {\n  transform: scale(0) translate(10px, -50px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp2 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp2 #oval1 {\n  transform: scale(0) translate(30px, -15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp2 #oval2 {\n  transform: scale(0) translate(60px, -15px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp3 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp3 #oval1 {\n  transform: scale(0) translate(30px, 0px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp3 #oval2 {\n  transform: scale(0) translate(60px, 10px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp4 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp4 #oval1 {\n  transform: scale(0) translate(30px, 15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp4 #oval2 {\n  transform: scale(0) translate(40px, 50px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp5 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp5 #oval1 {\n  transform: scale(0) translate(-10px, 20px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp5 #oval2 {\n  transform: scale(0) translate(-60px, 30px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp6 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp6 #oval1 {\n  transform: scale(0) translate(-30px, 0px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp6 #oval2 {\n  transform: scale(0) translate(-60px, -5px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp7 {\n  opacity: 1;\n  transition: 0.1s all 0.3s;\n}\n#checkbox:checked + label svg #grp7 #oval1 {\n  transform: scale(0) translate(-30px, -15px);\n  transform-origin: 0 0 0;\n  transition: 0.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp7 #oval2 {\n  transform: scale(0) translate(-55px, -30px);\n  transform-origin: 0 0 0;\n  transition: 1.5s transform 0.3s;\n}\n#checkbox:checked + label svg #grp2 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp3 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp4 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp5 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp6 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n#checkbox:checked + label svg #grp7 {\n  opacity: 1;\n  transition: 0.1s opacity 0.3s;\n}\n@keyframes animateCircle {\n  40% {\n    transform: scale(10);\n    opacity: 1;\n    fill: #DD4688;\n  }\n  55% {\n    transform: scale(11);\n    opacity: 1;\n    fill: #D46ABF;\n  }\n  65% {\n    transform: scale(12);\n    opacity: 1;\n    fill: #CC8EF5;\n  }\n  75% {\n    transform: scale(13);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0.5;\n  }\n  85% {\n    transform: scale(17);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0.2;\n  }\n  95% {\n    transform: scale(18);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0.1;\n  }\n  100% {\n    transform: scale(19);\n    opacity: 1;\n    fill: transparent;\n    stroke: #CC8EF5;\n    stroke-width: 0;\n  }\n}\n@keyframes animateHeart {\n  0% {\n    transform: scale(0.2);\n  }\n  40% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes animateHeartOut {\n  0% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbC1hZHVsdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLCtFQUFBO0FBRVI7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFDSjtBQUNFO0VBQ0UscUJBQUE7QUFFSjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNGO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBRUY7QUFDQTtFQUVFLFdBQUE7RUFFQSxrQkFBQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBQUo7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0UsK0JBQUE7RUFDRixvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFLRTtFQUNFLGFBQUE7RUFJQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFMSjtBQWdCSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFiTjtBQWVJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFiTjtBQWVJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBYk47QUFnQkU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWJKO0FBZUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBWko7QUFjRTtFQUNFLFlBQUE7QUFYSjtBQWFFO0VBQ0UsVUFBQTtBQVZKO0FBV0k7RUFDRSxtQkFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFB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TDtBQUNGIiwiZmlsZSI6InByb2ZpbC1hZHVsdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udGVDYXJsbyZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICAjY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogIzhjOGM4YztcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG5cclxuLnBhcmVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5pbWFnZTEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcbn1cclxuLmltYWdlMiB7XHJcblxyXG4gIHdpZHRoOiA4MHB4O1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDFweDtcclxuICAgIGxlZnQ6IDE0cHg7XHJcbn1cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCByZ2IoMCAwIDAgLyA0MyUpO1xyXG4gIG1hcmdpbjogNXB4IDRweCA0cHg7XHJcbiAgaGVpZ2h0OiAzOHB4O1xyXG4gIGNvbG9yOiAjODU4NDg0O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNkOGQ2ZDZhYjtcclxuICB0ZXh0LXRyYW5zZm9ybTpub25lO1xyXG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xyXG4gIC0taW5kaWNhdG9yLWNvbG9yOm5vbmU7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4gICNjb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IERhcmtHcmVlbjsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyNDcyMzgsICMyNDcyMzgsICAjOEVCRjI1LCM4RUJGMjUpO1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgLy8gY3NzIGJ1dHRvblxyXG4gICRydWxlcjogMTZweDtcclxuICAkY29sb3ItcmVkOiAjNzI2YjZiO1xyXG4gICRjb2xvci1iZzogI0VCRUNGMDtcclxuICAkY29sb3Itc2hhZG93OiAjQkFCRUNDO1xyXG4gICRjb2xvci13aGl0ZTogI0ZGRjtcclxuXHJcblxyXG4gIC5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMzYlO1xyXG4gICAgICBmb250LXNpemU6IDIuMGVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEuMGVtO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTIlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5teUZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY1ZjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCAxcHggI2NlY2VjZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5teWdhbGxlcnl7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1mbGV4O1xyXG4gIH1cclxuICBpb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbntcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyNDcyMzg7XHJcbiAgICAgICAgd2lkdGg6IDEwcHggO1xyXG4gICAgICAgIGhlaWdodDogMTBweCA7XHJcbiAgICAgICAgb3BhY2l0eTogNS4yO1xyXG4gIH1cclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyNDcyMzgsICMyNDcyMzgsICAjOEVCRjI1LCM4RUJGMjUpO1xyXG5cclxufVxyXG5cclxuLnNoYWRvd2JveCB7XHJcbiAvLyBib3JkZXI6IDFweCBzb2xpZCAjOEVCRjI1O1xyXG4gLy8gYm94LXNoYWRvdzogMnB4IDFweCAxcHggIzI0NzIzODtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmLCAjZGRkIDQwJSwgI2NjYyk7XHJcbn1cclxuXHJcblxyXG4vL1xyXG5cclxuXHJcblxyXG4vLyAuY2xlYXJ7XHJcbi8vICAgY2xlYXI6IGJvdGg7XHJcbi8vIH1cclxuXHJcblxyXG4vLyAuc2xpZGUtdG9nZ2xle1xyXG4vLyAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vIC5zbGlkZW1lbnV7XHJcbi8vICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4vLyAgIG1heC13aWR0aDogMTAwJTtcclxuLy8gICBtYXJnaW46IDUwcHggYXV0bztcclxuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyB9XHJcblxyXG4vLyAuc2xpZGVtZW51IGxhYmVse1xyXG4vLyAgIHdpZHRoOiAyNSU7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgIGNvbG9yOiAjMzMzO1xyXG4vLyAgIG9wYWNpdHk6IDAuMjtcclxuXHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbi8vIC5zbGlkZW1lbnUgbGFiZWwgLmljb257XHJcbi8vICAgZm9udC1zaXplOiAyMHB4O1xyXG4vLyAgIGJvcmRlcjogc29saWQgMnB4ICMzMzM7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGhlaWdodDogNTBweDtcclxuLy8gICB3aWR0aDogNTBweDtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBtYXJnaW46IDAgYXV0bztcclxuLy8gICBsaW5lLWhlaWdodDogNTBweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vIH1cclxuXHJcbi8vIC8qQmFyIFN0eWxlKi9cclxuXHJcblxyXG5cclxuLy8gLnNsaWRlciAuYmFye1xyXG4vLyAgIHdpZHRoOiA1MCU7XHJcbi8vICAgaGVpZ2h0OiA1cHg7XHJcbi8vICAgYmFja2dyb3VuZDogcmdiKDEsIDY4LCAzNyk7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAvKkFuaW1hdGlvbnMqL1xyXG4vLyAuc2xpZGVtZW51IGxhYmVsLCAuc2xpZGVyIC5iYXIge1xyXG4vLyAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcclxuLy8gICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcclxuLy8gICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcclxuLy8gfVxyXG5cclxuLy8gLypUb2dnbGUqL1xyXG5cclxuLy8gLnNsaWRlbWVudSAuc2xpZGUtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbHtcclxuLy8gICBvcGFjaXR5OiAxO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMDsgfVxyXG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDMwJTsgfVxyXG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTM6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDUwJTsgfVxyXG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTQ6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDc1JTsgfVxyXG5cclxuXHJcblxyXG4vLyBuYXYge1xyXG4vLyAgIG1heC13aWR0aDoxMDAlO1xyXG4vLyAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgI2ZmZmZmZiAyNSUsICNmZmZmZmYgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xyXG4vLyAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyAgIHBhZGRpbmc6IDEwcHggMDtcclxuLy8gfVxyXG5cclxuLy8gbmF2IHVsIHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMjUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbi8vIH1cclxuXHJcbi8vIG5hdiB1bCBsaSB7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyB9XHJcblxyXG4vLyBuYXYgdWwgbGkgYSB7XHJcbi8vICAgcGFkZGluZzoxMHB4O1xyXG4vLyAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xyXG4vLyAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuLy8gICBjb2xvcjogYmxhY2s7XHJcbi8vICAgZm9udC1zaXplOiAxMHB4O1xyXG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gfVxyXG5cclxuLy8gbmF2IHVsIGxpIGE6aG92ZXIge1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgaW5zZXQgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbi8vICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4vLyAgIGNvbG9yOiAjOEVCRjI1O1xyXG4vLyB9XHJcblxyXG5cclxuLmNsZWFye1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5cclxuLnNsaWRlLXRvZ2dsZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2xpZGVtZW51e1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggMjBweCAyMHB4IGF1dG87XHJcbiAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uc2xpZGVtZW51IGxhYmVse1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBvcGFjaXR5OiAwLjI7XHJcblxyXG59XHJcbi5zbGlkZW1lbnUgbGFiZWw6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG4uc2xpZGVtZW51IGxhYmVsIHNwYW57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogIzI0NzIzODtcclxufVxyXG4uc2xpZGVtZW51IGxhYmVsIC5pY29ue1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBib3JkZXI6IHNvbGlkIDJweCAjMjQ3MjM4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi8qQmFyIFN0eWxlKi9cclxuLnNsaWRlcntcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLnNsaWRlciAuYmFye1xyXG4gIHdpZHRoOjUwJTtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLypBbmltYXRpb25zKi9cclxuLnNsaWRlbWVudSBsYWJlbCwgLnNsaWRlciAuYmFyIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLypUb2dnbGUqL1xyXG5cclxuLnNsaWRlbWVudSAuc2xpZGUtdG9nZ2xlOmNoZWNrZWQgKyBsYWJlbHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMDsgfVxyXG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDI1JTsgfVxyXG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTM6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDUwJTsgfVxyXG4uSGVhZGVyRmlsdGVye1xyXG4gIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG4gICAvLyBoZWlnaHQ6IDUlO1xyXG59XHJcbi5CYWR5RmlsdGVye1xyXG5cclxufVxyXG4gI2NhcnQtYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gfVxyXG4gLm91dHRlci1iYWRnZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAvL2JhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICB9XHJcbiAgLmlubmVyLWJhZGdlLU9LIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgbGVmdDogLTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmlubmVyLWJhZGdlLU9LIC5iYWRnZUNhbmNlbHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAuaW5uZXItYmFkZ2UtS08ge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogLTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmlubmVyLWJhZGdlLUtPIC5iYWRnZUNhbmNlbHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG5cclxuICB9XHJcbiAgLmlubmVyLWJhZGdlLVRjaGF0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMjNweDtcclxuICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbm5lci1iYWRnZS1UY2hhdCAuYmFkZ2VDYW5jZWx7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbi8vIHVsIHtcclxuLy8gICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbi8vICAgd2lkdGg6IDUwMHB4O1xyXG4vLyB9XHJcblxyXG4vLyBoMyB7XHJcbi8vICAgZm9udDogYm9sZCAyMHB4LzEuNSBIZWx2ZXRpY2EsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbi8vIH1cclxuXHJcbi8vIGxpIGltZyB7XHJcbi8vICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgbWFyZ2luOiAwIDE1cHggMCAwO1xyXG4vLyB9XHJcblxyXG4vLyBsaSBwIHtcclxuLy8gICBmb250OiAyMDAgMTJweC8xLjUgR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcclxuLy8gfVxyXG5cclxuLy8gbGkge1xyXG4vLyAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgb3ZlcmZsb3c6IGF1dG87XHJcbi8vIH1cclxuXHJcbi8vIGxpOmhvdmVyIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLmltYWdlcyB7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgfVxyXG5cclxuLy8gICAuaW1hZ2VzIC5Vc2VyUG9zdGVkIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHdpZHRoOiA0MCU7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICB0b3A6MTBweDtcclxuLy8gICAgIGxlZnQ6IDA7XHJcbi8vICAgfVxyXG4uWm9uZVNoYXJle1xyXG4gICAvLyBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U0ZTNlMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHg7XHJcbn1cclxuLnN3aXBlci1zbGlkZTpub3QoLnN3aXBlci1zbGlkZS1hY3RpdmUpID4gZGl2IHtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuaW9uLXNsaWRlIHtcclxuICB3aWR0aDogNHJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogLTJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW1nLXdyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAzJTtcclxuICAgIC8vYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgLy9ib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCAxcHggIzI0NzIzODtcclxuICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiKDIxOSwgMjE1LCAyMTUpLCByZ2IoMjE5LCAyMTUsIDIxNSk0MCUsIHJnYigyMTksIDIxNSwgMjE1KSk7XHJcbn1cclxuLmNlbnRlcmVkIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzNSU7XHJcbiAgbGVmdDogNXB4O1xyXG59XHJcbi5teUltYWdlVXNlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbmgxe2ZvbnQtc2l6ZToxNHB4OyBmb250LXdlaWdodDo0MDA7IG1hcmdpbjoxMHB4IDAgMCAwOyBjb2xvcjojODg4ODg4O31cclxuYXtmb250LXNpemU6MTJweDsgZm9udC13ZWlnaHQ6Ym9sZDsgbWFyZ2luLXRvcDoxMHB4OyBkaXNwbGF5OmlubGluZS1ibG9jazsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7IGNvbG9yOiMwMDhBNjg7fVxyXG5zdmd7XHJcbiAgY3Vyc29yOnBvaW50ZXI7IG92ZXJmbG93OnZpc2libGU7IHdpZHRoOjYwcHg7XHJcbiAgI2hlYXJ0e3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyOyBhbmltYXRpb246YW5pbWF0ZUhlYXJ0T3V0IC4zcyBsaW5lYXIgZm9yd2FyZHM7fVxyXG4gICNtYWluLWNpcmN7dHJhbnNmb3JtLW9yaWdpbjoyOS41cHggMjkuNXB4O31cclxufVxyXG4jY2hlY2tib3h7ZGlzcGxheTpub25lO31cclxuI2NoZWNrYm94OmNoZWNrZWQgKyBsYWJlbCBzdmd7XHJcbiAgICAjaGVhcnR7dHJhbnNmb3JtOnNjYWxlKC4yKTsgZmlsbDojRTIyNjREOyBhbmltYXRpb246YW5pbWF0ZUhlYXJ0IC4zcyBsaW5lYXIgZm9yd2FyZHMgLjI1czt9XHJcbiAgICAjbWFpbi1jaXJje3RyYW5zaXRpb246YWxsIDJzOyBhbmltYXRpb246YW5pbWF0ZUNpcmNsZSAuM3MgbGluZWFyIGZvcndhcmRzOyBvcGFjaXR5OjE7fVxyXG4gICAgI2dycDF7XHJcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcclxuICAgICAgI292YWwxe1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoMCwgLTMwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjouNXMgdHJhbnNmb3JtIC4zczt9XHJcbiAgICAgICNvdmFsMntcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKDEwcHgsIC01MHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246MS41cyB0cmFuc2Zvcm0gLjNzO31cclxuICAgIH1cclxuICAgICNncnAye1xyXG4gICAgICBvcGFjaXR5OjE7IHRyYW5zaXRpb246LjFzIGFsbCAuM3M7XHJcbiAgICAgICNvdmFsMXtcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKDMwcHgsIC0xNXB4KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246LjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgICAjb3ZhbDJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSg2MHB4LCAtMTVweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOjEuNXMgdHJhbnNmb3JtIC4zczt9XHJcbiAgICB9XHJcbiAgICAjZ3JwM3tcclxuICAgICAgb3BhY2l0eToxOyB0cmFuc2l0aW9uOi4xcyBhbGwgLjNzO1xyXG4gICAgICAjb3ZhbDF7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgzMHB4LCAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjouNXMgdHJhbnNmb3JtIC4zczt9XHJcbiAgICAgICNvdmFsMntcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKDYwcHgsIDEwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoxLjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgfVxyXG4gICAgI2dycDR7XHJcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcclxuICAgICAgI292YWwxe1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoMzBweCwgMTVweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOi41cyB0cmFuc2Zvcm0gLjNzO31cclxuICAgICAgI292YWwye1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoNDBweCwgNTBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOjEuNXMgdHJhbnNmb3JtIC4zczt9XHJcbiAgICB9XHJcbiAgICAjZ3JwNXtcclxuICAgICAgb3BhY2l0eToxOyB0cmFuc2l0aW9uOi4xcyBhbGwgLjNzO1xyXG4gICAgICAjb3ZhbDF7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgtMTBweCwgMjBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOi41cyB0cmFuc2Zvcm0gLjNzO31cclxuICAgICAgI292YWwye1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoLTYwcHgsIDMwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoxLjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgfVxyXG4gICAgI2dycDZ7XHJcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcclxuICAgICAgI292YWwxe1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoLTMwcHgsIDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOi41cyB0cmFuc2Zvcm0gLjNzO31cclxuICAgICAgI292YWwye1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoLTYwcHgsIC01cHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoxLjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgfVxyXG4gICAgI2dycDd7XHJcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcclxuICAgICAgI292YWwxe1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoLTMwcHgsIC0xNXB4KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246LjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgICAjb3ZhbDJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgtNTVweCwgLTMwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoxLjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgfVxyXG4gICAgI2dycDJ7b3BhY2l0eToxOyB0cmFuc2l0aW9uOi4xcyBvcGFjaXR5IC4zczt9XHJcbiAgICAjZ3JwM3tvcGFjaXR5OjE7IHRyYW5zaXRpb246LjFzIG9wYWNpdHkgLjNzO31cclxuICAgICNncnA0e29wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgb3BhY2l0eSAuM3M7fVxyXG4gICAgI2dycDV7b3BhY2l0eToxOyB0cmFuc2l0aW9uOi4xcyBvcGFjaXR5IC4zczt9XHJcbiAgICAjZ3JwNntvcGFjaXR5OjE7IHRyYW5zaXRpb246LjFzIG9wYWNpdHkgLjNzO31cclxuICAgICNncnA3e29wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgb3BhY2l0eSAuM3M7fVxyXG59XHJcbkBrZXlmcmFtZXMgYW5pbWF0ZUNpcmNsZXtcclxuICA0MCV7dHJhbnNmb3JtOnNjYWxlKDEwKTsgb3BhY2l0eToxOyBmaWxsOiNERDQ2ODg7fVxyXG4gIDU1JXt0cmFuc2Zvcm06c2NhbGUoMTEpOyBvcGFjaXR5OjE7IGZpbGw6I0Q0NkFCRjt9XHJcbiAgNjUle3RyYW5zZm9ybTpzY2FsZSgxMik7IG9wYWNpdHk6MTsgZmlsbDojQ0M4RUY1O31cclxuICA3NSV7dHJhbnNmb3JtOnNjYWxlKDEzKTsgb3BhY2l0eToxOyBmaWxsOnRyYW5zcGFyZW50OyBzdHJva2U6I0NDOEVGNTsgc3Ryb2tlLXdpZHRoOi41O31cclxuICA4NSV7dHJhbnNmb3JtOnNjYWxlKDE3KTsgb3BhY2l0eToxOyBmaWxsOnRyYW5zcGFyZW50OyBzdHJva2U6I0NDOEVGNTsgc3Ryb2tlLXdpZHRoOi4yO31cclxuICA5NSV7dHJhbnNmb3JtOnNjYWxlKDE4KTsgb3BhY2l0eToxOyBmaWxsOnRyYW5zcGFyZW50OyBzdHJva2U6I0NDOEVGNTsgc3Ryb2tlLXdpZHRoOi4xO31cclxuICAxMDAle3RyYW5zZm9ybTpzY2FsZSgxOSk7IG9wYWNpdHk6MTsgZmlsbDp0cmFuc3BhcmVudDsgc3Ryb2tlOiNDQzhFRjU7IHN0cm9rZS13aWR0aDowO31cclxufVxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVIZWFydHtcclxuICAwJXt0cmFuc2Zvcm06c2NhbGUoLjIpO31cclxuICA0MCV7dHJhbnNmb3JtOnNjYWxlKDEuMik7fVxyXG4gIDEwMCV7dHJhbnNmb3JtOnNjYWxlKDEpO31cclxufVxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVIZWFydE91dHtcclxuICAwJXt0cmFuc2Zvcm06c2NhbGUoMS40KTt9XHJcbiAgMTAwJXt0cmFuc2Zvcm06c2NhbGUoMSk7fVxyXG59XHJcbi5pbWdVc2VyXHJcbntcclxuaGVpZ2h0OiA1JSAhaW1wb3J0YW50O1xyXG59XHJcbi5teWxhYmVsYWJvbm5lbWVudHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgICB9XHJcbiAgICAuc2hhcGV7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDAgNzBweCA0MHB4IDA7XHJcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOyAvKiBJRSA5ICovXHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgIC8qIE9wZXJhIDEwLjUgKi9cclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgICAub2ZmZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgI2RkZDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLm9mZmVyLXJhZGl1c3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOjdweDtcclxuICAgIH1cclxuICAgIC5vZmZlci1kYW5nZXIge1x0Ym9yZGVyLWNvbG9yOiAjZDk1MzRmOyB9XHJcbiAgICAub2ZmZXItZGFuZ2VyIC5zaGFwZXtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNkOTUzNGYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDApICNkOTUzNGYgcmdiYSgyNTUsMjU1LDI1NSwwKSByZ2JhKDI1NSwyNTUsMjU1LDApO1xyXG4gICAgfVxyXG4gICAgLm9mZmVyLXdhcm5pbmcge1x0Ym9yZGVyLWNvbG9yOiAjZjBhZDRlOyB9XHJcbiAgICAub2ZmZXItd2FybmluZyAuc2hhcGV7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZjBhZDRlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwKSAjZjBhZDRlIHJnYmEoMjU1LDI1NSwyNTUsMCkgcmdiYSgyNTUsMjU1LDI1NSwwKTtcclxuICAgIH1cclxuICAgIC5zaGFwZS10ZXh0e1xyXG4gICAgICAgIGNvbG9yOiNmZmY7IGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgcmlnaHQ6LTQwcHg7XHJcbiAgICAgICAgdG9wOjJweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06cm90YXRlKDMwZGVnKTsgLyogSUUgOSAqL1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7ICAvKiBPcGVyYSAxMC41ICovXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDMwZGVnKTsgLyogU2FmYXJpIGFuZCBDaHJvbWUgKi9cclxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDMwZGVnKTtcclxuICAgIH1cclxuICAgIC5vZmZlci1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6MCAyMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAvLyAxMzM1XHJcblxyXG4gICAgLm15bGFiZWxzZWdtZW50e1xyXG4gICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTM4LCAxMzksIDEzOCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBpb24tY29sLm15LXRoaW4tY29sIHtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICB3aWR0aDogY2FsYyhjYWxjKDYgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMi41KSkgKiAxMDAlKTtcclxuICAgIG1heC13aWR0aDogY2FsYyhjYWxjKDYgLyB2YXIoLS1pb24tZ3JpZC1jb2x1bW5zLCAxMi41KSkgKiAxMDAlKTtcclxuICB9XHJcblxyXG4gIC5zdHlsZWNhcmRze1xyXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gOCUpIC0ycHggM3B4IDZweCA7Ym9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgLmxhYmVsbmJsaWtlc3tcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICB9XHJcbiAgI2NvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogRGFya0dyZWVuOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzI0NzIzOCwgIzI0NzIzOCwgICM4RUJGMjUsIzhFQkYyNSk7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICAvLyBjc3MgYnV0dG9uXHJcbiAgJHJ1bGVyOiAxNnB4O1xyXG4gICRjb2xvci1yZWQ6ICM3MjZiNmI7XHJcbiAgJGNvbG9yLWJnOiAjRUJFQ0YwO1xyXG4gICRjb2xvci1zaGFkb3c6ICNCQUJFQ0M7XHJcbiAgJGNvbG9yLXdoaXRlOiAjRkZGO1xyXG5cclxuXHJcbiAgLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzNiU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4wZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MiU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50LXByb2ZpbHtcclxuICAgIHBhZGRpbmc6MCAxMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5teUZvb3RlcntcclxuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlci8yO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMXB4IDFweCAjY2VjZWNlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLm15Z2FsbGVyeXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgfVxyXG4gIGlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICA6aG9zdCA6Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9ue1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogIzI0NzIzODtcclxuICAgICAgICB3aWR0aDogMTBweCA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4IDtcclxuICAgICAgICBvcGFjaXR5OiA1LjI7XHJcbiAgfVxyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzI0NzIzOCwgIzI0NzIzOCwgICM4RUJGMjUsIzhFQkYyNSk7XHJcblxyXG59XHJcblxyXG4uc2hhZG93Ym94IHtcclxuIC8vIGJvcmRlcjogMXB4IHNvbGlkICM4RUJGMjU7XHJcbiAvLyBib3gtc2hhZG93OiAycHggMXB4IDFweCAjMjQ3MjM4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYsICNkZGQgNDAlLCAjY2NjKTtcclxufVxyXG5cclxuXHJcbi8vXHJcblxyXG5cclxuXHJcbi8vIC5jbGVhcntcclxuLy8gICBjbGVhcjogYm90aDtcclxuLy8gfVxyXG5cclxuXHJcbi8vIC5zbGlkZS10b2dnbGV7XHJcbi8vICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gLnNsaWRlbWVudXtcclxuLy8gICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbi8vICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4vLyAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vIH1cclxuXHJcbi8vIC5zbGlkZW1lbnUgbGFiZWx7XHJcbi8vICAgd2lkdGg6IDI1JTtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgY29sb3I6ICMzMzM7XHJcbi8vICAgb3BhY2l0eTogMC4yO1xyXG5cclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuLy8gLnNsaWRlbWVudSBsYWJlbCAuaWNvbntcclxuLy8gICBmb250LXNpemU6IDIwcHg7XHJcbi8vICAgYm9yZGVyOiBzb2xpZCAycHggIzMzMztcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgIHdpZHRoOiA1MHB4O1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIG1hcmdpbjogMCBhdXRvO1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gfVxyXG5cclxuLy8gLypCYXIgU3R5bGUqL1xyXG5cclxuXHJcblxyXG4vLyAuc2xpZGVyIC5iYXJ7XHJcbi8vICAgd2lkdGg6IDUwJTtcclxuLy8gICBoZWlnaHQ6IDVweDtcclxuLy8gICBiYWNrZ3JvdW5kOiByZ2IoMSwgNjgsIDM3KTtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC8qQW5pbWF0aW9ucyovXHJcbi8vIC5zbGlkZW1lbnUgbGFiZWwsIC5zbGlkZXIgLmJhciB7XHJcbi8vICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xyXG4vLyAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xyXG4vLyAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xyXG4vLyB9XHJcblxyXG4vLyAvKlRvZ2dsZSovXHJcblxyXG4vLyAuc2xpZGVtZW51IC5zbGlkZS10b2dnbGU6Y2hlY2tlZCArIGxhYmVse1xyXG4vLyAgIG9wYWNpdHk6IDE7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0xOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAwOyB9XHJcbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMjpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMzAlOyB9XHJcbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMzpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNTAlOyB9XHJcbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tNDpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNzUlOyB9XHJcblxyXG5cclxuXHJcbi8vIG5hdiB7XHJcbi8vICAgbWF4LXdpZHRoOjEwMCU7XHJcbi8vICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCAjZmZmZmZmIDI1JSwgI2ZmZmZmZiA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XHJcbi8vICAgbWFyZ2luOiAwIGF1dG87XHJcbi8vICAgcGFkZGluZzogMTBweCAwO1xyXG4vLyB9XHJcblxyXG4vLyBuYXYgdWwge1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAyNSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XHJcbi8vICAgYm94LXNoYWRvdzogMCAwIDI1cHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuLy8gfVxyXG5cclxuLy8gbmF2IHVsIGxpIHtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vIH1cclxuXHJcbi8vIG5hdiB1bCBsaSBhIHtcclxuLy8gICBwYWRkaW5nOjEwcHg7XHJcbi8vICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XHJcbi8vICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4vLyAgIGNvbG9yOiBibGFjaztcclxuLy8gICBmb250LXNpemU6IDEwcHg7XHJcbi8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyB9XHJcblxyXG4vLyBuYXYgdWwgbGkgYTpob3ZlciB7XHJcbi8vICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBpbnNldCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuLy8gICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbi8vICAgY29sb3I6ICM4RUJGMjU7XHJcbi8vIH1cclxuXHJcblxyXG4uY2xlYXJ7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcblxyXG4uc2xpZGUtdG9nZ2xle1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zbGlkZW1lbnV7XHJcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDEwcHggMTBweCAyMHB4IDIwcHggYXV0bztcclxuIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zbGlkZW1lbnUgbGFiZWx7XHJcbiAgd2lkdGg6IDI1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIG9wYWNpdHk6IDAuMjtcclxuXHJcbn1cclxuXHJcbi5zbGlkZW1lbnUgbGFiZWw6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLnNsaWRlbWVudSBsYWJlbCBzcGFue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6ICMyNDcyMzg7XHJcbn1cclxuXHJcbi5zbGlkZW1lbnUgbGFiZWwgLmljb257XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGJvcmRlcjogc29saWQgMnB4ICMyNDcyMzg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8qQmFyIFN0eWxlKi9cclxuXHJcbi5zbGlkZXJ7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBoZWlnaHQ6IDVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uc2xpZGVyIC5iYXJ7XHJcbiAgd2lkdGg6NTAlO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuXHJcbi8qQW5pbWF0aW9ucyovXHJcbi5zbGlkZW1lbnUgbGFiZWwsIC5zbGlkZXIgLmJhciB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4vKlRvZ2dsZSovXHJcblxyXG4uc2xpZGVtZW51IC5zbGlkZS10b2dnbGU6Y2hlY2tlZCArIGxhYmVse1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcblxyXG5cclxuLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0xOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAwOyB9XHJcbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMjpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMjUlOyB9XHJcbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMzpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNTAlOyB9XHJcbi5IZWFkZXJGaWx0ZXJ7XHJcbiAgLy8gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XHJcbiAgIC8vIGhlaWdodDogNSU7XHJcblxyXG59XHJcbi5CYWR5RmlsdGVye1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4gI2NhcnQtYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gfVxyXG5cclxuIC5vdXR0ZXItYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgLy9iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgfVxyXG4gIC5pbm5lci1iYWRnZS1PSyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cclxuICB9XHJcbiAgLmlubmVyLWJhZGdlLU9LIC5iYWRnZUNhbmNlbHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcblxyXG4gIC5pbm5lci1iYWRnZS1LTyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaW5uZXItYmFkZ2UtS08gLmJhZGdlQ2FuY2Vse1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmlubmVyLWJhZGdlLVRjaGF0IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMjNweDtcclxuICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbm5lci1iYWRnZS1UY2hhdCAuYmFkZ2VDYW5jZWx7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyB1bCB7XHJcbi8vICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4vLyAgIHdpZHRoOiA1MDBweDtcclxuLy8gfVxyXG5cclxuLy8gaDMge1xyXG4vLyAgIGZvbnQ6IGJvbGQgMjBweC8xLjUgSGVsdmV0aWNhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4vLyB9XHJcblxyXG4vLyBsaSBpbWcge1xyXG4vLyAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgIG1hcmdpbjogMCAxNXB4IDAgMDtcclxuLy8gfVxyXG5cclxuLy8gbGkgcCB7XHJcbi8vICAgZm9udDogMjAwIDEycHgvMS41IEdlb3JnaWEsIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XHJcbi8vIH1cclxuXHJcbi8vIGxpIHtcclxuLy8gICBwYWRkaW5nOiAxMHB4O1xyXG4vLyAgIG92ZXJmbG93OiBhdXRvO1xyXG4vLyB9XHJcblxyXG4vLyBsaTpob3ZlciB7XHJcbi8vICAgYmFja2dyb3VuZDogI2VlZTtcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5pbWFnZXMge1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLmltYWdlcyAuVXNlclBvc3RlZCB7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB3aWR0aDogNDAlO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgdG9wOjEwcHg7XHJcbi8vICAgICBsZWZ0OiAwO1xyXG4vLyAgIH1cclxuXHJcbi5ab25lU2hhcmV7XHJcbiAgIC8vIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTRlM2UzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxufVxyXG4uc3dpcGVyLXNsaWRlOm5vdCguc3dpcGVyLXNsaWRlLWFjdGl2ZSkgPiBkaXYge1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG5pb24tc2xpZGUge1xyXG4gIHdpZHRoOiA0cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbWctd3JhcHBlciB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDMlO1xyXG4gICAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAvL2JveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMXB4IDFweCAjMjQ3MjM4O1xyXG4gICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2IoMjE5LCAyMTUsIDIxNSksIHJnYigyMTksIDIxNSwgMjE1KTQwJSwgcmdiKDIxOSwgMjE1LCAyMTUpKTtcclxuXHJcblxyXG59XHJcbi5jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIGxlZnQ6IDVweDtcclxufVxyXG4ubXlJbWFnZVVzZXJ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmgxe2ZvbnQtc2l6ZToxNHB4OyBmb250LXdlaWdodDo0MDA7IG1hcmdpbjoxMHB4IDAgMCAwOyBjb2xvcjojODg4ODg4O31cclxuXHJcbmF7Zm9udC1zaXplOjEycHg7IGZvbnQtd2VpZ2h0OmJvbGQ7IG1hcmdpbi10b3A6MTBweDsgZGlzcGxheTppbmxpbmUtYmxvY2s7IHRleHQtZGVjb3JhdGlvbjpub25lOyBjb2xvcjojMDA4QTY4O31cclxuXHJcbnN2Z3tcclxuICBjdXJzb3I6cG9pbnRlcjsgb3ZlcmZsb3c6dmlzaWJsZTsgd2lkdGg6NjBweDtcclxuICAjaGVhcnR7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7IGFuaW1hdGlvbjphbmltYXRlSGVhcnRPdXQgLjNzIGxpbmVhciBmb3J3YXJkczt9XHJcbiAgI21haW4tY2lyY3t0cmFuc2Zvcm0tb3JpZ2luOjI5LjVweCAyOS41cHg7fVxyXG59XHJcblxyXG4jY2hlY2tib3h7ZGlzcGxheTpub25lO31cclxuXHJcbiNjaGVja2JveDpjaGVja2VkICsgbGFiZWwgc3Zne1xyXG4gICAgI2hlYXJ0e3RyYW5zZm9ybTpzY2FsZSguMik7IGZpbGw6I0UyMjY0RDsgYW5pbWF0aW9uOmFuaW1hdGVIZWFydCAuM3MgbGluZWFyIGZvcndhcmRzIC4yNXM7fVxyXG4gICAgI21haW4tY2lyY3t0cmFuc2l0aW9uOmFsbCAyczsgYW5pbWF0aW9uOmFuaW1hdGVDaXJjbGUgLjNzIGxpbmVhciBmb3J3YXJkczsgb3BhY2l0eToxO31cclxuICAgICNncnAxe1xyXG4gICAgICBvcGFjaXR5OjE7IHRyYW5zaXRpb246LjFzIGFsbCAuM3M7XHJcbiAgICAgICNvdmFsMXtcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKDAsIC0zMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246LjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgICAjb3ZhbDJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgxMHB4LCAtNTBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOjEuNXMgdHJhbnNmb3JtIC4zczt9XHJcbiAgICB9XHJcbiAgICAjZ3JwMntcclxuICAgICAgb3BhY2l0eToxOyB0cmFuc2l0aW9uOi4xcyBhbGwgLjNzO1xyXG4gICAgICAjb3ZhbDF7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSgzMHB4LCAtMTVweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOi41cyB0cmFuc2Zvcm0gLjNzO31cclxuICAgICAgI292YWwye1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoNjBweCwgLTE1cHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoxLjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgfVxyXG4gICAgI2dycDN7XHJcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcclxuICAgICAgI292YWwxe1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoMzBweCwgMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246LjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgICAjb3ZhbDJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDApIHRyYW5zbGF0ZSg2MHB4LCAxMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246MS41cyB0cmFuc2Zvcm0gLjNzO31cclxuICAgIH1cclxuICAgICNncnA0e1xyXG4gICAgICBvcGFjaXR5OjE7IHRyYW5zaXRpb246LjFzIGFsbCAuM3M7XHJcbiAgICAgICNvdmFsMXtcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKDMwcHgsIDE1cHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjouNXMgdHJhbnNmb3JtIC4zczt9XHJcbiAgICAgICNvdmFsMntcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKDQwcHgsIDUwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoxLjVzIHRyYW5zZm9ybSAuM3M7fVxyXG4gICAgfVxyXG4gICAgI2dycDV7XHJcbiAgICAgIG9wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgYWxsIC4zcztcclxuICAgICAgI292YWwxe1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoLTEwcHgsIDIwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjouNXMgdHJhbnNmb3JtIC4zczt9XHJcbiAgICAgICNvdmFsMntcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKC02MHB4LCAzMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246MS41cyB0cmFuc2Zvcm0gLjNzO31cclxuICAgIH1cclxuICAgICNncnA2e1xyXG4gICAgICBvcGFjaXR5OjE7IHRyYW5zaXRpb246LjFzIGFsbCAuM3M7XHJcbiAgICAgICNvdmFsMXtcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKC0zMHB4LCAwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46MCAwIDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjouNXMgdHJhbnNmb3JtIC4zczt9XHJcbiAgICAgICNvdmFsMntcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKC02MHB4LCAtNXB4KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246MS41cyB0cmFuc2Zvcm0gLjNzO31cclxuICAgIH1cclxuICAgICNncnA3e1xyXG4gICAgICBvcGFjaXR5OjE7IHRyYW5zaXRpb246LjFzIGFsbCAuM3M7XHJcbiAgICAgICNvdmFsMXtcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMCkgdHJhbnNsYXRlKC0zMHB4LCAtMTVweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjowIDAgMDtcclxuICAgICAgICB0cmFuc2l0aW9uOi41cyB0cmFuc2Zvcm0gLjNzO31cclxuICAgICAgI292YWwye1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKSB0cmFuc2xhdGUoLTU1cHgsIC0zMHB4KTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOjAgMCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246MS41cyB0cmFuc2Zvcm0gLjNzO31cclxuICAgIH1cclxuICAgICNncnAye29wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgb3BhY2l0eSAuM3M7fVxyXG4gICAgI2dycDN7b3BhY2l0eToxOyB0cmFuc2l0aW9uOi4xcyBvcGFjaXR5IC4zczt9XHJcbiAgICAjZ3JwNHtvcGFjaXR5OjE7IHRyYW5zaXRpb246LjFzIG9wYWNpdHkgLjNzO31cclxuICAgICNncnA1e29wYWNpdHk6MTsgdHJhbnNpdGlvbjouMXMgb3BhY2l0eSAuM3M7fVxyXG4gICAgI2dycDZ7b3BhY2l0eToxOyB0cmFuc2l0aW9uOi4xcyBvcGFjaXR5IC4zczt9XHJcbiAgICAjZ3JwN3tvcGFjaXR5OjE7IHRyYW5zaXRpb246LjFzIG9wYWNpdHkgLjNzO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlQ2lyY2xle1xyXG4gIDQwJXt0cmFuc2Zvcm06c2NhbGUoMTApOyBvcGFjaXR5OjE7IGZpbGw6I0RENDY4ODt9XHJcbiAgNTUle3RyYW5zZm9ybTpzY2FsZSgxMSk7IG9wYWNpdHk6MTsgZmlsbDojRDQ2QUJGO31cclxuICA2NSV7dHJhbnNmb3JtOnNjYWxlKDEyKTsgb3BhY2l0eToxOyBmaWxsOiNDQzhFRjU7fVxyXG4gIDc1JXt0cmFuc2Zvcm06c2NhbGUoMTMpOyBvcGFjaXR5OjE7IGZpbGw6dHJhbnNwYXJlbnQ7IHN0cm9rZTojQ0M4RUY1OyBzdHJva2Utd2lkdGg6LjU7fVxyXG4gIDg1JXt0cmFuc2Zvcm06c2NhbGUoMTcpOyBvcGFjaXR5OjE7IGZpbGw6dHJhbnNwYXJlbnQ7IHN0cm9rZTojQ0M4RUY1OyBzdHJva2Utd2lkdGg6LjI7fVxyXG4gIDk1JXt0cmFuc2Zvcm06c2NhbGUoMTgpOyBvcGFjaXR5OjE7IGZpbGw6dHJhbnNwYXJlbnQ7IHN0cm9rZTojQ0M4RUY1OyBzdHJva2Utd2lkdGg6LjE7fVxyXG4gIDEwMCV7dHJhbnNmb3JtOnNjYWxlKDE5KTsgb3BhY2l0eToxOyBmaWxsOnRyYW5zcGFyZW50OyBzdHJva2U6I0NDOEVGNTsgc3Ryb2tlLXdpZHRoOjA7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVIZWFydHtcclxuICAwJXt0cmFuc2Zvcm06c2NhbGUoLjIpO31cclxuICA0MCV7dHJhbnNmb3JtOnNjYWxlKDEuMik7fVxyXG4gIDEwMCV7dHJhbnNmb3JtOnNjYWxlKDEpO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlSGVhcnRPdXR7XHJcbiAgMCV7dHJhbnNmb3JtOnNjYWxlKDEuNCk7fVxyXG4gIDEwMCV7dHJhbnNmb3JtOnNjYWxlKDEpO31cclxufVxyXG4iXX0= */");

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

/***/ 17444:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/profil-adulte/profil-adulte.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon routerLink=\"/tabs/home\" color=\"light\" name=\"chevron-back-outline\"></ion-icon>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" *ngIf=\"checkSelf===true\">\n      <ion-button color=\"secondary\" (click)=\"presentPopover($event)\">\n        <ion-icon style=\"    color: white;\" slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\">\n        </ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n\n\n    <ion-buttons slot=\"end\">\n\n      <ion-button shape=\"rounded\" (click)=\"presentPopoverNewMsg($event,idprofilePassed)\">\n        <ion-icon color=\"light\" name=\"chevron-down-outline\"></ion-icon>\n      </ion-button>\n\n\n\n    </ion-buttons>\n\n\n    <ion-title color=\"light\" style=\"text-align: center; margin-left: 20xp\">\n      {{title}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content class=\"parent\">\n  <div class=\"image1\">\n    <ion-img class=\"imgUser\"\n      src=\"https://www.heysigmund.com/wp-content/uploads/Breaking-Up-With-Kids-The-New-Normal.jpg\"></ion-img>\n\n    <ion-avatar class=\"image2\">\n      <img class=\"myImageUser\"\n        src=\"https://www.next.co.uk/nxtcms/resource/image/2639914/portrait_ratio1x1/305/305/7ddcbe6fc57d27c5f26a12fde323f828/lR/-0001-g69-mb-sh368442-lm-017-baby.jpg\">\n      <ion-label color=\"light\" style=\"    white-space: pre;\"> {{user?.name}}</ion-label>\n\n    </ion-avatar>\n  </div>\n  <ion-row>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"3\">\n      <ion-label class=\"mylabelabonnement\">\n        2k Abonnes\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"4\">\n      <ion-label class=\"mylabelabonnement\">\n        500 abonnements\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n  </ion-row>\n\n  <div style=\"background-color: #f8f8f8;\">\n    <!-- Segment with default selection -->\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"photo\">\n      <ion-segment-button value=\"photo\">\n        <ion-label>Photo</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"Publications\">\n        <ion-label>Publications</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"Planning\">\n        <ion-label>Planning</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"propos\" style=\"width: 30px;\">\n        <ion-label>à propos</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <div class=\"content-profil\" *ngIf=\"selected==='photo'\">\n      <ion-row>\n        <ion-col>\n          <div class=\"offer offer-warning\">\n            <div class=\"shape\">\n              <div class=\"shape-text\">\n                top\n              </div>\n            </div>\n            <div class=\"offer-content\">\n              <img\n                src=\"https://resize-gulli.jnsmedia.fr/r/890,__ym__/img//var/jeunesse/storage/images/gulli/chaine-tv/dessins-animes/pokemon/pokemon/pikachu/26571681-1-fre-FR/Pikachu.jpg\"\n                alt=\"\">\n            </div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div class=\"offer offer-radius offer-danger\" style=\"height: 210px;\">\n            <div class=\"shape\">\n              <div class=\"shape-text\">\n                top\n              </div>\n            </div>\n            <div class=\"offer-content\">\n              <h3 class=\"lead\">\n                A danger-radius\n              </h3>\n              <p>\n                And a little description.\n                <br> and so one\n              </p>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class=\"offer offer-warning\">\n            <div class=\"shape\">\n              <div class=\"shape-text\">\n                top\n              </div>\n            </div>\n            <div class=\"offer-content\">\n              <img\n                src=\"https://resize-gulli.jnsmedia.fr/r/890,__ym__/img//var/jeunesse/storage/images/gulli/chaine-tv/dessins-animes/pokemon/pokemon/pikachu/26571681-1-fre-FR/Pikachu.jpg\"\n                alt=\"\">\n            </div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <div class=\"offer offer-radius offer-danger\" style=\"height: 210px;\">\n            <div class=\"shape\">\n              <div class=\"shape-text\">\n                top\n              </div>\n            </div>\n            <div class=\"offer-content\">\n              <h3 class=\"lead\">\n                A danger-radius\n              </h3>\n              <p>\n                And a little description.\n                <br> and so one\n              </p>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class=\"content-profil\" *ngIf=\"selected==='propos'\">\n      <ion-row>\n        <ion-col>\n          <h4>A propos</h4>\n\n        </ion-col>\n        <ion-col>\n          <ng-container *ngIf=\"!update\">\n\n            <ion-icon (click)=\"updateComment()\" name=\"create-outline\" style=\"float: right;margin-top: 20px;\"\n              *ngIf=\"checkSelf===true\"></ion-icon>\n          </ng-container>\n          <ng-container *ngIf=\"update\">\n            <ion-icon style=\"font-size: 25px;    color: red;float: right;margin-top: 20px;\" (click)=\"updateComment()\"\n              name=\"close-circle-outline\"></ion-icon>\n\n            <ion-icon style=\"font-size: 25px;    color: green;float: right;margin-top: 20px;\" (click)=\"userUpdate()\"\n              name=\"checkmark-circle-outline\"></ion-icon>\n\n          </ng-container>\n        </ion-col>\n      </ion-row>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deserunt consequuntur mollitia cum soluta\n        dolorem\n        omnis quam totam. Ipsa, </p>\n      <ng-container *ngIf=\"update;else noupdate\">\n\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-icon name=\"location-sharp\"></ion-icon>\n            <ion-label style=\"font-weight: bold;\">Adresse</ion-label>\n          </ion-col>\n          <ion-col style=\"    margin-top: -8px;\">\n            <ion-input class=\"commentaire\" id=\"contentadresse\" type=\"text\" [(ngModel)]=\"user.adresse\"></ion-input>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label style=\"font-weight: bold;\">Code postal</ion-label>\n          </ion-col>\n          <ion-col style=\"    margin-top: -8px;\">\n            <ion-input class=\"commentaire\" id=\"contentPostal\" type=\"text\"></ion-input>\n\n          </ion-col>\n\n\n        </ion-row>\n\n        <ion-row>\n\n\n          <ion-col size=\"4\">\n            <ion-label style=\"font-weight: bold;\">Ville</ion-label>\n          </ion-col>\n          <ion-col style=\"    margin-top: -8px;\">\n            <ion-input class=\"commentaire\" type=\"text\" id=\"contentVille\" [(ngModel)]=\"user.ville\"></ion-input>\n\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label style=\"font-weight: bold;\">Pays</ion-label>\n          </ion-col>\n          <ion-col style=\"    margin-top: -8px;\">\n            <ion-input class=\"commentaire\" type=\"text\" id=\"contentPays\" [(ngModel)]=\"user.location\"></ion-input>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"3.5\">\n            <ion-label style=\"font-weight: bold;\">Date naissance</ion-label>\n          </ion-col>\n          <ion-col style=\"    margin-top: -8px;\">\n            <ion-datetime class=\"commentaire\" type=\"date\" id=\"datenaissance\" [(ngModel)]=\"user.datedenaissance\">\n            </ion-datetime>\n\n\n          </ion-col>\n\n\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col size=\"3.5\" style=\"margin-top: 15px;\">\n\n            <ion-label style=\"font-weight: bold;\">Genre</ion-label>\n          </ion-col>\n\n\n\n          <ion-col>\n\n            <ion-item>\n              <ng-container *ngIf=\"user.sexe==='homme';else femme\">\n                <ion-select interface=\"popover\" placeholder=\"Select One\" value=\"homme\" [(ngModel)]=\"user.sexe\">\n                  <ion-select-option value=\"femme\">femme</ion-select-option>\n                  <ion-select-option value=\"homme\">Homme</ion-select-option>\n                  <ion-select-option value=\"autres\">Autres</ion-select-option>\n                </ion-select>\n              </ng-container>\n\n              <ng-template #femme>\n                <ion-select interface=\"popover\" placeholder=\"Select One\" value=\"femme\" [(ngModel)]=\"user.sexe\">\n                  <ion-select-option value=\"femme\">femme</ion-select-option>\n                  <ion-select-option value=\"homme\">Homme</ion-select-option>\n                  <ion-select-option value=\"autres\">Autres</ion-select-option>\n                </ion-select>\n              </ng-template>\n\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n\n      <ng-template #noupdate>\n\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-icon name=\"location-sharp\"></ion-icon>\n            <ion-label style=\"font-weight: bold;\">Adresse</ion-label>\n          </ion-col>\n          <ion-col>\n            {{user.adresse}}\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label style=\"font-weight: bold;\">Code postal</ion-label>\n          </ion-col>\n          <ion-col>\n            2083\n          </ion-col>\n\n\n        </ion-row>\n\n        <ion-row>\n\n\n          <ion-col size=\"4\">\n            <ion-label style=\"font-weight: bold;\">Ville</ion-label>\n          </ion-col>\n          <ion-col>\n            {{user.ville}}\n\n          </ion-col>\n          <ion-col size=\"3.5\">\n            <ion-label style=\"font-weight: bold;\">Pays</ion-label>\n          </ion-col>\n          <ion-col>\n            {{user.pays}}\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-label style=\"font-weight: bold;\">Date naissance</ion-label>\n          </ion-col>\n          <ion-col>\n\n            <ion-datetime class=\"commentaire\" type=\"date\" id=\"datenaissance\" [(ngModel)]=\"user.datedenaissance\">\n            </ion-datetime>\n\n          </ion-col>\n\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col size=\"3.5\" style=\"margin-top: 15px;\">\n\n            <ion-label style=\"font-weight: bold;\">Genre</ion-label>\n          </ion-col>\n\n\n          <ion-col>\n\n            <ion-item>\n              <ng-container *ngIf=\"user.sexe==='homme';else femme\">\n                <ion-select interface=\"popover\" placeholder=\"Select One\" value=\"h\">\n                  <ion-select-option value=\"f\">Femme</ion-select-option>\n                  <ion-select-option value=\"h\">Homme</ion-select-option>\n                  <ion-select-option value=\"a\">Autres</ion-select-option>\n                </ion-select>\n              </ng-container>\n\n              <ng-template #femme>\n                <ion-select interface=\"popover\" placeholder=\"Select One\" value=\"f\">\n                  <ion-select-option value=\"f\" selected>Femme</ion-select-option>\n                  <ion-select-option value=\"h\">Homme</ion-select-option>\n                  <ion-select-option value=\"a\">Autres</ion-select-option>\n                </ion-select>\n              </ng-template>\n\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n      </ng-template>\n\n\n\n    </div>\n\n\n\n    <div class=\"content-profil\" *ngIf=\"selected==='Publications'\">\n      <div class=\"img-wrapper\" *ngFor=\"let post of posts\">\n        <div >\n          <ion-row style=\"height: 40px\">\n            <ion-col size=\"1.5\" style=\" position: relative\">\n              <ion-avatar>\n                <img class=\"myImageUser\" src=\"../../../assets/kidsuser.png\" />\n              </ion-avatar>\n            </ion-col>\n            <ion-col size=\"9\" style=\"   position: absolute;\n          left: 55px;\">\n              <ion-label style=\"color: gray; margin-top: 45px;\">{{post.user.name}}</ion-label>\n              <ion-label style=\"color: gray; font-size: small; display: block\">{{post.createdAt| date}}</ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"9\">\n              <ion-label style=\"color: gray; font-size: small; font-weight: bold\">{{post.title}}</ion-label>\n              <ion-label style=\"\n              color: gray;\n              font-size: x-small;\n              display: block;\n              width: 250px;\n            \">{{post.content}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </div>\n\n\n        <img style=\"border-radius: 15px\"\n          src=\"https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png\" />\n        <div id=\"main-content\">\n          <ion-icon slot=\"end\" name=\"heart-empty\"></ion-icon>\n\n\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</ion-content>\n");

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
//# sourceMappingURL=src_app_layouts_profil-adulte_profil-adulte_module_ts.js.map