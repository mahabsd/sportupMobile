(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_hobbies_hobbies_module_ts"],{

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

/***/ 43374:
/*!***********************************************************!*\
  !*** ./src/app/layouts/hobbies/hobbies-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HobbiesPageRoutingModule": () => (/* binding */ HobbiesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _hobbies_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hobbies.page */ 46284);




const routes = [
    {
        path: '',
        component: _hobbies_page__WEBPACK_IMPORTED_MODULE_0__.HobbiesPage
    }
];
let HobbiesPageRoutingModule = class HobbiesPageRoutingModule {
};
HobbiesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HobbiesPageRoutingModule);



/***/ }),

/***/ 58370:
/*!***************************************************!*\
  !*** ./src/app/layouts/hobbies/hobbies.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HobbiesPageModule": () => (/* binding */ HobbiesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _hobbies_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hobbies-routing.module */ 43374);
/* harmony import */ var _hobbies_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hobbies.page */ 46284);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 44981);









let HobbiesPageModule = class HobbiesPageModule {
};
HobbiesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _hobbies_routing_module__WEBPACK_IMPORTED_MODULE_0__.HobbiesPageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule
        ],
        declarations: [_hobbies_page__WEBPACK_IMPORTED_MODULE_1__.HobbiesPage]
    })
], HobbiesPageModule);



/***/ }),

/***/ 46284:
/*!*************************************************!*\
  !*** ./src/app/layouts/hobbies/hobbies.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HobbiesPage": () => (/* binding */ HobbiesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_hobbies_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./hobbies.page.html */ 21880);
/* harmony import */ var _hobbies_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hobbies.page.scss */ 68354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Service/event.service */ 34489);
/* harmony import */ var src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Service/follower.service */ 93647);
/* harmony import */ var src_app_shared_Service_hobbies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Service/hobbies.service */ 24271);
/* harmony import */ var src_app_shared_Model_Follow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Model/Follow */ 46921);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_Model_userHobby__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/Model/userHobby */ 17326);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 92340);












