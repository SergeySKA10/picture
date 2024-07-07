'use strict';

import { getStyles } from "../services/getStyles";

const showMoreStyle = (trigger, block) => {
    const blockStyles = document.querySelector(block),
          btn = document.querySelector(trigger);

    btn.addEventListener('click', function() {
        getStyles('http://localhost:3000/styles')
            .then(data => {
                data.forEach(({src, title, link}) => {
                    const art = document.createElement('div');

                    art.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

                    art.innerHTML = `
                        <div class=styles-block>
						    <img src=${src} alt="style">
						    <h4>${title}</h4>
						    <a href=${link}>Подробнее</a>
					    </div>
                    `;

                    blockStyles.append(art);
                });
            })
            .catch((e) => {
                const err = document.createElement('div');

                err.style.textAlign = 'center';
                err.style.color = 'red';
                err.style.marginBottom = '30px';
                err.textContent = `Произошла ошибка: ${e.name}: ${e.message}. Попробуйте повторить запрос позже`;

                blockStyles.append(err);

                setTimeout(() => {
                    err.remove();
                    this.style.display = 'block';
                }, 4000);
            });

        this.style.display = 'none';
    });


};

export default showMoreStyle;