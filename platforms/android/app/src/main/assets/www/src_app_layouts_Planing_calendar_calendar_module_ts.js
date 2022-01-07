(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_Planing_calendar_calendar_module_ts"],{

/***/ 35811:
/*!*********************************************************************************!*\
  !*** ./src/app/layouts/Planing/calendar-modal/calendar-modal-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarModalPageRoutingModule": () => (/* binding */ CalendarModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _calendar_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-modal.page */ 98112);




const routes = [
    {
        path: '',
        component: _calendar_modal_page__WEBPACK_IMPORTED_MODULE_0__.CalendarModalPage
    }
];
let CalendarModalPageRoutingModule = class CalendarModalPageRoutingModule {
};
CalendarModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalendarModalPageRoutingModule);



/***/ }),

/***/ 63368:
/*!*************************************************************************!*\
  !*** ./src/app/layouts/Planing/calendar-modal/calendar-modal.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarModalPageModule": () => (/* binding */ CalendarModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _calendar_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-modal-routing.module */ 35811);
/* harmony import */ var _calendar_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-modal.page */ 98112);
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ 87732);








let CalendarModalPageModule = class CalendarModalPageModule {
};
CalendarModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _calendar_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarModalPageRoutingModule,
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__.NgCalendarModule
        ],
        declarations: [_calendar_modal_page__WEBPACK_IMPORTED_MODULE_1__.CalendarModalPage]
    })
], CalendarModalPageModule);



/***/ }),

/***/ 53452:
/*!*********************************************************************!*\
  !*** ./src/app/layouts/Planing/calendar/calendar-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPageRoutingModule": () => (/* binding */ CalendarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.page */ 95857);




const routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_0__.CalendarPage
    }
];
let CalendarPageRoutingModule = class CalendarPageRoutingModule {
};
CalendarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalendarPageRoutingModule);



/***/ }),

/***/ 14040:
/*!*************************************************************!*\
  !*** ./src/app/layouts/Planing/calendar/calendar.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPageModule": () => (/* binding */ CalendarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-routing.module */ 53452);
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.page */ 95857);
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic2-calendar */ 87732);
/* harmony import */ var _calendar_modal_calendar_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar-modal/calendar-modal.module */ 63368);
/* harmony import */ var _eventmodal_eventmodal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../eventmodal/eventmodal.component */ 3058);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/component/component.module */ 55051);











let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarPageRoutingModule,
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_10__.NgCalendarModule,
            _calendar_modal_calendar_modal_module__WEBPACK_IMPORTED_MODULE_2__.CalendarModalPageModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_4__.ComponentModule
        ],
        declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_1__.CalendarPage, _eventmodal_eventmodal_component__WEBPACK_IMPORTED_MODULE_3__.EventmodalComponent],
        providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.LOCALE_ID, useValue: 'en-GB' }]
    })
], CalendarPageModule);



/***/ }),

/***/ 95857:
/*!***********************************************************!*\
  !*** ./src/app/layouts/Planing/calendar/calendar.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarPage": () => (/* binding */ CalendarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./calendar.page.html */ 50449);
/* harmony import */ var _calendar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.page.scss */ 73358);
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ionic2-calendar */ 87732);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calendar-modal/calendar-modal.page */ 98112);
/* harmony import */ var _eventmodal_eventmodal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../eventmodal/eventmodal.component */ 3058);
/* harmony import */ var src_app_shared_Service_calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/Service/calendar.service */ 13183);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/Service/notifications.service */ 43367);














