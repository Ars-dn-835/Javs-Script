$("#gamburger").click(function (){
   $('.header_nav').slideToggle().toggleClass('open');
   $('.header_nav').hasClass('open') ? $(this).html('x') : $(this).html('&equiv;');
});

$(document).ready(function () {
   $(".owl-carousel").owlCarousel({
      loop: true,
      center: true,
      items: 4,
      dots: true,
      autoplay: true,
      autoplayTimeout: 4500,
      margin: 0,
   });
});