/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar View = __webpack_require__(/*! ./view/View */ \"./src/view/View.js\");\n\nvar App = /*#__PURE__*/function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.view = new View();\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      document.querySelector('body').innerHTML = this.view.render();\n    }\n  }]);\n\n  return App;\n}();\n\nmodule.exports = App;\n\n//# sourceURL=webpack://my-webpack-project/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var App = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\nwindow.onload = function () {\n  var app = new App();\n  app.render();\n  app.view.update();\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/view/CarSVG.js":
/*!****************************!*\
  !*** ./src/view/CarSVG.js ***!
  \****************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar CarSVG = /*#__PURE__*/function () {\n  function CarSVG() {\n    _classCallCheck(this, CarSVG);\n  }\n\n  _createClass(CarSVG, [{\n    key: \"render\",\n    value: function render(color) {\n      return \"\\n<?xml version=\\\"1.0\\\" standalone=\\\"no\\\"?>\\n<!DOCTYPE svg PUBLIC \\\"-//W3C//DTD SVG 20010904//EN\\\"\\n \\\"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\\\">\\n<svg class=\\\"car_img\\\" version=\\\"1.0\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"\\nviewBox=\\\"0 0 1280.000000 640.000000\\\"\\n preserveAspectRatio=\\\"xMidYMid meet\\\">\\n<metadata>\\nCreated by potrace 1.15, written by Peter Selinger 2001-2017\\n</metadata>\\n<g transform=\\\"translate(0.000000,640.000000) scale(0.100000,-0.100000)\\\"\\nfill=\\\"\".concat(color, \"\\\" stroke=\\\"none\\\">\\n<path d=\\\"M3525 5341 c-72 -18 -79 -28 -90 -121 -4 -30 -11 -62 -16 -71 -4 -9\\n-97 -51 -206 -94 -774 -304 -1348 -540 -1603 -661 -163 -77 -222 -91 -421\\n-104 -85 -5 -170 -14 -189 -20 -101 -32 -362 -58 -620 -63 l-115 -2 -47 -80\\nc-47 -78 -47 -80 -29 -100 34 -36 35 -77 5 -177 -30 -99 -34 -178 -19 -370 5\\n-67 4 -88 -6 -88 -29 0 -83 -56 -110 -114 -50 -106 -74 -343 -48 -467 13 -58\\n13 -62 3 -159 -5 -54 16 -238 28 -244 2 -1 29 -20 61 -41 73 -49 123 -103 132\\n-143 17 -79 167 -155 355 -181 104 -15 969 -97 1087 -104 l32 -2 5 160 c7 230\\n50 394 146 559 281 479 917 673 1405 429 316 -159 530 -424 598 -742 22 -106\\n29 -365 13 -519 l-8 -82 3002 0 c2855 0 3002 1 2995 18 -33 87 -56 325 -45\\n461 28 320 177 567 459 759 399 273 847 282 1243 24 239 -157 397 -392 460\\n-687 18 -84 15 -341 -5 -430 -8 -38 -14 -71 -12 -73 7 -8 386 20 478 34 180\\n28 253 65 304 152 24 41 28 57 28 127 -1 44 -9 117 -20 163 -18 79 -18 88 -2\\n190 31 199 40 306 41 497 1 176 -1 195 -23 260 -46 135 -103 190 -283 274\\n-222 104 -633 220 -1168 330 -523 108 -1524 210 -2054 211 l-229 0 -236 139\\nc-813 477 -1593 884 -1852 966 -498 157 -1598 195 -2892 100 l-188 -14 -47 30\\nc-92 58 -223 89 -297 70z m1912 -311 c13 -45 58 -305 88 -515 33 -226 74 -539\\n71 -542 -7 -7 -1672 40 -2054 58 -357 16 -464 56 -573 215 -62 91 -87 225 -59\\n326 12 40 56 74 192 148 369 198 799 289 1618 340 246 15 290 16 510 16 l194\\n-1 13 -45z m649 10 c383 -36 717 -86 934 -139 210 -52 451 -163 720 -332 141\\n-88 379 -259 380 -271 0 -5 -14 -8 -32 -8 -48 0 -114 -37 -140 -78 -24 -39\\n-30 -113 -15 -189 l9 -43 -904 0 -904 0 -176 540 -175 540 47 0 c25 0 141 -9\\n256 -20z\\\"/>\\n<path d=\\\"M2617 3125 c-431 -82 -774 -440 -838 -875 -17 -117 -7 -292 24 -410\\n113 -436 497 -751 947 -777 507 -29 959 313 1076 813 28 117 26 348 -4 467\\n-94 378 -383 670 -760 768 -105 27 -336 34 -445 14z m378 -310 c84 -21 209\\n-85 280 -142 116 -94 210 -242 251 -393 23 -87 24 -260 0 -355 -58 -237 -242\\n-439 -473 -519 -531 -186 -1074 277 -969 828 30 152 94 274 206 386 111 110\\n237 178 385 206 84 16 235 11 320 -11z\\\"/>\\n<path d=\\\"M2918 2568 c2 -90 7 -167 12 -172 17 -17 108 58 201 166 l51 57 -48\\n31 c-52 33 -131 65 -185 75 l-34 6 3 -163z\\\"/>\\n<path d=\\\"M2591 2700 c-62 -22 -167 -82 -164 -94 3 -13 237 -216 249 -216 7 0\\n15 7 18 16 8 20 8 127 -1 232 -7 95 -8 96 -102 62z\\\"/>\\n<path d=\\\"M3209 2355 c-57 -64 -105 -123 -107 -131 -6 -25 46 -35 157 -29 58 3\\n121 8 139 11 33 5 34 6 27 42 -7 44 -64 167 -92 201 l-19 24 -105 -118z\\\"/>\\n<path d=\\\"M2260 2409 c-31 -44 -68 -133 -77 -186 l-6 -33 155 0 c165 0 201 9\\n181 44 -13 24 -204 216 -214 216 -5 0 -22 -18 -39 -41z\\\"/>\\n<path d=\\\"M2786 2354 c-36 -35 0 -87 44 -64 26 14 26 56 1 70 -25 13 -27 13\\n-45 -6z\\\"/>\\n<path d=\\\"M2751 2186 c-57 -32 -68 -111 -22 -157 43 -42 101 -43 143 -1 42 42\\n41 100 -1 143 -33 32 -78 38 -120 15z\\\"/>\\n<path d=\\\"M2560 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20\\n-54 2z\\\"/>\\n<path d=\\\"M3002 2124 c-27 -19 -28 -36 -3 -58 25 -23 61 -6 61 29 0 33 -30 49\\n-58 29z\\\"/>\\n<path d=\\\"M2245 1993 c-77 -6 -76 -5 -59 -65 16 -55 61 -146 92 -186 l18 -23\\n103 122 c57 67 104 129 105 138 1 14 -14 16 -104 17 -58 0 -127 -1 -155 -3z\\\"/>\\n<path d=\\\"M3165 1981 c-44 -4 -61 -10 -63 -22 -3 -16 210 -229 228 -229 22 0\\n86 141 105 228 l7 32 -109 -2 c-59 -1 -135 -4 -168 -7z\\\"/>\\n<path d=\\\"M2776 1914 c-19 -18 -19 -20 -6 -45 6 -11 21 -19 35 -19 20 0 45 24\\n45 44 0 10 -32 36 -45 36 -7 0 -21 -7 -29 -16z\\\"/>\\n<path d=\\\"M2589 1743 c-86 -90 -139 -151 -139 -162 0 -25 179 -101 236 -101\\nl27 0 -7 143 c-9 166 -13 187 -35 187 -9 0 -46 -30 -82 -67z\\\"/>\\n<path d=\\\"M2936 1801 c-6 -10 -24 -168 -29 -258 -3 -60 -2 -63 19 -63 79 0 262\\n68 248 92 -5 7 -53 64 -108 126 -93 105 -117 124 -130 103z\\\"/>\\n<path d=\\\"M10723 3125 c-318 -58 -597 -266 -743 -555 -223 -441 -98 -996 289\\n-1288 112 -84 188 -125 311 -166 274 -91 545 -70 802 61 552 282 735 983 392\\n1500 -225 339 -651 521 -1051 448z m385 -315 c348 -98 579 -443 532 -796 -67\\n-508 -596 -796 -1055 -574 -239 116 -396 352 -412 620 -20 335 192 640 516\\n745 122 40 289 42 419 5z\\\"/>\\n<path d=\\\"M11017 2568 c3 -90 9 -167 14 -172 13 -14 53 18 155 122 l95 97 -23\\n18 c-50 40 -189 97 -235 97 -10 0 -11 -33 -6 -162z\\\"/>\\n<path d=\\\"M10705 2706 c-50 -16 -133 -58 -163 -82 l-23 -19 121 -107 c67 -60\\n128 -108 135 -108 23 0 27 39 20 186 -8 162 -4 157 -90 130z\\\"/>\\n<path d=\\\"M11307 2354 c-59 -65 -107 -126 -107 -136 0 -11 11 -18 38 -22 44 -7\\n278 7 289 17 15 16 -51 183 -94 236 l-19 24 -107 -119z\\\"/>\\n<path d=\\\"M10362 2413 c-39 -62 -70 -134 -78 -184 l-7 -39 152 0 c86 0 161 5\\n172 10 17 10 18 13 5 38 -8 15 -59 71 -114 125 l-99 99 -31 -49z\\\"/>\\n<path d=\\\"M10888 2359 c-24 -14 -23 -56 2 -69 44 -23 80 29 44 64 -18 19 -23\\n19 -46 5z\\\"/>\\n<path d=\\\"M10851 2187 c-49 -29 -66 -101 -35 -146 9 -13 32 -29 50 -37 29 -12\\n39 -12 68 0 99 41 85 180 -19 192 -24 3 -50 -1 -64 -9z\\\"/>\\n<path d=\\\"M10660 2136 c-19 -23 -8 -61 18 -64 44 -7 67 32 36 62 -19 20 -38 20\\n-54 2z\\\"/>\\n<path d=\\\"M11096 2124 c-9 -8 -16 -22 -16 -29 0 -13 26 -45 36 -45 20 0 44 25\\n44 45 0 14 -8 29 -19 35 -25 13 -27 13 -45 -6z\\\"/>\\n<path d=\\\"M10335 1991 c-60 -6 -60 -6 -57 -36 9 -69 104 -248 122 -229 57 61\\n210 250 207 258 -4 12 -176 17 -272 7z\\\"/>\\n<path d=\\\"M11267 1983 c-68 -5 -79 -19 -47 -60 23 -31 200 -193 210 -193 3 0\\n20 24 37 53 29 48 52 111 67 180 l6 27 -107 -2 c-60 -1 -134 -3 -166 -5z\\\"/>\\n<path d=\\\"M10870 1910 c-16 -31 4 -62 38 -58 21 2 28 9 30 32 5 45 -47 65 -68\\n26z\\\"/>\\n<path d=\\\"M10651 1703 c-56 -59 -101 -113 -101 -120 0 -28 172 -103 237 -103\\nl26 0 -7 123 c-10 179 -15 207 -36 207 -10 0 -63 -48 -119 -107z\\\"/>\\n<path d=\\\"M11035 1801 c-7 -12 -23 -144 -29 -243 -4 -77 -4 -78 19 -78 45 0\\n130 22 193 51 l64 29 -19 23 c-65 82 -198 227 -209 227 -7 0 -15 -4 -19 -9z\\\"/>\\n</g>\\n</svg>\\n\\n\");\n    }\n  }]);\n\n  return CarSVG;\n}();\n\nmodule.exports = CarSVG;\n\n//# sourceURL=webpack://my-webpack-project/./src/view/CarSVG.js?");

/***/ }),

/***/ "./src/view/CarView.js":
/*!*****************************!*\
  !*** ./src/view/CarView.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar CarSVG = __webpack_require__(/*! ./CarSVG */ \"./src/view/CarSVG.js\");\n\nvar CarView = /*#__PURE__*/function () {\n  function CarView(car) {\n    _classCallCheck(this, CarView);\n\n    this.car = car;\n    this.imgElement = null;\n    this.carSVG = new CarSVG();\n  }\n\n  _createClass(CarView, [{\n    key: \"render\",\n    value: function render() {\n      console.log(this.carSVG.render());\n      return \"\\n        <div class=\\\"garage__carview\\\">\\n            <div class=\\\"garage__carline\\\">\\n                <span class=\\\"button\\\">Select</span>\\n                <span class=\\\"button\\\">Remove</span>\\n                <div class=\\\"garage__cartitle\\\">\".concat(this.car.name, \"</div>\\n            </div>\\n            <div class=\\\"garage__carline\\\">\\n                <span class=\\\"button button-small\\\">A</span>\\n                <span class=\\\"button button-small\\\">B</span>\\n                \").concat(this.carSVG.render(this.car.color), \"\\n            </div>\\n            <div class=\\\"garage__carline\\\">\\n            <hr class=\\\"garage__line\\\">\\n            </div>\\n        </div>\\n        \");\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      if (this.imgElement == null) {\n        this.imgElement = document.querySelector('.car_img');\n      }\n\n      console.log(this.imgElement);\n    }\n  }]);\n\n  return CarView;\n}();\n\nmodule.exports = CarView;\n\n//# sourceURL=webpack://my-webpack-project/./src/view/CarView.js?");

/***/ }),

