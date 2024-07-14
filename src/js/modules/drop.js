'use strict';

import { workWithLoadImg } from "./forms";

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
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files; // добавляем в инпут файл из события 
            workWithLoadImg(input);
        });
    });
}

export default drop;