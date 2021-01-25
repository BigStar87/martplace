$(function(){
  
  var mixer = mixitup('.products__inner');

  $('.slider__carousel').slick({
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next')
  });

  var mySwiper = new Swiper('.followers__carousel', {
    loop: true,
    slideClass: 'followers__item',
    wrapperClass: 'followers__inner',
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.slick-next',
      prevEl: '.slick-prev',
    },
  });

  var mySwiper2 = new Swiper('.feedback__carousel', {
    loop: true,
    slideClass: 'feedback__item',
    wrapperClass: 'feedback__inner',
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "13px",
    readOnly: true,
    spacing: "3px"
  });
  
});