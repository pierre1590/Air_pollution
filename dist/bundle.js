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

/***/ "./node_modules/css-loader/dist/cjs.js!./public/css/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/css/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_pollution_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/pollution.jpg */ \"./public/img/pollution.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_pollution_jpg__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n    margin:0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody{\\r\\n    background-color: rgb(250, 237, 219)\\r\\n   \\r\\n   \\r\\n    \\r\\n}\\r\\n\\r\\nh1{\\r\\n    margin-top: 2%;\\r\\n    font-weight: bold;\\r\\n    text-align: center;\\r\\n    color: #00f;\\r\\n    font-size: 60px;\\r\\n    font-family: 'Dancing Script', cursive;\\r\\n}\\r\\n\\r\\n.container{\\r\\n    margin: 30px 25% auto;\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-size: cover;\\r\\n\\r\\n    width:90% ;\\r\\n    max-width: 750px;\\r\\n    border: 2px solid #007;\\r\\n    border-radius: 15px;\\r\\n     box-shadow:4px 6px 5px #1af ;\\r\\n}\\r\\n\\r\\n\\r\\n.locate{\\r\\n    margin:0 50px;\\r\\n    display: inline-table;\\r\\n}\\r\\n\\r\\n.research{\\r\\n    margin: 0 110px auto;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n.research{\\r\\n   \\r\\n    position:absolute;\\r\\n    transform: translate(-50%, -50%);\\r\\n    background: #1bf;\\r\\n    height: 40px;\\r\\n    border-radius: 40px;\\r\\n}\\r\\n\\r\\n.research:hover{\\r\\n    box-shadow: 0 0 24px #1bf, 0 0 24px rgba(0, 0, 0.8)\\r\\n}\\r\\n\\r\\n.research:hover > input{\\r\\n    width: 200px;\\r\\n    padding: 3px 6px;\\r\\n}\\r\\n\\r\\n.research:hover > .searchButton{\\r\\n    background: #fff;\\r\\n    color: #1bf;\\r\\n}\\r\\n\\r\\n.searchButton{\\r\\n    color: #00f;\\r\\n    float: right;\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n    border-radius: 10px;\\r\\n    \\r\\n    background: #1bf;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    transition: 0.4s;\\r\\n    border:none;\\r\\n    cursor: pointer;\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.searchButton i{\\r\\n    font-size: 50px;\\r\\n}\\r\\n\\r\\n.input{\\r\\n    border: none;\\r\\n    background: none;\\r\\n    outline: none;\\r\\n    float: left;\\r\\n    padding: 0;\\r\\n    color: #fff;\\r\\n    font-size: 20px;\\r\\n    transition: 0.4s;\\r\\n    line-height: 40px;\\r\\n    width: 0px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.search > button {\\r\\n    background: #fff;\\r\\n    border-radius:25px;\\r\\n    cursor: pointer;\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n /* COLUMNS */\\r\\n .columns {\\r\\n    display: flex;\\r\\n    flex-flow: row wrap;\\r\\n    justify-content: center;\\r\\n    padding: 2px;\\r\\n    margin: 5px 2px;\\r\\n}\\r\\n.column {\\r\\n    flex: 1;\\r\\n   \\r\\n    font-weight: bolder;\\r\\n    margin: 2px;\\r\\n    padding: 15px;\\r\\n}\\r\\n.column:first-child {\\r\\n    margin-left: 15px;\\r\\n}\\r\\n.column:last-child {\\r\\n    margin-right: 20px;\\r\\n}\\r\\n\\r\\n/* CITY */\\r\\n\\r\\n.city{\\r\\n    text-align: center;\\r\\n    font-size: 25px;\\r\\n    font-weight: bolder;\\r\\n} \\r\\n \\r\\n.city span{\\r\\n    text-transform: uppercase;\\r\\n    font-size: 24px;\\r\\n    font-weight: bolder;\\r\\n}\\r\\n\\r\\n/* INDEX QUALITY */\\r\\n.indexAir{\\r\\n    \\r\\n    margin-left:32%;\\r\\n    width: 85px;\\r\\n    height: 85px;\\r\\n    border: 2px solid;\\r\\n    text-align: center;\\r\\n    padding-top: 28px;\\r\\n    border-radius: 15px;\\r\\n}\\r\\n\\r\\n.indexAir span{\\r\\n    font-size: 45px;\\r\\n    font-weight: bolder;\\r\\n}\\r\\n\\r\\n/* DAY */\\r\\n.day{\\r\\n    text-align: center;\\r\\n}\\r\\n.day span{\\r\\n    font-size:18px;\\r\\n    font-weight: bolder;\\r\\n  \\r\\n}\\r\\n\\r\\n/* LEGENDA */\\r\\n\\r\\n.legend{\\r\\n    border: 2px solid transparent;\\r\\n    border-radius: 10px;\\r\\n    padding:2px;\\r\\n    margin:5px;\\r\\n}\\r\\n\\r\\n.legend p {\\r\\n    font-size: 20px;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\n\\r\\n.index{\\r\\n    display: inline-block;\\r\\n    text-align: center;\\r\\n    padding-top: 2px;\\r\\n    padding-right: 5px;\\r\\n    margin-left:10px;\\r\\n    margin-bottom: 8px;\\r\\n    width:120px;\\r\\n    height: 85px;\\r\\n   \\r\\n    border-radius: 10px;\\r\\n}\\r\\n\\r\\n.index p{\\r\\n    font-size:18px;\\r\\n    padding-right: 3px;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.green{\\r\\n    width:85px;\\r\\n    height: 65px;\\r\\n    padding-top: 20px;\\r\\n    background: rgb(58, 194, 58);\\r\\n}\\r\\n\\r\\n.yellow{\\r\\n    width:90px;\\r\\n    height: 66px;\\r\\n    padding-top: 20px;\\r\\n    background: rgb(242, 245, 54);\\r\\n}\\r\\n\\r\\n.orange{\\r\\n    background: rgb(243, 156, 57);\\r\\n}\\r\\n\\r\\n.red{\\r\\n    width:95px;\\r\\n    height: 75px;\\r\\n    padding-top: 20px;\\r\\n    \\r\\n    background: rgb(245, 22, 22);\\r\\n}\\r\\n\\r\\n.dark_violet{\\r\\n    width:95px;\\r\\n    height: 85px;\\r\\n    padding-top: 10px;\\r\\n    \\r\\n    background: rgb(136, 69, 245);\\r\\n}\\r\\n\\r\\n.brown{\\r\\n    width:100px;\\r\\n    height: 65px;\\r\\n    padding-top: 20px;\\r\\n    background: rgb(160, 59, 59);\\r\\n}\\r\\n\\r\\n\\r\\n/* MEDIA QUERY */\\r\\n@media only screen and (max-width:340px){\\r\\n    .container{  \\r\\n        width:85%;\\r\\n        margin: 30px 10% auto;\\r\\n    }\\r\\n  \\r\\n}\\r\\n\\r\\n@media only screen and (max-width: 540px){\\r\\n    .container{\\r\\n      \\r\\n        width:80%;\\r\\n        margin: 30px 10% auto;\\r\\n    }\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n@media only screen and (max-width:620px){\\r\\n  \\r\\n    .container{\\r\\n        width:85%;\\r\\n        margin: 30px 10% auto;\\r\\n    }\\r\\n   \\r\\n      \\r\\n   \\r\\n}\\r\\n\\r\\n@media only screen and (max-width:799px){\\r\\n  \\r\\n    .container{\\r\\n        width:85%;\\r\\n        margin: 30px 10% auto;\\r\\n    }\\r\\n   \\r\\n      \\r\\n   \\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n@media only screen and (min-width:899px){\\r\\n   \\r\\n    .container{\\r\\n        width:80%;\\r\\n        margin: 30px  auto;\\r\\n    }\\r\\n  \\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://air-pollution/./public/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://air-pollution/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://air-pollution/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./public/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://air-pollution/./public/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://air-pollution/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./public/img/pollution.jpg":
/*!**********************************!*\
  !*** ./public/img/pollution.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7959712e8c8ab3d9c7de.jpg\";\n\n//# sourceURL=webpack://air-pollution/./public/img/pollution.jpg?");

/***/ }),

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/***/ (() => {

eval("\r\n\r\nconst cityElement = document.querySelectofr(\".city span\");\r\nconst indexElement = document.querySelector(\".indexAir span\");\r\nconst index = document.querySelector(\".indexAir\");\r\nconst date = document.querySelector(\".day span\")\r\n\r\n// API KEY\r\nconst air_key = \"f018576ab29faf2b8f5b5d38a87dd05c65918720\";\r\n\r\nconst air = {};\r\n\r\n\r\n// CHECK IF BROWSER SUPPORTS GEOLOCATION\r\nif('geolocation' in navigator){\r\n    navigator.geolocation.getCurrentPosition(setPosition, showError);\r\n}else{\r\n    alert(\"Your browser doesn't support geolocation\");\r\n}\r\n\r\n// SET USER'S POSITION\r\nfunction setPosition(position){\r\n    let latitude = position.coords.latitude;\r\n    let longitude = position.coords.longitude;\r\n    getData(latitude, longitude);\r\n    \r\n}\r\n    \r\n\r\n// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE\r\nfunction showError(error){\r\n    alert(error.message);\r\n}\r\n\r\nfunction getLocation(){\r\n      \r\n    if (navigator.geolocation) {\r\n        navigator.geolocation.getCurrentPosition(function(position) {\r\n         latitude = position.coords.latitude;\r\n         longitude = position.coords.longitude;\r\n         \r\n        getData(latitude,longitude);\r\n        \r\n         \r\n      });\r\n   } else {\r\n        alert(\"Geolocation is not supported by this browser.\");\r\n      }\r\n  }\r\n    \r\n    \r\n// GET AIR POLLUTION FROM COORDINATES\r\n\r\nfunction getData(latitude,longitude){\r\n\r\n    let api = `https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${air_key}`;\r\n\r\n     fetch(api)\r\n        .then(function(response){\r\n            let data = response.json();\r\n            return data;\r\n        })\r\n        .then(function(data){\r\n            air.index = data.data.aqi;\r\n            air.city = data.data.city.name;\r\n            air.time = data.data.time.s;\r\n             \r\n        })\r\n        .then(function(){\r\n            let pollution = air.index;\r\n            showData();\r\n            changeBackground(pollution);\r\n        })\r\n}\r\n\r\n// DISPLAY INFORMATIONS\r\n\r\nfunction showData(){\r\n    cityElement.innerHTML = `${air.city}<span> </span>`;\r\n    indexElement.innerHTML = `${air.index}<span> </span>`;\r\n    date.innerHTML = `${air.time}<span> </span>`;\r\n    \r\n}\r\n\r\n\r\n//GET AIR POLLUTION FROM SEARCH  BAR\r\n\r\n btn_search.onclick = function() {\r\n    let city = document.getElementById('city').value;\r\n\r\n    let api = `https://api.waqi.info/search/?token=${air_key}&keyword=${city}`;\r\n\r\n     fetch(api)\r\n    .then(function(response){\r\n        let data = response.json();\r\n        return data;\r\n    })\r\n    .then(function(data){\r\n        air.city = data.data[0].station.name;\r\n        air.index = data.data[0].aqi;\r\n        air.time = data.data[0].time.stime;\r\n        \r\n    })\r\n    .then(function(){\r\n       \r\n        let pollution = air.index;\r\n        showData();\r\n        changeBackground(pollution);\r\n    })\r\n    .catch(error  => {\r\n        alert(\"Non è stata trovata nessuna località.\\nSi prega di inserire un'altra città.\");\r\n    })\r\n        \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n// CHANGE BACKGROUND INDEX AIR\r\n\r\nfunction changeBackground(pollution){\r\n    if(pollution<=50){\r\n        index.style.background = \"rgb(58, 194, 58)\";\r\n        index.style.border = \" rgb(58, 194, 58)\";\r\n    }else if(pollution>=51 && pollution <=100) {\r\n        index.style.background = \"rgb(242, 245, 54)\";\r\n        index.style.border = \" rgb(242, 245, 54)\";\r\n    }else if(pollution>=101 && pollution <=150) {\r\n        index.style.background = \"rgb(243, 156, 57)\";\r\n        index.style.border = \" rgb(243, 156, 57)\";\r\n    }else if(pollution>=151 && pollution <=200) {\r\n        index.style.background = \"rgb(245, 22, 22)\";\r\n        index.style.border = \" rgb(245, 22, 22)\";\r\n    }else if(pollution>=201 && pollution <=300) {\r\n        index.style.background = \" rgb(136, 69, 245)\";\r\n        index.style.border = \" rgb(136, 69, 245)\";\r\n    }else if(pollution>300) {\r\n        index.style.background = \"rgb(160, 59, 59)\";\r\n        index.style.border = \" rgb(160, 59, 59)\";\r\n    }else {\r\n        index.style.background = \"lightgrey\";\r\n        index.style.border = \" lightgrey\";\r\n    }\r\n}\r\n    \r\n\n\n//# sourceURL=webpack://air-pollution/./public/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./public/js/app.js");
/******/ 	__webpack_require__("./public/css/style.css");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;