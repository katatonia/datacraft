document.querySelectorAll(".slider").forEach((slider) => {
	const slides = slider.querySelector(".slider__slides");
	const slideItems = slider.querySelectorAll(".slider__slide");
	const lineBtns = slider.querySelectorAll(".slider__line"); // Все кнопки lineBtn
	let currentSlide = 0;

	function updateSlide(position) {
		// Обновляем видимость слайда
		slideItems.forEach((slide, index) => {
			slide.classList.toggle("active", index === position);
		});

		// Смещаем блок слайдов
		slides.style.transform = `translateX(-${position * 100}%)`;

		// Обновляем состояние кнопок lineBtn
		lineBtns.forEach((btn, index) => {
			btn.classList.toggle("slider__line_active", index === position);
		});

		// Обновляем состояние кнопок навигации
		const nextBtn = slider.querySelector(".slider__btn_next");
		const prevBtn = slider.querySelector(".slider__btn_prev");
		nextBtn.disabled = position === slideItems.length - 1;
		prevBtn.disabled = position === 0;
	}

	// Инициализация начального состояния слайдера
	updateSlide(currentSlide);

	// Обработчики для кнопок навигации
	const nextBtn = slider.querySelector(".slider__btn_next");
	const prevBtn = slider.querySelector(".slider__btn_prev");

	nextBtn.addEventListener("click", () => {
		if (currentSlide < slideItems.length - 1) {
			currentSlide++;
			updateSlide(currentSlide);
		}
	});

	prevBtn.addEventListener("click", () => {
		if (currentSlide > 0) {
			currentSlide--;
			updateSlide(currentSlide);
		}
	});

	// Добавляем поддержку свайпов для мобильных устройств
	let startX = 0;

	// Переносим события на весь слайдер
	slider.addEventListener("touchstart", (e) => {
		startX = e.touches[0].clientX;
	});

	slider.addEventListener("touchend", (e) => {
		const endX = e.changedTouches[0].clientX;
		const swipeThreshold = 50;

		if (startX - endX > swipeThreshold && currentSlide < slideItems.length - 1) {
			currentSlide++;
			updateSlide(currentSlide);
		} else if (endX - startX > swipeThreshold && currentSlide > 0) {
			currentSlide--;
			updateSlide(currentSlide);
		}
	});
});
