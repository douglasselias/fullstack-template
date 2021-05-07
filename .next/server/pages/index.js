module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/base/Button.tsx":
/*!************************************!*\
  !*** ./components/base/Button.tsx ***!
  \************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/douglas/Projetos/fullstack-template/components/base/Button.tsx\";\nfunction Button(props) {\n  const {\n    onClick,\n    children\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    className: \"button\",\n    onClick: onClick,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jhc2UvQnV0dG9uLnRzeD84ZThjIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInByb3BzIiwib25DbGljayIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFTyxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUEyQztBQUNoRCxRQUFNO0FBQUVDLFdBQUY7QUFBV0M7QUFBWCxNQUF3QkYsS0FBOUI7QUFFQSxzQkFDRTtBQUFRLGFBQVMsRUFBQyxRQUFsQjtBQUEyQixXQUFPLEVBQUVDLE9BQXBDO0FBQUEsY0FDR0M7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvYmFzZS9CdXR0b24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24ocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uQ2xpY2ssIGNoaWxkcmVuIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG50eXBlIFByb3BzID0ge1xuICBvbkNsaWNrKCk6IHZvaWRcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/base/Button.tsx\n");

/***/ }),

/***/ "./components/base/Header.tsx":
/*!************************************!*\
  !*** ./components/base/Header.tsx ***!
  \************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/douglas/Projetos/fullstack-template/components/base/Header.tsx\";\nfunction Header(props) {\n  const {\n    children\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    className: \"header\",\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jhc2UvSGVhZGVyLnRzeD84NTlhIl0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVPLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQTJDO0FBQ2hELFFBQU07QUFBRUM7QUFBRixNQUFlRCxLQUFyQjtBQUVBLHNCQUFPO0FBQUksYUFBUyxFQUFDLFFBQWQ7QUFBQSxjQUF3QkM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jhc2UvSGVhZGVyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHNcblxuICByZXR1cm4gPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPntjaGlsZHJlbn08L2gxPlxufVxuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/base/Header.tsx\n");

/***/ }),

/***/ "./components/base/Input.tsx":
/*!***********************************!*\
  !*** ./components/base/Input.tsx ***!
  \***********************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/douglas/Projetos/fullstack-template/components/base/Input.tsx\";\nfunction Input(props) {\n  const {\n    onChange,\n    placeholder,\n    value\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n    className: \"input\",\n    onChange: ({\n      target\n    }) => onChange(target.value),\n    placeholder: placeholder,\n    value: value\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jhc2UvSW5wdXQudHN4PzRjM2EiXSwibmFtZXMiOlsiSW5wdXQiLCJwcm9wcyIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQTBDO0FBQy9DLFFBQU07QUFBRUMsWUFBRjtBQUFZQyxlQUFaO0FBQXlCQztBQUF6QixNQUFtQ0gsS0FBekM7QUFFQSxzQkFDRTtBQUNFLGFBQVMsRUFBQyxPQURaO0FBRUUsWUFBUSxFQUFFLENBQUM7QUFBRUk7QUFBRixLQUFELEtBQWdCSCxRQUFRLENBQUNHLE1BQU0sQ0FBQ0QsS0FBUixDQUZwQztBQUdFLGVBQVcsRUFBRUQsV0FIZjtBQUlFLFNBQUssRUFBRUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvYmFzZS9JbnB1dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gSW5wdXQocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IG9uQ2hhbmdlLCBwbGFjZWhvbGRlciwgdmFsdWUgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gb25DaGFuZ2UodGFyZ2V0LnZhbHVlKX1cbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAvPlxuICApXG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmdcbiAgdmFsdWU6IHN0cmluZ1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/base/Input.tsx\n");

/***/ }),

/***/ "./components/base/index.ts":
/*!**********************************!*\
  !*** ./components/base/index.ts ***!
  \**********************************/
/*! exports provided: Button, Header, Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./components/base/Button.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__[\"Button\"]; });\n\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./components/base/Header.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return _Header__WEBPACK_IMPORTED_MODULE_1__[\"Header\"]; });\n\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ \"./components/base/Input.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return _Input__WEBPACK_IMPORTED_MODULE_2__[\"Input\"]; });\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Jhc2UvaW5kZXgudHM/ZTM0ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jhc2UvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL0J1dHRvbidcbmV4cG9ydCAqIGZyb20gJy4vSGVhZGVyJ1xuZXhwb3J0ICogZnJvbSAnLi9JbnB1dCdcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/base/index.ts\n");

/***/ }),

/***/ "./infra/date.id-generator.ts":
/*!************************************!*\
  !*** ./infra/date.id-generator.ts ***!
  \************************************/
/*! exports provided: DateIdGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DateIdGenerator\", function() { return DateIdGenerator; });\nclass DateIdGenerator {\n  generate() {\n    return new Date().getMilliseconds().toString();\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmZyYS9kYXRlLmlkLWdlbmVyYXRvci50cz9iY2Y5Il0sIm5hbWVzIjpbIkRhdGVJZEdlbmVyYXRvciIsImdlbmVyYXRlIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQU8sTUFBTUEsZUFBTixDQUE2QztBQUNsREMsVUFBUSxHQUFXO0FBQ2pCLFdBQU8sSUFBSUMsSUFBSixHQUFXQyxlQUFYLEdBQTZCQyxRQUE3QixFQUFQO0FBQ0Q7O0FBSGlEIiwiZmlsZSI6Ii4vaW5mcmEvZGF0ZS5pZC1nZW5lcmF0b3IudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJZEdlbmVyYXRvciB9IGZyb20gJ0AvdXNlLWNhc2VzL2FkZC10YXNrL2lkLWdlbmVyYXRvci5pbmZyYSdcblxuZXhwb3J0IGNsYXNzIERhdGVJZEdlbmVyYXRvciBpbXBsZW1lbnRzIElkR2VuZXJhdG9yIHtcbiAgZ2VuZXJhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRNaWxsaXNlY29uZHMoKS50b1N0cmluZygpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./infra/date.id-generator.ts\n");

/***/ }),