let CalendarPage = class CalendarPage {
    constructor(alertCtrl, locale, modalCtrl, calendarService, userService, router, renderer, elem, notificationsService) {
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.modalCtrl = modalCtrl;
        this.calendarService = calendarService;
        this.userService = userService;
        this.router = router;
        this.renderer = renderer;
        this.elem = elem;
        this.notificationsService = notificationsService;
        this.slider = false;
        this.eventSource = [];
        this.eventDays = [];
        this.show = false;
        this.apiImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.apiImg + 'User/';
        this.calendar = {
            mode: 'month',
            locale: 'en-GB',
            currentDate: new Date(),
            autoSelect: false,
        };
        this.notif = { reciever: '', userOwner: '', text: '', event: '' };
    }
    ngAfterContentChecked() {
        let events = [];
        let elements = this.elem.nativeElement.querySelectorAll('td');
        for (var i = 0; i < elements.length; ++i) {
            if (elements[i].className === 'monthview-primary-with-event')
                events.push(elements[i]);
        }
        events.forEach(element => {
            if (this.slider)
                this.renderer.addClass(element, 'dark');
            else
                this.renderer.addClass(element, 'light');
        });
        // console.log(events);
    }
    ngOnInit() {
        const url = this.router.url.split('/', 6);
        // console.log(url);
        if (url[1] === 'calendar') {
            this.slider = false;
        }
        if (url[1] === 'planning') {
            this.slider = true;
        }
        this.getMe();
        this.subscription = this.calendarService.getEvent().subscribe((event) => {
            this.openCalModal(null, event);
        });
    }
    sliedNext() {
        this.slides.slideNext();
    }
    slideBack() {
        this.slides.slidePrev();
    }
    // Change current month/week/day
    next() {
        this.myCal.slideNext();
    }
    back() {
        this.myCal.slidePrev();
    }
    getMe() {
        this.userService.getMe().subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.user$ = res.data.data;
            // console.log(this.user$);
            this.loadEvents();
        }));
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
    getDayName(day, month, year) {
        const newDate = new Date(year, month, day);
        const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
        return days[newDate.getDay()];
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
        // console.log(this.eventDays);
    }
    // Selected date reange and hence title changed
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onCurrentDateChanged(event) {
        // console.log(event.getMonth());
        this.selectedMonth = event.getMonth();
        this.selectedYear = event.getYear();
        this.extractEventDays();
    }
    openDetailModal(evt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _eventmodal_eventmodal_component__WEBPACK_IMPORTED_MODULE_3__.EventmodalComponent,
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
    openCalModal(sTime, evnt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _calendar_modal_calendar_modal_page__WEBPACK_IMPORTED_MODULE_2__.CalendarModalPage,
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
                    const dateParsedStart = moment__WEBPACK_IMPORTED_MODULE_6__(event.startTime, 'YYYY-MM-DD HH:mm').toDate();
                    const dateParsedEnd = moment__WEBPACK_IMPORTED_MODULE_6__(event.endTime, 'YYYY-MM-DD HH:mm').toDate();
                    event.startTime = dateParsedStart;
                    event.endTime = dateParsedEnd;
                    if (evnt === null) {
                        this.calendarService.addActivity(event).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    onTimeSelected(ev) {
        // eslint-disable-next-line max-len
        //console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
        this.openCalModal(ev, null);
    }
    formateEventDates(eventTime) {
        // console.log(eventTime);
        const dateFormate = moment__WEBPACK_IMPORTED_MODULE_6__(eventTime, 'YYYY-MM-DD HH:mm').toDate();
        return dateFormate;
    }
    // Calendar event was clicked
    onEventSelected(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
    removeEvents() {
        this.eventSource = [];
    }
    createNotif(event) {
        this.notif.userOwner = this.user$._id;
        this.notif.reciever = this.user$._id;
        this.notif.text = 'a créé un événnement';
        this.notif.event = event._id;
        this.notificationsService.postNotification(this.notif).subscribe();
    }
};
CalendarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_11__.LOCALE_ID,] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_app_shared_Service_calendar_service__WEBPACK_IMPORTED_MODULE_4__.CalendarService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef },
    { type: src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_8__.NotificationsService }
];
CalendarPage.propDecorators = {
    myCal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [ionic2_calendar__WEBPACK_IMPORTED_MODULE_13__.CalendarComponent,] }],
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['slides',] }],
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input }]
};
CalendarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-home',
        template: _raw_loader_calendar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calendar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CalendarPage);



/***/ }),

