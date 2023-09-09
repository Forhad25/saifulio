$(function() {

  // Wow Js Active

  new WOW().init();

  //Mobile Menu Active
  $(".mobile-menu-toggle").click(function() {
    $(".mobile-menu").slideToggle();
  }); 

  $(".mobile-menu nav li.has-submenu").click(function(){
    $(this).children("ul").slideToggle();
  });




    //Video Popup Active

    $(".video-btn a").magnificPopup({
        type: "iframe",
        iframe: {
            patterns: {
              youtube: {
                index: 'youtube.com/',
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
              },
            },
        }
    }); 

    // Counter Up Active

    $('.counter').counterUp({
      delay: 10,
      time: 1500
    });

    //Feedback Slider Active 
    
    $('.fd-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false, 
      autoPlay: true,
      loop: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1580, 
          settings: {
            slidesToShow: 2,
            centerMode: false,
          }
        }, 
        {
          breakpoint: 1180, 
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });












}); 