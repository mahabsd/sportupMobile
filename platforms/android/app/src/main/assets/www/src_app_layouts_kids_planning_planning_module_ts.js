(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_kids_planning_planning_module_ts"],{

/***/ 2763:
/*!******************************************************************!*\
  !*** ./src/app/layouts/kids/planning/planning-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanningPageRoutingModule": () => (/* binding */ PlanningPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _planning_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planning.page */ 67320);




const routes = [
    {
        path: '',
        component: _planning_page__WEBPACK_IMPORTED_MODULE_0__.PlanningPage
    }
];
let PlanningPageRoutingModule = class PlanningPageRoutingModule {
};
PlanningPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlanningPageRoutingModule);



/***/ }),

/***/ 55022:
/*!**********************************************************!*\
  !*** ./src/app/layouts/kids/planning/planning.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanningPageModule": () => (/* binding */ PlanningPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _planning_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planning-routing.module */ 2763);
/* harmony import */ var _planning_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planning.page */ 67320);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _week_slides_week_slides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./week-slides/week-slides.component */ 87647);









let PlanningPageModule = class PlanningPageModule {
};
PlanningPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _planning_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlanningPageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_planning_page__WEBPACK_IMPORTED_MODULE_1__.PlanningPage, _week_slides_week_slides_component__WEBPACK_IMPORTED_MODULE_3__.WeekSlidesComponent]
    })
], PlanningPageModule);



/***/ }),

/***/ 67320:
/*!********************************************************!*\
  !*** ./src/app/layouts/kids/planning/planning.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanningPage": () => (/* binding */ PlanningPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_planning_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./planning.page.html */ 41159);
/* harmony import */ var _planning_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./planning.page.scss */ 18409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_Service_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Service/calendar.service */ 13183);
/* harmony import */ var _Planing_calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Planing/calendar-modal/calendar-modal.page */ 98112);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/Service/notifications.service */ 43367);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ionic2-calendar */ 87732);
/* harmony import */ var _Planing_eventmodal_eventmodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Planing/eventmodal/eventmodal.component */ 3058);












