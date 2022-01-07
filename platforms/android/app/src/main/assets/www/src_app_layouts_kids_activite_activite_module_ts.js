(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_kids_activite_activite_module_ts"],{

/***/ 63045:
/*!******************************************************************!*\
  !*** ./src/app/layouts/kids/activite/activite-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitePageRoutingModule": () => (/* binding */ ActivitePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _activite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activite.page */ 77840);




const routes = [
    {
        path: '',
        component: _activite_page__WEBPACK_IMPORTED_MODULE_0__.ActivitePage
    },
    {
        path: 'add-activity',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modals/add-activity/add-activity.module */ 85600)).then(m => m.AddActivityPageModule)
    },
    {
        path: 'show-activity',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_kids_activite_modals_show-activity_show-activity_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modals/show-activity/show-activity.module */ 38527)).then(m => m.ShowActivityPageModule)
    }
];
let ActivitePageRoutingModule = class ActivitePageRoutingModule {
};
ActivitePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActivitePageRoutingModule);



/***/ }),

/***/ 69421:
/*!**********************************************************!*\
  !*** ./src/app/layouts/kids/activite/activite.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitePageModule": () => (/* binding */ ActivitePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _activite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activite-routing.module */ 63045);
/* harmony import */ var _activite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activite.page */ 77840);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);
/* harmony import */ var _modals_add_activity_add_activity_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/add-activity/add-activity.module */ 85600);









let ActivitePageModule = class ActivitePageModule {
};
ActivitePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _activite_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActivitePageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _modals_add_activity_add_activity_module__WEBPACK_IMPORTED_MODULE_3__.AddActivityPageModule
        ],
        declarations: [_activite_page__WEBPACK_IMPORTED_MODULE_1__.ActivitePage]
    })
], ActivitePageModule);



/***/ }),

/***/ 77840:
/*!********************************************************!*\
  !*** ./src/app/layouts/kids/activite/activite.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitePage": () => (/* binding */ ActivitePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_activite_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./activite.page.html */ 3514);
/* harmony import */ var _activite_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activite.page.scss */ 14550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _modals_add_activity_add_activity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/add-activity/add-activity.page */ 29429);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modals_show_activity_show_activity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/show-activity/show-activity.page */ 53419);



/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/type-annotation-spacing */




let ActivitePage = class ActivitePage {
    constructor(modalController) {
        this.modalController = modalController;
        this.Activite = 'Activite';
    }
    ngOnInit() {
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_add_activity_add_activity_page__WEBPACK_IMPORTED_MODULE_2__.AddActivityPage,
                componentProps: {
                    paramID: 123,
                    paramTitle: 'Test Title'
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    openShowModal(activity) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modals_show_activity_show_activity_page__WEBPACK_IMPORTED_MODULE_3__.ShowActivityPage,
                componentProps: {
                    paramID: activity,
                    paramTitle: 'Test Title'
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
};
ActivitePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
ActivitePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-activite',
        template: _raw_loader_activite_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_activite_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActivitePage);



/***/ }),

/***/ 58934:
/*!******************************************************************************************!*\
  !*** ./src/app/layouts/kids/activite/modals/add-activity/add-activity-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddActivityPageRoutingModule": () => (/* binding */ AddActivityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_activity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-activity.page */ 29429);




const routes = [
    {
        path: '',
        component: _add_activity_page__WEBPACK_IMPORTED_MODULE_0__.AddActivityPage
    }
];
let AddActivityPageRoutingModule = class AddActivityPageRoutingModule {
};
AddActivityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddActivityPageRoutingModule);



/***/ }),

/***/ 85600:
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/kids/activite/modals/add-activity/add-activity.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddActivityPageModule": () => (/* binding */ AddActivityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-activity-routing.module */ 58934);
/* harmony import */ var _add_activity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-activity.page */ 29429);
/* harmony import */ var src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/component.module */ 55051);









let AddActivityPageModule = class AddActivityPageModule {
};
AddActivityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _add_activity_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddActivityPageRoutingModule,
            src_app_component_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_add_activity_page__WEBPACK_IMPORTED_MODULE_1__.AddActivityPage]
    })
], AddActivityPageModule);



/***/ }),

/***/ 29429:
/*!********************************************************************************!*\
  !*** ./src/app/layouts/kids/activite/modals/add-activity/add-activity.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddActivityPage": () => (/* binding */ AddActivityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_activity_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-activity.page.html */ 57696);
/* harmony import */ var _add_activity_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-activity.page.scss */ 47442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_Service_activite_kid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Service/activite-kid.service */ 23236);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);








