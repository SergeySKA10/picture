'use strict';

const slider = (slides, time, dir, next, prev) => {
    const slide = document.querySelectorAll(slides);

    let paused;

    let slideIndex = 1;

    function showSlides(n) {
        if (n > slide.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slide.length;
        }

        slide.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        slide[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            slide[slideIndex - 1].classList.remove('slideInRight');
            slide[slideIndex - 1].classList.add('slideInLeft');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            slide[slideIndex - 1].classList.remove('slideInLeft');
            slide[slideIndex - 1].classList.add('slideInRight');
        })
    } catch(e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
    }

    function activateAnimation(t) {
        if (dir === 'vertical') {
            paused = setInterval(() => {
                plusSlides(1);
                slide[slideIndex - 1].classList.add('slideInDown');
            }, t)
        } else {
            paused = setInterval(() => {
                plusSlides(1);
                slide[slideIndex - 1].classList.remove('slideInLeft');
                slide[slideIndex - 1].classList.add('slideInRight');
            }, t);
        }
    }

    activateAnimation(time);

    slide[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    slide[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation(time);
    });
}

export default slider;