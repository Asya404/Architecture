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

   setTimeout(function () {
      $('.project-items').isotope({
         itemSelector: '.project-item',
         layoutMode: 'masonry'
      });
   }, 1000);

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

   /* Mobile nav */
   const btnNavEl = document.querySelector('.btn-mobile-nav');
   const headerEl = document.querySelector('.header');

   btnNavEl.addEventListener('click', function(){
      headerEl.classList.toggle('nav-open');
   });

   const sectionHeroEl = document.querySelector('.hero');
   const obs = new IntersectionObserver(function (entries) {
      const ent = entries[0];
      console.log(ent); 

      if(ent.isIntersecting === false) {
        document.querySelector('.header').classList.add('stickies');
      }
   }, 
   {
      root: null,
      threshold: 0
   });
   obs.observe(sectionHeroEl);

   $("#menu, #logo, #services").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1000);
   });
});