/*
 * Custom
 */
//= partials/app.js

$( document ).ready(function() {
  $(document).on('click', function(event) {
    if($(event.target).hasClass('menu-icon')) {
      if($('.menu-icon').hasClass('menu-icon-active')) {
        $('.menu-icon').removeClass('menu-icon-active');
        $('.main-menu').hide();
      } else {
        $('.menu-icon').addClass('menu-icon-active');
        $('.main-menu').show();
      }
    } else {
      $('.main-menu').hide();
      $('.menu-icon').removeClass('menu-icon-active');
    }
  });
});