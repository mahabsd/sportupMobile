(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["default-src_app_layouts_profil_profil_module_ts"],{

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

/***/ 51543:
/*!*********************************************************!*\
  !*** ./src/app/layouts/profil/profil-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilPageRoutingModule": () => (/* binding */ ProfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil.page */ 38641);




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

/***/ 31646:
/*!*************************************************!*\
  !*** ./src/app/layouts/profil/profil.module.ts ***!
  \*************************************************/
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
/* harmony import */ var _profil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil-routing.module */ 51543);
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil.page */ 38641);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/component.module */ 55051);








let ProfilPageModule = class ProfilPageModule {
};
ProfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profil_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilPageRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
        ],
        declarations: [_profil_page__WEBPACK_IMPORTED_MODULE_1__.ProfilPage]
    })
], ProfilPageModule);



/***/ }),

/***/ 38641:
/*!***********************************************!*\
  !*** ./src/app/layouts/profil/profil.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilPage": () => (/* binding */ ProfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profil.page.html */ 18684);
/* harmony import */ var _profil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil.page.scss */ 16975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Service/favoris.service */ 38007);
/* harmony import */ var src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Service/follower.service */ 93647);
/* harmony import */ var src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Service/notifications.service */ 43367);
/* harmony import */ var src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/Service/post.service */ 91820);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _pop_over_suivre_page_pop_over_suivre_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pop-over-suivre-page/pop-over-suivre-page.component */ 19701);













let ProfilPage = class ProfilPage {
    constructor(activatedRoute, userService, followerService, modalController, router, popoverController, notificationsService, postService, savepostsService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.followerService = followerService;
        this.modalController = modalController;
        this.router = router;
        this.popoverController = popoverController;
        this.notificationsService = notificationsService;
        this.postService = postService;
        this.savepostsService = savepostsService;
        // activatedroute importer luser selon leur id
        // en utilisant lapi
        this.apiImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.apiImg + 'User/';
        this.EtatSuivre = false;
        this.notif = { reciever: '', userOwner: '', text: '' };
        this.myInformation = { userLastName: '', userFirstName: '' };
        this.user = [];
        this.posts = [];
        this.follower = false;
        this.isUser = false;
        this.isKid = false;
        this.etatSuivre = false;
        this.imagesBasic = [
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
                description: 'Image 1',
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
                description: 'Image 2',
            },
            {
                img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
                thumb: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
                description: 'Image 3',
            },
        ];
        this.getUser();
    }
    ngOnInit() {
        // this.confirmer = false;
        this.getUser();
        this.idprofilePassed = this.activatedRoute.snapshot.params.id;
        this.typepage = this.activatedRoute.snapshot.params.typepage;
        this.getUserByid();
        this.getfollowers();
        this.getfollow();
        this.getPosts();
    }
    getfollowers() {
        this.followerService.getFollowers(this.idprofilePassed).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.followingsNumber = res.results;
            this.followersNumber = res.resultsFollowers;
        }));
    }
    getPosts() {
        console.log(this.idprofilePassed);
        this.postService.getAllPostsById(1, this.idprofilePassed).subscribe(res => {
            this.postsNum = res.results;
            console.log(this.postsNum);
        });
        this.getfollow();
        this.idprofilePassed = this.activatedRoute.snapshot.params.id;
        this.typepage = this.activatedRoute.snapshot.params.typepage;
        this.getUserByid();
        this.checkNotif();
    }
    getfollow() {
        this.userService.getMe().subscribe((response) => {
            this.iduser1 = response.data.data.id;
            this.followerService
                .getFollow(this.idprofilePassed, this.iduser1).subscribe((res) => {
                if (res == null) {
                    this.follower = false;
                }
                else {
                    this.follower = true;
                    this.idFollowtoDelete = res._id;
                    this.EtatSuivre = true;
                    // this.router.navigate(["menu/tabs/layouts/coachprofile",this.idprofilePassed,"followed"]);
                    if (this.userClicked.role === 'user' || this.userClicked.role === 'pro') {
                        this.router.navigate(['menu/tabs/layouts/coachprofile', this.idprofilePassed, 'followed']);
                    }
                    else if (this.userClicked.role === 'kids') {
                        this.router.navigate(['tabs/profilkids/', this.idprofilePassed]);
                    }
                }
            });
        }, (error) => {
            console.error(error);
        });
    }
    getMe() {
        this.userService.getMe().subscribe((res) => {
            this.user$ = res.data.data;
        });
    }
    getUser() {
        this.userService.getMe().subscribe((response) => {
            this.myInformation.userLastName = response.data.data.name;
            this.iduser = response.data.data.id;
            this.userRole = response.data.data.role;
            if (this.userRole === 'user') {
                this.isUser = true;
            }
            else if (this.userRole === 'Kids') {
                this.isKid = true;
            }
            this.checkNotif();
        }, (error) => {
            console.error(error);
        });
    }
    getUserByid() {
        this.userService.getUser(this.idprofilePassed).subscribe((response) => {
            this.visitedUser = response.data.data;
            this.profileClickedName = response.data.data.name;
            this.userClicked = response.data.data;
        }, (error) => {
            console.error(error);
        });
    }
    presentPopover(ev, idprofilePassed) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _pop_over_suivre_page_pop_over_suivre_page_component__WEBPACK_IMPORTED_MODULE_8__.PopOverSuivrePageComponent,
                // cssClass: 'popoverProfil-custom-class',
                event: ev,
                componentProps: { idpassed: idprofilePassed },
                translucent: true
            });
            popover.style.cssText = '--max-width: 150px;--max-height: 100px;--border-radius:70px; ';
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
        });
    }
    itemSelected(data) {
        console.log(data);
    }
    /* buttonSuivre() {
  
     this.follow.userFollowed = this.idprofilePassed;
     this.follow.userFollowing = this.iduser;
     this.followerService.createFollow(this.follow).subscribe((res) => {
       if(res['status']==='successs'){
         if( this.userClicked.role==='user'||this.userClicked.role==='pro'){
           this.router.navigate(["menu/tabs/layouts/coachprofile",this.idprofilePassed,"followed"]);
           }
           else if (this.userClicked.role==='kids'){
             this.router.navigate(["tabs/profilkids/",this.idprofilePassed]);
           };
       }
     });
     //this.getfollow();
   }
   */
    buttonBlock() {
        this.followerService
            .deleteFollow(this.idFollowtoDelete)
            .subscribe();
        this.EtatSuivre = false;
        //this.getfollow()
    }
    createNotif() {
        this.notif.reciever = this.idprofilePassed;
        this.notif.userOwner = this.iduser;
        this.notif.text = 'vous a envoyé une invitation';
        this.notificationsService.postNotification(this.notif).subscribe();
        this.etatSuivre = true;
        this.checkNotif();
    }
    checkNotif() {
        this.notificationsService.checkNotification(this.idprofilePassed, this.iduser).subscribe(res => {
            console.log(res.data);
            if (res.data) {
                this.etatSuivre = true;
            }
        });
    }
};
ProfilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__.FollowerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.PopoverController },
    { type: src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService },
    { type: src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_5__.PostService },
    { type: src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_2__.FavorisService }
];
ProfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-profil',
        template: _raw_loader_profil_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profil_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilPage);



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

