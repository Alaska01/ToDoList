/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.active {\\n  display: block;\\n}\\n\\n.inactive,\\n#todolist-form {\\n  display: none;\\n}\\n\\n.all-tasks {\\n  width: 50%;\\n}\\n\\n#container {\\n  width: 30%;\\n  margin: auto;\\n  position: relative;\\n  min-height: 100vh;\\n  padding-bottom: 3rem;\\n}\\n\\n.active-list {\\n  font-weight: bold;\\n  border-bottom: 2px solid orangered;\\n}\\n\\n.btns {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.btns button {\\n  margin: 20px;\\n}\\n\\n#content {\\n  margin-top: 32px;\\n  margin-bottom: 32px;\\n}\\n\\n.todo {\\n  width: 100%;\\n  border: 0;\\n  padding: 20px;\\n  font-weight: 500;\\n  font-size: 18px;\\n  text-align: left;\\n}\\n\\n.card-body,\\n.todo {\\n  position: relative;\\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.16), 0 4px 4px rgba(0, 0, 0, 0.24);\\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\\n}\\n\\n.todo:hover {\\n  background: #ccc;\\n  color: white;\\n}\\n\\n.card-body:hover {\\n  box-shadow: 1px 14px 28px rgba(0, 0, 0, 0.25), 1px 10px 10px rgba(0, 0, 0, 0.22);\\n}\\n\\n.card-body div {\\n  padding: 10px 10px;\\n}\\n\\n.card-body button {\\n  width: 50%;\\n  padding: 10px 0;\\n  border: 1px solid black;\\n}\\n\\n.card-body button:hover {\\n  background: blue;\\n  font-weight: bold;\\n}\\n\\n.edit {\\n  margin-top: 16px;\\n}\\n\\n#Submit:hover,\\n.update:hover,\\n.cancel:hover {\\n  background-color: blue;\\n  color: white;\\n}\\n\\n#Title,\\n#Description,\\ninput[name=\\\"projectTitle\\\"] {\\n  width: 100%;\\n  padding: 14px 12px;\\n  font-size: 18px;\\n  margin-top: 16px;\\n  border: 1px solid black;\\n}\\n\\n.fa {\\n  margin-right: 14px;\\n}\\n\\n.fa.fa-caret-down {\\n  float: right;\\n}\\n\\n.card-body.projects {\\n  padding: 3% 5%;\\n  margin-bottom: 5%;\\n  border-bottom: 2px solid black;\\n}\\n\\n.todoLi {\\n  font-weight: 400;\\n  font-size: 18px;\\n  margin-top: 2%;\\n}\\n\\n.todoLi li {\\n  margin-bottom: 2%;\\n}\\n\\n.titleProject {\\n  font-size: 27px;\\n  width: 100%;\\n  background: whitesmoke;\\n  text-align: center;\\n  font-weight: bold;\\n  padding: 10px;\\n  margin-bottom: 2%;\\n  color: #9b9292;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_domStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/domStuff */ \"./src/modules/domStuff.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/logic */ \"./src/modules/logic.js\");\n\n\n\n\n(0,_modules_logic__WEBPACK_IMPORTED_MODULE_2__.todobtn)();\n(0,_modules_logic__WEBPACK_IMPORTED_MODULE_2__.formEvent)();\n(0,_modules_domStuff__WEBPACK_IMPORTED_MODULE_0__.render)();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/domStuff.js":
/*!*********************************!*\
  !*** ./src/modules/domStuff.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showTodos\": () => (/* binding */ showTodos),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ \"./src/modules/factories.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./src/modules/logic.js\");\n\n\n\nconst PROJECTS_KEY = 'projects';\nlet projects = JSON.parse(localStorage.getItem(PROJECTS_KEY)) || [{ id: '1603023086264', name: 'Default ', tasks: [] }];\n/* eslint-disable no-use-before-define */\nconst SELECTED_PROJECTS_KEY = 'selectedProjectId';\nlet selectedProjectId = localStorage.getItem(SELECTED_PROJECTS_KEY);\n\nconst content = document.getElementById('content');\nconst container = document.getElementById('container');\nconst listsContainer = document.querySelector('[data-lists]');\nconst listDisplayContainer = document.querySelector('[data-list-display-container]');\nconst listTitleElement = document.querySelector('[data-list-title]');\nconst tasksContainer = document.querySelector('[data-tasks]');\nconst deleteProjectBtn = document.querySelector('.delProject');\nconst projectForm = document.getElementById('project-form');\n\nconst showTodos = (selectedList) => {\n  selectedList.tasks.forEach((task, idx) => {\n    // show the title as a btn\n    const ul = document.createElement('ul');\n    ul.setAttribute('class', 'todolist-list');\n    const viewBtn = document.createElement('button');\n    viewBtn.innerText = task.title;\n    ul.appendChild(viewBtn);\n    tasksContainer.appendChild(ul);\n\n    // show the description, due date and priority\n    const {\n      description, dueDate, prior,\n    } = task;\n    const headings = ['Description', 'DueDate', 'Priority'];\n    const values = [description, dueDate, prior];\n\n    const font = document.createElement('i');\n    font.classList.add('fa');\n    font.classList.add('fa-caret-down');\n\n    viewBtn.appendChild(font);\n    viewBtn.setAttribute('class', 'todo');\n\n    const div = document.querySelector('[data-tasks]');\n    div.appendChild(viewBtn);\n\n    const todoContainer = document.createElement('div');\n    todoContainer.setAttribute('id', `${task.title}Wrapper`);\n\n    todoContainer.classList.add('inactive');\n    const cardBody = document.createElement('div');\n    cardBody.classList.add('card-body');\n    const icons = ['fa-info-circle', 'fa-sticky-note', 'fa-calendar-check-o'];\n    for (let i = 0; i < 3; i += 1) {\n      const card = document.createElement('div');\n      const h1 = document.createElement('h1');\n      const icon = document.createElement('i');\n      icon.style.float = 'left';\n      icon.classList.add('fa');\n      icon.classList.add(icons[i]);\n      icon.setAttribute('aria-hidden', 'true');\n      h1.textContent = `${headings[i]}`;\n      h1.style.padding = '20px';\n      h1.style.background = '#f7f7f7';\n      h1.appendChild(icon);\n      const p = document.createElement('p');\n      p.style.padding = '20px';\n      p.textContent = `${values[i]}`;\n      card.appendChild(h1);\n      card.appendChild(p);\n      cardBody.appendChild(card);\n    }\n    const editBtn = document.createElement('button');\n    editBtn.innerHTML = 'Edit';\n    editBtn.setAttribute('type', 'button');\n    editBtn.setAttribute('class', 'editBtn');\n    cardBody.appendChild(editBtn);\n\n    // edit functionality\n    const editDiv = document.createElement('div');\n    editDiv.style.background = '#f7f7f7';\n    editDiv.style.borderTop = '5px solid black';\n    editDiv.setAttribute('id', `${task.title}Edit`);\n    editDiv.classList.add('inactive');\n    editDiv.classList.add('card-body');\n    editDiv.classList.add('edit');\n    const data = document.createElement('p');\n    data.innerHTML = `Editing ${task.title}... `;\n    data.style.textAlign = 'center';\n    data.style.margin = '14px 0px';\n    editDiv.appendChild(data);\n    const form = document.createElement('form');\n    form.setAttribute('id', `${task.title}EditForm`);\n    const nameAttributes = ['Title', 'Description', 'Priority'];\n\n    for (let i = 0; i < nameAttributes.length; i += 1) {\n      const label = document.createElement('label');\n      const head = document.createElement('h1');\n      head.innerHTML = nameAttributes[i];\n      head.style.background = 'rgb(247, 247, 247)';\n      head.style.padding = '20px';\n      head.style.paddingLeft = '14px';\n      const icon = document.createElement('i');\n      icon.style.paddingTop = '20px';\n      icon.style.paddingBottom = '20px';\n      icon.style.paddingLeft = '20px';\n      icon.style.marginRight = '14px';\n      icon.style.float = 'left';\n      icon.classList.add('fa');\n      icon.classList.add(icons[i]);\n      icon.setAttribute('aria-hidden', 'true');\n\n      label.appendChild(icon);\n      label.appendChild(head);\n      const input = document.createElement('input');\n      input.setAttribute('type', 'text');\n      input.setAttribute('name', nameAttributes[i]);\n      input.setAttribute('id', nameAttributes[i]);\n\n      if (i == null || i === '') {\n        return false;\n      }\n      label.appendChild(input);\n      form.appendChild(label);\n      form.appendChild(document.createElement('br'));\n      form.appendChild(document.createElement('br'));\n    }\n\n    const updateBtn = document.createElement('button');\n    updateBtn.setAttribute('type', 'submit');\n    updateBtn.innerHTML = 'Update';\n    updateBtn.setAttribute('class', 'update');\n    form.appendChild(updateBtn);\n\n    const cancelBtn = document.createElement('button');\n    cancelBtn.setAttribute('type', 'button');\n    cancelBtn.innerHTML = 'Cancel';\n    cancelBtn.setAttribute('class', 'cancel');\n    form.appendChild(cancelBtn);\n\n    const formElements = form.elements;\n    formElements[0].value = task.title;\n    formElements[1].value = task.description;\n    formElements[2].checked = task.prior;\n    editDiv.appendChild(form);\n    todoContainer.appendChild(cardBody);\n    todoContainer.appendChild(editDiv);\n\n    div.appendChild(todoContainer);\n    content.appendChild(div);\n    content.appendChild(document.createElement('br'));\n    container.appendChild(content);\n\n    viewBtn.addEventListener('click', () => {\n      const wd = document.getElementById(`${task.title}Wrapper`);\n      const ed = document.getElementById(`${task.title}Edit`);\n      const wdCurCls = wd.getAttribute('class');\n      const edCurCls = ed.getAttribute('class');\n      if (wdCurCls === 'active') {\n        wd.classList.remove('active');\n        wd.classList.add('inactive');\n      } else {\n        wd.classList.remove('inactive');\n        wd.classList.add('active');\n      }\n      if (edCurCls === 'active') {\n        ed.classList.remove('active');\n        ed.classList.add('inactive');\n      }\n    });\n\n    editBtn.addEventListener('click', () => {\n      const ed = document.getElementById(`${task.title}Edit`);\n      const edcls = ed.getAttribute('class');\n      const arr = edcls.split(' ');\n      if (arr.includes('active')) {\n        ed.classList.remove('active');\n        ed.classList.add('inactive');\n      } else {\n        ed.classList.remove('inactive');\n        ed.classList.add('active');\n      }\n    });\n\n    cancelBtn.addEventListener('click', () => {\n      const ed = document.getElementById(`${task.title}Edit`);\n      ed.classList.remove('active');\n      ed.classList.add('inactive');\n    });\n\n    updateBtn.addEventListener('click', (e) => {\n      e.preventDefault();\n      const formElements = form.elements;\n      task.title = formElements[0].value;\n      task.description = formElements[1].value;\n      task.prior = formElements[2].value;\n      saveAndRender();\n    });\n\n    // delete todos functionality\n    const delBtn = document.createElement('button');\n    delBtn.setAttribute('type', 'button');\n    delBtn.setAttribute('class', 'deleteBtn');\n    delBtn.innerHTML = 'Delete';\n    cardBody.appendChild(delBtn);\n\n    delBtn.addEventListener('click', (e) => {\n      e.preventDefault();\n      selectedList.tasks.splice(idx, 1);\n      saveAndRender();\n    });\n    return false;\n  });\n};\n\nconst showProjects = () => {\n  projects.forEach((project) => {\n    const listElement = document.createElement('li');\n    listElement.dataset.projectId = project.id;\n    listElement.classList.add('list-name');\n    listElement.innerText = project.name;\n    if (project.id === selectedProjectId) {\n      listElement.classList.add('active-list');\n    }\n    listsContainer.appendChild(listElement);\n  });\n};\n\nconst render = () => {\n  (0,_logic__WEBPACK_IMPORTED_MODULE_1__.clearElement)(listsContainer);\n  showProjects();\n\n  const selectedList = projects.find((project) => project.id === selectedProjectId);\n  if (selectedProjectId == null) {\n    listDisplayContainer.style.display = 'none';\n  } else {\n    listDisplayContainer.style.display = '';\n    listTitleElement.innerText = selectedList.name;\n    (0,_logic__WEBPACK_IMPORTED_MODULE_1__.clearElement)(tasksContainer);\n    showTodos(selectedList);\n  }\n};\n\nconst save = () => {\n  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));\n  localStorage.setItem(SELECTED_PROJECTS_KEY, selectedProjectId);\n};\n\nconst saveAndRender = () => {\n  save();\n  render();\n};\n\nlistsContainer.addEventListener('click', (e) => {\n  if (e.target.tagName.toLowerCase() === 'li') {\n    selectedProjectId = e.target.dataset.projectId;\n    saveAndRender();\n  }\n});\n\ndeleteProjectBtn.addEventListener('click', () => {\n  projects = projects.filter((project) => project.id !== selectedProjectId);\n  selectedProjectId = null;\n  saveAndRender();\n});\n\nconst toDoListForm = document.getElementById('todolist-form');\nconst listSubmit = document.getElementById('list-submit');\nlistSubmit.addEventListener('click', (event) => {\n  const title = document.getElementById('title').value;\n  const description = document.getElementById('description').value;\n  const dueDate = document.getElementById('date').value;\n  const prior = document.querySelector(\"input[name='priority']:checked\").value;\n\n  const selectedList = projects.find((project) => project.id === selectedProjectId);\n  selectedList.tasks.push((0,_factories__WEBPACK_IMPORTED_MODULE_0__.toDoListFactory)(title, description, dueDate, prior));\n\n  toDoListForm.reset();\n  toDoListForm.style.display = 'none';\n  event.preventDefault();\n  saveAndRender();\n});\n\nprojectForm.addEventListener('submit', (event) => {\n  const name = document.getElementById('project-name').value;\n\n  if (name == null || name === '') {\n    return false;\n  }\n\n  projects.push((0,_factories__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(name));\n  saveAndRender();\n  event.preventDefault();\n  return false;\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/domStuff.js?");

