$(function () {

   $(".menu a, .header__link, .footer a").on("click", function (e) {
      e.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
   });

   $('.menu__burger, .menu__list').on('click', function () {
      $('.menu__burger, .menu__list').toggleClass('menu__list--active');

   });

   $(window).scroll(function () {
      if ($(document).scrollTop() > 1) {
         $('.menu').addClass('menu-fixed');
      }
      else {
         $('.menu').removeClass('menu-fixed');
      }
   });

   var mixer = mixitup('.works__items');
}); 