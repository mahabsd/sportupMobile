(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_home_one-status_one-status_module_ts"],{

/***/ 54039:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/home/one-status/one-status-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneStatusPageRoutingModule": () => (/* binding */ OneStatusPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _one_status_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-status.page */ 56246);




const routes = [
    {
        path: '',
        component: _one_status_page__WEBPACK_IMPORTED_MODULE_0__.OneStatusPage
    }
];
let OneStatusPageRoutingModule = class OneStatusPageRoutingModule {
};
OneStatusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OneStatusPageRoutingModule);



/***/ }),

/***/ 46970:
/*!**************************************************************!*\
  !*** ./src/app/layouts/home/one-status/one-status.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneStatusPageModule": () => (/* binding */ OneStatusPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _one_status_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-status-routing.module */ 54039);
/* harmony import */ var _one_status_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./one-status.page */ 56246);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/component.module */ 55051);








let OneStatusPageModule = class OneStatusPageModule {
};
OneStatusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _one_status_routing_module__WEBPACK_IMPORTED_MODULE_0__.OneStatusPageRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_one_status_page__WEBPACK_IMPORTED_MODULE_1__.OneStatusPage]
    })
], OneStatusPageModule);



/***/ }),

/***/ 56246:
/*!************************************************************!*\
  !*** ./src/app/layouts/home/one-status/one-status.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneStatusPage": () => (/* binding */ OneStatusPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_one_status_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./one-status.page.html */ 75169);
/* harmony import */ var _one_status_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./one-status.page.scss */ 20732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Shared/Service/post.service */ 91820);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);








let OneStatusPage = class OneStatusPage {
    constructor(postService, userservice, activatedRoute) {
        this.postService = postService;
        this.userservice = userservice;
        this.activatedRoute = activatedRoute;
        this.apiImgUser = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiImg}User/`;
        this.apiImg = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiImg}Post/`;
        this.comment = new Comment();
        this.posts = [];
        this.post = [];
        this.comments = [];
        this.user = [];
        this.mediafiles = [];
        this.showComment = false;
        this.id = this.activatedRoute.snapshot.params.id;
    }
    ngOnInit() {
        this.getMe();
        this.getPost();
    }
    showComments() {
        this.showComment = true;
    }
    hideComments() {
        this.showComment = false;
    }
    getMe() {
        this.userservice.getMe().subscribe((res) => {
            this.isUserConnected = res.data.data._id;
            this.user$ = res.data.data;
        });
    }
    getPost() {
        this.postService.getPost(this.id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.post = yield res;
            this.comments = res.comments;
            this.mediafiles = res.mediafiles;
            console.log(this.mediafiles);
            this.user = res.user;
        }));
    }
};
OneStatusPage.ctorParameters = () => [
    { type: _Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_3__.PostService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
OneStatusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-one-status',
        template: _raw_loader_one_status_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_one_status_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OneStatusPage);



/***/ }),

/***/ 20732:
/*!**************************************************************!*\
  !*** ./src/app/layouts/home/one-status/one-status.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".iconstyle {\n  height: 40% !important;\n}\n\n#first {\n  width: 95%;\n  border-radius: 10px;\n  margin: 5px 0 5px 10px;\n  object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZS1zdGF0dXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFDQztFQUNDLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFFRiIsImZpbGUiOiJvbmUtc3RhdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uc3R5bGV7XG4gIGhlaWdodDogNDAlICFpbXBvcnRhbnQ7XG59XG4gI2ZpcnN0e1xuICB3aWR0aDogOTUlO1xuICBib3JkZXItcmFkaXVzOjEwcHg7XG4gIG1hcmdpbjo1cHggMCA1cHggMTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gfVxuIl19 */");

/***/ }),

