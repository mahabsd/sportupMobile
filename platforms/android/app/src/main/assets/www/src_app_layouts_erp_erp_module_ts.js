(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["src_app_layouts_erp_erp_module_ts"],{

/***/ 97711:
/*!***************************************************!*\
  !*** ./src/app/layouts/erp/erp-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpPageRoutingModule": () => (/* binding */ ErpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        children: [
            {
                path: 'gestion-material',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chart_js_dist_chart_esm_js"), __webpack_require__.e("default-src_app_layouts_insert-material-modal_insert-material-modal_page_ts"), __webpack_require__.e("src_app_layouts_erp_gestion-material_gestion-material_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./gestion-material/gestion-material.module */ 8253)).then(m => m.GestionMaterialPageModule)
            },
            {
                path: 'gestion-effectif',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chart_js_dist_chart_esm_js"), __webpack_require__.e("default-src_app_layouts_insert-effectif-modal_insert-effectif-modal_page_ts"), __webpack_require__.e("src_app_layouts_erp_gestion-effectif_gestion-effectif_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./gestion-effectif/gestion-effectif.module */ 18741)).then(m => m.GestionEffectifPageModule)
            },
            {
                path: 'gestion-espace',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chart_js_dist_chart_esm_js"), __webpack_require__.e("default-src_app_layouts_insert-espace-modal_insert-espace-modal_page_ts"), __webpack_require__.e("src_app_layouts_erp_gestion-espace_gestion-espace_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./gestion-espace/gestion-espace.module */ 39769)).then(m => m.GestionEspacePageModule)
            },
            {
                path: 'gestion-adherent',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chart_js_dist_chart_esm_js"), __webpack_require__.e("default-src_app_layouts_insert-adherent-modal_insert-adherent-modal_page_ts"), __webpack_require__.e("src_app_layouts_erp_gestion-adherent_gestion-adherent_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./gestion-adherent/gestion-adherent.module */ 47255)).then(m => m.GestionAdherentPageModule)
            },
            {
                path: 'gestion-vente',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chart_js_dist_chart_esm_js"), __webpack_require__.e("default-src_app_layouts_insert-vente-modal_insert-vente-modal_page_ts"), __webpack_require__.e("src_app_layouts_erp_gestion-vente_gestion-vente_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./gestion-vente/gestion-vente.module */ 18333)).then(m => m.GestionVentePageModule)
            },
            {
                path: 'gestion-facturation',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chart_js_dist_chart_esm_js"), __webpack_require__.e("default-src_app_layouts_insert-facteur-modal_insert-facteur-modal_page_ts"), __webpack_require__.e("src_app_layouts_erp_gestion-facturation_gestion-facturation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./gestion-facturation/gestion-facturation.module */ 5483)).then(m => m.GestionFacturationPageModule)
            },
            {
                path: 'gestion-last-effectif',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chart_js_dist_chart_esm_js"), __webpack_require__.e("default-src_app_layouts_insert-last-effectif-modal_insert-last-effectif-modal_page_ts"), __webpack_require__.e("src_app_layouts_erp_gestion-last-effectif_gestion-last-effectif_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./gestion-last-effectif/gestion-last-effectif.module */ 46252)).then(m => m.GestionLastEffectifPageModule)
            },
            {
                path: 'erp-space',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_layouts_erp_erp-space_erp-space_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./erp-space/erp-space.module */ 79383)).then(m => m.ErpSpacePageModule)
            },
        ]
    }
];
let ErpPageRoutingModule = class ErpPageRoutingModule {
};
ErpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    })
], ErpPageRoutingModule);



/***/ }),

/***/ 84545:
/*!*******************************************!*\
  !*** ./src/app/layouts/erp/erp.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpPageModule": () => (/* binding */ ErpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _erp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./erp-routing.module */ 97711);
/* harmony import */ var _erp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./erp.page */ 59739);







let ErpPageModule = class ErpPageModule {
};
ErpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _erp_routing_module__WEBPACK_IMPORTED_MODULE_0__.ErpPageRoutingModule
        ],
        declarations: [_erp_page__WEBPACK_IMPORTED_MODULE_1__.ErpPage]
    })
], ErpPageModule);



/***/ }),

/***/ 59739:
/*!*****************************************!*\
  !*** ./src/app/layouts/erp/erp.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErpPage": () => (/* binding */ ErpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_erp_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./erp.page.html */ 98946);
