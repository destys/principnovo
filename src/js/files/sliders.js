/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Autoplay, EffectFade, Navigation, Pagination, Thumbs, EffectCoverflow } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.partners__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.partners__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,


			// Эффекты
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				474: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
				1268: {
					slidesPerView: 6,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.intro-project__slider')) { // Указываем скласс нужного слайдера
		let projectThumbs = new Swiper('.intro-project__slider_thumbs', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 10,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,
			lazy: true,
			preloadImages: false,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.nav-project-intro__prev',
				nextEl: '.nav-project-intro__next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 2,
				},
				474: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
				},
				992: {
					slidesPerView: 6,
				},
				1268: {
					slidesPerView: 8,
				},
			},
		})

		// Создаем слайдер
		let projectSlider = new Swiper('.intro-project__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Thumbs, EffectFade],
			slidesPerView: 1,
			spaceBetween: 0,

			autoHeight: true,
			speed: 800,
			effect: 'fade',
			lazy: true,
			// preloadImages: false,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.nav-project-intro__prev',
				nextEl: '.nav-project-intro__next',
			},

			thumbs: {
				swiper: projectThumbs,
			},
		});
	}
	if (document.querySelector('.section-content-project__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.section-content-project__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			// Пагинация

			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.section-content-project__nav .swiper-button-prev',
				nextEl: '.section-content-project__nav .swiper-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.team-designing__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.team-designing__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация

			pagination: {
				el: '.team-designing__pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.team-designing__prev',
				nextEl: '.team-designing__next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 20,
					autoHeight: true,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
				1268: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.reviews__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация

			pagination: {
				el: '.reviews__pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.nav-reviews__prev',
				nextEl: '.nav-reviews__next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.gallery-gardener__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.gallery-gardener__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			// Пагинация

			pagination: {
				el: '.reviews__pagination',
				clickable: true,
			},

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.gallery-gardener__prev',
				nextEl: '.gallery-gardener__next',
			},

			// Брейкпоинты

			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.demo__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.demo__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, EffectCoverflow, Pagination],
			// effect: "coverflow",
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			spaceBetween: 50,
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			},

			navigation: {
				prevEl: '.nav-demo__prev',
				nextEl: '.nav-demo__next',
			},

			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});