/***/ 75169:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/home/one-status/one-status.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [isStatus]=\"true\"> </app-header>\n\n<ion-content>\n<div *ngFor=\"let file of mediafiles\" >\n  <img id=\"first\" [src]=apiImg+file?.file_name alt=\"\">\n  <!-- <div style=\"display: flex;align-items:center;justify-content:space-evenly\">\n    <ng-container *ngIf=\"!post?.likedBy.includes(user?._id) || !post.post?.likedBy.includes(user?._id); else dislikedTemp\">\n      <ion-button style=\"display: flex;align-items:center\" (dblclick)=\"showReactions($event)\" (click)=\"like(post, $event.target)\" shape=\"round\" fill=\"clear\"\n        size=\"large\">\n        <img src=\"../../../../assets/iconPost/{{ post?.iconLike || post.post?.iconLike }}.svg\" class=\"iconstyle\" id=\"icon_liked\" />\n        <span style=\"color:#7F867D;font-size:14px\">{{ post?.likes || post.post?.likes }} </span>\n      </ion-button>\n    </ng-container>\n    <ng-template #dislikedTemp>\n      <ion-button style=\"display: flex;align-items:center\" (dblclick)=\"showReactions($event)\" (click)=\"disLike(post, $event.target)\" shape=\"round\"\n        fill=\"clear\" size=\"large\">\n        <img src=\"../../../../assets/iconPost/{{ post?.iconLike || post.post?.iconLike }}.svg\" id=\"icon_like\" />\n        <span style=\"color:#7F867D;font-size:14px\">{{ post?.likes || post.post?.likes }} </span>\n      </ion-button>\n    </ng-template>\n\n      <ion-button style=\"display: flex;align-items:center\" (click)=\"presentModal(post)\" shape=\"round\" fill=\"clear\" size=\"large\">\n        <img class=\"iconstyle\" src=\"../../../../assets/iconPost/icon_comment.svg\" />\n        <span style=\"color:#7F867D;font-size:14px\">{{ comments?.length }}</span>\n      </ion-button>\n      <ng-container *ngIf=\"!bookmarked; else unbook\">\n        <ion-button style=\"display: flex;align-items:center\" (click)=\"bookmark(post)\" shape=\"round\" fill=\"clear\" size=\"large \">\n          <img class=\"iconstyle\" src=\"../../../../assets/iconPost/icon_bookmark.svg\" />\n          <span style=\"color:#7F867D;font-size:14px\">{{ post?.favorisNb }}</span>\n        </ion-button>\n      </ng-container>\n      <ng-template #unbook>\n        <ion-button style=\"display: flex;align-items:center\" (click)=\"unBookmark(post)\" shape=\"round\" fill=\"clear\" size=\"large \">\n          <img class=\"iconstyle\" src=\"../../../../assets/iconPost/icon_bookmarked.svg\" />\n          <span style=\"color:#7F867D;font-size:14px\">{{ post?.favorisNb }}</span>\n        </ion-button>\n      </ng-template>\n      <ion-button style=\"display: flex;align-items:center\" (click)=\"share(post)\" shape=\"round\" fill=\"clear\" size=\"large \">\n        <img class=\"iconstyle\" src=\"../../../../assets/iconPost/icon_share.svg\" />\n        <span style=\"color:#7F867D;font-size:14px\">{{ post?.sharedeNb }}</span>\n      </ion-button>\n  </div>\n  <div style=\"width: 100%;\">\n    <div style=\"display: flex;align-items:center\">\n      <ng-container *ngIf=\"showComment===false; else not\" >\n        <ng-container *ngIf=\"comments.length!==0\"  style=\"position: relative;\">\n          <p (click)=\"showComments()\" style=\"display:flex;align-items:center;font-size:12px;position:absolute;right:20px;color:#7F867D;transform:translateY(-30px)\">Afficher plus de commentaires <ion-icon name=\"chevron-forward-outline\"></ion-icon></p>\n        </ng-container>\n        <ng-container *ngIf=\"comments.length!==0\" >\n          <div style=\"display: flex;align-items:center;padding-top:15px\" >\n            <div style=\"display: flex;flex-direction:column;align-items:center\">\n              <img style=\"width: 22px; height:22px;border-radius:50%;object-fit:cover\" src={{apiImgUser+comments[0].user.photo}} alt=\"\">\n              <span style=\"font-size: 12px;\">{{comments[0].user.name}}</span>\n            </div>\n            <span style=\"background-color:#EEEFEF ;margin:2px;padding:7px 10px;width:220px;height:30px;border-radius:15px;text-align:start;text-overflow:ellipsis;overflow:hidden;white-space: nowrap;font-size:12px\">{{comments[0].content}}</span>\n          </div>\n        </ng-container>\n      </ng-container>\n      <ng-template #not>\n        <p (click)=\"hideComments()\" style=\"display:flex;align-items:center;font-size:12px;position:absolute;right:20px;color:#7F867D\">Afficher moins de commentaires <ion-icon name=\"chevron-down-outline\"></ion-icon></p>\n      </ng-template>\n    </div>\n    <div style=\"margin-top: 10px;\">\n      <ng-container *ngIf=\"showComment===true\">\n        <div style=\"display: flex;align-items:center;margin:3px 0\" *ngFor=\"let item of comments.slice().reverse()\" >\n          <div style=\"display: flex;flex-direction:column;align-items:center\">\n            <img style=\"width: 22px; height:22px;border-radius:50%;object-fit:cover\" src={{apiImgUser+item.user.photo}} alt=\"\">\n            <span style=\"font-size: 12px;\">{{item.user.name}}</span>\n          </div>\n          <span style=\"background-color:#EEEFEF ;margin:2px;padding:7px 10px;width:220px;height:30px;border-radius:15px;text-align:start;text-overflow:ellipsis;overflow:hidden;white-space: nowrap;font-size:12px\">{{item.content}}</span>\n        </div>\n      </ng-container>\n    </div>\n    <div style=\"display: flex;justify-content:space-between;align-items:center; background-color:#EEEFEF; border-radius:10px;margin:10px 0 20px 0\">\n      <div style=\"display: flex;align-items:center;padding:0px 10px\">\n        <img style=\"width: 30px; height:30px;border-radius:50%;object-fit:cover\"  src={{apiImgUser+user.photo}} routerLink=\"/tabs/layouts/coachprofile/{{ post.user.id || post.post.user.id }}/me\" />\n        <input placeholder=\"Ecrivez un commentaire ...\" style=\"margin-left:5px;font-size:15px;border: none; background-color:#EEEFEF;margin-right:10px;padding:10px\" type=\"text\">\n      </div>\n      <div style=\"display: flex;\">\n        <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/pics.svg\" alt=\"\">\n        <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/camera.svg\" alt=\"\">\n        <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/gif.svg\" alt=\"\">\n        <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/attach.svg\" alt=\"\">\n        <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/mic.svg\" alt=\"\">\n      </div>\n    </div>\n  </div> -->\n</div>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_home_one-status_one-status_module_ts.js.map