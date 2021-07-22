document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tab--btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.js-tab-content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active');
            });
            document.querySelectorAll('.tab--btn').forEach(function(tabBtn) {
                tabBtn.classList.remove('tab-content-active-btn');
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
            document.querySelector(`[data-path="${path}"]`).classList.add('tab-content-active-btn');
        });
    });
    document.querySelectorAll('.grid__swich-item').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.js-itt').forEach(function(tabContent) {
                tabContent.classList.remove('content-active2');
            });
            document.querySelectorAll('.grid__swich-item').forEach(function(swich) {
                swich.classList.remove('grid__swich-item--active');
            });
            document.querySelectorAll(`[data-target="${path}"]`).forEach(function(tabs) {
                tabs.classList.add('content-active2');
            });
            document.querySelectorAll(`[data-path="${path}"]`).forEach(function(swich) {
                swich.classList.add('grid__swich-item--active');
            });
        });
    });
    const mapInnerClose = document.querySelector('.map__inner--close');
    const mapInner = document.querySelector('.map__inner');
    const mapOpen = document.querySelector('.map__inner--open');
    mapInnerClose.addEventListener('click', function() {
        mapInner.classList.remove('map__inner--active');
        mapOpen.classList.add('map__inner--active');
    });
    mapOpen.addEventListener('click', function() {
        mapInner.classList.add('map__inner--active');
        mapOpen.classList.remove('map__inner--active');
    });
});




// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76006824, 37.61865977],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 13
    });
    var myPlacemark = new ymaps.Placemark([55.76986729, 37.63801459], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map.svg',
        iconImageSize: [12, 12],
        iconImageOffset: [0, 0]
    });
    myMap.geoObjects.add(myPlacemark);
};