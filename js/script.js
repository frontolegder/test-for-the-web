$(document).ready(function(){
   
    /* умное липкое меню */
    var header = $('.header'),
	scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
    
        if ( scrolled > 40 && scrolled > scrollPrev ) {
            header.addClass('header_out');
        } else {
            header.removeClass('header_out');
        }
        scrollPrev = scrolled;
    });

    /* появление input  для search */
    $(function(){
        if ( $(window).width() > 1100 ) {
            $('#search').click(function(){
                $('input').fadeToggle('slow');
            });
        }
    });

    /* перекидываем .tel и .search при ширине экрана от 1660 */
    $(function(){
        if ( $(window).width() < 1660 ) {
            $('.tel, .search').appendTo('.forTelSearch');
        }
    });
    /* перекидываем .tel и .search при ширине экрана от 1100 */
    $(function(){
        if ( $(window).width() <= 1100 ) {
            $('.tel, .search').prependTo('.menu');
        }
    });

    /* выезжающее подменю сверху */
    
    $('.submenu').hide();
    $(function(){
        if ( $(window).width() > 1100 ) {
            $('.sferi').hover(
                function () {
                    $('.submenu', this).stop().slideDown(400);
                }, 
                function () {
                    $('.submenu', this).stop().slideUp(400);            
            });
        }
        if ( $(window).width() <= 1100 ) {
            $('.sferi').click( function(){
                $('.submenu').slideToggle(400);
            });
               
        }
    });

    /* перекидываем .submenu  в menu при клике на .sferi для дапативной вёрстки */

    $(function(){
        if ( $(window).width() <= 1100 ) {
            $('.sferi').click( function(){
                $(".sferi").after($(".submenu"));
            });
               
        }
    });

    /* работа гамбургера */
    $('.hamburger').click(function() {
        $('.hamburger').toggleClass('hamburger_active');
        $('.menu').toggleClass('menu_active');
    });
    
});