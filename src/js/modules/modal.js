'use strict';
const modal = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              scroll = calcScroll();

        trigger.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                if (triggerSelector == '.popup_calc_button') {
                    const inputs = document.querySelectorAll('.popup_calc input');
                    let countInputValue = 0;
                    for (let i = 0; i < inputs.length; i++) {
                        if (inputs[i].value) {
                            countInputValue++;
                            inputs[i].style.border = '';
                        } else inputs[i].style.border = '1px solid red';
                    }
                    if (countInputValue === inputs.length)  {
                            inputs.forEach(item => item.style.border = '');
                            closeModal();
                            openModal(modalSelector, scroll);
                    }     

                } else if (triggerSelector == '.popup_calc_profile_button') {
                    const inputs = document.querySelectorAll('.checkbox');
                    let countInputValue = 0;
                    for (let i = 0; i < inputs.length; i++) {
                        if (inputs[i].checked) {
                            countInputValue++;
                            inputs[i].parentNode.style.border = '';
                        } else inputs[i].parentNode.style.border = '1px solid red';
                    }
                    if (countInputValue > 0)  {
                        inputs.forEach(item => {
                            item.parentNode.style.border = '';
                            item.checked = false;
                        });
                        closeModal();
                        openModal(modalSelector, scroll);
                    }
                } else {
                    closeModal();
                    openModal(modalSelector, scroll);
                }
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeModal(scroll);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                closeModal(scroll);
            }
        });

        close.addEventListener('click', () => {
            closeModal(scroll);
        });  
    }

    function closeModal(scroll) {
        const windows = document.querySelectorAll('[data-modal]');
        
        windows.forEach(item => {
            item.style.display = 'none';
        });
        document.body.style.overflow = '';
    
        if (scroll) {
            document.body.style.marginRight = '0px';
        }
    }
    
    function openModal(selector, scroll) {
        const modal = document.querySelector(selector);
        modal.style.display = 'block';
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

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

    showModalByTime('.popup-consultation', 6000, scroll);
    
}

export default modal;