'use strict';

const forms = () => {
    const forms = document.querySelectorAll('form'),
          upload = document.querySelectorAll('[name = "upload"]'),
          path = {
            designer: 'assets/server.php',
            question: 'assets/question.php'
          },
          message = {
            loading: 'Загрузка',
            fail: 'Произошла ошибка',
            complite: 'Спасибо! Скоро с Вами свяжется наш дизайнер',
            spinner: 'assets/img/spinner.gif',
            ok: 'assets/img/ok.png',
            err: 'assets/img/fail.png'
          };
    
    const postData = async (url, data) => {
        const response = await fetch(url, {
            method: "POST",
            body: data
        });

        if (!response.ok) {
            throw new Error(`Could not fetch: ${url}, status: ${response.status}`);
        }

        return await response.text();
    }

    const clearInputs = (form) => {
        form.reset();

        upload.forEach(item => {
            item.previousElementSibling.textContent = `Файл не выбран`;
        })
    }

    const fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];

    function validFileType(file) {
        for (let i = 0; i < fileTypes.length; i++) {
            if (file.type === fileTypes[i]) {
                return true;
            }
        }

        return false;
    }

    upload.forEach(item => {
        item.addEventListener('input', () => {
           
            if (validFileType(item.files[0])) {
                let dots;
                const arr = item.files[0].name.split('.');
                
                arr[0].length > 7 ? dots = '...' : dots = '.';

                const name = `${arr[0].substring(0, 7)}${dots}${arr[1]}`;

                item.previousElementSibling.textContent = name;
                
            } else {
                item.value = '';
                console.log(item.files);
            }
        });
    })
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let stausMessage = document.createElement('div');
            stausMessage.classList.add('status');
            form.parentNode.append(stausMessage);

            form.classList.add('animated', 'fadeOutUp');

            setTimeout(() => {
                form.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');

            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            stausMessage.append(statusImg);

            let textMessage = document.createElement('div');

            textMessage.textContent = message.loading;
            stausMessage.append(textMessage);

            const formData = new FormData(form);

            let api = form.closest('.popup-design') || form.classList.contains('calc-form') ? path.designer : path.question;

            console.log(api);

            postData(api, formData)
                .then(data => {
                    console.log(data);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.complite;
                })
                .catch(error => {
                    console.error(error);
                    statusImg.setAttribute('src', message.err);
                    textMessage.textContent = message.fail;
                })
                .finally(() => {
                    clearInputs(form);
                    setTimeout(() => {
                        stausMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp');

                        document.querySelectorAll('[data-modal]').forEach(item => {
                            if (getComputedStyle(item).display != 'none') item.click();
                        })
                    }, 4000);
                });
        });

            
    });
}

export default forms;