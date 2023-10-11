$(function(){
    $(".logo_container").hide().fadeIn(1000);
  });

$(window).scroll(function(){
      $(".about_block, #quarterly-title, .food_container, .math_container, .footer_container, .info_container").each(function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if(bottom_of_window > bottom_of_object){
          $(this).animate({'opacity':'1'},800);
        }
      });
    });