const burgerButton = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const projectsList = document.querySelector('.projects__list');
const body = document.body;

const toggleMenu = () => {
    burgerButton.addEventListener('click', () => {
        nav.classList.toggle('header__nav_active');
        burgerButton.classList.toggle('header__burger_active');
        body.classList.toggle('lock');
        projectsList.classList.toggle('projects__list_hidden')
    });
}

toggleMenu();
