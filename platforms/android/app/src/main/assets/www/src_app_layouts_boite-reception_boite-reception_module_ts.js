(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_boite-reception_boite-reception_module_ts"],{

/***/ 44981:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule),
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); };
Ng2SearchPipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-search-filter.js.map

/***/ }),

/***/ 75030:
/*!****************************************************!*\
  !*** ./src/app/Shared/Service/follower.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowerService": () => (/* binding */ FollowerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 95920);
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

/***/ 17777:
/*!***************************************************************************!*\
  !*** ./src/app/layouts/boite-reception/boite-reception-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoiteReceptionPageRoutingModule": () => (/* binding */ BoiteReceptionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _boite_reception_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boite-reception.page */ 54356);




const routes = [
    {
        path: '',
        component: _boite_reception_page__WEBPACK_IMPORTED_MODULE_0__.BoiteReceptionPage
    }
];
let BoiteReceptionPageRoutingModule = class BoiteReceptionPageRoutingModule {
};
BoiteReceptionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BoiteReceptionPageRoutingModule);



/***/ }),

/***/ 74106:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/boite-reception/boite-reception.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoiteReceptionPageModule": () => (/* binding */ BoiteReceptionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _boite_reception_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boite-reception-routing.module */ 17777);
/* harmony import */ var _boite_reception_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boite-reception.page */ 54356);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 44981);









let BoiteReceptionPageModule = class BoiteReceptionPageModule {
};
BoiteReceptionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _boite_reception_routing_module__WEBPACK_IMPORTED_MODULE_0__.BoiteReceptionPageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule
        ],
        declarations: [_boite_reception_page__WEBPACK_IMPORTED_MODULE_1__.BoiteReceptionPage]
    })
], BoiteReceptionPageModule);



/***/ }),

/***/ 54356:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/boite-reception/boite-reception.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoiteReceptionPage": () => (/* binding */ BoiteReceptionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_boite_reception_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./boite-reception.page.html */ 93559);
/* harmony import */ var _boite_reception_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boite-reception.page.scss */ 25434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var src_app_Shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Service/follower.service */ 75030);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Service/event.service */ 34489);
/* harmony import */ var src_app_shared_Service_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Service/chat.service */ 11195);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-socket-io */ 75421);
/* harmony import */ var _component_modal_show_image_show_image_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/modal/show-image/show-image.page */ 96190);












