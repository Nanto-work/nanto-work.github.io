$(function() {

var swiper = new Swiper('.bottles-slider', {
  centeredSlides: true,
  grabCursor: true,
  effect: 'coverflow',
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  // loopPreventsSlide: false,
  // loopAdditionalSlides: 60,
  /*loopedSlides: 16,*/
  coverflowEffect: {
    rotate: 0,
    stretch: 1,
    depth: 950,
    modifier: 1.2,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      1200: {
        coverflowEffect: {
          depth: 180,
          modifier:1,
        }
      }
  }
});

$('.feedback select').select2({
  width: '100%'
});

$(document).on('click', '.faq .item', function(e) {
  if(!$(e.target).is('a')) {
    $(this).toggleClass('open');
  }
});

});

