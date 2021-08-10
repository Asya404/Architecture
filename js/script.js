$(document).ready(function () {

   $('.project-nav ul li').click(function () {
      $('.project-nav ul li').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
      $('.project-items').isotope({
         filter: selector
      });
      return false;
   });

   $('.project-items').isotope({
      itemSelector: '.project-item',
      layoutMode: 'masonry',
      setTimeout: -1
   });

   $(".slider1").owlCarousel({
      items: 3,
      center: true,
      loop: true,
      nav: true,
      dots: false,
      navText: ["<i class='brands__arrow brands__arrow--l icon-arrows-circle-right'></i>", "<i class='brands__arrow brands__arrow--r icon-arrows-circle-left'></i>"],
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true
   });

   $(".slider2").owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      navText: ["<i class='testimonial__arrow testimonial__arrow--l icon-arrows-left-double-32'></i>", "<i class='testimonial__arrow testimonial__arrow--r icon-arrows-right-double'></i>"]
   });

});