let BoiteReceptionPage = class BoiteReceptionPage {
    constructor(userservice, followerService, eventService, chatService, socket, modalCtrl) {
        this.userservice = userservice;
        this.followerService = followerService;
        this.eventService = eventService;
        this.chatService = chatService;
        this.socket = socket;
        this.modalCtrl = modalCtrl;
        this.hideicon = false;
        this.users = [];
        this.apiImgUser = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiImg}User/`;
        this.apiImg = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.apiImg}Post/`;
        this.users2 = [];
        this.page = 8;
        this.items = [];
        this.numTimesLeft = 5;
        this.userid = '60f983fb06d9b3846c3d1030';
        this.addMoreItems();
    }
    ngOnInit() {
        // this.getAllusers()
        //this.getMe();
        this.getfollow();
        this.socket.connect();
        this.socket.emit('message', { msg: 'hey' });
        this.socket.fromEvent('message').subscribe((res) => {
            this.getMe();
        });
    }
    logDrag(i) {
        let a = 0;
        a = a + 1;
        this.hideicon = true;
        this.selecteditemIndex = i;
        if (this.hideicon) {
        }
    }
    getMe() {
        this.userservice.getMe().subscribe((res) => {
            this.user$ = res.data.data;
            this.getNumberNonreadChats();
        });
    }
    getAllusers() {
        this.userservice.getRoleUsers().subscribe((res) => {
        });
    }
    getfollow(event) {
        this.userservice.getMe().subscribe((response) => {
            this.chatService.getAllChatsByuser(response.data.data.id).subscribe((res) => {
                this.users = res;
                if (event) {
                    event.target.complete();
                }
            });
        }, (error) => {
            console.error(error);
        });
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            this.page = this.page * 2;
            this.getfollow();
            this.numTimesLeft -= 1;
            event.target.complete();
            this.users2 = [];
        }, 500);
    }
    addMoreItems() {
        for (let i = 0; i < 10; i++)
            this.items.push(i);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    logScrolling(event) {
        if (event.detail.deltaY < 0) {
            this.isScrollTop = false;
        }
        else {
            this.isScrollTop = true;
        }
        this.eventService.sendMessage(this.isScrollTop);
    }
    updateSeenMsgs(item) {
        item.messages[item.messages.length - 1].seen = true;
        if (item.seenuser1.user1 === this.user$) {
            item.seenuser1.lastVisit = Date();
            item.seenuser1.seen = true;
        }
        else if (item.seenuser2.user2 === this.user$) {
            item.seenuser2.lastVisit = Date();
            item.seenuser2.seen = true;
        }
        this.chatService.updateChat(item._id, item).subscribe(res => console.log(res));
    }
    getNumberNonreadChats() {
        this.notseenMessagesNumber = 0;
        this.chatService.getAllChatsByuser(this.userid).subscribe(res => {
            res.map(msg => {
                if (msg.messages[msg.messages.length - 1].userSender !== this.userid) {
                    if (msg.seenuser1.user1 === this.userid) {
                        if (msg.seenuser1.lastVisit < msg.messages[msg.messages.length - 1].createdDate) {
                            this.notseenMessagesNumber = this.notseenMessagesNumber + 1;
                        }
                    }
                    else if (msg.seenuser2.user2 === this.userid) {
                        if (msg.seenuser2.lastVisit < msg.messages[msg.messages.length - 1].createdDate) {
                            this.notseenMessagesNumber = this.notseenMessagesNumber + 1;
                        }
                    }
                }
            });
        });
    }
    openSearch() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _component_modal_show_image_show_image_page__WEBPACK_IMPORTED_MODULE_7__.ShowImagePage,
                cssClass: ''
            });
            return yield modal.present();
        });
    }
};
BoiteReceptionPage.ctorParameters = () => [
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: src_app_Shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__.FollowerService },
    { type: src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_4__.EventService },
    { type: src_app_shared_Service_chat_service__WEBPACK_IMPORTED_MODULE_5__.ChatService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__.Socket },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController }
];
BoiteReceptionPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonInfiniteScroll,] }]
};
BoiteReceptionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-boite-reception',
        template: _raw_loader_boite_reception_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_boite_reception_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BoiteReceptionPage);



/***/ }),

