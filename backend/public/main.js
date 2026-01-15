(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/cYP":
/*!***********************************************************!*\
  !*** ./src/app/shared/show-flight/show-flight.service.ts ***!
  \***********************************************************/
/*! exports provided: ShowFlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFlightService", function() { return ShowFlightService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time */ "Yf6P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_page1_scanner_scanner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/page1/scanner/scanner.service */ "w6iL");





class ShowFlightService {
    constructor(http, scannerService) {
        this.http = http;
        this.scannerService = scannerService;
        this.userChoice = this.scannerService.getUserChoice();
        this.cityCode = {
            'Katowice': 'KTW-sky',
            'Cracow': 'KRK-sky',
            'Warsaw': 'WAW-sky',
            'Berlin': 'BER-sky',
            'Barcelona': 'BCN-sky',
            'New York': 'JFK-sky'
        };
        this.dataArr = [];
        this.timeArr = [];
        this.done = false;
    }
    ngOnInit() {
    }
    getFlightInfo() {
        return this.http.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/PL/PLN/pl-PL/${this.cityCode[this.userChoice[0].from]}/${this.cityCode[this.userChoice[0].to]}/${this.userChoice[0].date}`, {
            "headers": {
                "x-rapidapi-key": "f1cf0f8c00mshf05c5cdbf0dbad6p1422b4jsnb47c0d2bc70a",
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
            }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(_ => console.log('done')));
    }
    getPrice() {
        if (this.done) {
            return this.dataArr['Quotes'][0]['MinPrice'];
        }
    }
    getDataArr() {
        if (this.done) {
            return this.dataArr;
        }
    }
    getNoResult() {
        if (this.done && this.dataArr['Quotes'].length == 0) {
            return 'NO RESULTS';
        }
        else {
            return 'Your Search';
        }
    }
    showFlight() {
        this.getFlightInfo().subscribe((data) => {
            this.done = true;
            this.dataArr = [];
            this.dataArr = data;
        });
    }
    isDone() {
        return this.done;
    }
    setTime() {
        const hour = Math.floor((Math.random() * 24) + 1);
        const minutes = Math.floor(Math.random() * 60);
        const time = new _time__WEBPACK_IMPORTED_MODULE_1__["Time"](hour, minutes);
        this.timeArr.push(time);
    }
    getTime() {
        return this.timeArr;
    }
}
ShowFlightService.ɵfac = function ShowFlightService_Factory(t) { return new (t || ShowFlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_page1_scanner_scanner_service__WEBPACK_IMPORTED_MODULE_4__["ScannerService"])); };
ShowFlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ShowFlightService, factory: ShowFlightService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Documents\Angular projekty\ticket-reservation\fontend\src\main.ts */"zUnb");


/***/ }),

/***/ "5dPE":
/*!***********************************************!*\
  !*** ./src/app/page1/page1-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Page1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1RoutingModule", function() { return Page1RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "zbeZ");
/* harmony import */ var _singup_singup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singup/singup.component */ "TGdo");
/* harmony import */ var _page1_home_page1_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page1-home/page1-home.component */ "jefT");
/* harmony import */ var _page2_page2_home_page2_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page2/page2-home/page2-home.component */ "RLG4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _page1_home_page1_home_component__WEBPACK_IMPORTED_MODULE_3__["Page1HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'signup', component: _singup_singup_component__WEBPACK_IMPORTED_MODULE_2__["SingupComponent"] },
    { path: 'page2', component: _page2_page2_home_page2_home_component__WEBPACK_IMPORTED_MODULE_4__["Page2HomeComponent"] },
];
class Page1RoutingModule {
}
Page1RoutingModule.ɵfac = function Page1RoutingModule_Factory(t) { return new (t || Page1RoutingModule)(); };
Page1RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: Page1RoutingModule });
Page1RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](Page1RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "98Sv":
/*!****************************************************!*\
  !*** ./src/app/page2/luggage/luggage.component.ts ***!
  \****************************************************/
/*! exports provided: LuggageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LuggageComponent", function() { return LuggageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_fly_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/fly-info.service */ "O4/u");
/* harmony import */ var _page2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page2.service */ "WQOD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/button/button.component */ "sELr");





function LuggageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LuggageComponent_div_3_Template_div_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.chooseLuggage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Basic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "hand luggage 55x40x23cm, 8kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "personal item 40x35x12cm, 2kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LuggageComponent_div_3_Template_div_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.chooseLuggage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Checked Baggage max 150cm, 23kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "personal item 40x35x12cm, 2kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "app-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "230 PLN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LuggageComponent_div_3_Template_div_click_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.chooseLuggage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Checked Baggage max 170cm, 33kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "personal item 40x35x12cm, 2kg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "320 PLN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Person ", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", i_r2);
} }
class LuggageComponent {
    constructor(flyInfo, page2Service) {
        this.flyInfo = flyInfo;
        this.page2Service = page2Service;
        this.info = this.flyInfo.getInfo();
        this.people = this.info[0].people;
        this.luggagePrice = [];
    }
    ngOnInit() {
    }
    fakeArray(length) {
        if (length >= 0) {
            return new Array(length);
        }
    }
    chooseLuggage(event) {
        const wrapper = document.querySelectorAll('.luggage__wrapper');
        let target = event.target.closest(".luggage__card");
        let id = target.attributes['id'].nodeValue;
        let cards = document.querySelectorAll('.luggage__card');
        const priceAttr = target.attributes['price'].nodeValue;
        wrapper.forEach(wrap => {
            cards.forEach((card, index) => {
                if (card.id === target.id && card.classList.contains('clicked')) {
                    card.classList.remove('clicked');
                    const priceIndex = this.luggagePrice.indexOf(card.attributes['price'].nodeValue);
                    this.luggagePrice.splice(priceIndex, 1);
                    this.page2Service.spliceLuggageArr(priceIndex, 1);
                }
            });
        });
        target.classList.toggle('clicked');
        if (target.classList.contains('clicked')) {
            this.luggagePrice.push(priceAttr);
        }
        this.page2Service.addLuggagePrice(this.luggagePrice);
    }
}
LuggageComponent.ɵfac = function LuggageComponent_Factory(t) { return new (t || LuggageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fly_info_service__WEBPACK_IMPORTED_MODULE_1__["FlyInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_page2_service__WEBPACK_IMPORTED_MODULE_2__["Page2Service"])); };
LuggageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LuggageComponent, selectors: [["app-luggage"]], decls: 4, vars: 1, consts: [[1, "luggage__section"], ["class", "luggage", 4, "ngFor", "ngForOf"], [1, "luggage"], [1, "person"], [1, "luggage__wrapper"], ["price", "0", 1, "luggage__card", 3, "id", "click"], [1, "luggage__header"], [1, "luggage__body"], ["price", "230", 1, "luggage__card", 3, "id", "click"], ["price", "320", 1, "luggage__card", 3, "id", "click"]], template: function LuggageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose your luggage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LuggageComponent_div_3_Template, 34, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fakeArray(ctx.people));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]], styles: [".luggage__section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 4em;\n}\n.luggage__section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .luggage__section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\n.luggage__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.luggage__card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);\n  margin: 1em;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n.luggage__card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5%);\n}\n.luggage__card[_ngcontent-%COMP%]:hover    > .luggage__header[_ngcontent-%COMP%] {\n  background-color: #2a90d2;\n}\n.luggage__header[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  font-weight: 600;\n  background-color: rgba(42, 144, 210, 0.5);\n  color: white;\n  transition: all 0.2s ease-in-out;\n}\n.luggage__body[_ngcontent-%COMP%] {\n  padding: 1.5em;\n  font-size: 0.8rem;\n  color: #424242;\n}\n.luggage__body[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n.luggage[_ngcontent-%COMP%]   .clicked[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 11px #2a90d2;\n  transform: translateY(-5%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsdWdnYWdlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBREo7QUFHSTtFQUNJLGVBQUE7QUFEUjtBQVFJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFMUjtBQVFJO0VBQ0ksb0NBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFOUjtBQVFRO0VBQ0ksMEJBQUE7QUFOWjtBQVVJO0VBQ0kseUJDakNNO0FEeUJkO0FBV0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0N0Q2E7RUR1Q2IsWUFBQTtFQUNBLGdDQUFBO0FBVFI7QUFZSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNDN0NJO0FEbUNaO0FBYUk7RUFDSSxvQkFBQTtBQVhSO0FBY0k7RUFDSSxnQ0FBQTtFQUNBLDBCQUFBO0FBWlIiLCJmaWxlIjoibHVnZ2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy9zcmMvYXNzZXRzL21haW4uc2Nzcyc7XHJcblxyXG4ubHVnZ2FnZV9fc2VjdGlvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDRlbTtcclxuXHJcbiAgICBoMyxoNXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sdWdnYWdle1xyXG4gIFxyXG5cclxuICAgICZfX3dyYXBwZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY2FyZHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIG1hcmdpbjogMWVtO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX2NhcmQ6aG92ZXIgPiAmX19oZWFkZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZENvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2hlYWRlcntcclxuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRDb2xvckxpZ2h0ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2JvZHl7XHJcbiAgICAgICAgcGFkZGluZzogMS41ZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgY29sb3I6ICRmb250Q29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYm9keSA+ICp7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNsaWNrZWR7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMXB4IHJnYmEoNDIsMTQ0LCAyMTAsIDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xyXG4gICAgfVxyXG59IiwiJGZvbnQ6ICdIZWVibycsIHNhbnMtc2VyaWY7XHJcbiRtYWluQ29sb3I6IHJnYmEoMjI2LDIyNiwyMjYsIDEpO1xyXG4kc2Vjb25kQ29sb3I6IHJnYmEoNDIsMTQ0LCAyMTAsIDEpO1xyXG4kc2Vjb25kQ29sb3JMaWdodGVyOiByZ2JhKDQyLCAxNDQsIDIxMCwgMC41KTtcclxuJGZvbnRDb2xvcjogcmdiKDY2LCA2NiwgNjYpO1xyXG5cclxuXHJcbiR0YWJsZXQ6IDc2OHB4O1xyXG4kbGFwdG9wOiAxMjAwcHg7XHJcbiRtb25pdG9yOiAxNDAwcHg7Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HLuT":
/*!*************************************************************!*\
  !*** ./src/app/shared/show-flight/show-flight.component.ts ***!
  \*************************************************************/
/*! exports provided: ShowFlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowFlightComponent", function() { return ShowFlightComponent; });
/* harmony import */ var animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es */ "EgnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _show_flight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-flight.service */ "/cYP");
/* harmony import */ var src_app_page1_scanner_scanner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/page1/scanner/scanner.service */ "w6iL");
/* harmony import */ var src_app_fly_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/fly-info.service */ "O4/u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ShowFlightComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.flightService.getDataArr()["Dates"]["OutboundDates"][0]["PartialDate"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1.timeArr[0].hour, ":", ctx_r1.timeArr[0].minutes < 10 ? "0" + ctx_r1.timeArr[0].minutes.toFixed() : ctx_r1.timeArr[0].minutes.toFixed(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.flightService.getDataArr()["Places"][1]["Name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.getDuration(), "h");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1.getEndHour(), ":", ctx_r1.timeArr[0].minutes < 10 ? "0" + (ctx_r1.timeArr[0].minutes + 2).toFixed() : (ctx_r1.timeArr[0].minutes + 2).toFixed(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.flightService.getDataArr()["Places"][0]["Name"]);
} }
function ShowFlightComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowFlightComponent_div_0_div_1_Template, 19, 8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.flightService.getDataArr() !== undefined);
} }
class ShowFlightComponent {
    constructor(flightService, scannerService, flyInfo) {
        this.flightService = flightService;
        this.scannerService = scannerService;
        this.flyInfo = flyInfo;
        this.dataArr = this.flightService.getDataArr();
        this.timeArr = this.flightService.getTime();
        this.noResult = false;
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        Object(animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__["default"])({
            targets: '.fas .fa-plane',
            easing: 'linear',
            duration: 1500,
            delay: 9000,
            translateX: [-100, 0],
        });
    }
    getEndHour() {
        if ((this.timeArr[0].hour + this.duration) > 24) {
            this.endHour = 0 + (this.timeArr[0].hour + this.duration - 24);
        }
        else {
            this.endHour = this.timeArr[0].hour + this.duration;
        }
        return this.endHour;
    }
    getDuration() {
        this.destination = this.flightService.getDataArr()["Places"][0]["Name"];
        if (this.destination === 'Berlin Brandenburg') {
            this.duration = 1;
        }
        if (this.destination === 'Barcelona') {
            this.duration = 3;
        }
        if (this.destination === 'Nowy Jork John F Kennedy') {
            this.duration = 10;
        }
        return this.duration;
    }
}
ShowFlightComponent.ɵfac = function ShowFlightComponent_Factory(t) { return new (t || ShowFlightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_show_flight_service__WEBPACK_IMPORTED_MODULE_2__["ShowFlightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_page1_scanner_scanner_service__WEBPACK_IMPORTED_MODULE_3__["ScannerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_fly_info_service__WEBPACK_IMPORTED_MODULE_4__["FlyInfoService"])); };
ShowFlightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowFlightComponent, selectors: [["app-show-flight"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "info", 4, "ngIf"], [1, "info"], [1, "date"], [1, "fly-info"], [1, "start"], [1, "start__hour"], [1, "start__city"], [1, "time"], [1, "fas", "fa-plane"], [1, "line"], [1, "duration"], [1, "end"], [1, "end__hour"], [1, "end__city"]], template: function ShowFlightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ShowFlightComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.flightService.getNoResult() === "Your Search");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".info[_ngcontent-%COMP%] {\n  padding: 1em;\n  color: #424242;\n}\n\n.fly-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1em;\n}\n\n.fly-info[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.fly-info[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 1px;\n  background-color: #e2e2e2;\n  margin: 0 1em;\n}\n\n@media (min-width: 768px) {\n  .fly-info[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n    width: 25vw;\n  }\n}\n\n.fly-info[_ngcontent-%COMP%]   .start__hour[_ngcontent-%COMP%], .fly-info[_ngcontent-%COMP%]   .end__hour[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n\n.fly-info[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%], .fly-info[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaG93LWZsaWdodC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXG1haW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBREo7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUk7RUFDSSxrQkFBQTtBQUZSOztBQUlJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkNsQkk7RURtQkosYUFBQTtBQUZSOztBQUdRO0VBTEo7SUFNUSxXQUFBO0VBQVY7QUFDRjs7QUFJSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGUjs7QUFLSTtFQUNJLGtCQUFBO0FBSFIiLCJmaWxlIjoic2hvdy1mbGlnaHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcvc3JjL2Fzc2V0cy9tYWluLnNjc3MnO1xyXG5cclxuLmluZm97XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBjb2xvcjogJGZvbnRDb2xvcjtcclxuXHJcbn1cclxuXHJcbi5mbHktaW5mb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcblxyXG4gICAgLnRpbWV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmxpbmV7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3I7XHJcbiAgICAgICAgbWFyZ2luOiAwIDFlbTtcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCl7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXJ0X19ob3VyLCAuZW5kX19ob3Vye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXJ0LCAuZW5ke1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIiRmb250OiAnSGVlYm8nLCBzYW5zLXNlcmlmO1xyXG4kbWFpbkNvbG9yOiByZ2JhKDIyNiwyMjYsMjI2LCAxKTtcclxuJHNlY29uZENvbG9yOiByZ2JhKDQyLDE0NCwgMjEwLCAxKTtcclxuJHNlY29uZENvbG9yTGlnaHRlcjogcmdiYSg0MiwgMTQ0LCAyMTAsIDAuNSk7XHJcbiRmb250Q29sb3I6IHJnYig2NiwgNjYsIDY2KTtcclxuXHJcblxyXG4kdGFibGV0OiA3NjhweDtcclxuJGxhcHRvcDogMTIwMHB4O1xyXG4kbW9uaXRvcjogMTQwMHB4OyJdfQ== */"] });


/***/ }),

/***/ "I95/":
/*!*******************************!*\
  !*** ./src/app/userChoice.ts ***!
  \*******************************/
/*! exports provided: userChoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userChoice", function() { return userChoice; });
class userChoice {
    constructor(from, to, date, people) {
        this.from = from;
        this.to = to;
        this.date = date;
        this.people = people;
    }
}


/***/ }),

/***/ "KJgg":
/*!****************************!*\
  !*** ./src/app/weather.ts ***!
  \****************************/
/*! exports provided: Weather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weather", function() { return Weather; });
class Weather {
}


/***/ }),

/***/ "MqtW":
/*!************************************************************!*\
  !*** ./src/app/page1/services/customvalidation.service.ts ***!
  \************************************************************/
/*! exports provided: CustomvalidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomvalidationService", function() { return CustomvalidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CustomvalidationService {
    constructor() {
        this.logged = false;
    }
    patternValidator() {
        return (control) => {
            if (!control.value) {
                return null;
            }
            const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
            const valid = regex.test(control.value);
            return valid ? null : { invalidPassword: true };
        };
    }
    MatchPassword(password, confirmPassword) {
        return (formGroup) => {
            const passwordControl = formGroup.controls[password];
            const confirmPasswordControl = formGroup.controls[confirmPassword];
            if (!passwordControl || !confirmPasswordControl) {
                return null;
            }
            if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
                return null;
            }
            if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({ passwordMismatch: true });
            }
            else {
                confirmPasswordControl.setErrors(null);
            }
        };
    }
    userNameValidator(userControl) {
        return new Promise(resolve => {
            setTimeout(() => {
                if (this.validateUserName(userControl.value)) {
                    resolve({ userNameNotAvailable: true });
                }
                else {
                    resolve(null);
                }
            }, 1000);
        });
    }
    validateUserName(userName) {
        const UserList = ['ankit', 'admin', 'user', 'superuser'];
        return (UserList.indexOf(userName) > -1);
    }
    loggedIn() {
        return !this.logged;
    }
}
CustomvalidationService.ɵfac = function CustomvalidationService_Factory(t) { return new (t || CustomvalidationService)(); };
CustomvalidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomvalidationService, factory: CustomvalidationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Nd2R":
/*!**********************************************!*\
  !*** ./src/app/page1/hero/hero.component.ts ***!
  \**********************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es */ "EgnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/weather-widget/weather-widget.component */ "RzUm");




const _c0 = ["plane"];
class HeroComponent {
    constructor(display) {
        this.display = display;
    }
    ngOnInit() {
        Object(animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__["default"])({
            targets: ['.title', 'svg'],
            opacity: [0, 1],
            delay: animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__["default"].stagger(800),
            duration: 2000,
            easing: 'easeInOutQuad'
        });
    }
    onMouseMove(e) {
        const plane = this.planeRef.nativeElement;
        const speed = 2;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        plane.style.transform = `translateX(${x}px) translateY(${y}px)`;
    }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) { return new (t || HeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_2__["WeatherWidgetComponent"])); };
HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeroComponent, selectors: [["app-hero"]], viewQuery: function HeroComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.planeRef = _t.first);
    } }, decls: 17, vars: 0, consts: [[1, "hero", 3, "mousemove"], [1, "hero__weather"], [1, "hero__title"], [1, "title"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 3239.21 1730.08"], ["plane", ""], ["id", "Warstwa_2", "data-name", "Warstwa 2"], ["id", "Layer_1", "data-name", "Layer 1"], ["d", "M2623.2,823c-2.34,4.14-4.64,8.06-7,12s-4.68,7.86-7,11.76q-7.11,11.7-14.39,23.23-14.58,23.09-29.81,45.67-30.42,45.21-63.2,88.73A1904.24,1904.24,0,0,1,2361.23,1171c-50.15,52.7-103.78,102.37-161.67,147a1082.43,1082.43,0,0,1-90.14,62.67,881.18,881.18,0,0,1-97,52.28q-12.56,5.76-25.32,11.07l-6.4,2.62-3.2,1.29-1.61.65-.4.16c-.28.11,1-.43.27-.12l-.77.34c-4.24,1.86-8.44,3.66-12.68,5.44-16.91,7.11-33.94,13.7-51.07,19.95q-51.4,18.74-104,33.49c-35,9.87-70.44,18.5-106.19,25.66s-71.86,12.84-108.3,16.5c-18.22,1.83-36.52,3.15-54.88,3.83l-13.64.43-13.59.34q-13.6.3-27.26.38c-18.21.08-36.48-.18-54.83-1.07s-36.77-2.43-55.21-5a387.7,387.7,0,0,1-55.09-11.6,264.8,264.8,0,0,1-53.07-21.75A215.79,215.79,0,0,1,1218.5,1481a228.74,228.74,0,0,1-35.85-45.33l-.14-.23c-.23-.39-.45-.8-.64-1.2l-.42-.93-.35-.78-.66-1.52c-.43-1-.84-2-1.24-3-.8-2-1.55-3.94-2.28-5.92-1.45-3.94-2.79-7.89-4-11.88a233.76,233.76,0,0,1-6.12-24.32,184.4,184.4,0,0,1-3.16-50.85,137.12,137.12,0,0,1,4.69-25.87,118,118,0,0,1,10.15-24.78,113.91,113.91,0,0,1,15.68-21.85,124.34,124.34,0,0,1,20-17.52q5.37-3.8,11-7c1.88-1.08,3.77-2.11,5.68-3.11,1-.5,1.92-1,2.88-1.46l1.44-.71,1-.47.66-.3a169.56,169.56,0,0,1,24.08-8.79,140.76,140.76,0,0,1,25.65-4.7,123.77,123.77,0,0,1,26.44.52,121.54,121.54,0,0,1,25.76,6.25,130.56,130.56,0,0,1,23.61,11.42,163.77,163.77,0,0,1,38.54,33.42,203,203,0,0,1,15.1,20.06q3.45,5.22,6.6,10.65l1.55,2.72,1.47,2.64q1.58,2.86,3,5.81a147.9,147.9,0,0,1,13.71,49.41,199.09,199.09,0,0,1-1.41,50,260.81,260.81,0,0,1-12,47.75c-10.82,30.83-26.51,59.54-45.45,85.71a375,375,0,0,1-66.32,70.2,355.27,355.27,0,0,1-82.35,50.47,329.34,329.34,0,0,1-93.26,25.35,335.68,335.68,0,0,1-96.42-2.75q-11.89-2-23.62-4.87-5.85-1.41-11.66-3c-1.93-.53-3.86-1.07-5.79-1.64l-2.88-.85-1.44-.44-.72-.21-.36-.12.24.07-1.65-.43-1.53-.42-3-.87q-3-.9-5.87-1.87-5.82-2-11.5-4.18A243.27,243.27,0,0,1,953,1659.27a199.86,199.86,0,0,1-40.84-27.45,142.44,142.44,0,0,1-31.48-38.92,122.74,122.74,0,0,1-9.69-23.45,126.11,126.11,0,0,1-4.69-24.87c-.36-4.19-.53-8.39-.5-12.57l0-1.57v-.39a8.33,8.33,0,0,1,0-.9l.06-.74c.08-1.06.18-2.11.28-3.14q.32-3.12.77-6.22a128.08,128.08,0,0,1,6-24.49,113.81,113.81,0,0,1,11.12-22.88,108,108,0,0,1,16.15-19.77,111.36,111.36,0,0,1,43.42-25.75,114.56,114.56,0,0,1,50.1-4.48,100.87,100.87,0,0,1,24.66,6.55,87.57,87.57,0,0,1,22.23,13.13l-.72-.52a86.93,86.93,0,0,1,18.37,16.32,105.15,105.15,0,0,1,13.36,20.08,130.19,130.19,0,0,1,13.31,45.34,150,150,0,0,1-2.36,46.76,160.22,160.22,0,0,1-16.1,43.75,175.16,175.16,0,0,1-27.43,37.41,206.24,206.24,0,0,1-35.44,29.43,255.63,255.63,0,0,1-40.35,21.57,323.83,323.83,0,0,1-43,14.78q-11,3-22.05,5.24-5.53,1.15-11.11,2.15l-.34.06-.18,0-.49.07-.73.09-1.42.17-2.82.31-5.62.57c-15,1.41-29.93,2.24-44.92,2.61s-30,.22-45-.52-30-2.08-44.9-4.24a330.21,330.21,0,0,1-44.32-9.37,204.83,204.83,0,0,1-42.35-17.13,138.62,138.62,0,0,1-19.27-12.81,109.5,109.5,0,0,1-16.66-16.34,95.72,95.72,0,0,1-12.55-19.83,97.46,97.46,0,0,1-7.35-22.23v0c0-.1,0-.21-.06-.31a88.14,88.14,0,0,1,2.18-33.86,73.88,73.88,0,0,1,6.35-16,67.78,67.78,0,0,1,10.09-14,69,69,0,0,1,13.28-11,79.26,79.26,0,0,1,15.31-7.5,98.87,98.87,0,0,1,16.28-4.37,72,72,0,0,1,17-1.1,62.56,62.56,0,0,1,16.89,3.28,61,61,0,0,1,15.34,7.81,70.74,70.74,0,0,1,22,25.69A88.52,88.52,0,0,1,742.3,1606a102.31,102.31,0,0,1-2.4,33.22,91.32,91.32,0,0,1-13.63,30.4,103.7,103.7,0,0,1-23.1,23.78,142.57,142.57,0,0,1-28.5,16.43,203.61,203.61,0,0,1-30.94,10.53c-21.09,5.41-42.7,8-64.29,9.16q-8.1.4-16.2.52c-5.41.08-10.78.09-16.16.09q-16.16,0-32.29-.29c-43-.76-86-2.74-129-5.23S300,1719,257.1,1715.72C171.34,1709.12,85.67,1701.61,0,1694c85.73,6.88,171.46,13.67,257.25,19.54,42.9,2.93,85.81,5.61,128.75,7.75s85.89,3.74,128.85,4.13q16.11.15,32.21,0c5.36,0,10.75-.09,16.08-.23s10.69-.36,16-.69c21.32-1.32,42.58-4.17,63.12-9.67a198.34,198.34,0,0,0,29.94-10.55,135.6,135.6,0,0,0,27.09-16,97.15,97.15,0,0,0,21.43-22.5,84.49,84.49,0,0,0,12.31-28.26A94.83,94.83,0,0,0,735,1606.7a81,81,0,0,0-8.79-29.34,62.91,62.91,0,0,0-19.77-22.63A53.46,53.46,0,0,0,693,1548.1a54.71,54.71,0,0,0-14.7-2.68,64.62,64.62,0,0,0-15.05,1.13,92,92,0,0,0-14.78,4.15,64.44,64.44,0,0,0-25,16.45,61.19,61.19,0,0,0-14,26.19,78.53,78.53,0,0,0-1.58,30.13l-.06-.37a88.3,88.3,0,0,0,6.79,19.91,85.82,85.82,0,0,0,11.4,17.62c9,10.82,20.55,19.49,33.14,26.3a194.85,194.85,0,0,0,40.25,15.82,317.58,317.58,0,0,0,42.88,8.62c14.51,2,29.15,3.13,43.83,3.72s29.39.58,44.1.09,29.4-1.47,44-3l5.46-.6,2.71-.33,1.34-.17.66-.09c.13,0-.5.08-.15,0l.17,0,.33-.06c3.6-.69,7.18-1.41,10.75-2.19,7.13-1.56,14.22-3.3,21.24-5.27a308.77,308.77,0,0,0,41.06-14.56,242.05,242.05,0,0,0,38-20.76,191.21,191.21,0,0,0,32.71-27.68,160.63,160.63,0,0,0,24.78-34.49,145,145,0,0,0,14.2-39.72,134.61,134.61,0,0,0,1.71-41.89,114.29,114.29,0,0,0-12-39.6,88.77,88.77,0,0,0-11.42-16.82,70.13,70.13,0,0,0-14.95-13.06,7.33,7.33,0,0,1-.64-.45l-.07-.06c-10.81-8.67-24.47-13.86-38.59-15.63A96.93,96.93,0,0,0,949.2,1443,93.31,93.31,0,0,0,913,1464.93a91.74,91.74,0,0,0-22.34,35.8,109.07,109.07,0,0,0-4.92,21c-.25,1.79-.45,3.59-.62,5.4-.08.91-.15,1.81-.21,2.68l0,.73c0-.11,0,.79,0-.17v1.7c0,3.62.19,7.23.53,10.81a104.18,104.18,0,0,0,12.53,40.69,122.46,122.46,0,0,0,27.48,33.21,179.43,179.43,0,0,0,37,24.28,222,222,0,0,0,20.47,9c3.49,1.33,7,2.58,10.54,3.72q2.64.85,5.3,1.62l2.63.75,1.3.34,1.18.3,6.07,1.72q2.75.78,5.49,1.5,5.51,1.46,11,2.73,11.07,2.55,22.28,4.37a313.74,313.74,0,0,0,90.18,1.71,306.59,306.59,0,0,0,86.6-24.45,331.82,331.82,0,0,0,76.39-47.86,350.24,350.24,0,0,0,61.31-66.18c17.41-24.54,31.67-51.37,41.25-79.57a235.36,235.36,0,0,0,10.39-43,172.61,172.61,0,0,0,.84-43.34,120.79,120.79,0,0,0-11.53-40.28q-1.15-2.31-2.42-4.56l-1.41-2.46-1.36-2.35q-2.77-4.68-5.83-9.2a174.5,174.5,0,0,0-13.21-17.19,135.62,135.62,0,0,0-32.14-27.43,96.39,96.39,0,0,0-38.27-13.34,102.17,102.17,0,0,0-40.59,3.76,139.82,139.82,0,0,0-19.8,7.45l-.66.31s-.53.24,0,0l-.3.14-1.17.59c-.79.4-1.57.81-2.34,1.22-1.54.82-3.06,1.68-4.56,2.56q-4.48,2.64-8.65,5.65a93.93,93.93,0,0,0-15,13.45,83.59,83.59,0,0,0-11.39,16.22c-6.29,11.65-9.76,24.9-10.79,38.72a153.69,153.69,0,0,0,3.12,42.28,203.1,203.1,0,0,0,5.52,21c1.11,3.46,2.3,6.89,3.58,10.25.64,1.69,1.31,3.36,2,5l1,2.42.52,1.16.44,1-.78-1.43a197,197,0,0,0,31.14,38.88,184.06,184.06,0,0,0,40,29.11,232.46,232.46,0,0,0,46.72,18.73,353.88,353.88,0,0,0,50.47,10.25c17.2,2.3,34.67,3.64,52.25,4.38s35.28.88,53,.67q13.3-.15,26.68-.54l13.37-.43,13.32-.51c17.57-.78,35.16-2.16,52.71-4,35.12-3.78,70.11-9.53,104.84-16.72s69.21-15.86,103.34-25.73,67.93-21,101.17-33.34c16.61-6.19,33.09-12.71,49.29-19.64,4-1.74,8.09-3.5,12.07-5.29l12.84-5.31q12.12-5.09,24.07-10.62a843.3,843.3,0,0,0,92.67-50.39,1044.43,1044.43,0,0,0,86.76-60.79c55.89-43.43,108-92,156.79-143.64a1864.56,1864.56,0,0,0,137-163.61q32-42.79,61.68-87.23,14.83-22.2,29-44.79,7.07-11.29,13.94-22.68,3.42-5.69,6.78-11.39c2.22-3.8,4.45-7.64,6.52-11.34h0a20.15,20.15,0,1,1,35.15,19.7Z", 1, "cls-1", "tail"], ["d", "M2877.39,615.17l264.06,493.44,21.41-24.12L2974.26,482S3164,242.23,3202.05,177.11c12.45-25.9,64-130.4,19.11-168.56-.18-.15-.36-.27-.53-.41s-.35-.27-.54-.39C3170.87-24.71,3085,54.09,3063.62,73.29c-51.84,54.81-228.89,304.07-228.89,304.07L2203.53,365l-17.15,27.31L2734,507.65S2652.36,636.31,2612.61,704s-124.67,229.34-124.67,229.34L2291,948.85l2.75,12.48,176.61,47.19,89.21,133.4,12.76-.85L2537.7,970.61S2669.14,843.79,2723,786.7,2877.39,615.17,2877.39,615.17Z", 1, "cls-1"]], template: function HeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousemove", function HeroComponent_Template_div_mousemove_0_listener($event) { return ctx.onMouseMove($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-weather-widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "I BELIVE I CAN FLY.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, ".cls-1{fill:rgba(255,255,255,1);}");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "plane");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [src_app_shared_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_2__["WeatherWidgetComponent"]], styles: [".hero[_ngcontent-%COMP%] {\n  height: 70vh;\n  background-image: url('hero.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    height: 80vh;\n    flex-direction: row;\n  }\n}\n@media (min-width: 768px) {\n  .hero__weather[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 10%;\n  }\n}\n.hero__title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  color: #ffff77;\n}\n@media (min-width: 768px) {\n  .hero__title[_ngcontent-%COMP%] {\n    position: absolute;\n    font-size: 2rem;\n  }\n}\n.hero[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -20%;\n  width: 5em;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksWUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRko7QUFHRTtFQVhGO0lBWUksWUFBQTtJQUNBLG1CQUFBO0VBQUY7QUFDRjtBQUdJO0VBREQ7SUFFSyxrQkFBQTtJQUNBLFNBQUE7RUFBTjtBQUNGO0FBR0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQURSO0FBRVE7RUFUSjtJQVVRLGtCQUFBO0lBQ0EsZUFBQTtFQUNWO0FBQ0Y7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ1IiLCJmaWxlIjoiaGVyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy9zcmMvYXNzZXRzL21haW4uc2Nzcyc7XHJcblxyXG5cclxuLmhlcm97XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9oZXJvLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KXtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgIH1cclxuXHJcbiAgICZfX3dlYXRoZXJ7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCl7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuICAgIH1cclxuICAgfVxyXG5cclxuICAgICZfX3RpdGxle1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMTE5LCAxKTtcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCl7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIHN2Z3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC0yMCU7XHJcbiAgICAgICAgd2lkdGg6IDVlbTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "O4/u":
/*!*************************************!*\
  !*** ./src/app/fly-info.service.ts ***!
  \*************************************/
/*! exports provided: FlyInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyInfoService", function() { return FlyInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_weather_widget_weather_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/weather-widget/weather-service.service */ "qcu2");


class FlyInfoService {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.info = [];
    }
    addInfo(information) {
        this.info.push(information);
    }
    getInfo() {
        return this.info;
    }
    clearInfo() {
        this.info = [];
        return this.info;
    }
}
FlyInfoService.ɵfac = function FlyInfoService_Factory(t) { return new (t || FlyInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_weather_widget_weather_service_service__WEBPACK_IMPORTED_MODULE_1__["WeatherServiceService"])); };
FlyInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FlyInfoService, factory: FlyInfoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OBdH":
/*!****************************************************!*\
  !*** ./src/app/page1/scanner/scanner.component.ts ***!
  \****************************************************/
/*! exports provided: ScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerComponent", function() { return ScannerComponent; });
/* harmony import */ var _userChoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../userChoice */ "I95/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_fly_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/fly-info.service */ "O4/u");
/* harmony import */ var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/customvalidation.service */ "MqtW");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/local-storage.service */ "gvvY");
/* harmony import */ var src_app_shared_weather_widget_weather_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/weather-widget/weather-service.service */ "qcu2");
/* harmony import */ var src_app_shared_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/weather-widget/weather-widget.component */ "RzUm");
/* harmony import */ var src_app_shared_show_flight_show_flight_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/show-flight/show-flight.service */ "/cYP");
/* harmony import */ var src_app_shared_show_flight_show_flight_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/show-flight/show-flight.component */ "HLuT");
/* harmony import */ var _scanner_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scanner.service */ "w6iL");
/* harmony import */ var src_app_page2_page2_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/page2/page2.service */ "WQOD");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/button/button.component */ "sELr");

















function ScannerComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fromCity_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fromCity_r12);
} }
function ScannerComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " City is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ScannerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ScannerComponent_div_9_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors.required);
} }
function ScannerComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toCity_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", toCity_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](toCity_r14);
} }
function ScannerComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Choose your destination ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ScannerComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ScannerComponent_div_14_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.errors.required);
} }
function ScannerComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Choose departure date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ScannerComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ScannerComponent_div_19_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r7.errors.required);
} }
function ScannerComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Choose number of passengers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ScannerComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ScannerComponent_div_23_div_1_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.errors.required);
} }
function ScannerComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No result");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ScannerComponent {
    constructor(info, custom, auth, router, localStorage, weatherService, weatherWidget, showFlight, showFlightComp, scanerService, page2Service) {
        this.info = info;
        this.custom = custom;
        this.auth = auth;
        this.router = router;
        this.localStorage = localStorage;
        this.weatherService = weatherService;
        this.weatherWidget = weatherWidget;
        this.showFlight = showFlight;
        this.showFlightComp = showFlightComp;
        this.scanerService = scanerService;
        this.page2Service = page2Service;
        this.flyInfo = this.info.getInfo();
        this.fromCities = ['Katowice', 'Cracow', 'Warsaw'];
        this.toCities = ['Berlin', 'Barcelona', 'New York'];
        this.minDate = new Date().toISOString().slice(0, 10);
        this.model = new _userChoice__WEBPACK_IMPORTED_MODULE_0__["userChoice"]('', '', null, null);
        this.submitted = false;
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.auth.getInfoAccess() === true) {
            this.submitted = true;
            this.info.clearInfo();
            this.page2Service.clearInfo();
            this.info.addInfo(this.model);
            this.scanerService.addUserChoice(this.model);
            this.showFlight.showFlight();
            this.showFlight.setTime();
            this.weatherService.updateData(this.model.from);
            this.weatherWidget.fetchWeather();
            this.showFlightComp.getEndHour();
            document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
}
ScannerComponent.ɵfac = function ScannerComponent_Factory(t) { return new (t || ScannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_fly_info_service__WEBPACK_IMPORTED_MODULE_2__["FlyInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customvalidation_service__WEBPACK_IMPORTED_MODULE_3__["CustomvalidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_weather_widget_weather_service_service__WEBPACK_IMPORTED_MODULE_7__["WeatherServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_8__["WeatherWidgetComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_show_flight_show_flight_service__WEBPACK_IMPORTED_MODULE_9__["ShowFlightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_show_flight_show_flight_component__WEBPACK_IMPORTED_MODULE_10__["ShowFlightComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_scanner_service__WEBPACK_IMPORTED_MODULE_11__["ScannerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_page2_page2_service__WEBPACK_IMPORTED_MODULE_12__["Page2Service"])); };
ScannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScannerComponent, selectors: [["app-scanner"]], decls: 38, vars: 16, consts: [[1, "scanner"], [3, "ngSubmit"], ["userForm", "ngForm"], [1, "form-group"], ["name", "from", "id", "from", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["from", "ngModel"], [4, "ngFor", "ngForOf"], ["class", "alert", 4, "ngIf"], ["name", "to", "id", "to", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["to", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group-wrapper"], ["type", "date", "id", "date", "name", "date", "required", "", 1, "form-control", 3, "ngModel", "min", "ngModelChange"], ["date", "ngModel"], ["type", "number", "min", "1", "max", "20", "id", "people", "name", "people", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["people", "ngModel"], [3, "disabledRules", "click"], [1, "search-result", 3, "ngClass"], ["id", "result", 1, "search-card"], [1, "show-fly"], [1, "price-info"], [1, "price"], ["routerLink", "/page2"], ["id", "no-results", 4, "ngIf"], [1, "alert"], [4, "ngIf"], [3, "value"], ["id", "no-results"]], template: function ScannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Choose your fly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ScannerComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ScannerComponent_Template_select_ngModelChange_6_listener($event) { return ctx.model.from = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ScannerComponent_option_8_Template, 2, 1, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ScannerComponent_div_9_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "select", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ScannerComponent_Template_select_ngModelChange_11_listener($event) { return ctx.model.to = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ScannerComponent_option_13_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ScannerComponent_div_14_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ScannerComponent_Template_input_ngModelChange_17_listener($event) { return ctx.model.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ScannerComponent_div_19_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ScannerComponent_Template_input_ngModelChange_21_listener($event) { return ctx.model.people = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ScannerComponent_div_23_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "app-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScannerComponent_Template_app_button_click_24_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-show-flight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "app-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Choose");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ScannerComponent_div_37_Template, 3, 0, "div", 23);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.from);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fromCities);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.invalid && _r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.to);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.toCities);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.date)("min", ctx.minDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r7.invalid && _r7.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model.people);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r9.invalid && _r9.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabledRules", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !ctx.submitted || ctx.showFlight.getNoResult() == "NO RESULTS" ? "hidden" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showFlight.getNoResult());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.showFlight.getNoResult() == "NO RESULTS" ? 0 : ctx.showFlight.getPrice(), " PLN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.showFlight.getNoResult() == "NO RESULTS");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NumberValueAccessor"], _shared_button_button_component__WEBPACK_IMPORTED_MODULE_15__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], src_app_shared_show_flight_show_flight_component__WEBPACK_IMPORTED_MODULE_10__["ShowFlightComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_z"]], styles: [".ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {\n  border-left: 5px solid #42A948;\n}\n\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid #a94442;\n}\n\n.scanner[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 auto;\n  background-color: #e2e2e2;\n  padding: 1em;\n  scroll-behavior: smooth;\n}\n\n@media (min-width: 768px) {\n  .scanner[_ngcontent-%COMP%] {\n    transform: translateY(-30%);\n    width: 90vw;\n    padding: 1em 0 1em 0;\n  }\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  text-align: center;\n  width: 80%;\n  margin: 0 auto;\n  padding: 1em;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  text-transform: uppercase;\n  color: #424242;\n}\n\n.alert[_ngcontent-%COMP%] {\n  font-size: 0.5rem;\n  color: red;\n  text-align: center;\n}\n\n@media (min-width: 768px) {\n  .alert[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    position: fixed;\n    margin-left: 2em;\n  }\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1em;\n}\n\n@media (min-width: 768px) {\n  form[_ngcontent-%COMP%] {\n    flex-flow: row;\n    padding: 2em 0;\n  }\n}\n\nform[_ngcontent-%COMP%]   .form-group-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 3em;\n  margin: 1em;\n  border: none;\n  border-radius: 5px;\n  padding: 0.3em;\n}\n\n@media (min-width: 768px) {\n  form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: calc(22vw - 4em);\n  }\n}\n\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 130px;\n}\n\n@media (min-width: 768px) {\n  form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: calc(17vw - 4em);\n  }\n}\n\nform[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.visible[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (min-width: 768px) {\n  .search-result[_ngcontent-%COMP%] {\n    margin-bottom: 4em;\n  }\n}\n\n.search-result[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.search-result[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  border: 1px solid #e2e2e2;\n  border-left: 7px solid #2a90d2;\n}\n\n@media (min-width: 768px) {\n  .search-result[_ngcontent-%COMP%]   .search-card[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  }\n}\n\n.search-result[_ngcontent-%COMP%]   .show-fly[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.search-result[_ngcontent-%COMP%]   .price-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 1em;\n  border-top: 1px solid #e2e2e2;\n}\n\n@media (min-width: 768px) {\n  .search-result[_ngcontent-%COMP%]   .price-info[_ngcontent-%COMP%] {\n    height: 90%;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0 auto;\n    border-top: none;\n    border-left: 1px solid rgba(0, 0, 0, 0.2);\n  }\n}\n\n.search-result[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n#no-results[_ngcontent-%COMP%] {\n  margin: 4em;\n  text-align: center;\n  font-weight: 600;\n  font-size: 2em;\n  color: #424242;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzY2FubmVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksOEJBQUE7QUFESjs7QUFJRTtFQUNFLDhCQUFBO0FBREo7O0FBTUE7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDQyx5QkNkVTtFRGVWLFlBQUE7RUFDQSx1QkFBQTtBQUhGOztBQUlFO0VBTkY7SUFPRSwyQkFBQTtJQUNBLFdBQUE7SUFDQSxvQkFBQTtFQURBO0FBQ0Y7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDRCx5QkFBQTtFQUNBLGNDOUJXO0FENEJaOztBQUtBO0VBRUUsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFRRTtFQURGO0lBRUksZUFBQTtJQUNBLGdCQUFBO0VBSkY7QUFDRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTEY7O0FBT0U7RUFQRjtJQVFJLGNBQUE7SUFDQSxjQUFBO0VBSkY7QUFDRjs7QUFNQTtFQUNFLGFBQUE7QUFKRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFORjs7QUFRRTtFQVJGO0lBVUUsdUJBQUE7RUFOQTtBQUNGOztBQVVBO0VBQ0UsWUFBQTtBQVJGOztBQVNFO0VBRkY7SUFJSSx1QkFBQTtFQVBGO0FBQ0Y7O0FBV0E7RUFDRSxXQUFBO0FBVEY7O0FBY0E7RUFDQyxhQUFBO0FBWEQ7O0FBY0E7RUFDRSxjQUFBO0FBWEY7O0FBZ0JFO0VBRkY7SUFHRyxrQkFBQTtFQVpEO0FBQ0Y7O0FBZUU7RUFDQSxZQUFBO0FBYkY7O0FBZ0JFO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUFkSjs7QUFnQkk7RUFSRjtJQVNJLDBCQUFBO0lBQUEsdUJBQUE7SUFBQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQWJKO0FBQ0Y7O0FBaUJFO0VBQ0UsY0FBQTtBQWZKOztBQWtCRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FBaEJKOztBQWtCSTtFQVBGO0lBUUksV0FBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLHlDQUFBO0VBZko7QUFDRjs7QUFrQkU7RUFDRSxnQkFBQTtBQWhCSjs7QUFxQkE7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQ3RLVTtBRG1KWiIsImZpbGUiOiJzY2FubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnL3NyYy9hc3NldHMvbWFpbi5zY3NzJztcclxuXHJcbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4OyBcclxuICB9XHJcbiAgXHJcbiAgLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhOTQ0NDI7IFxyXG4gIH1cclxuXHJcblxyXG5cclxuLnNjYW5uZXJ7XHJcbiBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCl7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMCUpO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIHBhZGRpbmc6IDFlbSAwIDFlbSAwO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuaDF7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XHJcbiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gY29sb3I6ICRmb250Q29sb3I7XHJcbn1cclxuXHJcbi5hbGVydHtcclxuXHJcbiAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uYWxlcnQgPiAqe1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZm9ybXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KXtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgcGFkZGluZzogMmVtIDA7XHJcbiAgICB9XHJcblxyXG4uZm9ybS1ncm91cC13cmFwcGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcblxyXG5zZWxlY3QsIGlucHV0e1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDNlbTtcclxuICBtYXJnaW46IDFlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDAuM2VtO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCl7XHJcblxyXG4gIHdpZHRoOiBjYWxjKDIydncgLSA0ZW0pO1xyXG4gICBcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXR7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KXtcclxuICAgXHJcbiAgICB3aWR0aDogY2FsYygxN3Z3IC0gNGVtKTtcclxuICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5hcHAtYnV0dG9ue1xyXG4gIG1hcmdpbjogMWVtO1xyXG59XHJcblxyXG59XHJcblxyXG4uaGlkZGVue1xyXG4gZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGV7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiB9XHJcblxyXG4uc2VhcmNoLXJlc3VsdHtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpe1xyXG4gICBtYXJnaW4tYm90dG9tOiA0ZW07XHJcbiAgIFxyXG4gICAgfVxyXG5cclxuICBoMXtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWNhcmR7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJG1haW5Db2xvcjtcclxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgJHNlY29uZENvbG9yO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KXtcclxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICBcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLnNob3ctZmx5e1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmljZS1pbmZve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbWFpbkNvbG9yO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KXtcclxuICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5wcmljZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG4jbm8tcmVzdWx0c3tcclxuXHJcbiAgbWFyZ2luOiA0ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgY29sb3I6JGZvbnRDb2xvcjtcclxuXHJcblxyXG59XHJcblxyXG4iLCIkZm9udDogJ0hlZWJvJywgc2Fucy1zZXJpZjtcclxuJG1haW5Db2xvcjogcmdiYSgyMjYsMjI2LDIyNiwgMSk7XHJcbiRzZWNvbmRDb2xvcjogcmdiYSg0MiwxNDQsIDIxMCwgMSk7XHJcbiRzZWNvbmRDb2xvckxpZ2h0ZXI6IHJnYmEoNDIsIDE0NCwgMjEwLCAwLjUpO1xyXG4kZm9udENvbG9yOiByZ2IoNjYsIDY2LCA2Nik7XHJcblxyXG5cclxuJHRhYmxldDogNzY4cHg7XHJcbiRsYXB0b3A6IDEyMDBweDtcclxuJG1vbml0b3I6IDE0MDBweDsiXX0= */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/button.component */ "sELr");
/* harmony import */ var _weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather-widget/weather-widget.component */ "RzUm");
/* harmony import */ var _weather_widget_weather_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather-widget/weather-service.service */ "qcu2");
/* harmony import */ var _show_flight_show_flight_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-flight/show-flight.component */ "HLuT");
/* harmony import */ var _show_flight_show_flight_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-flight/show-flight.service */ "/cYP");
/* harmony import */ var _page1_scanner_scanner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../page1/scanner/scanner.service */ "w6iL");
/* harmony import */ var src_app_fly_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/fly-info.service */ "O4/u");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_weather_widget_weather_service_service__WEBPACK_IMPORTED_MODULE_3__["WeatherServiceService"], _show_flight_show_flight_service__WEBPACK_IMPORTED_MODULE_5__["ShowFlightService"], _page1_scanner_scanner_service__WEBPACK_IMPORTED_MODULE_6__["ScannerService"], src_app_fly_info_service__WEBPACK_IMPORTED_MODULE_7__["FlyInfoService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"],
        _weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_2__["WeatherWidgetComponent"],
        _show_flight_show_flight_component__WEBPACK_IMPORTED_MODULE_4__["ShowFlightComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"], _weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_2__["WeatherWidgetComponent"], _show_flight_show_flight_component__WEBPACK_IMPORTED_MODULE_4__["ShowFlightComponent"]] }); })();


/***/ }),

/***/ "RLG4":
/*!**********************************************************!*\
  !*** ./src/app/page2/page2-home/page2-home.component.ts ***!
  \**********************************************************/
/*! exports provided: Page2HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2HomeComponent", function() { return Page2HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _luggage_luggage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../luggage/luggage.component */ "98Sv");
/* harmony import */ var _sits_sits_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sits/sits.component */ "thWA");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../summary/summary.component */ "m/HS");




class Page2HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
Page2HomeComponent.ɵfac = function Page2HomeComponent_Factory(t) { return new (t || Page2HomeComponent)(); };
Page2HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page2HomeComponent, selectors: [["app-page2-home"]], decls: 3, vars: 0, template: function Page2HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-luggage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-summary");
    } }, directives: [_luggage_luggage_component__WEBPACK_IMPORTED_MODULE_1__["LuggageComponent"], _sits_sits_component__WEBPACK_IMPORTED_MODULE_2__["SitsComponent"], _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__["SummaryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlMi1ob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "RzUm":
/*!*******************************************************************!*\
  !*** ./src/app/shared/weather-widget/weather-widget.component.ts ***!
  \*******************************************************************/
/*! exports provided: WeatherWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetComponent", function() { return WeatherWidgetComponent; });
/* harmony import */ var src_app_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/weather */ "KJgg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _weather_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather-service.service */ "qcu2");
/* harmony import */ var src_app_fly_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/fly-info.service */ "O4/u");




class WeatherWidgetComponent {
    constructor(weatherService, flyInfo) {
        this.weatherService = weatherService;
        this.flyInfo = flyInfo;
        this.weather = new src_app_weather__WEBPACK_IMPORTED_MODULE_0__["Weather"]();
        this.weatherInfo = [];
        this.city = this.getCity();
        this.data = this.fetchWeather();
    }
    ngOnInit() {
        this.fetchWeather();
    }
    getCity() {
        return this.weatherService.getCity();
    }
    fetchWeather() {
        this.weatherService.getWeatherData().subscribe(response => {
            this.weatherInfo.pop();
            this.weather.tempetature = Math.round(response['current']['temp']);
            this.weather.icon = this.weatherService.getIconUrl(response['current']['weather'][0]['icon']);
            document.querySelector('.weather__temperature').textContent = `${this.weather.tempetature}`;
            this.getCity();
            this.weatherInfo.push(this.weather);
        });
    }
    getIcon() {
        return this.weatherInfo[0].icon;
    }
}
WeatherWidgetComponent.ɵfac = function WeatherWidgetComponent_Factory(t) { return new (t || WeatherWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_weather_service_service__WEBPACK_IMPORTED_MODULE_2__["WeatherServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_fly_info_service__WEBPACK_IMPORTED_MODULE_3__["FlyInfoService"])); };
WeatherWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WeatherWidgetComponent, selectors: [["app-weather-widget"]], decls: 8, vars: 2, consts: [[1, "weather"], [1, "weather__city"], [1, "icon", 3, "src"], [1, "weather__temperature_box"], [1, "weather__temperature"]], template: function WeatherWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getCity());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.getIcon(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, styles: [".weather[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  margin-top: 1em;\n}\n.weather__temperature_box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.weather__temperature_box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 0.2em;\n}\n.weather__city[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  margin-bottom: -1em;\n}\n.weather__temperature_box[_ngcontent-%COMP%] {\n  margin-top: -1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3ZWF0aGVyLXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQURBO0FBRUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVRO0VBQ0ksa0JBQUE7QUFBWjtBQUlBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBRko7QUFLQTtFQUNJLGdCQUFBO0FBSEoiLCJmaWxlIjoid2VhdGhlci13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLndlYXRoZXJ7XHJcblxyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuY29sb3I6IHdoaXRlO1xyXG5tYXJnaW4tdG9wOiAxZW07XHJcbiAgICAmX190ZW1wZXJhdHVyZV9ib3h7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMmVtO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuJl9fY2l0eXtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xZW07XHJcbn1cclxuXHJcbiZfX3RlbXBlcmF0dXJlX2JveHtcclxuICAgIG1hcmdpbi10b3A6IC0xZW07XHJcbn1cclxuXHJcbn0iXX0= */"] });
WeatherWidgetComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WeatherWidgetComponent, factory: WeatherWidgetComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'ticket-reservation';
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                window.scrollTo(0, 0);
            }
        });
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TGdo":
/*!**************************************************!*\
  !*** ./src/app/page1/singup/singup.component.ts ***!
  \**************************************************/
/*! exports provided: SingupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupComponent", function() { return SingupComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customvalidation.service */ "MqtW");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/button/button.component */ "sELr");








function SingupComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SingupComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SingupComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SingupComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " User Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SingupComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " User Name is not available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SingupComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SingupComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SingupComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Confirm Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SingupComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Passwords doesnot match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SingupComponent {
    constructor(fb, customValidator, authService, router) {
        this.fb = fb;
        this.customValidator = customValidator;
        this.authService = authService;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required], this.customValidator.userNameValidator.bind(this.customValidator)],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.customValidator.patternValidator()])],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        }, {
            validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
        });
    }
    get registerFormControl() {
        return this.registerForm.controls;
    }
    onSubmit(email, password) {
        this.submitted = true;
        if (this.registerForm.valid) {
            alert('Form Submitted succesfully!!!');
            console.table(this.registerForm.value);
            this.reset();
            console.log(email, password);
            this.authService.signup(email, password).subscribe((res) => {
                console.log(res);
                this.router.navigate(['/login']);
            });
        }
    }
    reset() {
        this.registerForm.reset({
            name: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        }),
            this.submitted = false;
    }
}
SingupComponent.ɵfac = function SingupComponent_Factory(t) { return new (t || SingupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__["CustomvalidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SingupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SingupComponent, selectors: [["app-singup"]], decls: 37, vars: 10, consts: [[1, "card"], [1, "card__body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "name", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "email", 1, "form-control"], ["type", "text", "formControlName", "username", 1, "form-control"], ["type", "password", "formControlName", "password", 1, "form-control"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control"], [1, "text-danger"]], template: function SingupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign up Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SingupComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(ctx.registerFormControl.email.value, ctx.registerFormControl.password.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SingupComponent_span_9_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SingupComponent_span_14_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SingupComponent_span_15_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SingupComponent_span_20_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SingupComponent_span_21_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SingupComponent_span_26_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SingupComponent_span_27_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, SingupComponent_span_32_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, SingupComponent_span_33_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "app-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.registerFormControl.name.errors == null ? null : ctx.registerFormControl.name.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.registerFormControl.email.errors == null ? null : ctx.registerFormControl.email.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.registerFormControl.email.errors == null ? null : ctx.registerFormControl.email.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.registerFormControl.username.errors == null ? null : ctx.registerFormControl.username.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.registerFormControl.username.errors == null ? null : ctx.registerFormControl.username.errors.userNameNotAvailable));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.registerFormControl.password.errors == null ? null : ctx.registerFormControl.password.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.registerFormControl.password.errors == null ? null : ctx.registerFormControl.password.errors.invalidPassword));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.registerFormControl.confirmPassword.errors == null ? null : ctx.registerFormControl.confirmPassword.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.registerFormControl.confirmPassword.errors == null ? null : ctx.registerFormControl.confirmPassword.errors.passwordMismatch));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 2em;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 7em;\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding-bottom: 0.5em;\n}\n@media (min-width: 768px) {\n  .card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n.card__body[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: 4em;\n  background: #e2e2e2;\n  padding: 2em;\n}\n@media (min-width: 768px) {\n  .card__body[_ngcontent-%COMP%] {\n    width: 60%;\n    margin-top: 2em;\n  }\n}\n.card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 1em;\n}\n.card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 70%;\n  border: none;\n  padding: 0.5em;\n}\n.card[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  color: red;\n  font-size: 0.7rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaW5ndXAuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxtYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHFCQUFBO0FBREo7QUFHSTtFQU5KO0lBT1EsYUFBQTtFQUFOO0FBQ0Y7QUFHQTtFQUNJLFVBQUE7RUFDRCxlQUFBO0VBQ0MsbUJDdEJRO0VEdUJSLFlBQUE7QUFESjtBQUdJO0VBTko7SUFPUSxVQUFBO0lBQ0EsZUFBQTtFQUFOO0FBQ0Y7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBREo7QUFLQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUhKO0FBTUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKSiIsImZpbGUiOiJzaW5ndXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcvc3JjL2Fzc2V0cy9tYWluLnNjc3MnO1xyXG5cclxuLmNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuXHJcbmgze1xyXG4gICAgbWFyZ2luLXRvcDogN2VtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCl7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbiZfX2JvZHl7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICBtYXJnaW4tdG9wOiA0ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAkbWFpbkNvbG9yO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KXtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlcntcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbn1cclxuXHJcbiIsIiRmb250OiAnSGVlYm8nLCBzYW5zLXNlcmlmO1xyXG4kbWFpbkNvbG9yOiByZ2JhKDIyNiwyMjYsMjI2LCAxKTtcclxuJHNlY29uZENvbG9yOiByZ2JhKDQyLDE0NCwgMjEwLCAxKTtcclxuJHNlY29uZENvbG9yTGlnaHRlcjogcmdiYSg0MiwgMTQ0LCAyMTAsIDAuNSk7XHJcbiRmb250Q29sb3I6IHJnYig2NiwgNjYsIDY2KTtcclxuXHJcblxyXG4kdGFibGV0OiA3NjhweDtcclxuJGxhcHRvcDogMTIwMHB4O1xyXG4kbW9uaXRvcjogMTQwMHB4OyJdfQ== */"] });


/***/ }),

/***/ "Tul/":
/*!***************************************!*\
  !*** ./src/app/page1/page1.module.ts ***!
  \***************************************/
/*! exports provided: Page1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Module", function() { return Page1Module; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero/hero.component */ "Nd2R");
/* harmony import */ var _scanner_scanner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scanner/scanner.component */ "OBdH");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _page1_home_page1_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page1-home/page1-home.component */ "jefT");
/* harmony import */ var _page1_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page1-routing.module */ "5dPE");
/* harmony import */ var _singup_singup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./singup/singup.component */ "TGdo");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "zbeZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_shared_weather_widget_weather_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app/shared/weather-widget/weather-service.service */ "qcu2");
/* harmony import */ var _shared_show_flight_show_flight_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/show-flight/show-flight.service */ "/cYP");
/* harmony import */ var _shared_show_flight_show_flight_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/show-flight/show-flight.component */ "HLuT");
/* harmony import */ var _shared_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/weather-widget/weather-widget.component */ "RzUm");
/* harmony import */ var _scanner_scanner_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scanner/scanner.service */ "w6iL");
/* harmony import */ var _page2_sits_sits_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../page2/sits/sits.component */ "thWA");
/* harmony import */ var _page2_page2_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../page2/page2.service */ "WQOD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class Page1Module {
}
Page1Module.ɵfac = function Page1Module_Factory(t) { return new (t || Page1Module)(); };
Page1Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: Page1Module });
Page1Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [_app_shared_weather_widget_weather_service_service__WEBPACK_IMPORTED_MODULE_10__["WeatherServiceService"], _shared_show_flight_show_flight_service__WEBPACK_IMPORTED_MODULE_11__["ShowFlightService"], _shared_show_flight_show_flight_component__WEBPACK_IMPORTED_MODULE_12__["ShowFlightComponent"], _shared_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_13__["WeatherWidgetComponent"], _scanner_scanner_service__WEBPACK_IMPORTED_MODULE_14__["ScannerService"], _page2_sits_sits_component__WEBPACK_IMPORTED_MODULE_15__["SitsComponent"], _page2_page2_service__WEBPACK_IMPORTED_MODULE_16__["Page2Service"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _page1_routing_module__WEBPACK_IMPORTED_MODULE_6__["Page1RoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](Page1Module, { declarations: [_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__["HeroComponent"], _scanner_scanner_component__WEBPACK_IMPORTED_MODULE_2__["ScannerComponent"], _page1_home_page1_home_component__WEBPACK_IMPORTED_MODULE_5__["Page1HomeComponent"], _singup_singup_component__WEBPACK_IMPORTED_MODULE_7__["SingupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _page1_routing_module__WEBPACK_IMPORTED_MODULE_6__["Page1RoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]], exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _singup_singup_component__WEBPACK_IMPORTED_MODULE_7__["SingupComponent"]] }); })();


/***/ }),

/***/ "WQOD":
/*!****************************************!*\
  !*** ./src/app/page2/page2.service.ts ***!
  \****************************************/
/*! exports provided: Page2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Service", function() { return Page2Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fly_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fly-info.service */ "O4/u");


class Page2Service {
    constructor(flyinfo) {
        this.flyinfo = flyinfo;
        this.luggagePrice = [];
        this.sits = [];
    }
    addLuggagePrice(price) {
        this.luggagePrice.push(price);
    }
    getLuggagePrice() {
        let price;
        price = this.luggagePrice;
        price = price[0].map(i => Number(i)).reduce(function (a, b) {
            return a + b;
        });
        this.luggagePrice = price;
        return this.luggagePrice;
    }
    addSits(sit) {
        this.sits.push(sit);
    }
    getSits() {
        return this.sits;
    }
    clearInfo() {
        this.sits = [];
    }
    clearLuggage() {
        this.luggagePrice = [];
    }
    getLuggageCount() {
        return this.luggagePrice;
    }
    spliceLuggageArr(index, number) {
        this.luggagePrice.splice(index, number);
    }
}
Page2Service.ɵfac = function Page2Service_Factory(t) { return new (t || Page2Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fly_info_service__WEBPACK_IMPORTED_MODULE_1__["FlyInfoService"])); };
Page2Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Page2Service, factory: Page2Service.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Yf6P":
/*!********************************************!*\
  !*** ./src/app/shared/show-flight/time.ts ***!
  \********************************************/
/*! exports provided: Time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
class Time {
    constructor(hour, minutes) {
        this.hour = hour;
        this.minutes = minutes;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _page1_page1_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page1/page1.module */ "Tul/");
/* harmony import */ var _page2_page2_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page2/page2.module */ "tyfE");
/* harmony import */ var _fly_info_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fly-info.service */ "O4/u");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-webstorage-service */ "SX+u");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./local-storage.service */ "gvvY");
/* harmony import */ var _shared_show_flight_show_flight_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/show-flight/show-flight.service */ "/cYP");
/* harmony import */ var _page1_scanner_scanner_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page1/scanner/scanner.service */ "w6iL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [_fly_info_service__WEBPACK_IMPORTED_MODULE_7__["FlyInfoService"], _local_storage_service__WEBPACK_IMPORTED_MODULE_11__["LocalStorageService"], _shared_show_flight_show_flight_service__WEBPACK_IMPORTED_MODULE_12__["ShowFlightService"], _page1_scanner_scanner_service__WEBPACK_IMPORTED_MODULE_13__["ScannerService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _page1_page1_module__WEBPACK_IMPORTED_MODULE_5__["Page1Module"],
            _page2_page2_module__WEBPACK_IMPORTED_MODULE_6__["Page2Module"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_10__["StorageServiceModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _page1_page1_module__WEBPACK_IMPORTED_MODULE_5__["Page1Module"],
        _page2_page2_module__WEBPACK_IMPORTED_MODULE_6__["Page2Module"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_10__["StorageServiceModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"]] }); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-request.service */ "pQQl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AuthService {
    constructor(webService, router, http) {
        this.webService = webService;
        this.router = router;
        this.http = http;
        this.showAccess = false;
    }
    login(email, password) {
        return this.webService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((res) => {
            this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            console.log("LOGGED IN!");
            this.userEmail = email;
            this.showAccess = true;
            console.log(this.getInfoAccess());
        }));
    }
    getInfoAccess() {
        return this.showAccess;
    }
    signup(email, password) {
        return this.webService.signup(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((res) => {
            this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            console.log("Successfully signed up and now logged in!");
        }));
    }
    logout() {
        this.userEmail = '';
        this.removeSession();
        this.showAccess = false;
        this.router.navigate(['/login']);
        console.log(this.getInfoAccess());
    }
    getAccessToken() {
        return localStorage.getItem('x-access-token');
    }
    getRefreshToken() {
        return localStorage.getItem('x-refresh-token');
    }
    getUserId() {
        return localStorage.getItem('user-id');
    }
    setAccessToken(accessToken) {
        localStorage.setItem('x-access-token', accessToken);
    }
    setSession(userId, accessToken, refreshToken) {
        localStorage.setItem('user-id', userId);
        localStorage.setItem('x-access-token', accessToken);
        localStorage.setItem('x-refresh-token', refreshToken);
    }
    removeSession() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('x-refresh-token');
    }
    getNewAccessToken() {
        return this.http.get(`${this.webService.ROOT_URL}/users/me/access-token`, {
            headers: {
                'x-refresh-token': this.getRefreshToken(),
                '_id': this.getUserId()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((res) => {
            this.setAccessToken(res.headers.get('x-access-token'));
        }));
    }
    getUserEmail() {
        return this.userEmail;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "elET":
/*!***********************************************!*\
  !*** ./src/app/page2/page2-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Page2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2RoutingModule", function() { return Page2RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page2_home_page2_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2-home/page2-home.component */ "RLG4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: 'page2', component: _page2_home_page2_home_component__WEBPACK_IMPORTED_MODULE_1__["Page2HomeComponent"] }
];
class Page2RoutingModule {
}
Page2RoutingModule.ɵfac = function Page2RoutingModule_Factory(t) { return new (t || Page2RoutingModule)(); };
Page2RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: Page2RoutingModule });
Page2RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Page2RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs/lib/anime.es */ "EgnG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _page1_services_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page1/services/customvalidation.service */ "MqtW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _shared_weather_widget_weather_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/weather-widget/weather-service.service */ "qcu2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function HeaderComponent_i_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_i_7_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.openNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_i_8_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.closeNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_9_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ul_9_li_4_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.closeNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_9_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ul_9_li_5_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.closeNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_9_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_ul_9_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.onLogOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderComponent_ul_9_li_4_Template, 3, 0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HeaderComponent_ul_9_li_5_Template, 3, 0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HeaderComponent_ul_9_li_6_Template, 3, 0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.authservice.getUserEmail());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.authservice.getInfoAccess());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.authservice.getInfoAccess());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.authservice.getInfoAccess());
} }
class HeaderComponent {
    constructor(custom, router, authservice, breakpointObserver, weatherWidget) {
        this.custom = custom;
        this.router = router;
        this.authservice = authservice;
        this.breakpointObserver = breakpointObserver;
        this.weatherWidget = weatherWidget;
        this.isMediumScreen = this.breakpointObserver.isMatched('(min-width: 599px)');
        this.open = false;
    }
    ngOnInit() {
        this.listener();
        Object(animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_0__["default"])({
            targets: '.logo',
            scale: [2, 1],
            delay: 500,
            duration: 2000,
            easing: 'easeInOutQuad'
        });
    }
    onLogOut() {
        this.authservice.logout();
        this.router.navigate(['/']);
        this.listener();
    }
    openNav() {
        this.open = true;
    }
    closeNav() {
        this.listener();
    }
    backToMain() {
        this.closeNav();
        this.weatherWidget.updateData('Katowice');
    }
    listener() {
        this.breakpointObserver.observe([
            '(min-width: 768px)'
        ]).subscribe(result => {
            if (result.matches) {
                this.open = true;
            }
            else {
                this.open = false;
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_page1_services_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__["CustomvalidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_weather_widget_weather_service_service__WEBPACK_IMPORTED_MODULE_6__["WeatherServiceService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 3, consts: [[1, "upnav"], ["routerLink", "/", 1, "logo", 3, "click"], [1, "open-close"], ["class", "fas fa-bars", 3, "click", 4, "ngIf"], ["class", "fas fa-times", 3, "click", 4, "ngIf"], ["class", "nav", 4, "ngIf"], [1, "fas", "fa-bars", 3, "click"], [1, "fas", "fa-times", 3, "click"], [1, "nav"], [1, "nav__item"], ["id", "user"], ["class", "nav__item", 3, "click", 4, "ngIf"], [1, "nav__item", 3, "click"], ["routerLink", "/login", "id", "login"], ["routerLink", "/signup", "id", "sign-up"], ["id", "logout"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_2_listener() { return ctx.backToMain(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "fly");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_i_7_Template, 1, 0, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderComponent_i_8_Template, 1, 0, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HeaderComponent_ul_9_Template, 7, 4, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.open);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  background-color: #e2e2e2;\n  padding: 1em;\n  width: 100%;\n  z-index: 10;\n}\n@media (min-width: 768px) {\n  nav[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    padding: 0;\n  }\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  list-style: none;\n  background-color: #e2e2e2;\n  width: 100%;\n  z-index: 10;\n}\n@media (min-width: 768px) {\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: flex-end;\n    background-color: transparent;\n  }\n}\nnav[_ngcontent-%COMP%]   .nav__item[_ngcontent-%COMP%] {\n  margin: 2em;\n}\n@media (min-width: 768px) {\n  nav[_ngcontent-%COMP%]   .nav__item[_ngcontent-%COMP%] {\n    margin: 1em 2em;\n  }\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #424242;\n  transition: all 0.2s ease-in-out;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(#user):hover {\n  border-bottom: 2px solid #2a90d2;\n  color: black;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #2a90d2;\n}\nnav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\nnav[_ngcontent-%COMP%]   .upnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  nav[_ngcontent-%COMP%]   .upnav[_ngcontent-%COMP%] {\n    background-color: transparent;\n  }\n}\nnav[_ngcontent-%COMP%]   .upnav[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 1em;\n}\nnav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  outline: none;\n}\n@media (min-width: 768px) {\n  nav[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .fa-bars[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nnav[_ngcontent-%COMP%]   #user[_ngcontent-%COMP%] {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxtYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSx5QkNKUTtFREtSLFlBQUE7RUFDQSxXQUFBO0VBQ0QsV0FBQTtBQURIO0FBR0c7RUFSSDtJQVNJLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7RUFBRjtBQUNGO0FBQ0k7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkNwQlE7RURxQlIsV0FBQTtFQUNBLFdBQUE7QUFDSjtBQUNJO0VBVkE7SUFXQyxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsNkJBQUE7RUFFSDtBQUNGO0FBQ0k7RUFDRSxXQUFBO0FBQ047QUFBTTtFQUZGO0lBR0ksZUFBQTtFQUdOO0FBQ0Y7QUFBSTtFQUNJLHFCQUFBO0VBQ0EsY0NyQ0k7RURzQ0osZ0NBQUE7QUFFUjtBQUFRO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0FBRVY7QUFDUTtFQUNFLGNDaERJO0FEaURkO0FBR0k7RUFDSSxlQUFBO0FBRFI7QUFJSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBRlI7QUFJUTtFQUxKO0lBT00sNkJBQUE7RUFGUjtBQUNGO0FBS0k7RUFDRSxhQUFBO0FBSE47QUFNSTtFQUNFLGFBQUE7QUFKTjtBQVNNO0VBREY7SUFFSSxhQUFBO0VBTk47QUFDRjtBQVNJO0VBQ0UsWUFBQTtBQVBOIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy9zcmMvYXNzZXRzL21haW4uc2Nzcyc7XHJcblxyXG5uYXZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbkNvbG9yO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIHotaW5kZXg6IDEwO1xyXG5cclxuICAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluQ29sb3I7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KXtcclxuICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICAubmF2X19pdGVte1xyXG4gICAgICBtYXJnaW46IDJlbTtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICR0YWJsZXQpe1xyXG4gICAgICAgIG1hcmdpbjogMWVtIDJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICRmb250Q29sb3I7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAgICY6bm90KCN1c2VyKTpob3ZlcntcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkc2Vjb25kQ29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgICAgY29sb3I6ICRzZWNvbmRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC51cG5hdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCl7XHJcbiAgICAgIFxyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVwbmF2ID4gKiB7XHJcbiAgICAgIG1hcmdpbjogMCAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ297XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5mYS10aW1lcywgLmZhLWJhcnN7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjdXNlcntcclxuICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgfVxyXG4gICBcclxufVxyXG4iLCIkZm9udDogJ0hlZWJvJywgc2Fucy1zZXJpZjtcclxuJG1haW5Db2xvcjogcmdiYSgyMjYsMjI2LDIyNiwgMSk7XHJcbiRzZWNvbmRDb2xvcjogcmdiYSg0MiwxNDQsIDIxMCwgMSk7XHJcbiRzZWNvbmRDb2xvckxpZ2h0ZXI6IHJnYmEoNDIsIDE0NCwgMjEwLCAwLjUpO1xyXG4kZm9udENvbG9yOiByZ2IoNjYsIDY2LCA2Nik7XHJcblxyXG5cclxuJHRhYmxldDogNzY4cHg7XHJcbiRsYXB0b3A6IDEyMDBweDtcclxuJG1vbml0b3I6IDE0MDBweDsiXX0= */"], data: { animation: [] } });
HeaderComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HeaderComponent, factory: HeaderComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Made by Magdalena Tomala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  padding: 1em;\n  margin-top: 2em;\n  background-color: #e2e2e2;\n  text-align: center;\n  width: 100%;\n  color: #424242;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxtYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQ0xRO0VETVIsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0NMUTtBREdaIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy9zcmMvYXNzZXRzL21haW4uc2Nzcyc7XHJcblxyXG5cclxuZm9vdGVye1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW5Db2xvcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICRmb250Q29sb3I7XHJcbn0iLCIkZm9udDogJ0hlZWJvJywgc2Fucy1zZXJpZjtcclxuJG1haW5Db2xvcjogcmdiYSgyMjYsMjI2LDIyNiwgMSk7XHJcbiRzZWNvbmRDb2xvcjogcmdiYSg0MiwxNDQsIDIxMCwgMSk7XHJcbiRzZWNvbmRDb2xvckxpZ2h0ZXI6IHJnYmEoNDIsIDE0NCwgMjEwLCAwLjUpO1xyXG4kZm9udENvbG9yOiByZ2IoNjYsIDY2LCA2Nik7XHJcblxyXG5cclxuJHRhYmxldDogNzY4cHg7XHJcbiRsYXB0b3A6IDEyMDBweDtcclxuJG1vbml0b3I6IDE0MDBweDsiXX0= */"] });


/***/ }),

/***/ "gvvY":
/*!******************************************!*\
  !*** ./src/app/local-storage.service.ts ***!
  \******************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LocalStorageService {
    constructor() {
        this.localStorage = window.localStorage;
    }
    get(key) {
        if (this.isLocalStorageSupported) {
            return JSON.parse(this.localStorage.getItem(key));
        }
        return null;
    }
    set(key, value) {
        if (this.isLocalStorageSupported) {
            this.localStorage.setItem(key, JSON.stringify(value));
            return true;
        }
        return false;
    }
    remove(key) {
        if (this.isLocalStorageSupported) {
            this.localStorage.removeItem(key);
            return true;
        }
        return false;
    }
    get isLocalStorageSupported() {
        return !!this.localStorage;
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "jefT":
/*!**********************************************************!*\
  !*** ./src/app/page1/page1-home/page1-home.component.ts ***!
  \**********************************************************/
/*! exports provided: Page1HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1HomeComponent", function() { return Page1HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hero/hero.component */ "Nd2R");
/* harmony import */ var _scanner_scanner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scanner/scanner.component */ "OBdH");



class Page1HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
Page1HomeComponent.ɵfac = function Page1HomeComponent_Factory(t) { return new (t || Page1HomeComponent)(); };
Page1HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page1HomeComponent, selectors: [["app-page1-home"]], decls: 2, vars: 0, template: function Page1HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-scanner");
    } }, directives: [_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__["HeroComponent"], _scanner_scanner_component__WEBPACK_IMPORTED_MODULE_2__["ScannerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlMS1ob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "m/HS":
/*!****************************************************!*\
  !*** ./src/app/page2/summary/summary.component.ts ***!
  \****************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_fly_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/fly-info.service */ "O4/u");
/* harmony import */ var src_app_shared_weather_widget_weather_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/weather-widget/weather-service.service */ "qcu2");
/* harmony import */ var _page2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page2.service */ "WQOD");
/* harmony import */ var src_app_shared_show_flight_show_flight_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/show-flight/show-flight.service */ "/cYP");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/button/button.component */ "sELr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_show_flight_show_flight_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/show-flight/show-flight.component */ "HLuT");
/* harmony import */ var _shared_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/weather-widget/weather-widget.component */ "RzUm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











const _c0 = ["target"];
function SummaryComponent_div_9_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currency_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", currency_r3)("selected", ctx_r2.currencies[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", currency_r3, "");
} }
function SummaryComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SUMMARY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-show-flight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "SITS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "LUGGAGE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PLN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "TICKET");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "PLN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ALL: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SummaryComponent_div_9_Template_select_change_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changeCurrency($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SummaryComponent_div_9_option_28_Template, 2, 3, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-weather-widget");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SummaryComponent_div_9_Template_app_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.backToHomePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Back to homepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.sits);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.luggagePrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.ticketPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.amount || ctx_r1.sum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.currencies);
} }
class SummaryComponent {
    constructor(flyInfo, weatherService, page2Service, showFlight, http) {
        this.flyInfo = flyInfo;
        this.weatherService = weatherService;
        this.page2Service = page2Service;
        this.showFlight = showFlight;
        this.http = http;
        this.show = false;
        this.info = this.flyInfo.getInfo();
        this.currencies = ['USD', 'EUR', 'PLN'];
        this.selectedCurrency = '';
    }
    showSummary() {
        if (this.info[0].people === this.page2Service.getLuggageCount().length && this.info[0].people === this.page2Service.getSits().length) {
            this.show = true;
            this.luggagePrice = this.page2Service.getLuggagePrice();
            this.sits = this.page2Service.getSits();
            this.ticketPrice = this.showFlight.getPrice();
            this.sum = this.ticketPrice + this.luggagePrice;
            this.weatherService.updateData(this.info[0].to);
            this.page2Service.clearLuggage();
            requestAnimationFrame(() => {
                this.targetRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
            });
            this.sitsAlert = '';
            this.luggageAlert = '';
        }
        else {
            this.showAlert();
        }
    }
    changeCurrency(event) {
        this.selectedCurrency = event.target.value;
        this.http.get(`https://api.ratesapi.io/api/latest?base=PLN&symbols=${this.selectedCurrency}`).subscribe(data => {
            this.rate = data.rates[this.selectedCurrency];
            this.amount = (this.sum * this.rate).toFixed(2);
        });
    }
    showAlert() {
        if (this.info[0].people !== this.page2Service.getLuggageCount().length) {
            this.luggageAlert = 'Choose luggage for all people!';
        }
        if (this.info[0].people !== this.page2Service.getSits().length) {
            this.sitsAlert = 'Choose sits for all people!';
        }
    }
    backToHomePage() {
        this.weatherService.updateData(this.info[0].from);
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fly_info_service__WEBPACK_IMPORTED_MODULE_1__["FlyInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_weather_widget_weather_service_service__WEBPACK_IMPORTED_MODULE_2__["WeatherServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_page2_service__WEBPACK_IMPORTED_MODULE_3__["Page2Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_show_flight_show_flight_service__WEBPACK_IMPORTED_MODULE_4__["ShowFlightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], viewQuery: function SummaryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.targetRef = _t.first);
    } }, decls: 10, vars: 3, consts: [[1, "button"], [3, "click"], ["target", ""], ["class", "summary", 4, "ngIf"], [1, "summary"], [1, "summary__card"], [1, "summary__content"], [1, "cost"], [1, "summary__price"], [1, "all"], ["name", "currency", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "summary__weather"], ["routerLink", "/", 3, "click"], [3, "value", "selected"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SummaryComponent_Template_app_button_click_1_listener() { return ctx.showSummary(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SummaryComponent_div_9_Template, 33, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sitsAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.luggageAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_shared_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_show_flight_show_flight_component__WEBPACK_IMPORTED_MODULE_8__["ShowFlightComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_weather_widget_weather_widget_component__WEBPACK_IMPORTED_MODULE_9__["WeatherWidgetComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"]], styles: [".button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  color: red;\n  font-size: 0.8rem;\n}\n.summary[_ngcontent-%COMP%] {\n  margin-top: 4em;\n  padding-top: 2em;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n.summary__card[_ngcontent-%COMP%] {\n  width: 80%;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-left: 7px solid #2a90d2;\n  margin: 2em auto 2em auto;\n  text-align: center;\n}\n@media (min-width: 768px) {\n  .summary__card[_ngcontent-%COMP%] {\n    display: flex;\n    width: 60%;\n    margin: 4em auto 2em auto;\n  }\n}\n.summary__content[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .summary__content[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.summary__content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-left: 1em;\n  margin-right: 0.6em;\n}\n.summary[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%] {\n  display: flex;\n}\n.summary__price[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 1em auto;\n  padding-top: 1em;\n  border-top: 1px solid rgba(0, 0, 0, 0.2);\n}\n.summary__weather[_ngcontent-%COMP%] {\n  height: 14rem;\n  width: 100%;\n  margin-top: 1em;\n  padding: 1em;\n  background: url('hero.jpg');\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 768px) {\n  .summary__weather[_ngcontent-%COMP%] {\n    width: 50%;\n    height: inherit;\n    margin: 0;\n  }\n}\nselect[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFGSjtBQUlJO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUZSO0FBTUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFISjtBQUtJO0VBQ0ksV0FBQTtBQUhSO0FBTUk7RUFDSSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQUtRO0VBTko7SUFPUSxhQUFBO0lBQ0EsVUFBQTtJQUNBLHlCQUFBO0VBRlY7QUFDRjtBQUtJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtRO0VBUEo7SUFRUSxVQUFBO0VBRlY7QUFDRjtBQUlRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRlo7QUFNSTtFQUNJLGFBQUE7QUFKUjtBQU9JO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBQUxSO0FBUUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQU9RO0VBWEo7SUFZUSxVQUFBO0lBQ0EsZUFBQTtJQUNBLFNBQUE7RUFKVjtBQUNGO0FBU0E7RUFDSSxnQkFBQTtBQU5KIiwiZmlsZSI6InN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcvc3JjL2Fzc2V0cy9tYWluLnNjc3MnO1xyXG5cclxuXHJcbi5idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdW1tYXJ5e1xyXG4gICAgbWFyZ2luLXRvcDogNGVtO1xyXG4gICAgcGFkZGluZy10b3A6IDJlbTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBoM3tcclxuICAgICAgICBtYXJnaW46IDFlbTtcclxuICAgIH1cclxuXHJcbiAgICAmX19jYXJke1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgJHNlY29uZENvbG9yO1xyXG4gICAgICAgIG1hcmdpbjogMmVtIGF1dG8gMmVtIGF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiA0ZW0gYXV0byAyZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY29udGVudHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KXtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29zdHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3ByaWNle1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fd2VhdGhlcntcclxuICAgICAgICBoZWlnaHQ6IDE0cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9wYWdlMS9oZXJvL2hlcm8uanBnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0KXtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuc2VsZWN0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "pQQl":
/*!****************************************!*\
  !*** ./src/app/web-request.service.ts ***!
  \****************************************/
/*! exports provided: WebRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestService", function() { return WebRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class WebRequestService {
    constructor(http) {
        this.http = http;
        this.ROOT_URL = 'http://localhost:5000';
    }
    get(uri) {
        return this.http.get(`${this.ROOT_URL}/${uri}`);
    }
    post(uri, payload) {
        return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
    }
    patch(uri, payload) {
        return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
    }
    delete(uri) {
        return this.http.delete(`${this.ROOT_URL}/${uri}`);
    }
    login(email, password) {
        return this.http.post(`${this.ROOT_URL}/users/login`, {
            email,
            password
        }, {
            observe: 'response'
        });
    }
    signup(email, password) {
        return this.http.post(`${this.ROOT_URL}/users`, {
            email,
            password
        }, {
            observe: 'response'
        });
    }
}
WebRequestService.ɵfac = function WebRequestService_Factory(t) { return new (t || WebRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WebRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebRequestService, factory: WebRequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qcu2":
/*!******************************************************************!*\
  !*** ./src/app/shared/weather-widget/weather-service.service.ts ***!
  \******************************************************************/
/*! exports provided: WeatherServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherServiceService", function() { return WeatherServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class WeatherServiceService {
    constructor(http) {
        this.http = http;
        this.coordinates = {
            'Katowice': { lat: 50.26, lon: 19.03 },
            'Cracow': { lat: 50.04, lon: 19.56 },
            'Warsaw': { lat: 52.13, lon: 21.00 },
            'Berlin': { lat: 52.31, lon: 13.25 },
            'Barcelona': { lat: 41.24, lon: 2.10 },
            'New York': { lat: 40.42, lon: 74.00 },
        };
        this.userChoiceData = ['Katowice'];
    }
    getCity() {
        this.city = this.userChoiceData[0];
        return this.city;
    }
    updateData(data) {
        this.clearData();
        this.userChoiceData.push(data);
    }
    clearData() {
        this.userChoiceData = [];
        return this.userChoiceData;
    }
    getWeatherData() {
        this.localization = {
            lat: this.coordinates[this.userChoiceData[0]].lat,
            lon: this.coordinates[this.userChoiceData[0]].lon
        };
        return this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.localization.lat}&lon=${this.localization.lon}&units=metric&exclude=hourly&appid=c4d7b61fd5e60aa5df82a470297864d1`);
    }
    getIconUrl(icon) {
        return 'http://openweathermap.org/img/wn/' + icon + "@2x.png";
    }
}
WeatherServiceService.ɵfac = function WeatherServiceService_Factory(t) { return new (t || WeatherServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WeatherServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeatherServiceService, factory: WeatherServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "sELr":
/*!***************************************************!*\
  !*** ./src/app/shared/button/button.component.ts ***!
  \***************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["*"];
class ButtonComponent {
    constructor() {
        this.disabledRules = '';
        this.btnTitle = '';
    }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { disabledRules: "disabledRules", btnTitle: "btnTitle" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["type", "submit", 3, "disabled"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabledRules);
    } }, styles: ["button[_ngcontent-%COMP%] {\n  padding: 0.5em 1.5em;\n  background-color: #2a90d2;\n  color: white;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #2173aa;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: rgba(42, 144, 210, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxidXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxvQkFBQTtFQUNBLHlCQU5VO0VBT1YsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFISjtBQUtJO0VBQ0kseUJBWFc7QUFRbkI7QUFPQTtFQUNJLHlDQWpCa0I7QUFhdEIiLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yQnV0dG9uOiByZ2JhKDQyLDE0NCwyMTAsIDEpO1xyXG4kY29sb3JCdXR0b25EaXNhYmxlZDogcmdiYSg0MiwxNDQsMjEwLCAwLjUpO1xyXG4kY29sb3JCdXR0b25Ib3ZlcjogcmdiKDMzLCAxMTUsIDE3MCk7XHJcblxyXG5idXR0b257XHJcbiAgICBwYWRkaW5nOiAwLjVlbSAxLjVlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvckJ1dHRvbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XHJcblxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JCdXR0b25Ib3ZlcjtcclxuICAgIH1cclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yQnV0dG9uRGlzYWJsZWQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "thWA":
/*!**********************************************!*\
  !*** ./src/app/page2/sits/sits.component.ts ***!
  \**********************************************/
/*! exports provided: SitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitsComponent", function() { return SitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _page2_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page2.service */ "WQOD");
/* harmony import */ var src_app_fly_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/fly-info.service */ "O4/u");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SitsComponent_div_7_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SitsComponent_div_7_div_2_div_1_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.chooseSit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sit_r8 = ctx.$implicit;
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", sit_r8 + (i_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sit_r8);
} }
function SitsComponent_div_7_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SitsComponent_div_7_div_2_div_4_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.chooseSit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sit_r13 = ctx.$implicit;
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", sit_r13 + (i_r5 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sit_r13);
} }
function SitsComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SitsComponent_div_7_div_2_div_1_Template, 4, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SitsComponent_div_7_div_2_div_4_Template, 4, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.PlaneOneSits[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.PlaneOneSits[2]);
} }
function SitsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SitsComponent_div_7_div_2_Template, 5, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.PlaneOneSits[0]);
} }
function SitsComponent_div_8_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SitsComponent_div_8_div_2_div_1_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r26.chooseSit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sit_r24 = ctx.$implicit;
    const i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", sit_r24 + (i_r21 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sit_r24);
} }
function SitsComponent_div_8_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SitsComponent_div_8_div_2_div_4_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r31.chooseSit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sit_r29 = ctx.$implicit;
    const i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", sit_r29 + (i_r21 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sit_r29);
} }
function SitsComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SitsComponent_div_8_div_2_div_1_Template, 4, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SitsComponent_div_8_div_2_div_4_Template, 4, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r21 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.PlaneTwoSits[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r21 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r18.PlaneTwoSits[2]);
} }
function SitsComponent_div_8_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SitsComponent_div_8_div_4_div_1_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r39.chooseSit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sit_r37 = ctx.$implicit;
    const i_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", sit_r37 + (i_r35 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sit_r37);
} }
function SitsComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SitsComponent_div_8_div_4_div_1_Template, 4, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r35 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.PlaneTwoSits[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r35 + 1);
} }
function SitsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SitsComponent_div_8_div_2_Template, 5, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SitsComponent_div_8_div_4_Template, 4, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.PlaneTwoSits[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.PlaneTwoSits[0]);
} }
function SitsComponent_div_9_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SitsComponent_div_9_div_2_div_1_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r50.chooseSit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sit_r48 = ctx.$implicit;
    const i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", sit_r48 + (i_r45 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sit_r48);
} }
function SitsComponent_div_9_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SitsComponent_div_9_div_2_div_4_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r55.chooseSit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sit_r53 = ctx.$implicit;
    const i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", sit_r53 + (i_r45 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sit_r53);
} }
function SitsComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SitsComponent_div_9_div_2_div_1_Template, 4, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SitsComponent_div_9_div_2_div_4_Template, 4, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r45 = ctx.index;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r42.PlaneThreeSits[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r45 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r42.PlaneThreeSits[2]);
} }
function SitsComponent_div_9_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SitsComponent_div_9_div_4_div_1_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r63.chooseSit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sit_r61 = ctx.$implicit;
    const i_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", sit_r61 + (i_r59 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sit_r61);
} }
function SitsComponent_div_9_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SitsComponent_div_9_div_4_div_1_Template, 4, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r59 = ctx.index;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r43.PlaneThreeSits[3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r59 + 1);
} }
function SitsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SitsComponent_div_9_div_2_Template, 5, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SitsComponent_div_9_div_4_Template, 4, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.PlaneThreeSits[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.PlaneThreeSits[0]);
} }
class SitsComponent {
    constructor(page2Service, flyInfo) {
        this.page2Service = page2Service;
        this.flyInfo = flyInfo;
        this.PlaneOneSits = [
            [1, 2, 3, 4, 5, 6, 8, 7, 9],
            ["A", "B", "C"],
            ["D", "E", "F"],
            ["G", "A", "H"],
        ];
        this.PlaneTwoSits = [
            [1, 2, 3, 4, 5, 6, 7],
            ["A", "B"],
            ["C", "D", "E"],
            ["F", "G"]
        ];
        this.PlaneThreeSits = [
            [1, 2, 3, 4, 5, 6, 8, 7, 9],
            ["A", "B", "C"],
            ["D", "E", "F"],
            ["G", "A", "H"],
            ["G", "A"],
            ["H", "I"],
        ];
        this.planeOne = false;
        this.planeTwo = false;
        this.planeThree = false;
    }
    ngOnInit() {
        this.choosePlane();
    }
    chooseSit(event) {
        const info = this.flyInfo.getInfo();
        const target = event.target;
        const id = target.attributes['id'].nodeValue;
        const sits = this.page2Service.getSits();
        const indexOfSit = sits.indexOf(target.attributes['id'].nodeValue);
        if (target.classList.contains('clicked')) {
            target.classList.remove('clicked');
            sits.splice(indexOfSit, 1);
        }
        else {
            target.classList.add('clicked');
            this.page2Service.addSits(id);
        }
        if (sits.length > info[0].people) {
            target.classList.remove('clicked');
            sits.splice(indexOfSit, 1);
        }
    }
    choosePlane() {
        const info = this.flyInfo.getInfo();
        const fly = info[0].to;
        fly === 'Berlin' ? this.planeOne = true : this.planeOne = false;
        fly === 'Barcelona' ? this.planeTwo = true : this.planeTwo = false;
        fly === 'New York' ? this.planeThree = true : this.planeThree = false;
    }
}
SitsComponent.ɵfac = function SitsComponent_Factory(t) { return new (t || SitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_page2_service__WEBPACK_IMPORTED_MODULE_1__["Page2Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_fly_info_service__WEBPACK_IMPORTED_MODULE_2__["FlyInfoService"])); };
SitsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SitsComponent, selectors: [["app-sits"]], decls: 23, vars: 3, consts: [[1, "sits"], [1, "plane"], [1, "plane__img"], ["src", "../../../assets/airplanedown.png", "alt", ""], [1, "plane__description"], ["class", "plane1", 4, "ngIf"], ["class", "plane2", 4, "ngIf"], ["class", "plane3", 4, "ngIf"], [1, "legend"], [1, "legend__content"], [1, "grey"], [1, "red"], [1, "blue"], [1, "plane1"], [1, "cabin"], ["class", "cabin__sits", 4, "ngFor", "ngForOf"], [1, "cabin__sits"], ["class", "sit", 4, "ngFor", "ngForOf"], [1, "row"], [1, "sit"], [3, "id", "click"], [1, "plane2"], [1, "plane3"]], template: function SitsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose Your Place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SitsComponent_div_7_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SitsComponent_div_8_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SitsComponent_div_9_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "H6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "LEGEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "your choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "busy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.planeOne);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.planeTwo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.planeThree);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["section[_ngcontent-%COMP%] {\n  margin-top: 4em;\n  text-align: center;\n}\n\n.cabin[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 2em;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  align-content: center;\n}\n\n.cabin__sits[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cabin[_ngcontent-%COMP%]   .sit[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1em;\n}\n\n.cabin[_ngcontent-%COMP%]   div[id][_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 0.5em;\n  width: 2em;\n  height: 2em;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.cabin[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0 0.8em;\n  margin-top: 1em;\n  font-weight: 600;\n}\n\n.cabin[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.plane1[_ngcontent-%COMP%], .plane2[_ngcontent-%COMP%], .plane3[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 2em;\n}\n\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1em;\n  margin-bottom: 2em;\n}\n\n.legend__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 1em;\n}\n\n.legend[_ngcontent-%COMP%]   .grey[_ngcontent-%COMP%], .legend[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%], .legend[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 0.5em;\n  width: 1.5em;\n  height: 1.5em;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.legend[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  background-color: rgba(218, 31, 31, 0.5);\n}\n\n.legend[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  background-color: rgba(42, 144, 210, 0.5);\n}\n\n.legend[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n\n.clicked[_ngcontent-%COMP%] {\n  background: rgba(218, 31, 31, 0.5) !important;\n}\n\n.plane[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 2em;\n  width: 70%;\n  height: auto;\n}\n\n@media (min-width: 768px) {\n  .plane[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaXRzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFFQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUFIQTs7QUFLSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSFI7O0FBTUk7RUFDRyxrQkFBQTtFQUNBLGVBQUE7QUFKUDs7QUFRSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtBQU5SOztBQVNJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVBSOztBQVVJO0VBQ0ksYUFBQTtBQVJSOztBQWVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFaSjs7QUFlQTtFQUVJLGFBQUE7RUFDRixzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFiRjs7QUFlRTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFiTjs7QUFlSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQ0FBQTtBQWJSOztBQWdCSTtFQUNJLHdDQUFBO0FBZFI7O0FBaUJJO0VBQ0kseUNDckZhO0FEc0VyQjs7QUFrQkk7RUFDSSxpQkFBQTtBQWhCUjs7QUFzQkE7RUFDSSw2Q0FBQTtBQW5CSjs7QUF3Qkk7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFyQlI7O0FBc0JRO0VBSko7SUFNTyxVQUFBO0VBcEJUO0FBQ0YiLCJmaWxlIjoic2l0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy9zcmMvYXNzZXRzL21haW4uc2Nzcyc7XHJcblxyXG5cclxuc2VjdGlvbntcclxuICAgIG1hcmdpbi10b3A6IDRlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhYmlue1xyXG53aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG5wYWRkaW5nOiAyZW07IFxyXG5ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtd3JhcDogd3JhcDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICZfX3NpdHN7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXR7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRpdltpZF17XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMCAwLjVlbTtcclxuICAgICAgICB3aWR0aDogMmVtO1xyXG4gICAgICAgIGhlaWdodDogMmVtO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvd3tcclxuICAgICAgICBtYXJnaW46IDAgMC44ZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG5cclxuICBcclxuXHJcbn1cclxuXHJcbi5wbGFuZTEsIC5wbGFuZTIsIC5wbGFuZTN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcbn1cclxuXHJcbi5sZWdlbmR7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxuXHJcbiAgJl9fY29udGVudHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIH1cclxuICAgIC5ncmV5LCAucmVkLCAuYmx1ZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAuNWVtO1xyXG4gICAgICAgIHdpZHRoOiAxLjVlbTtcclxuICAgICAgICBoZWlnaHQ6IDEuNWVtO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOCwgMzEsIDMxLCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5ibHVle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRDb2xvckxpZ2h0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIH1cclxuXHJcbiAgXHJcbn1cclxuXHJcbi5jbGlja2Vke1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMTgsIDMxLCAzMSwgMC41KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnBsYW5le1xyXG4gICAgaW1ne1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCl7XHJcblxyXG4gICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufSIsIiRmb250OiAnSGVlYm8nLCBzYW5zLXNlcmlmO1xyXG4kbWFpbkNvbG9yOiByZ2JhKDIyNiwyMjYsMjI2LCAxKTtcclxuJHNlY29uZENvbG9yOiByZ2JhKDQyLDE0NCwgMjEwLCAxKTtcclxuJHNlY29uZENvbG9yTGlnaHRlcjogcmdiYSg0MiwgMTQ0LCAyMTAsIDAuNSk7XHJcbiRmb250Q29sb3I6IHJnYig2NiwgNjYsIDY2KTtcclxuXHJcblxyXG4kdGFibGV0OiA3NjhweDtcclxuJGxhcHRvcDogMTIwMHB4O1xyXG4kbW9uaXRvcjogMTQwMHB4OyJdfQ== */"] });