let PlanningPage = class PlanningPage {
    constructor(modalCtrl, calendarService, notificationsService, alertCtrl, userService) {
        this.modalCtrl = modalCtrl;
        this.calendarService = calendarService;
        this.notificationsService = notificationsService;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
            "Septembre", "Octobre", "Novembre", "Décembre"];
        this.eventSource = [];
        this.dates = { activity: {}, startDate: "", startDay: "", startMonth: "", startYear: "", endDate: "", endDay: "", endMonth: "", endYear: "" };
        this.eventsKids = [];
        this.slideOptsOne = {
            slidesPerView: 1,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
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
        this.getMe();
        this.getAllCalendarEvents();
    }
    getDayOfTheWeek(date) {
        date = new Date(date);
        return date.getDay();
    }
    getDayOfTheMonth(date) {
        date = new Date(date);
        return date.getDate();
    }
    getMonth(date) {
        date = new Date(date);
        return date.getMonth();
    }
    getYear(date) {
        date = new Date(date);
        return date.getFullYear();
    }
    getAllCalendarEvents() {
        this.userService.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.user$ = res.data.data;
            this.calendarService.getActivitiesbyID(this.user$._id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                this.activity = yield res;
                this.activity.map(el => {
                    this.dates = { activity: {}, startDate: "", startDay: "", startMonth: "", startYear: "", endDate: "", endDay: "", endMonth: "", endYear: "" };
                    this.dates.startDate = this.getDayOfTheWeek(el.startTime);
                    this.dates.startDay = this.getDayOfTheMonth(el.startTime);
                    this.dates.startMonth = this.getMonth(el.startTime);
                    this.dates.startYear = this.getYear(el.startTime);
                    this.dates.endDate = this.getDayOfTheWeek(el.endTime);
                    this.dates.endDay = this.getDayOfTheMonth(el.endTime);
                    this.dates.endMonth = this.getMonth(el.endTime);
                    this.dates.endYear = this.getYear(el.endTime);
                    this.dates.activity = el;
                    this.eventsKids.push(this.dates);
                });
            }));
        }));
    }
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
    next() {
        this.slides.slideNext();
    }
    prev() {
        this.slides.slidePrev();
    }
    getMe() {
        this.userService.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.user$ = res.data.data;
            // console.log(this.user$);
            this.loadEvents();
        }));
    }
    open() {
        console.log('heyyy');
    }
    openCalModal(sTime, evnt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Planing_calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_3__.CalendarModalPage,
                cssClass: 'cal-modal',
                backdropDismiss: false,
                componentProps: {
                    selectedTime: sTime,
                    selectedEvent: evnt,
                },
            });
            yield modal.present();
            modal.onDidDismiss().then((result) => {
                if (result.data && result.data.event && result.data.event.startTime) {
                    const event = result.data.event;
                    const dateParsedStart = moment__WEBPACK_IMPORTED_MODULE_4__(event.startTime, 'YYYY-MM-DD HH:mm').toDate();
                    const dateParsedEnd = moment__WEBPACK_IMPORTED_MODULE_4__(event.endTime, 'YYYY-MM-DD HH:mm').toDate();
                    event.startTime = dateParsedStart;
                    event.endTime = dateParsedEnd;
                    if (evnt === null) {
                        this.calendarService.addActivity(event).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            this.eventSource.push(res);
                            this.loadEvents();
                        }));
                        this.createNotif(event);
                    }
                    else {
                        this.calendarService.updateEvent(event).subscribe((res) => {
                            this.modalCtrl.dismiss();
                            this.loadEvents();
                        });
                    }
                    this.extractEventDays();
                    this.myCal.loadEvents();
                }
            });
        });
    }
    loadEvents() {
        this.calendarService.getActivitiesbyID(this.user$._id).subscribe((res) => {
            this.eventSource = res;
            // console.log(res);
            this.eventSource.forEach((event) => {
                event.startTime = this.formateEventDates(event.startTime);
                event.endTime = this.formateEventDates(event.endTime);
            });
            this.extractEventDays();
        });
    }
    formateEventDates(eventTime) {
        // console.log(eventTime);
        const dateFormate = moment__WEBPACK_IMPORTED_MODULE_4__(eventTime, 'YYYY-MM-DD HH:mm').toDate();
        return dateFormate;
    }
    // Calendar event was clicked
    onEventSelected(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: event.activity,
                subHeader: event.lieu,
                // eslint-disable-next-line max-len
                message: 'Activité: ' + event.notes,
                buttons: ['OK'],
            });
            alert.present();
        });
    }
    openDetailModal(evt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _Planing_eventmodal_eventmodal_component__WEBPACK_IMPORTED_MODULE_7__.EventmodalComponent,
                cssClass: 'cal-modal',
                backdropDismiss: false,
                componentProps: {
                    eventSelected: evt,
                },
            });
            yield modal.present();
            modal.onDidDismiss().then((result) => {
                this.loadEvents();
            });
        });
    }
    extractEventDays() {
        //Get event days by selected month
        // eslint-disable-next-line max-len
        this.eventDays = [
            ...new Set(this.eventSource
                .filter((event) => event.startTime.getMonth() === this.selectedMonth)
                .map((event) => event.startTime.getDate())
                .sort((a, b) => a - b)),
        ];
    }
    createNotif(event) {
        this.getMe();
        this.notif.userOwner = this.user$._id;
        this.notif.reciever = this.user$._id;
        this.notif.text = 'a créé un événnement';
        this.notif.event = event._id;
        this.notificationsService.postNotification(this.notif).subscribe(res => console.log(res));
    }
};
PlanningPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_shared_Service_calendar_service__WEBPACK_IMPORTED_MODULE_2__.CalendarService },
    { type: src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_5__.NotificationsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService }
];
PlanningPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSlides,] }],
    myCal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [ionic2_calendar__WEBPACK_IMPORTED_MODULE_11__.CalendarComponent,] }]
};
PlanningPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-planning',
        template: _raw_loader_planning_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_planning_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PlanningPage);



/***/ }),

/***/ 87647:
/*!****************************************************************************!*\
  !*** ./src/app/layouts/kids/planning/week-slides/week-slides.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeekSlidesComponent": () => (/* binding */ WeekSlidesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_week_slides_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./week-slides.component.html */ 89878);
/* harmony import */ var _week_slides_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./week-slides.component.scss */ 91837);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_layouts_Planing_eventmodal_eventmodal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layouts/Planing/eventmodal/eventmodal.component */ 3058);
/* harmony import */ var src_app_shared_Service_calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Service/calendar.service */ 13183);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);