/***/ 25434:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/boite-reception/boite-reception.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nbutton {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: -0.2px;\n  font-size: 16px;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 320px;\n  padding: 16px;\n  background-color: #EBECF0;\n  text-shadow: 1px 1px 0 #FFF;\n}\n\nbutton {\n  color: #61677C;\n  font-weight: bold;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  font-weight: 800;\n}\n\nbutton:active {\n  box-shadow: inset 1px 1px 2px #BABECC, inset -1px -1px 2px #FFF;\n}\n\nbutton.unit {\n  border-radius: 8px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 8px;\n  font-size: 19.2px;\n  width: 90px;\n  height: 30px;\n}\n\nbutton.unit .icon {\n  margin-right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #247238;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg, #247238, #247238, #8EBF25, #8EBF25);\n}\n\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label,\n.slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n\n.HeaderFilter {\n  background-color: #e4e4e4;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.item,\n.item-divider {\n  border-color: red;\n}\n\n.myItem {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.item-background-color {\n  --ion-item-background: #eee;\n  margin: 10px auto;\n  --min-height: 63px;\n  border-radius: 10px;\n  border-left: 4px solid green;\n}\n\n.item-background-color2 {\n  --min-height:73px;\n}\n\nion-searchbar {\n  height: 1px;\n  margin-top: 7%;\n  margin-bottom: 7%;\n  padding-right: 63px;\n}\n\n.bold {\n  font-weight: bolder;\n  color: black !important;\n}\n\n.notBold {\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvaXRlLXJlY2VwdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFJQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFGRjs7QUFZQTtFQUNFLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQVRNO0FBQVI7O0FBWUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBZk07RUFnQk4sb0JBQUE7RUFDQSxhQWpCTTtFQWtCTix5QkFoQlM7RUFpQlQsMkJBQUE7QUFURjs7QUFZQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFXRTtFQUNFLCtEQUFBO0FBVEo7O0FBWUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVhKOztBQWFJO0VBQ0UsZUFBQTtBQVhOOztBQWlCRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFkSjs7QUFpQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQWZKOztBQWtCRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQWhCSjs7QUFvQkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFqQkY7O0FBb0JBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxZQUFBO0FBakJGOztBQW9CQTtFQUNFLFVBQUE7QUFqQkY7O0FBbUJFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFqQko7O0FBcUJBO0VBQ0UseUVBQUE7QUFsQkY7O0FBc0JBO0VBR0UsK0RBQUE7QUFyQkY7O0FBeUlBO0VBQ0UsV0FBQTtBQXRJRjs7QUEwSUE7RUFDRSxhQUFBO0FBdklGOztBQTBJQTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBdklGOztBQTJJQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUF4SUY7O0FBNElBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUF6SUY7O0FBNElBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBeklGOztBQTRJQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF6SUY7O0FBNElBLFlBQUE7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUExSUY7O0FBNklBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBMUlGOztBQTZJQSxhQUFBOztBQUNBOztFQUVFLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxzQ0FBQTtBQTFJRjs7QUE2SUEsU0FBQTs7QUFFQTtFQUNFLFVBQUE7QUEzSUY7O0FBZ0pBO0VBQ0UsY0FBQTtBQTdJRjs7QUFnSkE7RUFDRSxnQkFBQTtBQTdJRjs7QUFnSkE7RUFDRSxnQkFBQTtBQTdJRjs7QUFnSkE7RUFDRSx5QkFBQTtBQTdJRjs7QUFzSkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBbkpGOztBQXNKQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7QUFwSkY7O0FBdUpBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFwSkY7O0FBeUpBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXRKRjs7QUEwSkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQXZKRjs7QUEwSkE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQXZKRjs7QUEySkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQXhKRjs7QUEySkE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQXhKRjs7QUFnTUE7O0VBRUUsaUJBQUE7QUE3TEY7O0FBZ01BO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQTdMRjs7QUFpTUE7RUFDRSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBOUxGOztBQWtNQTtFQUVFLGlCQUFBO0FBaE1GOztBQW1NQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWhNRjs7QUFrTUE7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBL0xGOztBQWlNQTtFQUNFLG1CQUFBO0FBOUxGIiwiZmlsZSI6ImJvaXRlLXJlY2VwdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIGhlaWdodDogODAwcHg7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IERhcmtHcmVlbjsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIzI0NzIzOCwgIzI0NzIzOCwgICM4RUJGMjUsIzhFQkYyNSk7XG5cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4vLyBjc3MgYnV0dG9uXG4kcnVsZXI6IDE2cHg7XG4kY29sb3ItcmVkOiAjNzI2YjZiO1xuJGNvbG9yLWJnOiAjRUJFQ0YwO1xuJGNvbG9yLXNoYWRvdzogI0JBQkVDQztcbiRjb2xvci13aGl0ZTogI0ZGRjtcblxuYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcbiAgZm9udC1zaXplOiAkcnVsZXI7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAkcnVsZXI7XG4gIGJvcmRlci1yYWRpdXM6ICRydWxlcioyMDtcbiAgcGFkZGluZzogJHJ1bGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmc7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDAgJGNvbG9yLXdoaXRlO1xufVxuXG5idXR0b24ge1xuICBjb2xvcjogIzYxNjc3QztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJveC1zaGFkb3c6IC01cHggLTVweCAyMHB4ICRjb2xvci13aGl0ZSwgMXB4IDFweCA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG5cbiAgJjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4ICRjb2xvci1zaGFkb3csIGluc2V0IC0xcHggLTFweCAycHggJGNvbG9yLXdoaXRlO1xuICB9XG5cbiAgJi51bml0IHtcbiAgICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICAvL2JveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMnB4IDFweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCAkcnVsZXIvMjtcbiAgICBmb250LXNpemU6ICRydWxlcioxLjI7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuXG4gICAgLmljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICBpb24tY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jYXJkLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNiU7XG4gICAgZm9udC1zaXplOiAyLjBlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMGVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUyJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4ubXlGb290ZXIge1xuICBib3JkZXItcmFkaXVzOiAkcnVsZXIvMjtcbiAgcGFkZGluZy1ib3R0b206IDA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBib3gtc2hhZG93OiBpbnNldCAxcHggMXB4IDFweCAxcHggIzI0NzIzODtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgJHJ1bGVyKjI7XG4gIGZvbnQtc2l6ZTogJHJ1bGVyKjMuMjtcbiAgd2lkdGg6IDM0MHB4O1xufVxuXG4ubXlnYWxsZXJ5IHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGJvdHRvbTogNSU7XG5cbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMyNDcyMzg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIG9wYWNpdHk6IDUuMjtcbiAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI0NzIzOCwgIzI0NzIzOCwgIzhFQkYyNSwgIzhFQkYyNSk7XG5cbn1cblxuLnNoYWRvd2JveCB7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICM4RUJGMjU7XG4gIC8vIGJveC1zaGFkb3c6IDJweCAxcHggMXB4ICMyNDcyMzg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYsICNkZGQgNDAlLCAjY2NjKTtcbn1cblxuXG4vL1xuXG5cblxuLy8gLmNsZWFye1xuLy8gICBjbGVhcjogYm90aDtcbi8vIH1cblxuXG4vLyAuc2xpZGUtdG9nZ2xle1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyAuc2xpZGVtZW51e1xuLy8gICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4vLyAgIG1heC13aWR0aDogMTAwJTtcbi8vICAgbWFyZ2luOiA1MHB4IGF1dG87XG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyB9XG5cbi8vIC5zbGlkZW1lbnUgbGFiZWx7XG4vLyAgIHdpZHRoOiAyNSU7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gICBjb2xvcjogIzMzMztcbi8vICAgb3BhY2l0eTogMC4yO1xuXG4vLyB9XG5cblxuXG5cbi8vIC5zbGlkZW1lbnUgbGFiZWwgLmljb257XG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgYm9yZGVyOiBzb2xpZCAycHggIzMzMztcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBoZWlnaHQ6IDUwcHg7XG4vLyAgIHdpZHRoOiA1MHB4O1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyB9XG5cbi8vIC8qQmFyIFN0eWxlKi9cblxuXG5cbi8vIC5zbGlkZXIgLmJhcntcbi8vICAgd2lkdGg6IDUwJTtcbi8vICAgaGVpZ2h0OiA1cHg7XG4vLyAgIGJhY2tncm91bmQ6IHJnYigxLCA2OCwgMzcpO1xuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyB9XG5cbi8vIC8qQW5pbWF0aW9ucyovXG4vLyAuc2xpZGVtZW51IGxhYmVsLCAuc2xpZGVyIC5iYXIge1xuLy8gICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4vLyAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuLy8gICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbi8vIH1cblxuLy8gLypUb2dnbGUqL1xuXG4vLyAuc2xpZGVtZW51IC5zbGlkZS10b2dnbGU6Y2hlY2tlZCArIGxhYmVse1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gfVxuXG5cblxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0xOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAwOyB9XG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDMwJTsgfVxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0zOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiA1MCU7IH1cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tNDpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNzUlOyB9XG5cblxuXG4vLyBuYXYge1xuLy8gICBtYXgtd2lkdGg6MTAwJTtcbi8vICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCAjZmZmZmZmIDI1JSwgI2ZmZmZmZiA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4vLyAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyB9XG5cbi8vIG5hdiB1bCB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMjUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuLy8gICBib3gtc2hhZG93OiAwIDAgMjVweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gfVxuXG4vLyBuYXYgdWwgbGkge1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyB9XG5cbi8vIG5hdiB1bCBsaSBhIHtcbi8vICAgcGFkZGluZzoxMHB4O1xuLy8gICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbi8vICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuLy8gICBjb2xvcjogYmxhY2s7XG4vLyAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vIH1cblxuLy8gbmF2IHVsIGxpIGE6aG92ZXIge1xuLy8gICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4vLyAgIGNvbG9yOiAjOEVCRjI1O1xuLy8gfVxuXG5cbi5jbGVhciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5cbi5zbGlkZS10b2dnbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVtZW51IHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAxMHB4IDIwcHggMjBweCBhdXRvO1xuICAvLyBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2xpZGVtZW51IGxhYmVsIHtcbiAgd2lkdGg6IDI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiBncmVlbjtcbiAgb3BhY2l0eTogMC4yO1xuXG59XG5cbi5zbGlkZW1lbnUgbGFiZWw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnNsaWRlbWVudSBsYWJlbCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjMjQ3MjM4O1xufVxuXG4uc2xpZGVtZW51IGxhYmVsIC5pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjMjQ3MjM4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLypCYXIgU3R5bGUqL1xuXG4uc2xpZGVyIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zbGlkZXIgLmJhciB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKkFuaW1hdGlvbnMqL1xuLnNsaWRlbWVudSBsYWJlbCxcbi5zbGlkZXIgLmJhciB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4vKlRvZ2dsZSovXG5cbi5zbGlkZW1lbnUgLnNsaWRlLXRvZ2dsZTpjaGVja2VkK2xhYmVsIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuXG5cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMTpjaGVja2Vkfi5zbGlkZXIgLmJhciB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZH4uc2xpZGVyIC5iYXIge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTM6Y2hlY2tlZH4uc2xpZGVyIC5iYXIge1xuICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4uSGVhZGVyRmlsdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcbiAgLy8gaGVpZ2h0OiA1JTtcblxufVxuXG4uQmFkeUZpbHRlciB7fVxuXG5cblxuI2NhcnQtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4ub3V0dGVyLWJhZGdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHg7XG4gIC8vYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDY0cHg7XG59XG5cbi5pbm5lci1iYWRnZS1PSyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogLTIwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuXG59XG5cbi5pbm5lci1iYWRnZS1PSyAuYmFkZ2VDYW5jZWwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuXG4uaW5uZXItYmFkZ2UtS08ge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAtMTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5uZXItYmFkZ2UtS08gLmJhZGdlQ2FuY2VsIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogOHB4O1xuXG59XG5cbi5pbm5lci1iYWRnZS1UY2hhdCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIzcHg7XG4gIGxlZnQ6IC0yMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbm5lci1iYWRnZS1UY2hhdCAuYmFkZ2VDYW5jZWwge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cblxuXG5cblxuXG5cblxuXG5cbi8vIHVsIHtcbi8vICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuLy8gICB3aWR0aDogNTAwcHg7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udDogYm9sZCAyMHB4LzEuNSBIZWx2ZXRpY2EsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4vLyB9XG5cbi8vIGxpIGltZyB7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gICBtYXJnaW46IDAgMTVweCAwIDA7XG4vLyB9XG5cbi8vIGxpIHAge1xuLy8gICBmb250OiAyMDAgMTJweC8xLjUgR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbi8vIH1cblxuLy8gbGkge1xuLy8gICBwYWRkaW5nOiAxMHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gbGk6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kOiAjZWVlO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi5pdGVtLFxuLml0ZW0tZGl2aWRlciB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xufVxuXG4ubXlJdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gIHBhZGRpbmctYm90dG9tOiAwNXB4O1xuICBsaW5lLWhlaWdodDogMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgJHJ1bGVyKjI7XG4gIGZvbnQtc2l6ZTogJHJ1bGVyKjMuMjtcbiAgd2lkdGg6IDM0MHB4O1xuXG59XG5cbi5pdGVtLWJhY2tncm91bmQtY29sb3Ige1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICNlZWU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICAtLW1pbi1oZWlnaHQ6IDYzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgZ3JlZW5cbn1cblxuXG4uaXRlbS1iYWNrZ3JvdW5kLWNvbG9yMiB7XG5cbiAgLS1taW4taGVpZ2h0OjczcHg7XG59XG5cbmlvbi1zZWFyY2hiYXIge1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIG1hcmdpbi1ib3R0b206IDclO1xuICBwYWRkaW5nLXJpZ2h0OiA2M3B4O1xufVxuLmJvbGR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGNvbG9yOiBibGFjayAgIWltcG9ydGFudDtcbn1cbi5ub3RCb2xke1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuIl19 */");

/***/ }),

