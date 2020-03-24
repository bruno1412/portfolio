$(function(){
  $(".MenuButton").click(function(){
    $(".HeaderNav").fadeIn(1000);
    $(this).toggleClass("active");

    if($(this).hasClass("active")){
            var text = $(this).data("text-clicked");
        } else {
            var text = $(this).data("text-default");
            $(".HeaderNav").fadeOut(1000);
        }

		$(this).html(text);
  });
  $(".menu__list--top").click(function(){

    $("html").animate({scrollTop:0},{duration:1000});
  });
  $(".menu__list--profile").click(function(){

    $("html").animate({scrollTop:800},{duration:1000});
  });
  $(".menu__list--skill").click(function(){

    $("html").animate({scrollTop:1550},{duration:1000});
  });
  $(".menu__list--portfolio").click(function(){

    $("html").animate({scrollTop:3750},{duration:1000});
  });
  $(".menu__list--contact").click(function(){

    $("html").animate({scrollTop:6000},{duration:1000});
  });
  $(".TopButton").click(function(){

    $("html").animate({scrollTop:0},{duration:1000});
  });
  $(".portfolio__block").on({
    "mouseenter":function(){
      $(".portfolio__HoverBlock").fadeIn(1000);
    },
    "mouseleave":function(){
      $(".portfolio__HoverBlock").fadeOut(1000);
    }
  });
  $(".portfolio__block--chatspace").on({
    "mouseenter":function(){
      $(".portfolio__HoverBlock--chatspace").fadeIn(1000);
    },
    "mouseleave":function(){
      $(".portfolio__HoverBlock--chatspace").fadeOut(1000);
    }
  });
  $(".portfolio__block--mercari").on({
    "mouseenter":function(){
      $(".portfolio__HoverBlock--mercari").fadeIn(1000);
    },
    "mouseleave":function(){
      $(".portfolio__HoverBlock--mercari").fadeOut(1000);
    }
  })
});