/***/ "./main/index.page.tsx":
/*!*****************************!*\
  !*** ./main/index.page.tsx ***!
  \*****************************/
/*! exports provided: IndexPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IndexPage\", function() { return IndexPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/base */ \"./components/base/index.ts\");\n/* harmony import */ var _use_cases_list_tasks_TasksList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/use-cases/list-tasks/TasksList */ \"./use-cases/list-tasks/TasksList.tsx\");\n/* harmony import */ var _use_cases_list_tasks_list_tasks_localstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/use-cases/list-tasks/list-tasks.localstorage */ \"./use-cases/list-tasks/list-tasks.localstorage.ts\");\n/* harmony import */ var _use_cases_add_task_add_task_localstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/use-cases/add-task/add-task.localstorage */ \"./use-cases/add-task/add-task.localstorage.ts\");\n/* harmony import */ var _infra_date_id_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/infra/date.id-generator */ \"./infra/date.id-generator.ts\");\n/* harmony import */ var _use_cases_list_tasks_list_tasks_interactor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/use-cases/list-tasks/list-tasks.interactor */ \"./use-cases/list-tasks/list-tasks.interactor.ts\");\n/* harmony import */ var _use_cases_add_task_add_task_interactor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/use-cases/add-task/add-task.interactor */ \"./use-cases/add-task/add-task.interactor.ts\");\n/* harmony import */ var _use_cases_toggle_is_done_task_toggle_is_done_task_interactor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/use-cases/toggle-is-done-task/toggle-is-done-task.interactor */ \"./use-cases/toggle-is-done-task/toggle-is-done-task.interactor.ts\");\n/* harmony import */ var _use_cases_toggle_is_done_task_toggle_is_done_task_localstorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/use-cases/toggle-is-done-task/toggle-is-done-task.localstorage */ \"./use-cases/toggle-is-done-task/toggle-is-done-task.localstorage.ts\");\n/* harmony import */ var _use_cases_add_task_add_task_presentation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/use-cases/add-task/add-task.presentation */ \"./use-cases/add-task/add-task.presentation.tsx\");\n\n\nvar _jsxFileName = \"/home/douglas/Projetos/fullstack-template/main/index.page.tsx\";\n\n\n\n\n\n\n\n\n\n\n\nconst listTasksLocalStorage = new _use_cases_list_tasks_list_tasks_localstorage__WEBPACK_IMPORTED_MODULE_4__[\"ListTasksLocalStorage\"]();\nconst listTasksInteractor = new _use_cases_list_tasks_list_tasks_interactor__WEBPACK_IMPORTED_MODULE_7__[\"ListTasksInteractor\"](listTasksLocalStorage);\nconst toggleIsDoneTaskLocalStorage = new _use_cases_toggle_is_done_task_toggle_is_done_task_localstorage__WEBPACK_IMPORTED_MODULE_10__[\"ToggleIsDoneTaskLocalStorage\"]();\nconst toggleIsDoneTaskInteractor = new _use_cases_toggle_is_done_task_toggle_is_done_task_interactor__WEBPACK_IMPORTED_MODULE_9__[\"ToggleIsDoneTaskInteractor\"](toggleIsDoneTaskLocalStorage);\nconst addTaskLocalStorage = new _use_cases_add_task_add_task_localstorage__WEBPACK_IMPORTED_MODULE_5__[\"AddTaskLocalStorage\"]();\nconst dateIdGenerator = new _infra_date_id_generator__WEBPACK_IMPORTED_MODULE_6__[\"DateIdGenerator\"]();\nconst addTaskInteractor = new _use_cases_add_task_add_task_interactor__WEBPACK_IMPORTED_MODULE_8__[\"AddTaskInteractor\"](addTaskLocalStorage, dateIdGenerator);\nfunction IndexPage() {\n  const {\n    0: tasks,\n    1: setTasks\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n\n  async function callback() {\n    const tasks = await listTasksInteractor.list();\n    setTasks(tasks);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_base__WEBPACK_IMPORTED_MODULE_2__[\"Header\"], {\n      children: \"Tarefas\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_use_cases_add_task_add_task_presentation__WEBPACK_IMPORTED_MODULE_11__[\"AddTaskPresentation\"], {\n      addTaskUseCase: addTaskInteractor,\n      callback: callback\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_use_cases_list_tasks_TasksList__WEBPACK_IMPORTED_MODULE_3__[\"TasksList\"], {\n      tasks: tasks,\n      toggleIsDoneTaskInteractor: toggleIsDoneTaskInteractor,\n      callback: callback\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluL2luZGV4LnBhZ2UudHN4PzhiNTAiXSwibmFtZXMiOlsibGlzdFRhc2tzTG9jYWxTdG9yYWdlIiwiTGlzdFRhc2tzTG9jYWxTdG9yYWdlIiwibGlzdFRhc2tzSW50ZXJhY3RvciIsIkxpc3RUYXNrc0ludGVyYWN0b3IiLCJ0b2dnbGVJc0RvbmVUYXNrTG9jYWxTdG9yYWdlIiwiVG9nZ2xlSXNEb25lVGFza0xvY2FsU3RvcmFnZSIsInRvZ2dsZUlzRG9uZVRhc2tJbnRlcmFjdG9yIiwiVG9nZ2xlSXNEb25lVGFza0ludGVyYWN0b3IiLCJhZGRUYXNrTG9jYWxTdG9yYWdlIiwiQWRkVGFza0xvY2FsU3RvcmFnZSIsImRhdGVJZEdlbmVyYXRvciIsIkRhdGVJZEdlbmVyYXRvciIsImFkZFRhc2tJbnRlcmFjdG9yIiwiQWRkVGFza0ludGVyYWN0b3IiLCJJbmRleFBhZ2UiLCJ0YXNrcyIsInNldFRhc2tzIiwidXNlU3RhdGUiLCJjYWxsYmFjayIsImxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsTUFBTUEscUJBQXFCLEdBQUcsSUFBSUMsbUdBQUosRUFBOUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxJQUFJQywrRkFBSixDQUF3QkgscUJBQXhCLENBQTVCO0FBRUEsTUFBTUksNEJBQTRCLEdBQUcsSUFBSUMsNkhBQUosRUFBckM7QUFDQSxNQUFNQywwQkFBMEIsR0FBRyxJQUFJQyx3SEFBSixDQUNqQ0gsNEJBRGlDLENBQW5DO0FBSUEsTUFBTUksbUJBQW1CLEdBQUcsSUFBSUMsNkZBQUosRUFBNUI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsSUFBSUMsd0VBQUosRUFBeEI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxJQUFJQyx5RkFBSixDQUN4QkwsbUJBRHdCLEVBRXhCRSxlQUZ3QixDQUExQjtBQUtPLFNBQVNJLFNBQVQsR0FBa0M7QUFDdkMsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7O0FBRUEsaUJBQWVDLFFBQWYsR0FBMEI7QUFDeEIsVUFBTUgsS0FBSyxHQUFHLE1BQU1iLG1CQUFtQixDQUFDaUIsSUFBcEIsRUFBcEI7QUFDQUgsWUFBUSxDQUFDRCxLQUFELENBQVI7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyw4RkFBRDtBQUNFLG9CQUFjLEVBQUVILGlCQURsQjtBQUVFLGNBQVEsRUFBRU07QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFNRSxxRUFBQyx5RUFBRDtBQUNFLFdBQUssRUFBRUgsS0FEVDtBQUVFLGdDQUEwQixFQUFFVCwwQkFGOUI7QUFHRSxjQUFRLEVBQUVZO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUEsa0JBREY7QUFjRCIsImZpbGUiOiIuL21haW4vaW5kZXgucGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvYmFzZSdcbmltcG9ydCB7IFRhc2tzTGlzdCB9IGZyb20gJ0AvdXNlLWNhc2VzL2xpc3QtdGFza3MvVGFza3NMaXN0J1xuXG5pbXBvcnQgeyBMaXN0VGFza3NMb2NhbFN0b3JhZ2UgfSBmcm9tICdAL3VzZS1jYXNlcy9saXN0LXRhc2tzL2xpc3QtdGFza3MubG9jYWxzdG9yYWdlJ1xuaW1wb3J0IHsgQWRkVGFza0xvY2FsU3RvcmFnZSB9IGZyb20gJ0AvdXNlLWNhc2VzL2FkZC10YXNrL2FkZC10YXNrLmxvY2Fsc3RvcmFnZSdcbmltcG9ydCB7IERhdGVJZEdlbmVyYXRvciB9IGZyb20gJ0AvaW5mcmEvZGF0ZS5pZC1nZW5lcmF0b3InXG5cbmltcG9ydCB7IExpc3RUYXNrc0ludGVyYWN0b3IgfSBmcm9tICdAL3VzZS1jYXNlcy9saXN0LXRhc2tzL2xpc3QtdGFza3MuaW50ZXJhY3RvcidcbmltcG9ydCB7IEFkZFRhc2tJbnRlcmFjdG9yIH0gZnJvbSAnQC91c2UtY2FzZXMvYWRkLXRhc2svYWRkLXRhc2suaW50ZXJhY3RvcidcbmltcG9ydCB7IFRvZ2dsZUlzRG9uZVRhc2tJbnRlcmFjdG9yIH0gZnJvbSAnQC91c2UtY2FzZXMvdG9nZ2xlLWlzLWRvbmUtdGFzay90b2dnbGUtaXMtZG9uZS10YXNrLmludGVyYWN0b3InXG5pbXBvcnQgeyBUb2dnbGVJc0RvbmVUYXNrTG9jYWxTdG9yYWdlIH0gZnJvbSAnQC91c2UtY2FzZXMvdG9nZ2xlLWlzLWRvbmUtdGFzay90b2dnbGUtaXMtZG9uZS10YXNrLmxvY2Fsc3RvcmFnZSdcblxuaW1wb3J0IHsgQWRkVGFza1ByZXNlbnRhdGlvbiB9IGZyb20gJ0AvdXNlLWNhc2VzL2FkZC10YXNrL2FkZC10YXNrLnByZXNlbnRhdGlvbidcblxuY29uc3QgbGlzdFRhc2tzTG9jYWxTdG9yYWdlID0gbmV3IExpc3RUYXNrc0xvY2FsU3RvcmFnZSgpXG5jb25zdCBsaXN0VGFza3NJbnRlcmFjdG9yID0gbmV3IExpc3RUYXNrc0ludGVyYWN0b3IobGlzdFRhc2tzTG9jYWxTdG9yYWdlKVxuXG5jb25zdCB0b2dnbGVJc0RvbmVUYXNrTG9jYWxTdG9yYWdlID0gbmV3IFRvZ2dsZUlzRG9uZVRhc2tMb2NhbFN0b3JhZ2UoKVxuY29uc3QgdG9nZ2xlSXNEb25lVGFza0ludGVyYWN0b3IgPSBuZXcgVG9nZ2xlSXNEb25lVGFza0ludGVyYWN0b3IoXG4gIHRvZ2dsZUlzRG9uZVRhc2tMb2NhbFN0b3JhZ2VcbilcblxuY29uc3QgYWRkVGFza0xvY2FsU3RvcmFnZSA9IG5ldyBBZGRUYXNrTG9jYWxTdG9yYWdlKClcbmNvbnN0IGRhdGVJZEdlbmVyYXRvciA9IG5ldyBEYXRlSWRHZW5lcmF0b3IoKVxuY29uc3QgYWRkVGFza0ludGVyYWN0b3IgPSBuZXcgQWRkVGFza0ludGVyYWN0b3IoXG4gIGFkZFRhc2tMb2NhbFN0b3JhZ2UsXG4gIGRhdGVJZEdlbmVyYXRvclxuKVxuXG5leHBvcnQgZnVuY3Rpb24gSW5kZXhQYWdlKCk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSlcblxuICBhc3luYyBmdW5jdGlvbiBjYWxsYmFjaygpIHtcbiAgICBjb25zdCB0YXNrcyA9IGF3YWl0IGxpc3RUYXNrc0ludGVyYWN0b3IubGlzdCgpXG4gICAgc2V0VGFza3ModGFza3MpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyPlRhcmVmYXM8L0hlYWRlcj5cbiAgICAgIDxBZGRUYXNrUHJlc2VudGF0aW9uXG4gICAgICAgIGFkZFRhc2tVc2VDYXNlPXthZGRUYXNrSW50ZXJhY3Rvcn1cbiAgICAgICAgY2FsbGJhY2s9e2NhbGxiYWNrfVxuICAgICAgLz5cbiAgICAgIDxUYXNrc0xpc3RcbiAgICAgICAgdGFza3M9e3Rhc2tzfVxuICAgICAgICB0b2dnbGVJc0RvbmVUYXNrSW50ZXJhY3Rvcj17dG9nZ2xlSXNEb25lVGFza0ludGVyYWN0b3J9XG4gICAgICAgIGNhbGxiYWNrPXtjYWxsYmFja31cbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./main/index.page.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_index_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/main/index.page */ \"./main/index.page.tsx\");\n\nvar _jsxFileName = \"/home/douglas/Projetos/fullstack-template/pages/index.tsx\";\n\n\nfunction Index() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_main_index_page__WEBPACK_IMPORTED_MODULE_1__[\"IndexPage\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsS0FBVCxHQUE4QjtBQUM1QixzQkFBTyxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFY0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmRleFBhZ2UgfSBmcm9tICdAL21haW4vaW5kZXgucGFnZSdcblxuZnVuY3Rpb24gSW5kZXgoKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gPEluZGV4UGFnZSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./use-cases/add-task/add-task.interactor.ts":
/*!***************************************************!*\
  !*** ./use-cases/add-task/add-task.interactor.ts ***!
  \***************************************************/
