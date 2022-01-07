(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["default-src_app_layouts_community_show-page_show-page_module_ts"],{

/***/ 74489:
/*!*************************************************************************!*\
  !*** ./src/app/layouts/community/show-page/show-page-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowPagePageRoutingModule": () => (/* binding */ ShowPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _show_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-page.page */ 67597);




const routes = [
    {
        path: '',
        component: _show_page_page__WEBPACK_IMPORTED_MODULE_0__.ShowPagePage
    }
];
let ShowPagePageRoutingModule = class ShowPagePageRoutingModule {
};
ShowPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShowPagePageRoutingModule);



/***/ }),

/***/ 17299:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/community/show-page/show-page.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowPagePageModule": () => (/* binding */ ShowPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _show_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-page-routing.module */ 74489);
/* harmony import */ var _show_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-page.page */ 67597);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);








let ShowPagePageModule = class ShowPagePageModule {
};
ShowPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _show_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowPagePageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_show_page_page__WEBPACK_IMPORTED_MODULE_1__.ShowPagePage]
    })
], ShowPagePageModule);



/***/ }),

/***/ 67597:
/*!***************************************************************!*\
  !*** ./src/app/layouts/community/show-page/show-page.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowPagePage": () => (/* binding */ ShowPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_show_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./show-page.page.html */ 37025);
/* harmony import */ var _show_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-page.page.scss */ 79775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 51188);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Service/follower.service */ 93647);
/* harmony import */ var src_app_Shared_Service_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Service/image.service */ 97030);
/* harmony import */ var src_app_shared_Service_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Service/page.service */ 82112);
/* harmony import */ var src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/Service/post.service */ 91820);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _home_modal_sheare_modal_sheare_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../home/modal-sheare/modal-sheare.page */ 74689);














