(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["default-src_app_layouts_community_community_module_ts"],{

/***/ 54380:
/*!***************************************************************!*\
  !*** ./src/app/layouts/community/community-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunityPageRoutingModule": () => (/* binding */ CommunityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _community_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./community.page */ 70501);




const routes = [
    {
        path: '',
        component: _community_page__WEBPACK_IMPORTED_MODULE_0__.CommunityPage
    },
    {
        path: 'add',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./add/add.module */ 38188)).then(m => m.AddPageModule)
    },
    {
        path: 'show-event/:id',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./show-event/show-event.module */ 16890)).then(m => m.ShowEventPageModule)
    },
    {
        path: 'show-page/:id',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./show-page/show-page.module */ 17299)).then(m => m.ShowPagePageModule)
    }
];
let CommunityPageRoutingModule = class CommunityPageRoutingModule {
};
CommunityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommunityPageRoutingModule);



/***/ }),

/***/ 30309:
/*!*******************************************************!*\
  !*** ./src/app/layouts/community/community.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunityPageModule": () => (/* binding */ CommunityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _community_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./community-routing.module */ 54380);
/* harmony import */ var _community_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./community.page */ 70501);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _show_event_show_event_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-event/show-event.module */ 16890);
/* harmony import */ var _add_add_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.module */ 38188);
/* harmony import */ var _show_page_show_page_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-page/show-page.module */ 17299);
/* harmony import */ var _one_event_one_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./one-event/one-event.component */ 18161);
/* harmony import */ var _showpage_showpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./showpage/showpage.component */ 88871);













let CommunityPageModule = class CommunityPageModule {
};
CommunityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _community_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommunityPageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _show_event_show_event_module__WEBPACK_IMPORTED_MODULE_3__.ShowEventPageModule,
            _add_add_module__WEBPACK_IMPORTED_MODULE_4__.AddPageModule,
            _show_page_show_page_module__WEBPACK_IMPORTED_MODULE_5__.ShowPagePageModule,
        ],
        declarations: [_community_page__WEBPACK_IMPORTED_MODULE_1__.CommunityPage, _one_event_one_event_component__WEBPACK_IMPORTED_MODULE_6__.OneEventComponent, _showpage_showpage_component__WEBPACK_IMPORTED_MODULE_7__.ShowpageComponent]
    })
], CommunityPageModule);



/***/ }),

/***/ 70501:
/*!*****************************************************!*\
  !*** ./src/app/layouts/community/community.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommunityPage": () => (/* binding */ CommunityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_community_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./community.page.html */ 44019);
/* harmony import */ var _community_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./community.page.scss */ 83969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Service/event.service */ 34489);
/* harmony import */ var src_app_shared_Service_page_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Service/page.service */ 82112);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var src_app_shared_Service_calendar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Service/calendar.service */ 13183);









