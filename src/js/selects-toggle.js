const selects = document.querySelector('.catalog__selects');
const selectsTitle = document.querySelector('.catalog__selects-title');

// Функция открытия и закрытия блока селектов
const toggleSelects = () => {
    selectsTitle.addEventListener('click', () => {
        selects.classList.toggle('catalog__selects_active');
    })
};

toggleSelects();
