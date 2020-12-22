//メニューボタンのクリックイベント
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

//メニューのスクロール機能
  $(function(){
    $('a[href^=#]').click(function(){
      var speed = 800;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
  });

  /*
  $(".menu__list--top").click(function(){

    $("html").animate({scrollTop:0},{duration:1000});
  });
  $(".menu__list--profile").click(function(){

    $("html").animate({scrollTop:800},{duration:1000});
  });
  $(".menu__list--skill").click(function(){

    $("html").animate({scrollTop:1600},{duration:1000});
  });
  $(".menu__list--portfolio").click(function(){

    $("html").animate({scrollTop:2650},{duration:1000});
  });
  $(".menu__list--contact").click(function(){

    $("html").animate({scrollTop:6000},{duration:1000});
  });
  $(".TopButton").click(function(){

    $("html").animate({scrollTop:0},{duration:1000});
  });*/


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