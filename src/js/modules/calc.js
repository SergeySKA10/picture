'use strict';

import { getValue } from "../services/getValueForCalc";

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
    
    const calcFunc = (value) => {
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
    }

    // изменение опций + добавление параметров в modalState
    
    sizeBlock.addEventListener('change', async () => {
        const value = await getValue('http://localhost:3000/size');
        sizePrice = value[0][sizeBlock.value] ? value[0][sizeBlock.value] : '';
        calcFunc(sizeBlock.value);
        state.size = sizeBlock.value;
    });

    materialBlock.addEventListener('change', async () => {
        const value = await getValue('http://localhost:3000/material');
        materialPrice = value[0][materialBlock.value] ? value[0][materialBlock.value] : '';
        calcFunc();
        state.material = materialBlock.value;
    });
    
    optionBlock.addEventListener('change', async () => {
        const value = await getValue('http://localhost:3000/options');
        optionPrice = value[0][optionBlock.value] ? value[0][optionBlock.value]: 0;
        calcFunc();
        state.option = optionBlock.value;
    });

    promocodeBlock.addEventListener('input', calcFunc);

    
}

export default calc;