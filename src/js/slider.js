document.querySelectorAll('.slider').forEach((sliderElement) => {
    let currentSlide = 0;
    let startX = 0;
    let endX = 0;

    const slides = sliderElement.querySelectorAll('.slider__slide');
    const slidesContainer = sliderElement.querySelector('.slider__slides');

    const showSlide = (index) => {
        currentSlide = Math.min(Math.max(index, 0), slides.length - 1);
        const offset = -currentSlide * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
    };

    const moveSlide = (step) => {
        showSlide(currentSlide + step);
    };

    showSlide(currentSlide);

    slidesContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        endX = startX;  // сброс endX для избежания залипания
    });

    slidesContainer.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    slidesContainer.addEventListener('touchend', () => {
        const swipeDistance = endX - startX;

        if (swipeDistance > 50) {
            moveSlide(-1);
        } else if (swipeDistance < -50) {
            moveSlide(1);
        }
        startX = endX = 0; // Сброс значений после свайпа
    });
});
