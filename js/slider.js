// Fashion Product Slider
var swiper = new Swiper(".mySwiper1", {
    spaceBetween: 0,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
    992: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    576: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
    320: {
      slidesPerView: 5,
      spaceBetween: 5,
    }
    }
  });
  
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".card-swiper-btn-next",
      prevEl: ".card-swiper-btn-prev",
    },
    thumbs: {
      swiper: swiper,
    },
});