let CommunityPage = class CommunityPage {
    constructor(eventService, pageService, userService, calendarService, elemRef) {
        this.eventService = eventService;
        this.pageService = pageService;
        this.userService = userService;
        this.calendarService = calendarService;
        this.elemRef = elemRef;
        this.isScrollTop = false;
        this.events = [
            {
                name: "ZUMBA BEACH",
                participants: 300,
                date: "23/08/2021",
                time: "18:00",
                day: "Mardi"
            },
            {
                name: "ZUMBA BEACH",
                participants: 300,
                date: "23/08/2021",
                time: "18:00",
                day: "Mardi"
            },
            {
                name: "ZUMBA BEACH",
                participants: 300,
                date: "23/08/2021",
                time: "18:00",
                day: "Mardi"
            },
            {
                name: "ZUMBA BEACH",
                participants: 300,
                date: "23/08/2021",
                time: "18:00",
                day: "Mardi"
            },
            {
                name: "ZUMBA BEACH",
                participants: 300,
                date: "23/08/2021",
                time: "18:00",
                day: "Mardi"
            },
            {
                name: "ZUMBA BEACH",
                participants: 300,
                date: "23/08/2021",
                time: "18:00",
                day: "Mardi"
            }
        ];
        this.slideOpts = {
            slidesPerView: 1,
            coverflowEffect: {
                rotate: 50,
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
        this.personalEvents = [];
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
        this.selected = 'Pages';
        this.dropDown = false;
        this.getPersonalPages();
        this.getPersonalEvents();
        this.getAllPages();
        this.getEvents();
    }
    next() {
        this.slides.slideNext();
    }
    prev() {
        this.slides.slidePrev();
    }
    doRefresh(event) {
        // this.posts = [];
        setTimeout(() => {
            // this.getAllPostsByEvent();
            event.target.complete();
        }, 1000);
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
    openDropDown() {
        if (this.dropDown === false) {
            this.dropDown = true;
        }
        else if (this.dropDown === true) {
            this.dropDown = false;
        }
    }
    getPersonalPages() {
        this.userService.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield res.data.data;
            this.pageService.getpagesbyID(this.user._id).subscribe(arg => this.myPages = arg);
        }));
    }
    getAllPages() {
        this.pageService.getAllPages().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () { return this.allPages = yield res.data.data; }));
    }
    getPersonalEvents() {
        this.userService.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield res.data.data;
            this.calendarService.getAllEvents().subscribe(events => {
                this.personalEvents = events.filter(event => event.type === 'event');
            });
        }));
    }
    getEvents() {
        this.calendarService.getAllEvents().subscribe(events => {
            console.log(events);
        });
    }
};
CommunityPage.ctorParameters = () => [
    { type: src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService },
    { type: src_app_shared_Service_page_service__WEBPACK_IMPORTED_MODULE_3__.PageService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_shared_Service_calendar_service__WEBPACK_IMPORTED_MODULE_5__.CalendarService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef }
];
CommunityPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSlides,] }],
    onClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener, args: ['click', ['$event.target'],] }]
};
CommunityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-community',
        template: _raw_loader_community_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_community_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommunityPage);



/***/ }),

/***/ 18161:
/*!********************************************************************!*\
  !*** ./src/app/layouts/community/one-event/one-event.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OneEventComponent": () => (/* binding */ OneEventComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_one_event_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./one-event.component.html */ 64766);
/* harmony import */ var _one_event_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./one-event.component.scss */ 93188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Service/follower.service */ 93647);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);






let OneEventComponent = class OneEventComponent {
    constructor(elemRef, followerService, userservice) {
        this.elemRef = elemRef;
        this.followerService = followerService;
        this.userservice = userservice;
    }
    onClickOutside(targetElement) {
        const target = this.elemRef.nativeElement.querySelector('div');
        if (targetElement.tagName === target.tagName) {
            this.dropDown = false;
        }
    }
    ngOnInit() {
        this.dropDown = false;
        this.invite = false;
        this.getMe();
    }
    interest() {
        this.interrested = true;
    }
    notinterested() {
        this.interrested = false;
    }
    openDropDown() {
        if (this.dropDown === false) {
            this.dropDown = true;
        }
        else if (this.dropDown === true) {
            this.dropDown = false;
        }
    }
    getAllfriends() {
        this.invite = true;
        this.followerService.getFollowers(this.userid)
            .subscribe(res => {
            this.friends = res.data.data;
            console.log(this.friends);
        });
    }
    getMe() {
        this.userservice.getMe().subscribe((res) => {
            this.userid = res.data.data._id;
            console.log(this.userid);
        });
    }
};
OneEventComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },
    { type: src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_2__.FollowerService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
OneEventComponent.propDecorators = {
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    onClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener, args: ['click', ['$event.target'],] }]
};
OneEventComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-one-event',
        template: _raw_loader_one_event_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_one_event_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OneEventComponent);



/***/ }),

/***/ 88871:
/*!******************************************************************!*\
  !*** ./src/app/layouts/community/showpage/showpage.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowpageComponent": () => (/* binding */ ShowpageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_showpage_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./showpage.component.html */ 81201);
/* harmony import */ var _showpage_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showpage.component.scss */ 80804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Service/event.service */ 34489);
/* harmony import */ var src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Service/follower.service */ 93647);
/* harmony import */ var src_app_shared_Service_page_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Service/page.service */ 82112);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);









