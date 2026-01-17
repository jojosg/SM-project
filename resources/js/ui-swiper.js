var swiper = new Swiper(".slide-intro", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".slide-intro .swiper-pagination",
    type: "fraction",
    clickable: true,
  },
});

var swiper = new Swiper(".slide-studio", {
  loop: true,
  slidesPerView: 1.2,
  spaceBetween: 20,
  pagination: {
    el: ".slide-studio .swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
