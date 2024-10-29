let currentSlide = 0;
let startX = 0;
let endX = 0;

const showSlide = (index) => {
    const slides = document.querySelectorAll('.slider__slide');
    const totalSlides = slides.length;

    // Обновляем текущий слайд, проверяя границы
    if (index >= totalSlides) {
        currentSlide = totalSlides - 1; // Остаемся на последнем слайде
    } else if (index < 0) {
        currentSlide = 0; // Остаемся на первом слайде
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slider__slides').style.transform = `translateX(${offset}%)`;
};

// Функция для переключения слайдов с ограничениями
const moveSlide = (step) => {
    const slides = document.querySelectorAll('.slider__slide');
    const newSlideIndex = currentSlide + step;

    if (currentSlide === 0 && step > 0) {
        // На первом слайде можно листать только вперед
        showSlide(newSlideIndex);
    } else if (currentSlide === slides.length - 1 && step < 0) {
        // На последнем слайде можно листать только назад
        showSlide(newSlideIndex);
    }
};

// Показать первый слайд
showSlide(currentSlide);

// Обработчики событий для свайпа
const slider = document.querySelector('.slider__slides');

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
    const swipeDistance = endX - startX;

    if (swipeDistance > 50) {
        moveSlide(-1); // Свайп вправо (предыдущий слайд)
    } else if (swipeDistance < -50) {
        moveSlide(1); // Свайп влево (следующий слайд)
    }
});
