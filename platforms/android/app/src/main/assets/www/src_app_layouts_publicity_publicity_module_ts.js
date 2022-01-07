(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_publicity_publicity_module_ts"],{

/***/ 85194:
/*!***************************************************************!*\
  !*** ./src/app/layouts/publicity/publicity-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicityPageRoutingModule": () => (/* binding */ PublicityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _publicity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicity.page */ 65803);




const routes = [
    {
        path: '',
        component: _publicity_page__WEBPACK_IMPORTED_MODULE_0__.PublicityPage
    }
];
let PublicityPageRoutingModule = class PublicityPageRoutingModule {
};
PublicityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PublicityPageRoutingModule);



/***/ }),

/***/ 91162:
/*!*******************************************************!*\
  !*** ./src/app/layouts/publicity/publicity.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicityPageModule": () => (/* binding */ PublicityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _publicity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publicity-routing.module */ 85194);
/* harmony import */ var _publicity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicity.page */ 65803);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/component.module */ 55051);








let PublicityPageModule = class PublicityPageModule {
};
PublicityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _publicity_routing_module__WEBPACK_IMPORTED_MODULE_0__.PublicityPageRoutingModule
        ],
        declarations: [_publicity_page__WEBPACK_IMPORTED_MODULE_1__.PublicityPage]
    })
], PublicityPageModule);



/***/ }),

/***/ 65803:
/*!*****************************************************!*\
  !*** ./src/app/layouts/publicity/publicity.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicityPage": () => (/* binding */ PublicityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_publicity_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./publicity.page.html */ 70695);
/* harmony import */ var _publicity_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publicity.page.scss */ 18594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let PublicityPage = class PublicityPage {
    constructor() {
        this.slideOpts = {
            slidesPerView: 1,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 0,
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
    }
    ngOnInit() {
        this.dropdown = false;
        this.dropDownValue = "Aujourd'hui";
    }
    toggleDropDown() {
        if (this.dropdown === false) {
            this.dropdown = true;
        }
        else if (this.dropdown === true) {
            this.dropdown = false;
        }
    }
    setToday() {
        this.dropDownValue = "Aujourd'hui";
        this.toggleDropDown();
    }
    setWeek() {
        this.dropDownValue = "7 derniers jours";
        this.toggleDropDown();
    }
    setMonth() {
        this.dropDownValue = "Mois dernier";
        this.toggleDropDown();
    }
    setTrim() {
        this.dropDownValue = "Trimestre dernier";
        this.toggleDropDown();
    }
    setSem() {
        this.dropDownValue = "Semestre dernier";
        this.toggleDropDown();
    }
    setYear() {
        this.dropDownValue = "Année dernière";
        this.toggleDropDown();
    }
};
PublicityPage.ctorParameters = () => [];
PublicityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-publicity',
        template: _raw_loader_publicity_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_publicity_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PublicityPage);



/***/ }),

/***/ 18594:
/*!*******************************************************!*\
  !*** ./src/app/layouts/publicity/publicity.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ::ng-deep .swiper-pagination {\n  bottom: -1%;\n}\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet {\n  background: #949494;\n  width: 8px;\n  height: 8px;\n  opacity: 5.2;\n}\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 8px;\n  height: 8px;\n  opacity: 5.2;\n}\n.dropdown {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  background-color: #dddddd;\n  box-shadow: 10px 10px 10px gray;\n  padding: 15px;\n  color: gray;\n  border-radius: 10px;\n  z-index: 10;\n  right: 20px;\n  top: 45px;\n}\n.divOfSlide {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  height: 110px;\n  box-shadow: 10px 10px 10px rgba(128, 128, 128, 0.61);\n  border-radius: 15px;\n  padding: 20px;\n  width: 50%;\n  margin: 20px;\n  background-color: #fcfcfc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1YmxpY2l0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDRiIsImZpbGUiOiJwdWJsaWNpdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGJvdHRvbTogLTElO1xuXG4gIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgIGJhY2tncm91bmQ6ICM5NDk0OTQ7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBvcGFjaXR5OiA1LjI7XG4gIH1cbiAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMyNDcyMzg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBvcGFjaXR5OiA1LjI7XG4gIH1cbn1cbi5kcm9wZG93bntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjIxLCAyMjEsIDIyMSk7XG4gIGJveC1zaGFkb3c6MTBweCAxMHB4IDEwcHggZ3JheTtcbiAgcGFkZGluZzoxNXB4O1xuICBjb2xvcjpncmF5O1xuICBib3JkZXItcmFkaXVzOjEwcHg7XG4gIHotaW5kZXg6MTA7XG4gIHJpZ2h0OjIwcHg7XG4gIHRvcDo0NXB4XG59XG5cbi5kaXZPZlNsaWRle1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gIGhlaWdodDoxMTBweDtcbiAgYm94LXNoYWRvdzoxMHB4IDEwcHggMTBweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNjEpO1xuICBib3JkZXItcmFkaXVzOjE1cHg7XG4gIHBhZGRpbmc6MjBweDtcbiAgd2lkdGg6NTAlO1xuICBtYXJnaW46MjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjUyLCAyNTIsIDI1Milcbn1cbiJdfQ== */");

