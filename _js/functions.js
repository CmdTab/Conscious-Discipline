function fitVids() {
	$(".fitvids").fitVids();
}

function carouselQuotes() {
	$(".carousel").carousel();
}

function navToggle() {
	$('#mobile_trigger').click(function() {
		$('#nav_links, #portal_links').slideToggle();
		return false;
	});
}
function dropdownTrigger() {
	$('.dropdown-trigger').click(function() {
		if($(this).hasClass( 'expanded' )) {
			$(this).removeClass( 'expanded' );
			$(this).siblings('.show-more').slideUp('slow');
			$(this).children('.icon-caret-down').css('display' , 'none');
			$(this).children('.icon-caret-right').css('display' , 'inline-block');
		} else {
			$(this).addClass( 'expanded' );
			$(this).siblings('.show-more').slideDown('slow');
			$(this).children('.icon-caret-right').css('display' , 'none');
			$(this).children('.icon-caret-down').css('display' , 'inline-block');
		}
		return false;
	});
}
function videoToggle() {
	$('#video_btn').click(function() {
		$('#video_menu').slideToggle();
		return false;
	});
}

function wayPoints() {
	jQuery('#home_edition').waypoint(function(direction) {
	   if (direction == 'down') {
	   	jQuery('.buy-btn').addClass('testing-animation');
	   }
	}, { offset: 0 });
	jQuery('#what_get').waypoint(function(direction) {
	   if (direction == 'down') {
	   	jQuery('.side-by-side .centered').addClass('animate');
	   }
	}, { offset: 400 });
	jQuery('#work_list').waypoint(function(direction) {
	   if (direction == 'down') {
	   	jQuery('.work-list li').addClass('animate');
	   }
	}, { offset: 400 });
	jQuery('#download_section_top').waypoint(function(direction) {
	   if (direction == 'down') {
	   	jQuery('.download-btn-top').addClass('testing-animation');
	   }
	}, { offset: 400 });
	jQuery('#download_section').waypoint(function(direction) {
	   if (direction == 'down') {
	   	jQuery('.download-btn').addClass('testing-animation');
	   }
	}, { offset: 400 });
	jQuery('#video_list').waypoint(function(direction) {
	   if (direction == 'down') {
	   	jQuery('.video-list li').addClass('animate');
	   }
	}, { offset: 150 });
}

function showVideo() {
	var beginEmbed = '<div class="fitvids"><iframe src="//player.vimeo.com/video/'
	var endEmbed = '?color=ffffff&amp;autoplay=1" width="1000" height="563" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>';
	jQuery('.video-toggle').click(function () {
		var whichVideo = jQuery(this).data('video');
		var videoEmbed = beginEmbed + whichVideo + endEmbed;
		jQuery('.overlay-content').html(videoEmbed);
		jQuery('.fitvids').fitVids();
		jQuery('.overlay-content').addClass('overlay-show');
		return false;
	});
}

function closeModal() {
	//Click outside content
	jQuery('.overlay').click(function () {
		jQuery('.overlay-content').removeClass('overlay-show');
		jQuery('.overlay-content').html('');
		return false;
	});
	//Esc Key
	jQuery(document).keyup(function(e) {
		if (e.keyCode === 27) {
			jQuery('.overlay-content').removeClass('overlay-show');
			jQuery('.overlay-content').html('');
		}
	});
}

function sideHeight() {
	var current = 0;
	var max = 0;
	var vw = jQuery(window).width();
	if (vw < 800) {
		jQuery('.side-by-side li .content-half, .side-by-side li .content-half').each(function() {
			current = jQuery(this).outerHeight();
			if(current > max) {
				max = current;
			}
		});
		jQuery('.side-by-side li .content-half, .side-by-side li .content-half').css('height', max);
		jQuery('.side-by-side li .content-half').css('height', 'auto');
	} else {
		jQuery('.side-by-side .content-half').each(function() {
			current = jQuery(this).outerHeight();
			if(current > max) {
				max = current;
			}
		});
		jQuery('.side-by-side .content-half').css('height', max);
	}
}

function scrollDown() {
	jQuery(".faq-scroll").click(function() {
	    jQuery('html, body').animate({
	        scrollTop: jQuery(".faq-section").offset().top
	    }, 2000);
	    return false;
	});
	jQuery("#what_to_get").click(function() {
	    jQuery('html, body').animate({
	        scrollTop: jQuery("#what_get").offset().top - 84
	    }, 2000);
	    return false;
	});
	jQuery("#tools_for_parents").click(function() {
	    jQuery('html, body').animate({
	        scrollTop: jQuery("#tools").offset().top - 84
	    }, 2000);
	    return false;
	});
	jQuery("#how_works").click(function() {
	    jQuery('html, body').animate({
	        scrollTop: jQuery("#work_list").offset().top - 84
	    }, 2000);
	    return false;
	});
	jQuery("#nav_about").click(function() {
	    jQuery('html, body').animate({
	        scrollTop: jQuery("#about").offset().top - 99
	    }, 2000);
	    return false;
	});
}

$(document).ready(function() {
	var vw = $(window).width();
	if (vw >700) {
		
	}
	dropdownTrigger();
	navToggle();
	videoToggle();
	fitVids();
	carouselQuotes();
	wayPoints();
	showVideo();
	closeModal();
	sideHeight();
	scrollDown();
});

$(window).load(function() {

});

$(window).resize(function() {
});