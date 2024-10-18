const burgerButton = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const body = document.body;

const toggleMenu = () => {
    burgerButton.addEventListener('click', () => {
        nav.classList.toggle('header__nav_active');
        burgerButton.classList.toggle('header__burger_active');
        body.classList.toggle('lock');
    });
}

toggleMenu();