/***/ 93559:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/boite-reception/boite-reception.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [BoiteRecepetion]=\"true\"></app-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n\n  <div style=\"background-color: whitesmoke;padding: 5px;\">\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" style=\"margin-top: 20px;\" (click)=\"openSearch()\">\n      <ion-fab-button style=\"--background\t:#ddd;   height: 50px;      width: 50px;\">\n        <img src=\"../../../../assets/ImgKids/nvx msg-01.svg\" alt=\"\">\n      </ion-fab-button>\n    </ion-fab>\n\n    <ion-searchbar placeholder=\"\" [(ngModel)]=\"recherche\"></ion-searchbar>\n  </div>\n\n  <div id=\"container\">\n    <ion-row class=\"BadyFilter\">\n      <ion-row class=\"myItem\" style=\"width:95% ; border: 20px !important\">\n        <ion-col style=\"margin-top: 20px;\" size=\"13\" size-lg>\n          <ion-item-sliding class=\"item-background-color\" *ngFor=\"let item of users | filter : recherche; let i = index\"\n            (ionDrag)=\"logDrag(i)\">\n            <ng-container *ngIf=\"item?.userReceiver.id===user$?.id;else receiver\">\n              <ion-item class=\"item-background-color2\" (click)=\"updateSeenMsgs(item)\"\n                routerLink=\"/chat/{{item.userSender._id}}\">\n                <ion-label>\n                  <p\n                    [ngClass]=\"!item.messages[item.messages.length-1].seen && user$.id !== item.messages[item.messages.length-1].userSender? 'bold': 'notBold'\">\n                    <ion-icon style=\"padding-right:10px\" slot=\"start\" name=\"person\"\n                      [hidden]=\"selecteditemIndex===i&&hideicon === true\"></ion-icon>\n                    {{item.userSender.name}}\n                  </p>\n                </ion-label>\n                <img style=\"width:15px ; height :15px\" src=\"../../assets/icon/connect2.png\" />\n              </ion-item>\n            </ng-container>\n            <ng-template #receiver>\n              <ion-item class=\"item-background-color2\" (click)=\"updateSeenMsgs(item)\"\n                routerLink=\"/chat/{{item.userReceiver._id}}\">\n                <ion-label>\n                  <p\n                    [ngClass]=\"!item?.messages[item.messages.length-1].seen && user$?.id !== item?.messages[item.messages.length-1].userSender? 'bold': 'notBold'\">\n                    <ion-icon style=\"padding-right:10px\" slot=\"start\" name=\"person\"\n                      [hidden]=\"selecteditemIndex===i&&hideicon === true\"></ion-icon>\n                    {{item.userReceiver.name}}\n                  </p>\n                </ion-label>\n                <img style=\"width:15px ; height :15px\" src=\"../../assets/icon/connect2.png\" />\n              </ion-item>\n            </ng-template>\n            <ion-item-options side=\"start\">\n              <ion-item-option\n                style=\"background-image: linear-gradient(135deg,#247238, #247238,  #8EBF25,#8EBF25) !important\">\n                <div>\n                  <ion-icon style=\"padding-right:10px\" slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                  <ion-icon style=\"padding-right:10px\" slot=\"icon-only\" name=\"heart\"></ion-icon>\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                </div>\n              </ion-item-option>\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-col>\n\n        <ion-col size=\"1\">\n          <ion-row style=\"background-color:red\">\n\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-infinite-scroll threshold=\"15%\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-row>\n\n\n  </div>\n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_boite-reception_boite-reception_module_ts.js.map