let AddActivityPage = class AddActivityPage {
    constructor(modalController, navParams, activiteKidService, userservice, toastCtrl, elemRef) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.activiteKidService = activiteKidService;
        this.userservice = userservice;
        this.toastCtrl = toastCtrl;
        this.elemRef = elemRef;
        this.activityTitle = 'Ajouter une activité';
        this.rows = [1];
    }
    onClickOutside(targetElement) {
        const target = this.elemRef.nativeElement.querySelector('div');
        if (targetElement.tagName === target.tagName) {
            this.dropDown = false;
        }
    }
    ngOnInit() {
        this.dropDown = false;
        this.validForm = false;
        this.cours = false;
        this.jeux = false;
        this.devoirs = false;
        this.suivi = false;
        this.recompense = false;
        this.modelId = this.navParams.data.paramID;
        this.modalTitle = this.navParams.data.paramTitle;
        this.activityKid = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            activite: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.user$),
            linkTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
        });
        this.getMe();
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const onClosedData = 'Wrapped Up!';
            yield this.modalController.dismiss(onClosedData);
        });
    }
    getMe() {
        this.userservice.getMe().subscribe((res) => {
            this.activityKid.patchValue({
                user: res.data.data
            });
        });
    }
    confirm() {
        if (this.activityKid.valid) {
            this.validForm = true;
            this.activiteKidService.addActivity(this.activityKid.value).subscribe(res => {
                this.activityKid = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
                    activite: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
                    content: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
                    user: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.user$),
                    linkTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
                });
                this.cours = false;
                this.jeux = false;
                this.devoirs = false;
                this.suivi = false;
                this.recompense = false;
                this.presentToast('activité créée avec succés', 'success', 'bottom');
            });
            this.validForm = false;
        }
    }
    openDropDown() {
        if (this.dropDown === false) {
            this.dropDown = true;
        }
        else if (this.dropDown === true) {
            this.dropDown = false;
        }
    }
    addInput() {
        this.activityKid = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            activite: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.user$),
            linkTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
        });
        this.rows.push(this.rows.length);
    }
    presentToast(message, color, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                color,
                position
            });
            toast.present();
        });
    }
};
AddActivityPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: src_app_shared_Service_activite_kid_service__WEBPACK_IMPORTED_MODULE_2__.ActiviteKidService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef }
];
AddActivityPage.propDecorators = {
    onClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.HostListener, args: ['click', ['$event.target'],] }]
};
AddActivityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-activity',
        template: _raw_loader_add_activity_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_activity_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddActivityPage);



/***/ }),

/***/ 53419:
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/kids/activite/modals/show-activity/show-activity.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowActivityPage": () => (/* binding */ ShowActivityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_show_activity_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./show-activity.page.html */ 19478);
/* harmony import */ var _show_activity_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-activity.page.scss */ 33002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_shared_Service_activite_kid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/Service/activite-kid.service */ 23236);
/* harmony import */ var _add_activity_add_activity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-activity/add-activity.page */ 29429);







let ShowActivityPage = class ShowActivityPage {
    constructor(activiteKidService, modalController, navParams) {
        this.activiteKidService = activiteKidService;
        this.modalController = modalController;
        this.navParams = navParams;
        this.Activity = 'découvert tes activitées';
    }
    ngOnInit() {
        this.courseNumber = 1;
        this.gamesNumber = 3;
        this.examsNumber = 4;
        this.recompenseNumber = 0;
        this.dropDown = false;
        this.notchecked = false;
        this.checked = false;
        this.activity = this.navParams.data.paramID;
        this.getAll(this.activity);
    }
    getAll(activity) {
        this.activiteKidService.getAll(activity).subscribe((res) => {
            this.activities = res.data.data;
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const onClosedData = 'Wrapped Up!';
            yield this.modalController.dismiss(onClosedData);
        });
    }
    delete(activityID) {
        this.activiteKidService.deleteActivity(activityID).subscribe(res => this.getAll(this.activity));
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_activity_add_activity_page__WEBPACK_IMPORTED_MODULE_3__.AddActivityPage,
                componentProps: {
                    paramID: 123,
                    paramTitle: 'Test Title'
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                }
            });
            return yield modal.present();
        });
    }
    goToUrl(url) {
        window.location.href = url;
    }
};
ShowActivityPage.ctorParameters = () => [
    { type: src_app_shared_Service_activite_kid_service__WEBPACK_IMPORTED_MODULE_2__.ActiviteKidService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavParams }
];
ShowActivityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-show-activity',
        template: _raw_loader_show_activity_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_show_activity_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShowActivityPage);



/***/ }),