/*! exports provided: AddTaskInteractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTaskInteractor\", function() { return AddTaskInteractor; });\nclass AddTaskInteractor {\n  constructor(repository, idGenerator) {\n    this.repository = repository;\n    this.idGenerator = idGenerator;\n  }\n\n  async add(description) {\n    const task = {\n      id: await this.idGenerator.generate(),\n      description,\n      isDone: false\n    };\n    await this.repository.add(task);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91c2UtY2FzZXMvYWRkLXRhc2svYWRkLXRhc2suaW50ZXJhY3Rvci50cz85YWQ0Il0sIm5hbWVzIjpbIkFkZFRhc2tJbnRlcmFjdG9yIiwiY29uc3RydWN0b3IiLCJyZXBvc2l0b3J5IiwiaWRHZW5lcmF0b3IiLCJhZGQiLCJkZXNjcmlwdGlvbiIsInRhc2siLCJpZCIsImdlbmVyYXRlIiwiaXNEb25lIl0sIm1hcHBpbmdzIjoiQUFNQTtBQUFBO0FBQU8sTUFBTUEsaUJBQU4sQ0FBa0Q7QUFDdkRDLGFBQVcsQ0FDUUMsVUFEUixFQUVRQyxXQUZSLEVBR1Q7QUFBQSxTQUZpQkQsVUFFakIsR0FGaUJBLFVBRWpCO0FBQUEsU0FEaUJDLFdBQ2pCLEdBRGlCQSxXQUNqQjtBQUFFOztBQUVKLFFBQU1DLEdBQU4sQ0FBVUMsV0FBVixFQUE4QztBQUM1QyxVQUFNQyxJQUFVLEdBQUc7QUFDakJDLFFBQUUsRUFBRSxNQUFNLEtBQUtKLFdBQUwsQ0FBaUJLLFFBQWpCLEVBRE87QUFFakJILGlCQUZpQjtBQUdqQkksWUFBTSxFQUFFO0FBSFMsS0FBbkI7QUFNQSxVQUFNLEtBQUtQLFVBQUwsQ0FBZ0JFLEdBQWhCLENBQW9CRSxJQUFwQixDQUFOO0FBQ0Q7O0FBZHNEIiwiZmlsZSI6Ii4vdXNlLWNhc2VzL2FkZC10YXNrL2FkZC10YXNrLmludGVyYWN0b3IudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnQC9lbnRpdGllcydcblxuaW1wb3J0IHsgQWRkVGFza1VzZUNhc2UgfSBmcm9tICcuL2FkZC10YXNrLnVzZWNhc2UnXG5pbXBvcnQgeyBBZGRUYXNrUmVwb3NpdG9yeSB9IGZyb20gJy4vYWRkLXRhc2sucmVwb3NpdG9yeSdcbmltcG9ydCB7IElkR2VuZXJhdG9yIH0gZnJvbSAnLi9pZC1nZW5lcmF0b3IuaW5mcmEnXG5cbmV4cG9ydCBjbGFzcyBBZGRUYXNrSW50ZXJhY3RvciBpbXBsZW1lbnRzIEFkZFRhc2tVc2VDYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSByZXBvc2l0b3J5OiBBZGRUYXNrUmVwb3NpdG9yeSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlkR2VuZXJhdG9yOiBJZEdlbmVyYXRvclxuICApIHt9XG5cbiAgYXN5bmMgYWRkKGRlc2NyaXB0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB0YXNrOiBUYXNrID0ge1xuICAgICAgaWQ6IGF3YWl0IHRoaXMuaWRHZW5lcmF0b3IuZ2VuZXJhdGUoKSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgaXNEb25lOiBmYWxzZSxcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLnJlcG9zaXRvcnkuYWRkKHRhc2spXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./use-cases/add-task/add-task.interactor.ts\n");

/***/ }),

