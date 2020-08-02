//= ../../bower_components/jquery/dist/jquery.js
//= ../libs/OwlCarousel/owl.carousel.js
//= ../libs/Fancybox/jquery.fancybox.js
//= ../libs/Mmenu/jquery.mmenu.all.js
$(document).ready(function () {

	// carousel
	var owl1 = $('#carousel-1').owlCarousel({
		nav: false,
		dots: false,
		loop: true,
		responsive : {
		    0 : {
				items: 1,
		    },
		    576 : {
				items: 2,
		    },
		    768 : {
		    	items: 3,
		    },
		    992 : {
		    	items: 4,
		    },
		    1410 : {
		    	items: 6,
		    }
		}
	});
	$('.header_control-prev').click(function() {
    	owl1.trigger('prev.owl.carousel');
	})
	$('.header_control-next').click(function() {
	    owl1.trigger('next.owl.carousel');
	})

	var owl2 = $('#carousel-2').owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		loop: true
	});
	$('.club_control-prev').click(function() {
    	owl2.trigger('prev.owl.carousel');
	})
	$('.club_control-next').click(function() {
	    owl2.trigger('next.owl.carousel');
	})

	// menu
	var menu = $('#mmenu').mmenu({
		"extensions": [
            "fx-menu-slide",
            "position-left",
            "pagedim-black",
            "border-none"
        ],
        navbar: {
			add: false
        },
		}, {
			clone: true
		});
		
		var menuBtn = $('#mmenu-btn');
		var apiMmenu = menu.data('mmenu');
		menuBtn.click(function() {
			menuBtn.addClass('is-active');
			setTimeout(function() {
				apiMmenu.open();
			},200);
		});
		apiMmenu.bind('close:finish', function() {
			menuBtn.removeClass('is-active');
		});

	// tabs club-search
	var searchTab = $('#tabs').find('div');
	var searchGroup = $('.search_body');
	searchTab.click(function() {
		var index = $(this).index();
		searchTab.removeClass('active');
		$(this).addClass('active');
		searchGroup.addClass('hide');
		searchGroup.eq(index).removeClass('hide');
	});

	// tabs liders
	var searchTab2 = $('#tabs2').find('li');
	var searchGroup2 = $('.liders_body');
	searchTab2.click(function() {
		var index2 = $(this).index();
		searchTab2.removeClass('active');
		$(this).addClass('active');
		searchGroup2.addClass('hide');
		searchGroup2.eq(index2).removeClass('hide');
	});

	// product hover
	$('.product_btn').hover(function() {
		$(this).siblings($('.product_over')).addClass('product_hover');
		// $(this).siblings($('.product_over')).find('.product_over-btn').css({
		// 	'opacity': '1',
		// });	
	}, function() {
		$(this).siblings($('.product_over')).removeClass('product_hover');
		// $(this).siblings($('.product_over')).find('.product_over-btn').css({
		// 	'opacity': '0',
		// });
	});

	// search-icon-popup
	$('.search-icon').click(function() {
		$('.search-form').fadeToggle(200);
	});
	$('.search-icon--2').click(function() {
		$('.search-form').submit().fadeOut(200);
	});
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".search-form"); // тут указываем ID элемента
		var icon = $('.search-icon');
		if (!div.is(e.target)
			&& !icon.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.fadeOut(); // скрываем его
		}
	});
 
});