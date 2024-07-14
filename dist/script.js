/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const accordion = trigger => {
  const btns = document.querySelectorAll(trigger);
  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      if (this.classList.contains('active-style')) {
        this.classList.remove('active-style');
        this.nextElementSibling.classList.remove('active-content');
        this.nextElementSibling.style.maxHeight = '0px';
      } else {
        btns.forEach(item => {
          item.classList.remove('active-style');
          item.nextElementSibling.classList.remove('active-content');
          item.nextElementSibling.style.maxHeight = '0px';
        });
        this.classList.add('active-style');
        this.nextElementSibling.classList.add('active-content');
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const burger = (burgerSelector, menuSelector) => {
  const burger = document.querySelector(burgerSelector),
    menu = document.querySelector(menuSelector);
  menu.style.display = 'none';
  burger.style.display = 'none';
  burger.addEventListener('click', () => {
    if (menu.style.display == 'none' && window.screen.availWidth < 993) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
  window.addEventListener('resize', () => {
    if (window.screen.availWidth >= 992) {
      menu.style.display = 'none';
      burger.style.display = 'none';
    } else {
      burger.style.display = 'block';
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_getValueForCalc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getValueForCalc */ "./src/js/services/getValueForCalc.js");



const calc = (state, size, material, option, promocode, result) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionBlock = document.querySelector(option),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);
  let sum = 0,
    sizePrice = '',
    materialPrice = '',
    optionPrice = 0;
  const calcFunc = value => {
    sum = Math.round(sizePrice * materialPrice + optionPrice);

    // масштабирование мини картинки при изменении выбора пользователем размера
    if (value) {
      const img = document.querySelector('.img-canvas img');
      switch (value) {
        case "50x70":
          img.style.width = '500px';
          img.style.height = '700px';
          break;
        case "70x70":
          img.style.width = '700px';
          img.style.height = '700px';
          break;
        case "70x100":
          img.style.width = '700px';
          img.style.height = '1000px';
          break;
        default:
          img.style.width = '402px';
          img.style.height = '512px';
      }
    }

    // расчет суммы и демонстрация ее в блоке

    if (sizePrice === '' || materialPrice === '') {
      resultBlock.textContent = 'Пожалуйста выберете размер и материал картины';
    } else if (promocodeBlock.value === 'IWANTPOPART') {
      sum = Math.round(sum * 0.7);
      resultBlock.textContent = sum;
      state.promocode = 'ok';
    } else {
      resultBlock.textContent = sum;
    }
    state.priceCalc = sum;
    console.log(state);
  };

  // изменение опций + добавление параметров в modalState

  sizeBlock.addEventListener('change', async () => {
    const value = await (0,_services_getValueForCalc__WEBPACK_IMPORTED_MODULE_0__.getValue)('http://localhost:3000/size');
    sizePrice = value[0][sizeBlock.value] ? value[0][sizeBlock.value] : '';
    calcFunc(sizeBlock.value);
    state.size = sizeBlock.value;
  });
  materialBlock.addEventListener('change', async () => {
    const value = await (0,_services_getValueForCalc__WEBPACK_IMPORTED_MODULE_0__.getValue)('http://localhost:3000/material');
    materialPrice = value[0][materialBlock.value] ? value[0][materialBlock.value] : '';
    calcFunc();
    state.material = materialBlock.value;
  });
  optionBlock.addEventListener('change', async () => {
    const value = await (0,_services_getValueForCalc__WEBPACK_IMPORTED_MODULE_0__.getValue)('http://localhost:3000/options');
    optionPrice = value[0][optionBlock.value] ? value[0][optionBlock.value] : 0;
    calcFunc();
    state.option = optionBlock.value;
  });
  promocodeBlock.addEventListener('input', calcFunc);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./src/js/modules/checkEmailInputs.js":
/*!********************************************!*\
  !*** ./src/js/modules/checkEmailInputs.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const checkEmailInputs = selector => {
  const emailInputs = document.querySelectorAll(selector);
  emailInputs.forEach(item => {
    item.addEventListener('change', () => {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(item.value)) {
        item.style.color = 'red';
        item.value = 'Неверно введен email';
        setTimeout(() => {
          item.style.color = '';
          item.value = '';
        }, 3000);
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkEmailInputs);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const checkTextInputs = selector => {
  const textInputs = document.querySelectorAll(selector);
  textInputs.forEach(input => {
    input.addEventListener('keypress', e => {
      if (e.key.match(/[^а-яё 0-9 . !]/ig)) {
        e.preventDefault();
      }
    });
    input.addEventListener('input', () => {
      if (input.value.match(/[^а-яё 0-9 . !]/ig)) {
        input.value = '';
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/drop.js":
/*!********************************!*\
  !*** ./src/js/modules/drop.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./src/js/modules/forms.js");



const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');
  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults);
    });
  });
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // функции посказки пользователю для drop

  function hightLight(item) {
    item.closest('.file_upload').style.border = '3px groove pink';
    item.closest('.file_upload').style.borderRadius = '20px';
    item.closest('.file_upload').style.opacity = '0.5';
    item.closest('.file_upload').style.backgroundColor = 'pink';
  }
  function unhightLight(item) {
    item.closest('.file_upload').style.border = 'none';
    item.closest('.file_upload').style.borderRadius = '0px';
    item.closest('.file_upload').style.opacity = '1';
    item.closest('.file_upload').style.backgroundColor = '';
  }

  // события 'dragenter', 'dragover'

  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => {
        hightLight(input);
      });
    });
  });

  // события 'dragleave',  'drop'

  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => {
        unhightLight(input);
      });
    });
  });

  // событие drop

  fileInputs.forEach(input => {
    input.addEventListener('drop', e => {
      input.files = e.dataTransfer.files; // добавляем в инпут файл из события 
      (0,_forms__WEBPACK_IMPORTED_MODULE_0__.workWithLoadImg)(input);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drop);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    noPortfolio = document.querySelector('.portfolio-no');
  wrapper.style.justifyContent = 'space-around';
  const typeFilter = markType => {
    markAll.forEach(block => {
      block.style.display = 'none';
      block.classList.remove('animated', 'fadeIn');
    });
    noPortfolio.style.display = 'none';
    noPortfolio.classList.remove('animated', 'fadeIn');
    if (markType) {
      markType.forEach(block => {
        block.style.display = 'block';
        block.classList.add('animated', 'fadeIn');
      });
    } else {
      noPortfolio.style.display = 'block';
      noPortfolio.classList.add('animated', 'fadeIn');
    }
  };
  const clickBtn = (btnSelector, contentSelector) => {
    const btn = document.querySelector(btnSelector);
    btn.addEventListener('click', () => {
      if (contentSelector) {
        typeFilter(document.querySelectorAll(contentSelector));
      } else {
        typeFilter();
      }
    });
  };
  clickBtn('.portfolio-menu .all', '.portfolio-wrapper .all');
  clickBtn('.portfolio-menu .lovers', '.portfolio-wrapper .lovers');
  clickBtn('.portfolio-menu .chef', '.portfolio-wrapper .chef');
  clickBtn('.portfolio-menu .girl', '.portfolio-wrapper .girl');
  clickBtn('.portfolio-menu .guy', '.portfolio-wrapper .guy');
  clickBtn('.portfolio-menu .grandmother');
  clickBtn('.portfolio-menu .granddad');
  menu.addEventListener('click', e => {
    if (e.target && e.target.tagName === 'LI') {
      items.forEach(item => {
        item.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   workWithLoadImg: () => (/* binding */ workWithLoadImg)
/* harmony export */ });
/* harmony import */ var _services_postForms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/postForms */ "./src/js/services/postForms.js");



const forms = state => {
  const forms = document.querySelectorAll('form'),
    upload = document.querySelectorAll('[name = "upload"]'),
    path = {
      designer: 'assets/server.php',
      question: 'assets/question.php'
    },
    message = {
      loading: 'Загрузка',
      fail: 'Произошла ошибка',
      complite: 'Спасибо! Скоро с Вами свяжется наш дизайнер',
      spinner: 'assets/img/spinner.gif',
      ok: 'assets/img/ok.png',
      err: 'assets/img/fail.png'
    };

  // отчиска инпутов

  const clearInputs = form => {
    form.reset();
    upload.forEach(item => {
      item.previousElementSibling.textContent = `Файл не выбран. Загрузите или перетащите файл сюда`;
    });
  };

  // обрабатываем все инпуты с загрузкой файла

  upload.forEach(item => {
    item.addEventListener('input', () => {
      workWithLoadImg(item);
    });
  });
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let stausMessage = document.createElement('div');
      stausMessage.classList.add('status');
      form.parentNode.append(stausMessage);
      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      stausMessage.append(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      stausMessage.append(textMessage);
      const formData = new FormData(form);
      let api = form.closest('.popup-design') || form.classList.contains('calc-form') ? path.designer : path.question;
      if (api == path.designer && state.priceCalc) {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }
      (0,_services_postForms__WEBPACK_IMPORTED_MODULE_0__.postData)(api, formData).then(data => {
        console.log(data);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.complite;
      }).catch(error => {
        console.error(error);
        statusImg.setAttribute('src', message.err);
        textMessage.textContent = message.fail;
      }).finally(() => {
        clearInputs(form);
        setTimeout(() => {
          stausMessage.remove();
          form.style.display = 'block';
          form.classList.remove('fadeOutUp');
          form.classList.add('fadeInUp');
          state = {}; //изначальное положение modalState

          document.querySelector('.calc-price').textContent = 'Для расчета нужно выбрать размер картины и материал картины'; // отчищаем поле результата суммы

          document.querySelector('.img-canvas img').src = 'assets/img/calc-1.png'; // возвращаем картинку

          // закрываем модальное окно после отправки формы

          document.querySelectorAll('[data-modal]').forEach(item => {
            if (getComputedStyle(item).display != 'none') item.click();
          });
        }, 4000);
      });
    });
  });
};