/***/ 16975:
/*!*************************************************!*\
  !*** ./src/app/layouts/profil/profil.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --background:#f1f2f2 ;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n}\n\n#suiv {\n  position: relative;\n  top: -30px;\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 8px;\n  width: 130px;\n  height: 40px;\n  margin-right: 10px;\n  background: linear-gradient(90deg, #020024 0%, #444a38 0%, #247238 14%, #8ebf25 100%);\n  font-family: Montserrat, sans-serif;\n  color: white;\n  font-weight: 100;\n}\n\nion-buttons ion-button {\n  --border-radius: 50%;\n  border-radius: 50%;\n  background: #1313131f;\n  width: 36px;\n  height: 36px;\n}\n\n.title-font {\n  font-weight: 150;\n  font-size: 18px;\n}\n\n#dejasuiv {\n  position: relative;\n  top: -30px;\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 8px;\n  width: 130px;\n  height: 40px;\n  margin-right: 10px;\n  background: grey;\n  font-family: Montserrat, sans-serif;\n  color: white;\n  font-weight: 100;\n}\n\n#bloq {\n  position: relative;\n  top: -30px;\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 8px;\n  margin-left: 10px;\n  background: linear-gradient(300deg, #d60e0ed8, #d60e0ed8, #860202, #7c0000);\n  width: 130px;\n  height: 40px;\n  font-family: Montserrat, sans-serif;\n  color: white;\n  font-weight: 100;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px #247238;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 800;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.imageFrame {\n  padding: 2px;\n}\n\n.mygallery {\n  border-radius: 6px;\n}\n\n.info {\n  font-family: Montserrat, sans-serif;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: bold;\n  -webkit-text-stroke-width: 0.5px;\n  -webkit-text-stroke-color: black;\n  margin-right: 5px;\n}\n\n.infoItem {\n  display: flex;\n  justify-content: space-between;\n}\n\n.infoName {\n  margin-right: 15px;\n  color: white;\n}\n\n.name {\n  color: white;\n  font-weight: bold;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: black;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsK0JBQUE7QUFBRjs7QUFVQztFQUNDLHFDQUFBO0VBRUEsZUFSTTtBQUFSOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0YsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQWZRO0VBZ0JSLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFGQUFBO0VBQ0EsbUNBQUE7RUFBb0MsWUFBQTtFQUFjLGdCQUFBO0FBTmxEOztBQVFBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQVBGOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0YsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQTNDUTtFQTRDUixrQkFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQW9DLFlBQUE7RUFBYyxnQkFBQTtBQUxsRDs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUE3RE07RUE4RE4sa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJFQUFBO0VBSUYsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUFvQyxZQUFBO0VBQWMsZ0JBQUE7QUFUbEQ7O0FBV0E7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvREFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUkE7O0FBU0E7RUFDRSwrREFBQTtBQVBGOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBRUEsb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBUkY7O0FBVUU7RUFDRSxlQUFBO0FBUko7O0FBY0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FBWEo7O0FBYUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQVhKOztBQWFFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBWEo7O0FBY0M7RUFDRSxZQUFBO0FBWEg7O0FBYUE7RUFDRSxrQkFBQTtBQVZGOztBQWVBO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FBWkY7O0FBZUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFaRjs7QUFlQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQVpGOztBQWNBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFYRiIsImZpbGUiOiJwcm9maWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG5cbiAgLS1iYWNrZ3JvdW5kOiNmMWYyZjJcbn1cblxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuXG4vLyBjc3MgYnV0dG9uXG4kcnVsZXI6IDE2cHg7XG4kY29sb3ItcmVkOiAjNzI2YjZiO1xuJGNvbG9yLWJnOiAjRUJFQ0YwO1xuJGNvbG9yLXNoYWRvdzogI0JBQkVDQztcbiRjb2xvci13aGl0ZTogI0ZGRjtcbiBidXR0b24ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAvL2xldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gIGZvbnQtc2l6ZTogJHJ1bGVyO1xufVxuI3N1aXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMwcHg7XG5ib3JkZXI6IDA7XG5vdXRsaW5lOiAwO1xuZm9udC1zaXplOiAkcnVsZXI7XG5ib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcblxud2lkdGg6IDEzMHB4O1xuaGVpZ2h0OiA0MHB4O1xubWFyZ2luLXJpZ2h0OiAxMHB4O1xuYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDY4LDc0LDU2LDEpIDAlLCByZ2JhKDM2LDExNCw1NiwxKSAxNCUsIHJnYmEoMTQyLDE5MSwzNywxKSAxMDAlKTtcbmZvbnQtZmFtaWx5OiBNb250c2VycmF0LHNhbnMtc2VyaWY7IGNvbG9yOndoaXRlOyAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbmlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMTMxMzEzMWY7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIC8vIGZpbGwtb3BhY2l0eTogO1xufVxuXG5cbi50aXRsZS1mb250e1xuICBmb250LXdlaWdodDogMTUwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4jZGVqYXN1aXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMwcHg7XG5ib3JkZXI6IDA7XG5vdXRsaW5lOiAwO1xuZm9udC1zaXplOiAkcnVsZXI7XG5ib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcblxud2lkdGg6IDEzMHB4O1xuaGVpZ2h0OiA0MHB4O1xubWFyZ2luLXJpZ2h0OiAxMHB4O1xuYmFja2dyb3VuZDpncmV5O1xuZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsc2Fucy1zZXJpZjsgY29sb3I6d2hpdGU7ICBmb250LXdlaWdodDogMTAwO1xufVxuXG5cblxuXG4jYmxvcXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zMHB4O1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogJHJ1bGVyO1xuICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAzMDBkZWdcbiAgICAsICNkNjBlMGVkOCwgI2Q2MGUwZWQ4LCAjODYwMjAyLCAjN2MwMDAwKTtcblxud2lkdGg6IDEzMHB4O1xuaGVpZ2h0OiA0MHB4O1xuZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsc2Fucy1zZXJpZjsgY29sb3I6d2hpdGU7ICBmb250LXdlaWdodDogMTAwO1xuICB9XG5idXR0b24ge1xuY29sb3I6IzYxNjc3QztcbmZvbnQtd2VpZ2h0OiBib2xkO1xuYm94LXNoYWRvdzogLTVweCAtNXB4IDIwcHggJGNvbG9yLXdoaXRlLCAgMXB4IDFweCA1cHggIzI0NzIzODtcbnRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuY3Vyc29yOiBwb2ludGVyO1xuZm9udC13ZWlnaHQ6IDgwMDtcbiY6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggJGNvbG9yLXNoYWRvdywgaW5zZXQgLTFweCAtMXB4IDJweCAkY29sb3Itd2hpdGU7XG59XG4mLnVuaXQge1xuICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIC8vYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAycHggMXB4O1xuICBkaXNwbGF5OmlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBtYXJnaW46IDAgJHJ1bGVyLzI7XG4gIGZvbnQtc2l6ZTogJHJ1bGVyKjEuMjtcblxuICAuaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gIGlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jYXJkLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNiU7XG4gICAgZm9udC1zaXplOiAyLjBlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MiU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cbiAuaW1hZ2VGcmFtZXtcbiAgIHBhZGRpbmc6IDJweDtcbiB9XG4ubXlnYWxsZXJ5e1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cblxuXG4uaW5mbyB7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LHNhbnMtc2VyaWY7XG4gIGNvbG9yOiNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuNXB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uaW5mb0l0ZW17XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmluZm9OYW1le1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOndoaXRlO1xufVxuLm5hbWV7XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMXB4O1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbiJdfQ== */");

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

