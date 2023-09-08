$(document).ready(function() {

	topSlider(); // init top slider
	backToTop(); // scroll to top btn
	horizontalScroll(".section-slider");
	initVideo();
	showNav(); // show/hide navigation
	expandDesc();
});


function topSlider() { // init top slider
	$(".top-slider").waitForImages(function() {
		$(".top-slider").slick({
			dots: true,
			appendDots: $(".top-slider-dots"),
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			fade: true,
			cssEase: 'linear'
		});
	});
}

function backToTop() { // scroll to top btn
	$(window).on("scroll", function() {
		if($(this).scrollTop() > 0) {
			$(".btn-top").addClass("js-active");
		} else {
			$(".btn-top").removeClass("js-active");
        }
	});

	$(".btn-top").on("click", function() {
		$("body, html").scrollTop(0);
	});
}

function horizontalScroll(el) {
	let scrollContainer = document.querySelector(el);
	
	scrollContainer.addEventListener("wheel", (evt) => {
    	evt.preventDefault();
    	scrollContainer.scrollLeft += evt.deltaY;
	});
}

function initVideo() {
	const player = new Plyr("#player", {
		quality: {
			default: 1080
		}
	});
	
	$(".plyr__video-wrapper iframe").on("load", () => {
		let iframeHead = $(".plyr__video-wrapper iframe").contents().find("head"),
			iframeCSS = "<style>.ytp-pause-overlay-controls-hidden .ytp-pause-overlay{display: none !important;}.ytp-chrome-top{display: none !important;}</style>";
		
		$(iframeHead).append(iframeCSS);
	});
}

function showNav() {
	$(".header-burger").on("click", function() {
		$(".header").toggleClass("js-open");
	});
}

function expandDesc() {
	$(".top-slider-item-textbox-collapse__bg").on("click", function() {
		$(this).closest(".top-slider-item-textbox-collapse").toggleClass("js-open");
	})
}