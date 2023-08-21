$(".slider__list").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: `<button class="text-white position-absolute top-50 left-120 text-80 z-99 -translate-y-center"><ion-icon name="chevron-back-outline"></ion-icon></button>`,
  nextArrow: `<button class="text-white position-absolute top-50 right-120 text-80 z-99 -translate-y-center"><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
});