let WeekSlidesComponent = class WeekSlidesComponent {
    constructor(calendarService, userService, modalCtrl) {
        this.calendarService = calendarService;
        this.userService = userService;
        this.modalCtrl = modalCtrl;
        this.dates = { activity: {}, startDate: "", startDay: "", startMonth: "", startYear: "", endDate: "", endDay: "", endMonth: "", endYear: "" };
        this.eventsKids = [];
        this.months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"];
        this.date = new Date();
        this.eventSource = [];
        this.slideOptsOne = {
            slidesPerView: 1,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
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
        this.getAllCalendarEvents();
    }
    getDayOfTheWeek(date) {
        date = new Date(date);
        return date.getDay();
    }
    getDayOfTheMonth(date) {
        date = new Date(date);
        return date.getDate();
    }
    getMonth(date) {
        date = new Date(date);
        return date.getMonth();
    }
    getYear(date) {
        date = new Date(date);
        return date.getFullYear();
    }
    getAllCalendarEvents() {
        this.userService.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.user$ = res.data.data;
            this.calendarService.getActivitiesbyID(this.user$._id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                this.activities = yield res;
                this.activities.map(el => {
                    this.dates = { activity: {}, startDate: "", startDay: "", startMonth: "", startYear: "", endDate: "", endDay: "", endMonth: "", endYear: "" };
                    this.dates.startDate = this.getDayOfTheWeek(el.startTime);
                    this.dates.startDay = this.getDayOfTheMonth(el.startTime);
                    this.dates.startMonth = this.getMonth(el.startTime);
                    this.dates.startYear = this.getYear(el.startTime);
                    this.dates.endDate = this.getDayOfTheWeek(el.endTime);
                    this.dates.endDay = this.getDayOfTheMonth(el.endTime);
                    this.dates.endMonth = this.getMonth(el.endTime);
                    this.dates.endYear = this.getYear(el.endTime);
                    this.dates.activity = el;
                    this.eventsKids = [...this.eventsKids, this.dates];
                });
            }));
        }));
    }
    openDetailModal(evt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_layouts_Planing_eventmodal_eventmodal_component__WEBPACK_IMPORTED_MODULE_2__.EventmodalComponent,
                cssClass: 'cal-modal',
                backdropDismiss: false,
                componentProps: {
                    eventSelected: evt,
                },
            });
            yield modal.present();
            modal.onDidDismiss().then((result) => {
                this.loadEvents();
            });
        });
    }
    loadEvents() {
        this.calendarService.getActivitiesbyID(this.user$._id).subscribe((res) => {
            this.eventSource = res;
            // console.log(res);
            this.eventSource.forEach((event) => {
                event.startTime = this.formateEventDates(event.startTime);
                event.endTime = this.formateEventDates(event.endTime);
            });
            this.extractEventDays();
        });
    }
    formateEventDates(eventTime) {
        // console.log(eventTime);
        const dateFormate = moment__WEBPACK_IMPORTED_MODULE_5__(eventTime, 'YYYY-MM-DD HH:mm').toDate();
        return dateFormate;
    }
    extractEventDays() {
        //Get event days by selected month
        // eslint-disable-next-line max-len
        this.eventDays = [
            ...new Set(this.eventSource
                .filter((event) => event.startTime.getMonth() === this.selectedMonth)
                .map((event) => event.startTime.getDate())
                .sort((a, b) => a - b)),
        ];
    }
};
WeekSlidesComponent.ctorParameters = () => [
    { type: src_app_shared_Service_calendar_service__WEBPACK_IMPORTED_MODULE_3__.CalendarService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
WeekSlidesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-week-slides',
        template: _raw_loader_week_slides_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_week_slides_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WeekSlidesComponent);



/***/ }),

