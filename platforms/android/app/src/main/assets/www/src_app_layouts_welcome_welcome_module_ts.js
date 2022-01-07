(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_welcome_welcome_module_ts"],{

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

/***/ 66568:
/*!***********************************************************!*\
  !*** ./src/app/layouts/welcome/welcome-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageRoutingModule": () => (/* binding */ WelcomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page */ 2505);




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ 68848:
/*!***************************************************!*\
  !*** ./src/app/layouts/welcome/welcome.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageModule": () => (/* binding */ WelcomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-routing.module */ 66568);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page */ 2505);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/component.module */ 55051);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 44981);









let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomePageRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_1__.WelcomePage]
    })
], WelcomePageModule);



/***/ }),

/***/ 2505:
/*!*************************************************!*\
  !*** ./src/app/layouts/welcome/welcome.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./welcome.page.html */ 77660);
/* harmony import */ var _welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss */ 66842);
/* harmony import */ var _shared_Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/Service/user.service */ 53313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_Service_hobbies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Service/hobbies.service */ 24271);
/* harmony import */ var _shared_Model_userHobby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/Model/userHobby */ 17326);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);








let WelcomePage = class WelcomePage {
    constructor(hobbiesService, userService) {
        this.hobbiesService = hobbiesService;
        this.userService = userService;
        this.hobbies = [];
        this.hob = [];
        this.slideOptsOne = {
            slidesPerView: 1,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                loop: true
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
                    const { width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $ } = swiper;
                    const params = swiper.params.coverflowEffect;
                    const isHorizontal = swiper.isHorizontal();
                    const transform$$1 = swiper.translate;
                    const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
                    const rotate = isHorizontal ? params.rotate : -params.rotate;
                    const translate = params.depth;
                    // Each slide offset from center
                    for (let i = 0, length = slides.length; i < length; i += 1) {
                        const $slideEl = slides.eq(i);
                        const slideSize = slidesSizesGrid[i];
                        const slideOffset = $slideEl[0].swiperSlideOffset;
                        const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
                        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                        // var rotateZ = 0
                        let translateZ = -translate * Math.abs(offsetMultiplier);
                        let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                        let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
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
                        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                        if (params.slideShadows) {
                            // Set shadows
                            let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                            let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                            if ($shadowBeforeEl.length === 0) {
                                $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                                $slideEl.append($shadowBeforeEl);
                            }
                            if ($shadowAfterEl.length === 0) {
                                $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                                $slideEl.append($shadowAfterEl);
                            }
                            if ($shadowBeforeEl.length)
                                $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                            if ($shadowAfterEl.length)
                                $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                        }
                    }
                    // Set correct perspective for IE10
                    if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
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
                }
            }
        };
        this.userHobby = new _shared_Model_userHobby__WEBPACK_IMPORTED_MODULE_4__.UserHobby();
        this.apiImgHobby = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiImg}hobbies/`;
    }
    ngOnInit() {
        this.getMe();
        this.cutting();
    }
    getMe() {
        this.userService.getMe().subscribe((res) => {
            this.userId = res.data.data._id;
        });
    }
    cutting() {
        this.hobbiesService.getHobbies().subscribe((res) => {
            this.hobbies = res.data.data;
            this.howMany = Math.ceil(this.hobbies.length / 4);
            for (let i = 0; i < this.howMany; i++) {
                this.hob.push({ fourHobs: this.hobbies.splice(0, 4) });
            }
        });
    }
    addHobby(hobbyId) {
        console.log(hobbyId);
        this.userHobby.hobby = hobbyId;
        this.userHobby.user = this.userId;
        console.log(this.userHobby);
        this.hobbiesService.addHobby(this.userHobby).subscribe(res => console.log(res));
    }
};
WelcomePage.ctorParameters = () => [
    { type: src_app_shared_Service_hobbies_service__WEBPACK_IMPORTED_MODULE_3__.HobbiesService },
    { type: _shared_Service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
WelcomePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['slides',] }]
};
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-welcome',
        template: _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WelcomePage);



/***/ }),

/***/ 66842:
/*!***************************************************!*\
  !*** ./src/app/layouts/welcome/welcome.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".swiper-slide {\n  transform: scale(50%);\n}\n\n.swiper-slide-next {\n  opacity: 1;\n  transform: scale(100%);\n}\n\ninput:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUNBOztBQUNBO0VBQ0UsYUFBQTtBQUVGIiwiZmlsZSI6IndlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1zbGlkZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoNTAlKTtcbn1cbi8vYWN0aXZlIHNsaWRlXG4uc3dpcGVyLXNsaWRlLW5leHQge1xub3BhY2l0eTogMTtcbnRyYW5zZm9ybTogc2NhbGUoMTAwJSk7XG59XG5pbnB1dDpmb2N1c3tcbiAgb3V0bGluZTogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 77660:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/welcome/welcome.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [isWelcome]=\"true\"></app-header>\n\n<ion-content>\n<div style=\"display: flex;align-items:center;flex-wrap:wrap;justify-content:center;margin-top:20px\">\n  <span style=\"color:gray;font-size:25px\">Sélectionnez vos centres d'intérêt</span>\n    <ion-slides pager='true' [options]=\"slideOptsOne\" >\n      <ion-slide style=\"width: 300px;height:500px;display:flex;flex-direction:column\" *ngFor=\"let hobbies of hob | filter : recherche;let index=index\" >\n        <div style=\"display: flex;\">\n          <div style=\"margin: 10px ;width:200;height:200;position:relative\">\n            <img style=\"width: 170px;height:170px;object-fit:cover;border-radius:15px\" src=\"{{apiImgHobby + hobbies.fourHobs[0]?.imgsrc}}\" alt=\"\">\n            <span>{{hobbies.fourHobs[0]?.hobby}}</span>\n            <span style=\"padding:15px;border-radius:10px;background-color: rgba(255, 255, 255, 0.493);color:black;font-size:20px;font-weight:bold;position:absolute;top:35%;left:25%\" (click)=\"addHobby(hobbies.fourHobs[0]._id)\" >Ajouter</span>\n          </div>\n          <div *ngIf=\"hobbies.fourHobs[1];else noSecond\"  style=\"margin: 10px ;width:200;height:200;position:relative\">\n            <img style=\"width: 170px;height:170px;object-fit:cover;border-radius:15px\" src=\"{{apiImgHobby + hobbies.fourHobs[1]?.imgsrc}}\" alt=\"\">\n            <span>{{hobbies.fourHobs[1]?.hobby}}</span>\n            <span style=\"padding:15px;border-radius:10px;background-color: rgba(255, 255, 255, 0.493);color:black;font-size:20px;font-weight:bold;position:absolute;top:35%;left:25%\" (click)=\"addHobby(hobbies.fourHobs[1]._id)\">Ajouter</span>\n          </div>\n          <ng-template style=\"margin: 10px ;width:200;height:200;position:relative\" #noSecond>\n            <div style=\"margin: 10px ;width:200;height:200;position:relative\">\n              <div style=\"width: 170px;height:170px;background-color:gray;border-radius:15px\"></div>\n            </div>\n          </ng-template>\n\n        </div>\n        <div style=\"display: flex;\">\n          <div  *ngIf=\"hobbies.fourHobs[2];else noThird\" style=\"margin: 10px ;width:200;height:200;position:relative\">\n            <img style=\"width: 170px;height:170px;object-fit:cover;border-radius:15px\" src=\"{{apiImgHobby + hobbies.fourHobs[2]?.imgsrc}}\" alt=\"\">\n            <span>{{hobbies.fourHobs[2]?.hobby}}</span>\n            <span style=\"padding:15px;border-radius:10px;background-color: rgba(255, 255, 255, 0.493);color:black;font-size:20px;font-weight:bold;position:absolute;top:35%;left:25%\" (click)=\"addHobby(hobbies.fourHobs[2]._id)\">Ajouter</span>\n          </div>\n          <ng-template style=\"margin: 10px 20px 10px 10px ;width:200;height:200;position:relative\" #noThird>\n            <div style=\"margin: 10px 20px 10px 25px ;width:200;height:200;position:relative\">\n              <div style=\"width: 170px;height:170px;background-color:gray;border-radius:15px\"></div>\n            </div>\n          </ng-template>\n          <div *ngIf=\"hobbies.fourHobs[3];else noFourth\" style=\"margin: 10px ;width:200;height:200;position:relative\">\n            <img style=\"width: 170px;height:170px;object-fit:cover;border-radius:15px\" src=\"{{apiImgHobby + hobbies.fourHobs[3]?.imgsrc}}\" alt=\"\">\n            <span>{{hobbies.fourHobs[3]?.hobby}}</span>\n            <span style=\"padding:15px;border-radius:10px;background-color: rgba(255, 255, 255, 0.493);color:black;font-size:20px;font-weight:bold;position:absolute;top:35%;left:25%\" (click)=\"addHobby(hobbies.fourHobs[3]._id)\">Ajouter</span>\n          </div>\n          <ng-template style=\"margin: 10px ;width:200;height:200;position:relative\" #noFourth>\n            <div style=\"margin: 10px ;width:200;height:200;position:relative\">\n              <div style=\"width: 170px;height:170px;background-color:gray;border-radius:15px\"></div>\n            </div>\n          </ng-template>\n        </div>\n      </ion-slide>\n    </ion-slides>\n    <div style=\"position: relative;width:100%;background-color:rgb(218, 218, 218);margin:0 15px;padding:10px;border-radius:8px \">\n      <input style=\"border: none;background-color:transparent;width:80%;margin-left:30px\" type=\"text\" [(ngModel)]=\"recherche\">\n      <ion-icon style=\"position: absolute;top:13%;left:5px;color:white;width:30px;height:30px\" name=\"search\"></ion-icon>\n    </div>\n    <button routerLink=\"/tabs/layouts/home\" style=\"background: linear-gradient(90deg, #4B5149 0%, #286029 35%, #8AB211 100%);padding:5px 15px;color:white;font-size:18px;margin-top:15px\">Continuer</button>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_welcome_welcome_module_ts.js.map