/***/ }),

/***/ 70695:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/publicity/publicity.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [isPublicity]=\"true\"></app-header>\n\n<ion-content>\n  <div>\n    <div style=\"display: flex; width:100%;padding: 30px 20px 10px 20px;justify-content:space-between;position:relative\">\n      <span style=\"font-weight: bold;\">Récapitulatif</span>\n      <div (click)=\"toggleDropDown()\" style=\"display: flex;align-items:center\">\n        <span>{{dropDownValue}}</span>\n        <div style=\"display: flex;align-items:center\" *ngIf=\"!dropdown;else open\" >\n          <ion-icon name=\"chevron-forward\"></ion-icon>\n        </div>\n        <ng-template #open>\n          <ion-icon name=\"chevron-down\"></ion-icon>\n        </ng-template>\n\n      </div>\n      <div *ngIf=\"dropdown\" class=\"dropdown\">\n        <span style=\"margin: 10px;\" (click)=\"setToday()\">Aujourd'hui</span>\n        <span style=\"margin: 10px;\" (click)=\"setWeek()\">7 derniers jours</span>\n        <span style=\"margin: 10px;\" (click)=\"setMonth()\">Mois dernier</span>\n        <span style=\"margin: 10px;\" (click)=\"setTrim()\">Trimestre dernier</span>\n        <span style=\"margin: 10px;\" (click)=\"setSem()\">Semestre dernier</span>\n        <span style=\"margin: 10px;\" (click)=\"setYear()\">Année dernière</span>\n      </div>\n    </div>\n    <div style=\"margin: 20px;\">\n      <span style=\"color: grey; font-size:14px\">\n        Sport'up a dépensé 15$ sur 2 publicités au cours des 7 derniers jours\n      </span>\n    </div>\n    <ion-slides style=\"margin: -30px 0 0 0;\" pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide>\n        <div class=\"divOfSlide\" >\n          <span style=\"font-size: 15px;\">Couverture</span>\n          <span>9087</span>\n        </div>\n        <div  class=\"divOfSlide\">\n          <span style=\"font-size: 15px;\">Interaction avec la publicité</span>\n          <span>9087</span>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div  class=\"divOfSlide\">\n          <span style=\"font-size: 15px;\">Couverture</span>\n          <span>9087</span>\n        </div>\n        <div  class=\"divOfSlide\">\n          <span style=\"font-size: 15px;\">Interaction avec la publicité</span>\n          <span>9087</span>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <div  class=\"divOfSlide\">\n          <span style=\"font-size: 15px;\">Couverture</span>\n          <span>9087</span>\n        </div>\n        <div class=\"divOfSlide\">\n          <span style=\"font-size: 15px;\">Interaction avec la publicité</span>\n          <span>9087</span>\n        </div>\n      </ion-slide>\n    </ion-slides>\n    <div style=\"margin: 20px;\">\n      <span style=\"font-weight: bold;\">Publicités</span>\n      <div style=\"margin: 20px;box-shadow:10px 10px 10px rgba(151, 151, 151, 0.774);padding:15px;border-radius:15px;background-color:rgb(243, 243, 243)\">\n        <div style=\"width: 100%; display:flex;justify-content:flex-end\">\n          <span style=\"font-size: 12px;color:green\">Afficher les résultats</span>\n        </div>\n        <div style=\"margin:10px;display: flex; width:100%;justify-content:space-between;align-items:center\">\n          <img style=\"width: 60px;height:60px\" src=\"../../assets//svg/birthday-cake.svg\" alt=\"\">\n          <span>Obtenir plus de messages</span>\n        </div>\n        <div style=\"margin:10px;display: flex;width:100%;justify-content:space-between\">\n          <div style=\"display: flex;flex-direction:column;align-items:center\">\n            <span>9000</span>\n            <span>Couverture</span>\n          </div>\n          <div style=\"display: flex;flex-direction:column;align-items:center\">\n            <span>52</span>\n            <span>messages</span>\n          </div>\n          <div style=\"display: flex;flex-direction:column;align-items:center\">\n            <span>7.2 $</span>\n            <span>Dépenses</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div style=\"display: flex;justify-content:flex-end;width:95%;\">\n      <div style=\"margin: 10px;padding:10px;box-shadow:10px 10px 10px rgb(136, 136, 136);background-color:rgb(243, 243, 243);border-radius:10px\">\n        <span style=\"color: grey; font-size:12px\"  routerLink=\"/tabs/layouts/boost-pub\">Promouvoir une pubication</span>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_publicity_publicity_module_ts.js.map