/***/ "./use-cases/add-task/add-task.localstorage.ts":
/*!*****************************************************!*\
  !*** ./use-cases/add-task/add-task.localstorage.ts ***!
  \*****************************************************/
/*! exports provided: AddTaskLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTaskLocalStorage\", function() { return AddTaskLocalStorage; });\n/* harmony import */ var _use_cases_list_tasks_list_tasks_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/use-cases/list-tasks/list-tasks.localstorage */ \"./use-cases/list-tasks/list-tasks.localstorage.ts\");\n\nclass AddTaskLocalStorage {\n  async add(task) {\n    const repository = new _use_cases_list_tasks_list_tasks_localstorage__WEBPACK_IMPORTED_MODULE_0__[\"ListTasksLocalStorage\"]();\n    const tasks = await repository.list();\n    tasks.push(task);\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91c2UtY2FzZXMvYWRkLXRhc2svYWRkLXRhc2subG9jYWxzdG9yYWdlLnRzPzQ4MTciXSwibmFtZXMiOlsiQWRkVGFza0xvY2FsU3RvcmFnZSIsImFkZCIsInRhc2siLCJyZXBvc2l0b3J5IiwiTGlzdFRhc2tzTG9jYWxTdG9yYWdlIiwidGFza3MiLCJsaXN0IiwicHVzaCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLG1CQUFOLENBQXVEO0FBQzVELFFBQU1DLEdBQU4sQ0FBVUMsSUFBVixFQUFxQztBQUNuQyxVQUFNQyxVQUFVLEdBQUcsSUFBSUMsbUdBQUosRUFBbkI7QUFDQSxVQUFNQyxLQUFLLEdBQUcsTUFBTUYsVUFBVSxDQUFDRyxJQUFYLEVBQXBCO0FBRUFELFNBQUssQ0FBQ0UsSUFBTixDQUFXTCxJQUFYO0FBRUFNLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixLQUFmLENBQTlCO0FBQ0Q7O0FBUjJEIiwiZmlsZSI6Ii4vdXNlLWNhc2VzL2FkZC10YXNrL2FkZC10YXNrLmxvY2Fsc3RvcmFnZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhc2sgfSBmcm9tICdAL2VudGl0aWVzJ1xuaW1wb3J0IHsgQWRkVGFza1JlcG9zaXRvcnkgfSBmcm9tICcuL2FkZC10YXNrLnJlcG9zaXRvcnknXG5pbXBvcnQgeyBMaXN0VGFza3NMb2NhbFN0b3JhZ2UgfSBmcm9tICdAL3VzZS1jYXNlcy9saXN0LXRhc2tzL2xpc3QtdGFza3MubG9jYWxzdG9yYWdlJ1xuXG5leHBvcnQgY2xhc3MgQWRkVGFza0xvY2FsU3RvcmFnZSBpbXBsZW1lbnRzIEFkZFRhc2tSZXBvc2l0b3J5IHtcbiAgYXN5bmMgYWRkKHRhc2s6IFRhc2spOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCByZXBvc2l0b3J5ID0gbmV3IExpc3RUYXNrc0xvY2FsU3RvcmFnZSgpXG4gICAgY29uc3QgdGFza3MgPSBhd2FpdCByZXBvc2l0b3J5Lmxpc3QoKVxuXG4gICAgdGFza3MucHVzaCh0YXNrKVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./use-cases/add-task/add-task.localstorage.ts\n");

