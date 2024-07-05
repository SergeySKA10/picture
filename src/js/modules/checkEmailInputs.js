'use strict';

const checkEmailInputs = (selector) => {
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
        })
    })
}

export default checkEmailInputs;