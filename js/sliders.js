const fiveElementsSwiper = new Swiper(".five-elements .swiper", {
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1.75,
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

const stageOneSwiper = new Swiper(".roadmap__stage-one .swiper", {
  spaceBetween: 40,
  autoHeight: true,
  navigation: {
    nextEl: ".roadmap__stage-one .swiper-button-next",
    prevEl: ".roadmap__stage-one .swiper-button-prev",
  },
  pagination: {
    el: ".roadmap__stage-one .swiper-pagination",
  },
});
