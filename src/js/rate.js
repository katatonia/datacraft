const ratings = document.querySelectorAll(".reviews__rating");

if (ratings.length > 0) {
	initRatings();
}

//  Основная функция
function initRatings() {
	let ratingActive, ratingValue;

	// Проходим по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}

	// Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);
		setratingActiveWidth();
	}

	// Инициализируем переменные
	function initRatingVars(rating) {
		ratingActive = rating.querySelector(".reviews__rating-active");
		ratingValue = rating.querySelector(".reviews__rating-value");
	}

	// Изменяем ширину активных звёзд
	function setratingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
}