let ShowpageComponent = class ShowpageComponent {
    constructor(eventService, pageService, userService, followerService, elemRef, userservice) {
        this.eventService = eventService;
        this.pageService = pageService;
        this.userService = userService;
        this.followerService = followerService;
        this.elemRef = elemRef;
        this.userservice = userservice;
        this.isScrollTop = false;
        this.slideOpts = {
            slidesPerView: 1,
            coverflowEffect: {
                rotate: 50,
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
                        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)
           rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
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
    onClickOutside(targetElement) {
        const target = this.elemRef.nativeElement.querySelector('div');
        if (targetElement.tagName === target.tagName) {
            this.dropDown = false;
        }
    }
    ngOnInit() {
        this.selectedFriends = '';
        this.dropDown = false;
        this.getMe();
    }
    segmentChanged(ev) {
        this.selected = ev.detail.value;
    }
    next() {
        this.slides.slideNext();
    }
    prev() {
        this.slides.slidePrev();
    }
    doRefresh(event) {
        // this.posts = [];
        setTimeout(() => {
            // this.getAllPostsByEvent();
            event.target.complete();
        }, 1000);
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
    openDropDown() {
        if (this.dropDown === false) {
            this.dropDown = true;
        }
        else if (this.dropDown === true) {
            this.dropDown = false;
        }
    }
    getMe() {
        this.userservice.getMe().subscribe((res) => {
            this.userid = res.data.data._id;
        });
    }
    getAllfriends() {
        this.followerService.getFollowers(this.userid)
            .subscribe(res => {
            this.friends = res.data.data;
        });
    }
    submitInvitations() {
        console.log(this.selectedFriends);
    }
};
ShowpageComponent.ctorParameters = () => [
    { type: src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService },
    { type: src_app_shared_Service_page_service__WEBPACK_IMPORTED_MODULE_4__.PageService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_3__.FollowerService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService }
];
ShowpageComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSlides,] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    onClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostListener, args: ['click', ['$event.target'],] }]
};
ShowpageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-showpage',
        template: _raw_loader_showpage_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_showpage_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShowpageComponent);



/***/ }),

/***/ 83969:
/*!*******************************************************!*\
  !*** ./src/app/layouts/community/community.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\nion-segment-button {\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 5px;\n  height: 30px;\n  color: #858484;\n  --background-checked: #d8d6d6ab;\n  text-transform: none;\n  min-height: unset;\n  --indicator-color: none;\n  min-width: unset;\n  font-size: 13px;\n}\n.créer {\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 0;\n  height: 30px;\n  text-transform: none;\n  min-height: unset;\n  min-width: 80px;\n  background-color: unset;\n  color: #858484;\n  font-size: 13px;\n}\n.buttons {\n  background-color: white;\n  padding: 10px 4px;\n  border-radius: 10px;\n  text-transform: capitalize;\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.562);\n}\n.button {\n  background-color: white;\n  padding: 2px;\n  border-radius: 10px;\n  color: #858484;\n}\n.swipper-wrapper {\n  padding: 10px;\n}\n.threePoints {\n  width: 25px;\n  height: 25px;\n  font-weight: bold;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: 3px 3px 3px #747373;\n  font-size: 15px;\n  padding: 2.5px 0 0 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW11bml0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQ0E7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRDQUFBO0FBRUY7QUFBQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUdGO0FBQUE7RUFDRSxhQUFBO0FBR0Y7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFHRiIsImZpbGUiOiJjb21tdW5pdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tc2VnbWVudC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggcmdiKDAgMCAwIC8gNDMlKTtcbiAgbWFyZ2luOiA1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6ICM4NTg0ODQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZDhkNmQ2YWI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBtaW4taGVpZ2h0OiB1bnNldDtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IG5vbmU7XG4gIG1pbi13aWR0aDogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcblxufVxuLmNyw6llcntcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHJnYigwIDAgMCAvIDQzJSk7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbWluLWhlaWdodDogdW5zZXQ7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gIGNvbG9yOiM4NTg0ODQgO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uYnV0dG9uc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjU2Mik7XG59XG4uYnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjojODU4NDg0IDtcbn1cblxuLnN3aXBwZXItd3JhcHBlcntcbiAgcGFkZGluZzoxMHB4O1xuXG59XG4udGhyZWVQb2ludHMge1xuICB3aWR0aDoyNXB4O1xuICBoZWlnaHQ6MjVweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgYm94LXNoYWRvdzozcHggM3B4IDNweCByZ2IoMTE2LCAxMTUsIDExNSk7XG4gIGZvbnQtc2l6ZToxNXB4O1xuICBwYWRkaW5nOjIuNXB4IDAgMCAzcHggO1xufVxuIl19 */");

