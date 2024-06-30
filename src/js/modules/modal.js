'use strict';
function closeModal(scroll) {
    const windows = document.querySelectorAll('[data-modal]');
    
    windows.forEach(item => {
        item.style.display = 'none';
        item.classList.add('animated', 'fadeIn');
    });
    document.body.style.overflow = '';

    if (scroll) {
        document.body.style.marginRight = '0px';
    }
}

const modal = () => {
    const scroll = calcScroll();
    let btnPressed,
        presentRemove;
    
    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if (destroy) {
                    elem.remove();
                    presentRemove = true;
                } else {
                    if (!presentRemove) calcMarginRight('.fixed-gift', true);
                }

                closeModal();
                openModal(modalSelector, scroll);
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(scroll);
                if (!presentRemove) calcMarginRight('.fixed-gift');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                closeModal(scroll);
                if (!presentRemove) calcMarginRight('.fixed-gift');
            }
        });

        close.addEventListener('click', () => {
            closeModal(scroll);
            if (!presentRemove) calcMarginRight('.fixed-gift');
        });  
    }


    
    function openModal(selector, scroll, display = 'block') {
        const modal = document.querySelector(selector);
        modal.style.display = display;
        document.body.style.overflow = 'hidden';
    
        if (scroll) {
            document.body.style.marginRight = `${scroll}px`;
        }
    }
    
    function showModalByTime(selector, time, scroll) {
        setTimeout(() => {
            let display;
    
            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display != 'none') {
                    display = 'block';
                }
            });
            
            if (!display) {
                openModal(selector, scroll);
                calcMarginRight('.fixed-gift', true);
            } 
        }, time);
    }
    
    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        
        
        document.body.append(div);
    
        let scrollWidth = div.offsetWidth - div.clientWidth;
        
        div.remove();
    
        return scrollWidth;
    }

    function showModalByScroll(selector) {
        window.addEventListener('scroll', () => {
            if (!btnPressed && 
                window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                
                document.querySelector(selector).click();
            }
        });
    }

    function calcMarginRight(selector, bool = false) {
        const elem = document.querySelector(selector),
              marginRight = +getComputedStyle(elem).right.replace(/px/, '');

        if (bool) {
            elem.style.right = `${marginRight + scroll}px`;
        } else {
            elem.style.right = `${marginRight - scroll}px`;
        }
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

    showModalByTime('.popup-consultation', 60000, scroll);
    showModalByScroll('.fixed-gift');
    
}

export default modal;