// функция добавления изображения в форму

function workWithLoadImg(item) {
  // Валидация загружаемого файла

  function validFileType(file) {
    const fileTypes = ["image/jpeg", "image/jpg", "image/png"];
    for (let i = 0; i < fileTypes.length; i++) {
      if (file.type === fileTypes[i]) {
        return true;
      }
    }
    return false;
  }
  if (validFileType(item.files[0])) {
    let dots;
    const arr = item.files[0].name.split('.');
    arr[0].length > 7 ? dots = '...' : dots = '.';
    const name = `${arr[0].substring(0, 7)}${dots}${arr[1]}`;
    item.previousElementSibling.textContent = name;
    if (item.closest('.calc-form')) {
      const imgMini = document.querySelector('.img-canvas img'),
        width = getComputedStyle(imgMini).width,
        height = getComputedStyle(imgMini).height;
      imgMini.style.width = width;
      imgMini.style.height = height;
      imgMini.style.objectFit = 'contain';
      imgMini.classList.add('animated', 'fadeIn');
      imgMini.setAttribute('src', window.URL.createObjectURL(item.files[0]));
    }
  } else {
    item.value = '';
    item.previousElementSibling.textContent = 'Выбран не верный формат! Пожалуйста, выберете изображение с расширением jpeg, jpg, png';
    item.previousElementSibling.style.color = 'red';
    setTimeout(() => {
      item.previousElementSibling.textContent = 'Файл не выбран. Загрузите или перетащите файл сюда';
      item.previousElementSibling.style.color = '';
    }, 4000);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);


/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const mask = selector => {
  function createMask(event) {
    let matrix = '+7 (___) ___ __ __';
    let i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else if (event.type === 'click') {
      setCursorPosition(2, this);
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  let setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  const inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('click', createMask);
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

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

  // показ модального окна через определенное время

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
        if (document.querySelector('.fixed-gift')) {
          calcMarginRight('.fixed-gift', true);
        }
      }
    }, time);
  }

  // расчет отсупа (скролла) справа

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

  // показ окна при прокрутке до конца

  function showModalByScroll(selector) {
    window.addEventListener('scroll', () => {
      if (!btnPressed && window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }

  // расчет отсупа справа для фиксированных элементов

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

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const pictureSize = () => {
  const blocks = document.querySelectorAll('.sizes-block');
  function showContent(elem) {
    const img = elem.querySelector('img'),
      paragraphs = elem.querySelectorAll('p:not(.sizes-hit)');
    img.src = `${img.src.slice(0, -4)}-1.png`;
    paragraphs.forEach(p => {
      p.style.display = 'none';
    });
  }
  function hideContent(elem) {
    const img = elem.querySelector('img'),
      paragraphs = elem.querySelectorAll('p:not(.sizes-hit)');
    img.src = `${img.src.slice(0, -6)}.png`;
    paragraphs.forEach(p => {
      p.style.display = 'block';
    });
  }
  blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
      showContent(block);
    });
    block.addEventListener('mouseout', () => {
      hideContent(block);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);

  // появление || исчезновение элемента при прокрутке

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1500) {
      upElem.style.opacity = 1;
    } else {
      upElem.style.opacity = 0;
    }
  });

  // scrolling с испоьзованием requestAnimationFrame

  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.15;
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      // получение высоты, хеша, координаты верхней точки элемента по хешу, изначальной точки
      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) {
          start = time;
        }
        let progress = time - start,
          r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);
        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolling);

