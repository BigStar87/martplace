$(function(){
  
  var mixer = mixitup('.products__inner');

  $('.slider__carousel').slick({
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next')
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "13px",
    readOnly: true,
    spacing: "3px"
  });

  
});