/* harmony import */ var _erp_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./erp.page.scss */ 65350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ErpPage = class ErpPage {
    constructor() { }
    ngOnInit() {
    }
    getItem(num) {
        this.price = num;
    }
    getColor(i) {
        if (i == this.price)
            return "medium";
        else
            return "light";
    }
};
ErpPage.ctorParameters = () => [];
ErpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-erp',
        template: _raw_loader_erp_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_erp_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ErpPage);



/***/ }),

/***/ 65350:
/*!*******************************************!*\
  !*** ./src/app/layouts/erp/erp.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container {\n  height: 800px;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n\n.myFooter {\n  border-radius: 8px;\n  padding-bottom: 5px;\n  line-height: 0;\n  box-shadow: inset 1px 1px 1px 1px #247238;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 32px;\n  font-size: 51.2px;\n  width: 340px;\n}\n\n.mygallery {\n  border-radius: 6px;\n  display: inline-flex;\n}\n\nion-slides {\n  height: 100%;\n}\n\n:host ::ng-deep .swiper-pagination {\n  bottom: 5%;\n}\n\n:host ::ng-deep .swiper-pagination .swiper-pagination-bullet-active {\n  background: #247238;\n  width: 10px;\n  height: 10px;\n  opacity: 5.2;\n}\n\nion-toolbar {\n  --background: linear-gradient(135deg,#247238, #247238, #8EBF25,#8EBF25);\n}\n\n.shadowbox {\n  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);\n}\n\n.clear {\n  clear: both;\n}\n\n.slide-toggle {\n  display: none;\n}\n\n.slidemenu {\n  font-family: arial, sans-serif;\n  max-width: 100%;\n  margin: 10px 10px 20px 20px auto;\n}\n\n.slidemenu label {\n  width: 25%;\n  text-align: center;\n  display: block;\n  float: left;\n  color: green;\n  opacity: 0.2;\n}\n\n.slidemenu label:hover {\n  cursor: pointer;\n  color: green;\n}\n\n.slidemenu label span {\n  display: block;\n  padding: 10px;\n  color: #247238;\n}\n\n.slidemenu label .icon {\n  font-size: 30px;\n  border: solid 2px #247238;\n  text-align: center;\n  height: 30px;\n  width: 30px;\n  display: block;\n  margin: 0 auto;\n  line-height: 50px;\n  border-radius: 50%;\n}\n\n/*Bar Style*/\n\n.slider {\n  width: 70%;\n  height: 5px;\n  display: block;\n  background: #ccc;\n  margin-top: 10px;\n  border-radius: 5px;\n}\n\n.slider .bar {\n  width: 50%;\n  height: 5px;\n  background: green;\n  border-radius: 5px;\n}\n\n/*Animations*/\n\n.slidemenu label, .slider .bar {\n  transition: all 500ms ease-in-out;\n  -webkit-transition: all 500ms ease-in-out;\n  -moz-transition: all 500ms ease-in-out;\n}\n\n/*Toggle*/\n\n.slidemenu .slide-toggle:checked + label {\n  opacity: 1;\n}\n\n.slidemenu #slide-item-1:checked ~ .slider .bar {\n  margin-left: 0;\n}\n\n.slidemenu #slide-item-2:checked ~ .slider .bar {\n  margin-left: 25%;\n}\n\n.slidemenu #slide-item-3:checked ~ .slider .bar {\n  margin-left: 50%;\n}\n\n#cart-badge {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n\n.outter-badge {\n  position: relative;\n  margin: 10px;\n  width: 64px;\n}\n\n.inner-badge-OK {\n  display: table;\n  position: absolute;\n  top: 20px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-OK .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.inner-badge-KO {\n  display: table;\n  position: absolute;\n  top: 20px;\n  right: -10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-KO .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.inner-badge-Tchat {\n  display: table;\n  position: absolute;\n  top: -23px;\n  left: -20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  text-align: center;\n}\n\n.inner-badge-Tchat .badgeCancel {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 8px;\n}\n\n.ZoneShare {\n  height: 25px;\n  background: #e4e3e3;\n  border-radius: 23px;\n}\n\n.swiper-slide:not(.swiper-slide-active) > div {\n  display: none;\n}\n\nion-slide {\n  width: 4rem !important;\n  margin-right: -2px !important;\n}\n\nion-content {\n  background: none;\n  --background:rgb(236, 236, 236);\n}\n\n.choiceContainer {\n  margin-top: 10px;\n  margin-left: 90px;\n  margin-right: 90px;\n}\n\n.optionBlock {\n  background-color: #e4e3e3;\n}\n\n.priceTag {\n  flex-direction: column;\n}\n\n.DescriptionPayment {\n  width: 100%;\n}\n\n.ConnexionB {\n  background: linear-gradient(30deg, #020024 0%, #247238 0%, #8ebf25 100%);\n  border: none;\n  color: white;\n  padding: 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  width: 150px;\n  border-radius: 2px;\n  color: white;\n}\n\n.logoC {\n  width: 100px;\n}\n\n.visa {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBbklKOztBQXlMQTtFQUVJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBdkxKOztBQXlMQTtFQUNFLGFBQUE7QUF0TEY7O0FBd0xBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQXJMRjs7QUF5TEU7RUFDRSxnQkFBQTtFQUNKLCtCQUFBO0FBdExBOztBQTBMRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXZMSjs7QUEwTEU7RUFDRSx5QkFBQTtBQXZMSjs7QUEyTEU7RUFDRSxzQkFBQTtBQXhMSjs7QUEyTEU7RUFDRSxXQUFBO0FBeExKOztBQTJMRTtFQUNFLHdFQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBeExKOztBQTRMRTtFQUNFLFlBQUE7QUF6TEo7O0FBNExFO0VBQ0UsV0FBQTtBQXpMSiIsImZpbGUiOiJlcnAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICNjb250YWluZXIgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgI2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICM4YzhjOGM7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gICNjb250YWluZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gICNjb250YWluZXIge1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogRGFya0dyZWVuOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCMyNDcyMzgsICMyNDcyMzgsICAjOEVCRjI1LCM4RUJGMjUpO1xuICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICAvLyBjc3MgYnV0dG9uXG4gICRydWxlcjogMTZweDtcbiAgJGNvbG9yLXJlZDogIzcyNmI2YjtcbiAgJGNvbG9yLWJnOiAjRUJFQ0YwO1xuICAkY29sb3Itc2hhZG93OiAjQkFCRUNDO1xuICAkY29sb3Itd2hpdGU6ICNGRkY7XG5cblxuICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzNiU7XG4gICAgICBmb250LXNpemU6IDIuMGVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuY2FyZC1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuMGVtO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA1MiU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuICAubXlGb290ZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogJHJ1bGVyLzI7XG4gICAgcGFkZGluZy1ib3R0b206IDA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCAxcHggMXB4ICMyNDcyMzg7XG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgJHJ1bGVyKjI7XG4gICAgZm9udC1zaXplOiAkcnVsZXIqMy4yO1xuICAgIHdpZHRoOiAzNDBweDtcbiAgfVxuICAubXlnYWxsZXJ5e1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDsgXG4gICAgZGlzcGxheTppbmxpbmUtZmxleDtcbiAgfVxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgOmhvc3QgOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbntcbiAgICBib3R0b206IDUlO1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyNDcyMzg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMHB4IDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4IDtcbiAgICAgICAgb3BhY2l0eTogNS4yO1xuICB9XG59XG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywjMjQ3MjM4LCAjMjQ3MjM4LCAgIzhFQkYyNSwjOEVCRjI1KTtcblxufVxuXG4uc2hhZG93Ym94IHtcbiAvLyBib3JkZXI6IDFweCBzb2xpZCAjOEVCRjI1O1xuIC8vIGJveC1zaGFkb3c6IDJweCAxcHggMXB4ICMyNDcyMzg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmYsICNkZGQgNDAlLCAjY2NjKTtcbn1cblxuXG4vL1xuXG5cblxuLy8gLmNsZWFye1xuLy8gICBjbGVhcjogYm90aDtcbi8vIH1cblxuXG4vLyAuc2xpZGUtdG9nZ2xle1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuXG4vLyAuc2xpZGVtZW51e1xuLy8gICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4vLyAgIG1heC13aWR0aDogMTAwJTtcbi8vICAgbWFyZ2luOiA1MHB4IGF1dG87XG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyB9XG5cbi8vIC5zbGlkZW1lbnUgbGFiZWx7XG4vLyAgIHdpZHRoOiAyNSU7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gICBjb2xvcjogIzMzMztcbi8vICAgb3BhY2l0eTogMC4yO1xuXG4vLyB9XG5cblxuXG5cbi8vIC5zbGlkZW1lbnUgbGFiZWwgLmljb257XG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgYm9yZGVyOiBzb2xpZCAycHggIzMzMztcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICBoZWlnaHQ6IDUwcHg7XG4vLyAgIHdpZHRoOiA1MHB4O1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyB9XG5cbi8vIC8qQmFyIFN0eWxlKi9cblxuXG5cbi8vIC5zbGlkZXIgLmJhcntcbi8vICAgd2lkdGg6IDUwJTtcbi8vICAgaGVpZ2h0OiA1cHg7XG4vLyAgIGJhY2tncm91bmQ6IHJnYigxLCA2OCwgMzcpO1xuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyB9XG5cbi8vIC8qQW5pbWF0aW9ucyovXG4vLyAuc2xpZGVtZW51IGxhYmVsLCAuc2xpZGVyIC5iYXIge1xuLy8gICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4vLyAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuLy8gICAtbW96LXRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbi8vIH1cblxuLy8gLypUb2dnbGUqL1xuXG4vLyAuc2xpZGVtZW51IC5zbGlkZS10b2dnbGU6Y2hlY2tlZCArIGxhYmVse1xuLy8gICBvcGFjaXR5OiAxO1xuLy8gfVxuXG5cblxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0xOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiAwOyB9XG4vLyAuc2xpZGVtZW51ICNzbGlkZS1pdGVtLTI6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDMwJTsgfVxuLy8gLnNsaWRlbWVudSAjc2xpZGUtaXRlbS0zOmNoZWNrZWQgfiAuc2xpZGVyIC5iYXJ7IG1hcmdpbi1sZWZ0OiA1MCU7IH1cbi8vIC5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tNDpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogNzUlOyB9XG5cblxuXG4vLyBuYXYge1xuLy8gICBtYXgtd2lkdGg6MTAwJTtcbi8vICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCAjZmZmZmZmIDI1JSwgI2ZmZmZmZiA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4vLyAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICBwYWRkaW5nOiAxMHB4IDA7XG4vLyB9XG5cbi8vIG5hdiB1bCB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMjUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuLy8gICBib3gtc2hhZG93OiAwIDAgMjVweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gfVxuXG4vLyBuYXYgdWwgbGkge1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyB9XG5cbi8vIG5hdiB1bCBsaSBhIHtcbi8vICAgcGFkZGluZzoxMHB4O1xuLy8gICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbi8vICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuLy8gICBjb2xvcjogYmxhY2s7XG4vLyAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vIH1cblxuLy8gbmF2IHVsIGxpIGE6aG92ZXIge1xuLy8gICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSksIGluc2V0IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuLy8gICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4vLyAgIGNvbG9yOiAjOEVCRjI1O1xuLy8gfVxuXG5cbi5jbGVhcntcbiAgY2xlYXI6IGJvdGg7XG59XG5cblxuLnNsaWRlLXRvZ2dsZXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlbWVudXtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCAxMHB4IDIwcHggMjBweCBhdXRvO1xuIC8vIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbGlkZW1lbnUgbGFiZWx7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogZ3JlZW47XG4gIG9wYWNpdHk6IDAuMjtcblxufVxuXG4uc2xpZGVtZW51IGxhYmVsOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnNsaWRlbWVudSBsYWJlbCBzcGFue1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDsgICBcbiAgY29sb3I6ICMyNDcyMzg7IFxufVxuXG4uc2xpZGVtZW51IGxhYmVsIC5pY29ue1xuICBmb250LXNpemU6IDMwcHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICMyNDcyMzg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKkJhciBTdHlsZSovXG5cbi5zbGlkZXJ7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uc2xpZGVyIC5iYXJ7XG4gIHdpZHRoOjUwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cblxuLypBbmltYXRpb25zKi9cbi5zbGlkZW1lbnUgbGFiZWwsIC5zbGlkZXIgLmJhciB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4vKlRvZ2dsZSovXG5cbi5zbGlkZW1lbnUgLnNsaWRlLXRvZ2dsZTpjaGVja2VkICsgbGFiZWx7XG4gIG9wYWNpdHk6IDE7XG59XG5cblxuXG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTE6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDA7IH1cbi5zbGlkZW1lbnUgI3NsaWRlLWl0ZW0tMjpjaGVja2VkIH4gLnNsaWRlciAuYmFyeyBtYXJnaW4tbGVmdDogMjUlOyB9XG4uc2xpZGVtZW51ICNzbGlkZS1pdGVtLTM6Y2hlY2tlZCB+IC5zbGlkZXIgLmJhcnsgbWFyZ2luLWxlZnQ6IDUwJTsgfVxuLkhlYWRlckZpbHRlcntcbiAgLy8gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG4gICAvLyBoZWlnaHQ6IDUlO1xuICAgXG59XG4uQmFkeUZpbHRlcntcblxufVxuXG5cbiBcbiAjY2FydC1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gfVxuXG4gLm91dHRlci1iYWRnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICAvL2JhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDY0cHg7XG4gIH1cbiAgLmlubmVyLWJhZGdlLU9LIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBcblxuICB9XG4gIC5pbm5lci1iYWRnZS1PSyAuYmFkZ2VDYW5jZWx7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuXG4gIC5pbm5lci1iYWRnZS1LTyB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogLTEwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuaW5uZXItYmFkZ2UtS08gLmJhZGdlQ2FuY2Vse1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgXG4gIH1cblxuICAuaW5uZXItYmFkZ2UtVGNoYXQge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0yM3B4O1xuICAgIGxlZnQ6IC0yMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmlubmVyLWJhZGdlLVRjaGF0IC5iYWRnZUNhbmNlbHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG5cblxuXG5cblxuXG5cblxuXG5cbi8vIHVsIHtcbi8vICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuLy8gICB3aWR0aDogNTAwcHg7XG4vLyB9XG5cbi8vIGgzIHtcbi8vICAgZm9udDogYm9sZCAyMHB4LzEuNSBIZWx2ZXRpY2EsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4vLyB9XG5cbi8vIGxpIGltZyB7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gICBtYXJnaW46IDAgMTVweCAwIDA7XG4vLyB9XG5cbi8vIGxpIHAge1xuLy8gICBmb250OiAyMDAgMTJweC8xLjUgR2VvcmdpYSwgVGltZXMgTmV3IFJvbWFuLCBzZXJpZjtcbi8vIH1cblxuLy8gbGkge1xuLy8gICBwYWRkaW5nOiAxMHB4O1xuLy8gICBvdmVyZmxvdzogYXV0bztcbi8vIH1cblxuLy8gbGk6aG92ZXIge1xuLy8gICBiYWNrZ3JvdW5kOiAjZWVlO1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG5cbi8vIC5pbWFnZXMge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgIH1cbiAgXG4vLyAgIC5pbWFnZXMgLlVzZXJQb3N0ZWQge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogNDAlO1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICB0b3A6MTBweDtcbi8vICAgICBsZWZ0OiAwO1xuLy8gICB9XG4gXG4gXG4uWm9uZVNoYXJle1xuICAgLy8gbWFyZ2luLXRvcDogLTVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZDogI2U0ZTNlMztcbiAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xufVxuLnN3aXBlci1zbGlkZTpub3QoLnN3aXBlci1zbGlkZS1hY3RpdmUpID4gZGl2IHtcbiAgZGlzcGxheTpub25lO1xufVxuaW9uLXNsaWRlIHtcbiAgd2lkdGg6IDRyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAtMnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuXG4gIGlvbi1jb250ZW50e1xuICAgIGJhY2tncm91bmQ6bm9uZSA7XG4tLWJhY2tncm91bmQ6cmdiKDIzNiwgMjM2LCAyMzYpO1xuICB9XG4gXG5cbiAgLmNob2ljZUNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICAgIG1hcmdpbi1yaWdodDogOTBweDtcbiAgfVxuXG4gIC5vcHRpb25CbG9ja3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlM2UzO1xuICB9XG5cblxuICAucHJpY2VUYWd7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5EZXNjcmlwdGlvblBheW1lbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuQ29ubmV4aW9uQntcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDM2LDExNCw1NiwxKSAwJSwgcmdiYSgxNDIsMTkxLDM3LDEpIDEwMCUpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiA0cHggMnB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgY29sb3I6d2hpdGU7XG4gIH1cbiAgXG5cbiAgLmxvZ29De1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuXG4gIC52aXNhe1xuICAgIHdpZHRoOiA1MHB4O1xuICB9Il19 */");

/***/ }),