/***/ 18409:
/*!**********************************************************!*\
  !*** ./src/app/layouts/kids/planning/planning.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".yellow {\n  color: #FFAB2B;\n}\n\n.green {\n  color: #369D98;\n}\n\n.light-green {\n  color: #7BC2BF;\n}\n\n.separation {\n  border-top: 1px dashed #171716;\n  width: 60%;\n  transform: rotate(90deg);\n  position: absolute;\n  top: 95px;\n}\n\n.days {\n  display: flex;\n  justify-content: center;\n  margin: 10px;\n  position: absolute;\n  top: -10px;\n  text-align: center;\n  width: 100%;\n}\n\n.day {\n  height: 270px;\n  width: 12.5%;\n  z-index: 0;\n  font-size: 10px;\n}\n\nselect {\n  border-radius: 50px;\n  height: 35px;\n  padding: 5px;\n  background-color: #EEEFEF;\n  color: #7F867D;\n  border: unset;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(45deg, #4B5149 0%, #286029 35%, #8AB211 100%);\n  padding: 10px;\n  border-radius: 15px;\n  margin-top: -30px;\n  height: 100px;\n}\n\n.date {\n  background-color: white;\n  border-radius: 17px;\n  width: 100%;\n  padding: 5px 5px;\n  margin-bottom: 5px;\n  font-size: 15px;\n}\n\n.events {\n  color: white;\n  border-radius: 15px;\n  font-size: 13px;\n}\n\nion-slides {\n  --bullet-background: #C3B5BA;\n  --bullet-background-active: linear-gradient(45deg, #4B5149 0%, #286029 35%, #8AB211 100%) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW5uaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFEQTtFQUNFLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQU1GOztBQUpBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFPRjs7QUFMQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFRRjs7QUFMQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFRRjs7QUFOQTtFQUNFLDRCQUFBO0VBQ0EsMEZBQUE7QUFTRiIsImZpbGUiOiJwbGFubmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueWVsbG93e1xuICBjb2xvcjogI0ZGQUIyQjtcbn1cbi5ncmVlbntcbiAgY29sb3I6IzM2OUQ5OFxufVxuLmxpZ2h0LWdyZWVue1xuICBjb2xvcjojN0JDMkJGXG59XG4uc2VwYXJhdGlvbiB7XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzE3MTcxNjtcbiAgd2lkdGg6IDYwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTVweDtcbn1cblxuLmRheXN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kYXl7XG4gIGhlaWdodDogMjcwcHg7XG4gIHdpZHRoOiAxMi41JTtcbiAgei1pbmRleDogMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuc2VsZWN0e1xuICBib3JkZXItcmFkaXVzOjUwcHg7XG4gIGhlaWdodDozNXB4O1xuICBwYWRkaW5nOjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUZFRjtcbiAgY29sb3I6ICM3Rjg2N0Q7XG4gIGJvcmRlcjogdW5zZXQ7XG59XG4uY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM0QjUxNDkgMCUsICMyODYwMjkgMzUlLCAjOEFCMjExIDEwMCUpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5kYXRle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uZXZlbnRze1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbmlvbi1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjQzNCNUJBO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNEI1MTQ5IDAlLCAjMjg2MDI5IDM1JSwgIzhBQjIxMSAxMDAlKVxufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ 91837:
/*!******************************************************************************!*\
  !*** ./src/app/layouts/kids/planning/week-slides/week-slides.component.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".yellow {\n  color: #FFAB2B;\n}\n\n.green {\n  color: #369D98;\n}\n\n.light-green {\n  color: #7BC2BF;\n}\n\n.separation {\n  border-top: 1px dashed #171716;\n  width: 60%;\n  transform: rotate(90deg);\n  position: absolute;\n  top: 95px;\n}\n\n.days {\n  display: flex;\n  justify-content: center;\n  margin: 10px;\n  position: absolute;\n  top: -10px;\n  text-align: center;\n  width: 100%;\n}\n\n.day {\n  height: 270px;\n  width: 12.5%;\n  z-index: 0;\n  font-size: 10px;\n  border-right: #171716 dashed 1px;\n}\n\nselect {\n  border-radius: 50px;\n  height: 35px;\n  padding: 5px;\n  background-color: #EEEFEF;\n  color: #7F867D;\n  border: unset;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background: linear-gradient(45deg, #4B5149 0%, #286029 35%, #8AB211 100%);\n  padding: 10px;\n  border-radius: 15px;\n  align-self: start;\n  margin-top: 14px;\n}\n\n.date {\n  background-color: white;\n  border-radius: 17px;\n  width: 100%;\n  padding: 5px 0;\n  margin-bottom: 5px;\n  font-size: 15px;\n}\n\n#planning {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.events {\n  color: white;\n  border-radius: 15px;\n  font-size: 13px;\n}\n\nion-slides {\n  --bullet-background: #C3B5BA;\n  --bullet-background-active: linear-gradient(45deg, #4B5149 0%, #286029 35%, #8AB211 100%) ;\n}\n\n.swiper-slide {\n  transform: scale(50%);\n}\n\n.swiper-slide-next {\n  opacity: 1;\n  transform: scale(100%);\n}\n\n.turquoise-bg {\n  background-color: #7BC2BF;\n  padding: 2px;\n}\n\n.oneEventBloc {\n  background-color: #7BC2BF;\n  padding: 2px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  margin: 2px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWstc2xpZGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQURBO0VBQ0UsOEJBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFJRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUtGOztBQUhBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFNRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFRRjs7QUFMQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFRRjs7QUFMQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFRRjs7QUFOQTtFQUNFLDRCQUFBO0VBQ0EsMEZBQUE7QUFTRjs7QUFOQTtFQUNJLHFCQUFBO0FBU0o7O0FBTkE7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7QUFTRjs7QUFQQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQVVGOztBQVBBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBVUYiLCJmaWxlIjoid2Vlay1zbGlkZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueWVsbG93e1xuICBjb2xvcjogI0ZGQUIyQjtcbn1cbi5ncmVlbntcbiAgY29sb3I6IzM2OUQ5OFxufVxuLmxpZ2h0LWdyZWVue1xuICBjb2xvcjojN0JDMkJGXG59XG4uc2VwYXJhdGlvbiB7XG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzE3MTcxNjtcbiAgd2lkdGg6IDYwJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTVweDtcbn1cblxuLmRheXN7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kYXl7XG4gIGhlaWdodDogMjcwcHg7XG4gIHdpZHRoOiAxMi41JTtcbiAgei1pbmRleDogMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBib3JkZXItcmlnaHQ6ICMxNzE3MTYgZGFzaGVkIDFweDtcbn1cbnNlbGVjdHtcbiAgYm9yZGVyLXJhZGl1czo1MHB4O1xuICBoZWlnaHQ6MzVweDtcbiAgcGFkZGluZzo1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVGRUY7XG4gIGNvbG9yOiAjN0Y4NjdEO1xuICBib3JkZXI6IHVuc2V0O1xufVxuLmNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNEI1MTQ5IDAlLCAjMjg2MDI5IDM1JSwgIzhBQjIxMSAxMDAlKTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG4uZGF0ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbiNwbGFubmluZ3tcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXJcbn1cblxuLmV2ZW50c3tcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogI0MzQjVCQTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzRCNTE0OSAwJSwgIzI4NjAyOSAzNSUsICM4QUIyMTEgMTAwJSlcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSg1MCUpO1xufVxuLy9hY3RpdmUgc2xpZGVcbi5zd2lwZXItc2xpZGUtbmV4dCB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMTAwJSk7XG59XG4udHVycXVvaXNlLWJne1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM3QkMyQkYgO1xuICBwYWRkaW5nOjJweFxufVxuXG4ub25lRXZlbnRCbG9je1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0JDMkJGO1xuICBwYWRkaW5nOjJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xuICBtYXJnaW46MnB4IDBcbn1cbiJdfQ== */");

