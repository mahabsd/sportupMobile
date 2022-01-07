(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["default-src_app_layouts_community_show-event_show-event_module_ts"],{

/***/ 2097:
/*!***************************************************************************!*\
  !*** ./src/app/layouts/community/show-event/show-event-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowEventPageRoutingModule": () => (/* binding */ ShowEventPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _show_event_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-event.page */ 85084);




const routes = [
    {
        path: '',
        component: _show_event_page__WEBPACK_IMPORTED_MODULE_0__.ShowEventPage
    }
];
let ShowEventPageRoutingModule = class ShowEventPageRoutingModule {
};
ShowEventPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShowEventPageRoutingModule);



/***/ }),

/***/ 16890:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/community/show-event/show-event.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowEventPageModule": () => (/* binding */ ShowEventPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _show_event_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-event-routing.module */ 2097);
/* harmony import */ var _show_event_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-event.page */ 85084);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/component.module */ 55051);








let ShowEventPageModule = class ShowEventPageModule {
};
ShowEventPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _show_event_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowEventPageRoutingModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule
        ],
        declarations: [_show_event_page__WEBPACK_IMPORTED_MODULE_1__.ShowEventPage]
    })
], ShowEventPageModule);



/***/ }),

/***/ 85084:
/*!*****************************************************************!*\
  !*** ./src/app/layouts/community/show-event/show-event.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowEventPage": () => (/* binding */ ShowEventPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_show_event_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./show-event.page.html */ 96278);
/* harmony import */ var _show_event_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-event.page.scss */ 46158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_Service_calendar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Service/calendar.service */ 13183);
/* harmony import */ var src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/Service/event.service */ 34489);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 51188);
/* harmony import */ var src_app_Shared_Service_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Shared/Service/image.service */ 97030);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/Service/follower.service */ 93647);













let ShowEventPage = class ShowEventPage {
    constructor(popoverController, eventService, activatedRoute, calendarService, elemRef, userservice, imageService, action, followerService) {
        this.popoverController = popoverController;
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.calendarService = calendarService;
        this.elemRef = elemRef;
        this.userservice = userservice;
        this.imageService = imageService;
        this.action = action;
        this.followerService = followerService;
        this.id = this.activatedRoute.snapshot.params.id;
        this.apiImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.apiImg + 'Activity/';
    }
    onClickOutside(targetElement) {
        const target = this.elemRef.nativeElement.querySelector('div');
        if (targetElement.tagName === target.tagName) {
            this.dropDown = false;
        }
    }
    ngOnInit() {
        this.dropDown = false;
        this.dropDown1 = false;
        this.update = false;
        this.getMe();
        this.getOneEvent();
    }
    getMe() {
        this.userservice.getMe().subscribe((res) => {
            this.userid = res.data.data._id;
        });
    }
    interest() {
        this.interrested = true;
    }
    notinterested() {
        this.interrested = false;
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
    openDropDown1() {
        if (this.dropDown1 === false) {
            this.dropDown1 = true;
        }
        else if (this.dropDown1 === true) {
            this.dropDown1 = false;
        }
    }
    getOneEvent() {
        this.calendarService.getEventbyID(this.id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.event = yield res[0];
        }));
    }
    addImage(source) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const fd = new FormData();
            yield this.imageService.readyImage(source, fd);
            this.getFormData(this.event, fd);
            this.calendarService.updateCoverEvent(fd).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                yield this.getOneEvent();
            }));
        });
    }
    selectImageSource() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const buttons = [
                {
                    text: 'Choose from gallery',
                    icon: 'image',
                    handler: () => {
                        this.addImage(_capacitor_core__WEBPACK_IMPORTED_MODULE_5__.CameraSource.Photos);
                    },
                },
            ];
            const actionSheet = yield this.action.create({
                header: 'Select from phone',
                buttons,
            });
            yield actionSheet.present();
        });
    }
    getFormData(object, formdata) {
        Object.keys(object).forEach((key) => formdata.append(key, object[key]));
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
        this.followerService.getFollowers(this.userid)
            .subscribe(res => {
            this.friends = res.data.data;
        });
    }
    updateEvent() {
        console.log(this.event);
        this.calendarService.updateEvent(this.event).subscribe(res => console.log(res));
    }
};
ShowEventPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController },
    { type: src_app_shared_Service_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute },
    { type: src_app_shared_Service_calendar_service__WEBPACK_IMPORTED_MODULE_2__.CalendarService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ElementRef },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: src_app_Shared_Service_image_service__WEBPACK_IMPORTED_MODULE_6__.ImageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ActionSheetController },
    { type: src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_8__.FollowerService }
];
ShowEventPage.propDecorators = {
    onClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.HostListener, args: ['click', ['$event.target'],] }]
};
ShowEventPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-show-event',
        template: _raw_loader_show_event_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_show_event_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShowEventPage);



/***/ }),

/***/ 46158:
/*!*******************************************************************!*\
  !*** ./src/app/layouts/community/show-event/show-event.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  display: flex;\n  flex-direction: column;\n  background-color: #f1f1f1 !important;\n  padding-right: 10px !important;\n  padding-bottom: 30px;\n  height: 500px;\n}\n\n.eventContent {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-right: 10px !important;\n}\n\n.buttons {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.threePoints {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  height: 22px;\n  width: 27px;\n  box-shadow: none !important;\n  margin: 0;\n  font-size: larger;\n  background-color: white;\n  border-radius: 10px;\n  box-shadow: 0px 3px 10px rgba(91, 90, 90, 0.452) !important;\n}\n\n.description {\n  margin-left: 20px;\n}\n\n.description span {\n  color: grey;\n}\n\nspan,\nh6 {\n  display: inline-block;\n  /* display on the same line */\n}\n\n.input {\n  outline: unset;\n  border: none;\n  border-bottom: #858484;\n  background-color: #f1f1f1;\n}\n\n.createIcom {\n  margin-left: 375px;\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctZXZlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJEQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQUlBOztFQUVFLHFCQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBREYiLCJmaWxlIjoic2hvdy1ldmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uZXZlbnRDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4udGhyZWVQb2ludHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjdweDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IHJnYmEoOTEsIDkwLCA5MCwgMC40NTIpICFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuXG59XG5cbi5kZXNjcmlwdGlvbiBzcGFuIHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbnNwYW4sXG5oNiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLyogZGlzcGxheSBvbiB0aGUgc2FtZSBsaW5lICovXG59XG5cbi5pbnB1dCB7XG4gIG91dGxpbmU6IHVuc2V0O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206ICM4NTg0ODQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcbn1cblxuLmNyZWF0ZUljb20ge1xuICBtYXJnaW4tbGVmdDogMzc1cHg7XG4gIGNvbG9yOiBncmVlbjtcbn1cbiJdfQ== */");

/***/ }),

