//@@include("webp.js")
//@@include("mobile-menu-adaptive.js")
//@@include("menu-open.js")
$(document).ready(function () {
  $(".mail-slogan__slider").slick({
    arrows: false, //Кнопки - стрелки
    dots: true, //Буллеты
    adaptiveHeight: false, //подстройка по высоте при вкюченном align-items: flex-start;
    slidesToShow: 1,//Количество отображаемых элементов
    slidesToScroll: 1,//Количество слайдов для прокрутки 
    speed: 1000,//Скорость прокрутки
    easing: "linear",//Тип анимации
    infinite: true,//Зацикленность
    initialSlide: 0,//Начальный слайд
    autoplay: true,//Автовоспроизведение
    autoplaySpeed: 3000,//Скорочть воспроизведения
    pauseOnFocus: true,//Пауза при фокусе
    pauseOnHover: true,//Пауза при наведении
    pauseOnDotsHover: true,//Пауза при наведении на буллеты
    draggable: false,//Управление мышью
    swipe: false,//Свайп на телефоне
    touchThreshold: 5,//Величина свайпа для перехода
    touchMove: false,//Пережвижение по слайдеру тачем
    WaitForAnimate: true,//Ожидание окончания предыдущего пролистывания
    centerMode: true,//Выбранный слайд по центру
    variableWidth: false,//Вариативная ширина (не подстраивать ширину под настройки слайдера)
    fade: true,//Смена слайдов через fade (Должен отображаться только 1 слайд)
  });
  // если для изображений указать значение не в src а в data-lazy,
  // то загрузка будет происходить не сразу, а только при переходе на слайд
  // https://kenwheeler.github.io/slick/
});