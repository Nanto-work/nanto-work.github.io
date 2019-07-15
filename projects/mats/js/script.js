$(document).ready(function(){

	var wheelCounter = +$("#wheel-counter").text();

	
	$(".main-video-carousel").slick();

	
	$(".counter-decrease").on("click", function(){ //count up
		wheelCounter--;
		if(wheelCounter <= 1) { wheelCounter = 1 };
		$("#wheel-counter").text(wheelCounter);
	});
	$(".counter-increase").on("click", function(){ //count down
		wheelCounter++;
		$("#wheel-counter").text(wheelCounter);
	});

	
	$(".card-button").on("click", function(){ //toggle cards
		if($(this).hasClass("active")){ return false };
		$(".card-button.active").removeClass("active");
		$(this).addClass("active");
	});

	$("#add-card").on("click", function(){ //show add card window
		var el = document.getElementById("add");

		$("#overlay").addClass("active");
		$(el).addClass("active");
		el.scrollIntoView(true);

		return false;
	});

	$(".cards-archive-wrap").on("click", ".archive-card", function(){ //show archive card window
		var el = document.getElementById("archive");

		$("#overlay").addClass("active");
		$(el).addClass("active");
		el.scrollIntoView(true);

		return false;
	});

	$("#close-add-btn").on("click", function(){ //hide add card window
		$("#add").removeClass("active");
		$("#overlay").removeClass("active");
	});

	$("#close-archive-btn").on("click", function(){ //hide archive card window
		$("#archive").removeClass("active");
		$("#overlay").removeClass("active");
	});

	$(".arc-head-type-btn").on("click", function(){
		
		if ($(this).hasClass("active")) {return false};
		$(".arc-head-type-btn.active").removeClass("active");
		$(this).addClass("active");

		changeImgGraph();

		return false;
	});

	$(".arc-head-time-btn").on("click", function(){
		
		if ($(this).hasClass("active")) {return false};
		$(".arc-head-time-btn.active").removeClass("active");
		$(this).addClass("active");

		changeImgGraph();

		return false;
	});
});

function changeImgGraph(){// change image graph
	
	var img = ".archive-img-" + $(".arc-head-time-btn.active").attr("data-time") + $(".arc-head-type-btn.active").attr("data-type");

	$(".archive-img").removeClass("active");
	$(img).addClass("active");
};