// burger menu  sidebar
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon')
const sidebar = document.querySelector('.sidebar')

// Клик по кнопке для скрытия / показа фильтра и изменения  иконки
sidebarToggleBtn.onclick = function(){
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};


// show more 3 cards button 
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

//  Клик по кнопке и показ трех карточек
btnShowMoreCards.addEventListener('click', function() {
    hiddenCards.forEach(function(card) {
        card.classList.remove('card-link--hidden');
    })
})


// show/hide widgets
const widgets = document.querySelectorAll('.widget');

// Находим все виджеты на странице
widgets.forEach(function(widget){
    // Слушаем клик внутри виджета
    widget.addEventListener('click', function(e) {
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active')
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    })
})


// location - кнопка Любая
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]')

// Выбор кнопки Любая и отключение других чекбоксов
checkBoxAny.addEventListener('change', function(){
    if (checkBoxAny.checked) {
        topLocationCheckboxes.forEach(function(item){
            item.checked = false;
        })
    }
});

// Отключаем кнопку Любая при выборе других параметров
topLocationCheckboxes.forEach(function(item){
    item.addEventListener('change', function(){
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }
    })
})