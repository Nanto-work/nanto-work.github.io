var PAUSE = 500,
	PAUSE_SCROLL=1500;


$(document).ready(function() {

	$(window).scroll(function() {
		$('#h_phone').removeClass("sticky");

		animateFixed();
	});

	$.easing.easeOutBounce = function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	};

	$("#sb_link").click(function(){
		var idscroll = $(this).attr("href");

		$('#h_phone').hide();
		$.scrollTo(idscroll, PAUSE_SCROLL, {easing:"easeOutBounce"});
		var timerIdScroll = setTimeout(function() {
				$('#h_phone').css("top", "0").show();
				animateFixed();
				clearTimeout(timerIdScroll);
			}, PAUSE_SCROLL);
		return false;
	});
});

function animateFixed() {

	var scrollOffsetOld,
		scrollOffsetNew;

	var timerIdOld = setTimeout(function(){
		scrollOffsetOld = $(document).scrollTop();
	}, PAUSE);

	var timerIdNew = setTimeout(function(){
		var scrollOffsetNew = $(document).scrollTop();
		if (scrollOffsetOld === scrollOffsetNew){

			$('#h_phone').css("top", (scrollOffsetNew - 5)).addClass("sticky");

			clearTimeout(timerIdOld);
			clearTimeout(timerIdNew);
		};
	}, PAUSE);
}