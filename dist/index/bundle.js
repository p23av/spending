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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/indexstyle.css":
/*!********************************!*\
  !*** ./src/css/indexstyle.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/indexstyle.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_indexstyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/indexstyle.css */ \"./src/css/indexstyle.css\");\n/* harmony import */ var _css_indexstyle_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_indexstyle_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var firebaseConfig = {\n    apiKey: \"AIzaSyC0vKqCtJ9IhEP6nboRWqN6ptRurpMbCBE\",\n    authDomain: \"decrease-54dec.firebaseapp.com\",\n    databaseURL: \"https://decrease-54dec.firebaseio.com\",\n    projectId: \"decrease-54dec\",\n    storageBucket: \"decrease-54dec.appspot.com\",\n    messagingSenderId: \"807302734188\",\n    appId: \"1:807302734188:web:bd0db8c3a4258e618e5349\"\n  };\n  firebase.initializeApp(firebaseConfig);\n  var database = firebase.database();\n  console.log(database);\n  var totalValue; // Load\n\n  database.ref('total/value').on('value', function (val) {\n    document.getElementById('total-num').textContent = val.val();\n    totalValue = val.val();\n    console.log(val.val());\n  });\n  database.ref('boughtList').on('value', function (list) {\n    var boughtList = list.val();\n    var ul = document.getElementById('bought-list');\n    ul.innerHTML = '';\n\n    for (var item in boughtList) {\n      if (boughtList.hasOwnProperty(item)) {\n        var el = boughtList[item];\n        var li = document.createElement('li');\n        li.className = 'bought-list-item';\n        li.dataset.key = item;\n        var text = document.createElement('span');\n        text.textContent = el['name'];\n        var num = document.createElement('span');\n        num.textContent = el['price'];\n        var i = document.createElement('i');\n        i.innerHTML = '&#8381;';\n        num.append(i);\n        li.append(text);\n        li.append(num);\n        ul.append(li);\n      }\n    }\n  });\n  database.ref('shoppingList/addS').on('value', function (list) {\n    var shoppingList = list.val();\n    var ul = document.getElementById('shopping-list-s').getElementsByTagName('ul')[0];\n    ul.innerHTML = '';\n\n    for (var item in shoppingList) {\n      if (shoppingList.hasOwnProperty(item)) {\n        var el = shoppingList[item];\n        var li = document.createElement('li');\n        li.className = 'bought-list-item';\n        li.dataset.key = item;\n        var text = document.createElement('span');\n        text.textContent = el['thing'];\n        var num = document.createElement('span');\n        num.textContent = el['price'];\n        var i = document.createElement('i');\n        i.innerHTML = '&#8381;';\n        num.append(i);\n        li.append(text);\n        li.append(num);\n        ul.append(li);\n      }\n    }\n  });\n  database.ref('shoppingList/addM').on('value', function (list) {\n    var shoppingList = list.val();\n    var ul = document.getElementById('shopping-list-m').getElementsByTagName('ul')[0];\n    ul.innerHTML = '';\n\n    for (var item in shoppingList) {\n      if (shoppingList.hasOwnProperty(item)) {\n        var el = shoppingList[item];\n        var li = document.createElement('li');\n        li.className = 'bought-list-item';\n        li.dataset.key = item;\n        var text = document.createElement('span');\n        text.textContent = el['thing'];\n        var num = document.createElement('span');\n        num.textContent = el['price'];\n        var i = document.createElement('i');\n        i.innerHTML = '&#8381;';\n        num.append(i);\n        li.append(text);\n        li.append(num);\n        ul.append(li);\n      }\n    }\n  });\n  database.ref('shoppingList/addL').on('value', function (list) {\n    var shoppingList = list.val();\n    var ul = document.getElementById('shopping-list-l').getElementsByTagName('ul')[0];\n    ul.innerHTML = '';\n\n    for (var item in shoppingList) {\n      if (shoppingList.hasOwnProperty(item)) {\n        var el = shoppingList[item];\n        var li = document.createElement('li');\n        li.className = 'bought-list-item';\n        li.dataset.key = item;\n        var text = document.createElement('span');\n        text.textContent = el['thing'];\n        var num = document.createElement('span');\n        num.textContent = el['price'];\n        var i = document.createElement('i');\n        i.innerHTML = '&#8381;';\n        num.append(i);\n        li.append(text);\n        li.append(num);\n        ul.append(li);\n      }\n    }\n  }); // decrease\n\n  document.getElementById('decrease-btn').addEventListener('click', function (event) {\n    event.preventDefault();\n    var price = document.getElementById('decrease-price');\n    var name = document.getElementById('decrease-name');\n    database.ref('total').set({\n      value: totalValue - price.value\n    });\n    var key = database.ref('boughtList').push().key;\n    database.ref('boughtList/' + key).set({\n      name: name.value,\n      price: price.value // key: key\n\n    }); //\n\n    price.value = '';\n    name.value = '';\n  }); // increase\n\n  document.getElementById('increase-btn').addEventListener('click', function (event) {\n    event.preventDefault();\n    var amount = document.getElementById('increase-amount');\n    var date = document.getElementById('increase-date');\n    database.ref('total').set({\n      value: +totalValue + +amount.value\n    });\n    amount.value = '';\n    date.value = '';\n  }); // add-item\n\n  _toConsumableArray(document.getElementsByClassName('add-item')).forEach(function (btn) {\n    btn.addEventListener('click', function (event) {\n      event.preventDefault();\n      event.target.classList.add('add-item_close');\n      event.target.parentElement.getElementsByClassName('new-item')[0].classList.add('active');\n    });\n  });\n\n  _toConsumableArray(document.querySelectorAll('.new-item button')).forEach(function (addBtn) {\n    addBtn.addEventListener('click', function (event) {\n      event.preventDefault();\n      event.target.parentElement.parentElement.getElementsByClassName('add-item')[0].classList.remove('add-item_close');\n      event.target.parentElement.parentElement.getElementsByClassName('new-item')[0].classList.remove('active');\n      var fullText = event.target.previousElementSibling.value.split(' : ');\n      var thing = fullText[0];\n      var price = fullText[1];\n      var key = database.ref('shoppingList/' + event.target.id).push().key;\n      database.ref('shoppingList/' + event.target.id + '/' + key).set({\n        thing: thing,\n        price: price\n      });\n      event.target.previousElementSibling.value = '';\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });