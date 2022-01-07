(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["default-src_app_layouts_insert-facteur-modal_insert-facteur-modal_page_ts"],{

/***/ 90584:
/*!***************************************************************************!*\
  !*** ./src/app/layouts/insert-facteur-modal/insert-facteur-modal.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsertFacteurModalPage": () => (/* binding */ InsertFacteurModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_insert_facteur_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./insert-facteur-modal.page.html */ 75865);
/* harmony import */ var _insert_facteur_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert-facteur-modal.page.scss */ 73763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let InsertFacteurModalPage = class InsertFacteurModalPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.facture = {
            refclient: '',
            datedebut: '',
            datefin: '',
            datelivraison: '',
            conditionreglement: '',
            modereglement: '',
        };
        this.modalReady = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.modalReady = true;
        }, 0);
    }
    save() {
        this.modalCtrl.dismiss({ event: this.facture });
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
InsertFacteurModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
InsertFacteurModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-insert-facteur-modal',
        template: _raw_loader_insert_facteur_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_insert_facteur_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InsertFacteurModalPage);



/***/ }),

/***/ 73763:
/*!*****************************************************************************!*\
  !*** ./src/app/layouts/insert-facteur-modal/insert-facteur-modal.page.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":host ::ng-deep .monthview-container {\n  height: auto !important;\n}\n:host ::ng-deep .event-detail-container {\n  display: none;\n}\n.MyEventCalendar {\n  background-color: #d7d7d7 !important;\n  color: black !important;\n  border-radius: 10px;\n}\n.MyinputUpdate {\n  border: 0;\n  border-radius: 6px;\n  padding: 16px;\n  background-color: white;\n  text-shadow: 1px 1px 0 #FFF;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  width: 94%;\n  margin-bottom: 10px;\n  margin-left: 8px;\n  margin-right: 5px;\n  font-size: small;\n  color: grey;\n}\n.mylistfacture {\n  background-color: white;\n  text-shadow: 1px 1px 0 #FFF;\n  width: 100%;\n  font-size: x-small;\n  color: grey;\n}\n.mylabelUpdate {\n  font-size: 16px;\n  padding: 16px;\n  color: gray;\n}\n.MyinputUpdate1 {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 160px;\n  padding: 16px;\n  background-color: white;\n  text-shadow: 1px 1px 0 #FFF;\n  box-shadow: -5px -5px 5px #FFF, 1px 1px 5px;\n  width: 27%;\n  height: 10PX;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  margin-left: 11px;\n  margin-right: 5px;\n}\n.ion-textarea {\n  border: 0;\n  outline: 0;\n  border-radius: 10px;\n  background-color: white;\n  text-shadow: 1px 1px 0 #FFF;\n  box-shadow: 5px 5px 5px 5px gray, 5px 5px 5px 5px;\n  width: 94%;\n  height: 40%;\n  margin-bottom: 10px;\n  margin-left: 8px;\n  margin-right: 5px;\n}\n.MyinputDate {\n  border: 0;\n  outline: 0;\n  font-size: 16px;\n  border-radius: 10px;\n  background-color: white;\n  text-shadow: 1px 1px 0 #FFF;\n  box-shadow: -5px -5px 20px #FFF, 1px 1px 5px;\n  width: 94%;\n  margin-bottom: 10px;\n  margin-left: 8px;\n  margin-right: 5px;\n}\n.message-box {\n  position: relative;\n}\n.message-box .message-input {\n  background: none;\n  border: none;\n  outline: none !important;\n  resize: none;\n  /* color: rgba(255, 255, 255, .8);*/\n  font-size: 15px;\n  height: 24px;\n  margin: 0;\n  padding-right: 25px;\n  width: 400px;\n  color: #444;\n}\n.message-box textarea:focus:-webkit-placeholder {\n  color: transparent;\n}\n.message-box .message-submit {\n  background-image: linear-gradient(135deg, #247238, #247238, #8EBF25, #8EBF25);\n  position: absolute;\n  height: 25px;\n  top: 8px;\n  left: 10px;\n  right: 10px;\n  width: 80px;\n  font-size: large;\n  border-radius: 10px 10px 10px 10px;\n  text-align: center;\n}\n.message-box .message-annule {\n  background-image: linear-gradient(135deg, #88181f, #88181f, #e6213c, #e6213c);\n  position: absolute;\n  height: 25px;\n  top: 8px;\n  left: -10px;\n  right: 10px;\n  width: 80px;\n  font-size: large;\n  border-radius: 10px 10px 10px 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2VydC1mYWN0ZXVyLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSTtFQUNJLHVCQUFBO0FBTFI7QUFRSTtFQUNJLGFBQUE7QUFOUjtBQVNBO0VBQ0ksb0NBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTko7QUFRQTtFQUNJLFNBQUE7RUFFQSxrQkFBQTtFQUNBLGFBdkJJO0VBd0JKLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFOSjtBQVNBO0VBRUksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFQSjtBQVNBO0VBQ0ksZUE1Q0k7RUE2Q0osYUE3Q0k7RUE4Q0osV0FBQTtBQU5KO0FBUUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBbkRJO0VBb0RKLG9CQUFBO0VBQ0EsYUFyREk7RUFzREosdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGlCQUFBO0FBTko7QUFRRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaURBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUxKO0FBUUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBbEZJO0VBbUZKLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU5KO0FBVUE7RUFFSSxrQkFBQTtBQVJKO0FBV0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFUUjtBQWFJO0VBQ0ksa0JBQUE7QUFYUjtBQWNJO0VBQ0ksNkVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBWlI7QUFlSTtFQUNJLDZFQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUVILFdBQUE7RUFDRyxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQWRSIiwiZmlsZSI6Imluc2VydC1mYWN0ZXVyLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRydWxlcjogMTZweDtcbiRjb2xvci1yZWQ6ICM3MjZiNmI7XG4kY29sb3ItYmc6ICNFQkVDRjA7XG4kY29sb3Itc2hhZG93OiAjQkFCRUNDO1xuJGNvbG9yLXdoaXRlOiAjRkZGO1xuOmhvc3QgOjpuZy1kZWVwIHtcbiAgICAubW9udGh2aWV3LWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cbiBcbiAgICAuZXZlbnQtZGV0YWlsLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuLk15RXZlbnRDYWxlbmRhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2Q3ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5NeWlucHV0VXBkYXRlICB7XG4gICAgYm9yZGVyOiAwO1xuICAgIC8vZm9udC1zaXplOiAkcnVsZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6ICRydWxlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDAgJGNvbG9yLXdoaXRlO1xuICAgIGJveC1zaGFkb3c6IC01cHggLTVweCAyMHB4ICRjb2xvci13aGl0ZSwgMXB4IDFweCA1cHg7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBjb2xvcjpncmV5XG5cbn1cbi5teWxpc3RmYWN0dXJleyAgXG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDAgJGNvbG9yLXdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICBjb2xvcjpncmV5XG59XG4ubXlsYWJlbFVwZGF0ZSB7ICBcbiAgICBmb250LXNpemU6ICRydWxlcjtcbiAgICBwYWRkaW5nOiAkcnVsZXI7XG4gICAgY29sb3I6Z3JheTtcbn1cbi5NeWlucHV0VXBkYXRlMSAge1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGZvbnQtc2l6ZTogJHJ1bGVyO1xuICAgIGJvcmRlci1yYWRpdXM6ICRydWxlcioxMDtcbiAgICBwYWRkaW5nOiAkcnVsZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwICRjb2xvci13aGl0ZTtcbiAgICBib3gtc2hhZG93OiAtNXB4IC01cHggNXB4ICRjb2xvci13aGl0ZSwgMXB4IDFweCA1cHg7XG4gICAgd2lkdGg6IDI3JTtcbiAgICBoZWlnaHQ6IDEwUFg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIC5pb24tdGV4dGFyZWF7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDAgJGNvbG9yLXdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IDVweCBncmF5LCA1cHggNXB4IDVweCA1cHg7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG5cbiAgfVxuICAuTXlpbnB1dERhdGUgIHtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBmb250LXNpemU6ICRydWxlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuIFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCAkY29sb3Itd2hpdGU7XG4gICAgYm94LXNoYWRvdzogLTVweCAtNXB4IDIwcHggJGNvbG9yLXdoaXRlLCAxcHggMXB4IDVweDtcbiAgICB3aWR0aDogOTQlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICBcblxuLm1lc3NhZ2UtYm94IHtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXG4gICAgJiAubWVzc2FnZS1pbnB1dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIC8qIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC44KTsqL1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgIGNvbG9yOiAjNDQ0O1xuXG4gICAgfVxuXG4gICAgdGV4dGFyZWE6Zm9jdXM6LXdlYmtpdC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmIC5tZXNzYWdlLXN1Ym1pdCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyNDcyMzgsICMyNDcyMzgsICM4RUJGMjUsICM4RUJGMjUpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgICYgLm1lc3NhZ2UtYW5udWxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzg4MTgxZiwgIzg4MTgxZiwgI2U2MjEzYywgI2U2MjEzYyk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgLy8gICBsZWZ0OiAxMHB4O1xuICAgICBsZWZ0OiAtMTBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 75865:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/insert-facteur-modal/insert-facteur-modal.page.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-toolbar color=\"white\">\n\n</ion-toolbar>\n<ion-content>\n\n  <ion-card-content >\n  <ion-row>\n    <input  class=\"MyinputUpdate\"style=\"font-size: small;\"  type=\"email\"   placeholder=\"REF CLIENT\" [(ngModel)]=\"facture.refclient\"/>\n  </ion-row>\n  <ion-row>\n<ion-col size=\"6\">\n<input  class=\"MyinputUpdate\"style=\"font-size: small;\"  type=\"email\"   placeholder=\"DATE DE DEBUT\" [(ngModel)]=\"facture.datedebut\"/>\n\n</ion-col>\n<ion-col size=\"6\">\n<input  class=\"MyinputUpdate\"style=\"font-size: small;\"  type=\"email\"   placeholder=\"DATE DE FIN\" [(ngModel)]=\"facture.datefin\"/>\n\n</ion-col>\n\n\n  </ion-row>\n  <ion-row>\n    <input  class=\"MyinputUpdate\"style=\"font-size: small;\"  type=\"email\"   placeholder=\"DATE DE LIVRAISON\" [(ngModel)]=\"facture.datelivraison\"/>\n  </ion-row>\n  <ion-row>\n    <input  class=\"MyinputUpdate\"style=\"font-size: x-small;\"  type=\"email\"   placeholder=\"CONDITION DE REGLEMENT (DELAI DE PAIMENT)\" [(ngModel)]=\"facture.conditionreglement\"/>\n  </ion-row>\n  <ion-row>\n  <ion-list  style=\"border:none\"class=\"MyinputUpdate\" style=\"font-size: small;\" >\n  <ion-item lines=\"none\">\n    <ion-select placeholder=\"MODE DE PAIMENT\" style=\"font-size: small;color:grey;\">\n      <ion-select-option value=\"f\">PAYER VIA CARTE BANCAIRE</ion-select-option>\n      <ion-select-option value=\"m\">PAYMENT EN CHEQUE</ion-select-option>\n      <ion-select-option value=\"N\">VIREMENT BANCAIRE</ion-select-option>\n\n    </ion-select>\n  </ion-item>\n</ion-list>\n<ion-list  style=\"font-size: x-small;\" >\n<ion-row>\n<ion-col size=\"12\">\n<ion-item class=\"mylistfacture\">\n  <ion-label>\n  MONTANT HC\n\n  </ion-label>\n  </ion-item>\n</ion-col>\n\n</ion-row>\n\n  <ion-item class=\"mylistfacture\">\n  <ion-label>\n  MONTANT TVA\n\n  </ion-label>\n  </ion-item>\n  <ion-item class=\"mylistfacture\">\n  <ion-label>\n  MONTANT TTC\n\n  </ion-label>\n  </ion-item>\n</ion-list>\n  </ion-row>\n\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col size=\"5\"></ion-col>\n      <ion-col size=\"2\">\n \n      </ion-col>\n\n      <ion-col size=\"5\"></ion-col>\n    </ion-row>\n</ion-content>\n<ion-footer >\n<ion-toolbar color=\"white\">\n<ion-row style=\"padding-bottom: 30px; \">\n    <ion-col size=\"3\">\n    </ion-col>\n    <ion-col  size=\"3\">\n    <div (click)=\"close()\" class=\"message-box\">\n      <div type=\"submit\" class=\"message-annule\">\n      <h6 style=\"font-size: small;color:white; top:0px;    margin-top: 5px;\" name=\"send-outline\">Annuler</h6>\n    </div>\n    </div>\n    </ion-col>\n    <ion-col  size=\"3\">\n    <div (click)=\"save()\" class=\"message-box\">\n      <div type=\"submit\" class=\"message-submit\">\n      <h6 style=\"font-size: small;color:white; top:0px;    margin-top: 5px;\" name=\"send-outline\">Enregitrer</h6>\n    </div>\n    </div>\n    </ion-col>\n    <ion-col size=\"3\">\n    </ion-col>\n    </ion-row>\n</ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_layouts_insert-facteur-modal_insert-facteur-modal_page_ts.js.map