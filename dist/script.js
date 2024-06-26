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
  const scroll = calcScroll();
  let btnPressed, presentRemove;
  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);
    trigger.forEach(elem => {
      elem.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }
        btnPressed = true;
        if (destroy) {
          elem.remove();
          presentRemove = true;
        } else {
          if (!presentRemove) calcMarginRight('.fixed-gift', true);
        }
        closeModal();
        openModal(modalSelector, scroll);
      });
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        closeModal(scroll);
        if (!presentRemove) calcMarginRight('.fixed-gift');
      }
    });
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        closeModal(scroll);
        if (!presentRemove) calcMarginRight('.fixed-gift');
      }
    });
    close.addEventListener('click', () => {
      closeModal(scroll);
      if (!presentRemove) calcMarginRight('.fixed-gift');
    });
  }
  function closeModal(scroll) {
    const windows = document.querySelectorAll('[data-modal]');
    windows.forEach(item => {
      item.style.display = 'none';
      item.classList.add('animated', 'fadeIn');
    });
    document.body.style.overflow = '';
    if (scroll) {
      document.body.style.marginRight = '0px';
    }
  }
  function openModal(selector, scroll, display = 'block') {
    const modal = document.querySelector(selector);
    modal.style.display = display;
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
  function showModalByScroll(selector) {
    window.addEventListener('scroll', () => {
      if (!btnPressed && window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }
  function calcMarginRight(selector, bool = false) {
    const elem = document.querySelector(selector),
      marginRight = +getComputedStyle(elem).right.replace(/px/, '');
    if (bool) {
      elem.style.right = `${marginRight + scroll}px`;
    } else {
      elem.style.right = `${marginRight - scroll}px`;
    }
  }
  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  showModalByTime('.popup-consultation', 60000, scroll);
  showModalByScroll('.fixed-gift');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const slider = (slides, time, dir, next, prev) => {
  const slide = document.querySelectorAll(slides);
  let paused;
  let slideIndex = 1;
  function showSlides(n) {
    if (n > slide.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slide.length;
    }
    slide.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });
    slide[slideIndex - 1].style.display = 'block';
  }
  showSlides(slideIndex);
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  try {
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      slide[slideIndex - 1].classList.remove('slideInRight');
      slide[slideIndex - 1].classList.add('slideInLeft');
    });
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      slide[slideIndex - 1].classList.remove('slideInLeft');
      slide[slideIndex - 1].classList.add('slideInRight');
    });
  } catch (e) {
    if (e.name !== 'TypeError') {
      throw e;
    }
  }
  function activateAnimation(t) {
    if (dir === 'vertical') {
      paused = setInterval(() => {
        plusSlides(1);
        slide[slideIndex - 1].classList.add('slideInDown');
      }, t);
    } else {
      paused = setInterval(() => {
        plusSlides(1);
        slide[slideIndex - 1].classList.remove('slideInLeft');
        slide[slideIndex - 1].classList.add('slideInRight');
      }, t);
    }
  }
  activateAnimation(time);
  slide[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  slide[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation(time);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

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
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");




window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 5000, 'gorisontal', '.main-next-btn', '.main-prev-btn');
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 5000, 'vertical');
});
/******/ })()
;
//# sourceMappingURL=script.js.map