/***/ 96278:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/community/show-event/show-event.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"Evennement\" [isCommunityCreate]=\"true\"></app-header>\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n\n  <div style=\"position: relative;\">\n    <img *ngIf=\"event?.cover\" src=\"{{ apiImg+event?.cover}} \" alt=\"\">\n    <img *ngIf=\"!event?.cover\"\n      src=\"https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg\"\n      alt=\"\">\n    <ion-avatar style=\"position:absolute; bottom:-40px; right:-30px\" class=\"edit-profile-cover\"\n      (click)=\"selectImageSource()\" *ngIf=\"event?.createdBy._id === userid\">\n      <ion-icon name=\"create\" style=\"color:green;\"> </ion-icon>\n    </ion-avatar>\n  </div>\n  <div class=\"content\">\n    <div class=\"eventContent\">\n      <div class=\"buttons\">\n        <button color=\"white\" style=\"\n      box-shadow: 0px 3px 10px rgba(114, 114, 114, 0.452);\n      border-radius: 10px;\n      margin: 10px 0 0 10px;\n      height: 30px;\n      width: 80px;\n      color: #898b8b;\n      background: white\" routerLink=\"/\">\n          message\n        </button>\n        <button color=\"white\" style=\"\n        width:120px;\n        box-shadow: 0px 3px 10px rgba(114, 114, 114, 0.452);\n        border-radius: 10px;\n        height: 30px;\n        color: #3b8c4f;\n        font-weight: bold;\n        margin: 10px 0 0 10px;\n        background: white\" *ngIf=\"!interrested\" (click)=\"interest()\">\n          ça m'intéresse\n        </button>\n        <button style=\"\n          width:120px;\n          box-shadow: 0px 3px 10px rgba(114, 114, 114, 0.452);\n          border-radius: 10px;\n          margin: 10px 0 0 10px;\n          height: 30px;\n          color: white;\n          font-weight: bold;\n          background: #3b8c4f\" *ngIf=\"interrested\" (click)=\"notinterested()\">\n          intéréssé(e)\n        </button>\n      </div>\n      <div  style=\"position:relative\">\n        <div (click)=\"openDropDown1()\" (blur)=\"openDropDown1()\" class=\"threePoints\">\n          <ion-icon class=\"button\" name=\"ellipsis-horizontal\"\n            style=\"display: flex;justify-content:center;align-items:center;height:15px\"></ion-icon>\n        </div>\n        <ng-container *ngIf=\"dropDown1\">\n          <div style=\"position: absolute;background-color:rgb(243, 243, 243);padding:15px;border-radius:15px;transform:translateX(-130px) translateY(10px);display:flex;flex-direction:column;\n          width:150px;color:rgb(168, 168, 168);box-shadow:-5px 5px 10px rgb(113, 113, 113);\">\n            <span style=\"font-size: 13px;\">Enregistrer</span>\n            <ion-item (click)=\"getAllfriends()\">\n              <ion-label>Inviter des amis</ion-label>\n              <ion-select [(ngModel)]=\"selectedFriends\" multiple=\"true\" ok-text=\"okey!\" cancel-text=\"Nah\">\n                <ion-select-option *ngFor=\"let friend of friends\" value=\"{{friend?.userFollowed._id}}\">\n                  {{friend?.userFollowed.name}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <span style=\"font-size: 13px;\">Signaler l'évenement</span>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n    <ion-icon name=\"create\" class=\"createIcom\" *ngIf=\"event?.createdBy._id === userid\"\n    (click)=\"update === false ? update = true: update = false\"></ion-icon>\n\n    <div *ngIf=\"!update\"  class=\"description\">\n      <h3> 300 Participants</h3>\n      <div>\n        <h6>Evennement de: &nbsp;</h6>\n        <span> {{event?.activity}}</span>\n      </div>\n      <div>\n        <h6>Lieu: &nbsp; </h6>\n        <span> Adresse evennement</span>\n      </div>\n      <div>\n        <h6>Date de début: &nbsp; </h6>\n        <span> {{event?.startTime | date:'medium'}}</span>\n      </div>\n      <div>\n        <h6>Date de fin: &nbsp; </h6>\n        <span> {{event?.endTime | date:'medium' }}</span>\n      </div>\n      <div>\n        <h6>Durée: &nbsp; </h6>\n        <span> heures</span>\n      </div>\n      <div>\n        <h6>Evennement public: &nbsp; </h6>\n        <span *ngIf=\"event?.confidentiality === 'public'\"> tout le monde peut participer</span>\n        <span *ngIf=\"event?.confidentiality === 'private'\"> cet évènnement est privé</span>\n\n      </div>\n      <div>\n        <h6>Description: &nbsp; </h6>\n        <span>{{event?.description}}</span>\n      </div>\n    </div>\n    <div *ngIf=\"update\"  class=\"description\">\n      <h3> 300 Participants</h3>\n      <div>\n        <h6>Evennement de: &nbsp;</h6>\n        <input [(ngModel)]=\"event.activity\"  class=\"input\" placeholder=\" {{event?.activity}}\" />\n      </div>\n      <div>\n        <h6>Lieu: &nbsp; </h6>\n        <input [(ngModel)]=\"event.lieu\"  class=\"input\" placeholder=\"Adresse evennement\" />\n      </div>\n      <div>\n        <h6>Date de début: &nbsp; </h6>\n        <input [(ngModel)]=\"event.startTime\" class=\"input\" type=\"date\" placeholder=\"{{event?.startTime   | date:'medium'}}\" />\n      </div>\n      <div>\n        <h6>Date de fin: &nbsp; </h6>\n        <input [(ngModel)]=\"event.endTime\" class=\"input\" type=\"date\" placeholder=\"{{event?.endTime   | date:'medium' }}\" />\n      </div>\n\n      <div>\n        <h6>Evennement public: &nbsp; </h6>\n        <div (click)=\"openDropDown()\" (blur)=\"openDropDown()\"\n          style=\"display: flex;flex-direction:column; align-items:flex-start;position:relative;border-radius:20px; width:70%; background-color: #F1F2F2;margin:5px;\">\n          <span style=\"margin-right:10px; color: #909890;  margin-left:10px\">confidentialité</span>\n          <div\n            style=\"margin-left:15px; display:flex;align-items: center; justify-content:space-between;width: 90%; padding:5px\">\n            <div>\n              <ng-container style=\"display: flex;align-items:center\" *ngIf=\"public;else privacy\">\n                <img style=\"width:15px;height:15px; color:#8F978F\" src=\"../../../assets/svg/globe.svg\" alt=\"\">\n                <span style=\"color:#8F978F; font-weight:bold;\">Public</span>\n              </ng-container>\n              <ng-template style=\"display: flex;align-items:center\" #privacy>\n                <img style=\"width:15px;height:15px; color:#8F978F\" src=\"../../../assets/svg/lock.svg\" alt=\"\">\n                <span style=\"color:#8F978F; font-weight:bold;\">Private</span>\n              </ng-template>\n            </div>\n            <div>\n              <ng-container *ngIf=\"dropDown===false;else open\">\n                <ion-icon style=\"color:#8F978F\" name=\"chevron-forward-outline\"></ion-icon>\n              </ng-container>\n              <ng-template #open>\n                <ion-icon style=\"color:#8F978F\" name=\"chevron-down-outline\"></ion-icon>\n              </ng-template>\n            </div>\n          </div>\n          <div *ngIf=\"dropDown===true;else close\">\n            <div style=\"position: absolute;padding:12px;width:250px; display:flex;flex-direction:column;z-index:10;background-color:white;\n            box-shadow:-5px 5px 10px rgb(113, 113, 113);border-radius:10px;transform:translateX(20px) translateY(3px)\">\n              <div (click)=\"private = true; event.confidentiality = 'private';public=false;\"\n                style=\"display: flex;align-items:center;justify-content:space-between\">\n                <div style=\"display:flex;align-items:center;justify-content:space-between\">\n                  <img style=\"width:20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/lock.svg\" alt=\"\">\n                  <div style=\"display: flex;flex-direction:column\">\n                    <span style=\"font-size: 14px; color:#8F978F\">Private</span>\n                    <span style=\"font-size: 10px;\">Only invited people can see the event</span>\n                  </div>\n                </div>\n                <ng-container *ngIf=\"private\">\n                  <img style=\"width:20px;height:20px\" src=\"../../../assets/svg/check-privacy.svg\" alt=\"\">\n                </ng-container>\n              </div>\n              <div (click)=\"public = true ; event.confidentiality = 'public'; private=false;\"\n                style=\"display: flex;align-items:center;justify-content:space-between\">\n                <div style=\"display:flex;align-items:center;justify-content:space-between\">\n                  <img style=\"width:20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/globe.svg\" alt=\"\">\n                  <div style=\"display: flex;flex-direction:column\">\n                    <span style=\"font-size:14px;color:#8F978F\">Public</span>\n                    <span style=\"font-size: 10px;\">Anyone can see the event</span>\n                  </div>\n                </div>\n                <ng-container *ngIf=\"public\">\n                  <img style=\"width:20px;height:20px\" src=\"../../../assets/svg/check-privacy.svg\" alt=\"\">\n                </ng-container>\n              </div>\n            </div>\n          </div>\n          <ng-template #close>\n            <div style=\"position: absolute;\"></div>\n          </ng-template>\n        </div>\n      </div>\n      <div>\n        <h6>Description: &nbsp; </h6>\n        <input class=\"input\" [(ngModel)]=\"event.description\" placeholder=\"{{event?.description}}\"/>\n      </div>\n    </div>\n    <div *ngIf=\"update\" style=\"display: flex;justify-content:flex-end \">\n      <img (click)=\"updateEvent()\" style=\"width: 30px;height:30px;margin: 20px 10px 0 0;\" src=\"../../../../assets/svg/green-tick.svg\" alt=\"\">\n      <img (click)=\"update = false\" style=\"width: 30px;height:30px;margin: 20px 10px 0 0;\" src=\"../../../../assets/svg/red-x.svg\" alt=\"\">\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_layouts_community_show-event_show-event_module_ts.js.map