let ShowPagePage = class ShowPagePage {
    constructor(activatedRoute, pageService, userservice, imageService, elemRef, action, followerService, modalController, postService) {
        this.activatedRoute = activatedRoute;
        this.pageService = pageService;
        this.userservice = userservice;
        this.imageService = imageService;
        this.elemRef = elemRef;
        this.action = action;
        this.followerService = followerService;
        this.modalController = modalController;
        this.postService = postService;
        this.photos = [
            {
                url: "https://medias.lequipe.fr/img-photo-jpg/samuel-kistohurry-a-droite-etait-superieur-a-son-adversaire-dans-tous-les-domaines-d-boulanger/1500000001561412/0:0,1995:1330-1200-800-75/a7fdc.jpg"
            },
            {
                url: "https://www.lhebdojournal.com/wp-content/uploads/sites/22/2021/03/sports.jpg"
            },
            {
                url: "https://cdn.futura-sciences.com/buildsv6/images/wide1920/d/b/7/db77d79aad_50173706_depenses-caloriques-sport-julien-eichinger-adobe-stock.jpg"
            },
            {
                url: "https://medias.pourlascience.fr/api/v1/images/view/5d1b663a8fe56f77c8671165/wide_1300/image.jpg"
            },
            {
                url: "https://www.irbms.com/wp-content/uploads/2019/09/choisr-un-sport-1280.png"
            },
            {
                url: "https://media.npr.org/assets/img/2020/06/10/gettyimages-200199027-001_wide-3ff0f063a2bf1ab01550d3508c816bc43009d215.jpg?s=1400"
            },
            {
                url: "https://www.rankonesport.com/content/Images/hero-bg.jpg"
            },
            {
                url: "https://sirc.ca/wp-content/uploads/2021/04/Gymnastics_safe-sport.jpeg"
            },
            {
                url: "https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg"
            },
            {
                url: "https://img.freepik.com/vecteurs-libre/kids-sport-icons-set_1284-16706.jpg?size=338&ext=jpg&ga=GA1.2.1850830551.1631404800"
            },
            {
                url: "https://inisport.com/wp-content/uploads/2019/07/images-sportifs.png"
            },
            {
                url: "https://sportfive.com/static/media/runner.2fa8a5bf.png"
            }
        ];
        this.apiImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.apiImg + 'page/';
    }
    onClickOutside(targetElement) {
        const target = this.elemRef.nativeElement.querySelector('div');
        if (targetElement.tagName === target.tagName) {
            this.dropDown = false;
        }
    }
    segmentChanged(ev) {
        this.selected = ev.detail.value;
    }
    ngOnInit() {
        this.selected = 'Acceuil';
        this.followedPage = false;
        this.dropDown = false;
        this.more = false;
        this.id = this.activatedRoute.snapshot.params.id;
        this.updateImage = false;
        this.update = false;
        this.getMe();
        this.getOnePage();
        this.getAllPosts();
    }
    openDropDown() {
        if (this.dropDown === false) {
            this.dropDown = true;
        }
        else if (this.dropDown === true) {
            this.dropDown = false;
        }
    }
    toggleShowMore() {
        if (this.more === false) {
            this.more = true;
        }
        else if (this.more === true) {
            this.more = false;
        }
    }
    toggleFollow() {
        if (this.followedPage === true) {
            this.followedPage = false;
        }
        else if (this.followedPage === false) {
            this.followedPage = true;
        }
    }
    getOnePage() {
        this.pageService.getOnePage(this.id).subscribe(res => {
            this.page = res[0];
        });
    }
    getMe() {
        this.userservice.getMe().subscribe((res) => {
            this.userid = res.data.data._id;
            this.user = res.data.data;
        });
    }
    addImage(source) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const fd = new FormData();
            yield this.imageService.readyImage(source, fd);
            this.getFormData(this.page, fd);
            console.log(fd);
            this.pageService.updateCoverPage(fd).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                yield this.getOnePage();
            }));
        });
    }
    selectImageSource() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const buttons = [
                {
                    text: 'Choose from gallery',
                    icon: 'image',
                    handler: () => {
                        this.addImage(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos);
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
    addProfile(source) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const fd = new FormData();
            yield this.imageService.readyImage(source, fd);
            this.getFormData(this.page, fd);
            this.pageService.updateProfileImagePage(fd).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
                yield this.getOnePage();
            }));
        });
    }
    selectProfileSource() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const buttons = [
                {
                    text: 'Choose from gallery',
                    icon: 'image',
                    handler: () => {
                        this.addProfile(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos);
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
    getAllfriends() {
        this.followerService.getFollowers(this.userid)
            .subscribe(res => {
            this.friends = res.data.data;
        });
    }
    onClick(selectedFriends) {
        console.log(selectedFriends);
    }
    updatePage() {
        this.pageService.updatepage(this.page).subscribe(res => console.log(res));
    }
    openShareModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _home_modal_sheare_modal_sheare_page__WEBPACK_IMPORTED_MODULE_9__.ModalShearePage,
                componentProps: {
                    user: this.user,
                    page: this.page._id
                },
            });
            yield modal.present();
            yield modal.onWillDismiss().then((result) => {
            });
        });
    }
    getAllPosts() {
        this.postService.getAllPostsByPage(this.id).subscribe(res => {
            this.posts = res.data.data;
            console.log(this.posts);
        });
    }
};
ShowPagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: src_app_shared_Service_page_service__WEBPACK_IMPORTED_MODULE_5__.PageService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService },
    { type: src_app_Shared_Service_image_service__WEBPACK_IMPORTED_MODULE_4__.ImageService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController },
    { type: src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__.FollowerService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: src_app_Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_6__.PostService }
];
ShowPagePage.propDecorators = {
    onClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.HostListener, args: ['click', ['$event.target'],] }]
};
ShowPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-show-page',
        template: _raw_loader_show_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_show_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShowPagePage);



/***/ }),

/***/ 82112:
/*!************************************************!*\
  !*** ./src/app/shared/Service/page.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageService": () => (/* binding */ PageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 1128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);