/***/ "./src/view/GarageView.js":
/*!********************************!*\
  !*** ./src/view/GarageView.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar CarView = __webpack_require__(/*! ./CarView */ \"./src/view/CarView.js\");\n\nvar GarageView = /*#__PURE__*/function () {\n  function GarageView() {\n    _classCallCheck(this, GarageView);\n\n    this.cars = null;\n    this.carView = new CarView({\n      name: \"bmw vesta\",\n      color: \"#FBB13C\"\n    });\n  }\n\n  _createClass(GarageView, [{\n    key: \"setCars\",\n    value: function setCars(cars) {\n      this.cars = cars;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var innerHTML = this.carView.render() + this.carView.render() + this.carView.render();\n      return \"<div class=\\\"garage__view\\\">\\n            <div class=\\\"garage__form\\\">\\n                <div class=\\\"garage__formline\\\">\\n                    <input class=\\\"garage__carname\\\"></input>\\n                    <span  class=\\\"button\\\">Create</span>\\n                </div>\\n                <div class=\\\"garage__formline\\\">\\n                    <input class=\\\"garage__carname\\\"></input>\\n                    <span class=\\\"button\\\">Update</span>\\n                </div>\\n                <div class=\\\"garage__formline\\\">\\n                    <span class=\\\"button\\\">Race</span>\\n                    <span  class=\\\"button\\\">Reset</span>\\n                    <span  class=\\\"button\\\">Generate</span>\\n                </div>\\n            </div>\\n            <div class=\\\"garage__title\\\">Garage (999)</div>\\n            <div class=\\\"garage__page\\\">Page (999)</div>\\n            <div class=\\\"garage__carlist\\\">\\n                \".concat(innerHTML, \"\\n            </div>\\n        </div>\");\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.carView.update();\n    }\n  }]);\n\n  return GarageView;\n}();\n\nmodule.exports = GarageView;\n\n//# sourceURL=webpack://my-webpack-project/./src/view/GarageView.js?");

