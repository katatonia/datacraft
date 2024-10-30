document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll('.catalog__page'); // Получаем все страницы
    const prevButton = document.querySelector('.pagination__btn_prev');
    const nextButton = document.querySelector('.pagination__btn_next');
    let currentPageIndex = 0; // Индекс текущей страницы

    // Функция для отображения страницы по индексу
    function showPage(index) {
        // Убираем класс 'active' у всех страниц и показываем только нужную
        pages.forEach((page, i) => page.classList.toggle('catalog__page_active', i === index));

        // Проверяем, нужно ли отключить кнопки "Назад" или "Вперед"
        prevButton.classList.toggle('pagination__btn_disable', index === 0); // Отключаем "Назад" на первой странице
        nextButton.classList.toggle('pagination__btn_disable', index === pages.length - 1); // Отключаем "Вперед" на последней странице
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
