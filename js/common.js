$(function() {

$(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
    e.stopPropagation();
  });

function headerSticky() {
    if ($(window).scrollTop() > 150) {
      $('.navbar.fixed-top').addClass("sticky");
    } else {
      $('.navbar.fixed-top').removeClass("sticky");
    }
  };
  $(window).scroll(function() {
    headerSticky();
  });
  headerSticky();

$('#dark-mode').on('change', function() {
  if ($(this).is(':checked')) {
    $('body').addClass('dark-mode');
    darkModeChart();
  }
  else {
    $('body').removeClass('dark-mode');
    lightModeChart();
  }
});

$(".sandwich").on("click", function() {
    $(this).toggleClass("active");
  });

Waves.attach('.wave');
  Waves.attach('.wave-2',  ['waves-light']);
  Waves.init();

$(window).enllax();

AOS.init({
duration: 2000,
// disable: 'mobile'
});


$(".navbar a[href*='#']").mPageScroll2id({
  scrollSpeed: 900, 
  offset: 50

  });
  

 })