/***/ }),

/***/ 41159:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/planning/planning.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [isKidPlanning]=\"true\"></app-header>\n\n\n<ion-content>\n  <div style=\"display: flex; justify-content:space-between;padding:15px\">\n    <div style=\"display: flex;\">\n      <img style=\"width:40px;margin:0 15px\" src=\"../../../../assets/svg/defaultIcon.svg\" alt=\"\">\n      <p>username</p>\n    </div>\n    <select name=\"\" id=\"\">\n      <option value=\"ativité\">activité</option>\n    </select>\n  </div>\n  <app-week-slides ></app-week-slides>\n  <ion-slides pager=\"true\" [options]=\"slideOptsOne\"\n          style=\"height: 140px;\">\n          <ion-slide *ngFor=\"let event of eventsKids\">\n            <div *ngIf=\"event.startMonth==0\" >\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==0\"  class=\"container\">\n                <span class=\"date\">Dimanche:{{event.startDay}} Janvier {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==1\"  class=\"container\">\n                <span class=\"date\">Lundi:{{event.startDay}} Janvier {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==2\"  class=\"container\">\n                <span class=\"date\">Mardi:{{event.startDay}} Janvier {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==3\"  class=\"container\">\n                <span class=\"date\">Mercredi:{{event.startDay}} Janvier {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==4\"  class=\"container\">\n                <span class=\"date\">Jeudi:{{event.startDay}} Janvier {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==5\"  class=\"container\">\n                <span class=\"date\">Vendredi:{{event.startDay}} Janvier {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==6\"  class=\"container\">\n                <span class=\"date\">Samedi:{{event.startDay}} Janvier {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"event.startMonth==1\" >\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==0\"  class=\"container\">\n                <span class=\"date\">Dimanche:{{event.startDay}} Février {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==1\"  class=\"container\">\n                <span class=\"date\">Lundi:{{event.startDay}} Février {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==2\"  class=\"container\">\n                <span class=\"date\">Mardi:{{event.startDay}} Février {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==3\"  class=\"container\">\n                <span class=\"date\">Mercredi:{{event.startDay}} Février {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==4\"  class=\"container\">\n                <span class=\"date\">Jeudi:{{event.startDay}} Février {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==5\"  class=\"container\">\n                <span class=\"date\">Vendredi:{{event.startDay}} Février {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==6\"  class=\"container\">\n                <span class=\"date\">Samedi:{{event.startDay}} Février {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"event.startMonth==2\" >\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==0\"  class=\"container\">\n                <span class=\"date\">Dimanche:{{event.startDay}} Mars {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==1\"  class=\"container\">\n                <span class=\"date\">Lundi:{{event.startDay}} Mars {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==2\"  class=\"container\">\n                <span class=\"date\">Mardi:{{event.startDay}} Mars {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==3\"  class=\"container\">\n                <span class=\"date\">Mercredi:{{event.startDay}} Mars {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==4\"  class=\"container\">\n                <span class=\"date\">Jeudi:{{event.startDay}} Mars {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==5\"  class=\"container\">\n                <span class=\"date\">Vendredi:{{event.startDay}} Mars {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==6\"  class=\"container\">\n                <span class=\"date\">Samedi:{{event.startDay}} Mars {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"event.startMonth==3\" >\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==0\"  class=\"container\">\n                <span class=\"date\">Dimanche:{{event.startDay}} Avril {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==1\"  class=\"container\">\n                <span class=\"date\">Lundi:{{event.startDay}} Avril {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==2\"  class=\"container\">\n                <span class=\"date\">Mardi:{{event.startDay}} Avril {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==3\"  class=\"container\">\n                <span class=\"date\">Mercredi:{{event.startDay}} Avril {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==4\"  class=\"container\">\n                <span class=\"date\">Jeudi:{{event.startDay}} Avril {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==5\"  class=\"container\">\n                <span class=\"date\">Vendredi:{{event.startDay}} Avril {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==6\"  class=\"container\">\n                <span class=\"date\">Samedi:{{event.startDay}} Avril {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"event.startMonth==4\" >\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==0\"  class=\"container\">\n                <span class=\"date\">Dimanche:{{event.startDay}} Mai {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==1\"  class=\"container\">\n                <span class=\"date\">Lundi:{{event.startDay}} Mai {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==2\"  class=\"container\">\n                <span class=\"date\">Mardi:{{event.startDay}} Mai {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==3\"  class=\"container\">\n                <span class=\"date\">Mercredi:{{event.startDay}} Mai {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==4\"  class=\"container\">\n                <span class=\"date\">Jeudi:{{event.startDay}} Mai {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==5\"  class=\"container\">\n                <span class=\"date\">Vendredi:{{event.startDay}} Mai {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==6\"  class=\"container\">\n                <span class=\"date\">Samedi:{{event.startDay}} Mai {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"event.startMonth==5\" >\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==0\"  class=\"container\">\n                <span class=\"date\">Dimanche:{{event.startDay}} Juin {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==1\"  class=\"container\">\n                <span class=\"date\">Lundi:{{event.startDay}} Juin {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==2\"  class=\"container\">\n                <span class=\"date\">Mardi:{{event.startDay}} Juin {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==3\"  class=\"container\">\n                <span class=\"date\">Mercredi:{{event.startDay}} Juin {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==4\"  class=\"container\">\n                <span class=\"date\">Jeudi:{{event.startDay}} Juin {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==5\"  class=\"container\">\n                <span class=\"date\">Vendredi:{{event.startDay}} Juin {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==6\"  class=\"container\">\n                <span class=\"date\">Samedi:{{event.startDay}} Juin {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"event.startMonth==6\" >\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==0\"  class=\"container\">\n                <span class=\"date\">Dimanche:{{event.startDay}} Juillet {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==1\"  class=\"container\">\n                <span class=\"date\">Lundi:{{event.startDay}} Juillet {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==2\"  class=\"container\">\n                <span class=\"date\">Mardi:{{event.startDay}} Juillet {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==3\"  class=\"container\">\n                <span class=\"date\">Mercredi:{{event.startDay}} Juillet {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==4\"  class=\"container\">\n                <span class=\"date\">Jeudi:{{event.startDay}} Juillet {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==5\"  class=\"container\">\n                <span class=\"date\">Vendredi:{{event.startDay}} Juillet {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==6\"  class=\"container\">\n                <span class=\"date\">Samedi:{{event.startDay}} Juillet {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"event.startMonth==7\" >\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==0\"  class=\"container\">\n                <span class=\"date\">Dimanche:{{event.startDay}} Aout {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==1\"  class=\"container\">\n                <span class=\"date\">Lundi:{{event.startDay}} Aout {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==2\"  class=\"container\">\n                <span class=\"date\">Mardi:{{event.startDay}} Aout {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==3\"  class=\"container\">\n                <span class=\"date\">Mercredi:{{event.startDay}} Aout {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==4\"  class=\"container\">\n                <span class=\"date\">Jeudi:{{event.startDay}} Aout {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==5\"  class=\"container\">\n                <span class=\"date\">Vendredi:{{event.startDay}} Aout {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==6\"  class=\"container\">\n                <span class=\"date\">Samedi:{{event.startDay}} Aout {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"event.startMonth==8\" >\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==0\"  class=\"container\">\n                <span class=\"date\">Dimanche:{{event.startDay}} Septembre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==1\"  class=\"container\">\n                <span class=\"date\">Lundi:{{event.startDay}} Septembre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==2\"  class=\"container\">\n                <span class=\"date\">Mardi:{{event.startDay}} Septembre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==3\"  class=\"container\">\n                <span class=\"date\">Mercredi:{{event.startDay}} Septembre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==4\"  class=\"container\">\n                <span class=\"date\">Jeudi:{{event.startDay}} Septembre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==5\"  class=\"container\">\n                <span class=\"date\">Vendredi:{{event.startDay}} Septembre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==6\"  class=\"container\">\n                <span class=\"date\">Samedi:{{event.startDay}} Septembre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"event.startMonth==9\" >\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==0\"  class=\"container\">\n                <span class=\"date\">Dimanche:{{event.startDay}} Octobre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==1\"  class=\"container\">\n                <span class=\"date\">Lundi:{{event.startDay}} Octobre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==2\"  class=\"container\">\n                <span class=\"date\">Mardi:{{event.startDay}} Octobre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==3\"  class=\"container\">\n                <span class=\"date\">Mercredi:{{event.startDay}} Octobre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==4\"  class=\"container\">\n                <span class=\"date\">Jeudi:{{event.startDay}} Octobre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==5\"  class=\"container\">\n                <span class=\"date\">Vendredi:{{event.startDay}} Octobre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==6\"  class=\"container\">\n                <span class=\"date\">Samedi:{{event.startDay}} Octobre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"event.startMonth==10\" >\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==0\"  class=\"container\">\n                <span class=\"date\">Dimanche:{{event.startDay}} Novembre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==1\"  class=\"container\">\n                <span class=\"date\">Lundi:{{event.startDay}} Novembre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==2\"  class=\"container\">\n                <span class=\"date\">Mardi:{{event.startDay}} Novembre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==3\"  class=\"container\">\n                <span class=\"date\">Mercredi:{{event.startDay}} Novembre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==4\"  class=\"container\">\n                <span class=\"date\">Jeudi:{{event.startDay}} Novembre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==5\"  class=\"container\">\n                <span class=\"date\">Vendredi:{{event.startDay}} Novembre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==6\"  class=\"container\">\n                <span class=\"date\">Samedi:{{event.startDay}} Novembre {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"event.startMonth==11\" >\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==0\"  class=\"container\">\n                <span class=\"date\">Dimanche:{{event.startDay}} Janvier {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==1\"  class=\"container\">\n                <span class=\"date\">Lundi:{{event.startDay}} Janvier {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==2\"  class=\"container\">\n                <span class=\"date\">Mardi:{{event.startDay}} Janvier {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==3\"  class=\"container\">\n                <span class=\"date\">Mercredi:{{event.startDay}} Janvier {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==4\"  class=\"container\">\n                <span class=\"date\">Jeudi:{{event.startDay}} Janvier {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==5\"  class=\"container\">\n                <span class=\"date\">Vendredi:{{event.startDay}} Janvier {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n              <div (click)=\"openDetailModal(event)\"  *ngIf=\"event.startDate==6\"  class=\"container\">\n                <span class=\"date\">Samedi:{{event.startDay}} Janvier {{event.startYear}}</span>\n                <div style=\"display: flex;justify-content:space-around;width:100%\">\n                  <span class=\"events\">{{event.activity.activity}}</span>\n                  <span class=\"events\">At&nbsp;:&nbsp;{{event.activity.lieu}}</span>\n                  <span class=\"events\">Note&nbsp;:&nbsp;{{event.activity.notes}}</span>\n                </div>\n              </div>\n            </div>\n          </ion-slide>\n        </ion-slides>\n        <div (click)=\"openCalModal(null,null)\">\n          <img style=\"position: absolute; bottom:0; width:55px;right:0; z-index:10\"\n          src=\"../../../../assets/svg/greenPlus.svg\" alt=\"\" >\n        </div>\n\n</ion-content>\n");

