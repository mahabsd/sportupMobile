(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_shared_Service_page_service_ts"],{

/***/ 82112:
/*!************************************************!*\
  !*** ./src/app/shared/Service/page.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageService": () => (/* binding */ PageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ 1128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);




let PageService = class PageService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    getpagesbyID(id) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/getAll/?createdBy=${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    addPage(Page) {
        return this.apiService
            .post(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}`, Page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    updatepage(page) {
        return this.apiService.put(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/${page._id}`, page);
    }
    deletepage(id) {
        return this.apiService.delete(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}` + id);
    }
    getOnePage(id) {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/getAll/?_id=${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res.data.data));
    }
    getAllPages() {
        return this.apiService
            .get(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/getAll`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res));
    }
    updateCoverPage(page) {
        return this.apiService.patch(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}` + '/cover', page);
    }
    updateProfileImagePage(page) {
        return this.apiService.patch(`${_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService.apiPage}/imageProfile`, page);
    }
};
PageService.ctorParameters = () => [
    { type: _utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService }
];
PageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], PageService);



/***/ })

}]);
//# sourceMappingURL=src_app_shared_Service_page_service_ts.js.map