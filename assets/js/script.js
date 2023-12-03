// Mobapp Shape

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768) {
  var s = skrollr.init();
    }
});


$(document).ready(function () {

  $(".drp").click(function () {
    $(this).find(".nav_drop").toggleClass("open");
  });

  //  Mobapp Shape

  $(".shape_menu_mob").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
           prevArrow: '<button type="button" class="slick-prev">Previous</button>',
  nextArrow: '<button type="button" class="slick-next">Next</button>',

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //  Mobapp Modern Tech

  $('#pills-tab[data-mouse="hover"] a').hover(function () {
    $(this).tab("show");
  });

  $('#pills-tab[data-mouse="hover"] a:first').tab("show");

  $(".modern_tech_mb").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Mobapp Your Vision

  $(".vision_sec_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Mobapp Methodology

  $('#techno_tab[data-mouse="hover"] button').hover(function () {
    $(this).tab("show");
  });

  $('#techno_tab[data-mouse="hover"] button:first').tab("show");


  $(".meth_mob").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:true,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
        },
      },
    ],
  });

// Mobapp App Gallery

$(".app_gallery_lst_mbl").slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:true,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true,
        },
      },
    ],
  });
});