/***/ }),

/***/ 93188:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/community/one-event/one-event.component.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\nion-segment-button {\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 5px;\n  height: 30px;\n  color: #858484;\n  --background-checked: #d8d6d6ab;\n  text-transform: none;\n  min-height: unset;\n  --indicator-color: none;\n  min-width: unset;\n  font-size: 13px;\n}\n.créer {\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 0;\n  height: 30px;\n  text-transform: none;\n  min-height: unset;\n  min-width: 80px;\n  background-color: unset;\n  color: #858484;\n  font-size: 13px;\n}\n.buttons {\n  background-color: white;\n  padding: 10px 4px;\n  border-radius: 10px;\n  text-transform: capitalize;\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.562);\n}\n.button {\n  background-color: white;\n  padding: 2px;\n  border-radius: 10px;\n  color: #858484;\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.562);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9uZS1ldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNENBQUE7QUFFRjtBQUFBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQUE7QUFHRiIsImZpbGUiOiJvbmUtZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCByZ2IoMCAwIDAgLyA0MyUpO1xuICBtYXJnaW46IDVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzg1ODQ4NDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNkOGQ2ZDZhYjtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICAtLWluZGljYXRvci1jb2xvcjogbm9uZTtcbiAgbWluLXdpZHRoOiB1bnNldDtcbiAgZm9udC1zaXplOiAxM3B4O1xuXG59XG4uY3LDqWVye1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggcmdiKDAgMCAwIC8gNDMlKTtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBtaW4taGVpZ2h0OiB1bnNldDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgY29sb3I6Izg1ODQ4NCA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5idXR0b25ze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuNTYyKTtcbn1cbi5idXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiM4NTg0ODQgO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuNTYyKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 80804:
/*!********************************************************************!*\
  !*** ./src/app/layouts/community/showpage/showpage.component.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93cGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 44019:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/community/community.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"communauté\" [isOption]=\"true\"></app-header>\n<ion-content padding [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n    <div style=\"padding: 20px;\">\n      <ion-segment style=\"display:flex; align-items:center;justify-content:space-around;padding:0 40px\" (ionChange)=\"segmentChanged($event)\">\n        <button\n          class=\"créer\"\n            routerLink=\"/add\">\n            Créer\n         </button>\n        <ion-segment-button value=\"Pages\">\n          Pages\n        </ion-segment-button>\n        <ion-segment-button value=\"Evennements\">\n          Evennements\n        </ion-segment-button>\n      </ion-segment>\n      <div *ngIf=\"selected === 'Pages'\">\n          <app-showpage [page]=\"myPages\"></app-showpage>\n      </div>\n      <div *ngIf=\"selected === 'Evennements'\">\n        <div *ngFor=\"let event of personalEvents\"  >\n          <app-one-event [event]=\"event\"></app-one-event>\n        </div>\n      </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ 64766:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/community/one-event/one-event.component.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div  style=\"margin: 40px 0; background-color:rgb(231, 231, 231);padding:0 10px ;border-radius:5px;box-shadow: 3px 3px 5px rgba(70, 69, 69, 0.562);\">\n  <div  style=\"display:flex; justify-content:space-between\">\n    <div  style=\"display: flex;flex-direction:column;margin-top:10px;margin-bottom:20px;width:100%\" routerLink=\"/community/show-event/{{event._id}}\" >\n      <span style=\"color:rgb(95, 95, 95);font-size:large;width:100%\">{{event.activity}}</span>\n      <span>{{event.participants}} participants</span>\n    </div>\n    <div  style=\"position:relative;height:20px\">\n      <ion-icon (click)=\"openDropDown()\" (blur)=\"openDropDown()\" class=\"button\" name=\"ellipsis-horizontal\" style=\"display: flex;justify-content:center;align-items:center;height:15px\"></ion-icon>\n      <ng-container *ngIf=\"dropDown\">\n        <div style=\"position: absolute;background-color:rgb(243, 243, 243);padding:15px;border-radius:15px;transform:translateX(-150px) translateY(10px);display:flex;flex-direction:column;width:180px;color:rgb(168, 168, 168);box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.562);\">\n          <span>Enregistrer</span>\n            <ion-item (click)=\"getAllfriends()\">\n              <ion-label>Inviter des amis</ion-label>\n              <ion-select [(ngModel)]=\"selectedFriends\" multiple=\"true\" ok-text=\"okey!\" cancel-text=\"Nah\" >\n                  <ion-select-option *ngFor=\"let friend of friends\" value=\"{{friend.userFollowed._id}}\">{{friend.userFollowed.name}}</ion-select-option>\n              </ion-select>\n          </ion-item>\n          <span>Signaler l'évenement</span>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n  <div style=\"display:flex;justify-content:space-around;align-items:center\">\n    <div routerLink=\"/community/show-event/{{event._id}}\"  style=\"display: flex;font-size:12px\">\n      <div style=\"margin-right: 20px;\">\n        {{event.startTime | date: 'd' }} {{event.startTime | date:'shortDate'}}\n      </div>\n      <div>\n        {{event.startTime | date: 'shortTime'}}\n      </div>\n\n    </div>\n\n    <div style=\"display: flex;align-items:center\">\n      <button color=\"white\" style=\"\n      width:120px;\n      text-transform:capitalize;\n      box-shadow: 0px 3px 10px rgba(114, 114, 114, 0.452);\n      border-radius: 10px;\n      margin-right:10px;\n      margin-bottom:5px;\n      height: 30px;\n      color: #3b8c4f;\n      font-weight: bold;\n      background: white\" *ngIf=\"!interrested\" (click)=\"interest()\">\n          ça m'intéresse\n        </button>\n      <button style=\"\n      width:120px;\n      text-transform:capitalize;\n      box-shadow: 0px 3px 10px rgba(114, 114, 114, 0.452);\n      border-radius: 10px;\n      margin-right:10px;\n      margin-bottom:5px;\n      height: 30px;\n      color: white;\n      font-weight: bold;\n      background: #3b8c4f\" *ngIf=\"interrested\" (click)=\"notinterested()\">\n          intéréssé\n        </button>\n      <img style=\"width: 33px;height:33px;background-color:white; padding:4px;border-radius:10px;box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.562);margin-bottom:5px\" src=\"../../assets/svg/share-event.svg\" alt=\"share\">\n    </div>\n  </div>\n  <div  routerLink=\"/community/show-event/{{event._id}}\"  style=\"display: flex;font-size:12px\">\n    <div style=\"margin-right: 20px;\">\n      {{event.endTime | date: 'd'}} {{event.endTime  | date:'shortDate'}}\n    </div>\n    <div>\n      {{event.endTime | date: 'shortTime'}}\n    </div>\n  </div>\n\n</div>\n");

/***/ }),