/***/ }),

/***/ "./use-cases/add-task/add-task.presentation.tsx":
/*!******************************************************!*\
  !*** ./use-cases/add-task/add-task.presentation.tsx ***!
  \******************************************************/
/*! exports provided: AddTaskPresentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTaskPresentation\", function() { return AddTaskPresentation; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/base */ \"./components/base/index.ts\");\n\nvar _jsxFileName = \"/home/douglas/Projetos/fullstack-template/use-cases/add-task/add-task.presentation.tsx\";\n\n\nfunction AddTaskPresentation(props) {\n  const {\n    addTaskUseCase,\n    callback\n  } = props;\n  const {\n    0: description,\n    1: setDescription\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n\n  async function onClickAddTask() {\n    await addTaskUseCase.add(description);\n    callback();\n    setDescription('');\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex my-2\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_base__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n      value: description,\n      onChange: value => setDescription(value),\n      placeholder: \"Digite uma tarefa\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_base__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      onClick: onClickAddTask,\n      children: \"Adicionar\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91c2UtY2FzZXMvYWRkLXRhc2svYWRkLXRhc2sucHJlc2VudGF0aW9uLnRzeD9mNGE0Il0sIm5hbWVzIjpbIkFkZFRhc2tQcmVzZW50YXRpb24iLCJwcm9wcyIsImFkZFRhc2tVc2VDYXNlIiwiY2FsbGJhY2siLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidXNlU3RhdGUiLCJvbkNsaWNrQWRkVGFzayIsImFkZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBO0FBR08sU0FBU0EsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQXdEO0FBQzdELFFBQU07QUFBRUMsa0JBQUY7QUFBa0JDO0FBQWxCLE1BQStCRixLQUFyQztBQUNBLFFBQU07QUFBQSxPQUFDRyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxFQUFELENBQTlDOztBQUVBLGlCQUFlQyxjQUFmLEdBQWdDO0FBQzlCLFVBQU1MLGNBQWMsQ0FBQ00sR0FBZixDQUFtQkosV0FBbkIsQ0FBTjtBQUNBRCxZQUFRO0FBQ1JFLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFLHFFQUFDLHNEQUFEO0FBQ0UsV0FBSyxFQUFFRCxXQURUO0FBRUUsY0FBUSxFQUFHSyxLQUFELElBQVdKLGNBQWMsQ0FBQ0ksS0FBRCxDQUZyQztBQUdFLGlCQUFXLEVBQUM7QUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRSxxRUFBQyx1REFBRDtBQUFRLGFBQU8sRUFBRUYsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEIiwiZmlsZSI6Ii4vdXNlLWNhc2VzL2FkZC10YXNrL2FkZC10YXNrLnByZXNlbnRhdGlvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL2Jhc2UnXG5pbXBvcnQgeyBBZGRUYXNrVXNlQ2FzZSB9IGZyb20gJy4vYWRkLXRhc2sudXNlY2FzZSdcblxuZXhwb3J0IGZ1bmN0aW9uIEFkZFRhc2tQcmVzZW50YXRpb24ocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IGFkZFRhc2tVc2VDYXNlLCBjYWxsYmFjayB9ID0gcHJvcHNcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJylcblxuICBhc3luYyBmdW5jdGlvbiBvbkNsaWNrQWRkVGFzaygpIHtcbiAgICBhd2FpdCBhZGRUYXNrVXNlQ2FzZS5hZGQoZGVzY3JpcHRpb24pXG4gICAgY2FsbGJhY2soKVxuICAgIHNldERlc2NyaXB0aW9uKCcnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXktMlwiPlxuICAgICAgPElucHV0XG4gICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0RGVzY3JpcHRpb24odmFsdWUpfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSB1bWEgdGFyZWZhXCJcbiAgICAgIC8+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tBZGRUYXNrfT5BZGljaW9uYXI8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG50eXBlIFByb3BzID0ge1xuICBhZGRUYXNrVXNlQ2FzZTogQWRkVGFza1VzZUNhc2VcbiAgY2FsbGJhY2soKTogdm9pZFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./use-cases/add-task/add-task.presentation.tsx\n");

