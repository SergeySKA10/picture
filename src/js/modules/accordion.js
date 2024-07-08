'use strict';

const accordion = (trigger) => {
    const btns = document.querySelectorAll(trigger);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
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
                this.nextElementSibling.style.maxHeight =  this.nextElementSibling.scrollHeight + 80 +'px';
            }
        });
    });
}

export default accordion;