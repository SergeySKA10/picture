'use strict';

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
}

export default burger;