/***/ }),

/***/ "./src/js/modules/showMoreStyle.js":
/*!*****************************************!*\
  !*** ./src/js/modules/showMoreStyle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_getStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getStyles */ "./src/js/services/getStyles.js");



const showMoreStyle = (trigger, block) => {
  const blockStyles = document.querySelector(block),
    btn = document.querySelector(trigger);
  btn.addEventListener('click', function () {
    (0,_services_getStyles__WEBPACK_IMPORTED_MODULE_0__.getStyles)('http://localhost:3000/styles').then(data => {
      data.forEach(({
        src,
        title,
        link
      }) => {
        const art = document.createElement('div');
        art.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        art.innerHTML = `
                        <div class=styles-block>
						    <img src=${src} alt="style">
						    <h4>${title}</h4>
						    <a href=${link}>Подробнее</a>
					    </div>
                    `;
        blockStyles.append(art);
      });
    }).catch(e => {
      const err = document.createElement('div');
      err.style.textAlign = 'center';
      err.style.color = 'red';
      err.style.marginBottom = '30px';
      err.textContent = `Произошла ошибка: ${e.name}: ${e.message}. Попробуйте повторить запрос позже`;
      blockStyles.append(err);
      setTimeout(() => {
        err.remove();
        this.style.display = 'block';
      }, 4000);
    });
    this.style.display = 'none';
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMoreStyle);

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

/***/ }),