/***/ }),

/***/ "./src/modules/factories.js":
/*!**********************************!*\
  !*** ./src/modules/factories.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectFactory\": () => (/* binding */ projectFactory),\n/* harmony export */   \"toDoListFactory\": () => (/* binding */ toDoListFactory)\n/* harmony export */ });\nconst projectFactory = (name) => ({ id: Date.now().toString(), name, tasks: [] });\n\nconst toDoListFactory = (title, description, dueDate, prior) => ({\n  id: Date.now().toString(), title, description, dueDate, prior,\n});\n\n//# sourceURL=webpack://to-do-list/./src/modules/factories.js?");

/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todobtn\": () => (/* binding */ todobtn),\n/* harmony export */   \"formEvent\": () => (/* binding */ formEvent),\n/* harmony export */   \"clearElement\": () => (/* binding */ clearElement)\n/* harmony export */ });\nconst todobtn = () => {\n  document.querySelector('.newtodo').addEventListener('click', () => {\n    if (document.getElementById('todolist-form').style.display === 'none') {\n      document.getElementById('todolist-form').style.display = 'block';\n    }\n  });\n};\n\nconst formEvent = () => {\n  const todoform = document.getElementById('todolist-form');\n  todoform.setAttribute('class', 'active');\n  document.querySelector('.newtodo').addEventListener('click', () => {\n    if (todoform.getAttribute('class')) {\n      todoform.style.display = 'block';\n    }\n  });\n};\n\nconst clearElement = (element) => {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/logic.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;