/***/ 98946:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/erp/erp.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" style=\"background-color:rgb(10, 51, 10)\">\n  <ion-toolbar style=\"background-color:#247238\">\n    <ion-buttons slot=\"start\">\n \n    </ion-buttons>\n    <ion-title color=\"light\" class=\"ion-text-center\"> ERP</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-row style=\"margin-top: 10px; margin-bottom: 10px;\">\n\n    <ion-col class=\"ion-text-center\">\n\n      <ion-label style=\" font-size: medium;  text-align: center; color: rgb(129, 129, 129); \">\n        Ajouter des fonctionalit?? et des avantages Exeptionelles a votre application\n      </ion-label>\n\n\n    </ion-col>\n\n  </ion-row>\n  <ion-row>\n    <div style=\"display: flex; justify-content: center; width: 100%;\">\n      <img class=\"logoC\" src=\"assets/imgs/logo.jpg\">\n    </div>\n\n\n\n  </ion-row>\n  <div class=\"choiceContainer\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-button  (click)=\"getItem(1)\" style=\"width: 200px; height: 40px;\" [color]=\"getColor(1)\">\n        <div style=\"position: relative; left: 0; \">\n  \n          <div>\n            <div style=\"text-align: left; font-size: 9px;\">HT</div> 1.90 ??? /Mois\n          </div>\n        \n        </div>\n  \n      </ion-button>\n      <!-- <div class=\"price\">\n        <div>HT</div>\n        <div>   <label  class=\"priceTag\"><h2>1.90???</h2>/Mois</label></div>\n     \n      </div> -->\n  \n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-button  (click)=\"getItem(2)\" style=\"width: 200px; height: 40px;\" [color]=\"getColor(2)\">\n        <div style=\"position: relative; left: 0; \">\n  \n          <div>\n            <div style=\"text-align: left; font-size: 9px;\">HT</div> 5.70 ??? /3Mois\n          </div>\n          <div style=\"font-size: 9px;  \">un mois gratuit</div>\n        </div>\n  \n      </ion-button>\n      <!-- <div class=\"price\">\n        <div>HT</div>\n        <div>   <label  class=\"priceTag\"><h2>1.90???</h2>/Mois</label></div>\n     \n      </div> -->\n  \n    </ion-row>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-button (click)=\"getItem(3)\" style=\"width: 200px; height: 40px;\" [color]=\"getColor(3)\">\n        <div style=\"position: relative; left: 0; \">\n  \n          <div>\n            <div style=\"text-align: left; font-size: 9px;\">HT</div> 10.0 ??? /6Mois\n          </div>\n          <div style=\"font-size: 9px;\">un mois gratuit</div>\n        </div>\n  \n      </ion-button>\n      <!-- <div class=\"price\">\n        <div>HT</div>\n        <div>   <label  class=\"priceTag\"><h2>1.90???</h2>/Mois</label></div>\n     \n      </div> -->\n  \n    </ion-row>\n\n  </div>\n\n  <ion-row class=\"DescriptionPayment\">\n\n\n    <div\n      style=\"display: flex; justify-content: center; width: 100%; margin-left: 30px; margin-right: 30px; text-align: center; margin-top: 20px; color: rgb(129, 129, 129); margin-bottom: 5px;\">\n      Une meilleure organisation\n      Une Optimisation des temps\n      une meilleur rentabilit??\n    </div>\n\n\n\n\n    <ion-row >\n      <div style=\"display: flex; justify-content: center; width: 100%; margin-bottom: 10px;\"  >\n        <button class=\"ConnexionB\" [routerLink]=\"['/erp-space']\" red >\n          C'EST PARTI !\n        </button>\n      </div>\n\n      <div style=\"width: 100%; display: flex; justify-content: center; \">\n        <b style=\"font-size: small;\">Paiment 100 $ sur.transaction bancaires crypt??es</b>\n      </div>\n      <div style=\"width: 100%; display: flex; justify-content: center;\">\n        <p>\n          Nous acceptons les cartes de cr??dit bancaires\n        </p>\n      </div>\n \n    </ion-row>\n  </ion-row>\n  <ion-row class=\"ion-justify-content-center\">\n    <img class=\"visa\" src=\"assets/ImgErp/mastercard.png\" />\n    </ion-row>\n \n</ion-content>\n<div style=\"background-color: #247238; width: 100%; height: 5px;\">\n\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_layouts_erp_erp_module_ts.js.map