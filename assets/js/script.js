$(function() {
    "use strict";
  
    var nav_offset_top = $('header').height() + 50; 
      /*-------------------------------------------------------------------------------
        Navbar 
      -------------------------------------------------------------------------------*/
  
      //* Navbar Fixed  
      function navbarFixed(){
          if ( $('.header_area').length ){ 
              $(window).scroll(function() {
                  var scroll = $(window).scrollTop();   
                  if (scroll >= nav_offset_top ) {
                      $(".header_area").addClass("navbar_fixed");
                  } else {
                      $(".header_area").removeClass("navbar_fixed");
                  }
              });
          };
      };
      navbarFixed();
  
      //------- Parallax -------//
    skrollr.init({
      forceHeight: false
    });
  

      /*-------------------------------------------------------------------------------
        testimonial slider
      -------------------------------------------------------------------------------*/
      // if ($('.testimonial').length) {
      //     $('.testimonial').owlCarousel({
      //         loop: true,
      //         margin: 30,
      //         items: 5,
      //         nav: false,
      //         dots: true,
      //         responsiveClass: true,
      //         slideSpeed: 300,
      //         paginationSpeed: 500,
      //         responsive: {
      //             0: {
      //                 items: 1,
      //                 margin: 0,
      //             }
      //         }
      //     })
      // }

    
  });

  function changeTab(type){
      if(type == 'car'){
        $('.bikeSection').css('display','none');
        $('.carSection').css('display','block');
        $('.bikeBtn').css('background-color','#ffffff');
        $('.carBtn').css('background-color','#f2f2f2');
          
      }else if (type == 'bike'){
        $('.carSection').css('display','none');
        $('.bikeSection').css('display','block');
        $('.bikeBtn').css('background-color','#f2f2f2');
        $('.carBtn').css('background-color','#ffffff');
      }
  }

  (function() {
    $.scrollify({
      section : ".scrollhere",
      sectionName : "section-name",
      easing: "easeOutExpo",
      scrollSpeed: 1000,
      offset : -80,
      setHeights: false,
      scrollbars: false,
      before:function() {},
      after:function() {}
    });
    
    $('li').click(function() {
      $.scrollify.move('#' + $(this).attr('id'))
    })
    
    $('li').hover(function() {
      $(this).toggleClass('isHover');
    })
  })()


  $(document).ready(function () {
    $('a.ourservices').click(function() {
    $('html, body').animate({
      scrollTop: $("section.ourservices").offset().top- 80
    }, 1000)
  }), 
    $('a.howwework').click(function (){
      $('html, body').animate({
        scrollTop: $("section.howwework").offset().top -80
      }, 1000)
    }),
    $('a.aboutus').click(function (){
      $('html, body').animate({
        scrollTop: $("div.aboutus").offset().top -80
      }, 1000)
    }),
    $('a.testimonials').click(function (){
      $('html, body').animate({
        scrollTop: $("section.testimonials").offset().top -80
      }, 1000)
    })



    // for scroll top 
    // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD

  /*************************************
    LEFT MENU SMOOTH SCROLL ANIMATION
   *************************************/
  // declare variable
  var h1 = $("#h1").position();
  var h2 = $("#h2").position();
  var h3 = $("#h3").position();

  $('.link1').click(function() {
    $('html, body').animate({
      scrollTop: h1.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  $('.link2').click(function() {
    $('html, body').animate({
      scrollTop: h2.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  $('.link3').click(function() {
    $('html, body').animate({
      scrollTop: h3.top
    }, 500);
    return false;

  }); // left menu link3 click() scroll END

});