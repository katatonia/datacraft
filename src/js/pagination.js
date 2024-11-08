function setupPagination(pageClass, prevButtonClass, nextButtonClass, activeClass, disableClass) {
    document.addEventListener("DOMContentLoaded", function() {
        const pages = document.querySelectorAll(pageClass); // Получаем все страницы
        const prevButton = document.querySelector(prevButtonClass);
        const nextButton = document.querySelector(nextButtonClass);
        let currentPageIndex = 0; // Индекс текущей страницы

        // Функция для отображения страницы по индексу
        function showPage(index) {
            // Убираем класс 'active' у всех страниц и показываем только нужную
            pages.forEach((page, i) => {
                page.classList.toggle(activeClass, i === index);
            });

            // Проверяем, нужно ли отключить кнопки "Назад" или "Вперед"
            prevButton.classList.toggle(disableClass, index === 0); // Отключаем "Назад" на первой странице
            nextButton.classList.toggle(disableClass, index === pages.length - 1); // Отключаем "Вперед" на последней странице
        }

        // Обработчик для кнопки "Назад"
        prevButton.addEventListener('click', function() {
            if (currentPageIndex > 0) {
                currentPageIndex--;
                showPage(currentPageIndex);
            }
        });

        // Обработчик для кнопки "Вперед"
        nextButton.addEventListener('click', function() {
            if (currentPageIndex < pages.length - 1) {
                currentPageIndex++;
                showPage(currentPageIndex);
            }
        });

        // Показать первую страницу при загрузке
        showPage(currentPageIndex);
    });
}

// Вызов функции с нужными классами
setupPagination('.catalog__page', '.pagination__btn_prev', '.pagination__btn_next',  'catalog__page_active',     // Класс для активной страницы
'pagination__btn_disable');
setupPagination('.reviews__page', '.pagination__btn_prev', '.pagination__btn_next',  'reviews__page_active',     // Класс для активной страницы
'pagination__btn_disable');
setupPagination('.favorites__page', '.pagination__btn_prev', '.pagination__btn_next',  'favorites__page_active',     // Класс для активной страницы
'pagination__btn_disable');