/***/ }),

/***/ "./src/view/View.js":
/*!**************************!*\
  !*** ./src/view/View.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar css = __webpack_require__(/*! ./view.css */ \"./src/view/view.css\");\n\nvar GarageView = __webpack_require__(/*! ./GarageView */ \"./src/view/GarageView.js\");\n\nvar WinnersView = __webpack_require__(/*! ./WinnersView */ \"./src/view/WinnersView.js\");\n\nvar View = /*#__PURE__*/function () {\n  function View() {\n    _classCallCheck(this, View);\n\n    this.garageView = new GarageView();\n    this.winnersView = new WinnersView();\n  }\n\n  _createClass(View, [{\n    key: \"render\",\n    value: function render() {\n      var innerHTML = '';\n      innerHTML += this.garageView.render();\n      innerHTML += this.winnersView.render();\n      console.log(innerHTML);\n      return \"\\n        <div class=\\\"message\\\">\\uD83D\\uDC31\\uD83D\\uDC31\\uD83D\\uDC31 \\u041F\\u041E\\u0416\\u0410\\u041B\\u0423\\u0419\\u0421\\u0422\\u0410, \\u041F\\u0420\\u041E\\u0412\\u0415\\u0420\\u042C\\u0422\\u0415 \\u041C\\u0415\\u041D\\u042F \\u041F\\u041E\\u0417\\u0416\\u0415 \\u0417\\u0410\\u0420\\u0410\\u041D\\u0415\\u0415 \\u0421\\u041F\\u0410\\u0421\\u0418\\u0411\\u041E \\uD83D\\uDC31\\uD83D\\uDC31\\uD83D\\uDC31</div>\\n        <header class=\\\"header\\\">\\n        <div class=\\\"header__logo\\\">Async-Race</div>\\n        <div class=\\\"header__menu\\\">\\n            <div class=\\\"header__menuitem\\\">Garage</div>\\n            <div class=\\\"header__menuitem\\\">Winners</div>\\n        </div>\\n        </header>\\n        <div class=\\\"main\\\">\".concat(innerHTML, \"</div>\");\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      this.garageView.update();\n    }\n  }]);\n\n  return View;\n}();\n\nmodule.exports = View;\n\n//# sourceURL=webpack://my-webpack-project/./src/view/View.js?");

/***/ }),

/***/ "./src/view/WinnersView.js":
/*!*********************************!*\
  !*** ./src/view/WinnersView.js ***!
  \*********************************/
/***/ ((module) => {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar WinnersView = /*#__PURE__*/function () {\n  function WinnersView() {\n    _classCallCheck(this, WinnersView);\n  }\n\n  _createClass(WinnersView, [{\n    key: \"render\",\n    value: function render() {\n      return \"<div class=\\\"winners__view\\\">WinnersView</div>\";\n    }\n  }]);\n\n  return WinnersView;\n}();\n\nmodule.exports = WinnersView;\n\n//# sourceURL=webpack://my-webpack-project/./src/view/WinnersView.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/view/view.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/view/view.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".message{\\r\\n    background: red;\\r\\n    font-size: 40px;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background-color: #291F1E;\\r\\n    font-family: 'Kanit', sans-serif;\\r\\n    font-size: 18px;\\r\\n    font-weight: 600;\\r\\n}\\r\\n\\r\\n.header {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 20px;\\r\\n    padding: 20px;\\r\\n    background-color: #FBB13C;\\r\\n}\\r\\n\\r\\n.header__logo {\\r\\n    font-size: 48px;\\r\\n}\\r\\n\\r\\n.header__menu {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    gap: 50px;\\r\\n\\r\\n}\\r\\n\\r\\n.main{\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n}\\r\\n\\r\\n.garage__view, .winners__view {\\r\\n    width: 50%;\\r\\n    height: 100px;\\r\\n}\\r\\n\\r\\n.button {\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    padding: 5px;\\r\\n    cursor: pointer;\\r\\n    background-color: #FBB13C;\\r\\n    width: 100px;\\r\\n}\\r\\n\\r\\n.button-small {\\r\\n    width: auto;\\r\\n}\\r\\n\\r\\n.button:hover {\\r\\n    background-color: #477998;\\r\\n}\\r\\n\\r\\n.button:active {\\r\\n    background-color: #E6E8E6;\\r\\n}\\r\\n\\r\\n.garage__view {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 20px;\\r\\n    padding: 20px;\\r\\n}\\r\\n\\r\\n.garage__form {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 10px;\\r\\n}\\r\\n\\r\\n.garage__formline {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    gap: 10px;\\r\\n\\r\\n}\\r\\n\\r\\n.garage__title {\\r\\n    font-size: 32px;\\r\\n    color: #FBB13C;\\r\\n}\\r\\n\\r\\n.garage__page {\\r\\n    font-size: 24px;\\r\\n    color: #FBB13C;\\r\\n\\r\\n}\\r\\n\\r\\n.garage__carlist {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 50px;\\r\\n}\\r\\n\\r\\n.garage__carview {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 5px;\\r\\n}\\r\\n\\r\\n.garage__carline {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    gap: 10px;\\r\\n    align-items: flex-start;\\r\\n}\\r\\n\\r\\n.car_img {\\r\\n    width: 100px;\\r\\n}\\r\\n\\r\\n.garage__cartitle{\\r\\n    color: #FBB13C;\\r\\n    font-size: 30px;\\r\\n}\\r\\n\\r\\n.garage__line {\\r\\n    width: 100%;\\r\\n    border: none;;\\r\\n    border-top: 2px dashed #FBB13C;\\r\\n    height: 0;\\r\\n    color: #291F1E;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/view/view.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/view/view.css":
/*!***************************!*\
  !*** ./src/view/view.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_view_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./view.css */ \"./node_modules/css-loader/dist/cjs.js!./src/view/view.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_view_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_view_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_view_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_view_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/view/view.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;