(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_kids_comments-kids_comments-kids_module_ts"],{

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

/***/ 93872:
/*!****************************************************************************!*\
  !*** ./src/app/layouts/kids/comments-kids/comments-kids-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsKidsPageRoutingModule": () => (/* binding */ CommentsKidsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _comments_kids_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments-kids.page */ 2756);




const routes = [
    {
        path: '',
        component: _comments_kids_page__WEBPACK_IMPORTED_MODULE_0__.CommentsKidsPage
    }
];
let CommentsKidsPageRoutingModule = class CommentsKidsPageRoutingModule {
};
CommentsKidsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommentsKidsPageRoutingModule);



/***/ }),

/***/ 15968:
/*!********************************************************************!*\
  !*** ./src/app/layouts/kids/comments-kids/comments-kids.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsKidsPageModule": () => (/* binding */ CommentsKidsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _comments_kids_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments-kids-routing.module */ 93872);
/* harmony import */ var _comments_kids_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments-kids.page */ 2756);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var src_app_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/header/header.component */ 84456);
/* harmony import */ var src_app_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/component/footer/footer.component */ 63359);










let CommentsKidsPageModule = class CommentsKidsPageModule {
};
CommentsKidsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _comments_kids_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommentsKidsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule
        ],
        declarations: [_comments_kids_page__WEBPACK_IMPORTED_MODULE_1__.CommentsKidsPage, src_app_component_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, src_app_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent]
    })
], CommentsKidsPageModule);



/***/ }),

/***/ 2756:
/*!******************************************************************!*\
  !*** ./src/app/layouts/kids/comments-kids/comments-kids.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentsKidsPage": () => (/* binding */ CommentsKidsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_comments_kids_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./comments-kids.page.html */ 64227);
/* harmony import */ var _comments_kids_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments-kids.page.scss */ 65994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Shared/Service/comment.service */ 49821);
/* harmony import */ var _Shared_Model_Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Shared/Model/Comment */ 73070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);



/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */







let CommentsKidsPage = class CommentsKidsPage {
    constructor(commentService, modalController, userService) {
        this.commentService = commentService;
        this.modalController = modalController;
        this.userService = userService;
        this.comments = [];
        this.apiImgUser = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiImg}User/`;
        this.title = "Comments";
        this.updateCom = false;
        this.comment = new _Shared_Model_Comment__WEBPACK_IMPORTED_MODULE_3__.Comment();
        this.apiImg = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiImg}users/`;
    }
    ngOnInit() {
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            contentControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
        });
        this.getCommentByPost();
    }
    updateComment(comment) {
        this.updateCom = true;
        this.selectedCom = comment;
    }
    sendComment(post) {
        this.comments = [];
        // eslint-disable-next-line no-underscore-dangle
        return this.commentService.addComment(this.comment, post._id).subscribe(res => {
            this.comment = new _Shared_Model_Comment__WEBPACK_IMPORTED_MODULE_3__.Comment();
            this.getCommentByPost();
        });
    }
    sendCommentUpdate() {
        this.updateCom = false;
        this.upcom = document.getElementById("contentCom").value;
        this.selectedCom.content = this.upcom;
        this.commentService.updateComments(this.selectedCom).subscribe(res => {
        });
    }
    dismissModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    getCommentByPost() {
        // eslint-disable-next-line no-underscore-dangle
        this.commentService.getCommentByService(this.post._id).subscribe(arg => {
            this.comments = arg;
        });
    }
    deleteComment(idcom) {
        this.commentService.deleteComment(idcom).subscribe(arg => {
        });
        this.getCommentByPost();
    }
};
CommentsKidsPage.ctorParameters = () => [
    { type: _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_2__.CommentService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService }
];
CommentsKidsPage.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    comments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }],
    userid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
CommentsKidsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-comments-kids',
        template: _raw_loader_comments_kids_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_comments_kids_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommentsKidsPage);



/***/ }),