/***/ }),

/***/ "tyfE":
/*!***************************************!*\
  !*** ./src/app/page2/page2.module.ts ***!
  \***************************************/
/*! exports provided: Page2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Module", function() { return Page2Module; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_weather_widget_weather_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/weather-widget/weather-service.service */ "qcu2");
/* harmony import */ var _page2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page2-routing.module */ "elET");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary/summary.component */ "m/HS");
/* harmony import */ var _page1_page1_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page1/page1.module */ "Tul/");
/* harmony import */ var _page2_home_page2_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page2-home/page2-home.component */ "RLG4");
/* harmony import */ var _luggage_luggage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./luggage/luggage.component */ "98Sv");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _sits_sits_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sits/sits.component */ "thWA");
/* harmony import */ var _page2_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page2.service */ "WQOD");
/* harmony import */ var _shared_show_flight_show_flight_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/show-flight/show-flight.service */ "/cYP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class Page2Module {
}
Page2Module.ɵfac = function Page2Module_Factory(t) { return new (t || Page2Module)(); };
Page2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: Page2Module });
Page2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_page2_service__WEBPACK_IMPORTED_MODULE_9__["Page2Service"], _shared_show_flight_show_flight_service__WEBPACK_IMPORTED_MODULE_10__["ShowFlightService"], src_app_shared_weather_widget_weather_service_service__WEBPACK_IMPORTED_MODULE_1__["WeatherServiceService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _page2_routing_module__WEBPACK_IMPORTED_MODULE_2__["Page2RoutingModule"],
            _page1_page1_module__WEBPACK_IMPORTED_MODULE_4__["Page1Module"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](Page2Module, { declarations: [_page2_home_page2_home_component__WEBPACK_IMPORTED_MODULE_5__["Page2HomeComponent"],
        _luggage_luggage_component__WEBPACK_IMPORTED_MODULE_6__["LuggageComponent"],
        _sits_sits_component__WEBPACK_IMPORTED_MODULE_8__["SitsComponent"],
        _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__["SummaryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _page2_routing_module__WEBPACK_IMPORTED_MODULE_2__["Page2RoutingModule"],
        _page1_page1_module__WEBPACK_IMPORTED_MODULE_4__["Page1Module"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]], exports: [_sits_sits_component__WEBPACK_IMPORTED_MODULE_8__["SitsComponent"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page1_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page1/login/login.component */ "zbeZ");
/* harmony import */ var _page1_page1_home_page1_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page1/page1-home/page1-home.component */ "jefT");
/* harmony import */ var _page1_singup_singup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page1/singup/singup.component */ "TGdo");
/* harmony import */ var _page2_page2_home_page2_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page2/page2-home/page2-home.component */ "RLG4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _page1_page1_home_page1_home_component__WEBPACK_IMPORTED_MODULE_2__["Page1HomeComponent"] },
    { path: 'page2', component: _page2_page2_home_page2_home_component__WEBPACK_IMPORTED_MODULE_4__["Page2HomeComponent"] },
    { path: 'signup', component: _page1_singup_singup_component__WEBPACK_IMPORTED_MODULE_3__["SingupComponent"] },
    { path: 'login', component: _page1_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w6iL":
/*!**************************************************!*\
  !*** ./src/app/page1/scanner/scanner.service.ts ***!
  \**************************************************/
/*! exports provided: ScannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerService", function() { return ScannerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ScannerService {
    constructor() {
        this.userChoice = [];
    }
    addUserChoice(choice) {
        this.userChoice.pop();
        this.userChoice.push(choice);
    }
    getUserChoice() {
        return this.userChoice;
    }
}
ScannerService.ɵfac = function ScannerService_Factory(t) { return new (t || ScannerService)(); };
ScannerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScannerService, factory: ScannerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zbeZ":
/*!************************************************!*\
  !*** ./src/app/page1/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customvalidation.service */ "MqtW");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/button/button.component */ "sELr");








function LoginComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password should have minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(fb, customValidator, authService, router, el) {
        this.fb = fb;
        this.customValidator = customValidator;
        this.authService = authService;
        this.router = router;
        this.el = el;
        this.submitted = false;
        this.errorStat = false;
    }
    ngOnInit() {
        document.body.appendChild(this.el.nativeElement);
        this.registerForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.customValidator.patternValidator()])],
        });
    }
    ngOnDestroy() {
        this.el.nativeElement.remove();
    }
    get registerFormControl() {
        return this.registerForm.controls;
    }
    onLogin(email, password) {
        this.submitted = true;
        this.errorStat = true;
        if (this.registerForm.valid) {
            this.authService.login(email, password).subscribe((res) => {
                if (res.status === 200) {
                    this.customValidator.loggedIn();
                    this.router.navigate(['/']);
                    console.log(this.customValidator.loggedIn());
                }
            });
            this.reset();
        }
    }
    reset() {
        this.registerForm.reset({
            email: '',
            password: '',
        }),
            this.submitted = false;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customvalidation_service__WEBPACK_IMPORTED_MODULE_2__["CustomvalidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 6, consts: [[1, "card"], [1, "card__body"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "email", "placeholder", "Email", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "Password", 1, "form-control"], [1, "form-group", "button"], ["id", "noExist", 3, "ngClass"], ["routerLink", "/signup"], [1, "text-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.onLogin(ctx.registerFormControl.email.value, ctx.registerFormControl.password.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LoginComponent_span_7_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LoginComponent_span_8_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_span_11_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_span_12_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "app-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Your email doesn't exist in out database. Please sing up! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.registerFormControl.email.errors == null ? null : ctx.registerFormControl.email.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.registerFormControl.email.errors == null ? null : ctx.registerFormControl.email.errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.registerFormControl.password.errors == null ? null : ctx.registerFormControl.password.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.registerFormControl.password.errors == null ? null : ctx.registerFormControl.password.errors.invalidPassword));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !ctx.errorStat ? "hidden" : "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 2em;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding-bottom: 0.5em;\n  width: 50%;\n}\n.card__body[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: 2em;\n  background: #e2e2e2;\n  padding: 2em;\n}\n@media (min-width: 768px) {\n  .card__body[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n.card[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 1em;\n}\n.card[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 70%;\n  border: none;\n  padding: 0.5em;\n}\n.card[_ngcontent-%COMP%]   .text-danger[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  color: red;\n  font-size: 0.7rem;\n  text-align: center;\n}\n.card[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.card[_ngcontent-%COMP%]   .visible[_ngcontent-%COMP%] {\n  visibility: visible;\n  margin-top: 1em;\n}\n.card[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n#noExist[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXG1haW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBREo7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFESjtBQUlBO0VBQ0ksVUFBQTtFQUNELGVBQUE7RUFDQyxtQkNsQlE7RURtQlIsWUFBQTtBQUZKO0FBSUk7RUFOSjtJQU9RLFVBQUE7RUFETjtBQUNGO0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUZKO0FBTUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFKSjtBQU9BO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTEo7QUFRQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTko7QUFTQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQVBKO0FBVUE7RUFDSSxrQkFBQTtBQVJKO0FBYUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQVZKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnL3NyYy9hc3NldHMvbWFpbi5zY3NzJztcclxuXHJcbi5jYXJke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tdG9wOiAyZW07XHJcblxyXG5oM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4mX19ib2R5e1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgYmFja2dyb3VuZDogJG1haW5Db2xvcjtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldCl7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFlbTtcclxuICAgXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2x7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlcntcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnZpc2libGV7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcblxyXG4uaGlkZGVue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcblxyXG59XHJcblxyXG4jbm9FeGlzdHtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuIiwiJGZvbnQ6ICdIZWVibycsIHNhbnMtc2VyaWY7XHJcbiRtYWluQ29sb3I6IHJnYmEoMjI2LDIyNiwyMjYsIDEpO1xyXG4kc2Vjb25kQ29sb3I6IHJnYmEoNDIsMTQ0LCAyMTAsIDEpO1xyXG4kc2Vjb25kQ29sb3JMaWdodGVyOiByZ2JhKDQyLCAxNDQsIDIxMCwgMC41KTtcclxuJGZvbnRDb2xvcjogcmdiKDY2LCA2NiwgNjYpO1xyXG5cclxuXHJcbiR0YWJsZXQ6IDc2OHB4O1xyXG4kbGFwdG9wOiAxMjAwcHg7XHJcbiRtb25pdG9yOiAxNDAwcHg7Il19 */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map