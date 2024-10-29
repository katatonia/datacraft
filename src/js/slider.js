// Инициализируем слайдеры для всех элементов с классом `.slider`
document.querySelectorAll('.slider').forEach((sliderElement) => {
    let currentSlide = 0;
    let startX = 0;
    let endX = 0;

    const slides = sliderElement.querySelectorAll('.slider__slide');
    const slidesContainer = sliderElement.querySelector('.slider__slides');

    const showSlide = (index) => {
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
        slidesContainer.style.transform = `translateX(${offset}%)`;
    };

    const moveSlide = (step) => {
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
    slidesContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slidesContainer.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    slidesContainer.addEventListener('touchend', () => {
        const swipeDistance = endX - startX;

        if (swipeDistance > 50) {
            moveSlide(-1); // Свайп вправо (предыдущий слайд)
        } else if (swipeDistance < -50) {
            moveSlide(1); // Свайп влево (следующий слайд)
        }
    });
});