let HobbiesPage = class HobbiesPage {
    constructor(hobbiesService, eventService, followerService, userservice, router) {
        this.hobbiesService = hobbiesService;
        this.eventService = eventService;
        this.followerService = followerService;
        this.userservice = userservice;
        this.router = router;
        this.title = 'Hobbies';
        this.selectedIndex = 0;
        this.HobbiesData = [];
        this.userlist = [];
        this.buttonColor = [];
        this.follower = false;
        this.EtatSuivre = false;
        this.follow = new src_app_shared_Model_Follow__WEBPACK_IMPORTED_MODULE_5__.Follow();
        this.slideOptsTwo = {
            initialSlide: 0,
            speed: 400,
            spaceBetween: -30,
            slidesPerView: 3,
            centeredSlides: false,
            loop: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            on: {
                beforeInit() {
                    const swiper = this;
                    swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                },
                setTranslate() {
                    const swiper = this;
                    const { width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $, } = swiper;
                    const params = swiper.params.coverflowEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const transform$$1 = swiper.translate;
                    const center = isHorizontal
                        ? -transform$$1 + swiperWidth / 2
                        : -transform$$1 + swiperHeight / 2;
                    const rotate = isHorizontal ? params.rotate : -params.rotate;
                    const translate = params.depth;
                    // Each slide offset from center
                    for (let i = 0, length = slides.length; i < length; i += 1) {
                        const $slideEl = slides.eq(i);
                        const slideSize = slidesSizesGrid[i];
                        const slideOffset = $slideEl[0].swiperSlideOffset;
                        const offsetMultiplier = ((center - slideOffset - slideSize / 2) / slideSize) *
                            params.modifier;
                        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        let translateZ = -translate * Math.abs(offsetMultiplier);
                        let translateY = isHorizontal ? 0 : params.stretch * offsetMultiplier;
                        let translateX = isHorizontal ? params.stretch * offsetMultiplier : 0;
                        // Fix for ultra small values
                        if (Math.abs(translateX) < 0.001)
                            translateX = 0;
                        if (Math.abs(translateY) < 0.001)
                            translateY = 0;
                        if (Math.abs(translateZ) < 0.001)
                            translateZ = 0;
                        if (Math.abs(rotateY) < 0.001)
                            rotateY = 0;
                        if (Math.abs(rotateX) < 0.001)
                            rotateX = 0;
                        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                        $slideEl.transform(slideTransform);
                        $slideEl[0].style.zIndex =
                            -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (params.slideShadows) {
                            // Set shadows
                            let $shadowBeforeEl = isHorizontal
                                ? $slideEl.find('.swiper-slide-shadow-left')
                                : $slideEl.find('.swiper-slide-shadow-top');
                            let $shadowAfterEl = isHorizontal
                                ? $slideEl.find('.swiper-slide-shadow-right')
                                : $slideEl.find('.swiper-slide-shadow-bottom');
                            if ($shadowBeforeEl.length === 0) {
                                $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append($shadowBeforeEl);
                            }
                            if ($shadowAfterEl.length === 0) {
                                $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append($shadowAfterEl);
                            }
                            if ($shadowBeforeEl.length)
                                $shadowBeforeEl[0].style.opacity =
                                    offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if ($shadowAfterEl.length)
                                $shadowAfterEl[0].style.opacity =
                                    -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    // Set correct perspective for IE10
                    if (swiper.support.pointerEvents ||
                        swiper.support.prefixedPointerEvents) {
                        const ws = $wrapperEl[0].style;
                        ws.perspectiveOrigin = `${center}px 50%`;
                    }
                },
                setTransition(duration) {
                    const swiper = this;
                    swiper.slides
                        .transition(duration)
                        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
                        .transition(duration);
                },
            },
        };
        this.userHobby = new src_app_shared_Model_userHobby__WEBPACK_IMPORTED_MODULE_7__.UserHobby();
        this.apiImgHobby = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.apiImg}hobbies/`;
        this.searchResult = "personne n'aime ce hobby!";
        this.sliderTwo = {
            isBeginningSlide: true,
            isEndSlide: false,
        };
    }
    //Move to Next slide
    slideNext(object, slideView) {
        slideView.slideNext(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
    }
    //Move to previous slide
    slidePrev(object, slideView) {
        slideView.slidePrev(500).then(() => {
            this.checkIfNavDisabled(object, slideView);
        });
    }
    //Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
        this.checkIfNavDisabled(object, slideView);
        this.slideWithNav2.getActiveIndex().then((index) => {
            this.selectedIndex = index + 1;
            this.hobbies.forEach(e => {
                if (e.id === this.selectedIndex) {
                    this.hobbiesService.getAllUsersByHobby(e._id).subscribe((res) => {
                        this.userlist = res.data.data;
                        console.log(this.userlist);
                    });
                }
            });
        });
    }
    //Call methods to check if slide is first or last to enable disbale navigation
    checkIfNavDisabled(object, slideView) {
        this.checkisBeginning(object, slideView);
        this.checkisEnd(object, slideView);
    }
    checkisBeginning(object, slideView) {
        slideView.isBeginning().then((istrue) => {
            object.isBeginningSlide = istrue;
        });
    }
    checkisEnd(object, slideView) {
        slideView.isEnd().then((istrue) => {
            object.isEndSlide = istrue;
        });
    }
    ngOnInit() {
        this.getMe();
        this.getfollow();
        this.getAllHobbies();
    }
    logScrolling(event) {
        if (event.detail.deltaY < 0) {
            this.isScrollTop = false;
        }
        else {
            this.isScrollTop = true;
            ;
        }
        this.eventService.sendMessage(this.isScrollTop);
    }
    getMe() {
        this.userservice.getMe().subscribe((res) => {
            this.iduser = res.data.data._id;
        });
    }
    getfollow() {
        this.buttonColor = [];
        this.userservice.getMe().subscribe((response) => {
            this.iduser1 = response.data.data.id;
            this.userlist.forEach(element => {
                this.followerService.getFollow(element._id, this.iduser1)
                    .subscribe((res) => {
                    if (res == null) {
                        this.buttonColor.push({ "etat": "no", "iduser": element._id });
                        this.EtatSuivre = false;
                        this.follower = false;
                    }
                    else {
                        this.buttonColor.push({ "etat": "yes", "iduser": element._id });
                        this.follower = true;
                        this.idFollowtoDelete = res._id;
                        this.EtatSuivre = true;
                    }
                });
            });
        }, (error) => {
            console.error(error);
        });
    }
    buttonBlock() {
        if (this.EtatSuivre) {
            this.followerService
                .deleteFollow(this.idFollowtoDelete)
                .subscribe((res) => {
            });
        }
        this.EtatSuivre = false;
        this.getfollow();
    }
    buttonSuivre(idprofilePassed) {
        this.selectedRow = idprofilePassed;
        this.userservice.getMe().subscribe((res) => {
            this.iduser = res.data.data._id;
            this.follow.userFollowed = idprofilePassed;
            this.follow.userFollowing = this.iduser;
            this.followerService.createFollow(this.iduser, this.follow).subscribe((res) => {
            });
        });
        this.getfollow();
        //this.router.navigate(["profilkids",this.idprofilePassed]);
    }
    redirectToprofile(userpassedid, role) {
        this.userservice.getMe().subscribe((response) => {
            this.iduser1 = response.data.data.id;
            console.log(this.iduser1);
            console.log(userpassedid);
            if (this.iduser1 === userpassedid) {
                this.router.navigateByUrl(`/tabs/layouts/coachprofile/${this.iduser1}/me/coachphoto`);
            }
            else {
                this.followerService.getFollow(userpassedid, this.iduser1)
                    .subscribe((res) => {
                    if (res == null) {
                        this.router.navigate(['profil', userpassedid, 'adulte']);
                    }
                    else {
                        if (res != null) {
                            if (role === 'user' || role === 'pro') {
                                this.router.navigate(['menu/tabs/layouts/coachprofile', userpassedid, 'followed']);
                            }
                        }
                    }
                });
            }
        }, (error) => {
            console.error(error);
        });
    }
    getAllHobbies() {
        this.hobbiesService.getHobbies().subscribe((res) => {
            this.hobbies = res.data.data;
            this.hobbies.sort((a, b) => a.id - b.id);
        });
    }
    getAllUsersByHobby(hobby) {
        this.hobbiesService.getAllUsersByHobby(hobby).subscribe(res => console.log(res));
    }
};
HobbiesPage.ctorParameters = () => [
    { type: src_app_shared_Service_hobbies_service__WEBPACK_IMPORTED_MODULE_4__.HobbiesService },
    { type: src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService },
    { type: src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__.FollowerService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
HobbiesPage.propDecorators = {
    slideWithNav2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['slideWithNav2', { static: false },] }]
};
HobbiesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-hobbies',
        template: _raw_loader_hobbies_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_hobbies_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HobbiesPage);



/***/ }),

/***/ 68354:
/*!***************************************************!*\
  !*** ./src/app/layouts/hobbies/hobbies.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  position: relative;\n  text-align: center;\n  color: white;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n}\n\n.custon-nav {\n  height: 48px;\n  width: 20px;\n  cursor: pointer;\n  vertical-align: middle;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.slider-nav ion-icon {\n  height: 100%;\n}\n\n.slide-text {\n  position: absolute;\n  color: white;\n  bottom: 30px;\n}\n\nion-slide {\n  border-radius: 50%;\n}\n\n.swiper-slide img {\n  border-radius: 50%;\n  opacity: 0.5;\n  object-fit: cover;\n  height: 130px !important;\n  width: 130px;\n}\n\n.swiper-slide-next img {\n  box-shadow: 0px 6px 12px 1px;\n  opacity: 1;\n}\n\nion-searchbar {\n  width: 329px;\n  text-align: center;\n  margin: 36px auto;\n}\n\nion-label {\n  color: #cccccc;\n  font-size: 25px;\n}\n\n#dejasuivi {\n  --background: linear-gradient(135deg, #8EBF25, #8EBF25, #247238, #247238);\n  z-index: 2;\n  height: 32px;\n  margin: 50px auto;\n  width: 130px;\n}\n\n#bloquer {\n  --background: #8c8f8a;\n  z-index: 2;\n  height: 32px;\n  margin: 50px auto;\n  width: 160px;\n}\n\n.slides-md {\n  --bullet-background-active: linear-gradient(135deg, #8EBF25, #8EBF25, #247238, #247238);\n}\n\nh5 {\n  text-align: center;\n  margin: 0 auto;\n  color: #cccccc;\n  margin: 40px;\n  font-size: 20px;\n}\n\nh6 {\n  text-align: center;\n  margin: 0 auto;\n  color: #e4c1c1;\n  margin: 40px;\n}\n\n.data-selected {\n  background-color: #e9eaea;\n}\n\n.slides {\n  display: flex;\n  align-items: center;\n  width: 95%;\n}\n\n.arrow {\n  width: 20px;\n  height: 20px;\n}\n\n.users {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  text-align: center;\n}\n\n.userName {\n  width: 90%;\n  height: 50px;\n  background-color: #d8e8b6;\n  border-radius: 20px;\n  box-shadow: #c9c9c7;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvYmJpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFGRjs7QUFPRTtFQUNFLFlBQUE7QUFKSjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFMRjs7QUFRQTtFQUdFLGtCQUFBO0FBUEY7O0FBWUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQVZKOztBQW1CRTtFQUNFLDRCQUFBO0VBQ0EsVUFBQTtBQWhCSjs7QUFxQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQWxCRjs7QUFxQkE7RUFFRSx5RUFBQTtFQUVBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBcEJGOztBQXdCQTtFQUVFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUF0QkY7O0FBeUJBO0VBQ0UsdUZBQUE7QUF0QkY7O0FBeUJBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBdEJGOztBQXlCQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBdEJGOztBQTBCQTtFQUNFLHlCQUFBO0FBdkJGOztBQXlCQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUF0QkE7O0FBd0JBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFyQkE7O0FBd0JBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXJCQTs7QUF1QkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBcEJGIiwiZmlsZSI6ImhvYmJpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcblxyXG59XHJcblxyXG4vLyBTbGlkZXIgU3R5bGUgU1RBUlRcclxuLmN1c3Rvbi1uYXYge1xyXG4gIGhlaWdodDogNDhweDtcclxuICB3aWR0aDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuXHJcbi5zbGlkZXItbmF2IHtcclxuICBpb24taWNvbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2xpZGUtdGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSB7XHJcbiAgaW1nIHt9XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJVxyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIHtcclxuXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OjEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDoxMzBweFxyXG4gIH1cclxufVxyXG5cclxuLy8gU2xpZGVyIFN0eWxlIFNUT1BcclxuXHJcbi8vZWxpIGZlbCB3ZXN0XHJcbi5zd2lwZXItc2xpZGUtbmV4dCB7XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDEycHggMXB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5pb24tc2VhcmNoYmFyIHtcclxuICB3aWR0aDogMzI5cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMzZweCBhdXRvO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuI2RlamFzdWl2aSB7XHJcblxyXG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzhFQkYyNSwgIzhFQkYyNSwgIzI0NzIzOCwgIzI0NzIzOCk7XHJcblxyXG4gIHotaW5kZXg6IDI7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIHdpZHRoOiAxMzBweDtcclxufVxyXG5cclxuXHJcbiNibG9xdWVyIHtcclxuXHJcbiAgLS1iYWNrZ3JvdW5kOiAjOGM4ZjhhO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gIHdpZHRoOiAxNjBweDtcclxufVxyXG5cclxuLnNsaWRlcy1tZCB7XHJcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM4RUJGMjUsICM4RUJGMjUsICMyNDcyMzgsICMyNDcyMzgpO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG4gIG1hcmdpbjogNDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbmg2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgY29sb3I6ICNlNGMxYzE7XHJcbiAgbWFyZ2luOiA0MHB4O1xyXG59XHJcblxyXG5cclxuLmRhdGEtc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVhZWE7XHJcbn1cclxuLnNsaWRlc3tcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxud2lkdGg6IDk1JTtcclxufVxyXG4uYXJyb3d7XHJcbndpZHRoOiAyMHB4O1xyXG5oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi51c2Vyc3tcclxuZGlzcGxheTogZmxleDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbndpZHRoOiAxMDAlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnVzZXJOYW1le1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGU4YjY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiAjYzljOWM3O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 21880:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/hobbies/hobbies.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [title]=\"title\" [isDetails]=\"true\" [isOption]=\"true\"></app-header>\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n  <h5>Bienvenue sur votre onglet des hobbies</h5>\n  <ion-grid>\n    <!--\n    <ion-searchbar [(ngModel)]=\"recherche\"></ion-searchbar>\n    -->\n    <div class=\"slides\">\n      <img src=\"../../assets/svg/arrowLeft.svg\" class=\"arrow\" [class.disabled]=\"sliderTwo.isBeginningSlide\"\n        (click)=\"slidePrev(sliderTwo,slideWithNav2)\" alt=\"\">\n\n      <ion-col>\n        <ion-slides [options]=\"slideOptsTwo\" #slideWithNav2 loop=\"true\"\n          (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\">\n          <ion-slide *ngFor=\"let item of hobbies  | filter : recherche; \">\n            <div class=\"container\">\n              <img class=\"hobby\" src=\"{{apiImgHobby + item.imgsrc}}\">\n              <div class=\"centered\">{{item.hobby }}</div>\n            </div>\n\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n      <img src=\"../../assets/svg/arrowRight.svg\" class=\"arrow\" (click)=\"slideNext(sliderTwo,slideWithNav2)\"\n        [class.disabled]=\"sliderTwo.isEndSlide\" alt=\"\">\n    </div>\n  </ion-grid>\n  <h6>rechercher des personnes selon leurs acitivités</h6>\n\n  <ion-searchbar [(ngModel)]=\"recherche2\"></ion-searchbar>\n\n  <div class=\"users\">\n    <div *ngFor=\"let user of userlist | filter : recherche2;let i=index; \" scrollY=\"true\" class=\"userName\">\n      <h4 (click)=\"redirectToprofile(user.user._id,user.user.role)\">{{\n        user.user.name}}\n      </h4>\n            <!--\n            <ion-button *ngIf=\"recherche2 === user.user.name\" expand=\"block\" id=\"dejasuivi\"\n            (click)=\"buttonSuivre(user.user._id)\">S'abonner</ion-button>\n        -->\n    </div>\n    <h4 *ngIf=\"userlist.length === 0\"> {{searchResult}} </h4>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_hobbies_hobbies_module_ts.js.map