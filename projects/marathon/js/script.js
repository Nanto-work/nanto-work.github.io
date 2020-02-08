$(document).ready(function(){

// carousels init
	if ($.exists($(".carousel-head-wrap"))) {
		
		$(".carousel-head-wrap").slick({
			arrows: false,
			dots: true,
			appendDots: $(".carousel-head-control")
		});
	};

	if ($.exists($(".story-carousel-wrap"))) {
		
		$(".story-carousel-wrap").slick({
			appendArrows: $(".story-carousel-control")
		});
	};

//show successful registration window
	$(".submit-btn").on("click", successShow);


	$(".thanks__video").parent().click(function () {
		
		if ($(this).children(".thanks__video").get(0).paused){
			$(this).children(".thanks__video").get(0).play();
			$(this).children(".playpause").fadeOut();
		} else {
			$(this).children(".thanks__video").get(0).pause();
			$(this).children(".playpause").fadeIn();
		}
	});
});

jQuery.exists = function(selector) {
	return ($(selector).length > 0);
}

function successShow() { //show successful registration window
	
	var container = $("#overlay");
	
	$(container).addClass("active");
	
	$(container).on("click", function(e) {
		if(container.has(e.target).length === 0){
        	successHide();
	    }
	});

	return false;
}

function successHide() {
	
	$("#overlay").removeClass("active");

	return false;
}