(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["default-src_app_layouts_community_add_add_module_ts"],{

/***/ 21621:
/*!*************************************************************!*\
  !*** ./src/app/layouts/community/add/add-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPageRoutingModule": () => (/* binding */ AddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.page */ 20760);




const routes = [
    {
        path: '',
        component: _add_page__WEBPACK_IMPORTED_MODULE_0__.AddPage
    }
];
let AddPageRoutingModule = class AddPageRoutingModule {
};
AddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddPageRoutingModule);



/***/ }),

/***/ 38188:
/*!*****************************************************!*\
  !*** ./src/app/layouts/community/add/add.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPageModule": () => (/* binding */ AddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-routing.module */ 21621);
/* harmony import */ var _add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.page */ 20760);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/component.module */ 55051);








let AddPageModule = class AddPageModule {
};
AddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddPageRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_add_page__WEBPACK_IMPORTED_MODULE_1__.AddPage]
    })
], AddPageModule);



/***/ }),

/***/ 20760:
/*!***************************************************!*\
  !*** ./src/app/layouts/community/add/add.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddPage": () => (/* binding */ AddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add.page.html */ 72971);
/* harmony import */ var _add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.page.scss */ 89226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_Model_Activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Model/Activity */ 36549);
/* harmony import */ var src_app_shared_Service_calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Service/calendar.service */ 13183);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var _shared_Model_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/Model/page */ 55463);
/* harmony import */ var _shared_Service_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/Service/page.service */ 82112);









let AddPage = class AddPage {
    constructor(pageService, userService, calendarService, elemRef) {
        this.pageService = pageService;
        this.userService = userService;
        this.calendarService = calendarService;
        this.elemRef = elemRef;
        this.evennement = false;
        this.dropDown = false;
        this.page = new _shared_Model_page__WEBPACK_IMPORTED_MODULE_5__.Page();
        this.event = new src_app_shared_Model_Activity__WEBPACK_IMPORTED_MODULE_2__.Activity();
        this.markers = [];
    }
    onClickOutside(targetElement) {
        const target = this.elemRef.nativeElement.querySelector('div');
        if (targetElement.tagName === target.tagName) {
            this.dropDown = false;
        }
    }
    ngOnInit() {
        this.private = false;
        this.public = true;
        this.selected = 'Page';
        this.getMe();
        this.showMap = false;
    }
    openDropDown() {
        if (this.dropDown === false) {
            this.dropDown = true;
        }
        else if (this.dropDown === true) {
            this.dropDown = false;
        }
    }
    segmentChanged(ev) {
        this.selected = ev.detail.value;
        this.toggleMap();
        this.lat = '';
        this.lng = '';
        console.log(this.showMap);
    }
    createPage(page) {
        this.page.lattitude = this.eventPageLat;
        this.page.langitude = this.eventPageLng;
        this.page.createdBy = this.user._id;
        this.pageService.addPage(page).subscribe(res => console.log(res));
    }
    getMe() {
        this.userService.getMe().subscribe(res => {
            this.user = res.data.data;
        });
    }
    createEvent(event) {
        this.event.lattitude = this.eventPageLat;
        this.event.langitude = this.eventPageLng;
        this.event.type = 'event';
        this.calendarService.addActivity(event).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(res);
        }));
    }
    tryGeolocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.initMap();
        });
    }
    toggleMap() {
        this.showMap = !this.showMap;
        if (this.showMap === true) {
            this.tryGeolocation();
        }
    }
    initMap() {
        this.markers = [];
        this.map = new google.maps.Map(document.getElementById('map'), {
            mapId: '59300b885073112e',
            center: { lat: this.lat, lng: this.lng },
            zoom: 8,
        });
        this.map.addListener('click', (mapsMouseEvent) => {
            this.hideMarkers();
            this.markers = [];
            this.eventPageLat = mapsMouseEvent.latLng.toJSON().lat;
            this.eventPageLng = mapsMouseEvent.latLng.toJSON().lng;
            let marker = new google.maps.Marker({
                position: { lat: this.eventPageLat, lng: this.eventPageLng },
                map: this.map,
            });
            this.markers.push(marker);
        });
    }
    setMapOnAll(map) {
        for (let i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    }
    hideMarkers() {
        this.setMapOnAll(null);
    }
    showMarkers() {
        this.setMapOnAll(this.map);
    }
};
AddPage.ctorParameters = () => [
    { type: _shared_Service_page_service__WEBPACK_IMPORTED_MODULE_6__.PageService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_shared_Service_calendar_service__WEBPACK_IMPORTED_MODULE_3__.CalendarService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef }
];
AddPage.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef, static: false },] }],
    onClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.HostListener, args: ['click', ['$event.target'],] }]
};
AddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add',
        template: _raw_loader_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddPage);



/***/ }),

/***/ 36549:
/*!******************************************!*\
  !*** ./src/app/shared/Model/Activity.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Activity": () => (/* binding */ Activity)
/* harmony export */ });
class Activity {
}


/***/ }),

/***/ 55463:
/*!**************************************!*\
  !*** ./src/app/shared/Model/page.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* binding */ Page)
/* harmony export */ });
class Page {
}


/***/ }),

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



/***/ }),

/***/ 89226:
/*!*****************************************************!*\
  !*** ./src/app/layouts/community/add/add.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 20px;\n  align-items: center;\n}\n\nion-segment-button {\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 5px 4px 4px;\n  height: 35px;\n  color: #858484;\n  --background-checked: #d8d6d6ab;\n  text-transform: none;\n  min-height: unset;\n  --indicator-color: none;\n  min-width: 80px;\n}\n\n.pageName {\n  border-radius: 20px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 15px 10px 0px 0;\n}\n\ninput:focus {\n  outline: none !important;\n}\n\ninput {\n  border: none;\n  width: 100%;\n}\n\n.page {\n  margin-left: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.pageCategory {\n  margin: 50px 10px 0 0;\n  border-radius: 20px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n}\n\n.description {\n  border-radius: 20px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 15px 10px 0px 0;\n  border: none !important;\n}\n\ntextarea {\n  border: none !important;\n}\n\ntextarea:focus {\n  outline: none !important;\n}\n\n.create {\n  border-radius: 20px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 30px 0 10px 0;\n  width: 20%;\n  color: white;\n  background: linear-gradient(45deg, #4B5149 0%, #286029 35%, #8AB211 100%);\n}\n\n.cancel {\n  border-radius: 20px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  width: 20%;\n  color: white;\n  background: linear-gradient(45deg, #901822 0%, #DA1A39 35%, #DD193A 100%);\n}\n\n.buttons {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\ninput[type=date]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n\n.eventDate {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.dateInput label {\n  font-size: 10.5px;\n  width: 140px;\n}\n\n.dateInput {\n  display: flex;\n  align-items: center;\n  border-radius: 20px;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.43);\n  margin: 15px 10px 0px 0;\n  width: 45%;\n}\n\n.eventHour {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 30px;\n}\n\n.dateInput input {\n  font-size: 12px;\n}\n\n.confidentiality {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  border-radius: 30px;\n  background-color: #F1F2F2;\n  width: 70%;\n}\n\n.alert-wrapper.sc-ion-alert-md {\n  border-radius: 20px !important;\n}\n\n.alert-message.sc-ion-alert-md:empty {\n  display: none;\n}\n\n#map {\n  height: 200px;\n  margin: 20px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5RUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFDQTtFQUNBLGFBQUE7QUFFQTs7QUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFHRiIsImZpbGUiOiJhZGQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHJnYigwIDAgMCAvIDQzJSk7XG4gIG1hcmdpbjogNXB4IDRweCA0cHg7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6ICM4NTg0ODQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjZDhkNmQ2YWI7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBtaW4taGVpZ2h0OiB1bnNldDtcbiAgLS1pbmRpY2F0b3ItY29sb3I6IG5vbmU7XG4gIG1pbi13aWR0aDogODBweDtcbn1cblxuLnBhZ2VOYW1lIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHJnYigwIDAgMCAvIDQzJSk7XG4gIG1hcmdpbjogMTVweCAxMHB4IDBweCAwO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFnZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wYWdlQ2F0ZWdvcnkge1xuICBtYXJnaW46IDUwcHggMTBweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCByZ2IoMCAwIDAgLyA0MyUpO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggcmdiKDAgMCAwIC8gNDMlKTtcbiAgbWFyZ2luOiAxNXB4IDEwcHggMHB4IDA7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNyZWF0ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCByZ2IoMCAwIDAgLyA0MyUpO1xuICBtYXJnaW46IDMwcHggMCAxMHB4IDA7XG4gIHdpZHRoOiAyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNEI1MTQ5IDAlLCAjMjg2MDI5IDM1JSwgIzhBQjIxMSAxMDAlKTtcbn1cblxuLmNhbmNlbCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCByZ2IoMCAwIDAgLyA0MyUpO1xuICB3aWR0aDogMjAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzkwMTgyMiAwJSwgI0RBMUEzOSAzNSUsICNERDE5M0EgMTAwJSk7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ldmVudERhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kYXRlSW5wdXQgbGFiZWwge1xuICBmb250LXNpemU6IDEwLjVweDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuXG4uZGF0ZUlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHJnYigwIDAgMCAvIDQzJSk7XG4gIG1hcmdpbjogMTVweCAxMHB4IDBweCAwO1xuICB3aWR0aDogNDUlO1xufVxuXG4uZXZlbnRIb3VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZGF0ZUlucHV0IGlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29uZmlkZW50aWFsaXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjJGMjtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xufVxuLmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LW1kOmVtcHR5IHtcbmRpc3BsYXk6IG5vbmU7fVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ 72971:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/community/add/add.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Créer\" [isCommunityCreate]=\"true\"></app-header>\n\n<ion-content>\n  <ion-grid id=\"container\">\n    <p style=\"margin-left: 10px;\">Créer un(e): </p>\n    <ion-row>\n      <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"Page\">\n        <ion-segment-button value=\"Page\">\n          <ion-label style=\"\">Page</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"Evennement\">\n          <ion-label style=\"\">Evennement</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"selected === 'Page'\" class=\"page\">\n    <div>Informations sur la page:</div>\n    <ion-item class=\"pageName\">\n      <input placeholder=\"Nom de la page (Obligatoire)\" type=\"\" [(ngModel)]=\"page.name\" />\n    </ion-item>\n    <div style=\"margin-top: 10px; font-size:12px;color:grey;width:90%\">Utilisez le nom de votre entreprise, marque ou\n      organisation, ou un nom qui explique l'objet de la page</div>\n    <ion-item class=\"pageCategory\">\n      <ion-list style=\"width: 100%;\">\n        <ion-item>\n          <ion-label>Catégorie</ion-label>\n          <ion-select [(ngModel)]=\"page.category\" placeholder=\"Catégorie\">\n            <ion-select-option value=\"lieu\">lieu</ion-select-option>\n            <ion-select-option value=\"Commerce\">Commerce local</ion-select-option>\n            <ion-select-option value=\"Entreprise\">Entreprise</ion-select-option>\n            <ion-select-option value=\"Organisme\">Organisme</ion-select-option>\n            <ion-select-option value=\"Institution\">Institution</ion-select-option>\n            <ion-select-option value=\"Marque\">Marque</ion-select-option>\n            <ion-select-option value=\"Produit\">Produit</ion-select-option>\n            <ion-select-option value=\"Artiste\">Artiste</ion-select-option>\n            <ion-select-option value=\"Personnalité\">Personnalité publique</ion-select-option>\n            <ion-select-option value=\"Divertissement\">Divertissement</ion-select-option>\n            <ion-select-option value=\"association\">association</ion-select-option>\n            <ion-select-option value=\"communauté\">communauté</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n      </ion-list>\n    </ion-item>\n\n    <div style=\"margin-top: 10px; font-size:12px; color:grey;width:90%\">Choisissez une catégorie qui décrit le type de\n      l'entreprise, d'organisation ou de sujet que votre page représente</div>\n    <div *ngIf=\"page.category==='lieu'||page.category==='Commerce local'||page.category==='Entreprise'||page.category==='Organisme'||page.category==='Institution'||page.category==='association'\"  style=\"display: flex; align-items:center;margin:5px\">\n      <ion-button (click)=\"toggleMap()\" style=\"margin: 5px;\" color=\"success\" shape=\"rounded\" routerLinkActive=\"router-link-active\">\n        <img src=\"../../assets/icon/icon_position.png\" alt=\"\">\n      </ion-button>\n      <span>Ajouter l'adresse de la page sur le map</span>\n    </div>\n    <div *ngIf=\"showMap\">\n      <div #map id=\"map\"></div>\n    </div>\n\n    <ion-item class=\"description\">\n      <textarea placeholder=\"Description\" [(ngModel)]=\"page.description\" rows=5></textarea>\n    </ion-item>\n    <div class=\"buttons\">\n      <button class=\"create\" (click)=\"createPage(page)\">Créer</button>\n      <button class=\"cancel\">Annuler</button>\n    </div>\n\n  </ion-grid>\n\n  <ion-grid *ngIf=\"selected === 'Evennement'\">\n    <ion-item class=\"pageName\">\n      <input placeholder=\"Nom de l'evennement (Obligatoire)\"  [(ngModel)]=\"event.activity\" type=\"\" />\n    </ion-item>\n    <ion-row class=\"eventDate\">\n      <ion-item class=\"dateInput\">\n        <label for=\"\">Date de début</label>\n        <input placeholder=\"\" type=\"date\" [(ngModel)]=\"event.startTime\" />\n      </ion-item>\n      <ion-item class=\"dateInput\">\n        <label for=\"\">Date de fin</label>\n        <input placeholder=\"\" type=\"date\" [(ngModel)]=\"event.endTime\" />\n      </ion-item>\n    </ion-row>\n    <ion-row class=\"eventHour\">\n      <ion-item class=\"dateInput\">\n        <label for=\"\">Heure de début</label>\n        <input placeholder=\"\" type=\"time\" [(ngModel)]=\"event.startHour\" />\n      </ion-item>\n      <ion-item class=\"dateInput\">\n        <label for=\"\">Heure de fin</label>\n        <input placeholder=\"\" type=\"time\" [(ngModel)]=\"event.endHour\" />\n      </ion-item>\n    </ion-row>\n    <div (click)=\"openDropDown()\" (blur)=\"openDropDown()\"\n      style=\"display: flex;flex-direction:column; align-items:flex-start;position:relative;border-radius:20px; width:70%; background-color: #F1F2F2;margin:5px;\">\n      <span style=\"margin-right:10px; color: #909890;  margin-left:10px\">confidentialité</span>\n      <div\n        style=\"margin-left:15px; display:flex;align-items: center; justify-content:space-between;width: 90%; padding:5px\">\n        <div>\n          <ng-container style=\"display: flex;align-items:center\" *ngIf=\"public;else privacy\">\n            <img style=\"width:15px;height:15px; color:#8F978F\" src=\"../../../assets/svg/globe.svg\" alt=\"\">\n            <span style=\"color:#8F978F; font-weight:bold;\">Public</span>\n          </ng-container>\n          <ng-template style=\"display: flex;align-items:center\" #privacy>\n            <img style=\"width:15px;height:15px; color:#8F978F\" src=\"../../../assets/svg/lock.svg\" alt=\"\">\n            <span style=\"color:#8F978F; font-weight:bold;\">Private</span>\n          </ng-template>\n        </div>\n        <div>\n          <ng-container *ngIf=\"dropDown===false;else open\">\n            <ion-icon style=\"color:#8F978F\" name=\"chevron-forward-outline\"></ion-icon>\n          </ng-container>\n          <ng-template #open>\n            <ion-icon style=\"color:#8F978F\" name=\"chevron-down-outline\"></ion-icon>\n          </ng-template>\n        </div>\n      </div>\n      <div *ngIf=\"dropDown===true;else close\">\n        <div style=\"position: absolute;padding:12px;width:250px; display:flex;flex-direction:column;z-index:10;background-color:white;\n          box-shadow:-5px 5px 10px rgb(113, 113, 113);border-radius:10px;transform:translateX(20px) translateY(3px)\">\n          <div (click)=\"private = true; event.confidentiality = 'private';public=false;\"\n            style=\"display: flex;align-items:center;justify-content:space-between\">\n            <div style=\"display:flex;align-items:center;justify-content:space-between\">\n              <img style=\"width:20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/lock.svg\" alt=\"\">\n              <div style=\"display: flex;flex-direction:column\">\n                <span style=\"font-size: 14px; color:#8F978F\">Private</span>\n                <span style=\"font-size: 10px;\">Only invited people can see the event</span>\n              </div>\n            </div>\n            <ng-container *ngIf=\"private\">\n              <img style=\"width:20px;height:20px\" src=\"../../../assets/svg/check-privacy.svg\" alt=\"\">\n            </ng-container>\n          </div>\n          <div (click)=\"public = true ; event.confidentiality = 'public'; private=false;\"\n            style=\"display: flex;align-items:center;justify-content:space-between\">\n            <div style=\"display:flex;align-items:center;justify-content:space-between\">\n              <img style=\"width:20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/globe.svg\" alt=\"\">\n              <div style=\"display: flex;flex-direction:column\">\n                <span style=\"font-size:14px;color:#8F978F\">Public</span>\n                <span style=\"font-size: 10px;\">Anyone can see the event</span>\n              </div>\n            </div>\n            <ng-container *ngIf=\"public\">\n              <img style=\"width:20px;height:20px\" src=\"../../../assets/svg/check-privacy.svg\" alt=\"\">\n            </ng-container>\n          </div>\n        </div>\n      </div>\n      <ng-template #close>\n        <div style=\"position: absolute;\"></div>\n      </ng-template>\n    </div>\n    <div style=\"display: flex;align-items:center\">\n      <ion-button (click)=\"toggleMap()\" color=\"success\" shape=\"rounded\">\n        <img src=\"../../assets/icon/icon_position.png\" alt=\"\">\n      </ion-button>\n      <span>Ajouter l'adresse de l'evennement sur le map</span>\n    </div>\n    <div *ngIf=\"showMap\">\n      <div #map id=\"map\"></div>\n    </div>\n    <ion-item class=\"description\">\n      <textarea placeholder=\"Description\" [(ngModel)]=\"event.description\" rows=5></textarea>\n    </ion-item>\n    <div class=\"buttons\">\n      <button class=\"create\" (click)=\"createEvent(event)\">Créer</button>\n      <button class=\"cancel\">Annuler</button>\n    </div>\n  </ion-grid>\n</ion-content>\n<script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyB-VMPrrhwq2tQrKGcT8mbEpTEmPzAK5y8\"></script>\n<script src=\"https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js\"></script>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_layouts_community_add_add_module_ts.js.map