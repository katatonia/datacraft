const likeBtns = document.querySelectorAll(".slider__like");

const toggleLike = () => {
    likeBtns.forEach((likeBtn) => {
        likeBtn.addEventListener('click', () => {
          likeBtn.classList.toggle('slider__like_active');
        })
    })
}

toggleLike();
