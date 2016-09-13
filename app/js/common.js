$(document).ready(function(){
    
    
    
;(function(window, document) {
  'use strict';
  var file = '../svg/sprite_svg/sprite.svg', // путь к файлу спрайта на сервере
      revision = 1;            // версия спрайта
  if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) return true;
  var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
    request,
    data,
    insertIT = function() {
      document.body.insertAdjacentHTML('afterbegin', data);
    },
    insert = function() {
      if (document.body) insertIT();
      else document.addEventListener('DOMContentLoaded', insertIT);
    };
  if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
    data = localStorage.getItem('inlineSVGdata');
    if (data) {
      insert();
      return true;
    }
  }
  try {
    request = new XMLHttpRequest();
    request.open('GET', file, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        data = request.responseText;
        insert();
        if (isLocalStorage) {
          localStorage.setItem('inlineSVGdata', data);
          localStorage.setItem('inlineSVGrev', revision);
        }
      }
    }
    request.send();
  } catch (e) {}
}(window, document));

    //menu button
    $('.cmn-toggle-switch').click(function(){
        $('nav').toggleClass('show_menu');
        if($(window).width() <= 992){
            $(' body > span').toggleClass('over_bg'); 
        }
    });



    //menu
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 750) {$(".wrapp_top_line").css({
            backgroundColor: 'rgba(0, 0, 0, 0)',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0)',
            height:'80', position:'static'
        });

                        $('.top_line').css({lineHeight:'80px'});
                        $('.logo').css({marginTop:'10px'});




                       }else {$(".wrapp_top_line").css({
                           backgroundColor: 'rgba(25, 189, 154, 1)',
                           width:'100%', 
                           zIndex:'99',
                           boxShadow: '0 1px 1px rgba(0, 0, 0, 0.5)',
                           height:'46', position:'fixed', top:0, left:0 
                       });
                              $('.top_line').css({lineHeight:'46px'});
                              $('.logo').css({marginTop:'2px'});
                             }
    });


    (function() {

        "use strict";

        var toggles = document.querySelectorAll(".cmn-toggle-switch");

        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
            toggle.addEventListener( "click", function(e) {
                e.preventDefault();
                (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
            });
        }

    })()


    //mask
    $("#phone1, #phone2").mask("+375 99 999-99-99");

    $('#container').imagesLoaded( function() {
        //imagefill
        $('.grid_item').imagefill(); 

        //        isotope
        $('.portfolio').isotope({
            itemSelector: '.item_img',
            percentPosition: true

        });
        $('.source li').click(function(){
            $('.source li').removeClass('active_item');
            $(this).addClass('active_item');

            var selector = $(this).attr('data-filter');
            $(".portfolio").isotope({
                filter: selector,
                animationOptions: {
                    duration:500,
                    easing: 'linear',
                    queue: false,
                }

            });
            return false;

        });

    });

    //magnificPopup
    $('.bg_grid_item a').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }

    });
    
    //owlCarousel
    $('.owl-carousel').owlCarousel({
        items:1,
        nav:true,
        navText:'',
        loop:true,
        autoplay:true,
        smartSpeed:1500,
        autoplayTimeout:8000,
        autoplayHoverPause: true
    });

    //    mPageScroll2id
    $(".link_menu").mPageScroll2id();



    $(".form").submit(function() {
        $.ajax({
            type: "POST",
            url: "../mail.php",
            data: $(this).serialize()
        }).done(function() {
            //            			alert("Спасибо за заявку! Скоро мы с Вами свяжемся.");

            //чтобы  был перехад на страницу
//            $(location).attr('href','http://www.torman.by/#popup_window'); 
//
//            setTimeout(function() {
//                // Done Functions
//                $(".form").trigger("reset");
//                //				выдержака и переход назад
//
//
//                $(location).attr('href','http://www.torman.by');
//            }, 3000);
            
            $('.popup_wrapp').fadeIn();
               setTimeout(function() {
                // Done Functions
                $(".form").trigger("reset");
             $('.popup_wrapp').fadeOut();
            }, 3000);
            
            
            

        });
        return false;
    });







});