let PageService = class PageService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getpagesbyID(id) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/getAll/?createdBy=${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    addPage(Page) {
        return this.apiService
            .post(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}`, Page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    updatepage(page) {
        return this.apiService.put(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/${page._id}`, page);
    }
    deletepage(id) {
        return this.apiService.delete(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}` + id);
    }
    getOnePage(id) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/getAll/?_id=${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    getAllPages() {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/getAll`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    updateCoverPage(page) {
        return this.apiService.patch(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}` + '/cover', page);
    }
    updateProfileImagePage(page) {
        return this.apiService.patch(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/imageProfile`, page);
    }
};
PageService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
PageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PageService);



/***/ }),

/***/ 79775:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/community/show-page/show-page.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\nion-segment-button {\n  border-radius: 5px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 5px 2px;\n  height: 30px;\n  color: #858484;\n  --background-checked: #d8d6d6ab;\n  text-transform: none;\n  min-height: unset;\n  --indicator-color: none;\n  min-width: unset;\n  font-size: 12px;\n}\n.créer {\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 0;\n  height: 30px;\n  text-transform: none;\n  min-height: unset;\n  min-width: 80px;\n  background-color: unset;\n  color: #858484;\n  font-size: 13px;\n}\nbutton {\n  background-color: white;\n  padding: 2px;\n  border-radius: 5px;\n  color: #858484;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 5px 2px;\n  height: 30px;\n  font-size: 12px;\n}\n.swipper-wrapper {\n  padding: 10px;\n}\ninput:focus {\n  outline: unset;\n}\n.input {\n  outline: unset;\n  border: none;\n  border-bottom: #858484;\n  background-color: #f1f1f1;\n}\n.createIcom {\n  margin-left: 375px;\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0Usa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGO0FBRUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0FBQ0Y7QUFFQTtFQUNFLGNBQUE7QUFDRjtBQUNBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBRUY7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUVGIiwiZmlsZSI6InNob3ctcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHJnYigwIDAgMCAvIDQzJSk7XG4gIG1hcmdpbjogNXB4IDJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzg1ODQ4NDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNkOGQ2ZDZhYjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICAtLWluZGljYXRvci1jb2xvcjogbm9uZTtcbiAgbWluLXdpZHRoOiB1bnNldDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY3LDqWVye1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggcmdiKDAgMCAwIC8gNDMlKTtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBtaW4taGVpZ2h0OiB1bnNldDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgY29sb3I6Izg1ODQ4NCA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuYnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiAjODU4NDg0O1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggcmdiKDAgMCAwIC8gNDMlKTtcbiAgbWFyZ2luOiA1cHggMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnN3aXBwZXItd3JhcHBlcntcbiAgcGFkZGluZzoxMHB4O1xuXG59XG5pbnB1dDpmb2N1c3tcbiAgb3V0bGluZTogdW5zZXQ7XG59XG4uaW5wdXR7XG4gIG91dGxpbmU6IHVuc2V0O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206ICM4NTg0ODQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcbn1cblxuLmNyZWF0ZUljb20ge1xuICBtYXJnaW4tbGVmdDogMzc1cHg7XG4gIGNvbG9yOiBncmVlbjtcbn1cbiJdfQ== */");

/***/ }),

