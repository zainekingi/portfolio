webpackJsonp([2,4],{

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(663);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(699)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(664)();
// imports


// module
exports.push([module.i, "/* =======================================================\n    FILE:   STYLES.CSS\n    AUTHOR: Zaine Kingi\n    VER:    1.0\n    DATE:   13-7-17\n    DESC:   Global stylesheet for shared styles between\n            components of the application.\n    ......................................................\n            CHANGE LOG\n    ------------------------------------------------------\n    DATE:   VER:    CHANGES:\n    ------------------------------------------------------\n    13-7-17 1.0     Initial release.\n    ---------------------------------------------------- */\n/* Mobile first */\n/* Base resets */\nhtml, body {\n  height: 100%;\n  margin: 0;\n}\n\nbody {\n  padding: 0;\n  background: #fff;\n}\n\nul, ol, li {\n  list-style-type: none;\n}\n\n/* Base structure styling */\n\n.main-container {\n  position: relative;\n  display: block;\n  width: 100%;\n  overflow-x: hidden;\n}\n  .top-section {\n    display: block;\n    height: 200px;\n    margin: 0;\n    padding: 25px 10px;\n  }\n\n  .section {\n    display: block;\n    height: auto;\n    padding: 0;\n    position: relative; /* to position the borders */\n  }\n\n  .section-heading {\n    display: block;\n    clear: both;\n    text-align: center;\n    margin: 50px 0 35px;\n    border-top: 1px solid #444;\n  }\n  .container {\n    width: 100%;\n    height: auto;\n  }\n  .portrait > img {\n    display: block;\n    margin: 35px auto 0;\n    width: 50%;\n  }\n    .credits {\n      width: 100%;\n    }\n  .skill-container {\n    column-count: unset;\n    -webkit-column-count: unset;\n    -moz-column-count: unset;\n  }\n    .skill-item {\n      margin: 25px auto 50px;\n      text-align: center;\n      padding: 25px 50px;\n    }\n    .skill-icn {\n      display: block;\n      height: 100px;\n      margin: auto;\n    }\n\n\n\n/* Colours */\n.black {\n  background: #000000;\n}\n.charcoal {\n  background: #1e1e1e;\n}\n.pale {\n  background: #f9f9f9;\n}\n.yellow {\n  background: #e4ff00;\n}\n\n\n\n\n/* UI elements */\n/* Text border UI styles */\n.separator {\n  display: block;\n  width: 100%;\n  border-top: 1px dotted;\n}\n.content-border {\n  display: block;\n  width: 45px;\n  border-top: 1px solid;\n  margin: 15px 0;\n}\n.border-right {\n  float: right;\n}\n.border-char {\n  border-color: #1e1e1e;\n}\n.border-white {\n  border-color: #f9f9f9;\n}\n.border-yellow {\n  border-color: #e4ff00;\n}\n.hr {\n  border-top: 1px solid #ffffff;\n}\n\n\n/* Icon styling */\n.icon {\n  height: 75px;\n}\n\n\n/* Element positioning utility classes */\n\n\n\n/* Animation helper classes */\n/* Element fade-in */\n.fade-in {\n  transition: 1s;\n  /* IE 8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n\n  /* IE 5-7 */\n  filter: alpha(opacity=100);\n\n  /* Netscape */\n  -moz-opacity: 1;\n\n  /* Safari 1.x */\n  -khtml-opacity: 1;\n\n  /* Good browsers */\n  opacity: 1;\n}\n/* Element fade-out */\n.fade-out {\n  transition: 1s;\n  /* IE 8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n\n  /* IE 5-7 */\n  filter: alpha(opacity=0);\n\n  /* Netscape */\n  -moz-opacity: 0;\n\n  /* Safari 1.x */\n  -khtml-opacity: 0;\n\n  /* Good browsers */\n  opacity: 0;\n}\n/* Element slide up */\n.slide-up {\n  transition: 1s;\n  margin-top: 0;\n}\n/* Element slide down */\n.slide-down {\n  transition: 1s;\n  margin-top: 100px;\n}\n\n\n\n/* Opacity utility class */\n.opacity-10 {\n  /* IE 8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n\n  /* IE 5-7 */\n  filter: alpha(opacity=100);\n\n  /* Netscape */\n  -moz-opacity: 1;\n\n  /* Safari 1.x */\n  -khtml-opacity: 1;\n\n  /* Good browsers */\n  opacity: 1;\n}\n.opacity-5 {\n  /* IE 8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n\n  /* IE 5-7 */\n  filter: alpha(opacity=50);\n\n  /* Netscape */\n  -moz-opacity: 0.5;\n\n  /* Safari 1.x */\n  -khtml-opacity: 0.5;\n\n  /* Good browsers */\n  opacity: 0.5;\n}\nopacity-4 {\n  /* IE 8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n\n  /* IE 5-7 */\n  filter: alpha(opacity=40);\n\n  /* Netscape */\n  -moz-opacity: 0.4;\n\n  /* Safari 1.x */\n  -khtml-opacity: 0.4;\n\n  /* Good browsers */\n  opacity: 0.4;\n}\n.opacity-3 {\n  /* IE 8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)\";\n\n  /* IE 5-7 */\n  filter: alpha(opacity=30);\n\n  /* Netscape */\n  -moz-opacity: 0.3;\n\n  /* Safari 1.x */\n  -khtml-opacity: 0.3;\n\n  /* Good browsers */\n  opacity: 0.3;\n}\n.opacity-2 {\n  /* IE 8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n\n  /* IE 5-7 */\n  filter: alpha(opacity=20);\n\n  /* Netscape */\n  -moz-opacity: 0.2;\n\n  /* Safari 1.x */\n  -khtml-opacity: 0.2;\n\n  /* Good browsers */\n  opacity: 0.2;\n}\n.opacity-1 {\n  /* IE 8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n\n  /* IE 5-7 */\n  filter: alpha(opacity=10);\n\n  /* Netscape */\n  -moz-opacity: 0.1;\n\n  /* Safari 1.x */\n  -khtml-opacity: 0.1;\n\n  /* Good browsers */\n  opacity: 0.1;\n}\n.opacity-0 {\n  /* IE 8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n\n  /* IE 5-7 */\n  filter: alpha(opacity=0);\n\n  /* Netscape */\n  -moz-opacity: 0;\n\n  /* Safari 1.x */\n  -khtml-opacity: 0;\n\n  /* Good browsers */\n  opacity: 0;\n}\n\n\n/* Parallax utility class */\n.parallax {\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n/* Image overlay */\n.img-overlay {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 500px;\n  background-color: rgba(0,0,0,0.4);\n  transition: background-color ease-in-out .2s;\n  -webkit-transition: background-color ease-in-out .2s;\n  -moz-transition: background-color ease-in-out .2s;\n}\n\n/* Hero image component */\n.hero-img-container {\n  height: 500px;\n}\n.rose-img-bg {\n  background-image: url(\"/assets/imgs/rose_bud_thumb.jpg\");\n}\n/* Hero image text overlay */\n.hero-text {\n  display: block;\n  position: absolute;\n  width: 90%;\n}\n  .hero-text h1 {\n    font-family: Times New Roman, serif;\n    font-size: 7rem;\n    font-weight: 100;\n  }\n.text-top {\n  top: 0;\n}\n.text-v-middle, .text-h-middle {\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  top: 50%;\n}\n.text-h-middle {\n  left: 50%;\n}\n.text-bottom {\n  bottom: 0;\n}\n.text-right {\n  right: 0;\n}\n\n\n/* Background blur components */\n.bg-blur-white, .bg-blur-black {\n  background-color: #ffffff;\n\n  /* IE 8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n\n  /* IE 5-7 */\n  filter: alpha(opacity=50);\n\n  /* Netscape */\n  -moz-opacity: 0.5;\n\n  /* Safari 1.x */\n  -khtml-opacity: 0.5;\n\n  /* Good browsers */\n  opacity: 0.5;\n}\n.bg-blur-black {\n  background-color: #000000;\n}\n\n\n/* Work components */\n.wrk-component {\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n  padding: 0;\n}\n  .wrk-text {\n    padding: 15% 25px 0;\n  }\n  .img-container {\n    overflow: hidden;\n    height: 350px;\n    display: block;\n    margin: 50px auto 0;\n    padding: 0;\n  }\n  #slider {\n    height: 100%;\n    position: relative;\n  }\n    .img-container > img, #slider > img {\n      margin: 0;\n      padding: 0;\n      height: 100%;\n    }\n\n    .users-bg {\n      background-image: url(" + __webpack_require__(700) + ");\n    }\n\n    .wrk-title:after {\n      content: \" /\";\n      font-size: 3rem;\n    }\n\n/* Company logo component */\n.logo-container {\n  column-count: 1;\n  -webkit-column-count: 1;\n}\n  .logo-container img {\n    display: block;\n    margin: 25px auto;\n    width: 40%;\n  }\n\n/* Overlaying element */\n.overlay-25 {\n  margin-top: -25px;\n}\n.overlay-50 {\n  margin-top: -50px;\n}\n.overlay-75 {\n  margin-top: -75px;\n}\n.overlay-100 {\n  margin-top: -100px;\n}\n.mar-top-5 {\n  margin-top: 5px;\n}\n.mar-top-10 {\n   margin-top: 10px;\n }\n.mar-top-15 {\n  margin-top: 15px;\n}\n.mar-top-25 {\n  margin-top: 25px;\n}\n.mar-top-50 {\n  margin-top: 50px;\n}\n.mar-top-100 {\n  margin-top: 100px;\n}\n.clear {\n  clear: both;\n}\n\n\n/* Typography */\nbody {\n  font-family: \"Avenir\", \"Open Sans\", Arial, sans-serif;\n  font-size: 1.5rem;\n  font-weight: 100;\n  color: #444;\n  line-height: 2.4rem;\n}\n.quote {\n  font-family: \"Avenir\", \"Open Sans\", Arial, sans-serif;\n  font-size: 3.2rem;\n  font-style: italic;\n  font-weight: lighter;\n  line-height: 3.2rem;\n  word-wrap: break-word;\n}\n.quote:before {\n  padding-right: 10px;\n}\n.quote:before, .quote:after {\n  content: ' \" ';\n  font-family: Arial;\n  font-size: 8rem;\n  line-height: 0;\n  margin-left: -5px;\n  vertical-align: bottom;\n}\n.credits {\n  text-align: right;\n}\n.credits:before {\n  content: \"~ \";\n  font-size: 2rem;\n}\n.list:before {\n  content: \"- \";\n  font-size: 2rem;\n}\n.heading {\n  margin-top: 50px;\n  font-family: \"Avenir\", \"Open Sans\", Arial, sans-serif;\n  font-size: 3rem;\n  /*color: #e4ff00;*/\n}\n.section-heading {\n  display: block;\n  margin-bottom: 75px;\n}\n.section-heading h2 {\n  margin: -20px auto 0;\n  background-color: #fff;\n  height: 25px;\n  width: 150px;\n}\n\n/* Text colours */\n.text-yellow {\n  color: #e4ff00;\n}\n.text-white {\n  color: #f9f9f9;\n}\n\n/* Text alignment */\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-indent-15 {\n  text-indent: 15px;\n}\n\n\n/* Font sizes */\n.font-05 {\n  font-size: .5rem;\n}\n.font-06 {\n  font-size: .6rem;\n}\n.font-07 {\n  font-size: .7rem;\n}\n.font-08 {\n  font-size: .8rem;\n}\n.font-09 {\n  font-size: .9rem;\n}\n.font-1 {\n  font-size: 1rem;\n}\n.font-1-1 {\n  font-size: 1.1rem;\n}\n.font-1-2 {\n  font-size: 1.2rem;\n}\n.font-1-3 {\n  font-size: 1.3rem;\n}\n.font-1-4 {\n  font-size: 1.4rem;\n}\n.font-1-5 {\n  font-size: 1.5rem;\n}\n.font-1-6 {\n  font-size: 1.6rem;\n}\n.font-1-7 {\n  font-size: 1.7rem;\n}\n.font-1-8 {\n  font-size: 1.8rem;\n}\n.font-1-9 {\n  font-size: 1.9rem;\n}\n.font-2 {\n  font-size: 2rem;\n}\n.font-2-1 {\n  font-size: 2.1rem;\n}\n.font-2-2 {\n  font-size: 2.2rem;\n}\n.font-2-3 {\n  font-size: 2.3rem;\n}\n.font-2-4 {\n  font-size: 2.4rem;\n}\n.font-2-5 {\n  font-size: 2.5rem;\n}\n.font-3 {\n  font-size: 3rem;\n}\n\n\n/* Line heights */\n.line-0-5 {\n  line-height: .5rem;\n}\n.line-1 {\n  line-height: 1rem;\n}\n.line-1-5 {\n  line-height: 1.5rem;\n}\n.line-1-6 {\n   line-height: 1.6rem;\n }\n.line-1-7 {\n  line-height: 1.7rem;\n}\n.line-1-8 {\n  line-height: 1.8rem;\n}\n.line-1-9 {\n  line-height: 1.9rem;\n}\n.line-2 {\n  line-height: 2rem;\n}\n.line-2-1 {\n  line-height: 2.1rem;\n}\n.line-2-2 {\n  line-height: 2.2rem;\n}\n.line-2-3 {\n  line-height: 2.3rem;\n}\n.line-2-4 {\n  line-height: 2.4rem;\n}\n.line-2-5 {\n  line-height: 2.5rem;\n}\n.line-2-6 {\n  line-height: 2.6rem;\n}\n.line-2-7 {\n  line-height: 2.7rem;\n}\n.line-2-8 {\n  line-height: 2.8rem;\n}\n.line-2-9 {\n  line-height: 2.9rem;\n}\n.line-3 {\n  line-height: 3rem;\n}\n\n\n\n\n/* Font weights */\n.font-bold {\n  font-weight: bold;\n}\n.font-light {\n  font-weight: lighter;\n}\n.font-100 {\n  font-weight: 100;\n}\n.font-200 {\n  font-weight: 200;\n}\n.font-300 {\n  font-weight: 300;\n}\n.font-400 {\n  font-weight: 400;\n}\n.font-500 {\n  font-weight: 500;\n}\n.font-600 {\n  font-weight: 600;\n}\n\n/* Font styles */\n.font-italic {\n  font-style: italic;\n}\n.font-normal {\n  font-style: normal;\n}\n.font-oblique {\n  font-style: oblique;\n}\n\n/* Padding */\n.pad-5 {\n  padding: 5px;\n}\n.pad-10 {\n  padding: 10px;\n}\n.pad-15 {\n  padding: 15px;\n}\n.pad-20 {\n  padding: 20px;\n}\n.pad-25 {\n  padding: 25px;\n}\n.pad-30 {\n  padding: 30px;\n}\n.pad-35 {\n  padding: 35px;\n}\n\n\n/* Custom button styling */\n.zk-btn {\n  display: block;\n  max-width: 250px;\n  height: 35px;\n  line-height: 0;\n  border-radius: 0;\n  padding: 25px;\n  margin: 5% auto;\n  text-transform: none;\n  border: 1px solid;\n  text-align: center;\n  cursor: pointer;\n}\n.zk-btn-prim, .zk-btn-prim-inverse {\n  background: none;\n  color: #444;\n  transition: background .4s ease-in-out, color .4s ease-in-out;\n  -webkit-transition: background .4s ease-in-out, color .4s ease-in-out;\n  -moz-transition: background .4s ease-in-out, color .4s ease-in-out;\n}\n\n.zk-btn-prim-inverse {\n  color: #fff;\n}\n\n.zk-btn-prim-inverse:hover {\n  text-decoration: none;\n  background: #fff;\n  color: #444;\n}\n\n.zk-btn-prim:hover {\n  text-decoration: none;\n  background: #444;\n  color: #fff;\n}\n\n.scroll-y {\n  color: #ffffff;\n  font-size: 3rem;\n  font-weight: lighter;\n  cursor: pointer;\n  text-decoration: none;\n  transform: rotate(0deg);\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  transition: color .2s ease-in-out, text-decoration .8s ease-in-out, -webkit-transform .2s ease-in-out;\n  transition: color .2s ease-in-out, transform .2s ease-in-out, text-decoration .8s ease-in-out;\n  transition: color .2s ease-in-out, transform .2s ease-in-out, text-decoration .8s ease-in-out, -webkit-transform .2s ease-in-out;\n  -webkit-transition: color .2s ease-in-out, transform .2s ease-in-out, text-decoration .8s ease-in-out;\n  -moz-transition: color .2s ease-in-out, transform .2s ease-in-out, text-decoration .8s ease-in-out;\n  -o-transition: color .2s ease-in-out, transform .2s ease-in-out, text-decoration .8s ease-in-out;\n}\n\n.scroll-y:hover {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n  text-decoration: underline;\n}\n\n\n/* =============================\n   Media queries\n   Large mobile and small tablet\n   screens.\n   489px - 767px\n   -------------------------- */\n@media screen and (min-width: 489px) {\n\n}\n\n/* 768px - 987px */\n@media screen and (min-width: 768px) {\n  /* Base structure styling */\n  .main-container {\n    padding-left: 75px;\n  }\n    .section {\n\n    }\n\n      /* Hero component styling */\n      .hero-text {\n        width: 75%;\n      }\n\n      .heading {\n        margin-top: 0;\n      }\n\n    .skill-container {\n      column-count: 3;\n      -webkit-column-count: 3;\n      -moz-column-count: 3;\n    }\n      .skill-item {\n        display: inline-block;\n      }\n\n    .logo-container {\n      column-count: 3;\n      -webkit-column-count: 3;\n      -moz-column-count: 3;\n    }\n    .logo-container img {\n      display: block;\n      margin: 25px auto;\n      width: 75%;\n    }\n\n    /* Work components */\n    .wrk-component {\n      text-align: left;\n      overflow: hidden;\n    }\n      .img-container {\n        height: 500px;\n        margin: 0;\n      }\n      .wrk-text {\n        padding-top: 10%;\n      }\n\n    .zk-btn {\n      margin: 25px 0;\n    }\n}\n\n@media screen and (min-width: 988px) {\n\n\n}\n", ""]);

// exports


/***/ }),

/***/ 664:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 699:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "users.jpg";

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(385);


/***/ })

},[704]);
//# sourceMappingURL=styles.bundle.map