/***/ }),

/***/ 18684:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/profil/profil.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <div style=\"display: flex; align-items: center\">\n      <ion-icon *ngIf=\"isKid\" size=\"small\" color=\"light\" routerLink=\"/tabsKids/accueil\" name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-icon *ngIf=\"isUser\" size=\"small\" color=\"light\" routerLink=\"/tabs/layouts/home\" name=\"chevron-back-outline\">\n      </ion-icon>\n      <ion-title color=\"light\" style=\"text-align: center; margin-left: 20xp\">{{profileClickedName | uppercase}}\n      </ion-title>\n    </div>\n\n    <ion-buttons slot=\"end\">\n      <ion-button shape=\"rounded\" (click)=\"presentPopover($event,idprofilePassed)\">\n        <ion-icon color=\"light\" name=\"chevron-down-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button shape=\"rounded\" [routerLink]=\"['/tabs/layouts/maps']\" routerLinkActive=\"router-link-active\">\n        <img src=\"../../assets/icon/icon_position.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div style=\"position: relative;\" >\n    <div style=\"display: flex;align-items:center;position:absolute;bottom:30px;justify-content:space-between;width:100%\">\n      <div style=\"display: flex;align-items:center\" >\n        <ion-avatar>\n          <img [src]=\"apiImg+visitedUser?.photo\">\n        </ion-avatar>\n        <div class=\"ion-justify-content-center infoName\">\n          <ion-label>\n            <span class=\"name\">{{profileClickedName}} </span>\n          </ion-label>\n        </div>\n      </div>\n\n      <ion-row color=\"light\" class=\"infoContainer\">\n        <div  class=\"infoItem\">\n          <p class=\"info\">{{postsNum}}</p>\n          <p class=\"info\">Publications</p>\n        </div>\n        <div  class=\"infoItem\">\n          <p class=\"info\">{{followersNumber}}</p>\n          <p class=\"info\">Abonnés</p>\n        </div>\n        <div  class=\"infoItem\">\n          <p class=\"info\">{{followingsNumber}}</p>\n          <p class=\"info\">Abonnements</p>\n        </div>\n      </ion-row>\n    </div>\n    <div>\n      <img style=\"object-fit:cover;z-index:-10;height:210px;width:100%\" [src]=\"apiImg+visitedUser?.cover\" alt=\"\">\n    </div>\n\n  </div>\n  <ion-row style=\" padding-top: 5px;\" class=\"ion-justify-content-center\">\n    <button type=\"button\" id=\"dejasuiv\" style=\"background-color: #808080c4;\" *ngIf=\"etatSuivre === true\">\n     invitaion envoyée\n    </button>\n    <button (click)=\"createNotif()\" id=\"suiv\" type=\"button\"  *ngIf=\"etatSuivre === false\">\n      Suivre\n    </button>\n  <button (click)=\"buttonBlock()\" id=\"bloq\" type=\"button\">\n    Bloquer\n  </button>\n</ion-row>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_layouts_profil_profil_module_ts.js.map