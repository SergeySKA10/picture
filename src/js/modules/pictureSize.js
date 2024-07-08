'use strict';

const pictureSize = () => {
    const blocks = document.querySelectorAll('.sizes-block');

    function showContent(elem) {
        const img = elem.querySelector('img'),
              paragraphs = elem.querySelectorAll('p:not(.sizes-hit)');

        img.src = `${img.src.slice(0, -4)}-1.png`;

        paragraphs.forEach(p => {
            p.style.display = 'none';
        });
    }

    function hideContent(elem) {
        const img = elem.querySelector('img'),
              paragraphs = elem.querySelectorAll('p:not(.sizes-hit)');

        img.src = `${img.src.slice(0, -6)}.png`;

        paragraphs.forEach(p => {
            p.style.display = 'block';
        });
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showContent(block);
        });

        block.addEventListener('mouseout', () => {
            hideContent(block);
        });
    });
}

export default pictureSize;