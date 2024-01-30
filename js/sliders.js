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
