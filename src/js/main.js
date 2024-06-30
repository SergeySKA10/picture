'use strict';

import modal from "./modules/modal";
import slider from "./modules/slider";
import forms from "./modules/forms";


window.addEventListener('DOMContentLoaded', () => {

    modal();
    slider('.feedback-slider-item', 5000, 'gorisontal', '.main-next-btn', '.main-prev-btn');
    slider('.main-slider-item', 5000, 'vertical');
    forms();
});