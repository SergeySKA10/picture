'use strict';

const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          noPortfolio = document.querySelector('.portfolio-no');

    wrapper.style.justifyContent = 'space-around';

    const typeFilter = (markType) => {
        markAll.forEach(block => {
            block.style.display = 'none';
            block.classList.remove('animated', 'fadeIn');
        });

        noPortfolio.style.display = 'none';
        noPortfolio.classList.remove('animated', 'fadeIn');

        if(markType) {
            markType.forEach(block => {
                block.style.display = 'block';
                block.classList.add('animated', 'fadeIn');
            });
        } else {
            noPortfolio.style.display = 'block';
            noPortfolio.classList.add('animated', 'fadeIn');
        }
    };
    
    
    const clickBtn = (btnSelector, contentSelector) => {
        const btn = document.querySelector(btnSelector);
              

        btn.addEventListener('click', () => {
            if (contentSelector) {
                typeFilter(document.querySelectorAll(contentSelector));
            } else {
                typeFilter();
            }
            
        });
    }

    clickBtn('.portfolio-menu .all', '.portfolio-wrapper .all');
    clickBtn('.portfolio-menu .lovers', '.portfolio-wrapper .lovers');
    clickBtn('.portfolio-menu .chef', '.portfolio-wrapper .chef');
    clickBtn('.portfolio-menu .girl', '.portfolio-wrapper .girl');
    clickBtn('.portfolio-menu .guy', '.portfolio-wrapper .guy');
    clickBtn('.portfolio-menu .grandmother');
    clickBtn('.portfolio-menu .granddad');

    menu.addEventListener('click', (e) => {
        if (e.target && e.target.tagName === 'LI') {
            items.forEach(item => {
                item.classList.remove('active');
            });

            e.target.classList.add('active');
        }
    });

}

export default filter;