/***/ }),

/***/ "./use-cases/list-tasks/TasksList.tsx":
/*!********************************************!*\
  !*** ./use-cases/list-tasks/TasksList.tsx ***!
  \********************************************/
/*! exports provided: TasksList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TasksList\", function() { return TasksList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/douglas/Projetos/fullstack-template/use-cases/list-tasks/TasksList.tsx\";\nfunction TasksList(props) {\n  const {\n    tasks,\n    toggleIsDoneTaskInteractor,\n    callback\n  } = props;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    className: \"list-disc\",\n    children: tasks.map(task => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      className: task.isDone ? 'line-through' : '',\n      onClick: () => {\n        toggleIsDoneTaskInteractor.toggle(task.id);\n        callback();\n      },\n      children: task.description\n    }, task.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }, this))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91c2UtY2FzZXMvbGlzdC10YXNrcy9UYXNrc0xpc3QudHN4PzE1MmIiXSwibmFtZXMiOlsiVGFza3NMaXN0IiwicHJvcHMiLCJ0YXNrcyIsInRvZ2dsZUlzRG9uZVRhc2tJbnRlcmFjdG9yIiwiY2FsbGJhY2siLCJtYXAiLCJ0YXNrIiwiaXNEb25lIiwidG9nZ2xlIiwiaWQiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR08sU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBOEM7QUFDbkQsUUFBTTtBQUFFQyxTQUFGO0FBQVNDLDhCQUFUO0FBQXFDQztBQUFyQyxNQUFrREgsS0FBeEQ7QUFFQSxzQkFDRTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUEsY0FDR0MsS0FBSyxDQUFDRyxHQUFOLENBQVdDLElBQUQsaUJBQ1Q7QUFFRSxlQUFTLEVBQUVBLElBQUksQ0FBQ0MsTUFBTCxHQUFjLGNBQWQsR0FBK0IsRUFGNUM7QUFHRSxhQUFPLEVBQUUsTUFBTTtBQUNiSixrQ0FBMEIsQ0FBQ0ssTUFBM0IsQ0FBa0NGLElBQUksQ0FBQ0csRUFBdkM7QUFDQUwsZ0JBQVE7QUFDVCxPQU5IO0FBQUEsZ0JBUUdFLElBQUksQ0FBQ0k7QUFSUixPQUNPSixJQUFJLENBQUNHLEVBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEIiwiZmlsZSI6Ii4vdXNlLWNhc2VzL2xpc3QtdGFza3MvVGFza3NMaXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhc2sgfSBmcm9tICdAL2VudGl0aWVzJ1xuaW1wb3J0IHsgVG9nZ2xlSXNEb25lVGFza1VzZUNhc2UgfSBmcm9tICcuLi90b2dnbGUtaXMtZG9uZS10YXNrL3RvZ2dsZS1pcy1kb25lLXRhc2sudXNlY2FzZSdcblxuZXhwb3J0IGZ1bmN0aW9uIFRhc2tzTGlzdChwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgdGFza3MsIHRvZ2dsZUlzRG9uZVRhc2tJbnRlcmFjdG9yLCBjYWxsYmFjayB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2NcIj5cbiAgICAgIHt0YXNrcy5tYXAoKHRhc2spID0+IChcbiAgICAgICAgPGxpXG4gICAgICAgICAga2V5PXt0YXNrLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17dGFzay5pc0RvbmUgPyAnbGluZS10aHJvdWdoJyA6ICcnfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZUlzRG9uZVRhc2tJbnRlcmFjdG9yLnRvZ2dsZSh0YXNrLmlkKVxuICAgICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGFzay5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIClcbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgdGFza3M6IFRhc2tbXVxuICB0b2dnbGVJc0RvbmVUYXNrSW50ZXJhY3RvcjogVG9nZ2xlSXNEb25lVGFza1VzZUNhc2VcbiAgY2FsbGJhY2soKTogdm9pZFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./use-cases/list-tasks/TasksList.tsx\n");

/***/ }),

/***/ "./use-cases/list-tasks/list-tasks.interactor.ts":
/*!*******************************************************!*\
  !*** ./use-cases/list-tasks/list-tasks.interactor.ts ***!
  \*******************************************************/
