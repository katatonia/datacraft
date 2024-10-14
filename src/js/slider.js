let currentSlide = 0;

const showSlide = (index) => {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    // Скрыть кнопку "назад" на первом слайде
    prevButton.style.display = currentSlide === 0 ? 'none' : 'block';
    // Скрыть кнопку "вперед", если это не первый слайд
    nextButton.style.display = currentSlide > 0 ? 'none' : 'block';
};

// Функция для переключения слайдов
const moveSlide = (step) => {
    showSlide(currentSlide + step);
};

// Показать первый слайд
showSlide(currentSlide);

