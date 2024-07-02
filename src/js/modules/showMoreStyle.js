'use strict';

const showMoreStyle = (trigger, styles) => {
    const art = document.querySelectorAll(styles),
          btn = document.querySelector(trigger);

    art.forEach(item => {
        item.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        art.forEach(item => {
            item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });

        btn.remove();
    });
};

export default showMoreStyle;