/***/ }),

/***/ 89878:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/planning/week-slides/week-slides.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-slides [options]=\"slideOptsOne\"\n  >\n    <ion-slide style=\"display: flex;flex-direction:column\" *ngFor=\"let month of months;let index=index\" >\n      <div style=\"display: flex;justify-content:space-between;padding:15px\">\n        <img style=\"width: 60px;\" src=\"../../../../assets/svg/yellow-plane.svg\" alt=\"\">\n        <img style=\"width: 60px;\" src=\"../../../../assets/svg/zigzag-horizon.svg\" alt=\"\">\n        <div id=\"planning\">\n          <div style=\"display: flex;font-size:30px\">\n            <div>P</div>\n            <div class=\"yellow\">l</div>\n            <div>a</div>\n            <div class=\"light-green\">n</div>\n            <div class=\"green\">n</div>\n            <div>i</div>\n            <div>n</div>\n            <div class=\"yellow\">g</div>\n          </div>\n          <div>{{month}} </div> <div> {{ date | date : 'yyyy' }} </div>\n        </div>\n        <!-- <div *ngFor=\"let activity of activities\" >\n          {{activity.startTime | date : 'MMMM' }}\n        </div> -->\n        <img style=\"width: 60px;\" src=\"../../../../assets/svg/zigzag-horizon.svg\" alt=\"\">\n        <img style=\"width: 60px;\" src=\"../../../../assets/svg/blue-plane.svg\" alt=\"\">\n      </div>\n      <div style=\"display: flex;flex-direction:column;position:relative;width:100%\">\n        <div style=\"position: absolute;display:flex;flex-direction:column;left:10px;top:20px\">\n          <img style=\"width: 10px;padding-bottom:35px\" src=\"../../../../assets/svg/zigzag-vertical.svg\" alt=\"\">\n          <img style=\"width: 10px;\" src=\"../../../../assets/svg/zigzag-vertical.svg\" alt=\"\">\n        </div>\n        <div style=\"position: absolute;display:flex;flex-direction:column;right:10px;top:20px\">\n          <img style=\"width: 10px;padding-bottom:35px\" src=\"../../../../assets/svg/zigzag-vertical.svg\" alt=\"\">\n          <img style=\"width: 10px;\" src=\"../../../../assets/svg/zigzag-vertical.svg\" alt=\"\">\n        </div>\n        <div class=\"days\">\n          <div style=\"border-left: #171716 dashed 1px;\" class=\"day\">\n            <span class=\"turquoise-bg\">Lundi</span>\n            <div *ngFor=\"let event of eventsKids\" >\n              <ng-container  *ngIf=\"event.startDate=='1' && event.startMonth===index \" >\n                <div (click)=\"openDetailModal(event.activity)\" class=\"oneEventBloc\">\n                      <span style=\"font-size: 8px;\">from the {{event.startDay}} to the {{event.endDay}}</span>\n                    <span>{{event.activity.activity}}</span>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n          <div class=\"day\">\n            <span class=\"turquoise-bg\">Mardi</span>\n            <div *ngFor=\"let event of eventsKids\" >\n              <ng-container  *ngIf=\"event.startDate=='2' && event.startMonth===index \" >\n                <div (click)=\"openDetailModal(event.activity)\" class=\"oneEventBloc\">\n                      <span style=\"font-size: 8px;\">from the {{event.startDay}} to the {{event.endDay}}</span>\n                    <span>{{event.activity.activity}}</span>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n          <div class=\"day\">\n            <span class=\"turquoise-bg\">Mercredi</span>\n            <div *ngFor=\"let event of eventsKids\" >\n              <ng-container  *ngIf=\"event.startDate=='3' && event.startMonth===index \" >\n                <div (click)=\"openDetailModal(event.activity)\" class=\"oneEventBloc\">\n                      <span style=\"font-size: 8px;\">from the {{event.startDay}} to the {{event.endDay}}</span>\n                    <span>{{event.activity.activity}}</span>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n          <div class=\"day\">\n            <span class=\"turquoise-bg\">Jeudi</span>\n            <div *ngFor=\"let event of eventsKids\" >\n              <ng-container  *ngIf=\"event.startDate=='4' && event.startMonth===index \" >\n                <div (click)=\"openDetailModal(event.activity)\" class=\"oneEventBloc\">\n                      <span style=\"font-size: 8px;\">from the {{event.startDay}} to the {{event.endDay}}</span>\n                    <span>{{event.activity.activity}}</span>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n          <div class=\"day\">\n            <span class=\"turquoise-bg\">Vendredi</span>\n            <div *ngFor=\"let event of eventsKids\" >\n              <ng-container  *ngIf=\"event.startDate=='5' && event.startMonth===index \" >\n                <div (click)=\"openDetailModal(event.activity)\" class=\"oneEventBloc\">\n                      <span style=\"font-size: 8px;\">from the {{event.startDay}} to the {{event.endDay}}</span>\n                    <span>{{event.activity.activity}}</span>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n          <div class=\"day\">\n            <span style=\"background-color:#FFAB2B ;padding:2px\">Samedi</span>\n            <div *ngFor=\"let event of eventsKids\" >\n              <ng-container  *ngIf=\"event.startDate=='6' && event.startMonth===index \" >\n                <div (click)=\"openDetailModal(event.activity)\" style=\"background-color: #FFAB2B; padding:2px;display: flex;flex-direction:column;justify-content:space-around;margin:2px 0\">\n                      <span style=\"font-size: 8px;\">from the {{event.startDay}} to the {{event.endDay}}</span>\n                    <span>{{event.activity.activity}}</span>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n          <div style=\" font-size:8px\" class=\"day\">\n            <span style=\"background-color:#EF7534 ;padding:2px\">Dimanche</span>\n            <div *ngFor=\"let event of eventsKids\" >\n              <ng-container  *ngIf=\"event.startDate=='0' && event.startMonth===index \" >\n                <div (click)=\"openDetailModal(event.activity)\" style=\"background-color: #EF7534; padding:2px;display: flex;flex-direction:column;justify-content:space-around;margin:2px 0\">\n                      <span>from the {{event.startDay}} to the {{event.endDay}}</span>\n                    <span>{{event.activity.activity}}</span>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n        <img style=\"width: 100%;margin-top:240px;z-index:10\" src=\"../../../../assets/svg/buildings.svg\" alt=\"\">\n      </div>\n    </ion-slide>\n  </ion-slides>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_kids_planning_planning_module_ts.js.map