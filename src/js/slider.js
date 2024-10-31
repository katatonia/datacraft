document.querySelectorAll('.slider').forEach((slider) => {
    const slides = slider.querySelector('.slider__slides');
    const slideItems = slider.querySelectorAll('.slider__slide');
    let currentSlide = 0;

    function updateSlide(position) {
        // Обновляем видимость слайда
        slideItems.forEach((slide, index) => {
            slide.classList.toggle('active', index === position);
        });
        // Смещаем блок слайдов
        slides.style.transform = `translateX(-${position * 100}%)`;

        // Обновляем состояние кнопок в зависимости от текущего слайда
        const nextBtn = slider.querySelector('.slider__button_next');
        const prevBtn = slider.querySelector('.slider__button_prev');
        nextBtn.disabled = position === slideItems.length - 1;
        prevBtn.disabled = position === 0;
    }

    // Инициализация начального состояния слайдера
    updateSlide(currentSlide);

    // Обработчики для кнопок
    document.querySelectorAll('.slider__button_next').forEach((nextBtn) => {
        nextBtn.addEventListener('click', () => {
            if (nextBtn.closest('.slider') === slider && currentSlide < slideItems.length - 1) {
                currentSlide++;
                updateSlide(currentSlide);
            }
        });
    });

    document.querySelectorAll('.slider__button_prev').forEach((prevBtn) => {
        prevBtn.addEventListener('click', () => {
            if (prevBtn.closest('.slider') === slider && currentSlide > 0) {
                currentSlide--;
                updateSlide(currentSlide);
            }
        });
    });

    // Добавляем поддержку свайпов для мобильных устройств
    let startX = 0;
    let endX = 0;

    slides.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slides.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    slides.addEventListener('touchend', () => {
        // Если свайп больше 50 пикселей, то проверяем направление
        if (startX > endX + 20 && currentSlide < slideItems.length - 1) {
            currentSlide++; // Свайп влево — показываем следующий слайд
        } else if (startX < endX - 20 && currentSlide > 0) {
            currentSlide--; // Свайп вправо — показываем предыдущий слайд
        }
        updateSlide(currentSlide);
    });
});