/***/ 73358:
/*!*************************************************************!*\
  !*** ./src/app/layouts/Planing/calendar/calendar.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n.dateTitle {\n  color: white;\n  margin: auto;\n  text-align: center;\n}\n\n::ng-deep .table {\n  border: none !important;\n}\n\n::ng-deep ion-list .list-md {\n  --background: none;\n}\n\n::ng-deep ion-list .list-ios {\n  --background: none;\n}\n\n::ng-deep .swiper-wrapper {\n  align-items: center;\n}\n\n::ng-deep .monthview-container {\n  height: auto !important;\n  color: #cfcfcf !important;\n}\n\n::ng-deep .monthview-datetable td,\n::ng-deep .monthview-datetable th {\n  border: none !important;\n  color: white;\n  margin: 5px;\n}\n\n::ng-deep .monthview-current {\n  color: #18520a !important;\n}\n\n::ng-deep .cal-green {\n  padding-top: 0;\n  border-radius: 30px;\n  background: linear-gradient(45deg, #efeff5 0%, #217438 0%, #8ebf25 100%);\n}\n\n::ng-deep .text-muted {\n  color: rgba(255, 0, 0, 0) !important;\n  background-color: rgba(255, 255, 255, 0) !important;\n}\n\n::ng-deep .cal-white {\n  padding-top: 0;\n  border-radius: 30px;\n  background-color: white;\n}\n\n::ng-deep .monthview-primary-with-event,\n::ng-deep .calendar-event-inner {\n  color: #247238;\n}\n\n::ng-deep .monthview-primary-with-event {\n  margin: 3px !important;\n  background-color: white !important;\n  color: #247238 !important;\n  border-radius: 10px;\n}\n\n::ng-deep .light {\n  background-color: #ebebeb !important;\n}\n\n::ng-deep .dark {\n  color: white !important;\n  background-color: #5cb13e !important;\n  border: 1px solid;\n}\n\n::ng-deep .item-native {\n  background: #ebebeb18;\n}\n\n.item-native {\n  background: #ebebeb18;\n}\n\n.event-indicator {\n  background: white;\n  width: 5px;\n  height: 5px;\n  border-radius: 5px;\n  display: table-cell;\n}\n\n.with-event {\n  background-color: none;\n  border-radius: 15px;\n}\n\nion-item {\n  --background: transparent;\n}\n\n.ion-color-primary {\n  --ion-color-base: #247238 !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(\n    --ion-color-primary-contrast-rgb,\n    255,\n    255,\n    255\n  ) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #247238) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #247238) !important;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n}\n\nion-content {\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n\n.stat {\n  margin-left: 10px;\n  border-radius: 10px;\n  background: #fff;\n  font-size: small;\n  max-width: 120px;\n}\n\n.dateCol {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBR0U7RUFDRSx1QkFBQTtBQUFKOztBQUdFO0VBQ0Usa0JBQUE7QUFESjs7QUFHRTtFQUNFLGtCQUFBO0FBREo7O0FBR0U7RUFDRSxtQkFBQTtBQURKOztBQUlFO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUtFOztFQUVFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFISjs7QUFLRTtFQUNFLHlCQUFBO0FBSEo7O0FBS0U7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFFQSx3RUFBQTtBQUpKOztBQVdFO0VBQ0Usb0NBQUE7RUFDQSxtREFBQTtBQVRKOztBQVdFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFUSjs7QUFZRTs7RUFFRSxjQUFBO0FBVko7O0FBWUU7RUFDRSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQVZKOztBQVlFO0VBQ0Usb0NBQUE7QUFWSjs7QUFhRTtFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQVhKOztBQWNFO0VBQ0UscUJBQUE7QUFaSjs7QUFnQkE7RUFDRSxxQkFBQTtBQWJGOztBQWVBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFaRjs7QUFjQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUFYRjs7QUFjQTtFQUNFLHlCQUFBO0FBWEY7O0FBY0E7RUFDRSxvQ0FBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQTs7Ozs7Y0FBQTtFQU1BLHFFQUFBO0VBQ0EsbUVBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQVhGOztBQWdCQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUFiRjs7QUFnQkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBYkY7O0FBaUJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtBQWRGIiwiZmlsZSI6ImNhbGVuZGFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5kYXRlVGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Om5nLWRlZXAge1xuICAudGFibGUge1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLWxpc3QgLmxpc3QtbWQge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuICBpb24tbGlzdCAubGlzdC1pb3Mge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuICAuc3dpcGVyLXdyYXBwZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubW9udGh2aWV3LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHJnYigyMDcsIDIwNywgMjA3KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1vbnRodmlldy1kYXRldGFibGUgdGQsXG4gIC5tb250aHZpZXctZGF0ZXRhYmxlIHRoIHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOjVweFxuICB9XG4gIC5tb250aHZpZXctY3VycmVudCB7XG4gICAgY29sb3I6IHJnYigyNCwgODIsIDEwKSAhaW1wb3J0YW50O1xuICB9XG4gIC5jYWwtZ3JlZW4ge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG5cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA0NWRlZyxcbiAgICAgIHJnYigyMzksIDIzOSwgMjQ1KSAwJSxcbiAgICAgIHJnYmEoMzMsIDExNiwgNTYsIDEpIDAlLFxuICAgICAgIzhlYmYyNSAxMDAlXG4gICAgKTtcbiAgfVxuICAudGV4dC1tdXRlZCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgIWltcG9ydGFudDtcbiAgfVxuICAuY2FsLXdoaXRlIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm1vbnRodmlldy1wcmltYXJ5LXdpdGgtZXZlbnQsXG4gIC5jYWxlbmRhci1ldmVudC1pbm5lciB7XG4gICAgY29sb3I6ICMyNDcyMzg7XG4gIH1cbiAgLm1vbnRodmlldy1wcmltYXJ5LXdpdGgtZXZlbnQge1xuICAgIG1hcmdpbjogM3B4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzI0NzIzOCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLmxpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kYXJrIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiMTNlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gIH1cblxuICAuaXRlbS1uYXRpdmUge1xuICAgIGJhY2tncm91bmQ6ICNlYmViZWIxODtcbiAgfVxufVxuXG4uaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViMTg7XG59XG4uZXZlbnQtaW5kaWNhdG9yIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG4ud2l0aC1ldmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgLS1pb24tY29sb3ItYmFzZTogIzI0NzIzOCAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsXG4gICAgMjU1LFxuICAgIDI1NSxcbiAgICAyNTVcbiAgKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUsICMyNDcyMzgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQsICMyNDcyMzgpICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuXG4gIC8vIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbn1cblxuLnN0YXQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbn1cblxuXG4uZGF0ZUNvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuIl19 */");

/***/ }),

/***/ 50449:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/Planing/calendar/calendar.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Calendrier\" [inParam]=\"true\"></app-header>\n\n<ion-content>\n  <ion-card\n    class=\"MyCard\"\n    style=\"box-shadow: none; margin-top: 20px !important\"\n  >\n    <ion-card-content [ngClass]=\"slider ? 'cal-white' : 'cal-green' \">\n      <div style=\"display:flex;align-items:center\">\n        <div style=\"display: flex; align-items:center;margin:10px 0\">\n          <div size=\"2\">\n            <ion-avatar [ngClass]=\"slider? '' : ''\">\n              <img [src]=\"apiImg+user$?.photo\" />\n            </ion-avatar>\n          </div>\n          <div style=\"margin-left: 10px;\">\n            <h2 [style.color]=\"slider ? 'black' : 'white'\">\n              {{user$?.name}}\n            </h2>\n          </div>\n        </div>\n        <div size=\"10\" style=\"margin: auto\">\n            <div style=\"margin-left: 40px\">\n              <button\n                color=\"white\"\n                style=\"\n                  box-shadow: 0px 3px 10px rgba(114, 114, 114, 0.452);\n                  border-radius: 20px;\n                  margin: 0 10px;\n                  height: 30px;\n                  width: 100px;\n                  color: #898b8b;\n                  background: white;\n                  opacity: 0.8;\n                \"\n                routerLink=\"/statistiqueuser\"\n              >\n                Statistiques\n              </button>\n            </div>\n\n        </div>\n      </div>\n\n      <ion-row>\n        <!-- Move back one screen of the slides -->\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <ion-icon\n            color=\"light\"\n            name=\"chevron-back-outline\"\n            size=\"large\"\n            (click)=\"back()\"\n          ></ion-icon>\n        </ion-col>\n        <ion-col\n          size=\"8\"\n          class=\"dateTitle\"\n          [style.color]=\"slider ? 'black' : 'white'\"\n        >\n          <h2>{{ viewTitle }}</h2>\n        </ion-col>\n        <!-- Move forward one screen of the slides -->\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <ion-icon\n            color=\"light\"\n            name=\"chevron-forward-outline\"\n            size=\"large\"\n            (click)=\"next()\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <calendar\n        [eventSource]=\"eventSource\"\n        [autoSelect]=\"false\"\n        (onTimeSelected)=\"onTimeSelected($event)\"\n        [currentDate]=\"calendar.currentDate\"\n        (onTitleChanged)=\"onViewTitleChanged($event)\"\n        (onCurrentDateChanged)=\"onCurrentDateChanged($event)\"\n        [showEventDetail]=\"false\"\n      >\n      </calendar>\n    </ion-card-content>\n  </ion-card>\n  <div class=\"container\" *ngIf=\"!slider\">\n    <ion-card *ngFor=\"let day of eventDays\" style=\"background-color: #edeef877;border-radius:10px\">\n      <ion-card-content style=\"padding: 0;\">\n        <ion-row>\n          <ion-col\n            size=\"2\"\n            style=\"\n              background: linear-gradient(\n                45deg,\n                rgb(239, 239, 245) 0%,\n                rgba(33, 116, 56, 1) 0%,\n                #8ebf25 100%\n              );\n              border-bottom-left-radius: 10px;\n              border-top-left-radius: 10px;\n            \"\n          >\n            <div class=\"dateCol\">\n              <h1\n                style=\"text-align: center\"\n                [style.color]=\"slider ? 'black' : 'white'\"\n              >\n                {{getDayName(day-1,selectedMonth+1,selectedYear)}} {{day}}\n              </h1>\n            </div>\n          </ion-col>\n          <ng-container style=\"position:relative\">\n            <div>\n              <ng-container style=\"display: flex;\" *ngFor=\"let event of eventSource\">\n                <ion-row\n                  *ngIf=\"event.startTime.getDate() === day\"\n                  (click)=\"openDetailModal(event)\"\n                >\n                  <ion-item style=\"--background-color: #edeef8\">\n                    <h2>\n                      {{event.startTime.getHours() <\n                      10?'0':''}}{{event.startTime.getHours()}}:{{event.startTime.getMinutes()\n                      < 10?'0':''}}{{event.startTime.getMinutes()}}\n                    </h2>\n                    <ion-row style=\"margin: 10px 0 10px 20px;\">\n                      <ion-col size=\"12\" style=\"height: 20px\">\n                        <h2><b> {{event.activity}} </b></h2>\n                      </ion-col>\n                      <ion-col size=\"12\">\n                        <p>{{event.notes}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n                </ion-row>\n              </ng-container>\n            </div>\n            <ion-icon style=\"position: absolute;right:2px;top:40%;width:20px;height:20px\" name=\"chevron-forward-outline\"></ion-icon>\n          </ng-container>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <ion-row style=\"margin: 0px\" *ngIf=\"slider\">\n    <ion-col size=\"12\">\n      <div\n        style=\"\n          text-align: center;\n          z-index: 2;\n          position: absolute;\n          top: 50%;\n          left: -15px;\n        \"\n      >\n        <ion-icon\n          (click)=\"slideBack()\"\n          name=\"chevron-back-circle\"\n          size=\"large\"\n        ></ion-icon>\n      </div>\n\n      <div\n        style=\"\n          text-align: center;\n          z-index: 2;\n          position: absolute;\n          top: 50%;\n          right: -15px;\n        \"\n      >\n        <ion-icon\n          (click)=\"sliedNext()\"\n          name=\"chevron-forward-circle\"\n          size=\"large\"\n        ></ion-icon>\n      </div>\n      <ion-slides #slides style=\"width: 90%\">\n        <ng-container>\n          <ion-slide *ngFor=\"let day of eventDays\">\n            <ion-col size=\"12\">\n              <ion-card\n                (click)=\"openList()\"\n                style=\"\n                  box-shadow: -3px 5px 18px 5px rgba(0, 0, 0, 0.06);\n                  margin: 0px;\n                \"\n              >\n                <ion-card-content style=\"background-color: #edeef8\">\n                  <ion-row>\n                    <ion-col\n                      size=\"3\"\n                      style=\"\n                        background: linear-gradient(\n                          135deg,\n                          #247238,\n                          #247238,\n                          #8ebf25,\n                          #8ebf25\n                        );\n                        border-radius: 10px;\n                      \"\n                    >\n                      <div class=\"dateCol\">\n                        <h1 style=\"color: aliceblue; text-align: center\">\n                          {{getDayName(day-1,selectedMonth+1,selectedYear)}}\n                          {{day}}\n                        </h1>\n                      </div>\n                    </ion-col>\n                    <ion-col size=\"9\">\n                      <ng-container *ngFor=\"let event of eventSource\">\n                        <ion-row\n                          *ngIf=\"event.startTime.getDate() === day\"\n                          (click)=\"openDetailModal(event)\"\n                        >\n                          <ion-col size=\"3\">\n                            <b\n                              >{{event.startTime.getHours() <\n                              10?'0':''}}{{event.startTime.getHours()}}:{{event.startTime.getMinutes()\n                              < 10?'0':''}}{{event.startTime.getMinutes()}}\n                            </b>\n                          </ion-col>\n                          <ion-col size=\"9\">\n                            <div style=\"text-align: left\">\n                              <b>{{event.activity}}</b>\n                            </div>\n                            <div style=\"text-align: left\">{{event.notes}}</div>\n                          </ion-col>\n                        </ion-row>\n                      </ng-container>\n                    </ion-col>\n                  </ion-row>\n                </ion-card-content>\n              </ion-card>\n            </ion-col>\n          </ion-slide>\n        </ng-container>\n      </ion-slides>\n    </ion-col>\n    <div></div>\n  </ion-row>\n</ion-content>\n\n<ion-footer> </ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_Planing_calendar_calendar_module_ts.js.map