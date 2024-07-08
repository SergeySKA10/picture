'use strict';

import modal from "./modules/modal";
import slider from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyle from "./modules/showMoreStyle";
import checkEmailInputs from "./modules/checkEmailInputs";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";


window.addEventListener('DOMContentLoaded', () => {

    modal();
    slider('.feedback-slider-item', 5000, 'gorisontal', '.main-next-btn', '.main-prev-btn');
    slider('.main-slider-item', 5000, 'vertical');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyle('.button-styles', '#styles .row');
    checkEmailInputs('[name="email"]');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize();
    accordion('.often-questions .accordion-heading');
    burger('.burger', '.burger-menu');
});