/*! exports provided: ListTasksInteractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListTasksInteractor\", function() { return ListTasksInteractor; });\nclass ListTasksInteractor {\n  constructor(repository) {\n    this.repository = repository;\n  }\n\n  list() {\n    return this.repository.list();\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91c2UtY2FzZXMvbGlzdC10YXNrcy9saXN0LXRhc2tzLmludGVyYWN0b3IudHM/MmY1NyJdLCJuYW1lcyI6WyJMaXN0VGFza3NJbnRlcmFjdG9yIiwiY29uc3RydWN0b3IiLCJyZXBvc2l0b3J5IiwibGlzdCJdLCJtYXBwaW5ncyI6IkFBSUE7QUFBQTtBQUFPLE1BQU1BLG1CQUFOLENBQXNEO0FBQzNEQyxhQUFXLENBQWtCQyxVQUFsQixFQUFtRDtBQUFBLFNBQWpDQSxVQUFpQyxHQUFqQ0EsVUFBaUM7QUFBRTs7QUFFaEVDLE1BQUksR0FBeUI7QUFDM0IsV0FBTyxLQUFLRCxVQUFMLENBQWdCQyxJQUFoQixFQUFQO0FBQ0Q7O0FBTDBEIiwiZmlsZSI6Ii4vdXNlLWNhc2VzL2xpc3QtdGFza3MvbGlzdC10YXNrcy5pbnRlcmFjdG9yLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFzayB9IGZyb20gJ0AvZW50aXRpZXMnXG5pbXBvcnQgeyBMaXN0VGFza3NSZXBvc2l0b3J5IH0gZnJvbSAnLi9saXN0LXRhc2tzLnJlcG9zaXRvcnknXG5pbXBvcnQgeyBMaXN0VGFza3NVc2VDYXNlIH0gZnJvbSAnLi9saXN0LXRhc2tzLnVzZWNhc2UnXG5cbmV4cG9ydCBjbGFzcyBMaXN0VGFza3NJbnRlcmFjdG9yIGltcGxlbWVudHMgTGlzdFRhc2tzVXNlQ2FzZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcmVwb3NpdG9yeTogTGlzdFRhc2tzUmVwb3NpdG9yeSkge31cblxuICBsaXN0KCk6IE1heWJlUHJvbWlzZTxUYXNrW10+IHtcbiAgICByZXR1cm4gdGhpcy5yZXBvc2l0b3J5Lmxpc3QoKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./use-cases/list-tasks/list-tasks.interactor.ts\n");

/***/ }),

/***/ "./use-cases/list-tasks/list-tasks.localstorage.ts":
/*!*********************************************************!*\
  !*** ./use-cases/list-tasks/list-tasks.localstorage.ts ***!
  \*********************************************************/
/*! exports provided: ListTasksLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListTasksLocalStorage\", function() { return ListTasksLocalStorage; });\nclass ListTasksLocalStorage {\n  async list() {\n    const tasks = localStorage.getItem('tasks');\n    return JSON.parse(tasks || '[]');\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91c2UtY2FzZXMvbGlzdC10YXNrcy9saXN0LXRhc2tzLmxvY2Fsc3RvcmFnZS50cz81NjZkIl0sIm5hbWVzIjpbIkxpc3RUYXNrc0xvY2FsU3RvcmFnZSIsImxpc3QiLCJ0YXNrcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUdBO0FBQUE7QUFBTyxNQUFNQSxxQkFBTixDQUEyRDtBQUNoRSxRQUFNQyxJQUFOLEdBQThCO0FBQzVCLFVBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQWQ7QUFDQSxXQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osS0FBSyxJQUFJLElBQXBCLENBQVA7QUFDRDs7QUFKK0QiLCJmaWxlIjoiLi91c2UtY2FzZXMvbGlzdC10YXNrcy9saXN0LXRhc2tzLmxvY2Fsc3RvcmFnZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRhc2sgfSBmcm9tICdAL2VudGl0aWVzJ1xuaW1wb3J0IHsgTGlzdFRhc2tzUmVwb3NpdG9yeSB9IGZyb20gJy4vbGlzdC10YXNrcy5yZXBvc2l0b3J5J1xuXG5leHBvcnQgY2xhc3MgTGlzdFRhc2tzTG9jYWxTdG9yYWdlIGltcGxlbWVudHMgTGlzdFRhc2tzUmVwb3NpdG9yeSB7XG4gIGFzeW5jIGxpc3QoKTogUHJvbWlzZTxUYXNrW10+IHtcbiAgICBjb25zdCB0YXNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpXG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGFza3MgfHwgJ1tdJylcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./use-cases/list-tasks/list-tasks.localstorage.ts\n");

/***/ }),

/***/ "./use-cases/toggle-is-done-task/toggle-is-done-task.interactor.ts":
/*!*************************************************************************!*\
  !*** ./use-cases/toggle-is-done-task/toggle-is-done-task.interactor.ts ***!
  \*************************************************************************/
/*! exports provided: ToggleIsDoneTaskInteractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToggleIsDoneTaskInteractor\", function() { return ToggleIsDoneTaskInteractor; });\nclass ToggleIsDoneTaskInteractor {\n  constructor(toggleIsDoneTaskRepository) {\n    this.toggleIsDoneTaskRepository = toggleIsDoneTaskRepository;\n  }\n\n  toggle(id) {\n    this.toggleIsDoneTaskRepository.toggle(id);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91c2UtY2FzZXMvdG9nZ2xlLWlzLWRvbmUtdGFzay90b2dnbGUtaXMtZG9uZS10YXNrLmludGVyYWN0b3IudHM/MzNmZiJdLCJuYW1lcyI6WyJUb2dnbGVJc0RvbmVUYXNrSW50ZXJhY3RvciIsImNvbnN0cnVjdG9yIiwidG9nZ2xlSXNEb25lVGFza1JlcG9zaXRvcnkiLCJ0b2dnbGUiLCJpZCJdLCJtYXBwaW5ncyI6IkFBR0E7QUFBQTtBQUFPLE1BQU1BLDBCQUFOLENBQW9FO0FBQ3pFQyxhQUFXLENBQ1FDLDBCQURSLEVBRVQ7QUFBQSxTQURpQkEsMEJBQ2pCLEdBRGlCQSwwQkFDakI7QUFBRTs7QUFFSkMsUUFBTSxDQUFDQyxFQUFELEVBQW1CO0FBQ3ZCLFNBQUtGLDBCQUFMLENBQWdDQyxNQUFoQyxDQUF1Q0MsRUFBdkM7QUFDRDs7QUFQd0UiLCJmaWxlIjoiLi91c2UtY2FzZXMvdG9nZ2xlLWlzLWRvbmUtdGFzay90b2dnbGUtaXMtZG9uZS10YXNrLmludGVyYWN0b3IudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2dnbGVJc0RvbmVUYXNrVXNlQ2FzZSB9IGZyb20gJy4vdG9nZ2xlLWlzLWRvbmUtdGFzay51c2VjYXNlJ1xuaW1wb3J0IHsgVG9nZ2xlSXNEb25lVGFza1JlcG9zaXRvcnkgfSBmcm9tICcuL3RvZ2dsZS1pcy1kb25lLXRhc2sucmVwb3NpdG9yeSdcblxuZXhwb3J0IGNsYXNzIFRvZ2dsZUlzRG9uZVRhc2tJbnRlcmFjdG9yIGltcGxlbWVudHMgVG9nZ2xlSXNEb25lVGFza1VzZUNhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRvZ2dsZUlzRG9uZVRhc2tSZXBvc2l0b3J5OiBUb2dnbGVJc0RvbmVUYXNrUmVwb3NpdG9yeVxuICApIHt9XG5cbiAgdG9nZ2xlKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZUlzRG9uZVRhc2tSZXBvc2l0b3J5LnRvZ2dsZShpZClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./use-cases/toggle-is-done-task/toggle-is-done-task.interactor.ts\n");

/***/ }),

/***/ "./use-cases/toggle-is-done-task/toggle-is-done-task.localstorage.ts":
/*!***************************************************************************!*\
  !*** ./use-cases/toggle-is-done-task/toggle-is-done-task.localstorage.ts ***!
  \***************************************************************************/
/*! exports provided: ToggleIsDoneTaskLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToggleIsDoneTaskLocalStorage\", function() { return ToggleIsDoneTaskLocalStorage; });\n/* harmony import */ var _use_cases_list_tasks_list_tasks_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/use-cases/list-tasks/list-tasks.localstorage */ \"./use-cases/list-tasks/list-tasks.localstorage.ts\");\n\nclass ToggleIsDoneTaskLocalStorage {\n  async toggle(id) {\n    const repository = new _use_cases_list_tasks_list_tasks_localstorage__WEBPACK_IMPORTED_MODULE_0__[\"ListTasksLocalStorage\"]();\n    const tasks = await repository.list();\n    const task = tasks.find(task => task.id === id);\n    task.isDone = !task.isDone;\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91c2UtY2FzZXMvdG9nZ2xlLWlzLWRvbmUtdGFzay90b2dnbGUtaXMtZG9uZS10YXNrLmxvY2Fsc3RvcmFnZS50cz9hM2E3Il0sIm5hbWVzIjpbIlRvZ2dsZUlzRG9uZVRhc2tMb2NhbFN0b3JhZ2UiLCJ0b2dnbGUiLCJpZCIsInJlcG9zaXRvcnkiLCJMaXN0VGFza3NMb2NhbFN0b3JhZ2UiLCJ0YXNrcyIsImxpc3QiLCJ0YXNrIiwiZmluZCIsImlzRG9uZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLE1BQU1BLDRCQUFOLENBQ2lDO0FBQ3RDLFFBQU1DLE1BQU4sQ0FBYUMsRUFBYixFQUF3QztBQUN0QyxVQUFNQyxVQUFVLEdBQUcsSUFBSUMsbUdBQUosRUFBbkI7QUFDQSxVQUFNQyxLQUFLLEdBQUcsTUFBTUYsVUFBVSxDQUFDRyxJQUFYLEVBQXBCO0FBRUEsVUFBTUMsSUFBSSxHQUFHRixLQUFLLENBQUNHLElBQU4sQ0FBWUQsSUFBRCxJQUFVQSxJQUFJLENBQUNMLEVBQUwsS0FBWUEsRUFBakMsQ0FBYjtBQUNBSyxRQUFJLENBQUNFLE1BQUwsR0FBYyxDQUFDRixJQUFJLENBQUNFLE1BQXBCO0FBRUFDLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixLQUFmLENBQTlCO0FBQ0Q7O0FBVHFDIiwiZmlsZSI6Ii4vdXNlLWNhc2VzL3RvZ2dsZS1pcy1kb25lLXRhc2svdG9nZ2xlLWlzLWRvbmUtdGFzay5sb2NhbHN0b3JhZ2UudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0VGFza3NMb2NhbFN0b3JhZ2UgfSBmcm9tICdAL3VzZS1jYXNlcy9saXN0LXRhc2tzL2xpc3QtdGFza3MubG9jYWxzdG9yYWdlJ1xuaW1wb3J0IHsgVG9nZ2xlSXNEb25lVGFza1JlcG9zaXRvcnkgfSBmcm9tICcuL3RvZ2dsZS1pcy1kb25lLXRhc2sucmVwb3NpdG9yeSdcblxuZXhwb3J0IGNsYXNzIFRvZ2dsZUlzRG9uZVRhc2tMb2NhbFN0b3JhZ2VcbiAgaW1wbGVtZW50cyBUb2dnbGVJc0RvbmVUYXNrUmVwb3NpdG9yeSB7XG4gIGFzeW5jIHRvZ2dsZShpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcmVwb3NpdG9yeSA9IG5ldyBMaXN0VGFza3NMb2NhbFN0b3JhZ2UoKVxuICAgIGNvbnN0IHRhc2tzID0gYXdhaXQgcmVwb3NpdG9yeS5saXN0KClcblxuICAgIGNvbnN0IHRhc2sgPSB0YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZClcbiAgICB0YXNrLmlzRG9uZSA9ICF0YXNrLmlzRG9uZVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./use-cases/toggle-is-done-task/toggle-is-done-task.localstorage.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });