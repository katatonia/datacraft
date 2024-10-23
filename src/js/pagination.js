// Текущая страница
let currentPage = 1;

// Динамическое количество страниц, получаемое, например, с сервера
let totalPages;

// Функция для обновления количества страниц (например, с сервера)
function setTotalPages(pages) {
	totalPages = pages;
	updateButtons();
}

// Кнопки
const prevBtn = document.querySelector('.catalog__pagination-btn_prev');
const nextBtn = document.querySelector('.catalog__pagination-btn_next');

// Функция для обновления состояния кнопок
function updateButtons() {
    if (currentPage === 1) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }

    if (currentPage === totalPages) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
}

// Обработчик для кнопки Next
nextBtn.addEventListener("click", function () {
	if (currentPage < totalPages) {
		currentPage++;
		updateButtons();
	}
});

// Обработчик для кнопки Prev
prevBtn.addEventListener("click", function () {
	if (currentPage > 1) {
		currentPage--;
		updateButtons();
	}
});

// Инициализация: подождем данные с сервера и обновим количество страниц
// Пример динамической установки количества страниц:
setTimeout(() => {
	// Допустим, мы получили данные с сервера и узнали, что страниц 7
	setTotalPages(7);
}, 1000); // Эмулируем задержку получения данных

