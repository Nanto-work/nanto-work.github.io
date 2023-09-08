const START_COOK = 2;

$(document).ready(function() {

	let showScreen1 = true;

	$("#sharebox-btn").on("click", function() { // show/hide sharebox
		$("#sharebox").toggleClass("js-open");
	});

	let urlParams = window.location.search.replace('?','').split('&').reduce(function(p,e) {
			let a = e.split('=');
			p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
			return p;
		},
		{}
	);

	if(+urlParams['cook'] >= 1 && +urlParams['cook'] <= 3){
		showScreen1 = false;
		$(".main").addClass("js-remove-screen1");
	};

	if(showScreen1) { // toggle down screen1
		
		$("#screen2-btn").on("click", function() {
			showScreen1 = false;
			$(".main").addClass("js-hide-screen1");
		});
		
		$(window).on("wheel", function(e) {
			if(e.originalEvent.deltaY !== 0){
				if(e.originalEvent.deltaY > 0){
					showScreen1 = false;
					$(".main").addClass("js-hide-screen1");
				}
			}
		});

		$(function() {
			$(".screen1").swipe( {
				swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
					if(direction == "up" || direction == "down") {
						showScreen1 = false;
						$(".main").addClass("js-hide-screen1");
					}
				}
			});
		});
	}

	startingAnim(); // wait images for starting animation
	initChangeCook(urlParams); // init cook change
	initChangeFood(urlParams); // init recipe change
	discountSlider(); // init discount slider
	initVideo(); // init video
	toggleMenu(); // show/hide menu

});


function startingAnim() { // wait images for starting animation
	$(".header-imgbox").waitForImages(function() {
		$(this).addClass("js-load");
	});
}


function discountSlider() { // init discount slider
	$(".discount-slider-wrap").waitForImages(function() {
		$(".discount-slider-wrap").slick({
			centerMode: true,
			centerPadding: "0",
			variableWidth: true,
			appendArrows: ".discount-slider-nav",
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	});
}

function initChangeCook(urlParams) { // init cook change

	let currentCook = START_COOK;
	
	if(urlParams.hasOwnProperty('cook')) {
		if(+urlParams['cook'] >= 1 && +urlParams['cook'] <= 3){
			currentCook = +urlParams['cook'];
		};
	}
		
	$(".cooks-slider-item[data-cook=" + currentCook + "]").addClass("js-show"); // show default cook
	$(".footer-wrap-item_" + currentCook).addClass("js-show"); // hide default cook in footer
	
	$(".js-cook-prev").on("click", function() {
		
		currentCook--;
		if(currentCook < 1) {
			currentCook = 3
		}
		changeCookAction(currentCook); // handler for cook change
	});

	$(".js-cook-next").on("click", function() {
		currentCook++;
		if(currentCook > 3) {
			currentCook = 1
		}
		changeCookAction(currentCook); // handler for cook change
	});

	$(".js-cook-link").on("click", function() {
		currentCook = +$(this).data('cook');
		changeCookAction(currentCook); // handler for cook change
	});
}

function initChangeFood(urlParams) {

	let currentFood = 1;
	
	if(urlParams.hasOwnProperty('food')) {
		if(+urlParams.food >= 1 && +urlParams.food <= 3){
		 	currentFood = +urlParams.food;
		};
	}
	
	$(".food-slider-item-top[data-food=" + currentFood + "]").addClass("js-show");
	$(".food-slider-item-bottom[data-food=" + currentFood + "]").addClass("js-show");
	
	$(".js-food-prev").on("click", function() {
		
		currentFood--;
		if(currentFood < 1) {
			currentFood = 3
		}
		changeFoodAction(currentFood);
	});

	$(".js-food-next").on("click", function() {
		
		currentFood++;
		if(currentFood > 3) {
			currentFood = 1
		}
		changeFoodAction(currentFood);
	});
}

function changeCookAction(currentCook) {  // handler for cook change
	$(".cooks-slider-item.js-show").fadeOut(300, "linear", function(){
		$(this).removeClass("js-show");
		$(".cooks-slider-item[data-cook=" + currentCook + "]").fadeIn(300, "linear", function(){
			$(this).addClass("js-show");
		});
	});

	$(".footer-wrap-item.js-show").fadeOut(300, "linear", function(){
		$(this).removeClass("js-show");
		$(".footer-wrap-item_" + currentCook).css("display", "flex").hide().fadeIn(300, "linear", function(){
			$(this).addClass("js-show");
		});
	});
}

function changeFoodAction(currentFood) {
	$(".food-slider-item-top.js-show").fadeOut(300, "linear", function(){
		$(this).removeClass("js-show");
		$(".food-slider-item-top[data-food=" + currentFood + "]").fadeIn(300, "linear", function(){
			$(this).addClass("js-show");
		});
	});

	$(".food-slider-item-bottom.js-show").fadeOut(300, "linear", function(){
		$(this).removeClass("js-show");
		$(".food-slider-item-bottom[data-food=" + currentFood + "]").fadeIn(300, "linear", function(){
			$(this).addClass("js-show");
		});
	});	
}

function initVideo() {

	$(".cooks-slider-video__play").on("click", function() {
		let videoWrap = $(this).closest(".cooks-slider-video"),
			video = $(videoWrap).find("iframe")[0].contentWindow;
			videoOverlay = $(videoWrap).find(".cooks-slider-video__overlay");
		
		$(videoOverlay).fadeOut();
		video.postMessage('{"event": "command", "func": "playVideo", "args": ""}', "*");
		$(videoWrap).addClass("js-playing");
	});
}

function toggleMenu() {
	$(".header-burger").on("click", function() {
		$("#mob-menu").addClass("js-show")
	});

	$(".header-close").on("click", function() {
		$("#mob-menu").removeClass("js-show")
	});
}