var mySwiper = new Swiper('#swiper1.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    // Navigation arrows
    navigation: {
        nextEl: '.scroll-right',
        prevEl: '.scroll-left',
    },
    spaceBetween: 34,
})
var swiper = new Swiper('#swiper2.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay:{
        delay: 5000,
    },
  });