/***/ 65994:
/*!********************************************************************!*\
  !*** ./src/app/layouts/kids/comments-kids/comments-kids.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item.commentaire {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: fixed;\n  display: block;\n  width: 97%;\n  margin: 5px;\n  --background: rgba(128, 128, 128, 0.507);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnRzLWtpZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsU0FBQTtFQUNFLE9BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHdDQUFBO0FBQUoiLCJmaWxlIjoiY29tbWVudHMta2lkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS5jb21tZW50YWlyZVxyXG57XHJcbiAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MDcpO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 64227:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/comments-kids/comments-kids.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title style=\"color: white;\"\n     >Comments</ion-title\n    >\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismissModal()\"><ion-icon name=\"close-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <ion-list *ngFor=\"let item of comments\">\n    <ion-item-sliding>\n      <ng-container *ngIf=\"item?.user?._id===userid; else dislikedTemp\">\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\">\n            <ion-icon\n              slot=\"icon-only\"\n              (click)=\"deleteComment(item._id)\"\n              name=\"trash\"\n            ></ion-icon>\n          </ion-item-option>\n          <ion-item-option>\n            <ion-icon\n              slot=\"icon-only\"\n              name=\"create-outline\"\n              (click)=\"updateComment(item)\"\n            ></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n\n        <ion-item>\n          <ion-avatar slot=\"end\">\n            <ion-img [src]=\"apiImgUser+item?.user?.photo\"></ion-img>\n          </ion-avatar>\n          <ion-label style=\"text-align: end\">\n            <h2>{{item?.user?.name}} </h2>\n            <p>{{item?.content}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item-options side=\"start\">\n          <ion-item-option color=\"danger\">\n            <ion-icon slot=\"icon-only\" name=\"person-outline\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ng-container>\n\n      <ng-template #dislikedTemp>\n        <ion-item>\n          <ion-avatar slot=\"start\">\n            <ion-img [src]=\"apiImgUser+item?.user$.photo\"></ion-img>\n          </ion-avatar>\n          <ion-label>\n            <h2>{{item?.user?.name}} </h2>\n            <p>{{item?.content}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item-options side=\"start\">\n          <ion-item-option color=\"danger\">\n            <ion-icon slot=\"icon-only\" name=\"person-outline\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ng-template>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-item class=\"commentaire\" [formGroup]=\"commentForm\">\n    <ion-col size=\"8\" style=\"text-align: start\">\n      <ng-container *ngIf=\"updateCom; else noupdate\">\n        <ion-input\n          class=\"commentaire\"\n          type=\"text\"\n          value=\"{{selectedCom.content}}\"\n          id=\"contentCom\"\n          name=\"contentCom\"\n          placeholder=\"Ecrire un commentaire\"\n        ></ion-input>\n      </ng-container>\n\n      <ng-template #noupdate>\n        <ion-input\n          class=\"commentaire\"\n          type=\"text\"\n          [(ngModel)]=\"comment.content\"\n          formControlName=\"contentControl\"\n          placeholder=\"Ecrire un commentaire\"\n        ></ion-input>\n      </ng-template>\n    </ion-col>\n    <ion-col size=\"4\" style=\"text-align: end\">\n      <ng-container *ngIf=\"updateCom; else noupdatebutton\">\n        <ion-button\n          class=\"commentaire\"\n          (click)=\"sendCommentUpdate()\"\n          shape=\"round\"\n          fill=\"clear\"\n          size=\"small \"\n        >\n          <ion-icon name=\"send\"></ion-icon>\n        </ion-button>\n      </ng-container>\n      <ng-template #noupdatebutton>\n        <ion-button\n          class=\"commentaire\"\n          [hidden]=\"commentForm.invalid\"\n          (click)=\"sendComment(post)\"\n          shape=\"round\"\n          fill=\"clear\"\n          size=\"small \"\n        >\n          <ion-icon name=\"send\"></ion-icon>\n        </ion-button>\n      </ng-template>\n    </ion-col>\n  </ion-item>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_kids_comments-kids_comments-kids_module_ts.js.map