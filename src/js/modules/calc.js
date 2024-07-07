'use strict';

import { getValue } from "../services/getValueForCalc";

const calc = (size, material, option, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionBlock = document.querySelector(option),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0,
        sizePrice = '',
        materialPrice = '',
        optionPrice = 0;
    
    const calcFunc = () => {
        sum = Math.round(sizePrice * materialPrice + optionPrice);

        if (sizePrice === '' || materialPrice === '') {
            resultBlock.textContent = 'Пожалуйста выберете размер и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    }

    sizeBlock.addEventListener('change', async () => {
        const value = await getValue('http://localhost:3000/size');
        sizePrice = value[0][sizeBlock.value] ? value[0][sizeBlock.value] : '';
        console.log(sizePrice);
        calcFunc();
    });

    materialBlock.addEventListener('change', async () => {
        const value = await getValue('http://localhost:3000/material');
        materialPrice = value[0][materialBlock.value] ? value[0][materialBlock.value] : '';
        console.log(materialPrice);
        calcFunc();
    });
    
    optionBlock.addEventListener('change', async () => {
        const value = await getValue('http://localhost:3000/options');
        optionPrice = value[0][optionBlock.value] ? value[0][optionBlock.value]: 0;
        console.log(optionPrice);
        calcFunc();
    });

    promocodeBlock.addEventListener('input', calcFunc);
}

export default calc;