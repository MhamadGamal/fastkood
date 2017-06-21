$(document).ready(function () {


	"use strict"

  $('.nav li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    //smoth scroll to div
    $('.nav li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);

    });
    //trigger mixitup
    $('#Container').mixItUp();

    $(function () {

        console.log('first');
        $('html').niceScroll();
        console.log('second');
    }
        );


				$('.count-number').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 1000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});
		$(window).load(function(){
			$('.pageloading img').fadeOut(2000,function(){
				$(this).parent().fadeOut(3000);
			});
		});
		//scroll
		var scrolling = $('#scroll-top');
		$(window).scroll(function(){
			if ($(this).scrollTop() >= 200){
				scrolling.show();
			}
			else {
				scrolling.hide();
			}
		});
		scrolling.click(function(){
			$('html,body').animate({scrollTop : 0},2000);
		});

});
