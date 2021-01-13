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
    navigation: {
      nextEl: '.slick-next',
      prevEl: '.slick-prev',
    },
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "13px",
    readOnly: true,
    spacing: "3px"
  });

  
});