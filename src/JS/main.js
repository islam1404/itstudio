$(document).ready(function() {
    $(".burger__menu").click(function() {
      $(this).toggleClass("active");
      $('.header__menu').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
  });