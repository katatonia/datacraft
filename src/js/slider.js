let currentSlide = 0;

const showSlide = (index) => {
    const slides = document.querySelectorAll('.slider__slide');
    const prevButton = document.querySelector('.slider__button_prev');
    const nextButton = document.querySelector('.slider__button_next');

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slider__slides').style.transform = `translateX(${offset}%)`;
};

// Функция для переключения слайдов
const moveSlide = (step) => {
    showSlide(currentSlide + step);
};

// Показать первый слайд
showSlide(currentSlide);
