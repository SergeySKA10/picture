/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const modal = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      scroll = calcScroll();
    trigger.forEach(elem => {
      elem.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }
        if (triggerSelector == '.popup_calc_button') {
          const inputs = document.querySelectorAll('.popup_calc input');
          let countInputValue = 0;
          for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value) {
              countInputValue++;
              inputs[i].style.border = '';
            } else inputs[i].style.border = '1px solid red';
          }
          if (countInputValue === inputs.length) {
            inputs.forEach(item => item.style.border = '');
            closeModal();
            openModal(modalSelector, scroll);
          }
        } else if (triggerSelector == '.popup_calc_profile_button') {
          const inputs = document.querySelectorAll('.checkbox');
          let countInputValue = 0;
          for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].checked) {
              countInputValue++;
              inputs[i].parentNode.style.border = '';
            } else inputs[i].parentNode.style.border = '1px solid red';
          }
          if (countInputValue > 0) {
            inputs.forEach(item => {
              item.parentNode.style.border = '';
              item.checked = false;
            });
            closeModal();
            openModal(modalSelector, scroll);
          }
        } else {
          closeModal();
          openModal(modalSelector, scroll);
        }
      });
    });
    modal.addEventListener('click', e => {
      if (e.target === modal && closeClickOverlay) {
        closeModal(scroll);
      }
    });
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        closeModal(scroll);
      }
    });
    close.addEventListener('click', () => {
      closeModal(scroll);
    });
  }
  function closeModal(scroll) {
    const windows = document.querySelectorAll('[data-modal]');
    windows.forEach(item => {
      item.style.display = 'none';
    });
    document.body.style.overflow = '';
    if (scroll) {
      document.body.style.marginRight = '0px';
    }
  }
  function openModal(selector, scroll) {
    const modal = document.querySelector(selector);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    if (scroll) {
      document.body.style.marginRight = `${scroll}px`;
    }
  }
  function showModalByTime(selector, time, scroll) {
    setTimeout(() => {
      let display;
      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display != 'none') {
          display = 'block';
        }
      });
      if (!display) {
        openModal(selector, scroll);
      }
    }, time);
  }
  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  showModalByTime('.popup-consultation', 6000, scroll);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

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
/******/ 			// no module.id needed
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
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");



window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
/******/ })()
;
//# sourceMappingURL=script.js.map