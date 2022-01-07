(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_shared_Service_calendar_service_ts"],{

/***/ 13183:
/*!****************************************************!*\
  !*** ./src/app/shared/Service/calendar.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarService": () => (/* binding */ CalendarService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 1128);





let CalendarService = class CalendarService {
    constructor(apiService) {
        this.apiService = apiService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    sendEvent(evt) {
        this.subject.next({ event: evt });
    }
    getEvent() {
        return this.subject.asObservable();
    }
    getActivitiesbyID(id) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res.data.data));
    }
    getEventsbyID(id) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}?createdBy=${id}&type='event'`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res.data.data));
    }
    getAllEvents() {
        let event = 'event';
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}?type=${event}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res.data.data));
    }
    addActivity(activity) {
        return this.apiService
            .post(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}`, activity)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res));
    }
    updateEvent(event) {
        return this.apiService.put(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}${event._id}`, event);
    }
    deleteEvent(id) {
        return this.apiService.delete(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}` + id);
    }
    getEventbyID(id) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res.data.data));
    }
    updateCoverEvent(event) {
        console.log(event);
        return this.apiService.put(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiCalendar}cover`, event);
    }
};
CalendarService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
CalendarService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], CalendarService);



/***/ })

}]);
//# sourceMappingURL=src_app_shared_Service_calendar_service_ts.js.map