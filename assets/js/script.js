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
    // $.scrollify({
    //   section : ".scrollhere",
    //   sectionName : "section-name",
    //   easing: "easeOutExpo",
    //   scrollSpeed: 1000,
    //   offset : -80,
    //   setHeights: false,
    //   scrollbars: false,
    //   before:function() {},
    //   after:function() {}
    // });
    
    $('li').click(function() {
      $.scrollify.move('#' + $(this).attr('id'))
    })
    
    $('li').hover(function() {
      $(this).toggleClass('isHover');
    })
  })()


  $(document).ready(function () {
    



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
  // var h1 = $("#h1").position();
  // var h2 = $("#h2").position();
  // var h3 = $("#h3").position();

  // $('.link1').click(function() {
  //   $('html, body').animate({
  //     scrollTop: h1.top
  //   }, 500);
  //   return false;

  // }); // left menu link2 click() scroll END

  // $('.link2').click(function() {
  //   $('html, body').animate({
  //     scrollTop: h2.top
  //   }, 500);
  //   return false;

  // }); // left menu link2 click() scroll END

  // $('.link3').click(function() {
  //   $('html, body').animate({
  //     scrollTop: h3.top
  //   }, 500);
  //   return false;

  // }); // left menu link3 click() scroll END


  // for popup checkbox
  $( ".inpradio" ).on( "click", function() {
    var type = $( ".inpradio:checked" ).val();
    $('#inputState').html('');
    if(type == 'car'){
    $('#inputState').append('<option selected>Choose type of service</option>'+
                            '<option>Car Service</option>'+
                            '<option>Car Spa</option>'+
                            '<option>Car Accessories</option>'+
                            '<option>Roadside Assist</option>');
    }else if(type == 'bike'){
      $('#inputState').append('<option selected>Choose type of service</option>'+
                            '<option>Bike Services</option>'+
                            '<option>Bike Spa</option>'+
                            '<option>Bike Accessories</option>'+
                            '<option>Roadside Assist</option>');

    }
  });

});