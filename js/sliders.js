const mainSwiper = new Swiper(".main-slider .swiper", {
  spaceBetween: 40,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1480: {
      slidesPerView: 1.25,
    },
    1600: {
      slidesPerView: 1.5,
    },
  },
  navigation: {
    nextEl: ".main-slider .swiper-button-next",
    prevEl: ".main-slider .swiper-button-prev",
  },
  pagination: {
    el: ".main-slider .swiper-pagination",
  },
});

const fiveElementsSwiper = new Swiper(".five-elements .swiper", {
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    464: {
      slidesPerView: 2.5,
    },
    576: {
      slidesPerView: 3.5,
    },
    744: {
      slidesPerView: 5,
    },
  },
});