/***/ 37025:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/community/show-page/show-page.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [isPage]=\"true\"></app-header>\n\n<ion-content [scrollEvents]=\"true\">\n  <div style=\"position: relative;\">\n    <div style=\"position: absolute;bottom:15px;left:10px;display:flex;flex-direction:column;align-items:center\">\n      <div style=\"position: relative\">\n        <ion-avatar style=\"position: absolute; top:50px; left:300px;\" class=\"edit-profile-cover\"\n          (click)=\"selectImageSource()\" *ngIf=\"page?.createdBy._id === userid\">\n          <ion-icon name=\"create\"  color=\"light\" > </ion-icon>\n        </ion-avatar>\n      </div>\n      <div style=\"postion:relative\">\n        <img (click)=\"updateImage = true\" *ngIf=\"!page?.photo\"\n          style=\"width:70px;height:70px;margin-right:10px;background-color:white;border-radius:50%;padding:5px;\"\n          src=\"../../../assets/svg/person-icon.svg\" alt=\"\">\n        <img (click)=\"updateImage = true; selectProfileSource()\" *ngIf=\"page?.photo\"\n          style=\"width:70px;height:70px;margin-right:10px;background-color:white;border-radius:50%;padding:5px;\"\n          src=\"{{apiImg+page?.photo}} \" alt=\"\">\n\n      </div>\n\n      <span style=\"font-size: 18px;color:white\"> {{page?.name}} </span>\n    </div>\n    <img *ngIf=\"page?.cover\" src=\"{{apiImg+page?.cover}} \" alt=\"\">\n    <img *ngIf=\"!page?.cover\"\n      src=\"https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg\"\n      alt=\"\">\n\n    <ion-avatar style=\"position: absolute; top:0px; left: 0px;\" class=\"edit-profile-cover\" (click)=\"selectImageSource()\"\n      *ngIf=\"page?.createdBy._id === userid\">\n      <ion-icon name=\"create\" c class=\"createIcom\" style=\"height:0px; width:0px;\"> </ion-icon>\n    </ion-avatar>\n  </div>\n  <div style=\"background-color: rgb(241, 241, 241);height:100%\">\n    <div style=\"display: flex;\">\n      <ion-segment style=\"display:flex; align-items:center;justify-content:space-around;padding:0 5px;width:100%;\"\n        (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"Acceuil\">\n          Acceuil\n        </ion-segment-button>\n        <ion-segment-button value=\"A propos\">\n          A propos\n        </ion-segment-button>\n        <ion-segment-button value=\"Photos\">\n          Photos\n        </ion-segment-button>\n      </ion-segment>\n      <button>\n        Message\n      </button>\n      <ng-container *ngIf=\"followedPage===true;else notFollowed\">\n        <button style=\"color:green;font-weight:bold\" (click)=\"toggleFollow()\">\n          Suivre\n        </button>\n      </ng-container>\n      <ng-template #notFollowed>\n        <button style=\"background-color: green;color:white\" (click)=\"toggleFollow()\">\n          Suivie\n        </button>\n      </ng-template>\n      <button style=\"position: relative;width:20px;height:15px;margin-top:12px\">\n        <div  style=\"position:relative;\">\n          <ion-icon (click)=\"openDropDown()\" (blur)=\"openDropDown()\" name=\"ellipsis-horizontal\"\n            style=\"display: flex;justify-content:center;align-items:center;height:15px\"></ion-icon>\n          <ng-container *ngIf=\"dropDown\">\n            <div\n              style=\"font-size:15px;position: absolute;background-color:rgb(243, 243, 243);padding:10px;border-radius:15px;transform:translateX(-210px) translateY(20px);display:flex;flex-direction:column;width:210px;color:rgb(168, 168, 168);box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.562);justify-content:space-around;align-items:flex-start;\">\n              <span>Rechercher dans la page</span>\n              <hr>\n              <ion-item (click)=\"getAllfriends()\">\n                <ion-label>Inviter des amis</ion-label>\n                <ion-select [(ngModel)]=\"selectedFriends\" multiple=\"true\" ok-text=\"okey!\" cancel-text=\"Nah\">\n                  <ion-select-option *ngFor=\"let friend of friends\" value=\"{{friend?.userFollowed._id}}\">\n                    {{friend?.userFollowed.name}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <hr>\n              <span>Signaler la page</span>\n              <hr>\n              <span>Bloquer la page</span>\n            </div>\n          </ng-container>\n        </div>\n      </button>\n\n    </div>\n\n    <div *ngIf=\"selected === 'Acceuil'\">\n      <div  *ngIf=\"page?.createdBy._id === userid\"\n        style=\"display:flex;align-items:center;background-color:rgb(226, 226, 226);padding:8px 10px;margin:5px;border-radius:25px;justify-content:space-between;margin:20px 10px\">\n        <input placeholder=\"Exprimez vous!\" type=\"text\" style=\"border: none;background-color:unset\">\n        <img (click)=\"openShareModal()\" style=\"width:20px;height:20px;\" src=\"../../../assets/svg/black-add-page.svg\" alt=\"\">\n      </div>\n      <div style=\"padding: 10px;font-size:12px;color:rgb(107, 107, 107);background-color:white;margin:10px 0\" *ngFor=\"let post of posts\">\n        <div style=\"display: flex;align-items:center\">\n          <img\n            style=\"width:30px;height:30px;margin-right:10px;background-color:rgb(212, 212, 212);border-radius:50%;padding:5px\"\n            src=\"../../../assets/svg/person-icon.svg\" alt=\"\">\n          <div style=\"display: flex;flex-direction:column;justify-content:space-around\">\n            <span>{{page?.name}} </span>\n           <!--\n <span style=\"font-size:8px;\">Coach sportif</span>\n           -->\n          </div>\n        </div>\n        <div style=\"line-height: 20px;;margin:10px 0\">\n          {{post?.content }}\n        </div>\n        <div style=\"display: flex; justify-content:space-between;padding:5px 15px;width:100%\">\n          <div style=\"display: flex;align-items:center\">\n            <span style=\"margin-right:10px\">983</span>\n            <img style=\"width: 20px;height:20px;\" src=\"../../../assets/iconPost/icon_like.svg\" alt=\"\">\n          </div>\n          <div style=\"display: flex;align-items:center\">\n            <div style=\"display: flex;align-items:center;margin-right:15px\">\n              <span style=\"margin-right:10px\">175</span>\n              <img style=\"width: 20px;height:20px;\" src=\"../../../assets/iconPost/icon_comment.svg\" alt=\"\">\n            </div>\n            <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/iconPost/icon_bookmark.svg\"\n              alt=\"\">\n            <img style=\"width: 20px;height:20px;\" src=\"../../../assets/svg/share-event.svg\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"selected === 'A propos'\">\n      <ion-icon name=\"create\"  class=\"createIcom\" *ngIf=\"page?.createdBy._id === userid\"\n        (click)=\"update === false ? update = true: update = false\"></ion-icon>\n      <div *ngIf=\"update=== false\">\n        <div style=\"font-size: 17px;font-weight:bold;margin:10px 0 35px 15px \">\n          <span style=\"margin-right:10px\">300</span>\n          <span>Participants</span>\n        </div>\n        <div style=\"margin: 15px;\">\n          <div>\n            <span style=\"font-size: 17px;font-weight:bold\">Page :</span>\n            <span>{{page?.name}}</span>\n          </div>\n          <div>\n            <span style=\"font-size: 17px;font-weight:bold\">Lieu :</span>\n            <span>Adresse</span>\n          </div>\n          <div>\n            <span style=\"font-size: 17px;font-weight:bold\">Contact :</span>\n            <span>88 888 888</span>\n          </div>\n          <div>\n            <span style=\"font-size: 17px;font-weight:bold\">Site web :</span>\n            <span>www.sportup.com</span>\n          </div>\n          <div>\n            <span style=\"font-size: 17px;font-weight:bold\">Email :</span>\n            <span>sportup@gmail.com</span>\n          </div>\n        </div>\n        <ng-container *ngIf=\"more===false;else showmore\">\n          <div style=\"margin-left: 15px; white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\">\n            <span style=\"font-size: 17px;font-weight:bold;\">Description :</span>\n            <span>\n              {{page?.description}}\n            </span>\n          </div>\n          <span style=\"margin-left:15px;font-weight:bold;font-size:10px\" (click)=\"toggleShowMore()\">voir plus</span>\n        </ng-container>\n        <ng-template #showmore>\n          <div style=\"margin-left: 15px; \">\n            <span style=\"font-size: 17px;font-weight:bold;\">Description :</span>\n            <span>\n              {{page?.description}}\n            </span>\n          </div><span style=\"margin-left:15px;font-weight:bold;font-size:10px\" (click)=\"toggleShowMore()\">voir\n            moins</span>\n        </ng-template>\n      </div>\n\n      <div *ngIf=\"update\">\n        <div style=\"margin: 15px;\">\n          <div>\n            <span style=\"font-size: 17px;font-weight:bold\">Page :</span>\n            <input [(ngModel)]=\"page.name\" class=\"input\"  placeholder=\"{{page?.name}}\" />\n          </div>\n          <div>\n            <span style=\"font-size: 17px;font-weight:bold\">Lieu :</span>\n            <input [(ngModel)]=\"page.address\" class=\"input\"  placeholder=\"Adresse\"/>\n          </div>\n          <div>\n            <span style=\"font-size: 17px;font-weight:bold\">Contact :</span>\n            <input [(ngModel)]=\"page.phone\" class=\"input\"  placeholder=\"88 888 888\"/>\n          </div>\n          <div>\n            <span style=\"font-size: 17px;font-weight:bold\">Site web :</span>\n            <input [(ngModel)]=\"page.website\"  class=\"input\"  placeholder=\"www.sportup.com\"/>\n          </div>\n          <div>\n            <span style=\"font-size: 17px;font-weight:bold\">Email :</span>\n            <input [(ngModel)]=\"page.email\"  class=\"input\"  placeholder=\"sportup@gmail.com\" />\n          </div>\n        </div>\n        <ng-container *ngIf=\"more===false;else showmore\">\n          <div style=\"margin-left: 15px; white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\">\n            <span style=\"font-size: 17px;font-weight:bold;\">Description :</span>\n            <input [(ngModel)]=\"page.description\"  class=\"input\" placeholder=\"{{page?.description}}\" />\n          </div>\n          <span style=\"margin-left:15px;font-weight:bold;font-size:10px\" (click)=\"toggleShowMore()\">voir plus</span>\n        </ng-container>\n        <ng-template #showmore>\n          <div style=\"margin-left: 15px; \">\n            <span style=\"font-size: 17px;font-weight:bold;\">Description :</span>\n            <span>\n              {{page?.description}}\n            </span>\n          </div><span style=\"margin-left:15px;font-weight:bold;font-size:10px\" (click)=\"toggleShowMore()\">voir\n            moins</span>\n        </ng-template>\n<div style=\"display: flex;justify-content:flex-end \">\n  <img (click)=\"updatePage()\" style=\"width: 30px;height:30px;margin: 20px 10px 0 0;\" src=\"../../../../assets/svg/green-tick.svg\" alt=\"\">\n  <img (click)=\"update = false\" style=\"width: 30px;height:30px;margin: 20px 10px 0 0;\" src=\"../../../../assets/svg/red-x.svg\" alt=\"\">\n</div>\n\n      </div>\n\n    </div>\n    <div *ngIf=\"selected === 'Photos'\">\n      <div style=\"display: flex;margin:10px\">\n        <div style=\"display: flex;\">\n          <img style=\"border-radius:15px;height: 144.5px;width:144.5px;object-fit:cover\" src={{photos[0].url}} alt=\"\">\n          <img style=\"border-radius:15px;height: 144.5px;width:144.5px;margin-left:10px;object-fit:cover\"\n            src={{photos[1].url}} alt=\"\">\n        </div>\n        <div style=\"display: flex;flex-direction:column\">\n          <img style=\"border-radius:15px;height: 67px;width:67px;margin:0 0 10px 10px;object-fit:cover\"\n            src={{photos[2].url}} alt=\"\">\n          <img style=\"border-radius:15px;height: 67px;width:67px;margin-left:10px;object-fit:cover\"\n            src={{photos[3].url}} alt=\"\">\n        </div>\n      </div>\n      <div style=\"display: flex;flex-wrap:wrap;width:100%;margin-left:10px\">\n        <div *ngFor=\"let photo of photos\">\n          <img style=\"width: 67px;height:67px;border-radius:15px;margin-right:10px;object-fit:cover\" [src]=\"photo.url\"\n            alt=\"\">\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_layouts_community_show-page_show-page_module_ts.js.map