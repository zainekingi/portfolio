webpackJsonp([1,4],{

/***/ 382:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 382;


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(503);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/zainekingi/Applications/WebApps/zk-design/ng-src/src/main.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(675),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/zainekingi/Applications/WebApps/zk-design/ng-src/src/app.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_work_work_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_contact_contact_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_work_tcs_tcs_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_work_school_list_school_list_component__ = __webpack_require__(509);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














// Application routes array.
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'work', component: __WEBPACK_IMPORTED_MODULE_9__components_work_work_component__["a" /* WorkComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_10__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'work/tcs', component: __WEBPACK_IMPORTED_MODULE_12__components_work_tcs_tcs_component__["a" /* TcsComponent */] },
    { path: 'work/school-list', component: __WEBPACK_IMPORTED_MODULE_13__components_work_school_list_school_list_component__["a" /* SchoolListComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_work_work_component__["a" /* WorkComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_work_tcs_tcs_component__["a" /* TcsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_work_school_list_school_list_component__["a" /* SchoolListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/zainekingi/Applications/WebApps/zk-design/ng-src/src/app.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(676),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/Users/zainekingi/Applications/WebApps/zk-design/ng-src/src/about.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
        var vpH = window.innerHeight;
        this.height = vpH;
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__(677),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=/Users/zainekingi/Applications/WebApps/zk-design/ng-src/src/contact.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(678),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/zainekingi/Applications/WebApps/zk-design/ng-src/src/footer.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        var vpH = window.innerHeight;
        this.height = vpH;
        this.btn = document.getElementById('dwnBtn');
        this.btn.addEventListener('click', function () {
            var c = 0;
            var h = window.innerHeight;
            var fn = setInterval(function () {
                if (c < h) {
                    c++;
                    window.scrollTo(0, c);
                }
                else {
                    clearInterval(fn);
                }
            }, 1);
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(679),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/zainekingi/Applications/WebApps/zk-design/ng-src/src/home.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var ham = document.getElementsByClassName('ham')[0];
        var navLnks = document.getElementsByClassName('nav')[0];
        var count = 75;
        var isOpen;
        var vpWidth = window.innerWidth;
        window.addEventListener('resize', function () {
            vpWidth = window.innerWidth;
        });
        ham.addEventListener('click', toggleNav);
        function toggleNav() {
            if (!isOpen) {
                var openFn = setInterval(function () {
                    if (vpWidth > 768) {
                        if (count !== 200) {
                            openNavDesk(navLnks);
                        }
                        else {
                            clearInterval(openFn);
                        }
                    }
                    else {
                        if (count !== 200) {
                            openNavMob(navLnks);
                        }
                        else {
                            clearInterval(openFn);
                        }
                    }
                }, 1);
                isOpen = true;
            }
            else {
                var closeFn = setInterval(function () {
                    if (vpWidth > 768) {
                        if (count > 75) {
                            closeNavDesk(navLnks);
                        }
                        else {
                            clearInterval(closeFn);
                        }
                    }
                    else {
                        if (count > 50) {
                            closeNavMob(navLnks);
                        }
                        else {
                            clearInterval(closeFn);
                        }
                    }
                }, 1);
                isOpen = false;
            }
        }
        function openNavDesk(ele) {
            count++;
            ele.style.height = '100%';
            ele.style.width = count + 'px';
        }
        function closeNavDesk(ele) {
            count--;
            ele.style.width = count + 'px';
        }
        function openNavMob(ele) {
            count++;
            ele.style.height = count + 'px';
            ele.style.width = '100%';
        }
        function closeNavMob(ele) {
            count--;
            ele.style.height = count + 'px';
        }
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(680),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=/Users/zainekingi/Applications/WebApps/zk-design/ng-src/src/navbar.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SchoolListComponent = (function () {
    function SchoolListComponent() {
    }
    SchoolListComponent.prototype.ngOnInit = function () {
    };
    SchoolListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-school-list',
            template: __webpack_require__(681),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [])
    ], SchoolListComponent);
    return SchoolListComponent;
}());
//# sourceMappingURL=/Users/zainekingi/Applications/WebApps/zk-design/ng-src/src/school-list.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TcsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// declare var initSlider: any;
var TcsComponent = (function () {
    function TcsComponent() {
    }
    TcsComponent.prototype.ngOnInit = function () {
        // initSlider('slider');
    };
    TcsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-tcs',
            template: __webpack_require__(682),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [])
    ], TcsComponent);
    return TcsComponent;
}());
//# sourceMappingURL=/Users/zainekingi/Applications/WebApps/zk-design/ng-src/src/tcs.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkComponent = (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () { };
    WorkComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-work',
            template: __webpack_require__(683),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], WorkComponent);
    return WorkComponent;
}());
//# sourceMappingURL=/Users/zainekingi/Applications/WebApps/zk-design/ng-src/src/work.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/zainekingi/Applications/WebApps/zk-design/ng-src/src/environment.js.map

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "#contact-form {\n  padding: 25px;\n}\n.form-group {\n  position: relative;\n}\n.form-control {\n  border-radius: 0;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n}\nlabel, input, textarea {\n  display: inline;\n}\nlabel {\n  position: absolute;\n  bottom: 30px;\n}\nlabel[for=\"message\"] {\n  bottom: 35px;\n}\ninput, textarea {\n  width: 100%;\n  background: #1e1e1e;\n  border: none;\n  border-bottom: 1px solid #ffffff;\n  padding-left: 100px;\n  margin: 0 auto 25px;\n  color: #ffffff;\n}\n#map {\n  position: absolute;\n  z-index: -100;\n  height: 500px;\n  width: 100%;\n  background: grey;\n}\n\n"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "footer {\n  display: block;\n  border-top: 1px solid #1e1e1e;\n  width: 100%;\n  margin: 50px 0 0;\n  padding: 15px 0;\n  text-align: center;\n  color: #1e1e1e;\n}\nfooter span {\n  width: 70%;\n  margin: 30px auto 15px;\n}\nfooter span a {\n  margin-right: 15%;\n}\nfooter span a:nth-of-type(4) {\n  margin-right: 0;\n}\nfooter img {\n  height: 25px;\n}\nfooter div {\n  margin-top: 15px;\n}\n\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "/* Main content styling */\n\n\n\n/* Meida queries - 768px up */\n@media screen and (min-width: 768px) {\n\n}\n\n/* Media query - 988px up */\n@media screen and (min-width: 988px) {\n\n}\n\n\n"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "/* =======================================================\n    FILE:   NAVBAR.COMPONENT.CSS\n    AUTHOR: Zaine Kingi\n    VER:    1.0\n    DATE:   13-7-17\n    DESC:   Navbar component stylesheet for the application.\n    ......................................................\n            CHANGE LOG\n    ------------------------------------------------------\n    DATE:   VER:    CHANGES:\n    ------------------------------------------------------\n    13-7-17 1.0     Initial release.\n    ---------------------------------------------------- */\n\n/* Mobile first styling */\n\n/* Base styling */\nnav {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 40px;\n  padding: 5px 10px;\n  margin: 0;\n  background: #000;\n}\n.navbar-head {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #000;\n  height: 40px;\n  width: 100%;\n  margin: 0;\n  border: none;\n}\n.nav-logo {\n  display: block;\n  height: 40px;\n  padding-top: 5px;\n}\n.ham {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 5px 10px;\n  cursor: pointer;\n  background: none;\n  border-radius: 4px;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  -o-border-radius: 4px;\n  transition: background .2s ease-in-out;\n  -webkit-transition: background .2s ease-in-out;\n  -moz-transition: background .2s ease-in-out;\n  -o-transition: background .2s ease-in-out;\n}\n.ham:hover {\n  background: #1e1e1e;\n}\n.navbar-icon {\n  display: block;\n  width: 25px;\n  border-top: 3px solid yellow;\n  margin: 5px 0;\n  border-radius: 5px;\n}\n\n/* Navbar links */\n.nav {\n  background: #000000;\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  top: 0px;\n  left: 0;\n  z-index: -1000;\n  padding: 0;\n  margin: 0;\n}\n.nav-items {\n  display: block;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100px;\n  text-align: right;\n  overflow: hidden;\n}\n.nav-items li {\n  display: block;\n  width: 100%;\n  background: none;\n  transition: background .2s ease-in-out;\n  -webkit-transition: background .2s ease-in-out;\n  -moz-transition: background .2s ease-in-out;\n  -o-transition: background .2s ease-in-out;\n}\n.nav-items li:hover {\n  background: #1e1e1e;\n}\n.nav-items li a {\n  display: block;\n  padding-right: 15px;\n  color: yellow;\n  font-family: \"Avenir\", 'Open Sans', arial, sans-serif;\n  text-decoration: none;\n  font-size: 1.5rem;\n  font-weight: lighter;\n  line-height: 2.2rem;\n  text-transform: none;\n}\n\n@media screen and (min-width: 768px) {\n  nav {\n    width: 75px;\n    height: 100%;\n    background: #1e1e1e;\n    top: 0;\n    left: 0;\n    text-align: left;\n    padding: 0;\n  }\n  .navbar-head {\n    background: #1e1e1e;\n    position: relative;\n    height: 100%;\n    width: 75px;\n  }\n  .nav-logo {\n    margin: 15px 20px;\n  }\n  .ham {\n    top: 50%;\n    left: 15%;\n    height: 35px;\n    padding-top: 17px;\n  }\n  .ham:hover {\n    background: #000000;\n  }\n  .navbar-icon {\n    margin-top: 0;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n  }\n  .ham li:nth-child(2) {\n    margin-top: -8px;\n  }\n  .ham li:nth-child(1) {\n    margin-left: 10px;\n  }\n\n  /* navbar links */\n  .nav {\n    background: #1e1e1e;\n    width: 75px;\n    height: 100%;\n  }\n  .nav-items {\n    top: 50%;\n    right: 10px;\n  }\n  .nav-items li a {\n    padding: 0;\n    margin: 0;\n  }\n  .active {\n    color: #fff;\n    background: #000;\n  }\n}\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"top-section col-sm-12 black\">\n    <div class=\"heading font-light text-yellow font-italic\">About me.</div>\n  </div><!-- /.top-section -->\n\n  <!-- Small intro about myself -->\n  <div class=\"section charcoal pad-35 overlay-25 col-sm-12 col-md-6\">\n    <div class=\"container\">\n      <span class=\"quote text-yellow\">People will forget what you said, and what you did, but will never forget the way you made them feel.</span>\n      <div class=\"credits text-yellow\"><span class=\"text-right font-light font-italic\">Maya Angelou</span></div>\n    </div>\n  </div><!-- /.section -->\n\n  <div class=\"section col-sm-12\">\n    <div class=\"col-sm-6 portrait\">\n      <img src=\"../../../assets/imgs/me.png\" srcset=\"../../../assets/imgs/me.png 1x, ../../../assets/imgs/me@2x.png 2x, ../../../assets/imgs/me@3x.png 3x\" alt=\"The happy UXer\" title=\"The happy UXer\">\n    </div>\n    <div class=\"col-sm-6\">\n      <span class=\"content-border border-char\"></span><!-- Paragraph text top border -->\n      <span class=\"font-light font-1-7\">\n        <p>Hey there, <span class=\"font-italic font-bold\">I'm Zaine</span> an illustrator, designer and web developer with the skill set and talent to produce meaningful and engaging digital experiences. In my works I always try to combine aesthetic with functional aspects, looking for the right balance to communicate without annoying.</p>\n        <p>Successful design in my opinion should be attractive yet easy to read, communicate a fascinating message, together with an immediate understanding.</p>\n        <p class=\"font-2-2 mar-top-25\">Qualifications</p>\n        <ul>\n          <li class=\"list\">Bachelor of Applied Science<br><span class=\"font-italic font-1-3\">completed 2014 at Yoobee School of Design and The Open Polytechnic New Zealand.</span></li>\n          <li class=\"list\">Level 6 Diploma in Web Development<br><span class=\"font-italic font-1-3\">completed 2012 at Natcoll Design Technology.</span></li>\n          <li class=\"list\">Level 6 Diploma in Computer Graphic Design<br><span class=\"font-italic font-1-3\">completed 2011 at Natcoll Design Technology.</span></li>\n          <li class=\"list\">Level 3 Certificate in Digital Media<br><span class=\"font-italic font-1-3\">completed 2010 at Natcoll Design Technology.</span></li>\n        </ul>\n      </span>\n    </div>\n  </div>\n\n  <!-- My skills section -->\n  <div class=\"section col-sm-12\">\n    <div class=\"section-heading\"><h2>Skills & experience.</h2></div>\n    <ul class=\"container\">\n      <li class=\"skill-item col-sm-12 col-md-4\">\n        <img src=\"../../../assets/imgs/icons/html-icon.png\" srcset=\"../../../assets/imgs/icons/html-icon.png 1x, ../../../assets/imgs/icons/html-icon@2x.png 2x, ../../../assets/imgs/icons/html-icon@3x.png 3x\" alt=\"HTML skills\" class=\"skill-icn\">\n        <h3>HTML</h3>\n        <p>I am fluent and confident in writing compliant HTML and HTML5 standard code from scratch. I was first introduced to HTML in 2010 and have been practicing and expanding my knowledge since.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </li>\n      <li class=\"skill-item col-sm-12 col-md-4\">\n        <img src=\"../../../assets/imgs/icons/css-icon.png\" srcset=\"../../../assets/imgs/icons/css-icon.png 1x, ../../../assets/imgs/icons/css-icon@2x.png 2x, ../../../assets/imgs/icons/css-icon@3x.png 3x\" alt=\"CSS skills\" class=\"skill-icn\">\n        <h3>CSS</h3>\n        <p>First introduced to basic CSS in 2010, I am fluent in writing complient CSS and CSS3 and have since been practicing and building my knowledge and understanding and often reflect on my code and think how I can refactor and do it better next in future.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </li>\n      <li class=\"skill-item col-sm-12 col-md-4\">\n        <img src=\"../../../assets/imgs/icons/js-icon.png\" srcset=\"../../../assets/imgs/icons/js-icon.png 1x, ../../../assets/imgs/icons/js-icon@2x.png 2x, ../../../assets/imgs/icons/js-icon@3x.png 3x\" alt=\"JavaScript skills\" class=\"skill-icn\">\n        <h3>JavaScript</h3>\n        <p>First exposed to the JavaScript programming language in 2010, I am confident in writing vanilla JavaScript ( ES4 - 6 ) from scratch and is my preferred approach and am an active member in the JavaScript community in my home town of Auckland.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </li>\n      <li class=\"skill-item col-sm-12 col-md-4\">\n        <img src=\"../../../assets/imgs/icons/ng-icon.png\" srcset=\"../../../assets/imgs/icons/ng-icon.png 1x, ../../../assets/imgs/icons/ng-icon@2x.png 2x, ../../../assets/imgs/icons/ng-icon@3x.png 3x\" alt=\"NodeJS skills\" class=\"skill-icn\">\n        <h3>AngularJS</h3>\n        <p>AngularJS was one of the JavaScript frontend frameworks I decided to learn in 2015 as part of my development workflow. I am currently familiarising myself with the latest release (Angular2) and am enjoying the challenge.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </li>\n      <li class=\"skill-item col-sm-12 col-md-4\">\n        <img src=\"../../../assets/imgs/icons/node-icon.png\" srcset=\"../../../assets/imgs/icons/node-icon.png 1x, ../../../assets/imgs/icons/node-icon@2x.png 2x, ../../../assets/imgs/icons/node-icon@3x.png 3x\" alt=\"NodeJS skills\" class=\"skill-icn\">\n        <h3>NodeJS</h3>\n        <p>First introduced to the backend JavaScript framework in 2015, NodeJS has become an integral part of my development environment and has provided exposure to a whole new eco-system of JavaScript libraries and development process - developing in an API first approach.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </li>\n      <li class=\"skill-item col-sm-12 col-md-4\">\n        <img src=\"../../../assets/imgs/icons/design-icon.png\" srcset=\"../../../assets/imgs/icons/design-icon.png 1x, ../../../assets/imgs/icons/design-icon@2x.png 2x, ../../../assets/imgs/icons/design-icon@3x.png 3x\" alt=\"Design skills\" class=\"skill-icn\">\n        <h3>Design</h3>\n        <p>Fluent with the Adobe application stack including Photoshop, Illustrator, inDesign and prototyping with applications such as inVison. Greater understanding, knowledge and importance of the design process, design principles and application of them in all aspects of my work.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </li>\n    </ul>\n  </div>\n  <!-- END: My skills section -->\n\n  <!-- Experience -->\n  <div class=\"section pad-35 black col-sm-12\">\n    <div class=\"text-white font-light font-italic font-2\"> ~ Work experience.</div>\n    <ul class=\"mar-top-25 col-sm-6\">\n      <li class=\"text-white font-light list\">UX / Digital Designer @ The Warehouse Group<br><span class=\"font-italic font-light\">currently</span></li>\n      <li class=\"text-white font-light list\">Frontend Developer & Team trainer @ The Warehouse<br><span class=\"font-italic font-light\">Jul - Nov 2016</span></li>\n      <li class=\"text-white font-light list\">Webstore Specialist / Frontend Developer @ Warehouse Stationery<br><span class=\"font-italic font-light\">Nov 2014 - Jul 2016</span></li>\n      <li class=\"text-white font-light list\">Frontend Developer @ Kiteflyr<br><span class=\"font-italic font-light\">Jul - Nov 2014 </span></li>\n    </ul>\n    <div class=\"col-sm-12 col-md-6 logo-container\" id=\"logo\">\n      <img src=\"../../../assets/imgs/logos/twg-logo.png\" srcset=\"../../../assets/imgs/logos/twg-logo.png 1x, ../../../assets/imgs/logos/twg-logo@2x.png 2x, ../../../assets/imgs/logos/twg-logo@3x.png 3x\" alt=\"The Warehouse Group\" title=\"The Warehouse Group\" class=\"company-logo\">\n      <img src=\"../../../assets/imgs/logos/twl-cheron.png\" srcset=\"../../../assets/imgs/logos/twl-cheron.png 1x, ../../../assets/imgs/logos/twl-cheron@2x.png 2x, ../../../assets/imgs/logos/twl-cheron@3x.png 3x\" alt=\"The Warehouse\" title=\"The Warehouse\" class=\"company-logo\">\n      <img src=\"../../../assets/imgs/logos/wsl-logo.png\" srcset=\"../../../assets/imgs/logos/wsl-logo.png 1x, ../../../assets/imgs/logos/wsl-logo@2x.png 2x, ../../../assets/imgs/logos/wsl-logo@3x.png 3x\" alt=\"Warehouse Stationery\" title=\"Warehouse Stationery\" class=\"company-logo\">\n      <img src=\"../../../assets/imgs/logos/kiteflyr-logo.png\" srcset=\"../../../assets/imgs/logos/kiteflyr-logo.png 1x, ../../../assets/imgs/logos/kiteflyr-logo@2x.png 2x, ../../../assets/imgs/logos/kiteflyr-logo@3x.png 3x\" alt=\"Kiteflyr\" title=\"Kiteflyr\" class=\"company-logo\">\n    </div>\n  </div>\n\n  <div class=\"section pad-35 charcoal col-sm-12 col-md-6\">\n    <div class=\"text-white font-light font-italic font-2 text-indent-15\"> ~ Recommendation.</div>\n    <div class=\"container text-white font-light mar-top-25\">\n      <span class=\"content-border border-white\"></span><!-- Paragraph text top border -->\n      <p>I am the Head of the Web and Interactive Department at Natcoll. I worked with Zaine Kingi for 10 months as his tutor for the Diploma of Web Development program. Zaine demonstrated great commitment and talent during his course.</p>\n      <p>Zaine is an independent learner, who works well both on his own and as a team member. He is able to assimilate many new skills and concepts very quickly. The high standards of his projects and excellent attention to detail are very good proof of his skills.</p>\n      <p>Zaine has very strong work ethic. He has demonstrated great commitment to his tasks and the people around him. Zaine is friendily and approachable, which makes him a pleasure to work with.</p>\n      <div class=\"credits text-yellow\"><span class=\"text-right font-light font-italic\">Trung Ly - Head of Web and Interactive Department<br>Yoobee School of Design</span></div>\n    </div>\n  </div>\n  <div class=\"section pad-35 col-sm-12 col-md-6\">\n    <div class=\"font-light font-italic font-2 text-indent-15\"> ~ Recommendation.</div>\n    <div class=\"container text-char font-light mar-top-25\">\n      <span class=\"content-border border-char\"></span><!-- Paragraph text top border -->\n      <p>I am writting to support Zaine in this reference letter though deeply saddened to have him leave us. I would like to support Zaine as best I can, because of who he is as a person and what he has contributed.</p>\n      <p>Zaine has been with Natcoll since 2010, a student of my Computer Graphic Design class. Zaine made a very positive contribution to the programme. He is talented and serious about his work, he will be a great contribution to any positive work environment.</p>\n      <p>It is with regret that he will leave us but I would be open to support and recommend him to any company or institution considering his application. He was a valuable asset to Natcoll throughout his time here. Zaine will be sincerely missed.</p>\n      <div class=\"credits\"><span class=\"text-right font-light font-italic\">Ivan Voo - Computer Graphic Design Tutor<br>Yoobee School of Design</span></div>\n    </div>\n  </div>\n\n</div><!-- /.main-container -->\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"top-section col-sm-12 black\">\n    <div class=\"heading font-light text-yellow font-italic\">Contact me.</div>\n  </div><!-- /.top-section -->\n\n  <!-- Contact form -->\n  <div class=\"section charcoal overlay-25 col-sm-12 col-md-8 col-md-push-4\">\n    <form id=\"contact-form\">\n      <div class=\"form-group\">\n        <label for=\"name\" class=\"text-white font-light\">Name</label>\n        <input type=\"text\" name=\"name\" ng-model=\"name\" id=\"name\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\" class=\"text-white font-light\">Email</label>\n        <input type=\"text\" name=\"email\" ng-model=\"email\" id=\"email\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"message\" class=\"text-white font-light\">Message</label>\n        <textarea name=\"message\" id=\"message\" cols=\"30\" rows=\"1\" ng-model=\"message\" class=\"form-control\"></textarea>\n      </div>\n      <button class=\"zk-btn zk-btn-prim-inverse\">Get in touch</button>\n    </form>\n  </div>\n\n  <!-- Map -->\n  <!--<div id=\"map\" class=\"clear\" [style.top] = \"height/2 + 'px'\"></div>-->\n\n  <!-- More details -->\n  <div class=\"section col-sm-12 col-md-8 col-md-push-4 pad-35\">\n    <!-- Office location -->\n    <div class=\"col-sm-12 col-md-6 text-center\">\n      <img src=\"../../../assets/imgs/icons/location-icon.png\" srcset=\"../../../assets/imgs/icons/location-icon.png 1x, ../../../assets/imgs/icons/location-icon@2x.png 2x, ../../../assets/imgs/icons/location-icon@3x.png 3x\" alt=\"Office location\" class=\"icon\">\n      <h2>Office.</h2>\n      <p>\n        26 The Warehouse Way,<br>\n        Northcote,<br>\n        Auckland, 0629<br>\n        New Zealand\n      </p>\n    </div><!-- END: office details -->\n\n    <!-- Phone numbers -->\n    <div class=\"col-sm-12 col-md-6 text-center\">\n      <img src=\"../../../assets/imgs/icons/phone-icon.png\" srcset=\"../../../assets/imgs/icons/phone-icon.png 1x, ../../../assets/imgs/icons/phone-icon@2x.png 2x, ../../../assets/imgs/icons/phone-icon@3x.png 3x\" alt=\"Contact phone numbers\" class=\"icon\">\n      <h2>Drop us a line.</h2>\n      <p>\n        Office - +649 489-8900 ext. 96677<br>\n        Mobile - +6421-897337<br>\n      </p>\n    </div><!-- END: office details -->\n\n  </div><!-- END: more details section. -->\n</div><!-- /.main-container -->\n\n\n<script type=\"text/javascript\">\n  function initMap() {\n    var uluru = {lat: -25.363, lng: 131.044};\n    var map = new google.maps.Map(document.getElementById('map'), {\n      zoom: 4,\n      center: uluru\n    });\n    var marker = new google.maps.Marker({\n      position: uluru,\n      map: map\n    });\n  }\n</script>\n\n<!-- Google Maps API -->\n<script async defer src=\"https://maps.googleapis.com/maps/api/js?key=js?key=AIzaSyBWXNxa3yaYwz3DLJDLVkGvg1fuYGT1F7Q&callback=initMap\"></script>\n"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <span>\n    <a href=\"\"><img src=\"../../../assets/imgs/icons/linkedin-icon.png\" srcset=\"../../../assets/imgs/icons/linkedin-icon.png 1x, ../../../assets/imgs/icons/linkedin-icon@2x.png 2x, ../../../assets/imgs/icons/linkedin-icon@3x.png 3x\" alt=\"LinkedIn\"></a>\n    <a href=\"\"><img src=\"../../../assets/imgs/icons/fb-icon.png\" srcset=\"../../../assets/imgs/icons/fb-icon.png 1x, ../../../assets/imgs/icons/fb-icon@2x.png 2x, ../../../assets/imgs/icons/fb-icon@3x.png 3x\" alt=\"facebook\"></a>\n    <a href=\"\"><img src=\"../../../assets/imgs/icons/twitter-icon.png\" srcset=\"../../../assets/imgs/icons/twitter-icon.png 1x, ../../../assets/imgs/icons/twitter-icon@2x.png 2x, ../../../assets/imgs/icons/twitter-icon@3x.png 3x\" alt=\"twitter\"></a>\n    <a href=\"\"><img src=\"../../../assets/imgs/icons/pintrest-icon.png\" srcset=\"../../../assets/imgs/icons/pintrest-icon.png 1x, ../../../assets/imgs/icons/pintrest-icon@2x.png 2x, ../../../assets/imgs/icons/pintrest-icon@3x.png 3x\" alt=\"pintrest\"></a>\n  </span>\n\n  <div>&copy; Zaine Kingi 2017</div>\n</footer>\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <!-- Large image -->\n  <div class=\"hero-img-container rose-img-bg parallax\" [style.height]=\"height + 'px'\">\n    <span class=\"img-overlay\" [style.height]=\"height + 'px'\">\n      <div class=\"hero-text text-center text-v-middle text-h-middle pad-35\">\n        <h1 class=\"text-white\">\n         Zaine Kingi.\n        </h1>\n        <hr class=\"hr\">\n        <div class=\"font-light font-2 line-2-5 text-white mar-top-25\">A digital designer based in Auckland New Zealand with a solid foundation in HTML, CSS, JavaScript and a keen eye for detail and creating unique and engaging experiences.</div>\n        <div class=\"text-center mar-top-25\"><i class=\"glyphicon glyphicon-menu-down scroll-y\" id=\"dwnBtn\"></i></div>\n      </div><!-- END: Hero text -->\n    </span>\n  </div><!-- END: Hero image -->\n\n  <!-- My skills section -->\n  <div class=\"section col-sm-12\">\n    <div class=\"section-heading\"><h2>What I do</h2></div>\n    <ul class=\"container\">\n      <li class=\"skill-item col-sm-12 col-md-4\">\n        <img src=\"../../../assets/imgs/icons/collaboration.png\" srcset=\"../../../assets/imgs/icons/collaboration.png 1x, ../../../assets/imgs/icons/collaboration@2x.png 2x, ../../../assets/imgs/icons/collaboration@3x.png 3x\" alt=\"Collaboration/Agile\" class=\"skill-icn\">\n        <h3>Collaborate</h3>\n        <p>Working in an Agile environment, collaboration within small SCRUM teams is something I practice on a daily basis and feel is a valuable skill to posses which is best obtained from experience.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </li>\n      <li class=\"skill-item col-sm-12 col-md-4\">\n        <img src=\"../../../assets/imgs/icons/design-icon.png\" srcset=\"../../../assets/imgs/icons/design-icon.png 1x, ../../../assets/imgs/icons/design-icon@2x.png 2x, ../../../assets/imgs/icons/design-icon@3x.png 3x\" alt=\"Design\" class=\"skill-icn\">\n        <h3>Design</h3>\n        <p>Creating experiences that are meaningful and engaging yet reducing complexity for the end users is the approach I take every time I attempt to design or solve a problem with design. It helps keep the user at the forefront of all my design decisions and ensures the end result has a positive impact on viewer or end user.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </li>\n      <li class=\"skill-item col-sm-12 col-md-4\">\n        <img src=\"../../../assets/imgs/icons/code-icon.png\" srcset=\"../../../assets/imgs/icons/code-icon.png 1x, ../../../assets/imgs/icons/code-icon@2x.png 2x, ../../../assets/imgs/icons/code-icon@3x.png 3x\" alt=\"Development\" class=\"skill-icn\">\n        <h3>Code</h3>\n        <p>I enjoyed the versatility and accessibility of working with the web, the fast paced and ever changing nature of the internet and the variety of tools available. I have the ability to pick up and learn new skills, concepts and programming languages fairly well, and am able to incorprate these skills into all aspects of my work, not just Web.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </li>\n    </ul><!-- /.skills -->\n  </div>\n</div><!-- /.main-container -->\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"navbar navbar-head\">\n    <a [routerLink] = \"['/']\"><img src=\"../../../assets/imgs/zk-logo/zk-logo.png\" alt=\"logo\" class=\"nav-logo\"></a>\n    <ul class=\"ham\">\n      <li><span class=\"navbar-icon\"></span></li>\n      <li><span class=\"navbar-icon\"></span></li>\n    </ul>\n  </div>\n  <div class=\"nav\">\n    <ul class=\"nav-items\">\n      <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink] = \"['/']\">Start here.</a></li>\n      <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink] = \"['/about']\">About me.</a></li>\n      <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink] = \"['/work']\">Work.</a></li>\n      <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink] = \"['/contact']\">Contact me.</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"top-section col-sm-12\">\n  </div><!-- /.top-section -->\n\n  <div class=\"section\">\n    <div class=\"col-sm-12 col-md-6\">\n      <div class=\"heading font-light font-italic\"><h1>School List Management Prototype</h1></div>\n      <div class=\"wrk-title font-2-5 font-light mar-top-50\">Problem</div>\n      <p class=\"mar-top-10\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n      <span class=\"content-border border-char border-right\"></span>\n    </div><!-- END: text container -->\n\n    <div class=\"col-sm-12 col-md-6 img-container text-center\">\n      <img src=\"../../../assets/imgs/work/school-list/school-list.png\" srcset=\"../../../assets/imgs/work/school-list/school-list.png 1x, ../../../assets/imgs/work/school-list/school-list@2x.png 2x, ../../../assets/imgs/work/school-list/school-list@3x.png 3x\" alt=\"Warehouse Stationery School list management prototype.\">\n    </div><!-- /.img-container -->\n  </div><!-- /.problem -->\n\n  <!-- Work component - black -->\n  <div class=\"wrk-component col-sm-12 users-bg parallax\">\n    <span class=\"img-overlay\">\n      <div class=\"wrk-text col-sm-12 col-md-6 text-white\">\n        <div class=\"wrk-title font-2-5 font-light\">The Users</div>\n        <p class=\"mar-top-10\">Timber Construction Solutions often competes with businesses local and internationally for private and public building and housing project contracts in countries all around the world. The majority of the clients users are often from a corporate and/or government agency who use the website to gain insights into the company and aid in assessing their credibility and capabilities.</p>\n        <span class=\"content-border border-white border-right\"></span>\n      </div><!-- END: text container -->\n    </span><!-- /.img-overlay -->\n  </div><!-- END: Work component - background image -->\n\n  <!-- Work component -->\n  <div class=\"wrk-component col-sm-12 black\">\n    <div class=\"wrk-text text-white col-sm-12 col-md-6\">\n      <div class=\"wrk-title font-2-5 font-light\">Process</div>\n      <p class=\"mar-top-10\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n      <span class=\"content-border border-white border-right\"></span>\n    </div><!-- END: text-container -->\n\n    <div class=\"col-sm-12 col-md-6 img-container text-center\">\n      <img src=\"../../../assets/imgs/wireframes.jpg\" srcset=\"../../../assets/imgs/wireframes.jpg 1x, ../../../assets/imgs/wireframes@2x.jpg 2x, ../../../assets/imgs/wireframes@3x.jpg 3x\" alt=\"Website wireframes and prototyping.\">\n    </div><!-- /.img-container -->\n  </div><!-- END: Work component -->\n\n  <!-- Work component -->\n  <div class=\"wrk-component col-sm-12\">\n    <div class=\"col-sm-12 col-md-6 img-container text-center\">\n      <div id=\"slider\">\n        <img src=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg\" srcset=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg 1x, ../../../assets/imgs/work/tcs/tcs-homepage@2x.jpg 2x, ../../../assets/imgs/work/tcs/tcs-homepage@3x.jpg 3x\" alt=\"Timber Construction Solutions website design.\">\n        <img src=\"../../../assets/imgs/work/tcs/tcs-design.jpg\" srcset=\"../../../assets/imgs/work/tcs/tcs-design.jpg 1x, ../../../assets/imgs/work/tcs/tcs-design@2x.jpg 2x, ../../../assets/imgs/work/tcs/tcs-design@3x.jpg 3x\" alt=\"Timber Construction Solution Design process.\">\n        <img src=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg\" srcset=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg 1x, ../../../assets/imgs/work/tcs/tcs-homepage@2x.jpg 2x, ../../../assets/imgs/work/tcs/tcs-homepage@3x.jpg 3x\" alt=\"Timber Construction Solutions website design.\">\n        <img src=\"../../../assets/imgs/work/school-list/school-list.png\" srcset=\"../../../assets/imgs/work/school-list/school-list.png 1x, ../../../assets/imgs/work/school-list/school-list@2x.png 2x, ../../../assets/imgs/work/school-list/school-list@3x.png 3x\" alt=\"School list management prototype\">\n        <img src=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg\" srcset=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg 1x, ../../../assets/imgs/work/tcs/tcs-homepage@2x.jpg 2x, ../../../assets/imgs/work/tcs/tcs-homepage@3x.jpg 3x\" alt=\"Timber Construction Solutions website design.\">\n      </div><!-- /#silder -->\n    </div><!-- /.img-container -->\n\n    <div class=\"wrk-text col-sm-12 col-md-6\">\n      <div class=\"wrk-title font-2-5 font-light\">Solution</div>\n      <p class=\"mar-top-10\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n      <span class=\"content-border border-char border-right\"></span>\n    </div><!-- END: text-container -->\n\n  </div><!-- END: Work component -->\n\n</div><!-- /.main-container -->\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"top-section col-sm-12\">\n  </div><!-- /.top-section -->\n\n  <div class=\"section\">\n    <div class=\"col-sm-12 col-md-6\">\n      <div class=\"heading font-light font-italic\"><h1>Timber Construction Solutions</h1></div>\n      <ul>\n        <li><span class=\"font-bold\">Technical stack:</span></li>\n        <li class=\"list\">HTML</li>\n        <li class=\"list\">CSS</li>\n        <li class=\"list\">JavaScript</li>\n        <li class=\"list\">Photoshop</li>\n      </ul>\n      <div class=\"wrk-title font-2-5 font-light mar-top-50\">Problem</div>\n      <p class=\"mar-top-10\">To tell their story better through their website. The current website promotes their services and portfolio of projects completed in the past, however it lacks the ability to illustrate the companies business model, key values and the positive impact it's business model has on all the communities it is involved in.</p>\n      <span class=\"content-border border-char border-right\"></span>\n    </div><!-- END: text container -->\n\n    <div class=\"col-sm-12 col-md-6 img-container text-center\">\n      <img src=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg\" srcset=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg 1x, ../../../assets/imgs/work/tcs/tcs-homepage@2x.jpg 2x, ../../../assets/imgs/work/tcs/tcs-homepage@3x.jpg 3x\" alt=\"Timber Construction Solutions website design.\">\n    </div><!-- /.img-container -->\n  </div><!-- /.problem -->\n\n  <!-- Work component - background image -->\n  <div class=\"wrk-component col-sm-12 users-bg parallax\">\n    <span class=\"img-overlay\">\n      <div class=\"wrk-text col-sm-12 col-md-6 text-white\">\n        <div class=\"wrk-title font-2-5 font-light\">The Users</div>\n        <p class=\"mar-top-10\">Timber Construction Solutions often competes with businesses local and internationally for private and public building and housing project contracts in countries all around the world. The majority of the clients users are often from a corporate and/or government agency who use the website to gain insights into the company and aid in assessing their credibility and capabilities.</p>\n        <span class=\"content-border border-white border-right\"></span>\n      </div><!-- END: text container -->\n    </span><!-- /.img-overlay -->\n  </div><!-- END: Work component - background image -->\n\n  <!-- Work component -->\n  <div class=\"wrk-component col-sm-12\">\n    <div class=\"wrk-text col-sm-12 col-md-6\">\n      <div class=\"wrk-title font-2-5 font-light\">Process</div>\n      <p class=\"mar-top-10\">Before any design work was undertaken, 2 weeks were set aside to understanding and familiarising myself with the company, their background, users and business model. Building a strong sense of understanding about the business and their users helped in providing insights into how I could tell their story through the website, while enabling the user to quickly access information easily.</p>\n      <p>During the initial design process, a number of solutions were explored through sketches and wireframes including user journey mapping and interactions. Because of the nature and duration of this project I was unable to perform any in depth user testing and analysis to validate my design decisions.</p>\n      <span class=\"content-border border-char border-right\"></span>\n    </div><!-- END: text-container -->\n\n    <div class=\"col-sm-12 col-md-6 img-container text-center\">\n      <img src=\"../../../assets/imgs/wireframes.jpg\" srcset=\"../../../assets/imgs/wireframes.jpg 1x, ../../../assets/imgs/wireframes@2x.jpg 2x, ../../../assets/imgs/wireframes@3x.jpg 3x\" alt=\"Website wireframes and prototyping.\">\n    </div><!-- /.img-container -->\n  </div><!-- END: Work component -->\n\n  <!-- Work component -->\n  <div class=\"wrk-component col-sm-12 black\">\n    <div class=\"wrk-text col-sm-12 col-md-6 text-white\">\n      <div class=\"wrk-title font-2-5 font-light\">Solution</div>\n      <p class=\"mar-top-10\">The approach taken featured a large graphic navigation on the homepage using the 5 main stages of the building process, bringing the business model of the company to the forefront of the user. Each page of the website contains a large graphic background image of recent builds or relevant to the current section of the process.</p>\n      <p>Each section of the process contains a sub-navigation section with links highlighting the process of each section. The user can then navigate back to the homepage via the company logo or clicking on home in the breadcrumbs.</p>\n      <span class=\"content-border border-char border-right\"></span>\n    </div><!-- END: text-container -->\n\n    <div class=\"col-sm-12 col-md-6 img-container text-center\">\n      <div id=\"slider\">\n        <img src=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg\" srcset=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg 1x, ../../../assets/imgs/work/tcs/tcs-homepage@2x.jpg 2x, ../../../assets/imgs/work/tcs/tcs-homepage@3x.jpg 3x\" alt=\"Timber Construction Solutions website design.\">\n        <img src=\"../../../assets/imgs/work/tcs/tcs-design.jpg\" srcset=\"../../../assets/imgs/work/tcs/tcs-design.jpg 1x, ../../../assets/imgs/work/tcs/tcs-design@2x.jpg 2x, ../../../assets/imgs/work/tcs/tcs-design@3x.jpg 3x\" alt=\"Timber Construction Solution Design process.\">\n        <img src=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg\" srcset=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg 1x, ../../../assets/imgs/work/tcs/tcs-homepage@2x.jpg 2x, ../../../assets/imgs/work/tcs/tcs-homepage@3x.jpg 3x\" alt=\"Timber Construction Solutions website design.\">\n        <img src=\"../../../assets/imgs/work/school-list/school-list.png\" srcset=\"../../../assets/imgs/work/school-list/school-list.png 1x, ../../../assets/imgs/work/school-list/school-list@2x.png 2x, ../../../assets/imgs/work/school-list/school-list@3x.png 3x\" alt=\"School list management prototype\">\n        <img src=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg\" srcset=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg 1x, ../../../assets/imgs/work/tcs/tcs-homepage@2x.jpg 2x, ../../../assets/imgs/work/tcs/tcs-homepage@3x.jpg 3x\" alt=\"Timber Construction Solutions website design.\">\n      </div><!-- /#silder -->\n    </div><!-- /.img-container -->\n  </div><!-- END: Work component -->\n\n</div><!-- /.main-container -->\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"top-section col-sm-12 black\">\n    <div class=\"heading font-light text-yellow font-italic\">My work.</div>\n  </div>\n\n  <!-- Inspirational quote -->\n  <div class=\"section pad-35 charcoal overlay-25 col-sm-12 col-md-6\">\n    <div class=\"container\">\n      <span class=\"quote text-yellow\">People will forget what you said, and what you did, but will never forget the way you made them feel.</span>\n      <div class=\"credits\"><span class=\"text-yellow text-right font-light font-italic\">Maya Angelou</span></div>\n    </div>\n  </div><!-- /.section -->\n\n  <!-- Work component - white -->\n  <div class=\"wrk-component col-sm-12\">\n    <div class=\"display-img-container col-sm-12 col-md-6 text-center\">\n      <img src=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg\" srcset=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg 1x, ../../../assets/imgs/work/tcs/tcs-homepage@2x.jpg 2x, ../../../assets/imgs/work/tcs/tcs-homepage@3x.jpg 3x\" alt=\"Timber Construction Solutions website design.\">\n    </div><!-- Parallax image -->\n    <div class=\"wrk-text col-sm-12 col-md-6\">\n      <span class=\"wrk-title text-char font-3 font-italic\">\n        Timber Construction Solutions\n      </span>\n      <div class=\"mar-top-15 font-1-8\">\n        <p>Client: BizForce</p>\n        <p>Year: 2014</p>\n      </div>\n      <a [routerLink]=\"['/work/tcs']\" class=\"zk-btn zk-btn-prim\">View project</a>\n    </div>\n  </div><!-- END: Work component - white -->\n\n  <!-- Work component - black -->\n  <div class=\"wrk-component col-sm-12 black\">\n    <div class=\"wrk-text col-sm-12 col-md-6\">\n      <span class=\"wrk-title text-white font-3 font-italic\">\n        School List Mobile UX Prototype\n      </span>\n      <div class=\"mar-top-15 font-1-8 text-white\">\n        <p>Client: Warehouse Stationery</p>\n        <p>Year: 2015</p>\n      </div>\n      <a [routerLink]=\"['/work/school-list']\" class=\"zk-btn zk-btn-prim-inverse\">View project</a>\n    </div>\n    <div class=\"img-container col-sm-12 col-md-6\">\n      <img src=\"../../../assets/imgs/work/school-list/school-list.png\" srcset=\"../../../assets/imgs/work/school-list/school-list.png 1x, ../../../assets/imgs/work/school-list/school-list@2x.png 2x, ../../../assets/imgs/work/school-list/school-list@3x.png 3x\" alt=\"Me\">\n    </div><!-- Parallax image -->\n  </div><!-- END: Work component - black -->\n\n  <!-- Work component - white -->\n  <div class=\"wrk-component col-sm-12\">\n    <div class=\"img-container col-sm-12 col-md-6\">\n      <img src=\"../../../assets/imgs/me.png\" srcset=\"../../../assets/imgs/me.png 1x, ../../../assets/imgs/me@2x.png 2x, ../../../assets/imgs/me@3x.png 3x\" alt=\"Me\">\n    </div><!-- Parallax image -->\n    <div class=\"wrk-text col-sm-12 col-md-6\">\n      <span class=\"wrk-title font-3 font-italic\">\n        School List Mobile UX Prototype\n      </span>\n      <div class=\"mar-top-15 font-1-8\">\n        <p>Client: Warehouse Stationery</p>\n        <p>Year: 2015</p>\n      </div>\n      <a class=\"zk-btn zk-btn-prim\">View project</a>\n    </div>\n  </div><!-- END: Work component - white -->\n\n  <!-- Work component - black -->\n  <div class=\"wrk-component col-sm-12 black\">\n    <div class=\"wrk-text col-sm-12 col-md-6\">\n      <span class=\"wrk-title text-white font-3 font-italic\">\n        Sample project name on black background\n      </span>\n      <p class=\"text-white\">\n        Brief info about the project - year, client, my part in the project, technology stack.\n      </p>\n      <div class=\"zk-btn zk-btn-prim-inverse\">View project</div>\n    </div>\n    <div class=\"img-container col-sm-12 col-md-6\">\n      <img src=\"../../../assets/imgs/me.png\" srcset=\"../../../assets/imgs/me.png 1x, ../../../assets/imgs/me@2x.png 2x, ../../../assets/imgs/me@3x.png 3x\" alt=\"Me\">\n    </div><!-- Parallax image -->\n  </div><!-- END: Work component - black -->\n\n  <!-- Work component - white -->\n  <div class=\"wrk-component col-sm-12\">\n    <div class=\"img-container col-sm-12 col-md-6\">\n      <img src=\"../../../assets/imgs/me.png\" srcset=\"../../../assets/imgs/me.png 1x, ../../../assets/imgs/me@2x.png 2x, ../../../assets/imgs/me@3x.png 3x\" alt=\"Me\">\n    </div><!-- Parallax image -->\n    <div class=\"wrk-text col-sm-12 col-md-6\">\n      <span class=\"wrk-title text-char font-3 font-italic\">\n        Sample project name on white background\n      </span>\n      <p class=\"text-char\">\n        Brief info about the project - year, client, my part in the project, technology stack.\n      </p>\n      <div class=\"zk-btn zk-btn-prim\">View project</div>\n    </div>\n  </div><!-- END: Work component - white -->\n</div>\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(383);


/***/ })

},[702]);
//# sourceMappingURL=main.bundle.map