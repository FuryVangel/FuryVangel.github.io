$(document).ready(function() {
 if (window.matchMedia('(max-width: 1024px)').matches) {
   $('.js-btn-trigger').click(function () {
     $('.js-menu').addClass('active');
     $('body').addClass('overflow');
   });

   $('.js-btn-close').click(function () {
     $('.js-menu').removeClass('active');
     $('body').removeClass('overflow');
   });

   $('.overlay').click(function () {
     $(this).removeClass('active');
     $('.js-menu').removeClass('active');
     $('body').removeClass('overflow');
   });

   $('.js-sub-menu').click(function () {
     $(this).toggleClass('active');
     $('.js-sub-menu').not(this).removeClass('active');
   });

   $('.js-footer-header').click(function () {
     $(this).toggleClass('active').next().slideToggle();
     $('.js-footer-header').not(this).removeClass('active').next().slideUp();
   });
 }
});
