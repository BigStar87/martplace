$(function(){

  $('.slider__carousel').slick({
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next')
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "16px",
    readOnly: true,
    spacing: "5px"
  });
  
});