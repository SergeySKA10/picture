'use strict';

const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    // появление || исчезновение элемента при прокрутке

        window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1500) {
            upElem.style.opacity = 1;
        } else {
            upElem.style.opacity = 0;
        }
    });

    // scrolling с испоьзованием requestAnimationFrame

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.15;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // получение высоты, хеша, координаты верхней точки элемента по хешу, изначальной точки
            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });

};

export default scrolling;