/***/ 23236:
/*!********************************************************!*\
  !*** ./src/app/shared/Service/activite-kid.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiviteKidService": () => (/* binding */ ActiviteKidService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 1128);



let ActiviteKidService = class ActiviteKidService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    addActivity(activite) {
        return this.apiService.post(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiacitivteKids}`, activite).pipe(((res) => res));
    }
    updateActivitys(activite) {
        return this.apiService.patch(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiacitivteKids}`, activite);
    }
    deleteActivity(id) {
        return this.apiService.delete(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiacitivteKids}` + id);
    }
    getAll(activite) {
        return this.apiService.get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiacitivteKids}?activite=${activite}`).pipe(((res) => res));
    }
};
ActiviteKidService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
ActiviteKidService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ActiviteKidService);



/***/ }),

/***/ 14550:
/*!**********************************************************!*\
  !*** ./src/app/layouts/kids/activite/activite.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".centerDiv {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nion-button {\n  --border-radius:20px;\n}\n\nion-row {\n  padding: 10px;\n}\n\n@font-face {\n  font-family: \"IntroScriptR-H2Base\";\n  src: url('IntroScriptR-H2Base.otf');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGtDQUFBO0VBQ0EsbUNBQUE7QUFHRiIsImZpbGUiOiJhY3Rpdml0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyRGl2e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgLS1ib3JkZXItcmFkaXVzOjIwcHg7XHJcbn1cclxuaW9uLXJvd3tcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnSW50cm9TY3JpcHRSLUgyQmFzZSc7XHJcbiAgc3JjOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL0ltZ0tpZHMvSW50cm9TY3JpcHRSLUgyQmFzZS5vdGYpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 47442:
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/kids/activite/modals/add-activity/add-activity.page.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  position: relative;\n}\n\n.background {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.backImage {\n  height: 300px;\n  width: 300px;\n}\n\n.input-text {\n  width: 80%;\n  background-color: #EEEFEF;\n  border-radius: 20px;\n  border: none;\n  height: 40px;\n  padding-left: 10px;\n}\n\n.input-text::placeholder {\n  font-size: 12px;\n}\n\n.input-text:focus {\n  outline: none;\n}\n\n.plus-row {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n\n.plus {\n  height: 50px;\n  width: 50px;\n}\n\n.disabled {\n  color: #4b4949;\n  background-image: grey;\n  border-radius: 15px;\n  margin-left: 5px;\n  width: 80px;\n  height: 40px;\n}\n\n.enabled {\n  background-image: linear-gradient(135deg, #247238, #247238, #8EBF25, #8EBF25);\n  color: white;\n  border-radius: 15px;\n  margin-left: 5px;\n  width: 80px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hY3Rpdml0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsNkVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDRCxZQUFBO0FBRUQiLCJmaWxlIjoiYWRkLWFjdGl2aXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5iYWNrSW1hZ2Uge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5pbnB1dC10ZXh0IHtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUZFRjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweFxufVxuXG4uaW5wdXQtdGV4dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pbnB1dC10ZXh0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBsdXMtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5wbHVzIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cbi5kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2IoNzUsIDczLCA3Myk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6MTVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6ODBweDtcbiAgaGVpZ2h0OjQwcHg7XG59XG5cbi5lbmFibGVke1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjQ3MjM4LCAjMjQ3MjM4LCAjOEVCRjI1LCAjOEVCRjI1KTtcbiAgY29sb3I6d2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6MTVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6ODBweDtcbiBoZWlnaHQ6NDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 33002:
/*!************************************************************************************!*\
  !*** ./src/app/layouts/kids/activite/modals/show-activity/show-activity.page.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".background {\n  position: absolute;\n}\n\n.backImage {\n  height: 300px;\n  width: 300px;\n}\n\n.games {\n  height: 150px;\n  width: 150px;\n}\n\n.plus {\n  height: 50px;\n  width: 50px;\n}\n\n.recompense {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.recompense img {\n  margin-top: 20px;\n  position: absolute;\n  width: 400px;\n}\n\n.recompense span {\n  font-size: 25px;\n  margin-top: 30px;\n}\n\n.grid {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n  width: 100%;\n}\n\n.grid img {\n  height: 120px;\n  width: 120px;\n}\n\n.drop {\n  height: 60px;\n  width: 78%;\n  background-color: #eeefef;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin: 20px 0 0 45px;\n}\n\n.chevron {\n  margin-top: 9px;\n}\n\n.suivi {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  margin-top: 30px;\n}\n\n.productivity {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 80%;\n  height: 70px;\n  background-color: #eeefef;\n  border-radius: 20px;\n  padding: 8px;\n  margin: 10px;\n  z-index: 10;\n  color: #7F867D;\n}\n\n.notes {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  width: 100%;\n}\n\n.content-suivi {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.stars img {\n  height: 15px;\n  width: 15px;\n}\n\n.content-suivi img {\n  height: 30px;\n  width: 30px;\n}\n\n.devoirs {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin-top: 30px;\n}\n\n.devoirs img {\n  height: 20px;\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctYWN0aXZpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUNBO0VBRUUsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBSUY7O0FBRkE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBS0E7O0FBSEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQU1GIiwiZmlsZSI6InNob3ctYWN0aXZpdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5iYWNrSW1hZ2Uge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5nYW1lcyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcblxufVxuXG4ucGx1cyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5yZWNvbXBlbnNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnJlY29tcGVuc2UgaW1nIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5yZWNvbXBlbnNlIHNwYW4ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ncmlkIGltZyB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5kcm9we1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA3OCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVmZWY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW46IDIwcHggMCAwIDQ1cHg7XG59XG4uY2hldnJvbntcbiAgbWFyZ2luLXRvcDogOXB4O1xufVxuXG4uc3Vpdmkge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5wcm9kdWN0aXZpdHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZmVmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgei1pbmRleDogMTA7XG4gIGNvbG9yOiAjN0Y4NjdEO1xufVxuXG4ubm90ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRlbnQtc3Vpdml7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3RhcnMgaW1nIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbn1cbi5jb250ZW50LXN1aXZpIGltZyB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG4uZGV2b2lyc3tcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5tYXJnaW4tdG9wOiAzMHB4O1xufVxuLmRldm9pcnMgaW1ne1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ 3514:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/activite/activite.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [title]=\"Activite\" [isDetails]=\"true\">\n</app-header>\n\n<ion-content>\n  <div class=\"centerDiv\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"openModal()\" style=\"width: 150px; height: 150px; --background:#147B34;\">\n          <img src=\"../../../../assets/ImgKids/ajouter.svg\" alt=\"\">\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"openShowModal('cours')\" style=\"width: 150px; height: 150px; --background:#46B2E6;\">\n          <img src=\"../../../../assets/ImgKids/coursenligne.svg\" alt=\"\" style=\"    margin-top: 30px;\">\n        </ion-button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"openShowModal('jeux')\" style=\"width: 150px; height: 150px; --background:#e30954;\">\n          <img src=\"../../../../assets/ImgKids/jeux.svg\" alt=\"\">\n\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"openShowModal('recompense')\" style=\"width: 150px; height: 150px; --background:#10aea2;\">\n          <img src=\"../../../../assets/ImgKids/récompense.svg\" alt=\"\">\n\n        </ion-button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"openShowModal('suivi')\" style=\"width: 150px; height: 150px; --background:#f59a1c;\">\n          <img src=\"../../../../assets/ImgKids/suivi.svg\" alt=\"\">\n\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"openShowModal('devoirs')\" style=\"width: 150px; height: 150px; --background:#147B34;\">\n          <img src=\"../../../../assets/ImgKids/dvr.svg\" alt=\"\">\n\n        </ion-button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ }),

/***/ 57696:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/activite/modals/add-activity/add-activity.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [title]=\"activityTitle\" [isActivityKids]=\"true\">\n</app-header>\n<ion-content class=\"content\">\n  <div class=\"background\">\n    <img class=\"backImage\" src=\"../../../assets/svg/backgroundActivityKids.svg\" alt=\"\">\n  </div>\n  <ion-grid style=\"height: 100%; display:flex;flex-direction:column;justify-content:space-between;position:relative; \">\n    <form [formGroup]=\"activityKid\" style=\"margin-top:80px\">\n      <ion-row>\n        <div (click)=\"openDropDown()\" (blur)=\"openDropDown()\"\n          style=\"display: flex;flex-direction:column; align-items:flex-start;position:relative;border-radius:20px; width:90%; background-color: #F1F2F2;margin:5px;\">\n          <span style=\"margin-right:10px; color: #909890;  margin-left:10px\">Catégorie *</span>\n          <div\n            style=\"margin-left:15px; display:flex;align-items: center; justify-content:space-between;width: 90%; padding:5px\">\n            <div>\n              <div style=\"display: flex;align-items:center\" *ngIf=\"jeux;\">\n                <img style=\"width:15px;height:15px; color:#8F978F\" src=\"../../../assets/svg/jeux.svg\" alt=\"\">\n                <span style=\"color:#8F978F; font-weight:bold;margin-left:5px\">Jeux en ligne </span>\n              </div>\n              <div style=\"display: flex;align-items:center\" *ngIf=\"cours;\">\n                <img style=\"width:15px;height:15px;color:#8F978F\" src=\"../../../assets/svg/cours.svg\" alt=\"\">\n                <span style=\"color:#8F978F; font-weight:bold;margin-left:5px\">Cours en ligne</span>\n              </div>\n              <div style=\"display: flex;align-items:center\" *ngIf=\"devoirs;\">\n                <img style=\"width:15px;height:15px; color:#8F978F\" src=\"../../../assets/svg/devoirs.svg\" alt=\"\">\n                <span style=\"color:#8F978F; font-weight:bold;margin-left:5px\">Devoirs et activités</span>\n              </div>\n                       <!--\n\n              <div style=\"display: flex;align-items:center\" *ngIf=\"suivi;\">\n                <img style=\"width:15px;height:15px; color:#8F978F\" src=\"../../../assets/svg/suivi.svg\" alt=\"\">\n                <span style=\"color:#8F978F; font-weight:bold;margin-left:5px\">Suivi</span>\n              </div>\n    <div style=\"display: flex;align-items:center\" *ngIf=\"recompense\">\n                <img style=\"width:15px;height:15px; color:#8F978F\" src=\"../../../assets/svg/recompense.svg\" alt=\"\">\n                <span style=\"color:#8F978F; font-weight:bold;margin-left:5px\"> Récompenses</span>\n              </div>\n         -->\n            </div>\n            <div>\n              <ng-container *ngIf=\"dropDown === false;else open\">\n                <ion-icon style=\"color:#8F978F\" name=\"chevron-forward-outline\"></ion-icon>\n              </ng-container>\n              <ng-template #open>\n                <ion-icon style=\"color:#8F978F\" name=\"chevron-down-outline\"></ion-icon>\n              </ng-template>\n            </div>\n          </div>\n          <div *ngIf=\"dropDown===true;else close\">\n            <div style=\"position: absolute;padding:12px;width:250px; display:flex;flex-direction:column;z-index:10;background-color:white;\n            box-shadow:-5px 5px 10px rgb(113, 113, 113);border-radius:10px;transform:translateX(20px) translateY(3px)\">\n              <div (click)=\"cours=true;recompense=false;jeux=false;suivi=false;devoirs=false;\n                this.activityKid.patchValue({activite: 'cours' }); \"\n                style=\"display: flex;align-items:center;justify-content:space-between\">\n                <div style=\"display:flex;align-items:center;justify-content:space-between\">\n                  <img style=\"width:20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/cours.svg\" alt=\"\">\n                  <div style=\"display: flex;flex-direction:column\">\n                    <span style=\"font-size: 14px; color:#8F978F\">Cours en ligne</span>\n                  </div>\n                </div>\n                <ng-container *ngIf=\"cours\">\n                  <img style=\"width:20px;height:20px\" src=\"../../../assets/svg/check-privacy.svg\" alt=\"\">\n                </ng-container>\n              </div>\n              <div (click)=\"cours = false;recompense= false;jeux=true;suivi = false;devoirs=false;\n              this.activityKid.patchValue({activite: 'jeux' });\"\n                style=\"display: flex;align-items:center;justify-content:space-between\">\n                <div style=\"display:flex;align-items:center;justify-content:space-between\">\n                  <img style=\"width:20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/jeux.svg\" alt=\"\">\n                  <div style=\"display: flex;flex-direction:column\">\n                    <span style=\"font-size:14px;color:#8F978F\">Jeux en ligne</span>\n                  </div>\n                </div>\n                <ng-container *ngIf=\"jeux\">\n                  <img style=\"width:20px;height:20px\" src=\"../../../assets/svg/check-privacy.svg\" alt=\"\">\n                </ng-container>\n              </div>\n              <div (click)=\"cours = false;recompense= false;jeux=false;suivi = false;devoirs=true;\n              this.activityKid.patchValue({activite: 'devoirs' }); \"\n                style=\"display: flex;align-items:center;justify-content:space-between\">\n                <div style=\"display:flex;align-items:center;justify-content:space-between\">\n                  <img style=\"width:20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/devoirs.svg\" alt=\"\">\n                  <div style=\"display: flex;flex-direction:column\">\n                    <span style=\"font-size:14px;color:#8F978F\">Devoirs et activités</span>\n                  </div>\n                </div>\n                <ng-container *ngIf=\"devoirs\">\n                  <img style=\"width:20px;height:20px\" src=\"../../../assets/svg/check-privacy.svg\" alt=\"\">\n                </ng-container>\n              </div>\n                       <!--\n     <div (click)=\"cours = false;recompense= false;jeux=false;suivi = true;devoirs=false;\n              this.activityKid.patchValue({activite: 'suivi' }); \"\n                style=\"display: flex;align-items:center;justify-content:space-between\">\n                <div style=\"display:flex;align-items:center;justify-content:space-between\">\n                  <img style=\"width:20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/suivi.svg\" alt=\"\">\n                  <div style=\"display: flex;flex-direction:column\">\n                    <span style=\"font-size:14px;color:#8F978F\">Suivi</span>\n                  </div>\n                </div>\n                <ng-container *ngIf=\"suivi\">\n                  <img style=\"width:20px;height:20px\" src=\"../../../assets/svg/check-privacy.svg\" alt=\"\">\n                </ng-container>\n              </div>\n    <div (click)=\"cours = false;recompense= true;jeux=false;suivi = false;devoirs=false;\n              this.activityKid.patchValue({activite: 'recompense' });  \"\n                style=\"display: flex;align-items:center;justify-content:space-between\">\n                <div style=\"display:flex;align-items:center;justify-content:space-between\">\n                  <img style=\"width:20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/recompense.svg\" alt=\"\">\n                  <div style=\"display: flex;flex-direction:column\">\n                    <span style=\"font-size:14px;color:#8F978F\">Récompenses</span>\n                  </div>\n                </div>\n                <ng-container *ngIf=\"recompense\">\n                  <img style=\"width:20px;height:20px\" src=\"../../../assets/svg/check-privacy.svg\" alt=\"\">\n                </ng-container>\n              </div>\n              -->\n\n            </div>\n          </div>\n          <ng-template #close>\n          </ng-template>\n        </div>\n        <div style=\"width:100%\"  *ngFor=\"let row of rows;\"  >\n          <ion-col text-center style=\"padding-top: 50px ;display:flex;align-self:center ;width:100%\" >\n            <input class=\"input-text\" type=\"text\" placeholder=\"Ajoutez un lien\"\n              formControlName=\"content\">\n              <input class=\"input-text\" type=\"text\" placeholder=\"Titre\"\n              formControlName=\"linkTitle\">\n            <button (click)=\"confirm()\" [disabled]= \"validForm\"  [ngClass]=\"activityKid.valid? 'enabled' : 'disabled' \">Ajouter</button>\n          </ion-col>\n        </div>\n\n      </ion-row>\n    </form>\n    <div style=\"bottom:30px;margin-left:340px\">\n      <button (click)=\"addInput()\" style=\"background:none\"><img class=\"plus\" src=\"../../../assets/svg/plus-kids.svg\" alt=\"\">\n      </button>\n    </div>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 19478:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/kids/activite/modals/show-activity/show-activity.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header [title]=\"Activity\" [isActivityKids]=\"true\">\n</app-header>\n<ion-content *ngIf=\"activity === 'cours'\">\n  <img src=\"../../../assets/svg/backgroundActivityKids.svg\"\n    style=\"position:absolute;margin:200px 0 0 0;width:100%;height:300px\" alt=\"\">\n  <ion-grid alt=\"\" style=\"position:relative;\">\n    <div *ngFor=\"let activity of activities\"\n      style=\"display:flex;align-items:center;justify-content:space-between ;height:50px; width:90%; background-color:#EEEFEF ; border-radius: 15px; margin:15px; padding:5px\">\n      <span *ngIf=\"activity.content.indexOf('http') !== 0\">{{activity.linkTitle}} </span>\n      <button (click)=\"goToUrl(activity.content)\" *ngIf=\"activity.content.indexOf('http') === 0\"\n        style=\"border-radius:12px;\">\n        <ion-icon name=\"link\" style=\"height: 20px;width:20px\"></ion-icon>\n      </button>\n      <a style=\"color:#7F867D;font-size:15px\" href={{activity.content}}\n        *ngIf=\"activity.content.indexOf('https') === 0\">{{activity.linkTitle}}\n      </a>\n      <ion-icon shape=\"round\" color=\"danger\" name=\"trash\" (click)=\"delete(activity._id)\"></ion-icon>\n    </div>\n  </ion-grid>\n  <div style=\"position:absolute; bottom:10px;right:10px\">\n    <button (click)=\"openModal()\" style=\"background:none\"><img class=\"plus\" src=\"../../../assets/svg/plus-kids.svg\"\n        alt=\"\">\n    </button>\n  </div>\n</ion-content>\n<ion-content class=\"ion-padding\" *ngIf=\"activity === 'jeux'\">\n  <ion-grid style=\"display: flex; align-items:center; width:100%; justify-content:center;flex-wrap:wrap\">\n    <img src=\"../../../assets/svg/dino.svg\" class=\"games\" alt=\"\">\n    <img src=\"../../../assets/svg/puzzle.svg\" class=\"games\" alt=\"\">\n    <img src=\"../../../assets/svg/question.svg\" class=\"games\" alt=\"\">\n    <img src=\"../../../assets/svg/snake.svg\" class=\"games\" alt=\"\">\n    <img src=\"../../../assets/svg/dino2.svg\" class=\"games\" alt=\"\">\n    <img src=\"../../../assets/svg/puzzle2.svg\" class=\"games\" alt=\"\">\n  </ion-grid>\n  <ion-grid alt=\"\" style=\"position:relative;\">\n    <div *ngFor=\"let activity of activities\"\n      style=\"display:flex;align-items:center;justify-content:space-between ;height:50px; width:90%; background-color:#EEEFEF ; border-radius: 15px; margin:15px; padding:5px\">\n      <span *ngIf=\"activity.content.indexOf('http') !== 0\">{{activity.linkTitle}} </span>\n      <button (click)=\"goToUrl(activity.content)\" *ngIf=\"activity.content.indexOf('http') === 0\"\n        style=\"border-radius:12px;\">\n        <ion-icon name=\"link\" style=\"height: 20px;width:20px\"></ion-icon>\n      </button>\n      <a style=\"color:#7F867D;font-size:15px\" href={{activity.content}}\n        *ngIf=\"activity.content.indexOf('https') === 0\">{{activity.linkTitle}}\n      </a>\n      <ion-icon shape=\"round\" color=\"danger\" name=\"trash\" (click)=\"delete(activity._id)\"></ion-icon>\n    </div>\n  </ion-grid>\n  <div style=\"position:absolute; bottom:10px;right:10px\">\n    <button (click)=\"openModal()\" style=\"background:none\"><img class=\"plus\" src=\"../../../assets/svg/plus-kids.svg\"\n        alt=\"\">\n    </button>\n  </div>\n</ion-content>\n\n<ion-content class=\"ion-padding\" *ngIf=\"activity === 'recompense'\">\n  <div class=\"recompense\">\n    <img src=\"../../../assets/svg/formsRecompense.svg\" alt=\"\">\n    <span>Mes Récompenses</span>\n  </div>\n  <ion-grid class=\"grid\">\n    <img src=\"../../../assets/svg/amazing.svg\" alt=\"\">\n    <img src=\"../../../assets/svg/yay.svg\" alt=\"\">\n    <img src=\"../../../assets/svg/keepitup.svg\" alt=\"\">\n    <img src=\"../../../assets/svg/impressive.svg\" alt=\"\">\n    <img src=\"../../../assets/svg/awesome.svg\" alt=\"\">\n    <img src=\"../../../assets/svg/champion.svg\" alt=\"\">\n    <img src=\"../../../assets/svg/nice.svg\" alt=\"\">\n    <img src=\"../../../assets/svg/welldone.svg\" alt=\"\">\n    <img src=\"../../../assets/svg/excellent.svg\" alt=\"\">\n    <img src=\"../../../assets/svg/nice.svg\" alt=\"\">\n    <img src=\"../../../assets/svg/amazing.svg\" alt=\"\">\n    <img src=\"../../../assets/svg/yay.svg\" alt=\"\">\n  </ion-grid>\n\n</ion-content>\n<ion-content class=\"ion-suivi\" *ngIf=\"activity === 'suivi'\">\n  <img src=\"../../../assets/svg/backgroundActivityKids.svg\"\n    style=\"position:absolute;margin:250px 0 0 0;width:100%;height:300px; z-index:-10\" alt=\"\">\n  <div class=\"drop\">\n    <span>Résumé <strong>7 derniers jours</strong></span>\n    <div class=\"chevron\">\n      <ng-container *ngIf=\"dropDown===false;else open\">\n        <ion-icon style=\"color:#8F978F\" name=\"chevron-forward-outline\"></ion-icon>\n      </ng-container>\n      <ng-template #open>\n        <ion-icon style=\"color:#8F978F\" name=\"chevron-down-outline\"></ion-icon>\n      </ng-template>\n    </div>\n  </div>\n  <ion-grid class=\"suivi\">\n    <div class=\"productivity\">\n      <div class=\"notes\">\n        <span>Productivité &nbsp; </span>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"courseNumber>0\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"courseNumber === 0\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"courseNumber>1\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"courseNumber <=1\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"courseNumber>2\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"courseNumber<= 2\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"courseNumber>3\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"courseNumber <= 3\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"courseNumber>4\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"courseNumber <= 4\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"content-suivi\">\n        <img src=\"./../../assets/svg/suiviCasque.svg\" alt=\"\">\n        <span>Cours en ligne</span>\n        <span>4 cours / 7</span>\n      </div>\n    </div>\n    <div class=\"productivity\">\n      <div class=\"notes\">\n        <span>Productivité &nbsp;</span>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"gamesNumber>0\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"gamesNumber === 0\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"gamesNumber >1\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"gamesNumber <= 1\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"gamesNumber>2\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"gamesNumber <= 2\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"gamesNumber>3\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"gamesNumber <= 3\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"gamesNumber>4\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"gamesNumber < 5\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"content-suivi\">\n        <img src=\"./../../assets/svg/rubixCube.svg\" alt=\"\">\n        <span>jeux en ligne</span>\n        <span>4 jeux / 7</span>\n      </div>\n    </div>\n    <div class=\"productivity\">\n      <div class=\"notes\">\n        <span>Productivité &nbsp;</span>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"examsNumber>0\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"examsNumber === 0\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"examsNumber>1\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"examsNumber <= 1\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"examsNumber>2\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"examsNumber <= 2\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"examsNumber>3\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"examsNumber <= 3\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"examsNumber>4\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"examsNumber < 5\" alt=\"\">\n        </div>\n      </div>\n      <div class=\"content-suivi\">\n        <img src=\"./../../assets/svg/devoirsSuivi.svg\" alt=\"\">\n        <span>Devoirs et activités</span>\n        <span>4 Devoirs / 7</span>\n      </div>\n    </div>\n    <div class=\"productivity\">\n      <div class=\"notes\">\n        <span>Productivité &nbsp;</span>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"recompenseNumber>0\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"recompenseNumber === 0\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"recompenseNumber>1\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"recompenseNumber <= 1\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"recompenseNumber>2\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"recompenseNumber < 2\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"recompenseNumber>3\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"recompenseNumber <= 3\" alt=\"\">\n        </div>\n        <div class=\"stars\">\n          <img src=\"../../../assets/svg/fullStar.svg\" *ngIf=\"recompenseNumber>4\" alt=\"\">\n          <img src=\"../../../assets/svg/emptyStar.svg\" *ngIf=\"recompenseNumber <= 4\" alt=\"\">\n        </div>\n      </div>\n\n      <div class=\"content-suivi\">\n        <img src=\"./../../assets/svg/recompensesBadge.svg\" alt=\"\">\n        <span>Récompenses</span>\n        <span>2 nouveaux badges</span>\n      </div>\n    </div>\n  </ion-grid>\n  <div style=\"position:absolute; bottom:10px;right:10px\">\n    <button (click)=\"openModal()\" style=\"background:none\"><img class=\"plus\" src=\"../../../assets/svg/plus-kids.svg\"\n        alt=\"\">\n    </button>\n  </div>\n\n</ion-content>\n<ion-content class=\"ion-padding\" *ngIf=\"activity === 'devoirs'\">\n  <div class=\"drop\">\n    <span>vendredi <strong> 19-11-2021</strong></span>\n    <div class=\"chevron\">\n      <ng-container *ngIf=\"dropDown===false;else open\">\n        <ion-icon style=\"color:#8F978F\" name=\"chevron-forward-outline\"></ion-icon>\n      </ng-container>\n      <ng-template #open>\n        <ion-icon style=\"color:#8F978F\" name=\"chevron-down-outline\"></ion-icon>\n      </ng-template>\n    </div>\n  </div>\n  <div class=\"devoirs\" *ngFor=\"let activity of activities\">\n    <img src=\"../../../assets/svg/ischecked.svg\" *ngIf=\"checked\" (click)=\"checked = false\"alt=\"\">\n    <img src=\"../../../assets/svg/isnotcheckd.svg\" *ngIf=\"!checked\" (click)=\"checked = true\"alt=\"\">\n      <ion-label *ngIf=\"activity.content.indexOf('http') !== 0\">    <span> - 8h-9h : Cours de français {{activity.content}}</span></ion-label>\n      <a href={{activity.content}} *ngIf=\"activity.content.indexOf('https') === 0\">    <span> - 8h-9h : Cours de français {{activity.content}}</span></a>\n    <ion-icon shape=\"round\" color=\"danger\" name=\"trash\" (click)=\"delete(activity._id)\"></ion-icon>\n  </div>\n  <div style=\"position:absolute; bottom:10px;right:10px\">\n    <button (click)=\"openModal()\" style=\"background:none\"><img class=\"plus\" src=\"../../../assets/svg/plus-kids.svg\"\n        alt=\"\">\n    </button>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_kids_activite_activite_module_ts.js.map