/***/ "./src/js/services/getStyles.js":
/*!**************************************!*\
  !*** ./src/js/services/getStyles.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });


const getStyles = async url => {
  const styles = await fetch(url);
  if (!styles.ok) {
    throw new Error(`Could not fetch: ${url}, status: ${styles.status}`);
  }
  return await styles.json();
};


/***/ }),

/***/ "./src/js/services/getValueForCalc.js":
/*!********************************************!*\
  !*** ./src/js/services/getValueForCalc.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getValue: () => (/* binding */ getValue)
/* harmony export */ });


const getValue = async url => {
  const values = await fetch(url);
  if (!values.ok) {
    throw new Error(`Could not fetch ${url}, stauts: ${value.status}`);
  }
  return await values.json();
};


/***/ }),

/***/ "./src/js/services/postForms.js":
/*!**************************************!*\
  !*** ./src/js/services/postForms.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });


const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    body: data
  });
  if (!response.ok) {
    throw new Error(`Could not fetch: ${url}, status: ${response.status}`);
  }
  return await response.text();
};


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
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyle */ "./src/js/modules/showMoreStyle.js");
/* harmony import */ var _modules_checkEmailInputs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/checkEmailInputs */ "./src/js/modules/checkEmailInputs.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/drop */ "./src/js/modules/drop.js");
















window.addEventListener('DOMContentLoaded', () => {
  let modalState = {};
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 5000, 'gorisontal', '.main-next-btn', '.main-prev-btn');
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 5000, 'vertical');
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])(modalState);
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  (0,_modules_showMoreStyle__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  (0,_modules_checkEmailInputs__WEBPACK_IMPORTED_MODULE_6__["default"])('[name="email"]');
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__["default"])(modalState, '#size', '#material', '#options', '.promocode', '.calc-price');
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_modules_pictureSize__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_10__["default"])('.often-questions .accordion-heading');
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_11__["default"])('.burger', '.burger-menu');
  (0,_modules_scrolling__WEBPACK_IMPORTED_MODULE_12__["default"])('.pageup');
  (0,_modules_drop__WEBPACK_IMPORTED_MODULE_13__["default"])();
});
/******/ })()
;
//# sourceMappingURL=script.js.map