// Подключение функционала "Чертогов Фрилансера"
import AOS from "aos";
import { isMobile, menuClose } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// До/После слайдер

const slider = document.querySelector('.slider-before-after');

if (slider) {
    let isActive = false;
    const before = document.querySelector('.before');
    const beforeImage = before.querySelector('img');
    const change = document.querySelector('.change');
    const body = document.body;

    document.addEventListener('DOMContentLoaded', () => {
        let width = slider.offsetWidth;
        beforeImage.style.width = `${width}px`;
    });

    change.addEventListener('mousedown', () => {
        isActive = true;
    });

    body.addEventListener('mouseup', () => {
        isActive = false;
    });

    body.addEventListener('mouseleave', () => {
        isActive = false;
    });

    const beforeAfterSlider = (x) => {
        let shift = Math.max(0, Math.min(x, slider.offsetWidth));
        before.style.width = `${shift}px`;
        change.style.left = `${shift}px`;
    };

    const pauseEvents = (e) => {
        e.stopPropagation();
        e.preventDefault();
        return false;
    };

    body.addEventListener('mousemove', (e) => {
        if (!isActive) {
            return;
        }

        let x = e.pageX;
        x -= slider.getBoundingClientRect().left;
        beforeAfterSlider(x);
        pauseEvents(e);
    });

    change.addEventListener('touchstart', () => {
        isActive = true;
    });

    body.addEventListener('touchend', () => {
        isActive = false;
    });

    body.addEventListener('touchcancel', () => {
        isActive = false;
    });

    body.addEventListener('touchmove', (e) => {
        if (!isActive) {
            return;
        }

        let x;

        let i;
        for (i = 0; i < e.changedTouches.length; i++) {
            x = e.changedTouches[i].pageX;
        }

        x -= slider.getBoundingClientRect().left;

        beforeAfterSlider(x);
        pauseEvents(e);
    });
}

//========================================================================================================================================================

// Выделение текущего пукнта меню проекта

const projectLinks = document.querySelectorAll('.nav-main-projects__link');

if (projectLinks.length) {
    projectLinks.forEach(link => {
        if (link.href == window.location.href) {
            link.classList.add('_current');
        }
    })
}

//========================================================================================================================================================

// Отступ сверху в зависимости от высоты header

const header = document.querySelector('.header.header_home');

if (header) {
    function marginHeader() {
        if (window.location.href == header.querySelector('.header__logo').href) {
            window.innerWidth > 991 ? header.classList.add('_main') : header.classList.remove('_main');
        }
        if (header.classList.contains('_main')) {
            document.querySelector('main.page').style.paddingTop = `${header.offsetHeight + 150}px`;
        } else {
            document.querySelector('main.page').style.paddingTop = `${header.offsetHeight}px`;
        }
    }
    window.addEventListener('resize', marginHeader);
    document.addEventListener('DOMContentLoaded', marginHeader)
}

//========================================================================================================================================================

// Бургер меню

const burgerMenu = document.querySelector('.menu-burger');
const burgerMenuOverlay = document.querySelector('.burger__overlay')

if (burgerMenu && burgerMenuOverlay) {
    const btnClose = burgerMenu.querySelector('.menu-burger__close');
    burgerMenuOverlay.addEventListener('click', menuClose);
    btnClose.addEventListener('click', menuClose);
}

//========================================================================================================================================================

// Добавление класса _active к родителю спойлера

const faqItems = document.querySelectorAll('.item-faq-fitodesign');

if (faqItems.length) {
    function checkFaqItem() {
        faqItems.forEach(item => {
            let itemTitle = item.querySelector('.item-faq-fitodesign__top');
            if (itemTitle && itemTitle.classList.contains('_spoller-active')) {
                item.classList.add('_active');
            } else {
                item.classList.remove('_active');
            }
        })
    }

    document.addEventListener('click', checkFaqItem);
}

//========================================================================================================================================================

// Калькулятор фитодизайна