/***/ 81201:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/community/showpage/showpage.component.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div style=\"padding: 10px 0 0 0;display:flex;flex-direction:column;\">\n  <span style=\"margin-top:20px;font-size:20px;color:rgb(194, 194, 194);margin-left:20%\">Pages que vous gérez</span>\n  <div style=\"display: flex;align-items:center\">\n    <ion-icon style=\"margin: 20px 0 0 0;width:20px\" (click)=\"prev()\" name=\"chevron-back\"></ion-icon>\n    <ion-slides style=\"margin: 20px 0 0 0;height:110px;width:90%\" pager=\"false\" [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let item of page\"\n        style=\"background-color:rgb(230, 230, 230);display:flex;flex-direction:column;justify-content:space-between;padding:10px;border-radius:20px;\">\n        <div routerLink=\"/community/show-page/{{item._id}}\"\n          style=\"display: flex;align-items:center;width:100%;padding:0 12px\">\n          <span style=\"margin-right: 10px;\">LOGO</span>\n          <span> {{item?.name}}</span>\n        </div>\n        <div style=\"display:flex;justify-content:space-between;width:100%;padding:0 12px\">\n          <span\n            style=\"background-color: rgb(255, 255, 255);padding:5px;border-radius:5px;box-shadow:3px 3px 3px rgb(116, 115, 115);font-size:15px\">Boîte\n            de reception</span>\n\n          <div\n            style=\"background-color: rgb(255, 255, 255);padding:5px;border-radius:5px;box-shadow:3px 3px 3px rgb(116, 115, 115);font-size:15px\"\n            (click)=\"getAllfriends()\">\n            <ion-label>Inviter</ion-label>\n            <ion-select [(ngModel)]=\"selectedFriends\" multiple=\"true\" ok-text=\"okey!\" cancel-text=\"Nah\">\n              <ion-select-option *ngFor=\"let friend of friends\" value=\"{{friend?.userFollowed._id}}\">\n                {{friend?.userFollowed.name}}</ion-select-option>\n            </ion-select>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n    <ion-icon style=\"margin: 20px 0 0 0;width:20px\" (click)=\"next()\" name=\"chevron-forward\"></ion-icon>\n  </div>\n  <span style=\"margin-top:35px;font-size:20px;color:rgb(194, 194, 194);margin-left:20%\">Suggestions pour vous</span>\n  <div style=\"height:300px;overflow-y:scroll;\">\n    <div>\n      <div\n        style=\"display: flex;width:95%;justify-content:space-between;padding:20px 10px;margin:10px 0;background-color:rgb(230, 230, 230);border-radius:10px;box-shadow:3px 3px 5px gray\">\n        <div routerLink=\"/show-page\" style=\"display: flex;align-items:center\">\n          <span style=\"margin-right:10px\">LOGO</span>\n          <span>Page 1</span>\n        </div>\n        <div style=\"display: flex;width:150px;justify-content:space-evenly;align-items:center\">\n          <span\n            style=\"background-color: rgb(255, 255, 255);padding:5px;border-radius:5px;box-shadow:3px 3px 3px rgb(116, 115, 115);font-size:15px\">J'aime</span>\n          <img\n            style=\"width: 25px;height:25px;padding:2px;background-color: rgb(255, 255, 255);border-radius:5px;box-shadow:3px 3px 3px rgb(116, 115, 115);font-size:15px\"\n            src=\"../../assets/svg/share-event.svg\" alt=\"\">\n          <div style=\"position:relative\">\n            <div (click)=\"openDropDown()\" class=\"threePoints\">\n              <ion-icon class=\"button\" name=\"ellipsis-horizontal\"\n                style=\"display: flex;justify-content:center;align-items:center;height:15px\"></ion-icon>\n            </div>\n            <div *ngIf=\"dropDown\">\n              <div style=\"position: absolute;background-color:rgb(243, 243, 243);padding:15px;border-radius:15px;transform:translateX(-130px) translateY(10px);display:flex;flex-direction:column;\n              width:250px;color:rgb(168, 168, 168);box-shadow:-5px 5px 10px rgb(113, 113, 113);\">\n                <span style=\"font-size: 15px;\">Enregistrer</span>\n                <ion-item (click)=\"getAllfriends()\">\n                  <ion-label>Inviter des amis</ion-label>\n                  <ion-select [(ngModel)]=\"selectedFriends\" placeholder=\"{{selectedFriends}}\"\n                    (ionChange)=\"submitInvitations()\" multiple=\"true\" ok-text=\"okey!\" cancel-text=\"Nah\">\n                    <ion-select-option *ngFor=\"let friend of friends\" value=\"{{friend?.userFollowed._id}}\">\n                      {{friend?.userFollowed.name}}\n                    </ion-select-option>\n                  </ion-select>\n                </ion-item>\n                <span style=\"font-size: 15px;\">Bloquer cette page</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_layouts_community_community_module_ts.js.map