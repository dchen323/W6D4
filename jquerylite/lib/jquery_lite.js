/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dom_node_collection.js":
/*!************************************!*\
  !*** ./lib/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(args){\n    this.args = args;\n  }\n\n  html(string = null) {\n    if (string !== null){\n      this.args.forEach((_,idx) => this.args[idx].innerHTML = string);\n    }else{\n      return this.nodes[0].innerHTML;\n    }\n  }\n\n  empty(){\n    this.html(\"\");\n  }\n  append(children){\n    this.args.forEach((el)=>{\n      // debugger\n      el.appendChild(children.cloneNode(true));\n    });\n  }\n\n  attr(name, value){\n    if (value !== undefined){\n      this.args.forEach((_,idx)=>{\n        this.args[idx].setAttribute(name,value);\n      });\n    }else {\n      for (var i = 0; i < this.args.length; i++) {\n        if(this.args[i].name !== undefined){\n        return this.args[i].getAttribute(name);\n        }\n      }\n    }\n  }\n\n  addClass(value){\n    this.attr(\"class\",value);\n  }\n\n  removeClass(value){\n    this.args.forEach((_,idx)=>{\n      if (this.args[idx].getAttribute(\"class\") === value){\n        this.args[idx].setAttribute(\"class\",\"\");\n      }\n    });\n  }\n\n  children(){\n    let childrenArr = [];\n    this.args.forEach((_,idx)=>{\n      childrenArr.push(new DOMNodeCollection(this.args[idx].childNodes));\n      console.log(this.args[idx].childNodes);\n    });\n    return childrenArr;\n  }\n\n  parent(){\n    let parentArr = [];\n    this.args.forEach((_, idx) => {\n      parentArr.push(this.args[idx].parentNode);\n    });\n    return parentArr;\n  }\n\n  find(selector){\n    let result = [];\n    this.args.forEach((_,idx)=>{\n      result = result.concat(this.args[idx].querySelectorAll(selector));\n    });\n    return result;\n  }\n\n  removed(node){\n    const arr = this.find(node);\n    arr.forEach((el)=> el.remove());\n  }\n}\n\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./lib/dom_node_collection.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./lib/dom_node_collection.js\");\n\nwindow.$l = function(selector){\n  if (selector instanceof HTMLElement){\n    const element = Array.from(selector);\n    return new DOMNodeCollection(element);\n  }else {\n    const nodeList = Array.from(document.querySelectorAll(selector));\n    return new DOMNodeCollection(nodeList);\n  }\n};\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });