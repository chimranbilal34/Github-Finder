(function(){

	// Init global DOM elements, functions and arrays
  	window.app 			 				= {el : {}, fn : {}};
	app.el['window']     				= $(window);
	app.el['document']   				= $(document);
    app.el['body']     				    = $('body');
    app.el['back-to-top'] 				= $('.back-to-top');
	app.el['html-body'] 				= $('html,body');
	app.el['animated']   				= $('.animated');
	app.el['loader']        			= $('#loader');
	app.el['mask']          			= $('#mask');
	app.el['header']          			= $('header');
	app.el['navbar-nav'] 				= $('.navbar-nav li.dropdown');

	$(function() {	
	    // Preloader
	    app.el['loader'].delay(700).fadeOut();
	    app.el['mask'].delay(1200).fadeOut("slow");   


		// On hover, open drop down
        //app.el['navbar-nav'].on({
	     //   mouseenter: function() {
	     //     $(this).addClass('open');
	     //   }, mouseleave: function() {
	     //     $(this).removeClass('open');
	     //   }
        //});

		// fade in .back-to-top
		app.el['window'].scroll(function () {
			if ($(this).scrollTop() > 500) {
				app.el['back-to-top'].fadeIn();
			} else {
				app.el['back-to-top'].fadeOut();
			}
            shrinkHeader();
		});

        function shrinkHeader(){
            if( $(this).scrollTop() > 100 ){
                app.el['header'].addClass('shrink');
            } else {
                app.el['header'].removeClass('shrink');
            }
        }
        shrinkHeader();

		// scroll body to 0px on click
		app.el['back-to-top'].click(function () {
			app.el['html-body'].animate({
				scrollTop: 0
			}, 1500);
			return false;
		});

		// Elements animation
		// app.el['animated'].appear(function() {
		// 	var element = $(this);
		// 	var animation = element.data('animation');
		// 	var animationDelay = element.data('delay');
		// 	if(animationDelay) {
		// 		setTimeout(function(){
		// 			element.addClass( animation + " visible" );
		// 			element.removeClass('hiding');
		// 		}, animationDelay);
		// 	} else {
		// 		element.addClass( animation + " visible" );
		// 		element.removeClass('hiding');
		// 	}    			
		// }, {accY: -150});

        //Hide opened subnav on body click
        // app.el['body'].bind('click', function(e) {
            // if($(e.target).closest('.navbar').length == 0) {
                // var opened = $('.navbar-collapse').hasClass('collapse in');
                // if ( opened === true ) {
                    // $('.navbar-collapse').collapse('hide');
                // }
            // }
        // });

        //Open subnav on hover
        $('.navbar .dropdown').hover(function() {
            if(app.el['window'].width()>769){
                $(this).find('.dropdown-menu').first().stop(true, true).delay(300).slideDown();
            }
        }, function() {
            if(app.el['window'].width()>769){
                $(this).find('.dropdown-menu').first().stop(true, true).delay(300).slideUp();
            }
        });
        //Enable Subnav Parent to be clicked
        if(app.el['window'].width()>769){
            $('.navbar .dropdown > a').click(function(){
                location.href = this.href;
            });
        }


        // Close Subnav on resize
        app.el['window'].resize(function(){
            $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
        });

        //Sticky Nav
        var hidingPoint = 50;
        var appearPoint = 650;
        var navBar = $('.navbar-sticky');
        $(window).scroll(function () {
            if ($(this).scrollTop() > hidingPoint) {
                navBar.addClass('opaque');
            } else {
                navBar.removeClass('opaque');
            }

            if ($(this).scrollTop() > appearPoint) {
                navBar.addClass('stick');
                navBar.removeClass('opaque')
            } else {
                navBar.removeClass('stick');
            }
        });

        $("#home-slider").owlCarousel({
            navigation : true,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            pagination: false,
            autoPlay : 4000,
            items:1,
            navigationText : [''],
            transitionStyle : "fadeUp",
            addClassActive:true,
            loop: true,
        });
		$(document.documentElement).keyup(function (event) {    
			var owl = $("#home-slider");

			// handle cursor keys
			if (event.keyCode == 37) {
			   // go left
			   owl.trigger('owl.prev');
			} else if (event.keyCode == 39) {
			   // go right
			   owl.trigger('owl.next');
			}

		});

        $('.image-bg').each(function(){
            $(this).css({
                'background':'url('+$(this).find('.image-bg-source').attr('src')+')'
            })
        });

        $('.open-popup').magnificPopup({
            type:'inline',
            midClick: true
        });

        function adaptheader(){
			var height = $('header').height();
			if (height < 135){
				height = 135;
			}
            $('.header-filler').css({
                'height': height
            });
        }
        adaptheader();
		
		$(document).ready(function(){
            adaptheader();
		});

        $(window).resize(function(){
            adaptheader();
        });


        //Sent Message
        function GetQueryStringParams(sParam)
        {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++)
            {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam)
                {
                    return sParameterName[1];
                }
            }
        }
        var messageSent = GetQueryStringParams('sent');
        if(messageSent == 'true'){
            alert('Message Sent!')
        }


	});

})();
