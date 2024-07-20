# "Picture" webpage

RU:
Frontend разработка проекта сайта Picture.
Проект построен на модульной структуре в императивном стиле. Для сборки модулей используется Webpack. В качестве планировщика задач используется gulp.
В проекте используется: animate.css

В этом проекте на JS реализованы:
 - аккордеон
 - "бургер-меню"
 - калькулятор суммы стоимости товара в зависимости от выбора пользователя
 - Drag&Drop загрузка изображения
 - фильтрация элеменов на странице
 - форма отправки даных
 - модальные окна
 - модальное окно с подарком
 - разворот элементов (визуальная демонстрация товара) при наведении курсора
 - плавный скролл по локальным ссылкам и скролл вверх страницы
 - подгрузка дополнительных стилей оформления продукта
 - слайдер

В аккордеоне при выборе пункта - остальны сворачиваются.

"Бургер-меню" появляется при при просмотре сайта на устройствах с шириной экрана < 993. На экранах с шириной > 992 появляется меню с пунктами (пункты подсвечиваются при наведении - реализация на css).
 
Калькулятор суммы стоимости товара полностью зависит от выбора пользователя. Значение стоимости выбранного пункта запрашивается у файла dbCalc.json спомощью "GET" запроса (реализовано с помощью json-server).
Также при выборе размера происходит масштабирование выбранного изображения. Все зачения выбранные пользователем добавляются в объект, который добаляется в форму при отправке данных.
При вводе промокода стоимость товара уменьшается.

В модальом окне и двух блоках на странице реализована Drag&Drop загрузка изображения и загрузка изображения при событии 'click' на соответствующий триггер. 
Реализована валидация изображения - возможность загрузить image с раширением png, jpeg, jpg.

Данные с формы отправляются посредством AJAX (fetch) без перезагрузки страницы. После отправки идет соответствующее оповещение о статусе отправки "POST" запроса, отчиска формы и заполненных полей.
Разные формы отправляют данные на разные url адреса. В формах реализована валидация ввода текста, email адреса, реализована маска ввода номера.

Фильтрация элементов в блоке на странице происходит при событии 'click' на соответствующий триггер.

Появление модального окна реализовано 2 способами: после 60 сек и при клике на соответствующие кнопки. Разные тиггеры вызывают разные модальные окна.
Также реализовано модальное окно с подарком, которое открывается при событии 'click' на соответствующий триггер или при scroll страницы до конца. При этом блок подарка со странцы удаляется.

Подгрузка дополнительных стилей работ дизайнера осуществляется из файла db.json спомощью "GET" запроса (реализовано с помощью json-server).

Релизовано два слайдера с автоматическим перелистыванием (при наведении курсора на блок слайдера (пр событии "mouseenter") автоматическое перелистывание отменяется, возобновляется после события "mouseleave").

Убран баг "прыжка" страницы и элементов с position: fixed при открытии и закрытии модальных окон с помощью расчета scroll.

EN:
Frontend development of the Picture website project.
The project is built on a modular structure in an imperative style. Webpack is used to build modules. Gulp is used as a task scheduler.
The project uses: animate.css

This JS project implements:
 - accordion
 - "burger menu"
 - calculator for the amount of cost of goods depending on the user’s choice
 - Drag&Drop image loading
 - filtering elements on the page
 - data submission form
 - modal windows
 - modal window with a gift
 - rotation of elements (visual demonstration of the product) when hovering the cursor
 - smooth scrolling on local links and scrolling to the top of the page
 - loading additional product design styles
 - slider

In the accordion, when you select an item, the rest are collapsed.

The "Burger Menu" appears when viewing the site on devices with a screen width < 993. On screens with a width > 992, a menu with items appears (items are highlighted when hovered - css implementation).

The product cost amount calculator depends entirely on the user’s choice. The cost value of the selected item is requested from the dbCalc.json file using a "GET" request (implemented using json-server).
Also, when selecting a size, the selected image is scaled. All values ​​selected by the user are added to an object, which is added to the form when submitting data.
When you enter a promotional code, the cost of the product decreases.

In the modal window and two blocks on the page, Drag&Drop loading of the image and loading of the image upon the 'click' event on the corresponding trigger are implemented.
Image validation has been implemented - the ability to upload an image with the extension png, jpeg, jpg.

Data from the form is sent via AJAX (fetch) without reloading the page. After sending, there is a corresponding notification about the status of sending the "POST" request, deleting the form and filled fields.
Different forms send data to different URLs. The forms implement validation of text input, email addresses, and a number input mask.

Filtering of elements in a block on the page occurs when the 'click' event occurs on the corresponding trigger.

The appearance of the modal window is implemented in 2 ways: after 60 seconds and when you click on the corresponding buttons. Different tiggers call different modal windows.
A modal window with a gift has also been implemented, which opens when the 'click' event is applied to the corresponding trigger or when the page scrolls to the end. In this case, the gift block is removed from the page.

Additional styles of the designer's work are loaded from the db.json file using a "GET" request (implemented using json-server).

Two sliders with automatic flipping have been implemented (when you hover the cursor over the slider block (at the "mouseenter" event), automatic flipping is canceled and resumed after the "mouseleave" event).

The bug of page and elements with position: fixed "jumping" when opening and closing modal windows using the scroll calculation has been removed.
