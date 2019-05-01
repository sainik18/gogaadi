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
      if ($('.testimonial').length) {
          $('.testimonial').owlCarousel({
              loop: true,
              margin: 30,
              items: 5,
              nav: false,
              dots: true,
              responsiveClass: true,
              slideSpeed: 300,
              paginationSpeed: 500,
              responsive: {
                  0: {
                      items: 1
                  }
              }
          })
      }
    
  });

  function changeTab(type){
      if(type == 'car'){
        $('.bikeSection').css('display','none');
        $('.carSection').css('display','block');
          
      }else if (type == 'bike'){
        $('.carSection').css('display','none');
        $('.bikeSection').css('display','block');
      }
  }

  (function() {
    $.scrollify({
      section : "section",
      sectionName : "section-name",
      easing: "easeOutExpo",
      scrollSpeed: 1000,
      offset : -50,
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