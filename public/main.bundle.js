webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_work_work_component__ = __webpack_require__("../../../../../src/app/components/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_work_tcs_tcs_component__ = __webpack_require__("../../../../../src/app/components/work/tcs/tcs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_work_school_list_school_list_component__ = __webpack_require__("../../../../../src/app/components/work/school-list/school-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_work_print_copy_print_copy_component__ = __webpack_require__("../../../../../src/app/components/work/print-copy/print-copy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// Application routes array.
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'work', component: __WEBPACK_IMPORTED_MODULE_9__components_work_work_component__["a" /* WorkComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_10__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'work/tcs', component: __WEBPACK_IMPORTED_MODULE_12__components_work_tcs_tcs_component__["a" /* TcsComponent */] },
    { path: 'work/school-list', component: __WEBPACK_IMPORTED_MODULE_13__components_work_school_list_school_list_component__["a" /* SchoolListComponent */] },
    { path: 'work/print-copy', component: __WEBPACK_IMPORTED_MODULE_16__components_work_print_copy_print_copy_component__["a" /* PrintCopyComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
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
                __WEBPACK_IMPORTED_MODULE_16__components_work_print_copy_print_copy_component__["a" /* PrintCopyComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_validate_service__["a" /* ValidateService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"top-section col-sm-12 black\">\n    <div class=\"heading font-light text-yellow font-italic\">About me.</div>\n  </div><!-- /.top-section -->\n\n  <!-- Small intro about myself -->\n  <div class=\"section charcoal pad-35 overlay-25 col-sm-12 col-md-6\">\n    <div class=\"container\">\n      <span class=\"quote text-yellow\">People will forget what you said, and what you did, but will never forget the way you made them feel.</span>\n      <div class=\"credits text-yellow\"><span class=\"text-right font-light font-italic\">Maya Angelou</span></div>\n    </div>\n  </div><!-- /.section -->\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6 portrait my-md-auto\">\n        <img src=\"../../../assets/imgs/me.png\" srcset=\"../../../assets/imgs/me.png 1x, ../../../assets/imgs/me@2x.png 2x, ../../../assets/imgs/me@3x.png 3x\" alt=\"The happy UXer\" title=\"The happy UXer\">\n      </div>\n      <div class=\"col-sm-12 col-md-6 my-md-auto\">\n        <span class=\"content-border border-char\"></span><!-- Paragraph text top border -->\n        <span class=\"font-light\">\n        <p>Hey there, <span class=\"font-italic font-bold\">I'm Zaine</span> an illustrator, designer and web developer with the skill set and talent to produce meaningful and engaging digital experiences. In my works I always try to combine aesthetic with functional aspects, looking for the right balance to communicate without annoying.</p>\n        <p>Successful design in my opinion should be attractive yet easy to read, communicate a fascinating message, together with an immediate understanding.</p>\n      </span>\n      </div>\n    </div>\n    </div>\n\n  <!-- Qualifications -->\n  <div class=\"section col-sm-12\">\n    <div class=\"section-heading\"><h2>Qualifications.</h2></div>\n    <div class=\"container\">\n      <div class=\"row font-light\">\n        <ul class=\"col-sm-12 col-md-6\">\n          <li class=\"list\">Bachelor of Applied Science<br><span class=\"font-italic font-1-1\">completed 2014 at Yoobee School of Design and The Open Polytechnic New Zealand.</span></li>\n          <li class=\"list\">Level 6 Diploma in Web Development<br><span class=\"font-italic font-1-1\">completed 2012 at Natcoll Design Technology.</span></li>\n        </ul>\n        <ul class=\"col-sm-12 col-md-6\">\n          <li class=\"list\">Level 6 Diploma in Computer Graphic Design<br><span class=\"font-italic font-1-1\">completed 2011 at Natcoll Design Technology.</span></li>\n          <li class=\"list\">Level 3 Certificate in Digital Media<br><span class=\"font-italic font-1-1\">completed 2010 at Natcoll Design Technology.</span></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <!-- My skills section -->\n  <div class=\"section col-sm-12\">\n    <div class=\"section-heading\"><h2>Skills & experience.</h2></div>\n    <div class=\"container\">\n      <ul class=\"row my-auto\">\n        <li class=\"col-xs-12 col-md-2 text-center font-light mb-5\">\n          <img src=\"../../../assets/imgs/icons/html-icon.png\" srcset=\"../../../assets/imgs/icons/html-icon.png 1x, ../../../assets/imgs/icons/html-icon@2x.png 2x, ../../../assets/imgs/icons/html-icon@3x.png 3x\" alt=\"HTML skills\" class=\"skill-icn\">\n          <h3>HTML</h3>\n          <!--<p>Fluent and confident in writing compliant HTML and HTML5 standard code from scratch. First introduced to web development and HTML in 2010 and have been practicing and expanding my knowledge since.</p>\n          <span class=\"content-border border-char border-right\"></span>-->\n        </li>\n        <li class=\"col-xs-12 col-md-2 text-center font-light mb-5\">\n          <img src=\"../../../assets/imgs/icons/css-icon.png\" srcset=\"../../../assets/imgs/icons/css-icon.png 1x, ../../../assets/imgs/icons/css-icon@2x.png 2x, ../../../assets/imgs/icons/css-icon@3x.png 3x\" alt=\"CSS skills\" class=\"skill-icn\">\n          <h3>CSS</h3>\n          <!--<p>Fluent and confident in writing CSS and CSS3 code from scratch as well as utilising frameworks such as Bootstrap and pre-processors such as SASS and LESS.</p>\n          <span class=\"content-border border-char border-right\"></span>-->\n        </li>\n        <li class=\"col-xs-12 col-md-2 text-center font-light mb-5\">\n          <img src=\"../../../assets/imgs/icons/js-icon.png\" srcset=\"../../../assets/imgs/icons/js-icon.png 1x, ../../../assets/imgs/icons/js-icon@2x.png 2x, ../../../assets/imgs/icons/js-icon@3x.png 3x\" alt=\"JavaScript skills\" class=\"skill-icn\">\n          <h3>JavaScript</h3>\n          <!--<p>Introduced to the JavaScript language in 2010, I am confident in writing vanilla JavaScript from scratch and am an active member within the local JavaScript community.</p>\n          <span class=\"content-border border-char border-right\"></span>-->\n        </li>\n        <li class=\"col-xs-12 col-md-2 text-center font-light mb-5\">\n          <img src=\"../../../assets/imgs/icons/ng-icon.png\" srcset=\"../../../assets/imgs/icons/ng-icon.png 1x, ../../../assets/imgs/icons/ng-icon@2x.png 2x, ../../../assets/imgs/icons/ng-icon@3x.png 3x\" alt=\"NodeJS skills\" class=\"skill-icn\">\n          <h3>AngularJS</h3>\n          <!--<p>AngularJS was one of the JavaScript frontend frameworks I decided to learn in 2015 as part of my development workflow. I am currently familiarising myself with the latest release (Angular4) and am enjoying the challenge.</p>\n          <span class=\"content-border border-char border-right\"></span>-->\n        </li>\n        <li class=\"col-xs-12 col-md-2 text-center font-light mb-5\">\n          <img src=\"../../../assets/imgs/icons/node-icon.png\" srcset=\"../../../assets/imgs/icons/node-icon.png 1x, ../../../assets/imgs/icons/node-icon@2x.png 2x, ../../../assets/imgs/icons/node-icon@3x.png 3x\" alt=\"NodeJS skills\" class=\"skill-icn\">\n          <h3>NodeJS</h3>\n          <!--<p>First introduced to the backend JavaScript framework in 2015, NodeJS has become an integral part of my development environment and has provided exposure to a whole new eco-system of JavaScript libraries and development process - developing in an API first approach.</p>\n          <span class=\"content-border border-char border-right\"></span>-->\n        </li>\n        <li class=\"col-xs-12 col-sm-2 text-center font-light mb-5\">\n          <img src=\"../../../assets/imgs/icons/design-icon.png\" srcset=\"../../../assets/imgs/icons/design-icon.png 1x, ../../../assets/imgs/icons/design-icon@2x.png 2x, ../../../assets/imgs/icons/design-icon@3x.png 3x\" alt=\"Design skills\" class=\"skill-icn\">\n          <h3>Design</h3>\n          <!--<p>Fluent with the Adobe application stack including Photoshop, Illustrator, inDesign and prototyping with applications such as inVison. Greater understanding, knowledge and importance of the design process, design principles and application of them in all aspects of my work.</p>\n          <span class=\"content-border border-char border-right\"></span>-->\n        </li>\n      </ul>\n    </div>\n  </div>\n  <!-- END: My skills section -->\n\n  <!-- Experience -->\n  <div class=\"section pad-35 black col-sm-12\">\n    <div class=\"text-white font-light font-italic font-2\"> ~ Work experience.</div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <ul class=\"col-xs-12 col-sm-6 my-auto\">\n          <li class=\"text-white font-light list\">UX / Digital Designer @ The Warehouse Group<br><span class=\"font-italic font-light\">currently</span></li>\n          <li class=\"text-white font-light list\">Frontend Developer & Team trainer @ The Warehouse<br><span class=\"font-italic font-light\">Jul - Nov 2016</span></li>\n          <li class=\"text-white font-light list\">Webstore Specialist / Frontend Developer @ Warehouse Stationery<br><span class=\"font-italic font-light\">Nov 2014 - Jul 2016</span></li>\n          <li class=\"text-white font-light list\">Frontend Developer @ Kiteflyr<br><span class=\"font-italic font-light\">Jul - Nov 2014 </span></li>\n        </ul>\n        <div class=\"col-sx-12 col-sm-6 my-auto logo-container\" id=\"logo\">\n          <img src=\"../../../assets/imgs/logos/twg-logo.png\" srcset=\"../../../assets/imgs/logos/twg-logo.png 1x, ../../../assets/imgs/logos/twg-logo@2x.png 2x, ../../../assets/imgs/logos/twg-logo@3x.png 3x\" alt=\"The Warehouse Group\" title=\"The Warehouse Group\" class=\"company-logo\">\n          <img src=\"../../../assets/imgs/logos/twl-cheron.png\" srcset=\"../../../assets/imgs/logos/twl-cheron.png 1x, ../../../assets/imgs/logos/twl-cheron@2x.png 2x, ../../../assets/imgs/logos/twl-cheron@3x.png 3x\" alt=\"The Warehouse\" title=\"The Warehouse\" class=\"company-logo\">\n          <img src=\"../../../assets/imgs/logos/wsl-logo.png\" srcset=\"../../../assets/imgs/logos/wsl-logo.png 1x, ../../../assets/imgs/logos/wsl-logo@2x.png 2x, ../../../assets/imgs/logos/wsl-logo@3x.png 3x\" alt=\"Warehouse Stationery\" title=\"Warehouse Stationery\" class=\"company-logo\">\n          <img src=\"../../../assets/imgs/logos/kiteflyr-logo.png\" srcset=\"../../../assets/imgs/logos/kiteflyr-logo.png 1x, ../../../assets/imgs/logos/kiteflyr-logo@2x.png 2x, ../../../assets/imgs/logos/kiteflyr-logo@3x.png 3x\" alt=\"Kiteflyr\" title=\"Kiteflyr\" class=\"company-logo\">\n        </div>\n    </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"section p-5 charcoal col-sm-12 col-md-6\">\n      <div class=\"text-white font-light font-italic font-2 text-indent-15\"> ~ Recommendation.</div>\n      <div class=\"container text-white font-light mar-top-25\">\n        <span class=\"content-border border-white\"></span><!-- Paragraph text top border -->\n        <p>I am the Head of the Web and Interactive Department at Natcoll. I worked with Zaine Kingi for 10 months as his tutor for the Diploma of Web Development program. Zaine demonstrated great commitment and talent during his course.</p>\n        <p>Zaine is an independent learner, who works well both on his own and as a team member. He is able to assimilate many new skills and concepts very quickly. The high standards of his projects and excellent attention to detail are very good proof of his skills.</p>\n        <p>Zaine has very strong work ethic. He has demonstrated great commitment to his tasks and the people around him. Zaine is friendily and approachable, which makes him a pleasure to work with.</p>\n        <div class=\"credits text-yellow\"><span class=\"text-right font-light font-italic\">Trung Ly - Head of Web and Interactive Department<br>Yoobee School of Design</span></div>\n      </div>\n    </div>\n    <div class=\"section p-5 col-sm-12 col-md-6\">\n      <div class=\"font-light font-italic font-2 text-indent-15\"> ~ Recommendation.</div>\n      <div class=\"container text-char font-light mar-top-25\">\n        <span class=\"content-border border-char\"></span><!-- Paragraph text top border -->\n        <p>I am writting to support Zaine in this reference letter though deeply saddened to have him leave us. I would like to support Zaine as best I can, because of who he is as a person and what he has contributed.</p>\n        <p>Zaine has been with Natcoll since 2010, a student of my Computer Graphic Design class. Zaine made a very positive contribution to the programme. He is talented and serious about his work, he will be a great contribution to any positive work environment.</p>\n        <p>It is with regret that he will leave us but I would be open to support and recommend him to any company or institution considering his application. He was a valuable asset to Natcoll throughout his time here. Zaine will be sincerely missed.</p>\n        <div class=\"credits\"><span class=\"text-right font-light font-italic\">Ivan Voo - Computer Graphic Design Tutor<br>Yoobee School of Design</span></div>\n      </div>\n    </div>\n  </div>\n\n</div><!-- /.main-container -->\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.form-container {\n  float: right;\n}\n#contact-form {\n  padding: 25px;\n}\n.form-group {\n  position: relative;\n}\n.form-control {\n  border-radius: 0;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n}\nlabel, input, textarea {\n  display: inline;\n}\nlabel {\n  position: absolute;\n  bottom: 35px;\n}\nlabel[for=\"message\"] {\n  bottom: 40px;\n}\ninput, textarea {\n  width: 100%;\n  background: #1e1e1e;\n  border: none;\n  border-bottom: 1px solid #ffffff;\n  padding-left: 100px;\n  margin: 0 auto 25px;\n  color: #ffffff;\n}\n#map {\n  position: absolute;\n  z-index: -100;\n  height: 500px;\n  width: 100%;\n  background: grey;\n}\n\n/* NG classes */\n.ng-invalid:not(form) {\n\n}\n.ng-valid {\n\n}\n.ng-pristine {\n\n}\n.ng-dirty {\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"top-section col-sm-12 black\">\n    <div class=\"heading font-light text-yellow font-italic\">Contact me.</div>\n  </div><!-- /.top-section -->\n\n  <div class=\"row d-flex flex-md-row-reverse\">\n    <!-- Contact form -->\n    <div class=\"charcoal overlay-25 col-sm-12 col-md-8\">\n      <form id=\"contact-form\" (ngSubmit)=\"cfSubmit()\"  novalidate>\n\n        <div class=\"form-group\">\n          <label for=\"name\" class=\"text-white font-light\">Name</label>\n          <input type=\"text\" name=\"name\" required id=\"name\" class=\"form-control\" [(ngModel)]=\"name\">\n        </div><!-- / Name -->\n\n        <div class=\"form-group\">\n          <label for=\"email\" class=\"text-white font-light\">Email</label>\n          <input type=\"text\" name=\"email\" required id=\"email\" class=\"form-control\" [(ngModel)]=\"email\">\n        </div><!-- / Email -->\n\n        <div class=\"form-group\">\n          <label for=\"message\" class=\"text-white font-light\">Message</label>\n          <textarea name=\"message\" id=\"message\" required cols=\"30\" rows=\"1\" class=\"form-control\" [(ngModel)]=\"message\"></textarea>\n        </div><!-- / Message -->\n\n        <button class=\"zk-btn zk-btn-prim-inverse\" type=\"submit\">Get in touch</button>\n      </form>\n    </div>\n\n    <!-- More details -->\n    <div class=\"section col-sm-12 p-5\">\n      <div class=\"row\">\n        <!-- Office location -->\n        <div class=\"col-sm-12 col-md-6 text-left\">\n          <img src=\"../../../assets/imgs/icons/location-icon.png\" srcset=\"../../../assets/imgs/icons/location-icon.png 1x, ../../../assets/imgs/icons/location-icon@2x.png 2x, ../../../assets/imgs/icons/location-icon@3x.png 3x\" alt=\"Office location\" class=\"icon\">\n          <h2>Office.</h2>\n          <p>\n            26 The Warehouse Way,<br>\n            Northcote,<br>\n            Auckland, 0629<br>\n            New Zealand\n          </p>\n        </div><!-- END: office details -->\n\n        <!-- Phone numbers -->\n        <div class=\"col-sm-12 col-md-6 text-left\">\n          <img src=\"../../../assets/imgs/icons/phone-icon.png\" srcset=\"../../../assets/imgs/icons/phone-icon.png 1x, ../../../assets/imgs/icons/phone-icon@2x.png 2x, ../../../assets/imgs/icons/phone-icon@3x.png 3x\" alt=\"Contact phone numbers\" class=\"icon\">\n          <h2>Drop us a line.</h2>\n          <p>\n            Office - +649 489-8900 ext. 96677<br>\n            Mobile - +6421-897337<br>\n          </p>\n        </div><!-- END: office details -->\n      </div><!-- /.row -->\n    </div><!-- /.section -->\n  </div><!-- /.row -->\n\n</div><!-- /.main-container -->\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function ContactComponent(validateService, flashMessages, router) {
        this.validateService = validateService;
        this.flashMessages = flashMessages;
        this.router = router;
    }
    ContactComponent.prototype.ngOnInit = function () { };
    /* On contact form submission */
    ContactComponent.prototype.cfSubmit = function () {
        //  create new message instance.
        var msg = {
            name: this.name,
            email: this.email,
            message: this.message
        };
        // check required fields.
        if (!this.validateService.validateCF(msg)) {
            // display error.
            this.flashMessages.show('Oh No! All fields are required!', { cssClass: 'alert-danger', timeout: 2000 });
            this.flashMessages.grayOut(true);
            return false;
        }
        // validate email.
        if (!this.validateService.validateEmail(msg.email)) {
            // display error.
            this.flashMessages.show('Jeepers! That does\'t look right? Are you sure that\'s your email?', { cssClass: 'alert-danger', timeout: 8000 });
            this.flashMessages.grayOut(true);
            return false;
        }
        // successful submission.
        if (this.validateService.validateCF(msg) && this.validateService.validateEmail(msg.email)) {
            // display message.
            this.flashMessages.show('Hey ' + msg.name + ', thanks for the message, I will get back to you soon as ;-)', { cssClass: 'alert-success', timeout: 10000 });
            this.flashMessages.grayOut(false);
            this.router.navigate(['/']);
        }
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  display: block;\n  border-top: 1px solid #1e1e1e;\n  width: 100%;\n  margin: 0;\n  padding: 15px 0;\n  text-align: center;\n  color: #1e1e1e;\n  background: #ffffff;\n}\nfooter span {\n  width: 70%;\n  margin: 30px auto 15px;\n}\nfooter span a {\n  margin-right: 15%;\n}\nfooter span a:nth-of-type(4) {\n  margin-right: 0;\n}\nfooter img {\n  height: 25px;\n}\nfooter div {\n  margin-top: 15px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <span>\n    <a href=\"https://www.linkedin.com/in/zainekingi/\" target=\"_new\" rel=\"nofollow noreferrer\"><img src=\"../../../assets/imgs/icons/linkedin-icon.png\" srcset=\"../../../assets/imgs/icons/linkedin-icon.png 1x, ../../../assets/imgs/icons/linkedin-icon@2x.png 2x, ../../../assets/imgs/icons/linkedin-icon@3x.png 3x\" alt=\"LinkedIn\"></a>\n    <a href=\"https://www.instagram.com/zainekingi/\" target=\"_new\" rel=\"nofollow noreferrer\"><img src=\"../../../assets/imgs/icons/insta-icon.png\" srcset=\"../../../assets/imgs/icons/insta-icon.png 1x, ../../../assets/imgs/icons/insta-icon@2x.png 2x, ../../../assets/imgs/icons/insta-icon@3x.png 3x\" alt=\"Instagram\"></a>\n    <a href=\"https://twitter.com/zainekingi\" target=\"_new\" rel=\"nofollow noreferrer\"><img src=\"../../../assets/imgs/icons/twitter-icon.png\" srcset=\"../../../assets/imgs/icons/twitter-icon.png 1x, ../../../assets/imgs/icons/twitter-icon@2x.png 2x, ../../../assets/imgs/icons/twitter-icon@3x.png 3x\" alt=\"Twitter\"></a>\n    <a href=\"https://nz.pinterest.com/rous6026nz/\" target=\"_new\" rel=\"nofollow noreferrer\"><img src=\"../../../assets/imgs/icons/pintrest-icon.png\" srcset=\"../../../assets/imgs/icons/pintrest-icon.png 1x, ../../../assets/imgs/icons/pintrest-icon@2x.png 2x, ../../../assets/imgs/icons/pintrest-icon@3x.png 3x\" alt=\"Pintrest\"></a>\n  </span>\n\n  <div>&copy; Zaine Kingi 2017</div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Main content styling */\n\n\n\n/* Meida queries - 768px up */\n@media screen and (min-width: 768px) {\n\n}\n\n/* Media query - 988px up */\n@media screen and (min-width: 988px) {\n\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <!-- Large image -->\n  <div class=\"hero-img-container hero-img-bg parallax\" [style.height]=\"height + 'px'\">\n    <span class=\"img-overlay\" [style.height]=\"height + 'px'\">\n      <div class=\"hero-text text-v-middle text-left my-auto pad-35\">\n        <h1 class=\"text-white\">\n         Zaine Kingi.\n        </h1>\n        <hr class=\"hr\">\n        <div class=\"text-white font-weight-light mt-md-5\"><p>A digital designer based in Auckland New Zealand with a solid foundation in HTML, CSS, JavaScript and a keen eye for detail and creating unique and engaging experiences.</p></div>\n      </div><!-- END: Hero text -->\n    </span>\n    <div class=\"scroll-btn\"><i class=\"scroll-y\" id=\"dwnBtn\"></i></div>\n  </div><!-- END: Hero image -->\n\n  <!-- My skills section -->\n  <div class=\"section col-sm-12\">\n    <div class=\"section-heading\"><h2>What I do</h2></div>\n    <ul class=\"d-md-flex justify-content-md-center\">\n      <li class=\"col-sm-12 col-md-4 text-center font-light px-lg-5\">\n        <img src=\"../../../assets/imgs/icons/collaboration.png\" srcset=\"../../../assets/imgs/icons/collaboration.png 1x, ../../../assets/imgs/icons/collaboration@2x.png 2x, ../../../assets/imgs/icons/collaboration@3x.png 3x\" alt=\"Collaboration/Agile\" class=\"skill-icn mb-5\">\n        <h3>Collaborate</h3>\n        <p>Build and forge strong relationships, as well as gaining and sharing valued insights, knowledge and experiences.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </li>\n      <li class=\"col-sm-12 col-md-4 text-center font-light px-lg-5\">\n        <img src=\"../../../assets/imgs/icons/design-icon.png\" srcset=\"../../../assets/imgs/icons/design-icon.png 1x, ../../../assets/imgs/icons/design-icon@2x.png 2x, ../../../assets/imgs/icons/design-icon@3x.png 3x\" alt=\"Design\" class=\"skill-icn mb-5\">\n        <h3>Design</h3>\n        <p>Creating meaningful and engaging experiences, yet reducing complexity for the end user is the approach when attempting to solve a problem with design. It helps keep the user at the forefront of all design decisions and ensures the end result has a positive impact on the end user.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </li>\n      <li class=\"col-sm-12 col-md-4 text-center font-light px-lg-5\">\n        <img src=\"../../../assets/imgs/icons/code-icon.png\" srcset=\"../../../assets/imgs/icons/code-icon.png 1x, ../../../assets/imgs/icons/code-icon@2x.png 2x, ../../../assets/imgs/icons/code-icon@3x.png 3x\" alt=\"Development\" class=\"skill-icn mb-5\">\n        <h3>Code</h3>\n        <p>Proficient with HTML, CSS, JavaScript and JavaScript frontend frameworks such as AngularJS. I have the ability to quickly pick up new web technologies, programming concepts and languages.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </li>\n    </ul><!-- /.skills -->\n  </div>\n</div><!-- /.main-container -->\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        this.btn.addEventListener('click', scroll);
        function scroll() {
            var c = 0;
            var h = window.innerHeight;
            var fn = setInterval(function () {
                if (c < h) {
                    c += 25;
                }
                else {
                    clearInterval(fn);
                }
                window.scrollTo(0, c);
            }, 1);
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* =======================================================\n    FILE:   NAVBAR.COMPONENT.CSS\n    AUTHOR: Zaine Kingi\n    VER:    1.0\n    DATE:   13-7-17\n    DESC:   Navbar component stylesheet for the application.\n    ......................................................\n            CHANGE LOG\n    ------------------------------------------------------\n    DATE:   VER:    CHANGES:\n    ------------------------------------------------------\n    13-7-17 1.0     Initial release.\n    ---------------------------------------------------- */\n\n/* Mobile first styling */\n\n/* Base styling */\nnav {\n  display: block;\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 60px;\n  margin: 0;\n  background: #000;\n  overflow: hidden;\n}\n.navbar-head {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  background: #000;\n  height: 40px;\n  width: 100%;\n  margin: 0;\n  padding: 10px;\n  border: none;\n}\n.nav-logo {\n  display: block;\n  height: 40px;\n  padding-top: 5px;\n}\n.ham {\n  position: absolute;\n  top: 15px;\n  right: 10px;\n  padding: 5px 10px;\n  cursor: pointer;\n  background: none;\n  border-radius: 4px;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  -o-border-radius: 4px;\n  transition: background .2s ease-in-out;\n  -webkit-transition: background .2s ease-in-out;\n  -moz-transition: background .2s ease-in-out;\n  -o-transition: background .2s ease-in-out;\n}\n.ham:hover {\n  background: #1e1e1e;\n}\n.navbar-icon {\n  display: block;\n  width: 25px;\n  border-top: 3px solid yellow;\n  margin: 5px 0;\n  border-radius: 5px;\n}\n\n/* Navbar links */\n.nav {\n  background: #000000;\n  width: 100%;\n  position: absolute;\n  top: -300px;\n  left: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n}\n.nav-items {\n  display: block;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  top: 5px;\n  width: 100%;\n  text-align: right;\n  overflow: hidden;\n  padding: 0;\n  border-top: 1px groove yellow;\n  border-bottom: 1px groove yellow;\n}\n.nav-items li {\n  display: block;\n  width: 100%;\n  height: 75px;\n  background: none;\n  border-bottom: 1px groove yellow;\n  transition: background .2s ease-in-out;\n  -webkit-transition: background .2s ease-in-out;\n  -moz-transition: background .2s ease-in-out;\n  -o-transition: background .2s ease-in-out;\n}\n.nav-items li:hover {\n  background: #1e1e1e;\n}\n.nav-items li a {\n  display: block;\n  padding-right: 15px;\n  color: yellow;\n  font-family: \"Avenir\", 'Open Sans', arial, sans-serif;\n  text-decoration: none;\n  font-size: 2rem;\n  font-weight: lighter;\n  line-height: 4.5rem;\n  text-transform: none;\n}\n\n@media screen and (min-width: 768px) {\n  nav {\n    width: 75px;\n    height: 100%;\n    background: #1e1e1e;\n    top: 0;\n    left: 0;\n    text-align: left;\n    padding: 0;\n  }\n  .navbar-head {\n    background: #1e1e1e;\n    position: relative;\n    height: 100%;\n    width: 75px;\n  }\n  .nav-logo {\n    position: absolute;\n    top: 0;\n    margin: 15px 20px;\n  }\n  .ham {\n    display: block;\n    top: 50%;\n    height: 35px;\n    padding-top: 17px;\n  }\n  .ham:hover {\n    background: #000000;\n  }\n  .navbar-icon {\n    margin-top: 0;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n  }\n  .ham li:nth-child(2) {\n    margin-top: -8px;\n  }\n  .ham li:nth-child(1) {\n    margin-left: 10px;\n  }\n\n  /* navbar links */\n  .nav {\n    background: #1e1e1e;\n    top: 0;\n    bottom: 0;\n    left: -300px;\n    width: 300px;\n    height: 100%;\n  }\n  .nav-items {\n    height: 225px;\n  }\n  .nav-items li {\n    padding: 0;\n  }\n  .nav-items li:hover {\n    background: #000000;\n  }\n  .nav-items li a {\n    padding: 0;\n    margin: 0;\n  }\n  .active {\n    color: #fff;\n    background: #000;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"navbar navbar-head\">\n    <a [routerLink] = \"['/']\"><img src=\"../../../assets/imgs/zk-logo/zk-logo.png\" srcset=\"../../../assets/imgs/zk-logo/zk-logo.png 1x, ../../../assets/imgs/zk-logo/zk-logo@2x.png 2x, ../../../assets/imgs/zk-logo/zk-logo@3x.png 3x\"  alt=\"logo\" class=\"nav-logo\"></a>\n    <ul class=\"ham m-md-auto\">\n      <li><span class=\"navbar-icon\"></span></li>\n      <li><span class=\"navbar-icon\"></span></li>\n    </ul>\n  </div>\n  <div class=\"nav\">\n    <ul class=\"nav-items my-md-auto\">\n      <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink] = \"['/about']\" class=\"mr-md-4\">About me.</a></li>\n      <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink] = \"['/work']\" class=\"mr-md-4\">Work.</a></li>\n      <li [routerLinkActive] = \"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink] = \"['/contact']\" class=\"mr-md-4\">Contact me.</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        var nav = document.getElementsByTagName('nav')[0];
        var ham = document.getElementsByClassName('ham')[0];
        var navLnks = document.getElementsByClassName('nav')[0];
        var count = -350;
        var isOpen;
        var vpWidth = window.innerWidth;
        var vpHeight = window.innerHeight;
        this.height = vpHeight / 2;
        window.addEventListener('resize', function () {
            vpWidth = window.innerWidth;
        });
        ham.addEventListener('click', toggleNav);
        /* Method to control the navigation toggling. */
        function toggleNav() {
            if (!isOpen) {
                var openFn = setInterval(function () {
                    if (vpWidth > 767) {
                        if (count < 70) {
                            openNavDesk(navLnks);
                        }
                        else {
                            clearInterval(openFn);
                        }
                    }
                    else {
                        if (count < 55) {
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
                    if (vpWidth > 767) {
                        if (count > -300) {
                            closeNavDesk(navLnks);
                        }
                        else {
                            clearInterval(closeFn);
                        }
                    }
                    else {
                        if (count > -225) {
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
        /* Method to close the navigation if a navigation link is click. */
        var lis = document.querySelectorAll('.nav-items li');
        for (var i = 0; i < lis.length; i++) {
            lis[i].addEventListener('click', function () {
                var closeNavFn = setInterval(function () {
                    if (vpWidth > 767) {
                        if (count > -300) {
                            closeNavDesk(navLnks);
                        }
                        else {
                            clearInterval(closeNavFn);
                        }
                    }
                    else {
                        if (count > -225) {
                            closeNavMob(navLnks);
                        }
                        else {
                            clearInterval(closeNavFn);
                        }
                    }
                }, 1);
                isOpen = false;
            });
        }
        /* Helper functions */
        function openNavDesk(ele) {
            count += 15;
            ele.style.left = count + 'px';
            ele.style.height = '100%';
            ele.style.width = '300px';
            ele.style.top = '0px';
            nav.style.overflow = 'visible';
        }
        function closeNavDesk(ele) {
            count -= 15;
            ele.style.left = count + 'px';
            nav.style.overflow = 'hidden';
        }
        function openNavMob(ele) {
            count += 15;
            ele.style.top = count + 'px';
            ele.style.width = '100%';
            ele.style.height = '225px';
            ele.style.left = '0px';
            nav.style.overflow = 'visible';
        }
        function closeNavMob(ele) {
            count -= 15;
            ele.style.top = count + 'px';
            nav.style.overflow = 'hidden';
        }
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/work/print-copy/print-copy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/work/print-copy/print-copy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6 mar-top-100 px-5\">\n      <div class=\"heading font-light font-italic\"><h1>Warehouse Stationery Print & Photographic Services</h1></div>\n      <ul>\n        <li><span class=\"font-bold\">Technical stack:</span></li>\n        <li class=\"list\">HTML</li>\n        <li class=\"list\">CSS</li>\n        <li class=\"list\">inVision</li>\n        <li class=\"list\">Photoshop</li>\n      </ul>\n      <div class=\"wrk-title font-2-5 font-light mar-top-50\">Problem</div>\n      <p class=\"mar-top-10\">Warehouse Stationery provide a printing service which was only offered in store. With the recent launch of the new webstore, promoting the print and photographic services online and providing online customers with the information about the services was needed.</p>\n      <p>Providing the user with a quick and easy way to navigate and find information was the challenge faced with when tasked to implementing the service.</p>\n      <span class=\"content-border border-char border-right\"></span>\n    </div><!-- END: text container -->\n\n    <div class=\"col-sm-12 col-md-6 my-auto text-center\">\n      <img src=\"../../../assets/imgs/work/print-copy/photo-copy-prototype.gif\" alt=\"Print and Photographic\">\n    </div><!-- /.img-container -->\n  </div><!-- /.row -->\n\n  <!-- Work component - background image -->\n  <div class=\"wrk-component col-sm-12 users-bg parallax\">\n    <span class=\"img-overlay\">\n      <div class=\"row\">\n        <div class=\"wrk-text col-sm-12 col-md-6 text-white my-auto px-5\">\n          <div class=\"wrk-title font-2-5 font-light\">The Users</div>\n          <p class=\"mar-top-10\">Based off customer transactional data and sales both in store and online, the main user which we would have the most uptake from this service would be our small to medium business customers.</p>\n          <p>These users are large consumers of print and copy paper, printers, ink, toners and presentation supplies, and would benefit most from the print and photographic services information being available online.</p>\n          <span class=\"content-border border-white border-right\"></span>\n        </div><!-- END: text container -->\n      </div><!-- .row -->\n    </span><!-- /.img-overlay -->\n  </div><!-- END: Work component - background image -->\n\n  <!-- Work component -->\n  <div class=\"wrk-component col-sm-12\">\n    <div class=\"row\">\n      <div class=\"wrk-text col-sm-12 col-md-6 my-auto px-5\">\n        <div class=\"wrk-title font-2-5 font-light\">Process</div>\n        <p class=\"mar-top-10\">The first step was to consolidate all the information we had about the print and photographic services. Consulting with the category manager was done throughout the process to ensure the information was accurate and up to date.</p>\n        <p>Once all the information was organised and categorised, understanding how and why the user would interact with the information was required. A series of sketches and wireframes were produced and refined to provide a clear picture of the final design of the user journey.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </div><!-- END: text-container -->\n\n      <div class=\"col-sm-12 col-md-6 img-container text-center my-auto\">\n        <img src=\"../../../assets/imgs/wireframes-min.jpg\" srcset=\"../../../assets/imgs/wireframes-min.jpg 1x, ../../../assets/imgs/wireframes@2x-min.jpg 2x, ../../../assets/imgs/wireframes@3x-min.jpg 3x\" alt=\"Website wireframes and prototyping.\">\n      </div><!-- /.img-container -->\n    </div><!-- .row -->\n\n  </div><!-- END: Work component -->\n\n  <!-- Work component -->\n  <div class=\"wrk-component col-sm-12 black\">\n    <div class=\"row\">\n      <div class=\"wrk-text col-sm-12 col-md-6 text-white my-auto px-5\">\n        <div class=\"wrk-title font-2-5 font-light\">Solution</div>\n        <p class=\"mar-top-10\">The final design included a tabbed navigation system for the level 2 categories, allowing the user to quickly and easily switch between the two categories and view the services of each.</p>\n        <p>Providing the user with a high level overview of each service and performing actions without having to click into the service. Each service links to a information landing with detailed information about the service, options, pricing and either an action to purchase online or find your nearest store.</p>\n        <span class=\"content-border border-white border-right\"></span>\n      </div><!-- END: text-container -->\n      <div class=\"img-container col-sm-12 col-md-6 text-center my-auto\">\n        <img src=\"../../../assets/imgs/work/print-copy/photographic-services.png\" srcset=\"../../../assets/imgs/work/print-copy/photographic-services.png 1x, ../../../assets/imgs/work/print-copy/photographic-services@2x.png 2x, ../../../assets/imgs/work/print-copy/photographic-services@3x.png 3x\" alt=\"Warehouse Stationery Print & Photographic services.\">\n      </div><!-- /.img-container -->\n    </div><!-- .row -->\n  </div><!-- END: Work component -->\n\n  <div class=\"collage text-left\">\n    <img src=\"../../../assets/imgs/work/print-copy/print-copy-masonry-min.jpg\" srcset=\"../../../assets/imgs/work/print-copy/print-copy-masonry-min.jpg 1x, ../../../assets/imgs/work/print-copy/print-copy-masonry@2x-min.jpg 2x, ../../../assets/imgs/work/print-copy/print-copy-masonry@3x-min.jpg 3x\" alt=\"Warehouse Stationery Print & Photographic services designs.\">\n  </div><!-- /.img-container -->\n\n</div><!-- /.main-container -->\n"

/***/ }),

/***/ "../../../../../src/app/components/work/print-copy/print-copy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintCopyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrintCopyComponent = (function () {
    function PrintCopyComponent() {
    }
    PrintCopyComponent.prototype.ngOnInit = function () {
    };
    PrintCopyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-print-copy',
            template: __webpack_require__("../../../../../src/app/components/work/print-copy/print-copy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/work/print-copy/print-copy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrintCopyComponent);
    return PrintCopyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/work/school-list/school-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/work/school-list/school-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <div class=\"section\">\n    <div class=\"row d-flex align-items-end\">\n      <div class=\"col-sm-12 col-md-6 mar-top-100 px-5\">\n        <div class=\"heading font-light font-italic\"><h1>School List Management Prototype</h1></div>\n        <div class=\"wrk-title font-2-5 font-light mar-top-50\">Problem</div>\n        <p class=\"mar-top-10\">The Back to School period is one of the largest and most competitive campaigns on the calendar for Warehouse Stationery, and being the number one destination for customers and growing our market share.</p>\n        <p>School lists are a key feature and major incentive in getting customers to shop with us, providing the convenience of being able to purchase all their children's stationery requirements with the click of a button.</p>\n        <p>Management of the school lists and ensuring we are providing accurate lists is becoming a challenge, resulting in the exploration of a platform for easy management of school lists.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </div><!-- END: text container -->\n\n      <div class=\"col-sm-12 col-md-6 text-center img-container\">\n        <img src=\"../../../assets/imgs/work/school-list/school-list.png\" srcset=\"../../../assets/imgs/work/school-list/school-list.png 1x, ../../../assets/imgs/work/school-list/school-list@2x.png 2x, ../../../assets/imgs/work/school-list/school-list@3x.png 3x\" alt=\"Warehouse Stationery School list management prototype.\">\n      </div><!-- /.img-container -->\n    </div><!-- /.row -->\n  </div><!-- /.problem -->\n\n  <!-- Work component - black -->\n  <div class=\"wrk-component col-sm-12 users-bg parallax\">\n    <span class=\"img-overlay\">\n      <div class=\"row\">\n        <div class=\"wrk-text col-sm-12 col-md-6 text-white my-auto px-5\">\n          <div class=\"wrk-title font-2-5 font-light\">The Users</div>\n          <p class=\"mar-top-10\">The main user of this platform are school teachers, admin staff and Warehouse Stationery eCommerce team members. There could potentially be scope for parents and public to provide information as well, but at the early stages of exploration the scope was narrowed to just schools and Warehouse Stationery staff members.</p>\n          <span class=\"content-border border-white border-right\"></span>\n        </div><!-- END: text container -->\n      </div><!-- /.row -->\n    </span><!-- /.img-overlay -->\n  </div><!-- END: Work component - background image -->\n\n  <!-- Work component -->\n  <div class=\"wrk-component col-sm-12 black\">\n    <div class=\"row\">\n      <div class=\"wrk-text text-white col-sm-12 col-md-6 my-auto px-5\">\n        <div class=\"wrk-title font-2-5 font-light\">Process</div>\n        <p class=\"mar-top-10\">An analysis was conducted to understand the business requirements and processes around the school list functionality, identifying points of friction for the business and potential issue for the user.</p>\n        <p>Insights gained from this analysis helped in determining the outlook for this project, providing requirements, specifications and scope, as well as recommendations on the user experience which provided a sound foundation to base our designs on.</p>\n        <span class=\"content-border border-white border-right\"></span>\n      </div><!-- END: text-container -->\n\n      <div class=\"col-sm-12 col-md-6 img-container text-center my-auto\">\n        <img src=\"../../../assets/imgs/wireframes-min.jpg\" srcset=\"../../../assets/imgs/wireframes-min.jpg 1x, ../../../assets/imgs/wireframes@2x-min.jpg 2x, ../../../assets/imgs/wireframes@3x-min.jpg 3x\" alt=\"Website wireframes and prototyping.\">\n      </div><!-- /.img-container -->\n    </div><!-- /.row -->\n  </div><!-- END: Work component -->\n\n  <!-- Work component -->\n  <div class=\"wrk-component col-sm-12\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6 img-container text-center pt-5\">\n        <img src=\"../../../assets/imgs/work/school-list/school-list-prototype.gif\" alt=\"School list prototype\">\n      </div><!-- /.img-container -->\n\n      <div class=\"wrk-text col-sm-12 col-md-6 my-auto p-5 pr-md-5 p-md-0 pt-md-5\">\n        <div class=\"wrk-title font-2-5 font-light\">Solution</div>\n        <p class=\"mar-top-10\">The final design provides the user with a secure application to manage their schools lists, profiles and user information. Admin user accounts are able to add and remove users from the school account and have the ability to publish and un-publish their school lists.</p>\n        <p>The design approach taken was to keep it as simple and clean as possible while keeping a strong tie with the Warehouse Stationery brand.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </div><!-- END: text-container -->\n    </div><!-- /.row -->\n\n\n  </div><!-- END: Work component -->\n\n</div><!-- /.main-container -->\n"

/***/ }),

/***/ "../../../../../src/app/components/work/school-list/school-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-school-list',
            template: __webpack_require__("../../../../../src/app/components/work/school-list/school-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/work/school-list/school-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SchoolListComponent);
    return SchoolListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/work/tcs/tcs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/work/tcs/tcs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <div class=\"section\">\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6 mar-top-100 px-5\">\n        <div class=\"heading font-light font-italic\"><h1>Timber Construction Solutions</h1></div>\n        <ul>\n          <li><span class=\"font-bold\">Technical stack:</span></li>\n          <li class=\"list\">HTML</li>\n          <li class=\"list\">CSS</li>\n          <li class=\"list\">JavaScript</li>\n          <li class=\"list\">PHP</li>\n          <li class=\"list\">Photoshop</li>\n        </ul>\n        <div class=\"wrk-title font-2-5 font-light mar-top-50\">Problem</div>\n        <p class=\"mar-top-10\">To tell their story better through their website. The current website promotes their services and portfolio of projects completed in the past, however it lacks the ability to illustrate the companies business model, key values and the positive impact it's business model has on all the communities it is involved in.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </div><!-- END: text container -->\n\n      <div class=\"col-sm-12 col-md-6 img-container text-center my-auto\">\n        <img src=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg\" srcset=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg 1x, ../../../assets/imgs/work/tcs/tcs-homepage@2x.jpg 2x, ../../../assets/imgs/work/tcs/tcs-homepage@3x.jpg 3x\" alt=\"Timber Construction Solutions website design.\">\n      </div><!-- /.img-container -->\n    </div><!-- /.row -->\n  </div><!-- /.section -->\n\n  <!-- Work component - background image -->\n  <div class=\"wrk-component col-sm-12 users-bg parallax\">\n    <span class=\"img-overlay\">\n      <div class=\"row\">\n        <div class=\"wrk-text col-sm-12 col-md-6 text-white my-auto px-5\">\n          <div class=\"wrk-title font-2-5 font-light\">The Users</div>\n          <p class=\"mar-top-10\">Timber Construction Solutions often competes with businesses local and internationally for private and public building and housing project contracts in countries all around the world. The majority of the clients users are often from a corporate and/or government agency who use the website to gain insights into the company and aid in assessing their credibility and capabilities.</p>\n          <span class=\"content-border border-white border-right\"></span>\n        </div><!-- END: text container -->\n      </div><!-- /.row -->\n    </span><!-- /.img-overlay -->\n  </div><!-- END: Work component - background image -->\n\n  <!-- Work component -->\n  <div class=\"wrk-component col-sm-12\">\n    <div class=\"row\">\n      <div class=\"wrk-text col-sm-12 col-md-6 my-auto px-5\">\n        <div class=\"wrk-title font-2-5 font-light\">Process</div>\n        <p class=\"mar-top-10\">Before any design work was undertaken, 2 weeks were set aside to understanding and familiarising myself with the company, their background, users and business model. Building a strong sense of understanding about the business and their users helped in providing insights into how I could tell their story through the website, while enabling the user to quickly access information easily.</p>\n        <p>During the initial design process, a number of solutions were explored through sketches and wireframes including user journey mapping and interactions. Because of the nature and duration of this project I was unable to perform any in depth user testing and analysis to validate my design decisions.</p>\n        <span class=\"content-border border-char border-right\"></span>\n      </div><!-- END: text-container -->\n\n      <div class=\"col-sm-12 col-md-6 img-container text-center my-auto\">\n        <img src=\"../../../assets/imgs/wireframes-min.jpg\" srcset=\"../../../assets/imgs/wireframes-min.jpg 1x, ../../../assets/imgs/wireframes@2x-min.jpg 2x, ../../../assets/imgs/wireframes@3x-min.jpg 3x\" alt=\"Website wireframes and prototyping.\">\n      </div><!-- /.img-container -->\n    </div><!-- /.row -->\n  </div><!-- END: Work component -->\n\n  <!-- Work component -->\n  <div class=\"wrk-component col-sm-12 black\">\n    <div class=\"row\">\n      <div class=\"wrk-text col-sm-12 col-md-6 text-white my-auto px-5\">\n        <div class=\"wrk-title font-2-5 font-light\">Solution</div>\n        <p class=\"mar-top-10\">The approach taken featured a large graphic navigation on the homepage using the 4 main stages of the building process, bringing the business model of the company to the forefront of the users experience.</p>\n        <p>Each section of the process contains a sub-navigation section with links highlighting the steps and processes of each section. The user can then navigate between each step of the building process using the left and right paddle controls and back to the homepage via the company logo or clicking on home in the breadcrumbs.</p>\n        <span class=\"content-border border-white border-right\"></span>\n      </div><!-- END: text-container -->\n\n      <div class=\"col-sm-12 col-md-6 img-container text-center\">\n        <img src=\"../../../assets/imgs/work/tcs/tcs-prototype-laptop.gif\" alt=\"Timber Construction Solution Prototype\">\n      </div><!-- /.img-container -->\n    </div><!-- /.row -->\n  </div><!-- END: Work component -->\n\n</div><!-- /.main-container -->\n"

/***/ }),

/***/ "../../../../../src/app/components/work/tcs/tcs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TcsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tcs',
            template: __webpack_require__("../../../../../src/app/components/work/tcs/tcs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/work/tcs/tcs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TcsComponent);
    return TcsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/work/work.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"top-section col-sm-12 black\">\n    <div class=\"heading font-light text-yellow font-italic\">My work.</div>\n  </div>\n\n  <!-- Inspirational quote -->\n  <div class=\"section pad-35 charcoal overlay-25 col-sm-12 col-md-6\">\n    <div class=\"container\">\n      <span class=\"quote text-yellow\">People will forget what you said, and what you did, but will never forget the way you made them feel.</span>\n      <div class=\"credits\"><span class=\"text-yellow text-right font-light font-italic\">Maya Angelou</span></div>\n    </div>\n  </div><!-- /.section -->\n\n  <!-- Work component - white -->\n  <div class=\"wrk-component row col-sm-12\">\n    <div class=\"img-container col-sm-12 col-md-6 text-center\">\n      <img src=\"../../../assets/imgs/work/print-copy/photographic-services.png\" srcset=\"../../../assets/imgs/work/print-copy/photographic-services.png 1x, ../../../assets/imgs/work/print-copy/photographic-services@2x.png 2x, ../../../assets/imgs/work/print-copy/photographic-services@3x.png 3x\" alt=\"Warehouse Stationery Print & Photographic services.\">\n    </div><!-- Parallax image -->\n    <div class=\"wrk-text col-sm-12 col-md-6 px-5\">\n      <span class=\"wrk-title text-char font-3 font-italic\">\n        Print & Photographic Services\n      </span>\n      <div class=\"mar-top-15 font-1-8\">\n        <p>Client: Warehouse Stationery</p>\n        <p>Year: 2017</p>\n      </div>\n      <a [routerLink]=\"['/work/print-copy']\" class=\"zk-btn zk-btn-prim\">View project</a>\n    </div>\n  </div><!-- END: Work component - white -->\n\n  <!-- Work component - black -->\n  <div class=\"wrk-component row col-sm-12 black\">\n    <div class=\"wrk-text col-sm-12 col-md-6 px-5\">\n      <span class=\"wrk-title text-white font-3 font-italic\">\n        School List Mobile UX Prototype\n      </span>\n      <div class=\"mar-top-15 font-1-8 text-white\">\n        <p>Client: Warehouse Stationery</p>\n        <p>Year: 2015</p>\n      </div>\n      <a [routerLink]=\"['/work/school-list']\" class=\"zk-btn zk-btn-prim-inverse\">View project</a>\n    </div>\n    <div class=\"img-container col-sm-12 col-md-6\">\n      <img src=\"../../../assets/imgs/work/school-list/school-list.png\" srcset=\"../../../assets/imgs/work/school-list/school-list.png 1x, ../../../assets/imgs/work/school-list/school-list@2x.png 2x, ../../../assets/imgs/work/school-list/school-list@3x.png 3x\" alt=\"Me\">\n    </div><!-- /.img-container -->\n  </div><!-- END: Work component - black -->\n\n  <!-- Work component - white -->\n  <div class=\"wrk-component row col-sm-12\">\n    <div class=\"img-container col-sm-12 col-md-6 text-center\">\n      <img src=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg\" srcset=\"../../../assets/imgs/work/tcs/tcs-homepage.jpg 1x, ../../../assets/imgs/work/tcs/tcs-homepage@2x.jpg 2x, ../../../assets/imgs/work/tcs/tcs-homepage@3x.jpg 3x\" alt=\"Timber Construction Solutions website design.\">\n    </div><!-- Parallax image -->\n    <div class=\"wrk-text col-sm-12 col-md-6 px-5\">\n      <span class=\"wrk-title text-char font-3 font-italic\">\n        Timber Construction Solutions\n      </span>\n      <div class=\"mar-top-15 font-1-8\">\n        <p>Client: BizForce</p>\n        <p>Year: 2014</p>\n      </div>\n      <a [routerLink]=\"['/work/tcs']\" class=\"zk-btn zk-btn-prim\">View project</a>\n    </div>\n  </div><!-- END: Work component - white -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-work',
            template: __webpack_require__("../../../../../src/app/components/work/work.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    // Validate user registration form.
    ValidateService.prototype.validateCF = function (newMsg) {
        // Check if fields are empty.
        if (newMsg.name == undefined || newMsg.email == undefined || newMsg.message == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regEx.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map