if (document.querySelector('.price-fitodesign')) {

    const calculator = (function () {
        const re25 = document.querySelector('[data-count-econom]');
        const $map = {
            wallHeight: document.getElementsByName('wall-height')[0],
            wallWidth: document.getElementsByName('wall-width')[0],
            modulesNumber: document.querySelector('[data-count-modules]'),
            plantsNumber: document.querySelector('[data-count-plants]'),
            rent25: document.querySelector('[data-count-econom]'),
            rent30: document.querySelector('[data-count-optimum]'),
            rent34: document.querySelector('[data-count-max]'),
            typeplants1: document.getElementById('typeplants1'),
            typeplants2: document.getElementById('typeplants2'),
        };


        $map.wallHeight.value = '3500';
        $map.wallWidth.value = '2500';

        const getValue = function (key) {
            let $input = $map[key];

            return !isNaN($input.value) ? $input.value : 0;
        };

        const getRowsNumber = _ => Math.round((getValue('wallHeight') - 150) / 180); //кол-во рядов
        const getColumnsNumber = _ => Math.round(getValue('wallWidth') / 580); //кол-во столбцов
        const getProfilesNumber = _ => getColumnsNumber() * 2 + getRowsNumber(); //всего профилей
        const getModulesNumber = _ => getColumnsNumber() * getRowsNumber(); //количество модулей
        const getPlantsNumber = _ => getModulesNumber() * 4; //количество растений

        const getFlowers1Value = _ => getPlantsNumber() * 0.33; //цветы тип 1
        const getFlowers2Value = _ => 0.33 * (getPlantsNumber() - getFlowers1Value()); //цветы тип 2
        const getFlowers3Value = _ => 0.33 * (getPlantsNumber() - getFlowers1Value()); //цветы тип 3
        const getFlowers4Value = _ => getFlowers3Value() / 2; //цветы тип 4
        const getFlowers5Value = _ => getFlowers3Value() / 2; //цветы тип 5

        const getGroundValue = _ => getPlantsNumber() * 0.2;

        const getAutomaticWateringValue = _ => 1;
        const getMontageValue = _ => 1;
        const getFastenersValue = _ => 1;

        const getTotalSum = _ => {
            return Math.round(getProfilesNumber() * 200 +
                getModulesNumber() * 2500 +
                getFlowers1Value() * 89 +
                getFlowers2Value() * 480 +
                getFlowers3Value() * 480 +
                getFlowers4Value() * 700 +
                getFlowers5Value() * 700 +
                getGroundValue() * 125 +
                getAutomaticWateringValue() * 35000 +
                getMontageValue() * 20000 +
                getFastenersValue() * 5000);
        };

        const getRent25 = _ => typeplants2.checked ? Math.round(getTotalSum() * 100 / 46 * 0.65 * 0.85) : Math.round(getTotalSum() * 100 / 46 * 0.65);
        const getRent30 = _ => typeplants2.checked ? Math.round(getTotalSum() * 100 / 41 * 0.65 * 0.85) : Math.round(getTotalSum() * 100 / 41 * 0.65);
        const getRent34 = _ => typeplants2.checked ? Math.round(getTotalSum() * 100 / 35 * 0.65 * 0.85) : Math.round(getTotalSum() * 100 / 35 * 0.65);

        const recalculate = function () {
            $map.modulesNumber.innerText = getModulesNumber();
            $map.plantsNumber.innerText = getPlantsNumber();

            $map.rent25.innerText = getRent25().toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });
            $map.rent30.innerText = getRent30().toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });
            $map.rent34.innerText = getRent34().toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });
        };

        $map.typeplants1.onclick = recalculate;
        $map.typeplants2.onclick = recalculate;
        $map.wallHeight.onchange = recalculate;
        $map.wallWidth.onchange = recalculate;

        return { recalculate };
    })();

    calculator.recalculate();
}

//========================================================================================================================================================

// AOS
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // theDelayOnDebounceUsedWhileResizingWindow (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 50, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//========================================================================================================================================================

// Второй уровень меню

const menuLinks = document.querySelectorAll('.menu-burger__list > .menu-burger__item');

if (menuLinks.length) {
    menuLinks.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('_hover');
        })
        item.addEventListener('mouseout', () => {
            item.classList.remove('_hover');
            setTimeout(() => {

            }, 2000);
        })
    })
}

//========================================================================================================================================================
// Выпадающее меню

const menuItems = document.querySelectorAll('.menu-item-has-children');

if (menuItems.length) {
    menuItems.forEach(item => {
        const menuLink = item.querySelector('.menu-burger__link');
        menuLink.addEventListener('click', (e) => {
            e.preventDefault();
        })
        item.addEventListener('click', () => {
            item.classList.toggle('_active');
        })
    })
}