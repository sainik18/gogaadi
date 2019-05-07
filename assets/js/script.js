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
  });