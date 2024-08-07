'use strict';

const checkTextInputs = (selector) => {
    const textInputs = document.querySelectorAll(selector);

    textInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key.match(/[^а-яё 0-9 . !]/ig)) {
                e.preventDefault();
            }
        });

        input.addEventListener('input', () => {
            if (input.value.match(/[^а-яё 0-9 . !]/ig)) {
                input.value = '';
            }
        });
    })
}

export default checkTextInputs;