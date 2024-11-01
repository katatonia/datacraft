document.querySelectorAll('.slider').forEach((slider) => {
    const slides = slider.querySelector('.slider__slides');
    const slideItems = slider.querySelectorAll('.slider__slide');
    const lineBtns = slider.querySelectorAll('.slider__line'); // Все кнопки lineBtn
    let currentSlide = 0;

    function updateSlide(position) {
        // Обновляем видимость слайда
        slideItems.forEach((slide, index) => {
            slide.classList.toggle('active', index === position);
        });

        // Смещаем блок слайдов
        slides.style.transform = `translateX(-${position * 100}%)`;

        // Обновляем состояние кнопок lineBtn
        lineBtns.forEach((btn, index) => {
            btn.classList.toggle('slider__line_active', index === position);
        });

        // Обновляем состояние кнопок навигации
        const nextBtn = slider.querySelector('.slider__btn_next');
        const prevBtn = slider.querySelector('.slider__btn_prev');
        nextBtn.disabled = position === slideItems.length - 1;
        prevBtn.disabled = position === 0;
    }

    // Инициализация начального состояния слайдера
    updateSlide(currentSlide);

    // Обработчики для кнопок
    document.querySelectorAll('.slider__btn_next').forEach((nextBtn) => {
        nextBtn.addEventListener('click', () => {
            if (nextBtn.closest('.slider') === slider && currentSlide < slideItems.length - 1) {
                currentSlide++;
                updateSlide(currentSlide);
            }
        });
    });

    document.querySelectorAll('.slider__btn_prev').forEach((prevBtn) => {
        prevBtn.addEventListener('click', () => {
            if (prevBtn.closest('.slider') === slider && currentSlide > 0) {
                currentSlide--;
                updateSlide(currentSlide);
            }
        });
    });

    // Добавляем поддержку свайпов для мобильных устройств
    let startX = 0;

    slides.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slides.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const swipeThreshold = 50; // Порог для определения свайпа

        // Свайп влево — показываем следующий слайд
        if (startX - endX > swipeThreshold && currentSlide < slideItems.length - 1) {
            currentSlide++;
            updateSlide(currentSlide);
        }
        // Свайп вправо — показываем предыдущий слайд
        else if (endX - startX > swipeThreshold && currentSlide > 0) {
            currentSlide--;
            updateSlide(currentSlide);
        }
    });
});
