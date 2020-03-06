'use strict';

$(function () {
  var $header = $('header');
  var $window = $(window);
  var $links = $('nav a');
  var $menu = $('.menu');

  $window.scroll(updateHeader).trigger('scroll');
  $links.on('click', scrollToSection);
  $menu.on('click', toggleMenu);

  function toggleMenu() {
    $('.dropdown').slideToggle();
  }

  function updateHeader() {
    var bottomOfHeader = $header.offset().top + $header.height();
    var h2Height = $window.height();

    if (bottomOfHeader >= h2Height) {
      $header.addClass('opaque');
    } else {
      $header.removeClass('opaque');
    }
  }

  function scrollToSection() {
    var section = $(this).attr('href');
    $('body').animate({
      scrollTop: $(section).offset().top
    }, 1000, function () {
      if ($window.width() < 575) {
        $('.dropdown').slideToggle();
      }
    });
  }
});